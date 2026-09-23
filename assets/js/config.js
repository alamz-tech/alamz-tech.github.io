/* ============================================================================
   ALAMZ TECH — SITE CONFIG
   ----------------------------------------------------------------------------
   This is the primary file to edit to update site content.
   Everything visible on the page is rendered from this object.
   ========================================================================== */

window.ALAMZ = {

  /* ==========================================================================
     BRAND
     ====================================================================== */
  brand: {
    name: 'Alamz Tech',
    wordmark: 'Alamz Tech',
    tagline: 'Cloud architecture, FinOps, and AI engineering for business.',
    heroSub:
      'We build localized cloud products and engineer hands-on cloud and AI solutions across AWS, ' +
      'GCP, and Azure — architected, secured, and kept running in production rather than working once in a demo.',
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
    capabilitiesLabel: 'Core capabilities',
    capabilities: [
      { k: 'Cloud',       v: 'AWS · GCP · Azure' },
      { k: 'Migration',   v: 'Terraform & CI/CD' },
      { k: 'Security',    v: 'WAF, IAM & CDN' },
      { k: 'FinOps',      v: 'Cost optimization' },
      { k: 'AI Systems',  v: 'Grounded in your data' },
      { k: 'Operations',  v: 'Monitored & maintained' },
    ],
    capabilitiesFoot:
      'Most engineering initiatives struggle between architectural planning and day-two reliability. ' +
      'We bridge that gap with production-proven cloud and AI engineering.',
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
        intro: 'We will email you when this is ready for early access. Early signups get priority pilot onboarding.',
        submit: 'Join the waitlist',
        success: 'You are on the list. We will be in touch before anyone else hears about it.',
        fields: [
          { name: 'name',     label: 'Name',            type: 'text',     required: true  },
          { name: 'email',    label: 'Email',           type: 'email',    required: true  },
          { name: 'interest', label: 'Primary use case', type: 'textarea', required: false,
            help: 'Optional. One or two lines helps us prioritize the right features.' },
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
        intro: 'The pilot is a small, selected group. We read every application and reply either way.',
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
        heading: 'Request a service quote',
        intro: 'Tell us about your infrastructure or project requirements. We review every enquiry and reply within two business days.',
        submit: 'Send enquiry',
        success: 'Enquiry received. We will review your project scope and reply within two business days.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company / Project', type: 'text', required: true },
          { name: 'cloud', label: 'Primary cloud provider', type: 'select', required: false,
            options: ['AWS', 'Google Cloud (GCP)', 'Microsoft Azure', 'Multi-cloud / Hybrid', 'Not sure yet'] },
          { name: 'timeline', label: 'Target timeline', type: 'select', required: false,
            options: ['Immediate (under 2 weeks)', '1–2 months', '3+ months', 'Exploratory'] },
          { name: 'message', label: 'Project scope & requirements', type: 'textarea', required: true,
            help: 'Brief overview of your current stack, goals, or pain points.' },
        ],
      },
    },

  },

  /* ==========================================================================
     APPROACH
     ====================================================================== */
  approach: {
    eyebrow: 'The model',
    heading: 'We build localized cloud products, and we engineer cloud and AI systems for businesses that already run.',
    body: [
      'Alamz Tech is a technology studio with two core engines: we build specialized infrastructure products that address local market constraints, and we provide senior cloud and AI engineering services to companies scaling their systems.',
      'The two reinforce each other. Client services keep us hands-on with real production loads, complex compliance hurdles, and multi-cloud architectures; our products turn what we learn into scalable, sovereign software.',
      'One engineering thread unites both: production readiness. Getting a demo to work is easy; building infrastructure that stays up under load, complies with data residency rules, resists security threats, and operates within a strict budget is where real engineering happens.',
    ],
  },

  /* ==========================================================================
     WHAT WE DO
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two ways we work, built on the same engineering rigor.',
    body:
      'One builds owned infrastructure software for the market. The other delivers focused cloud architecture and AI engineering directly inside your stack.',
    items: [
      {
        name: 'Products',
        state: 'Built once, used by many',
        tone: 'warm',
        body:
          'Infrastructure and learning platforms we build and own. EarnWithDevOps takes engineers from beginner to certified; CMP delivers a localized sovereign IaaS control plane.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'Explore products',
      },
      {
        name: 'Services',
        state: 'Cloud & AI Solutions',
        tone: 'cool',
        body:
          'Hands-on cloud architecture, migration, security, and FinOps across AWS, GCP, and Azure, plus production AI integration grounded in your proprietary data.',
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
      kicker: 'Training for the jobs AI creates, not the ones it removes',
      status: 'live',
      ctaUrl: 'https://ewd.alamztech.com',
      ctaLabel: 'Start learning free',
      body:
        'A coach on Telegram that takes someone from beginner to certified in cloud and DevOps — ' +
        'AWS Cloud Practitioner, Google Associate Cloud Engineer, KCNA, Terraform Associate and ' +
        'GitHub Actions. Lessons arrive as chat, in the app learners already have. Hands-on labs run ' +
        'in a real cloud environment on free tiers that need no credit card, so cost is never the ' +
        'reason someone drops out. Grading is deterministic: a script or a repo check either passes ' +
        'or it does not. Spaced repetition brings questions back at the right moment, so the material ' +
        'is still there on exam day. Finish a path and it opens a career layer — mentorship, interview ' +
        'prep and referrals from engineers who have hired for these roles.',
      note:
        'Delivered text-first on Telegram so it works reliably on low-bandwidth and mobile connections ' +
        'without requiring credit cards or expensive hardware.',
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
      kicker: 'Localized IaaS control plane for Nigerian banks, fintechs, and enterprises',
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: 'Join the waitlist',
      body:
        'A localized IaaS control plane ("AWS of Nigeria") — a FastAPI + React control layer over an ' +
        'open-source hypervisor data plane (e.g. Proxmox) running on bare-metal in Nigerian data centers, ' +
        'solving currency risk and data-sovereignty for banks, fintechs, and enterprises.',
      note:
        'Addresses two major enterprise bottlenecks: eliminating USD billing volatility through predictable ' +
        'local currency billing, and meeting strict central bank data residency mandates by keeping every ' +
        'byte within local data centers.',
      facts: [
        'FastAPI + React control plane',
        'Open-source hypervisor data plane',
        'Bare-metal in Nigerian data centers',
        'Data sovereignty & local billing',
      ],
      roadmap: [
        'Private alpha Q4 2026',
        'Fintech & enterprise compliance pilot',
      ],
    },

  ],

  /* ==========================================================================
     SERVICES (Top-level section)
     ====================================================================== */
  services: {
    eyebrow: 'Services',
    heading: 'Cloud infrastructure and AI engineering, architected and operated in production.',
    body:
      'We provide senior engineering across two distinct service lines: Cloud Solutions and AI Solutions. ' +
      'We come from DevOps, platform engineering, and distributed systems — so security, cost discipline, ' +
      'and operational reliability are baked in from day one.',

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
        subtitle: 'Multi-cloud architecture, migration, security, and FinOps across AWS, GCP, and Azure',
        description:
          'Backed by certifications in Google Cloud Professional Cloud Architect, Google Cloud Associate Cloud Engineer, ' +
          'and Microsoft Azure, drawing on extensive production Terraform and CI/CD migration experience.',
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
              'Comprehensive audit against AWS Well-Architected, GCP Architecture Framework, and Azure WAF pillars',
              'Ranked assessment of reliability risks, single points of failure, and downtime vulnerabilities',
              'Concrete FinOps savings findings with immediate and long-term cost reduction targets',
              'Actionable technical remediation roadmap with prioritized steps',
            ],
          },
          {
            id: 'cloud-migration',
            name: 'Cloud Migration',
            kicker: 'End-to-end migration (legacy-to-cloud or cloud-to-cloud), drawing on hands-on Terraform/CI-CD migration experience.',
            timeline: '2 to 6 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Infrastructure as Code (Terraform) for completely reproducible environments',
              'Automated CI/CD deployment pipelines (GitHub Actions, GitLab CI)',
              'Phased cutover strategy with rollback contingencies and minimal or zero downtime',
              'Post-migration validation, performance benchmarking, and runbook handover',
            ],
          },
          {
            id: 'cloud-security',
            name: 'Cloud Security Hardening',
            kicker: 'Security-first setup: WAF/Shield-equivalent protections, CDN, access controls, across all three providers.',
            timeline: '1 to 3 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Perimeter defense: Cloud WAF, DDoS mitigation, and CDN edge security rules',
              'Least-privilege IAM policies, automated secret rotation, and role separation',
              'Isolated network topologies, VPC peering, and secure private connectivity',
              'Continuous audit logging, SIEM integration, and incident alerting',
            ],
          },
          {
            id: 'cloud-cost',
            name: 'Cloud Cost Optimization / Tooling',
            kicker: 'Help businesses navigate the AWS/GCP/Azure marketplace and cut cloud spend (FinOps angle).',
            timeline: '1 to 2 weeks or ongoing',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Granular cloud bill audit identifying idle compute, orphaned storage, and over-provisioned tiers',
              'Commitment analysis: Reserved Instances, Savings Plans, and Committed Use Discounts (CUD)',
              'Marketplace procurement guidance to capture partner discounts and cloud credits',
              'Automated spend anomaly detection, budget guardrails, and unit-economic metrics',
            ],
          },
        ],
      },

      {
        id: 'ai-solutions',
        name: 'AI Solutions',
        subtitle: 'Production AI systems integrated into existing business stacks and grounded in proprietary data',
        description:
          'We bring AI into businesses that already run — grounded in your own documents and databases, ' +
          'deployed inside your systems, and maintained in production.',
        offerings: [
          {
            id: 'ai-feasibility',
            name: 'AI Feasibility Sprint',
            kicker: 'For teams who know AI should be in their product or workflow but need proof of concept first.',
            timeline: '1 to 2 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Use case evaluation and data readiness audit',
              'Working interactive prototype using your actual sample data',
              'Token cost projections, latency analysis, and architecture model',
              'Definitive build vs. do-not-build engineering recommendation',
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
              'Enterprise RAG pipeline grounded in your internal documents and databases',
              'Secure API integration directly into your product backend and frontend',
              'Hallucination guardrails, fallback logic, and evaluation test suite',
              'Monitoring, access control, and complete handover documentation',
            ],
          },
          {
            id: 'ai-in-production',
            name: 'AI in Production',
            kicker: 'Ongoing evaluations, token cost controls, model version upgrades, and reliability management.',
            timeline: 'Monthly retainer',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Continuous output quality evaluations and drift monitoring',
              'Token spend optimization, prompt caching, and latency tuning',
              'Model version upgrades and provider migrations without downtime',
              'Incident response, prompt patching, and uptime support',
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
    heading: 'A demo has to impress once. A system has to be right on a Tuesday afternoon with real data.',
    body:
      'Almost all the difficulty in cloud and AI systems sits after the initial deployment. Getting a model or service ' +
      'to respond in testing is not the hard problem; making it scale under load, survive infrastructure faults, ' +
      'and stay strictly inside budget is. These are the rules we hold our work to.',
    rules: [
      {
        rule: 'Ground it in the customer\'s own data',
        because: 'A confident answer from the open internet is worse than no answer. Retrieval and domain grounding beat generic recall.',
      },
      {
        rule: 'Ship it to production, not to a demo',
        because: 'Deployed, monitored, versioned, and recoverable via Infrastructure as Code. Anything less is a prototype wearing a suit.',
      },
      {
        rule: 'Make it survive the conditions it will actually meet',
        because: 'Metered bandwidth, currency volatility, and strict data-sovereignty mandates must be architectural foundations, not afterthoughts.',
      },
      {
        rule: 'Control costs at the architectural level',
        because: 'Unmonitored cloud and token spend is a balance-sheet liability. Budgets and FinOps guardrails are active technical requirements.',
      },
      {
        rule: 'Leave it operable by someone else',
        because: 'Comprehensive documentation, CI/CD automation, and proper handover. Work that only the vendor can run is an operational vulnerability.',
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
      'DevOps and cloud engineer with five years of production experience in platform engineering, multi-cloud architecture, and technical project leadership — including remote infrastructure delivery for US and international teams.',
      'Holds certifications in Google Cloud Professional Cloud Architect, Google Cloud Associate Cloud Engineer, Microsoft Azure, and Google Cloud Generative AI Leader, and serves as an Andela mentor for KCNA and CKAD certification readiness.',
      'Alamz Tech applies that discipline to cloud infrastructure and AI solutions. Every product and client engagement is engineered hands-on with Terraform, automated CI/CD, and robust operational tooling.',
    ],
  },

  /* ==========================================================================
     CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Planning a cloud migration, security review, or AI integration?',
    body:
      'Whether you are looking to audit your cloud spend, execute a zero-downtime migration, harden your multi-cloud security, or explore our localized IaaS platform, we are ready to discuss your architecture.',
    cta: 'Send us a message',
    form: {
      heading: 'Get in touch',
      intro: 'Goes directly to the founder. We reply to every genuine business enquiry within two business days.',
      submit: 'Send message',
      success: 'Message received. You will get a reply from the founder, usually within one to two business days.',
      fields: [
        { name: 'name',  label: 'Name',  type: 'text',  required: true },
        { name: 'email', label: 'Work email', type: 'email', required: true,
          help: 'So we can reply. Never shared.' },
        { name: 'organisation', label: 'Organisation / Company', type: 'text', required: false },
        { name: 'reason', label: 'What is this about?', type: 'select', required: true,
          options: [
            'Cloud Solutions (AWS / GCP / Azure)',
            'AI Solutions & Integration',
            'CMP Waitlist / Enterprise Pilot',
            'General enquiry',
          ] },
        { name: 'message', label: 'Message', type: 'textarea', required: true },
      ],
    },
  },

  /* ==========================================================================
     FOOTER
     ====================================================================== */
  footer: {
    note: 'This site ships zero webfonts, zero tracking scripts, and minimal asset weight. Designed for performance and transparency.',
  },

  /* ==========================================================================
     ANALYTICS
     ====================================================================== */
  analytics: '',

};
