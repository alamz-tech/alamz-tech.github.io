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
      'Alamz Tech builds applied AI products for agriculture and technical education - helping businesses make better decisions and helping people build skills that lead to real opportunities.\n\n' +
      'Our ambition is simple: help feed 100 million people and upskill 10 million minds. Made in Nigeria, Built for the world',
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
      { k: 'Mission Target',  v: '100M people fed, 10M minds upskilled' },
    ],
    capabilitiesFoot:
      'Applied AI software for food security and technical education: 100M fed, 10M upskilled, from Nigeria for the world.',
  },

  /* ==========================================================================
     SOCIAL
     ====================================================================== */
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/alamz-technology/' },
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
    heading: 'The big dream is the direction. The 1% is the work.',
    body: [
      'Feeding ten billion people and upskilling one billion minds is the big horizon. But nobody builds a ten billion dream overnight. At Alamz Tech, we focus on the practical 1%: helping feed 100 million people and upskilling 10 million minds.',
      'Food security feeds the body; technical education feeds the future. In agriculture, that means software that processes satellite imagery, forecasts harvest volumes, and helps agribusinesses run reliable outgrower networks without guesswork. In education, it means coaching that runs over low bandwidth and takes people from absolute beginner to certified engineers without expensive laptops or tuition fees.',
      'We build our own products, and we partner with agribusinesses and institutions to deploy production AI systems directly into their operations. Built in Nigeria, for the world.',
    ],
  },

  /* ==========================================================================
     WHAT WE DO (Offerings Overview)
     ====================================================================== */
  offerings: {
    eyebrow: 'What we do',
    heading: 'Two ways we build software for the mission.',
    body:
      'We develop our own AI products, and we partner with organizations to build custom systems in production.',
    items: [
      {
        name: 'Products',
        state: 'Our Products',
        tone: 'warm',
        body:
          'EarnWithDevOps coaches engineers into certified cloud and DevOps careers. AgriYield gives agribusinesses satellite yield forecasts and outgrower management.',
        icon: 'cube',
        href: '#products',
        linkLabel: 'Explore products',
      },
      {
        name: 'Services',
        state: 'Custom Engineering',
        tone: 'warm',
        body:
          'We work directly with agribusinesses, food processors, and education providers to build custom vision models, forecasting pipelines, and tutoring systems inside their stack.',
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
      kicker: 'Hands-on cloud and DevOps training delivered via chat',
      status: 'live',
      ctaUrl: 'https://ewd.alamztech.com',
      ctaLabel: 'Start learning free',
      body:
        'A chat-based coach on Telegram that guides engineers from fundamentals to recognized professional certifications in ' +
        'AWS, Google Cloud, Kubernetes, Terraform, and GitHub Actions. ' +
        'Hands-on labs run in real cloud environments without requiring a credit card, ' +
        'with automated grading that tests your actual code and infrastructure.',
      note:
        'Built text-first to run fast over low-bandwidth mobile connections.',
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
      kicker: 'Yield forecasting and outgrower intelligence for commercial agriculture',
      status: 'in-development',
      ctaUrl: '',
      ctaLabel: 'Join pilot waitlist',
      body:
        'A software platform combining satellite imagery, weather data, and mobile field updates. ' +
        'AgriYield monitors farm clusters, estimates harvest volumes, and tracks outgrower networks for commercial food processors, ' +
        'commodity aggregators, and agricultural lenders.',
      note:
        'Gives teams clear visibility into crop progress and harvest timing across remote farms without relying on slow, expensive manual field audits.',
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
    heading: 'Demos only have to work once. Production systems have to hold up under real traffic.',
    body:
      'Most of the hard engineering in AI happens after the prototype. These are the principles that guide our work.',
    rules: [
      {
        rule: 'Ground models in real field data',
        because: 'Generic internet prompts fall apart in farming and specialized technical training. Real-world telemetry and validated data beat clever prompt engineering every time.',
      },
      {
        rule: 'Build for low bandwidth and mobile reality',
        because: 'If software requires fiber speeds or high-end laptops, it excludes the majority of users. Lightweight runtimes and text-first interfaces are core requirements.',
      },
      {
        rule: 'Control compute and API costs from day one',
        because: 'Unchecked API calls and oversized clusters burn through budgets fast. Unit economics have to be engineered into the system architecture from the start.',
      },
      {
        rule: 'Ship working software, not pitch decks',
        because: 'Code that is versioned, automated, and running in production creates real value. Not slide decks or prototypes that never touch real users.',
      },
      {
        rule: 'Leave partners in complete control of their code',
        because: 'We write clean, modular code and clear documentation directly in your repositories. Software that traps you in permanent contractor dependency is an operational liability.',
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
      'Systems engineer with over five years of hands-on experience designing cloud infrastructure, automated CI/CD pipelines, and applied AI systems for international teams.',
      'Has mentored engineers through Kubernetes and cloud engineering programs, focusing on building practical, reliable systems rather than chasing tech trends.',
      'Alamz Tech Ltd pairs infrastructure discipline with applied machine learning to solve real problems where it matters most: food production and technical education.',
    ],
  },

  /* ==========================================================================
     CONTACT
     ====================================================================== */
  contact: {
    eyebrow: 'Work with us',
    heading: 'Ready to build together or deploy applied AI in your operations?',
    body:
      'Whether you run an agribusiness, manage a training program, or want to build custom AI software, get in touch.',
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
    note: '',
  },

  /* ==========================================================================
     ANALYTICS
     ====================================================================== */
  analytics: '',

};
