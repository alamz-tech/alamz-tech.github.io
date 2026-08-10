<?php
/* ============================================================================
   ALAMZ TECH — form endpoint
   ----------------------------------------------------------------------------
   Receives every form on the site (waitlist, pilot application, general
   enquiry, services enquiry) and emails it to you. Runs on Hostinger, or any
   host with PHP. It will NOT run on GitHub Pages — that serves static files
   only, and the browser would download this file instead of executing it.

   SETUP — two lines, both just below:
     1. $TO   — where submissions should land.
     2. $FROM — an address ON YOUR OWN DOMAIN. This matters: mail claiming to
                be from gmail.com but sent by Hostinger's server fails SPF and
                lands in spam. The sender's address goes in Reply-To instead,
                so hitting reply in your mail client still reaches them.

   Then set in assets/js/config.js:
     form: { service: 'php', endpoint: '/contact.php', accessKey: '' }
   ========================================================================== */

$TO   = 'hussein@alamztech.com';      // where submissions land
$FROM = 'hussein@alamztech.com';      // must be a real mailbox on your domain
$SITE = 'Alamz Tech';

/* -------------------------------------------------------------------------
   Everything below is machinery. You should not need to edit it.
   ------------------------------------------------------------------------- */

header('Content-Type: application/json; charset=utf-8');

function reply($ok, $message, $status = 200) {
    http_response_code($status);
    echo json_encode(['success' => $ok, 'message' => $message]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(false, 'Method not allowed.', 405);
}

/* Reject anything absurdly large before doing any work. */
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 64 * 1024) {
    reply(false, 'That message is too long.', 413);
}

/* Honeypot: hidden from people, so anything in it is a bot. Answer 200 with a
   success shape — telling a bot it failed just makes it retry. */
if (trim($_POST['_gotcha'] ?? '') !== '') {
    reply(true, 'Thank you.');
}

/* Crude flood control: one submission per IP per 20 seconds. Enough to stop a
   script hammering the endpoint without needing a database. */
$ip    = preg_replace('/[^A-Za-z0-9.:]/', '_', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
$stamp = sys_get_temp_dir() . '/alamz_' . hash('sha256', $ip);
if (file_exists($stamp) && (time() - filemtime($stamp)) < 20) {
    reply(false, 'Please wait a moment before sending again.', 429);
}
@touch($stamp);

/* --- validation ---------------------------------------------------------- */

$name  = trim($_POST['name']  ?? '');
$email = trim($_POST['email'] ?? '');

if ($name === '' || mb_strlen($name) > 120) {
    reply(false, 'Please give a name.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 200) {
    reply(false, 'That email address does not look right.', 422);
}

/* --- build the message --------------------------------------------------- */

/* Header injection guard. A newline in a header value lets an attacker append
   their own headers — a Bcc to a spam list, for instance. Strip CR and LF from
   anything that will sit in a header. This is the single most important line
   in this file; do not remove it. */
function header_safe($v) {
    return trim(str_replace(["\r", "\n", "\0"], ' ', $v));
}

$product = header_safe($_POST['product']        ?? 'Website');
$status  = header_safe($_POST['product_status'] ?? '');
$subject = header_safe($_POST['subject'] ?? ($SITE . ' — ' . $product));

/* Every other field, whatever the form sent. The field set changes with the
   product's status, so this stays generic rather than naming each one. */
$skip = ['_gotcha', 'subject', '_subject', 'access_key'];
$lines = [];
foreach ($_POST as $key => $value) {
    if (in_array($key, $skip, true) || !is_string($value)) continue;
    $label = ucfirst(str_replace('_', ' ', $key));
    $lines[] = $label . ":\n" . trim($value);
}

$body = implode("\n\n", $lines)
      . "\n\n" . str_repeat('-', 48) . "\n"
      . "Sent from the " . $SITE . " website\n"
      . "Received: " . gmdate('Y-m-d H:i:s') . " UTC\n"
      . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [
    'From: ' . $SITE . ' <' . $FROM . '>',
    'Reply-To: ' . header_safe($name) . ' <' . $email . '>',
    'Content-Type: text/plain; charset=utf-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO, $subject, $body, implode("\r\n", $headers), '-f' . $FROM);

if (!$sent) {
    error_log('[alamz] mail() failed for submission from ' . $email);
    reply(false, 'We could not send that just now. Please try again shortly.', 500);
}

reply(true, 'Thank you — we have got it.');
