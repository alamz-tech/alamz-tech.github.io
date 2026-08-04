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

- `form.accessKey` — **the only thing blocking launch.** See *Connect the form* below.
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

**Outstanding:** the badge uses live `<text>` set in **Archivo**, which is not
installed on most machines and the site ships no webfonts, so it falls back to
the system sans and the letterforms shift per platform. Re-export from the
design tool with **text converted to outlines** and replace `assets/logo.svg`,
the inline copy in `index.html`, and `assets/favicon.svg`. Nothing else changes.

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

## Connect the form — the last setup step

Everything is wired. **One value is missing: a Web3Forms access key.**

Web3Forms is the default because it needs no account and no password — you give
it an email address, it posts back a key — and the free tier is unlimited rather
than capped.

1. Go to <https://web3forms.com>.
2. Enter the inbox you want submissions delivered to. A personal Gmail is fine;
   it is never shown on the site and can be changed later.
3. They email you an access key. Paste it into `config.js`:
   ```js
   form: { service: 'web3forms', endpoint: 'https://api.web3forms.com/submit',
           accessKey: 'your-key-here', … }
   ```

That is the whole setup. The `endpoint` is already correct.

**Is the key safe in public code?** Yes. It only authorises sending mail *to the
address you registered* — someone copying it can only send you email, which they
could do anyway. That is the design of these services. Do not confuse it with an
API secret.

Until the key is set, the form says so plainly instead of pretending to send.
It does not tell people to email you instead, because there is no address yet.

### Using Formspree instead

Two values, nothing else:

```js
form: { service: 'formspree', endpoint: 'https://formspree.io/f/abcdwxyz', accessKey: '', … }
```

`app.js` handles the one real difference between them (Formspree reads
`_subject`, Web3Forms reads `subject`). Note Formspree's free tier caps at 50
submissions/month and requires an account — and on a new form it holds the first
submission until you click a confirmation link it emails you, which is easy to
mistake for a broken form.

### Other options, if you want to drop hosted forms entirely

- **Google Forms** — free and unlimited, data lands in a Sheet you own. You can
  POST to the form's `formResponse` URL from JS, but only in `no-cors` mode,
  which means the page cannot tell whether the submission succeeded. You would
  be showing a success message on faith. Not recommended here.
- **Cloudflare Pages Functions + D1** — since you are deploying to Cloudflare
  anyway, a ~20-line serverless function could write submissions to their free
  D1 database, giving you full ownership of the data and no third party. This is
  the right move *later*, once submissions are worth owning. It is a real
  backend though, with its own failure modes, and it is not worth building
  before the first signup exists.

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

### Other hosts

| Host | What to do |
|---|---|
| **Cloudflare Pages** | Connect the repo. Build command: *(blank)*. Output directory: `/`. Better edge coverage in West Africa than GitHub's CDN, but needs its nameservers. |
| **Netlify** | Drag the folder onto <https://app.netlify.com/drop>, or connect the repo. Build command: *(blank)*. Publish directory: `.` |
| **Vercel** | Free tier prohibits commercial use — skip it for a studio site. |

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
