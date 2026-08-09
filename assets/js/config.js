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
    tagline: 'AI products and integration for business, built for African realities.',
    // The one-liner under the headline in the hero.
    heroSub:
      'We build AI products for business, and we integrate AI into African businesses that ' +
      'already run — engineered for the infrastructure, bandwidth and budgets they actually ' +
      'have, then deployed and kept running in production rather than working once in a demo.',
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
    { label: 'What we do', href: '#focus'    },
    { label: 'Products',  href: '#products'  },
    { label: 'Services',  href: '#services'  },
    { label: 'Founder',   href: '#founder'   },
  ],

  /* ==========================================================================
     HERO — the capability strip in the panel beside the headline.
     --------------------------------------------------------------------------
     This makes "African realities" concrete rather than a slogan. It replaced
     the on-device spec sheet that used to sit here: that sheet described one
     capability, not the studio, so it moved onto the Offline LLM Engine card
     where it belongs. Keep these honest — they are capabilities we have.
     ====================================================================== */
  hero: {
    capabilitiesLabel: 'How we build',
    capabilities: [
      { k: 'Deployment',  v: 'Shipped to production' },
      { k: 'Grounding',   v: 'RAG on your own data' },
      { k: 'Bandwidth',   v: 'Costed, not assumed' },
      { k: 'On-device',   v: 'Offline where needed' },
      { k: 'Operations',  v: 'Monitored and maintained' },
    ],
    capabilitiesFoot:
      'Most AI work stalls between a working demo and something a business can rely on. ' +
      'On this continent that gap is wider, and it is the part we do.',
  },

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
     'php' — OUR OWN ENDPOINT, once the site is on Hostinger.
     Submissions POST to contact.php, which emails them to you. No third party,
     no submission cap, and mail arrives from your own domain.

       1. Open contact.php and set $TO and $FROM at the top.
       2. Upload the whole site to Hostinger.
       3. Set endpoint below to '/contact.php'.

     NOTE: PHP does not run on GitHub Pages — it serves static files only, so
     the browser would download contact.php rather than execute it. Leave
     `endpoint` empty until the site actually moves to Hostinger; the form then
     says plainly that it is not connected instead of failing in a confusing way.

     Why not SMTP straight from the page? Because SMTP needs credentials, and
     anything in client-side JavaScript is public. They would be scraped and
     used to send spam as you. contact.php is the correct version of that idea:
     the credentials live on the server, where nobody can read them.

     --------------------------------------------------------------------------
     Alternatives, if you ever want to stay on static-only hosting:

       Web3Forms — no account, unlimited, free
         service: 'web3forms', endpoint: 'https://api.web3forms.com/submit',
         accessKey: '<key they email you>'

       Formspree — 50/month, needs an account
         service: 'formspree', endpoint: 'https://formspree.io/f/xxxxxxxx',
         accessKey: ''

     app.js handles all three; the only real difference is the subject field
     name and whether an access key is attached.
     ====================================================================== */
  form: {
    service: 'php',
    // TODO ← set to '/contact.php' once the site is live on Hostinger.
    endpoint: '',

    accessKey: '',                // only used by web3forms

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
    heading: 'We build AI products in-house, and we integrate AI into African businesses that already exist.',
    body: [
      'Alamz Tech is a product studio. We build focused AI products against real operational problems, put them in front of real users, and resource the ones that earn their keep. Alongside that we take integration work: bringing AI into a business that already runs, on its own data and inside its own systems.',
      'The two feed each other. Integration work pays now and shows us where the real problems are; products turn what we learn into something more than one company can use.',
      'One engineering thread runs through both. Getting a model to answer well is the easy half — the hard half is deployment, grounding it in data that is actually yours, and keeping it running once it matters. Here that half is harder than it is elsewhere: bandwidth is metered, power and connectivity drop, cloud spend is charged in a currency that moves against you, and there is rarely a platform team standing by. Building for those conditions is the studio\'s edge, not a caveat on it.',
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
    heading: 'How much network a thing needs is a design decision, so we state it.',
    body:
      'Running fully offline is a capability, not a house style — plenty of business AI needs to ' +
      'reach a grounded cloud model, and pretending otherwise would be a sales pitch rather than an ' +
      'engineering position. What is constant is that connectivity gets treated as a budget rather ' +
      'than an assumption. Every product below declares where it sits, and client work gets the ' +
      'same question asked at the start.',
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
     SECTION 3 — WHAT WE DO (the two offerings)
     --------------------------------------------------------------------------
     Products and Services are kept visibly separate because they are bought,
     priced and judged differently. `state` is the one-line distinction between
     them — keep it blunt.

     This replaced an earlier three-sector framing (back-office / agriculture /
     education). Do not reintroduce sectors here: the market framing lives in
     "African realities", which is about conditions, not verticals.
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two ways we work, and they are not the same thing.',
    body:
      'One is built once and used by many businesses. The other is done for one client, on their ' +
      'data, inside their systems. We keep them clearly separate because they are bought ' +
      'differently, priced differently, and succeed differently.',
    items: [
      {
        name: 'Products',
        state: 'Built once, used by many',
        tone: 'warm',
        body:
          'AI products we build and own. We pick a problem a lot of businesses share, build against ' +
          'it, and put it in front of real users. Two are underway — their honest status is on each ' +
          'card below.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'See what we are building',
      },
      {
        name: 'Services — AI integration',
        state: 'Done for one client',
        tone: 'cool',
        body:
          'We bring AI into a business that already runs: grounded in your own data, wired into your ' +
          'existing systems, then deployed and kept running. The integration is the easy part to ' +
          'promise and the hard part to operate — operating it is our edge.',
        icon: 'plug',
        href: '#services',
        linkLabel: 'How the service works',
      },
    ],
  },

  /* ==========================================================================
     SERVICES — AI integration
     --------------------------------------------------------------------------
     Deliberately a section of its own rather than another product card. The
     products-vs-services line has to be unmistakable.

     GUARDRAIL: this describes a capability we offer. Do not add client logos,
     case studies or metrics until a real engagement has completed. When one
     does, add it here as a named case study — not before.
     ====================================================================== */
  services: {
    eyebrow: 'Services',
    heading: 'We integrate AI into your business — and then we run it.',
    body:
      'Plenty of people will wire an AI model into your business. Far fewer will still be there when ' +
      'it has to work on a Monday morning with real data, real load and real consequences — on the ' +
      'connection, hardware and budget you actually have rather than the ones the tutorial assumed. ' +
      'We come from DevOps and platform engineering, so the deployment half is not an afterthought ' +
      'bolted on at the end. It is the half we are strongest at.',

    whatLabel: 'What the work is',
    what: [
      'Finding the parts of your operation where AI genuinely helps, and saying plainly where it does not',
      'Grounding a model in your own documents and data, so answers come from your business rather than the open internet',
      'Wiring it into the systems you already use, instead of adding another dashboard nobody opens',
      'Deploying it properly: monitored, versioned, access-controlled, and recoverable when something breaks',
      'Handover — your team can run it, or we keep operating it for you',
    ],

    whoLabel: 'Who it is for',
    who: [
      'African businesses that have tried an AI pilot and watched it quietly die before production',
      'Teams with real data and real workflows, not a greenfield experiment',
      'Operations where being wrong is expensive, so grounding and traceability matter',
      'Anyone running on metered bandwidth, unreliable power or a hard cloud budget',
      'Anyone who needs it to keep working after the consultants leave',
    ],

    edge:
      'The differentiator is not the integration — it is that we deploy and operate what we integrate, ' +
      'under conditions most AI vendors have never had to design for. Most AI work dies in the gap ' +
      'between a demo that impresses and a system a business can depend on. That gap is widest here.',

    cta: 'Discuss a project',
  },

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
      kicker: 'Our on-device capability, where the network cannot be assumed',
      /* — flip these three to go live; they are deliberately adjacent — */
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: '',
      connectivity: 'none',          // tier id from `connectivity.tiers`
      body:
        'A reproducible pipeline that takes a multilingual open base model, fine-tunes it for a ' +
        'specific domain, and quantizes it to a single file that runs entirely offline on an ' +
        'ordinary 8 GB laptop with no GPU. One command rebuilds the exact model. This is the ' +
        'capability we reach for when a deployment cannot depend on connectivity, cloud budget or ' +
        'sending data off the premises.',
      note: 'Built for the Africa Deep Tech Challenge 2026 (Laptop LLM Challenge).',
      facts: [
        'Runs with the network unplugged',
        'Fine-tune and quantize pipeline',
        'Reproducible: one command',
      ],

      /* The design envelope. It used to sit in the hero, where it read as the
         studio's universal build target — no longer true now that business AI
         work may run grounded cloud models. Scoped to the product it actually
         describes. Any product can carry one; omit the key to hide it. */
      datasheet: {
        label: 'Design envelope',
        rows: [
          { k: 'Connectivity', v: 'None required' },
          { k: 'Memory',       v: '8 GB' },
          { k: 'Accelerator',  v: 'No GPU' },
          { k: 'Model',        v: 'Q4_K_M GGUF' },
          { k: 'Runtime',      v: 'llama.cpp' },
        ],
        foot: 'The tightest envelope we build to, for our on-device work.',
      },
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
    eyebrow: 'How we build',
    heading: 'A demo has to impress once. A system has to be right on a Tuesday afternoon with real data.',
    body:
      'Almost all the difficulty in business AI sits after the part people demo. Getting a model to ' +
      'give a good answer in a meeting is not the hard problem; making it answer from your data, ' +
      'survive contact with production, and still be running in six months is. Most AI tooling is ' +
      'designed on the assumption of cheap bandwidth, steady power and an open cloud budget — ' +
      'assumptions that fail here, and usually fail together. These are the rules we hold both our ' +
      'own products and our client work to.',
    // Applied in this order: each only matters once the one above it holds.
    rules: [
      { rule: 'Ground it in the customer\'s own data',
        because: 'A confident answer from the open internet is worse than no answer. Retrieval beats recall.' },
      { rule: 'Ship it to production, not to a demo',
        because: 'Deployed, monitored, versioned and recoverable. Anything less is a prototype wearing a suit.' },
      { rule: 'Make it survive the conditions it will actually meet',
        because: 'Metered bandwidth, unreliable power, modest hardware, cloud spend in a currency that moves. Where the network cannot be assumed, it runs on-device.' },
      { rule: 'Show where the answer came from',
        because: 'When being wrong is expensive, traceability is not a feature — it is the requirement.' },
      { rule: 'Leave it operable by someone else',
        because: 'Documented and handed over. Work that only we can run is a liability we sold you.' },
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
      'Computer engineer with a background in DevOps, platform engineering, and in technical ' +
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
    heading: 'Building with us, integrating AI, or reviewing an application?',
    body:
      'Three kinds of conversation, all welcome here. Businesses wanting AI integrated into what ' +
      'they already run. Pilot partners willing to put an early product in front of real users. ' +
      'And programmes or reviewers looking at one of our applications. Say which you are and we ' +
      'will answer properly.',

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
            'AI integration for my business',
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
