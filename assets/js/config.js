/* ============================================================================
   ALAMZ TECH: SITE CONFIG
   ----------------------------------------------------------------------------
   Positioning: Cloud Architecture, FinOps and AI Engineering for
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
      'When revenue is earned in local currency but AWS and GCP bill in US dollars, unoptimized infrastructure eats your margins. ' +
      'We help growing African tech companies eliminate cloud waste, prevent downtime, and run production-grade AI across AWS, GCP, and Azure.',
    email: 'hussein@alamztech.com',
    location: 'Lagos, Nigeria',
  },

  /* ==========================================================================
     NAVIGATION
     ====================================================================== */
  nav: [
    { label: 'Products',  href: '#products'  },
    { label: 'Services',  href: '#services'  },
    { label: 'Approach',  href: '#approach'  },
    { label: 'Founder',   href: '#founder'   },
  ],

  /* ==========================================================================
     HERO: capability strip in the panel beside the headline
     ====================================================================== */
  hero: {
    capabilitiesLabel: 'Core competencies',
    capabilities: [
      { k: 'FinOps',      v: 'Cut cloud waste and USD spend' },
      { k: 'Cloud',       v: 'AWS, GCP and Azure' },
      { k: 'Reliability', v: 'Zero-downtime CI/CD pipelines' },
      { k: 'Security',    v: 'WAF, IAM and compliance' },
      { k: 'AI Systems',  v: 'Production RAG and token budgets' },
      { k: 'Operations',  v: 'Observability and runbooks' },
    ],
    capabilitiesFoot:
      'Moving past the early stage puts real stress on your infrastructure and your balance sheet. ' +
      'We embed with your team to fix performance bottlenecks and bring cloud spend under control.',
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
    subjectPrefix: 'Alamz Tech:',
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
          { name: 'company',  label: 'Company name',    type: 'text',     required: true  },
          { name: 'interest', label: 'Primary infrastructure challenge', type: 'textarea', required: false,
            help: 'E.g., rising USD cloud bills, Central Bank data residency rules, or bare-metal performance.' },
        ],
      },
    },

    'pilot': {
      label: 'Pilot: applications open',
      tone: 'warm',
      action: 'form',
      cta: 'Apply to beta-test',
      form: {
        heading: 'Apply to the pilot cohort',
        intro: 'The pilot cohort is a small, selected group of scaling companies. We review every application personally.',
        submit: 'Send application',
        success: 'Application received. We review in batches and will reply to your email directly.',
        fields: [
          { name: 'name',   label: 'Name',  type: 'text',  required: true },
          { name: 'email',  label: 'Email', type: 'email', required: true },
          { name: 'commitment', label: 'Hours you can commit each week', type: 'select', required: true,
            options: ['Under 3 hours', '3 to 5 hours', '6 to 10 hours', 'More than 10 hours'] },
          { name: 'why', label: 'Why you?', type: 'textarea', required: true,
            help: 'A few sentences on what your team is building and the infrastructure goals you want to achieve.' },
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
        heading: 'Request a project quote',
        intro: 'Tell us about your infrastructure scale, monthly cloud spend, or AI initiative. We reply within two business days.',
        submit: 'Send inquiry',
        success: 'Inquiry received. We will review your architecture scope and reply within two business days.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company name', type: 'text', required: true },
          { name: 'cloud', label: 'Primary cloud provider', type: 'select', required: true,
            options: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Multi-cloud / Hybrid', 'On-premises / Other'] },
          { name: 'monthlySpend', label: 'Approximate monthly cloud spend', type: 'select', required: false,
            options: ['Under $3,000/mo', '$3,000 to $10,000/mo', '$10,000 to $30,000/mo', 'Over $30,000/mo'] },
          { name: 'timeline', label: 'Target timeline', type: 'select', required: false,
            options: ['Immediate (under 2 weeks)', '1 to 2 months', '3 months or later', 'Exploratory'] },
          { name: 'message', label: 'Primary technical challenge or scope', type: 'textarea', required: true,
            help: 'E.g., cutting an out-of-control cloud bill, resolving recurrent outages, migrating workloads, or deploying an AI feature.' },
        ],
      },
    },

  },

  /* ==========================================================================
     APPROACH (The Scale-up Reality)
     ====================================================================== */
  approach: {
    eyebrow: 'The scale-up reality',
    heading: 'Post-seed traction should not stall on fragile infrastructure or runaway USD cloud spend.',
    body: [
      'Moving past the MVP phase into rapid growth is where technical debt catches up with African scale-ups. User traffic and transaction volumes spike, but revenue earned in local currency (naira, shillings, or rands) collides head-on with cloud bills charged in US dollars. Unoptimized compute clusters, idle volumes, and early architectural shortcuts quickly turn into severe margin killers.',
      'At this stage, you do not need generic global cloud advice or bloated enterprise consultant decks. You need senior, hands-on platform engineering: cutting 30% to 50% of wasted cloud spend, replacing brittle manual deploys with automated Terraform pipelines, and hardening your perimeter against customer-facing outages.',
      'Alamz Tech operates as the embedded cloud and AI engineering partner for growth-stage African businesses. We take on the heavy architectural work: Well-Architected FinOps reviews, zero-downtime migrations, security hardening, and production AI integration. This allows your core engineering team to focus entirely on customer acquisition and shipping product.',
      'Hiring experienced platform and DevOps engineers across Lagos, Nairobi, or Johannesburg is difficult, slow, and expensive. When an unexpected outage disrupts user trust or your monthly AWS invoice doubles because of an unindexed query, you cannot afford to spend six months recruiting senior staff. We plug that gap on day one, bringing battle-tested patterns directly into your codebase and cloud console.',
      'Crucially, we do not build proprietary black boxes or leave you dependent on external retainers. Every solution we build is committed to your repositories as modular Infrastructure as Code, complete with automated CI/CD pipelines, clear documentation, and runbooks. We work alongside your internal developers throughout the process, ensuring your team has full operational ownership as you scale.',
    ],
  },

  /* ==========================================================================
     WHAT WE DO
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two complementary ways we help growing companies scale reliably.',
    body:
      'We develop specialized infrastructure software to solve regional market constraints, and we provide embedded cloud and AI engineering directly inside your production stack.',
    items: [
      {
        name: 'Products',
        state: 'Infrastructure software and training',
        tone: 'warm',
        body:
          'Software built for local infrastructure realities. CMP provides localized bare-metal IaaS in Nigerian data centers to eliminate currency volatility and satisfy data residency laws. EarnWithDevOps trains and prepares practical platform talent.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'Explore products',
      },
      {
        name: 'Services',
        state: 'Cloud, FinOps and AI solutions',
        tone: 'cool',
        body:
          'Hands-on engineering engagements for teams running on AWS, GCP, and Azure. We audit and reduce cloud spend, execute zero-downtime migrations, prevent production downtime, and ship reliable AI features.',
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
        'A chat-based coach on Telegram that guides engineers from fundamentals to professional certification in cloud and DevOps: ' +
        'AWS Cloud Practitioner, Google Associate Cloud Engineer, KCNA, Terraform Associate, and ' +
        'GitHub Actions. Hands-on labs run in real cloud sandbox environments on free tiers without requiring a credit card. ' +
        'Automated deterministic grading and spaced repetition help candidates master practical terminal skills alongside exam objectives, ' +
        'creating a pipeline of vetted, job-ready platform talent.',
      note:
        'Engineered text-first to run smoothly across low-bandwidth connections, helping companies source and upskill local platform talent.',
      facts: [
        'Five certification tracks',
        'Real cloud labs with no credit card required',
        'Deterministic automated grading',
        'Delivered on Telegram (text-first)',
      ],
      roadmap: [],
    },

    {
      id: 'cmp',
      name: 'CMP (Cloud Management Platform)',
      kicker: 'Localized IaaS control plane for African scale-ups, fintechs, and enterprises',
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: 'Join the waitlist',
      body:
        'A localized IaaS control plane ("AWS of Nigeria"): a FastAPI and React management layer over an ' +
        'open-source hypervisor data plane (such as Proxmox) running on bare-metal hardware in Nigerian data centers. ' +
        'Built to resolve the dual challenge of foreign exchange currency risk and domestic data sovereignty requirements ' +
        'for fintechs, banks, and high-volume digital businesses.',
      note:
        'Provides predictable local-currency billing to protect margins from currency depreciation, while keeping all data in-country to satisfy Central Bank and NDPC compliance requirements with single-digit millisecond domestic latency.',
      facts: [
        'FastAPI and React control plane',
        'Open-source hypervisor data plane',
        'Bare-metal in Nigerian data centers',
        'Full data residency and local currency billing',
      ],
      roadmap: [
        'Private alpha in Q4 2026',
        'Fintech and scale-up compliance pilot',
      ],
    },

  ],

  /* ==========================================================================
     SERVICES (Top-level section)
     ====================================================================== */
  services: {
    eyebrow: 'Engineering Services',
    heading: 'Production cloud architecture, FinOps, and AI systems built for scale-ups.',
    body:
      'We work with engineering leaders managing active production environments on AWS, GCP, and Azure. ' +
      'If your cloud bills are growing faster than your revenue, recurrent outages are hurting user trust, ' +
      'or your team needs to deploy production AI without runaway API costs, we embed with your engineers to fix the foundation.',

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
            kicker: 'Audit existing cloud environments on AWS, GCP, or Azure against established reliability, security, and cost frameworks.',
            timeline: '1 to 2 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Well-Architected audit across AWS, GCP, and Azure reliability and operational pillars',
              'Clear inventory of downtime risks, single points of failure, and scalability bottlenecks',
              'Immediate identification of idle disks, unattached IPs, and oversized compute instances inflating your monthly bill',
              'Actionable, prioritized technical remediation roadmap your team can execute immediately',
            ],
          },
          {
            id: 'cloud-migration',
            name: 'Cloud Migration and Modernization',
            kicker: 'End-to-end migrations between on-prem and cloud, or across cloud providers, using Terraform and automated pipelines.',
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
            name: 'Cloud Security Hardening and Compliance',
            kicker: 'Security-first infrastructure setup: Web Application Firewalls, identity controls, and audit-ready network isolation.',
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
            name: 'Cloud Cost Optimization and FinOps',
            kicker: 'Forensic cloud cost restructuring to eliminate waste, optimize commitments, and bring infrastructure spend under control.',
            timeline: '1 to 2 weeks or ongoing',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Deep forensic audit of monthly AWS, GCP, and Azure bills to uncover hidden egress, unattached volumes, and oversized compute',
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
          'We bridge the gap between speculative AI prototypes and reliable revenue-driving software: ' +
          'grounded in your proprietary business data, wired into existing workflows, and engineered for predictable token budgets.',
        offerings: [
          {
            id: 'ai-feasibility',
            name: 'AI Feasibility Sprint',
            kicker: 'Stop burning runway on unproven AI ideas. Validate feasibility and unit economics on your actual data before writing code.',
            timeline: '1 to 2 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Use case technical audit and proprietary data readiness assessment',
              'Working interactive prototype running on your actual business data samples',
              'Granular unit-cost model: token projections, latency benchmarks, and hosting architecture',
              'Objective build vs. do-not-build engineering recommendation backed by empirical test data',
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
     THE EDGE (Engineering Principles)
     ====================================================================== */
  edge: {
    eyebrow: 'Engineering principles',
    heading: 'A demo has to impress once. A production system has to hold up on a Tuesday afternoon during peak traffic.',
    body:
      'Almost all the difficulty in cloud infrastructure and AI sits after the prototype. Surviving user traffic spikes, ' +
      'insulating margins against currency depreciation, complying with local data regulations, ' +
      'and operating inside a strict runway are the actual engineering challenges. These are the rules we hold our work to.',
    rules: [
      {
        rule: 'Ground it in the customer\'s own data',
        because: 'A confident hallucination from open web training is fatal in fintech or healthcare. Retrieval and strict domain grounding beat generic model recall every time.',
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
        because: 'Unmonitored cloud and token bills are balance-sheet emergencies for companies earning in local currency. FinOps guardrails are active technical requirements.',
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
      'Platform and cloud engineer with five years of hands-on production experience in infrastructure engineering, multi-cloud architecture, and technical delivery, including remote infrastructure leadership for international and US-facing teams.',
      'Holds certifications as a Google Cloud Professional Cloud Architect, Google Cloud Associate Cloud Engineer, Microsoft Azure specialist, and Google Cloud Generative AI Leader, and serves as an Andela mentor for KCNA and CKAD certification readiness.',
      'Alamz Tech applies that operational standard to companies scaling in Africa. Every client engagement is delivered hands-on with Terraform, automated CI/CD, and proven FinOps methodologies.',
    ],
  },

  /* ==========================================================================
     CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Ready to cut your cloud spend or stabilize your production infrastructure?',
    body:
      'Whether you are navigating currency volatility on AWS or GCP, recurrent outages, data residency compliance, or planning a production AI feature, let us review your architecture.',
    cta: 'Send us a message',
    form: {
      heading: 'Get in touch',
      intro: 'Goes directly to the founder. We review every inquiry and reply within two business days.',
      submit: 'Send message',
      success: 'Message received. You will get a reply from the founder within one to two business days.',
      fields: [
        { name: 'name',  label: 'Name',  type: 'text',  required: true },
        { name: 'email', label: 'Work email', type: 'email', required: true,
          help: 'So we can reply. Never shared.' },
        { name: 'organisation', label: 'Company name', type: 'text', required: true },
        { name: 'reason', label: 'What is this about?', type: 'select', required: true,
          options: [
            'Cloud Cost & FinOps Audit (Cut cloud spend)',
            'Cloud Infrastructure & Reliability (AWS, GCP, Azure)',
            'Cloud Security Hardening & Compliance',
            'Production AI Integration',
            'CMP Localized IaaS Waitlist',
            'General inquiry',
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
