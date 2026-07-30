/* ============================================================================
   ALAMZ TECH — SITE CONFIG
   ----------------------------------------------------------------------------
   This is the ONLY file you need to edit to change site content.
   Everything visible on the page is rendered from this object.

   Common edits:
     - Rename the skills product ......... products[1].name  (see NAMING below)
     - Flip a product to live ............ set status: 'live' and ctaUrl on the
                                           product — they sit on adjacent lines.
                                           Do NOT add a second ctaUrl elsewhere
                                           in the same product: a repeated key
                                           silently overwrites the first one.
     - Connect the waitlist form ......... form.endpoint (see README.md)
     - Add a new product ................. copy the PRODUCT TEMPLATE at the
                                           bottom of the products array
     - Change any headline or paragraph .. the copy lives beside its section

   Anything marked TODO is a placeholder you must replace before launch.
   ========================================================================== */

window.ALAMZ = {

  /* ==========================================================================
     BRAND
     ====================================================================== */
  brand: {
    name: 'Alamz Tech',
    // Shown in the sticky header. Keep it short.
    wordmark: 'Alamz Tech',
    tagline: 'Offline-first AI & software for back-office operations, agriculture, and education.',
    // The one-liner under the tagline in the hero.
    heroSub:
      'A venture studio building practical AI for the places technology reaches last — ' +
      'designed for low bandwidth, low-cost hardware, and real African conditions.',
    // Published on the page, so it will get scraped by spam bots eventually —
    // that is the cost of showing an address at all. Swap to hello@alamztech.com
    // once the domain's mail is set up. Set to '' and the site hides every
    // mailto and leans on the message form instead; nothing breaks either way.
    email: 'alamutuhussein@gmail.com',
    location: 'Lagos, Nigeria',
  },

  /* --------------------------------------------------------------------------
     NAMING — settled: the skills product is CloudPath.
     Vendor-neutral (it is expanding past AWS), matches the repo name, and
     reads as both "path through the cloud" and "path to a cloud career".

     If it is ever renamed again, it is still a one-line change: set
     products[1].name. Nothing else in the site references it by name.
     ---------------------------------------------------------------------- */

  /* ==========================================================================
     NAVIGATION — order here is the order in the header
     ====================================================================== */
  nav: [
    { label: 'Approach',  href: '#approach'  },
    { label: 'Focus',     href: '#focus'     },
    { label: 'Products',  href: '#products'  },
    { label: 'Edge',      href: '#edge'      },
    { label: 'Founder',   href: '#founder'   },
  ],

  /* ==========================================================================
     SOCIAL — order here is the order in the footer.
     An entry with an empty `url` is hidden entirely, so you can add a channel
     before it exists. To add Medium later, append:
       { label: 'Medium', url: 'https://medium.com/@yourhandle' },
     ====================================================================== */
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/alamz-technology/' },
    { label: 'GitHub',   url: 'https://github.com/alamz-tech' },
  ],

  /* ==========================================================================
     FORM SERVICE
     --------------------------------------------------------------------------
     The site is fully static — no server. Submissions go to a free third-party
     service via a plain POST. Until it is configured, the form says so plainly
     instead of pretending to send.

     --------------------------------------------------------------------------
     WEB3FORMS is the default: no account, no password, unlimited submissions
     on the free tier. You give them an email address, they post back an access
     key. That key is the only thing you need.

       1. Go to https://web3forms.com
       2. Enter the inbox you want submissions delivered to (a personal Gmail is
          fine — it is never shown on the site and can be changed later).
       3. They email you an access key. Paste it into `accessKey` below.
       4. Done. `endpoint` is already correct for Web3Forms.

     The key is not a secret in the dangerous sense — it only permits sending
     mail to the address you registered, so it is safe in public client-side
     code. That is the whole design of these services.

     To use FORMSPREE instead (50 submissions/month, needs an account):
       service:   'formspree'
       endpoint:  'https://formspree.io/f/xxxxxxxx'   (from their dashboard)
       accessKey: ''
     Nothing else changes — the subject-line field name is the only real
     difference and app.js already handles both.
     ====================================================================== */
  form: {
    service: 'web3forms',
    endpoint: 'https://api.web3forms.com/submit',

    accessKey: '',                // TODO ← paste your Web3Forms access key here

    // Prefixes the notification email subject, e.g.
    // "Alamz Tech — Join the waitlist — Offline LLM Engine"
    subjectPrefix: 'Alamz Tech —',

    // Shown if `endpoint` is still empty. Kept honest and actionable: it does
    // not promise delivery, because nothing would be delivered.
    unconfiguredNotice:
      'This form is not connected yet, so nothing would reach us. Please try again shortly.',

    privacyNote: 'We use your details only to contact you about our products. No list-selling, no spam.',
  },

  /* ==========================================================================
     STATUS SYSTEM
     --------------------------------------------------------------------------
     Each product has a status. The status drives three things automatically:
       1. the badge shown on the card
       2. the CTA label
       3. what the CTA does — 'form' opens the shared form with the field set
          below; 'link' is a plain button straight to the product.

     To add a new status, add a key here. Give it a `tone` of
     'cool' | 'warm' | 'live' for badge colour, or add your own in styles.css
     (search for: STATUS BADGES).
     ====================================================================== */
  statuses: {

    'in-development': {
      label: 'In development',
      tone: 'cool',
      action: 'form',
      cta: 'Join the waitlist',
      form: {
        heading: 'Join the waitlist',
        intro: 'We will email you when this is ready to try. Early signups get first access to pilots.',
        submit: 'Join the waitlist',
        success: 'You are on the list. We will be in touch before anyone else hears about it.',
        fields: [
          { name: 'name',     label: 'Name',            type: 'text',     required: true  },
          { name: 'email',    label: 'Email',           type: 'email',    required: true  },
          { name: 'interest', label: 'What draws you to this?', type: 'textarea', required: false,
            help: 'Optional. One line is plenty — it helps us build the right thing first.' },
        ],
      },
    },

    'pilot': {
      label: 'Pilot — applications open',
      tone: 'warm',
      action: 'form',
      cta: 'Apply to beta-test',
      form: {
        heading: 'Apply to the pilot cohort',
        intro:
          'The pilot is a small, selected group. We read every application and reply either way. ' +
          'We are looking for people who will actually finish, not the largest possible list.',
        submit: 'Send application',
        success: 'Application received. We review in batches and will reply either way — watch your inbox.',
        fields: [
          { name: 'name',   label: 'Name',  type: 'text',  required: true },
          { name: 'email',  label: 'Email', type: 'email', required: true },
          { name: 'laptop', label: 'Do you have regular access to a laptop?', type: 'select', required: true,
            options: ['Yes, my own', 'Yes, shared or borrowed', 'No, phone only'],
            help: 'Phone-only is not a disqualifier — it changes which track we put you on.' },
          { name: 'commitment', label: 'Hours you can commit each week', type: 'select', required: true,
            options: ['Under 3 hours', '3–5 hours', '6–10 hours', 'More than 10 hours'] },
          { name: 'why', label: 'Why you?', type: 'textarea', required: true,
            help: 'A few sentences. What are you aiming at, and what have you already tried?' },
        ],
      },
    },

    'live': {
      label: 'Live',
      tone: 'live',
      action: 'link',          // no form — send a ready user straight to the product
      cta: 'Open the product',
    },

  },

  /* ==========================================================================
     SECTION 2 — APPROACH (the thesis)
     ====================================================================== */
  approach: {
    eyebrow: 'The model',
    heading: 'We build the products ourselves, prove them, then spin out the ones that work.',
    body: [
      'Alamz Tech is a venture studio, not an agency and not a fund. We pick a real operational problem in one of three sectors, build a focused product against it in-house, and put it in front of real users under real conditions. What earns its keep gets resourced and spun up. What does not gets killed early and cheaply.',
      'One engineering edge runs through all of it: AI that holds up where connectivity, hardware budgets and data plans are the binding constraint — which is most of the continent, most of the time.',
    ],
  },

  /* ==========================================================================
     CONNECTIVITY MODEL
     --------------------------------------------------------------------------
     Why this exists: "offline-first" read as an absolute invites an obvious
     objection — a Telegram coach plainly needs a network. Stating the spectrum,
     and where each product sits on it, turns that objection into a proof point.
     A reviewer who was about to catch you out instead sees a team being precise.

     `segments` (0–3) drives the little meter: how much network the product
     needs. Fewer filled segments is better, so an empty meter is the good one.
     Each product below names one of these tier ids.
     ====================================================================== */
  connectivity: {
    eyebrow: 'Connectivity budget',
    heading: 'Offline-first is a spectrum, and we say where every product sits on it.',
    body:
      'Not everything can run with the network unplugged, and pretending otherwise would be a ' +
      'sales pitch rather than an engineering position. What is true across the portfolio is that ' +
      'connectivity is treated as a scarce, metered, unreliable resource that has to be budgeted — ' +
      'never as something we can just assume. A product either runs with no network at all, or it ' +
      'is built to survive one that keeps failing.',
    tiers: [
      {
        id: 'none',
        label: 'No network',
        segments: 0,
        meaning: 'Runs with the connection unplugged. Nothing leaves the machine, so there is no data cost and no privacy exposure.',
      },
      {
        id: 'low',
        label: 'Intermittent',
        segments: 1,
        meaning: 'Text-first, over channels people already pay for. Works on 2G, survives a dropped signal, and picks up where it left off rather than starting over.',
      },
      {
        id: 'always',
        label: 'Always-on',
        segments: 3,
        meaning: 'Streaming video, heavy web apps, a cloud call per keystroke. The default assumption of most AI products, and the reason they do not travel.',
        outOfScope: true,
        outOfScopeNote: 'We do not build here.',
      },
    ],
  },

  /* ==========================================================================
     SECTION 3 — FOCUS AREAS
     --------------------------------------------------------------------------
     `state` is deliberately honest and differs per vertical. Grant reviewers
     read three identical confident cards as marketing; they read an honest
     maturity gradient as a team that knows where it actually is.
     ====================================================================== */
  verticals: [
    {
      name: 'Back-office operations',
      state: 'Product in development',
      tone: 'cool',
      body:
        'Small businesses run on invoices, mobile-money reconciliation and tax paperwork done by hand, ' +
        'often with no reliable internet and no budget for cloud software. We are building an assistant ' +
        'that does this work entirely on the machine in front of you.',
      icon: 'ledger',
    },
    {
      name: 'Agriculture',
      state: 'Focus area — no product yet',
      tone: 'quiet',
      body:
        'Advisory and record-keeping tools reach farmers last, because they assume a data plan and a ' +
        'smartphone. This is an active area of research for us. We are not shipping here yet, and we ' +
        'would rather say so.',
      icon: 'seed',
    },
    {
      name: 'Education',
      state: 'Most developed — pilot forming',
      tone: 'warm',
      body:
        'Technical training that gets someone to a paying job, without expensive hardware, paid lab ' +
        'accounts or a reliable connection. This is where our work is furthest along.',
      icon: 'path',
    },
  ],

  /* ==========================================================================
     SECTION 4 — PRODUCTS
     --------------------------------------------------------------------------
     status:  key from `statuses` above — drives badge + CTA + form fields
     ctaUrl:  only used when status is 'live' (or to override a form CTA).
              Leave '' and the button is hidden entirely.
     ctaLabel: optional. Overrides the status default label.
     facts:   short, TRUE, verifiable lines. Shown as a spec strip on the card.
              Keep these current — they are the most credible thing on the page.
     ====================================================================== */
  products: [

    {
      id: 'offline-llm',
      name: 'Offline LLM Engine',
      kicker: 'The core several Alamz products are built on',
      /* — flip these three to go live; they are deliberately adjacent — */
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: '',
      connectivity: 'none',          // tier id from `connectivity.tiers`
      vertical: 'Back-office operations',
      body:
        'A reproducible pipeline that takes a multilingual open base model, fine-tunes it for ' +
        'informal-sector back-office work — invoicing, mobile-money reconciliation, local tax and ' +
        'compliance — and quantizes it to a single file that runs entirely offline on an ordinary ' +
        '8 GB laptop with no GPU. One command rebuilds the exact model.',
      note: 'Built for the Africa Deep Tech Challenge 2026 (Laptop LLM Challenge).',
      facts: [
        '100% offline',
        '8 GB RAM, no GPU',
        'Q4_K_M GGUF via llama.cpp',
        'Reproducible: one command',
      ],
    },

    {
      id: 'cloudpath',
      name: 'CloudPath',
      kicker: 'Training for the jobs AI creates, not the ones it removes',
      /* — flip these three to go live; they are deliberately adjacent — */
      status: 'pilot',
      ctaUrl: '',
      ctaLabel: '',
      connectivity: 'low',           // tier id from `connectivity.tiers`
      vertical: 'Education',
      body:
        'An AI coach on Telegram that takes someone from zero to certification-ready in cloud and ' +
        'infrastructure roles. Hands-on labs run in free tiers that need no credit card and no ' +
        'expensive hardware, so cost is never the reason someone drops out. Grading is deterministic — ' +
        'a script or a repo check either passes or it does not — and the security practice is built ' +
        'into the curriculum rather than bolted on at the end.',
      // This is the honest answer to "but a Telegram bot needs the internet".
      note:
        'This one needs a network — so it is built for a bad one. Telegram was chosen because it is ' +
        'the cheapest channel in data terms that learners already have: text-first, usable on 2G, and ' +
        'interruption-tolerant. Lose signal mid-lesson and your progress is checkpointed, not lost. ' +
        'No video streaming, no app to download, no data plan we have not budgeted for.',
      facts: [
        'Cloud fundamentals track complete',
        '30 lessons, 105 quiz items',
        'Free labs, no credit card',
        'Text-only — no video, no app install',
      ],
      // Shown as a small roadmap line under the body. Empty array hides it.
      roadmap: [
        'Second cloud provider track (drafting)',
        'Kubernetes certification readiness',
        'Terraform certification readiness',
      ],
    },

    /* ------------------------------------------------------------------------
       PRODUCT TEMPLATE — copy this block, uncomment it, fill it in.
       Nothing else needs to change: the card, badge, CTA and form all follow
       from `status`. Delete `roadmap` and `note` if you do not need them.

    {
      id: 'my-product',                    // unique, lowercase, no spaces
      name: 'Product name',
      kicker: 'One line that says why it exists',
      status: 'in-development',            // 'in-development' | 'pilot' | 'live'
      ctaUrl: '',                          // required only when status is 'live'
      ctaLabel: '',                        // optional label override
      connectivity: 'low',                 // 'none' | 'low' | 'always'
      vertical: 'Agriculture',             // must match a name in `verticals`
      body: 'Two or three honest sentences about what it does and for whom.',
      note: '',
      facts: ['True fact', 'True fact', 'True fact'],
      roadmap: [],
    },

    ---------------------------------------------------------------------- */

  ],

  /* ==========================================================================
     SECTION 5 — THE EDGE
     --------------------------------------------------------------------------
     `rules` are stated as engineering constraints rather than benefits. This is
     the differentiator; it is stated once, here, and nowhere else.
     ====================================================================== */
  edge: {
    eyebrow: 'Why offline-first',
    heading: 'Most AI assumes cheap data, steady power, good hardware and a cloud budget. We design backwards from the opposite.',
    body:
      'Every one of those assumptions fails somewhere on this continent, and they usually fail together. ' +
      'Treating that as the normal case rather than the edge case changes what you build, not just how ' +
      'you deploy it. It is a moat, not a compromise — software built this way also happens to be ' +
      'cheaper to run, private by default, and considerably harder to copy.',
    // Stated in the order they are applied: each only matters once the one
    // above it holds. Rule 1 fails often — rules 2 and 3 are what you do then.
    rules: [
      { rule: 'Run on the device whenever the work will fit there',
        because: 'No inference bill, no round trip, and the data never leaves the machine.' },
      { rule: 'When it cannot, spend the smallest connection that will do',
        because: 'Text over a channel someone already pays for, not video over one they do not.' },
      { rule: 'Assume the connection drops mid-task',
        because: 'Work is checkpointed and resumable. Losing signal costs a learner nothing.' },
      { rule: 'Budget for the hardware people already own',
        because: 'An 8 GB laptop with no GPU is the target, not the fallback.' },
      { rule: 'Build on free and low-cost tiers end to end',
        because: 'A learner who needs a credit card to start has already been excluded.' },
    ],
  },

  /* ==========================================================================
     SECTION 6 — FOUNDER
     ====================================================================== */
  founder: {
    eyebrow: 'Who is behind it',
    name: 'Hussein Alamutu',
    role: 'Founder & Engineer',
    initials: 'HA',   // fallback only — shown if `photo` is empty or fails to load
    // Already cropped to a square head-and-shoulders at 600x600 (41 KB). To
    // swap it, drop a new file at the same path — square works best. If you use
    // a tall portrait instead, tune object-position on .founder__photo in
    // styles.css so the crop does not cut the face off.
    photo: 'assets/founder.jpg',
    body: [
      'Computer engineer with a background in DevOps and platform engineering, and in technical ' +
      'project management — including remote delivery for US companies. The work has been mostly ' +
      'the unglamorous kind: making systems reliable, reproducible and cheap to operate.',
      'Alamz Tech applies that to a market where those constraints are much sharper. Every product ' +
      'here is built and shipped hands-on rather than specified and outsourced.',
    ],
  },

  /* ==========================================================================
     SECTION 7 — CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Partnering, piloting, or reviewing an application?',
    body:
      'We are actively looking for pilot partners — training centres, SMEs and agricultural ' +
      'organisations willing to put an early product in front of real users. If you run a programme ' +
      'or are reviewing one of our applications, get in touch and we will answer properly.',

    // Shown when `brand.email` is empty. Once you set a real address, the
    // mailto link appears alongside this button automatically.
    cta: 'Send us a message',
    form: {
      heading: 'Get in touch',
      intro: 'Goes straight to the founder. We reply to everything that is not spam.',
      submit: 'Send message',
      success: 'Message received. You will get a reply from the founder, usually within a day or two.',
      fields: [
        { name: 'name',  label: 'Name',  type: 'text',  required: true },
        { name: 'email', label: 'Email', type: 'email', required: true,
          help: 'So we can reply. Nothing else is done with it.' },
        { name: 'organisation', label: 'Organisation', type: 'text', required: false },
        { name: 'reason', label: 'What is this about?', type: 'select', required: true,
          options: [
            'Pilot partnership',
            'Grant, accelerator or programme',
            'Investment',
            'Working together / hiring',
            'Something else',
          ] },
        { name: 'message', label: 'Message', type: 'textarea', required: true },
      ],
    },
  },

  /* ==========================================================================
     FOOTER
     ====================================================================== */
  footer: {
    // The studio's own claim about the site. Keep it true — see README.
    note: 'This site ships no webfonts, no trackers and no third-party scripts. It seemed like the least we could do.',
  },

  /* ==========================================================================
     ANALYTICS — intentionally empty.
     Paste a script tag string here if you ever add privacy-friendly analytics
     (Plausible, Fathom, GoatCounter). Leave '' for none.
     ====================================================================== */
  analytics: '',

};
