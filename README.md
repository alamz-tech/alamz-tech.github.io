# Alamz Tech — studio site

A one-page static marketing site for a product studio that **builds AI products
for business and integrates AI into existing businesses**, with deployment and
operations as the differentiator.

No build step, no framework, no server, no database. Three files do the work:

| File | What it is |
|---|---|
| `assets/js/config.js` | **All content lives here.** This is the only file you normally edit. |
| `index.html` | Page structure and mount points. |
| `assets/js/app.js` | Renders the config into the page. You should not need to touch it. |

---

## Run it locally

It is plain HTML — you can open `index.html` by double-clicking it. But the
form and a few other bits behave more like production if you serve it over
HTTP:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>. Any static server works (`npx serve`,
`php -S localhost:4173`, VS Code Live Server).

---

## Where to edit content

Everything is in **`assets/js/config.js`**, grouped by the section it appears
in. Search the file for `TODO` — those are the placeholders that must be
replaced before you launch:

- `form.endpoint` + the two addresses at the top of `contact.php` — **the only
  thing blocking a working form.** Needs Hostinger; see *Connect the form* below.
- `index.html` — domain is already set to `https://alamztech.com` in all four
  preview tags. Nothing to do unless the domain changes.
- `social[].url` — DEV is still empty. **A link with an empty `url` is hidden
  entirely**, so there are no dead links while you gather them. LinkedIn and
  GitHub are set.
- `brand.email` — deliberately empty for now; see *Contact* below

### The logo

The founder's badge is used everywhere. It appears in three places, all the
same artwork:

| File | Where | Notes |
|---|---|---|
| `assets/logo.svg` | reference copy | Uses `currentColor`, no background rect, so one file works on any ground and follows the theme toggle. |
| `index.html` | site header | Inlined so `currentColor` applies and there is no extra request. Keep in sync with `logo.svg`. |
| `assets/favicon.svg` | browser tab | Brass hardcoded — tab chrome has no CSS context to inherit from. |
| `tools/make-og.py` | link preview card | Redrawn from the same 120×120 geometry. |

The badge already reads "ALAMZ TECH", so the header shows it **instead of** a
text wordmark rather than beside one — otherwise the name appears twice. That is
why the header is 66px and the mark 46px: the lettering has to be legible.

The four per-background files originally supplied (`logo-on-*.svg`) collapse
into the single `currentColor` version — no need to pick a file per surface.

**The lettering is outlined, not live text.** It was originally `<text>` set in
Archivo — a font nobody has installed, on a site that ships no webfonts, so it
fell back to the system sans and shifted per platform. The glyphs are now real
Archivo outlines baked into path data, so the logo renders identically
everywhere and still costs zero extra bytes.

The `ALAMZ` knockout uses `fill-rule="evenodd"` rather than a `<mask>`: the
plate rect and letter outlines are one path, so the letters fall out as holes
and the counters inside A and Z fill back in. That avoids a mask `id`, which
would collide if the SVG were inlined more than once.

To change the artwork, edit the source SVG then re-run:

```bash
python3 tools/outline-logo.py
```

It needs `Archivo[wdth,wght].ttf` (OFL, from github.com/google/fonts) at the
path set at the top of the script. macOS only — it uses CoreText.

### The link preview image

`assets/og-image.png` (1200×630) is generated, not hand-drawn — the script is at
`tools/make-og.py`. Re-run it after changing the tagline or palette:

```bash
python3 tools/make-og.py
```

It uses macOS AppKit, so it only runs on a Mac. The PNG is committed, so nobody
else needs to run it.

### Swapping the founder photo

`assets/founder.jpg` is already in place — a 600×600 head-and-shoulders crop
(41 KB), cut from your original portrait. To replace it, drop a new file at the
same path; **square crops work best.**

If the file is ever missing or the path is wrong, the section falls back to the
`HA` lettermark and logs a warning in the browser console — it never shows a
broken-image icon. That is also what you get if you clear `founder.photo`.

To re-crop from a full-length original (needs `ffmpeg`):

```bash
ffmpeg -i original.jpg -vf "crop=1400:1400:287:0,scale=600:600:flags=lanczos" -q:v 4 assets/founder.jpg
```

`crop=W:H:X:Y` — widen `W`/`H` for more shoulder, raise `Y` to sit lower.

---

## Product status — the one mechanism worth understanding

Each product has a `status`. That single value drives the badge, the CTA label,
and **what the CTA does**:

| Status | Badge | CTA | What happens |
|---|---|---|---|
| `in-development` | dashed, cool | Join the waitlist | Opens the shared form: name, email, optional interest |
| `pilot` | outlined, brass | Apply to beta-test | Same form, extra screening fields (laptop access, commitment, why you) |
| `live` | filled brass | Open the product | **No form.** A direct link to `ctaUrl`. |

### Flipping a product to live

In that product's block in `config.js`, change two adjacent lines:

```js
status: 'live',
ctaUrl: 'https://t.me/your_real_bot',
```

That is the whole change. The badge restyles, the form is replaced by a direct
link, and the link opens in a new tab. No layout or code edit.

> **One gotcha:** don't add a *second* `ctaUrl` elsewhere in the same product
> block. A repeated key in a JS object silently overwrites the first one, and
> you get no button at all. Edit the existing lines; they sit right under
> `status` for exactly this reason. If a button ever goes missing, open the
> browser console — the site logs a plain-English warning saying why.

### Adding a product

Copy the commented-out **PRODUCT TEMPLATE** at the bottom of the `products`
array, uncomment it, fill it in. The card, badge, CTA and form all follow from
`status` — there is no layout to write.

### Adding a new status

Add a key to `statuses` in `config.js` with a `tone` of `cool`, `warm` or
`live`, an `action` of `'form'` or `'link'`, and (for forms) a `fields` array.
For a new badge colour, add a `.badge--yourtone` rule in `styles.css` under
*STATUS BADGES*.

---

## Connect the form

Every form on the site — waitlist, pilot application, general enquiry, services
enquiry — posts to one endpoint. `contact.php` is that endpoint, and it emails
submissions to you. No third party, no submission cap, mail from your own
domain.

**It needs PHP, so it only works once the site is on Hostinger.** GitHub Pages
serves static files only; a visitor there would download `contact.php` rather
than run it.

1. Open `contact.php` and set the two values at the top:
   ```php
   $TO   = 'hello@alamztech.com';     // where submissions land
   $FROM = 'website@alamztech.com';   // must be on your own domain
   ```
2. Upload the site to Hostinger.
3. In `config.js`, set the endpoint:
   ```js
   form: { service: 'php', endpoint: '/contact.php', accessKey: '' }
   ```

Until `endpoint` is filled in, the form says plainly that it is not connected
rather than failing in a confusing way.

**`$FROM` must be on your domain.** Mail claiming to come from a Gmail address
but sent by Hostinger's server fails SPF and lands in spam. The sender's own
address goes in `Reply-To`, so hitting reply in your mail client still reaches
them.

### Why not SMTP straight from the page?

Because SMTP needs credentials, and anything in client-side JavaScript is
public — they would be scraped and used to send spam as you until the mailbox
got blocked. `contact.php` is the correct version of that idea: the same mail
send, but on the server where nobody can read the credentials.

### What contact.php already handles

- Rejects anything that is not a POST, and anything over 64 KB
- Honeypot — a filled `_gotcha` gets a success response and is silently dropped,
  because telling a bot it failed just makes it retry
- One submission per IP per 20 seconds
- Validates the name and email address
- **Strips CR/LF from every header value.** Without this, a newline in the name
  field lets an attacker append their own headers — a `Bcc:` to a spam list, for
  instance, sent from your server. Do not remove that guard.
- Sends every field the form submitted, whatever it was, so the field set can
  change per product status without touching the PHP
- Returns JSON; the page shows the endpoint's own message on failure, so a
  validation error or rate-limit reads properly instead of a generic "failed"

If deliverability is poor on Hostinger's `mail()`, switch to authenticated SMTP
with PHPMailer against your own mailbox — same file, only the send line changes.

### Alternatives, if you stay on static-only hosting

| Service | Cost | Setup |
|---|---|---|
| **Web3Forms** | Free, unlimited | No account. Give an email, they post back a key → `service: 'web3forms'`, `endpoint: 'https://api.web3forms.com/submit'`, `accessKey: '<key>'` |
| **Formspree** | Free, 50/month | Needs an account → `service: 'formspree'`, `endpoint: 'https://formspree.io/f/xxxxxxxx'` |

`app.js` handles all three. The only real differences are the subject field name
(`_subject` for Formspree, `subject` for the others) and whether an access key is
attached.

### What arrives in your inbox

Every submission carries a subject line and two hidden fields identifying where
it came from, so the three kinds are trivial to filter:

```
Alamz Tech — Join the waitlist — Offline LLM Engine     product_status: in-development
Alamz Tech — Apply to the pilot cohort — [SkillProduct] product_status: pilot
Alamz Tech — Get in touch — General enquiry             product_status: contact
```

The `email` field is picked up by Formspree as the reply-to, so replying in your
mail client goes straight back to the sender. A hidden honeypot catches most bot
spam without a CAPTCHA.

**Switching to Web3Forms** (unlimited submissions, no account) — same payload,
config-only change:

```js
form: { service: 'web3forms', endpoint: 'https://api.web3forms.com/submit', accessKey: 'your-key', … }
```

## Contact — while you have no email address

`brand.email` is intentionally empty. While it is:

- the contact section shows a **Send us a message** button that opens the same
  form component, rather than a `mailto:` pointing nowhere;
- the footer's Email link is hidden;
- no error message anywhere suggests emailing you.

Set `brand.email` to a real address later and the mailto link and footer entry
come back automatically — no code change. Do **not** put a placeholder address
there; a dead address on the contact section is worse than no address.

---

## Deploy

The site is the repo root — there is no build command and no output directory.

```bash
git init && git add -A && git commit -m "Alamz Tech site"
```

### GitHub Pages (current plan)

**Name the repo `alamz-tech.github.io`.** Under the `alamz-tech` org, that exact
name makes it the *organisation site*, served from the root:

```
https://alamz-tech.github.io/
```

Any other repo name makes it a *project site* served from a subpath
(`/reponame/`), which would mean fixing the absolute preview URLs. Use the
`.github.io` name and skip that entirely.

This does **not** touch `husseinalamutu.github.io`. That is your personal user
site, owned by your user account. An org gets its own separate site, and you can
have both plus unlimited project sites. They never collide.

1. Create a **public** repo named `alamz-tech.github.io` in the `alamz-tech` org.
2. Push this folder to `main`.
3. **Settings → Pages** → Source: *Deploy from a branch* → branch `main`,
   folder `/ (root)`. Leave *Custom domain* empty for now.
4. Give it a minute, then load `https://alamz-tech.github.io/`.

Pages requires a public repo on a free plan. Nothing here is secret — the
Web3Forms key only authorises sending mail to your own registered address.

`.nojekyll` is already included so Jekyll does not reprocess the files.

### Later: pointing alamztech.com at it

There is deliberately **no `CNAME` file** in this repo yet. Adding one for a
domain you do not own tells GitHub to serve only on that host, which takes the
working `.github.io` URL down. Add it at the same time as the DNS, not before.

1. Register the domain.
2. Create a file named `CNAME` at the repo root containing exactly one line:
   ```
   alamztech.com
   ```
3. Update the four absolute URLs in `index.html`:
   ```bash
   sed -i '' -E 's#(href|content)="https://alamz-tech\.github\.io#\1="https://alamztech.com#g' index.html
   ```
4. **Settings → Pages → Custom domain**: enter `alamztech.com`, save.
5. At your registrar, add:

   | Type | Name | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `alamz-tech.github.io.` |

   All four A records, not one — they are GitHub's apex IPs.

6. Once DNS propagates, tick **Enforce HTTPS**. It stays greyed out until the
   certificate is issued; that is normal, not an error.
7. Re-run the URL through the LinkedIn Post Inspector to flush the old preview.

### Hostinger (planned — needed for the form)

GitHub Pages cannot run `contact.php`. Moving to Hostinger is what turns the
form on.

1. Set `$TO` and `$FROM` in `contact.php`, and `form.endpoint` to
   `'/contact.php'` in `config.js`.
2. Upload the whole folder to `public_html` (hPanel → File Manager, or FTP, or
   connect the Git repo from hPanel → Git).
3. Create the mailbox for `$TO` and `$FROM` in hPanel → Emails, then set
   `brand.email` in `config.js` to the real address so the site shows it.
4. Point the domain at Hostinger, enable SSL, and update the four absolute URLs
   in `index.html` (see the head comment there).
5. Send one test submission and confirm it arrives.

Keep the `.nojekyll` and `?v=` cache-buster — both remain useful. `tools/` is
build-time only and does not need uploading, though it is harmless if it is.

### Other hosts

| Host | What to do |
|---|---|
| **Cloudflare Pages** | Connect the repo. Build command: *(blank)*. Output directory: `/`. Better edge coverage in West Africa than GitHub's CDN, but no PHP — the form would need Web3Forms. |
| **Netlify** | Drag the folder onto <https://app.netlify.com/drop>. No PHP either. |
| **Vercel** | Free tier prohibits commercial use — skip it for a studio site. |

### Bump the cache buster when you change CSS or JS

GitHub Pages serves assets with `Cache-Control: max-age=600`. HTML is
revalidated, assets are not — so for ten minutes after a deploy a returning
visitor can get the **new HTML with the old CSS and JS**, which renders as a
half-broken page.

The asset URLs in `index.html` carry a `?v=` token to defeat this. **Increment
it whenever `styles.css`, `config.js` or `app.js` changes** — all four
references together:

```
assets/favicon.svg?v=2
assets/css/styles.css?v=2
assets/js/config.js?v=2
assets/js/app.js?v=2
```

Content-only edits to `index.html` do not need a bump; the HTML is always
revalidated.

### After the first deploy

1. Check `https://alamz-tech.github.io/assets/og-image.png` loads in a browser.
   If it 404s the preview card renders blank — everything else can be perfect
   and the card will still fail.
2. Paste the site URL into <https://www.linkedin.com/post-inspector/>. It shows
   what LinkedIn sees and force-refreshes their cache. Do this **before** sharing
   the link, because LinkedIn keeps the first version it fetches.

---

## Design notes

- **No webfonts, no trackers, no third-party scripts.** The site loads one CSS
  file and two small JS files. That is a deliberate choice: the whole pitch is
  that software should work on a bad connection, and shipping 200 KB of fonts
  to say so would undercut it. The footer says as much — if you add a webfont
  or an analytics script later, edit `footer.note` so the claim stays true.
- **Light is the brand ground for everyone**, including visitors whose OS is in
  dark mode. Dark is fully designed and one click away via the header toggle,
  and the choice persists. To follow the visitor's OS setting instead, see the
  comment above `:root[data-theme="dark"]` in `styles.css`.
- **Analytics** are intentionally absent. If you add a privacy-friendly one
  (Plausible, Fathom, GoatCounter), paste the script tag into `config.analytics`
  as a string rather than editing `index.html`.
- **Colour carries meaning.** Warm brass = active or shipped; muted teal =
  at-rest or in development. The connectivity meter uses the same logic. Using
  either colour decoratively breaks that, so try not to.

## Honesty rules this site was built under

Worth keeping to, since grant reviewers are the primary audience:

- No metric appears unless it is true and checkable today. The numbers on the
  product cards come from the actual repos — update them when the repos change.
- Nothing is labelled `live` until it is.
- **The services section describes a capability, not a track record.** There are
  deliberately no client logos, case studies or metrics, because there are none
  yet. Add a case study when a real engagement completes — not before.
- The connectivity spectrum in the *Edge* section exists so that offline is
  stated precisely rather than as an absolute — one product runs with no network
  at all, the other is built to survive a bad one, and business AI often needs a
  grounded cloud model. Keep that distinction if you edit the copy; it is what
  stops the claim collapsing under a sharp question.
- **Offline is one capability, not the studio's identity.** The positioning is
  *AI products for business + AI integration with a deployment edge*. If you find
  yourself writing copy that makes offline-first the headline again, that is a
  regression — it was deliberately demoted.
- Don't broaden into "we do any AI for anyone." The spine above is the boundary.
