/* ============================================================================
   ALAMZ TECH LTD: SITE CONFIG
   Positioning: Global AI Product Studio for Education and Agriculture.
   ========================================================================== */

window.ALAMZ = {

  /* ==========================================================================
     BRAND
     ====================================================================== */
  brand: {
    name: 'Alamz Tech Ltd',
    wordmark: 'Alamz Tech',
    tagline: 'Global AI product studio for Education and Agriculture.',
    heroSub:
      'Feeding ten billion people and equipping the next billion minds for an automated economy are the two defining challenges of our time. ' +
      'We build applied AI software where these two levers intersect: interactive coaching platforms that unlock human potential, and agricultural intelligence that secures global food supply.',
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
    capabilitiesLabel: 'Studio focus',
    capabilities: [
      { k: 'EdTech AI',       v: 'Conversational tutors and auto-grading' },
      { k: 'AgriTech AI',     v: 'Outgrower tracking and yield forecasting' },
      { k: 'Computer Vision', v: 'Crop quality and pest diagnosis' },
      { k: 'Deployment',      v: 'Low-bandwidth, text-first, and mobile-native' },
      { k: 'Applied ML',      v: 'Edge inference, RAG, and fine-tuning' },
      { k: 'Impact Focus',    v: 'Food security and human potential' },
    ],
    capabilitiesFoot:
      'We engineer proprietary software products and partner with commercial agribusinesses, education providers, and institutions to deploy applied AI.',
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
      label: 'In development: waitlist open',
      tone: 'cool',
      action: 'form',
      cta: 'Join pilot waitlist',
      form: {
        heading: 'Join the AgriYield pilot waitlist',
        intro: 'We are onboarding a select group of commercial agribusinesses, aggregators, and outgrower schemes for our private pilot. Tell us about your operations.',
        submit: 'Join pilot waitlist',
        success: 'You are on the list. We review every application personally and will reach out with pilot onboarding details.',
        fields: [
          { name: 'name',     label: 'Name',            type: 'text',     required: true  },
          { name: 'email',    label: 'Work email',      type: 'email',    required: true  },
          { name: 'company',  label: 'Company / Agribusiness', type: 'text', required: true  },
          { name: 'hectares', label: 'Approximate scale under management', type: 'select', required: true,
            options: ['Under 1,000 hectares', '1,000 to 5,000 hectares', '5,000 to 20,000 hectares', 'Over 20,000 hectares', 'Institutional / Research'] },
          { name: 'cropFocus', label: 'Primary agricultural sector', type: 'select', required: true,
            options: ['Grains & Cereals (Maize, Rice, Sorghum)', 'Cash Crops (Cocoa, Coffee, Cashew, Sesame)', 'Oilseeds (Palm, Soya)', 'Horticulture & Fresh Produce', 'Agricultural Lending / Crop Insurance', 'Other'] },
          { name: 'interest', label: 'Primary operational challenge', type: 'textarea', required: false,
            help: 'E.g., harvest volume forecasting, outgrower side-selling, pest detection, or satellite acreage verification.' },
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
        intro: 'The pilot cohort is a small, selected group of organizations. We review every application personally.',
        submit: 'Send application',
        success: 'Application received. We review in batches and will reply to your email directly.',
        fields: [
          { name: 'name',   label: 'Name',  type: 'text',  required: true },
          { name: 'email',  label: 'Email', type: 'email', required: true },
          { name: 'commitment', label: 'Hours you can commit each week', type: 'select', required: true,
            options: ['Under 3 hours', '3 to 5 hours', '6 to 10 hours', 'More than 10 hours'] },
          { name: 'why', label: 'Why you?', type: 'textarea', required: true,
            help: 'A few sentences on what your team is building and the operational goals you want to achieve.' },
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
        heading: 'Request an enterprise AI co-build quote',
        intro: 'Tell us about your organization, target deployment scale, and the problem you want to solve. We reply within two business days.',
        submit: 'Send inquiry',
        success: 'Inquiry received. We will review your project scope and reply within two business days.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company / Institution name', type: 'text', required: true },
          { name: 'sector', label: 'Industry sector', type: 'select', required: true,
            options: ['Agribusiness / Food Supply Chain', 'EdTech / Higher Education', 'Agri-Fintech / Crop Insurance', 'Research / Foundation', 'Other'] },
          { name: 'timeline', label: 'Target timeline', type: 'select', required: false,
            options: ['Immediate (under 1 month)', '1 to 3 months', '3 to 6 months', 'Exploratory'] },
          { name: 'message', label: 'Project scope and objectives', type: 'textarea', required: true,
            help: 'Describe your target data sources, scale of users or acreage, and the key outcome you want to achieve.' },
        ],
      },
    },

  },

  /* ==========================================================================
     APPROACH (The Studio Thesis)
     ====================================================================== */
  approach: {
    eyebrow: 'The studio thesis',
    heading: 'Feeding ten billion people and upskilling the next billion minds.',
    body: [
      'By 2050, the global population will exceed ten billion. Feeding that world requires closing massive agricultural yield gaps, particularly across emerging markets that hold the majority of the planet\'s uncultivated arable land yet remain net food importers. In parallel, the global economy is automating rapidly, creating an urgent imperative to upskill hundreds of millions of young minds into high-value engineering careers.',
      'Traditional classroom models and legacy agricultural consulting cannot move fast enough to solve either problem. Closing these gaps requires applied AI built for real-world conditions: software that operates seamlessly over ubiquitous mobile channels, tolerates intermittent connectivity, and delivers immediate economic value for growers and learners alike.',
      'Alamz Tech Ltd operates as an applied AI product studio. We identify foundational friction points in global food systems and technical education, engineer proprietary software to eliminate them, and collaborate with commercial agribusinesses and institutions to deploy production systems that scale.',
    ],
  },

  /* ==========================================================================
     WHAT WE DO (Offerings Overview)
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two complementary ways we build software for global impact.',
    body:
      'We engineer proprietary software products in education and agriculture, and we partner with forward-looking enterprises to build custom AI systems.',
    items: [
      {
        name: 'Products',
        state: 'Proprietary AI platforms',
        tone: 'warm',
        body:
          'Software engineered for planetary-scale challenges. EarnWithDevOps trains and certifies technical talent; AgriYield provides enterprise yield forecasting and outgrower intelligence for commercial agribusinesses.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'Explore products',
      },
      {
        name: 'Services',
        state: 'Enterprise Co-Builds & AI Solutions',
        tone: 'cool',
        body:
          'Selective engineering partnerships for commercial agribusinesses, food processors, and education platforms. We design and deploy custom computer vision, predictive modeling, and conversational AI pipelines.',
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
      kicker: 'AI-driven technical training for the next generation of platform engineers',
      status: 'live',
      ctaUrl: 'https://ewd.alamztech.com',
      ctaLabel: 'Start learning free',
      body:
        'A chat-based coach on Telegram that guides engineers from fundamentals to professional certification in cloud and DevOps: ' +
        'AWS, Google Cloud, Kubernetes (KCNA), Terraform, and GitHub Actions. ' +
        'Hands-on labs run in real cloud sandboxes on free tiers without requiring a credit card, ' +
        'using automated grading and spaced repetition to build job-ready platform talent.',
      note:
        'Engineered text-first to run smoothly across low-bandwidth connections, helping companies source and upskill technical platform talent at scale.',
      facts: [
        'Five certification tracks',
        'Real cloud sandboxes with no credit card required',
        'Deterministic automated grading',
        'Delivered on Telegram (text-first)',
      ],
      roadmap: [],
    },

    {
      id: 'agriyield',
      name: 'AgriYield',
      kicker: 'Enterprise outgrower and yield intelligence for agribusinesses and lenders',
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: 'Join pilot waitlist',
      body:
        'An enterprise B2B SaaS platform combining satellite vegetation telemetry, localized microclimate forecasts, and mobile field data. ' +
        'AgriYield monitors contracted hectares, predicts harvest yields, and de-risks supply chains for commercial food processors, ' +
        'commodity aggregators, and agricultural lenders.',
      note:
        'Gives agricultural executives real-time visibility into outgrower networks, preventing post-harvest losses and securing commodity supply without costly manual field audits.',
      facts: [
        'Satellite vegetation telemetry (NDVI/EVI)',
        'Predictive harvest yield modeling',
        'Mobile field data collection and geo-fencing',
        'Supply chain risk and side-selling alerts',
      ],
      roadmap: [
        'Private alpha Q4 2026',
        'Commercial outgrower pilot cohort',
      ],
    },

  ],

  /* ==========================================================================
     SERVICES (Top-level section)
     ====================================================================== */
  services: {
    eyebrow: 'Enterprise Solutions',
    heading: 'Custom AI systems engineered for agribusinesses, education providers, and institutions.',
    body:
      'We partner with commercial enterprises and institutions to build production AI systems. ' +
      'Whether deploying satellite vegetation pipelines across thousands of hectares or building curriculum-grounded tutoring bots, ' +
      'we engineer directly in your codebase.',

    certifications: [
      'Google Cloud Professional Cloud Architect',
      'Google Cloud Associate Cloud Engineer',
      'Microsoft Azure',
      'Google Cloud Generative AI Leader',
    ],

    lines: [
      {
        id: 'agritech-solutions',
        name: 'AgriTech AI Solutions',
        subtitle: 'Satellite telemetry, predictive yield modeling, crop vision, and logistics intelligence',
        description:
          'Tailored AI solutions for commercial plantations, food processors, aggregators, and agri-fintechs seeking to de-risk procurement, monitor crop health, and automate field operations.',
        offerings: [
          {
            id: 'crop-telemetry',
            name: 'Crop Health & Satellite Telemetry',
            kicker: 'Automated satellite vegetation indexing (NDVI/EVI) and early risk detection across distributed acreage.',
            timeline: '2 to 4 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Automated Sentinel and Landsat satellite data ingestion pipelines with cloud masking',
              'Vegetation vigor indexing (NDVI, EVI, NDRE) for zonal health monitoring',
              'Early warning alerts for moisture stress, drought exposure, and potential pest outbreaks',
              'Interactive executive dashboard and GIS map integration with field polygon overlays',
            ],
          },
          {
            id: 'yield-forecasting',
            name: 'Predictive Yield Modeling',
            kicker: 'Machine learning models combining weather, soil, and historical field data to forecast harvest volumes.',
            timeline: '4 to 8 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Historical yield calibration and ground-truth validation with your agronomy team',
              'Localized microclimate data integration for weather-adjusted harvest window prediction',
              'Granular yield volume forecasts at the zone, cluster, and aggregate scheme levels',
              'Risk scoring models to assist agricultural lenders and underwriters with credit decisions',
            ],
          },
          {
            id: 'crop-vision',
            name: 'Computer Vision Quality Grading',
            kicker: 'Mobile and edge vision pipelines for automated crop grading, defect detection, and post-harvest inspection.',
            timeline: '3 to 6 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Custom fine-tuned edge vision models for crop grading, defect detection, and maturity analysis',
              'Mobile camera capture integration for field agents and collection center clerks',
              'Automated quality classification matching export and industrial processing standards',
              'Offline-tolerant on-device inference with cloud synchronization when connected',
            ],
          },
          {
            id: 'agri-logistics',
            name: 'Commodity Logistics & Procurement AI',
            kicker: 'Intelligent matching, price transparency, and route optimization between rural collection points and processing hubs.',
            timeline: '2 to 5 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Aggregator and buying station volume tracking with anomaly detection to prevent leakage',
              'Fair market commodity price indexing to build farmer trust and improve retention',
              'Optimized transportation scheduling from remote farms to processing factories',
              'End-to-end traceability records ready for sustainability and trade compliance audits',
            ],
          },
        ],
      },

      {
        id: 'edtech-solutions',
        name: 'EdTech AI Solutions',
        subtitle: 'Conversational learning, automated grading engines, and curriculum RAG systems',
        description:
          'Custom AI engines for educational institutions, online academies, and training programs seeking to scale interactive instruction without linearly hiring teaching staff.',
        offerings: [
          {
            id: 'conversational-tutoring',
            name: 'Conversational Tutoring Systems',
            kicker: 'Interactive pedagogical bots integrated into WhatsApp, Telegram, or web portals with strict guardrails.',
            timeline: '3 to 6 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Multi-turn Socratic tutoring agents designed to guide learners toward answers rather than lecturing',
              'Omnichannel deployment across Telegram, WhatsApp, and custom web frontends',
              'Pedagogical safety guardrails to prevent off-topic drift, cheating, and hallucinations',
              'Student mastery tracking, comprehension scoring, and instructor analytics dashboard',
            ],
          },
          {
            id: 'automated-grading',
            name: 'Automated Code & Exam Evaluation',
            kicker: 'Deterministic grading engines with automated test harness execution and individualized feedback generation.',
            timeline: '2 to 4 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Deterministic code sandboxes that run and grade student submissions in isolated environments',
              'LLM-assisted formative feedback explaining errors, edge cases, and optimization tips',
              'Plagiarism and AI-generation heuristic analysis for academic integrity',
              'Automated certificate issuance and progress milestone verification',
            ],
          },
          {
            id: 'curriculum-rag',
            name: 'Curriculum-Grounded RAG Systems',
            kicker: 'Retrieval-augmented generation pipelines grounded strictly in proprietary textbooks and course materials.',
            timeline: '2 to 4 weeks',
            price: 'Price on request',
            status: 'price-on-request',
            cta: 'Request quote',
            deliverables: [
              'Document chunking, vector embedding, and semantic indexing of proprietary syllabi and lecture notes',
              'Strict citation retrieval requiring every response to quote specific lesson references',
              'Multi-lingual support allowing students to ask questions and learn in their preferred language',
              'Evaluation benchmarks measuring factual accuracy and retrieval latency under peak load',
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
      'Most of the hard engineering in applied AI happens after the prototype. These are the principles that guide our work.',
    rules: [
      {
        rule: 'Ground it in field and proprietary data',
        because: 'A model that relies on open web assumptions fails in rural agriculture or specialized technical education. Strict domain grounding and real-world telemetry beat generic prompts every time.',
      },
      {
        rule: 'Engineer for low-bandwidth and mobile reality',
        because: 'If software requires high-speed fiber or high-end laptops, it excludes the majority of the world. Text-first interfaces and lightweight runtimes are active technical requirements.',
      },
      {
        rule: 'Control compute and token costs at the architectural level',
        because: 'Unmonitored API calls and oversized compute clusters destroy software margins. Unit economics must be engineered directly into the system design.',
      },
      {
        rule: 'Ship working software, not speculative slide decks',
        because: 'Deployed, monitored, versioned, and recoverable via Infrastructure as Code. Real impact happens when code runs reliably in production.',
      },
      {
        rule: 'Leave partners in complete operational control',
        because: 'We commit modular code, automated pipelines, and thorough runbooks directly to our clients\' repositories. Architecture that requires indefinite external dependency is an operational risk.',
      },
    ],
  },

  /* ==========================================================================
     FOUNDER
     ====================================================================== */
  founder: {
    eyebrow: 'Who is behind it',
    name: 'Hussein Alamutu',
    role: 'Founder & Principal Systems Engineer',
    initials: 'HA',
    photo: 'assets/founder.jpg',
    body: [
      'Systems engineer with over five years of hands-on production experience in cloud architecture, CI/CD automation, and applied AI systems delivery across international and US-facing teams.',
      'Holds certifications as a Google Cloud Professional Cloud Architect, Google Cloud Associate Cloud Engineer, Microsoft Azure specialist, and Google Cloud Generative AI Leader, and serves as an Andela mentor for Kubernetes certifications.',
      'Alamz Tech Ltd combines that deep infrastructure rigor with applied machine learning to build scalable software for the two most critical levers of global development: education and agriculture.',
    ],
  },

  /* ==========================================================================
     CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Ready to build with our studio or deploy applied AI in your operations?',
    body:
      'Whether you are an agribusiness seeking to de-risk outgrower supply, an education platform scaling interactive instruction, or an organization building custom AI, let us explore how we can work together.',
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
        { name: 'organisation', label: 'Company / Organization name', type: 'text', required: true },
        { name: 'reason', label: 'What is this about?', type: 'select', required: true,
          options: [
            'AgriYield Pilot / Agribusiness Partnership',
            'EarnWithDevOps Enterprise Inquiries',
            'Custom AgriTech AI Co-Build',
            'Custom EdTech AI Co-Build',
            'General inquiry',
          ] },
        { name: 'message', label: 'Message', type: 'textarea', required: true,
          help: 'A few details about your operational scale, target data sources, or key goals.' },
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
