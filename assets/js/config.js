/* ============================================================================
   ALAMZ TECH — SITE CONFIG
   ----------------------------------------------------------------------------
   Positioning: Cloud Architecture, FinOps & AI Engineering for
   Growth-Stage African Startups and Scale-ups.
   ========================================================================== */

window.ALAMZ = {

  /* ==========================================================================
     BRAND
     ====================================================================== */
  brand: {
    name: 'Alamz Tech',
    wordmark: 'Alamz Tech',
    tagline: 'Cloud architecture, FinOps, and AI engineering for African scale-ups.',
    heroSub:
      'You earn in local currency while your cloud bill compounds in USD. We help growth-stage African startups ' +
      'and scale-ups eliminate cloud waste, harden infrastructure against downtime, and ship production-grade AI across AWS, GCP, and Azure.',
    email: 'hussein@alamztech.com',
    location: 'Lagos, Nigeria',
  },

  /* ==========================================================================
     NAVIGATION — order here is the order in the header
     ====================================================================== */
  nav: [
    { label: 'Products',  href: '#products'  },
    { label: 'Services',  href: '#services'  },
    { label: 'Approach',  href: '#approach'  },
    { label: 'Founder',   href: '#founder'   },
  ],

  /* ==========================================================================
     HERO — capability strip in the panel beside the headline.
     ====================================================================== */
  hero: {
    capabilitiesLabel: 'Scale-up capabilities',
    capabilities: [
      { k: 'FinOps',      v: 'Cut USD spend & FX bleed' },
      { k: 'Cloud',       v: 'AWS · GCP · Azure' },
      { k: 'Reliability', v: 'Zero-downtime CI/CD' },
      { k: 'Security',    v: 'WAF, IAM & Compliance' },
      { k: 'AI Systems',  v: 'Production RAG & Token control' },
      { k: 'Operations',  v: 'Monitored & SLA-backed' },
    ],
    capabilitiesFoot:
      'Scaling from seed to Series A exposes technical debt and cloud cost inflation. ' +
      'We bring senior platform engineering and FinOps discipline directly into your stack.',
  },

  /* ==========================================================================
     SOCIAL
     ====================================================================== */
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/alamz-technology/' },
    { label: 'GitHub',   url: 'https://github.com/alamz-tech' },
  ],

  /* ==========================================================================
     FORM SERVICE
     ====================================================================== */
  form: {
    service: 'staticforms',
    endpoint: 'https://api.staticforms.xyz/submit',
    accessKey: 'sf_70076b1acf64cd19e5e7fc23',
    subjectPrefix: 'Alamz Tech —',
    unconfiguredNotice:
      'This form is not connected yet, so nothing would reach us. Please try again shortly.',
    privacyNote: 'We use your details only to contact you regarding your inquiry. No list-selling, no spam.',
  },

  /* ==========================================================================
     STATUS SYSTEM
     ====================================================================== */
  statuses: {

    'in-development': {
      label: 'In development',
      tone: 'cool',
      action: 'form',
      cta: 'Join the waitlist',
      form: {
        heading: 'Join the waitlist',
        intro: 'We will email you when CMP opens for private pilots. Priority onboarding for regulated fintechs and scale-ups.',
        submit: 'Join the waitlist',
        success: 'You are on the list. We will reach out directly with private alpha access details.',
        fields: [
          { name: 'name',     label: 'Name',            type: 'text',     required: true  },
          { name: 'email',    label: 'Work email',      type: 'email',    required: true  },
          { name: 'company',  label: 'Company / Scale-up', type: 'text',   required: true  },
          { name: 'interest', label: 'Primary infrastructure challenge', type: 'textarea', required: false,
            help: 'E.g., FX exposure on USD cloud bills, central bank data residency mandates, or bare-metal latency.' },
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
        intro: 'The pilot cohort is a small, selected group of scaling companies. We review every application personally.',
        submit: 'Send application',
        success: 'Application received. We review in batches and will reply either way — watch your inbox.',
        fields: [
          { name: 'name',   label: 'Name',  type: 'text',  required: true },
          { name: 'email',  label: 'Email', type: 'email', required: true },
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
      action: 'link',
      cta: 'Open the product',
    },

    'price-on-request': {
      label: 'Price on request',
      tone: 'warm',
      action: 'form',
      cta: 'Request quote',
      form: {
        heading: 'Request a service engagement quote',
        intro: 'Tell us about your infrastructure scale, monthly cloud spend, or AI initiative. We reply within two business days.',
        submit: 'Send enquiry',
        success: 'Enquiry received. We will review your architecture scope and reply within two business days.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company / Scale-up name', type: 'text', required: true },
          { name: 'cloud', label: 'Primary cloud provider', type: 'select', required: true,
            options: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Multi-cloud / Hybrid', 'On-premises / Other'] },
          { name: 'monthlySpend', label: 'Approximate monthly cloud spend', type: 'select', required: false,
            options: ['Under $3,000/mo', '$3,000 – $10,000/mo', '$10,000 – $30,000/mo', '$30,000+/mo'] },
          { name: 'timeline', label: 'Target timeline', type: 'select', required: false,
            options: ['Immediate (under 2 weeks)', '1–2 months', '3+ months', 'Exploratory'] },
          { name: 'message', label: 'Primary pain point or engagement scope', type: 'textarea', required: true,
            help: 'E.g., runaway USD cloud spend, scaling outages, migration roadmap, or deploying an AI feature to production.' },
        ],
      },
    },

  },

  /* ==========================================================================
     APPROACH (The Messy Middle)
     ====================================================================== */
  approach: {
    eyebrow: 'The scale-up reality',
    heading: 'Post-seed traction should not die on fragile infrastructure or runaway USD cloud spend.',
    body: [
      'Moving past the MVP phase into rapid growth is where technical debt catches up with African scale-ups. User traffic and transaction volumes spike, but revenue earned in local currency (naira, shillings, rands) collides head-on with cloud bills charged in depreciating US dollars. Unoptimized compute clusters, idle instances, and architecture shortcuts quickly turn into severe margin killers.',
      'At this stage, you do not need generic global cloud advice or bloated enterprise consultant decks. You need senior, hands-on platform engineering: cutting 30–50% of wasted cloud spend, replacing brittle manual deploys with automated Terraform pipelines, and hardening your perimeter against customer-facing outages.',
      'Alamz Tech operates as the embedded cloud and AI engineering partner for growth-stage African businesses. We take on the heavy architectural lifts — Well-Architected FinOps reviews, zero-downtime migrations, security hardening, and production AI integration — so your core engineering team can stay laser-focused on customer acquisition and shipping product.',
    ],
  },

  /* ==========================================================================
     WHAT WE DO
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two ways we solve infrastructure constraints for growth companies.',
    body:
      'We build sovereign infrastructure software that removes systemic market barriers, and we deliver senior cloud and AI engineering directly inside your production stack.',
    items: [
      {
        name: 'Products',
        state: 'Sovereign platforms & learning',
        tone: 'warm',
        body:
          'Software built to solve African infrastructure realities. CMP provides localized bare-metal IaaS in Nigerian data centers to eliminate FX volatility and satisfy data residency laws; EarnWithDevOps trains and certifies engineering talent.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'Explore products',
      },
      {
        name: 'Services',
        state: 'Cloud, FinOps & AI Solutions',
        tone: 'cool',
        body:
          'Targeted engineering engagements for scale-ups running on AWS, GCP, and Azure. We audit and slash cloud spend, execute zero-downtime migrations, eliminate outages, and ship reliable production AI.',
        icon: 'plug',
        href: '#services',
        linkLabel: 'Explore services',
      },
    ],
  },

  /* ==========================================================================
     PRODUCTS (Top-level section)
     ====================================================================== */
  products: [

    {
      id: 'earnwithdevops',
      name: 'EarnWithDevOps',
      kicker: 'Bridging the cloud and DevOps talent gap across African tech hubs',
      status: 'live',
      ctaUrl: 'https://ewd.alamztech.com',
      ctaLabel: 'Start learning free',
      body:
        'A chat-based coach on Telegram that takes engineers from beginner to certified in cloud and DevOps — ' +
        'AWS Cloud Practitioner, Google Associate Cloud Engineer, KCNA, Terraform Associate, and ' +
        'GitHub Actions. Hands-on labs run in real cloud environments on free tiers without requiring a credit card. ' +
        'Automated deterministic grading and spaced repetition ensure candidates master production skills and exam objectives. ' +
        'Graduates gain access to mentorship, mock technical interviews, and hiring referrals for scale-ups seeking vetted talent.',
      note:
        'Engineered text-first to run reliably across low-bandwidth connections, helping companies source and upskill local platform talent.',
      facts: [
        'Five certification tracks',
        'Real cloud labs, no credit card',
        'Deterministic automated grading',
        'Delivered on Telegram — text-first',
      ],
      roadmap: [],
    },

    {
      id: 'cmp',
      name: 'CMP — Cloud Management Platform',
      kicker: 'Localized IaaS control plane for African scale-ups, fintechs, and enterprises',
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: 'Join the waitlist',
      body:
        'A localized IaaS control plane ("AWS of Nigeria") — a FastAPI + React control layer over an ' +
        'open-source hypervisor data plane (e.g. Proxmox) running on bare-metal in Nigerian data centers. ' +
        'Engineered specifically to solve the double squeeze of currency risk and data-sovereignty mandates ' +
        'for banks, scaling fintechs, and high-volume tech companies.',
      note:
        'Provides predictable local-currency billing to eliminate FX depreciation shocks, while keeping all data in-country to satisfy Central Bank and NDPC compliance requirements with single-digit millisecond domestic latency.',
      facts: [
        'FastAPI + React control plane',
        'Open-source hypervisor data plane',
        'Bare-metal in Nigerian data centers',
        'Full data sovereignty & NGN billing',
      ],
      roadmap: [
        'Private alpha Q4 2026',
        'Fintech & scale-up compliance pilot',
      ],
    },

  ],

  /* ==========================================================================
     SERVICES (Top-level section)
     ====================================================================== */
  services: {
    eyebrow: 'Engineering Services',
    heading: 'Production cloud architecture, FinOps, and AI systems — built for scale-ups.',
    body:
      'We work with African startups and scale-ups managing active production workloads on AWS, GCP, and Azure. ' +
      'If you are experiencing currency-driven cloud bill spikes, scaling outages under customer load, ' +
      'or struggling to take an AI pilot into dependable production, our engineers implement the solution directly in your codebase.',

    certifications: [
      'Google Cloud Professional Cloud Architect',
      'Google Cloud Associate Cloud Engineer',
      'Microsoft Azure',
      'Google Cloud Generative AI Leader',
    ],

    lines: [
      {
        id: 'cloud-solutions',
        name: 'Cloud Solutions',
        subtitle: 'Multi-cloud architecture, zero-downtime migration, security hardening, and FinOps',
        description:
          'Backed by Google Cloud Professional Cloud Architect, Associate Cloud Engineer, and Microsoft Azure certifications, ' +
          'with deep production experience managing Terraform, Kubernetes, and high-availability infrastructure in fast-growing startups.',
        offerings: [
          {
            id: 'cloud-health',
            name: 'Cloud Health / Well-Architected Review',
            kicker: 'Audit existing cloud setup (AWS/GCP/Azure) against best-practice frameworks, flag risk and cost issues.',
            timeline: '1 to 2 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Well-Architected audit across AWS, GCP, and Azure reliability and operational pillars',
              'Ranked breakdown of downtime risks, single points of failure, and scalability bottlenecks',
              'Immediate identification of idle, orphaned, or over-provisioned resources causing FX margin bleed',
              'Actionable, prioritized technical remediation roadmap your team can execute immediately',
            ],
          },
          {
            id: 'cloud-migration',
            name: 'Cloud Migration & Modernization',
            kicker: 'End-to-end migration (legacy-to-cloud or cloud-to-cloud), drawing on hands-on Terraform/CI-CD experience.',
            timeline: '2 to 6 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Infrastructure as Code (Terraform) establishing modular, reproducible environments across staging and prod',
              'Automated deployment pipelines (GitHub Actions, GitLab CI) with automated smoke tests',
              'Phased database and workload cutover strategy with automated rollback contingencies and zero downtime',
              'Post-migration telemetry, benchmark validation, and comprehensive operations runbook handover',
            ],
          },
          {
            id: 'cloud-security',
            name: 'Cloud Security Hardening & Compliance',
            kicker: 'Security-first setup: WAF/Shield-equivalent protections, CDN, access controls, across all three providers.',
            timeline: '1 to 3 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Edge perimeter defense: Cloud WAF, DDoS mitigation, and CDN edge security rules',
              'Least-privilege IAM policies, automated secret rotation, and strict role separation',
              'Isolated VPC network topologies, private service endpoints, and secure database peering',
              'Centralized audit logging, compliance baselines for fintech audits, and real-time incident alerting',
            ],
          },
          {
            id: 'cloud-cost',
            name: 'Cloud Cost Optimization / Tooling (FinOps)',
            kicker: 'Help businesses navigate the AWS/GCP/Azure marketplace and cut cloud spend (FinOps angle).',
            timeline: '1 to 2 weeks or ongoing',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Deep forensic audit of monthly AWS/GCP/Azure bills to uncover hidden egress, unattached volumes, and oversized compute',
              'Commitment portfolio optimization: Reserved Instances, Savings Plans, and Committed Use Discounts (CUD)',
              'Marketplace procurement guidance to leverage partner tiers, cloud credits, and volume commitments',
              'Automated budget anomaly alerts, team cost attribution, and unit-economic cost tracking per customer',
            ],
          },
        ],
      },

      {
        id: 'ai-solutions',
        name: 'AI Solutions',
        subtitle: 'Production AI features integrated into your stack, grounded in your data, with strict cost controls',
        description:
          'We bridge the gap between impressive AI demos and reliable revenue-driving software. ' +
          'Grounded in your proprietary data, wired into existing workflows, and engineered for predictable token costs.',
        offerings: [
          {
            id: 'ai-feasibility',
            name: 'AI Feasibility Sprint',
            kicker: 'Stop burning runway on speculative AI ideas. Prove feasibility on your real data before writing full code.',
            timeline: '1 to 2 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Use case technical audit and proprietary data readiness assessment',
              'Working interactive prototype running on your actual business data samples',
              'Granular unit-cost model: token projections, latency benchmarks, and hosting architecture',
              'Unbiased build vs. do-not-build engineering recommendation backed by empirical test data',
            ],
          },
          {
            id: 'ai-feature-build',
            name: 'AI Feature Build',
            kicker: 'Custom assistant, copilot, or retrieval system built and shipped inside your existing product stack.',
            timeline: '4 to 8 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Production-grade RAG pipeline grounded in your internal documents, database records, or API endpoints',
              'Secure, low-latency API integration directly into your product frontend and microservices',
              'Hallucination guardrails, automated fallbacks, and comprehensive evaluation test suites',
              'Production observability, access controls, prompt versioning, and complete team handover',
            ],
          },
          {
            id: 'ai-in-production',
            name: 'AI in Production (Managed Retainer)',
            kicker: 'Ongoing evaluations, token cost controls, model version upgrades, and reliability management.',
            timeline: 'Monthly retainer',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Continuous output evaluation, drift detection, and real-time response quality monitoring',
              'Aggressive token spend optimization, semantic prompt caching, and latency reduction',
              'Zero-downtime model version upgrades and multi-provider redundancy (fallback routing)',
              'Prompt security patching, incident triage, and SLA-backed uptime maintenance',
            ],
          },
        ],
      },
    ],
  },

  /* ==========================================================================
     THE EDGE
     ====================================================================== */
  edge: {
    eyebrow: 'Engineering principles',
    heading: 'A demo has to impress once. A scale-up system has to be right on a Tuesday afternoon with real volume.',
    body:
      'Almost all the difficulty in business cloud and AI sits after the prototype. Surviving user traffic spikes, ' +
      'insulating margins against currency depreciation, complying with local data regulations, ' +
      'and operating inside a strict runway are the actual engineering challenges. These are the rules we hold our work to.',
    rules: [
      {
        rule: 'Ground it in the customer\'s own data',
        because: 'A confident hallucination from the open internet is fatal in fintech or healthcare. Retrieval and strict domain grounding beat generic model recall every time.',
      },
      {
        rule: 'Ship it to production, not to a demo',
        because: 'Deployed, monitored, versioned, and recoverable via Infrastructure as Code. Anything less is a prototype that will fail under production load.',
      },
      {
        rule: 'Architect for African operating realities',
        because: 'Currency depreciation, metered bandwidth, and regulatory data sovereignty must be foundational architectural constraints, never afterthoughts.',
      },
      {
        rule: 'Control costs at the architectural level',
        because: 'Unmonitored USD cloud and token bills are balance-sheet emergencies for companies earning in local currency. FinOps guardrails are active technical requirements.',
      },
      {
        rule: 'Leave it operable by your internal team',
        because: 'Modular Terraform, automated CI/CD, and transparent documentation. Architecture that only external consultants can maintain is an operational liability.',
      },
    ],
  },

  /* ==========================================================================
     FOUNDER
     ====================================================================== */
  founder: {
    eyebrow: 'Who is behind it',
    name: 'Hussein Alamutu',
    role: 'Founder & Principal Engineer',
    initials: 'HA',
    photo: 'assets/founder.jpg',
    body: [
      'DevOps and cloud engineer with five years of hands-on production experience in platform engineering, multi-cloud architecture, and technical delivery — including remote infrastructure leadership for international and US-facing teams.',
      'Holds certifications in Google Cloud Professional Cloud Architect, Google Cloud Associate Cloud Engineer, Microsoft Azure, and Google Cloud Generative AI Leader, and serves as an Andela mentor for KCNA and CKAD certification readiness.',
      'Alamz Tech applies that rigor specifically to growth-stage African startups and scale-ups. Every client engagement is delivered hands-on with Terraform, automated CI/CD, and proven FinOps methodologies.',
    ],
  },

  /* ==========================================================================
     CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Ready to cut your USD cloud spend or stabilize your production infrastructure?',
    body:
      'Whether you are a founder, CTO, or VP of Engineering navigating currency volatility on AWS/GCP, scaling outages, data residency compliance, or planning a production AI feature, let us look at your architecture.',
    cta: 'Send us a message',
    form: {
      heading: 'Get in touch',
      intro: 'Goes directly to the founder. We review every enquiry and reply within two business days.',
      submit: 'Send message',
      success: 'Message received. You will get a reply from the founder, usually within one to two business days.',
      fields: [
        { name: 'name',  label: 'Name',  type: 'text',  required: true },
        { name: 'email', label: 'Work email', type: 'email', required: true,
          help: 'So we can reply. Never shared.' },
        { name: 'organisation', label: 'Company / Scale-up name', type: 'text', required: true },
        { name: 'reason', label: 'What is this about?', type: 'select', required: true,
          options: [
            'Cloud Cost & FinOps Audit (Cut USD spend)',
            'Cloud Infrastructure & Reliability (AWS / GCP / Azure)',
            'Cloud Security Hardening & Compliance',
            'Production AI Integration',
            'CMP Localized IaaS Waitlist',
            'Something else',
          ] },
        { name: 'message', label: 'Message', type: 'textarea', required: true,
          help: 'A few details about your stack, monthly cloud spend, or current technical bottlenecks.' },
      ],
    },
  },

  /* ==========================================================================
     FOOTER
     ====================================================================== */
  footer: {
    note: 'This site ships zero webfonts, zero tracking scripts, and minimal asset weight. Designed for performance, transparency, and speed.',
  },

  /* ==========================================================================
     ANALYTICS
     ====================================================================== */
  analytics: '',

};
