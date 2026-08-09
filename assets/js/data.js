/* Learning & Capability Catalogue — normalized content model
   Source: workshop catalogues, ScoreReport (4yr), Scrum.org / KU / SAFe offerings
*/
window.CATALOGUE = {
  meta: {
    title: "Learning & Capability Catalogue",
    owner: "Sanjay Singh Rawat",
    email: "sanjay.scrum@gmail.com",
    updated: "2026-08-09",
    profiles: {
      trainer: "https://sanjaypst1.github.io/sanjay-training-profile/",
      scrum: "https://www.scrum.org/sanjay-singh-rawat",
      kanban: "https://kanban.university/kuapps/user/6621",
      linkedin: "https://www.linkedin.com/in/sanjaysingh13/"
    },
    impact: {
      people: "2,100+",
      countries: "30+",
      sessions: "~170",
      passRate: "~88%",
      years: "Last 4 years",
      clients: ["UBS", "EY", "ADB", "NatWest / RBS", "Boston Scientific", "AXA", "Amdocs", "DP World"],
      geographies: ["India", "Singapore", "Switzerland", "Philippines", "Poland", "UK", "Malaysia", "Hong Kong", "USA", "UAE"]
    }
  },

  domains: [
    { id: "agile-scrum", name: "Agile & Scrum", blurb: "Empirical product delivery with Scrum." },
    { id: "product", name: "Product Management", blurb: "Vision, value, backlog, and outcomes." },
    { id: "kanban-flow", name: "Kanban & Flow", blurb: "Service delivery, WIP, and predictability." },
    { id: "leadership", name: "Agile Leadership", blurb: "Lead self-managing teams and change." },
    { id: "safe-scale", name: "SAFe & Scaling", blurb: "Enterprise agility at scale." },
    { id: "delivery", name: "Project & Program Delivery", blurb: "Transition from project to product ways of working." },
    { id: "consulting", name: "Capability Consulting", blurb: "Proficiency-based organisational product ownership programs." }
  ],

  levels: [
    { id: "beginner", name: "Beginner", order: 1 },
    { id: "intermediate", name: "Intermediate", order: 2 },
    { id: "advanced", name: "Advanced", order: 3 },
    { id: "expert", name: "Expert", order: 4 }
  ],

  roles: [
    { id: "scrum-master", name: "Scrum Master", domain: "agile-scrum" },
    { id: "product-owner", name: "Product Owner", domain: "product" },
    { id: "product-manager", name: "Product Manager", domain: "product" },
    { id: "project-manager", name: "Project Manager", domain: "delivery" },
    { id: "program-manager", name: "Program Manager", domain: "delivery" },
    { id: "portfolio-manager", name: "Portfolio Manager", domain: "safe-scale" },
    { id: "business-analyst", name: "Business Analyst", domain: "product" },
    { id: "agile-coach", name: "Agile Coach", domain: "leadership" },
    { id: "team-leader", name: "Team Leader", domain: "leadership" },
    { id: "executive", name: "Executive Leader", domain: "leadership" },
    { id: "rte", name: "Release Train Engineer", domain: "safe-scale" },
    { id: "ops-manager", name: "Operations / Service Manager", domain: "kanban-flow" }
  ],

  skills: [
    "Scrum Framework", "Facilitation", "Coaching", "Product Vision", "Backlog Management",
    "Stakeholder Management", "Forecasting", "Flow Metrics", "WIP Limits", "Lean Thinking",
    "Systems Thinking", "Change Leadership", "OKRs", "Evidence-Based Management",
    "ART Execution", "Lean Portfolio Management", "Servant Leadership", "Risk Management",
    "Proficiency Design", "Product Operations", "Outcome Roadmapping", "GTM Enablement",
    "Portfolio Viability", "Front Door Intake"
  ],

  competencies: [
    { id: "empirical-delivery", name: "Empirical Delivery" },
    { id: "product-value", name: "Product Value Maximization" },
    { id: "team-enablement", name: "Team Enablement" },
    { id: "flow-optimization", name: "Flow Optimization" },
    { id: "strategic-alignment", name: "Strategic Alignment" },
    { id: "org-agility", name: "Organizational Agility" },
    { id: "stakeholder-influence", name: "Stakeholder Influence" },
    { id: "continuous-improvement", name: "Continuous Improvement" }
  ],

  courses: [
    {
      id: "psm1",
      title: "Professional Scrum Master I",
      short: "Foundational Scrum Master accountability with experiential practice.",
      description: "Immersive two-day workshop for people stepping into or strengthening the Scrum Master role. Focus on empiricism, facilitation, self-managing teams, and helping organizations deliver value with Scrum.",
      objectives: [
        "Explain Scrum theory, values, and empiricism",
        "Connect events, artifacts, and accountabilities to principles",
        "Facilitate transparency and a meaningful Definition of Done",
        "Coach teams toward self-management and continuous improvement",
        "Apply backlog-driven planning under uncertainty"
      ],
      audience: ["Scrum Masters", "Project / Program Managers transitioning to Agile", "Team Leads", "Agile Team Members", "Business Analysts"],
      roles: ["scrum-master", "project-manager", "team-leader", "business-analyst", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days · 16 hours",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "beginner",
      domain: "agile-scrum",
      prerequisites: ["None"],
      skills: ["Scrum Framework", "Facilitation", "Coaching", "Servant Leadership"],
      competencies: ["empirical-delivery", "team-enablement", "continuous-improvement"],
      tools: ["Mural / Miro", "Zoom", "Scrum.org assessments"],
      followOn: ["psm2", "psmpo", "psk", "pal"],
      certification: { body: "Scrum.org", name: "PSM I", attempts: "Voucher + complementary retry" },
      outcomes: ["Shared Scrum language across delivery teams", "Stronger facilitation of Scrum events", "Clearer Scrum Master leadership behaviours"],
      tags: ["scrum", "certification", "foundation", "popular"],
      trending: true,
      priceNote: "From SGD 840* (offer context vs SGD 1400 list)",
      link: "https://www.scrum.org/assessments/professional-scrum-master-i-certification"
    },
    {
      id: "pspo1",
      title: "Professional Product Owner I",
      short: "Bridge strategy to execution through product ownership.",
      description: "Hands-on Product Owner workshop covering vision, value, backlog management, forecasting, release planning, and stakeholder collaboration.",
      objectives: [
        "Increase business agility through effective Product Owner accountability",
        "Translate strategy into Product Goals and backlog decisions",
        "Apply prioritization and forecasting techniques",
        "Measure value creation with meaningful metrics",
        "Engage stakeholders without losing product focus"
      ],
      audience: ["Product Owners", "Product Managers", "Business Analysts", "Project / Program Managers"],
      roles: ["product-owner", "product-manager", "business-analyst", "project-manager"],
      durationHours: 16,
      durationLabel: "2 days · 16 hours",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "beginner",
      domain: "product",
      prerequisites: ["None"],
      skills: ["Product Vision", "Backlog Management", "Stakeholder Management", "Forecasting", "OKRs"],
      competencies: ["product-value", "strategic-alignment", "stakeholder-influence"],
      tools: ["Vision Canvas", "Mural / Miro", "Scrum.org assessments"],
      followOn: ["pspo2", "product-mgmt", "pal-ebm", "safe-popm"],
      certification: { body: "Scrum.org", name: "PSPO I", attempts: "Voucher + complementary retry" },
      outcomes: ["Clearer product decision-making", "Better stakeholder alignment", "Backlogs that reflect value, not activity"],
      tags: ["product", "certification", "foundation", "popular"],
      trending: true,
      priceNote: "From SGD 840* (offer context vs SGD 1400 list)",
      link: "https://www.scrum.org/assessments/professional-scrum-product-owner-i-certification"
    },
    {
      id: "pal",
      title: "Professional Agile Leadership",
      short: "Lead the shift from traditional management to agile leadership.",
      description: "For leaders guiding Agile transformations — management style shifts, enabling self-managing teams, removing impediments, and fostering organisational agility.",
      objectives: [
        "Describe how agility improves organisational performance",
        "Identify transformation impediments and leadership responses",
        "Shift from command-and-control to enabling leadership",
        "Assess and grow team agile maturity",
        "Connect personal, team, and Scrum values to outcomes"
      ],
      audience: ["Line Managers", "Project / Program Managers", "Transformation Sponsors", "Team Leaders"],
      roles: ["team-leader", "executive", "program-manager", "project-manager", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days · 16 hours",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "leadership",
      prerequisites: ["Working knowledge of Agile / Scrum recommended"],
      skills: ["Change Leadership", "Servant Leadership", "Systems Thinking", "Coaching"],
      competencies: ["org-agility", "team-enablement", "strategic-alignment"],
      tools: ["Leadership canvases", "Mural / Miro"],
      followOn: ["pal-ebm", "leading-safe", "psm2"],
      certification: { body: "Scrum.org", name: "PAL I", attempts: "Voucher + complementary retry" },
      outcomes: ["Leaders who enable rather than control", "Clearer transformation sponsorship", "Healthier team environments"],
      tags: ["leadership", "certification", "transformation"],
      priceNote: "From SGD 840* (offer context vs SGD 1400 list)"
    },
    {
      id: "psmpo",
      title: "Scrum Facilitator’s Master Class (PSMPO)",
      short: "Private dual-track master class for intact product teams.",
      description: "Private cohort where Scrum Masters, Product Owners, engineers, and stakeholders learn together. Designed to grow joint proficiency and team bonding around a context-fit Scrum implementation.",
      objectives: [
        "Build shared Agile mindset across the whole team",
        "Practice SM and PO accountabilities as complementary roles",
        "Strengthen product vision, backlog, and release planning",
        "Clarify Done and self-managing team behaviours",
        "Leave with a team-customized working agreement"
      ],
      audience: ["Intact Scrum Teams / POD / Squad", "Scrum Masters", "Product Owners", "Engineers", "Stakeholders"],
      roles: ["scrum-master", "product-owner", "product-manager", "team-leader"],
      durationHours: 16,
      durationLabel: "Private cohort · typically 2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "agile-scrum",
      prerequisites: ["Organisation-sponsored private delivery"],
      skills: ["Scrum Framework", "Facilitation", "Product Vision", "Backlog Management", "Coaching"],
      competencies: ["empirical-delivery", "product-value", "team-enablement"],
      tools: ["Zoom", "Mural", "Team working agreements"],
      followOn: ["psm2", "pspo2", "psk"],
      certification: { body: "Scrum.org", name: "PSM I + PSPO I", attempts: "Codes for both; retry rules apply" },
      outcomes: ["Dual certification path", "Stronger SM–PO partnership", "Team-ready operating model"],
      tags: ["masterclass", "private", "dual-cert", "team"],
      priceNote: "SGD 1600 / person (from SGD 1900)",
      note: "Private organisational training only."
    },
    {
      id: "kanban-systems",
      title: "Kanban Systems Workshop",
      short: "Design operational Kanban systems with simulations and real boards.",
      description: "Hands-on Kanban for operations and service teams: visualise work, limit WIP, find bottlenecks, establish feedback loops, and create an evolutionary change roadmap.",
      objectives: [
        "Apply Kanban principles through live flow simulation",
        "Design boards with policies, swimlanes, and work item types",
        "Measure cycle time, lead time, and throughput",
        "Experiment with WIP limits to reduce multitasking",
        "Scale coordination with Flight Levels / portfolio views"
      ],
      audience: ["Operations & Service Managers", "Process Managers", "PMO", "Delivery Managers", "Compliance Managers"],
      roles: ["ops-manager", "project-manager", "program-manager", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "beginner",
      domain: "kanban-flow",
      prerequisites: ["None"],
      skills: ["Flow Metrics", "WIP Limits", "Lean Thinking", "Systems Thinking"],
      competencies: ["flow-optimization", "continuous-improvement"],
      tools: ["Kanban boards", "Flow metrics worksheets", "Mural / Miro"],
      followOn: ["kmp", "psk", "ksi"],
      certification: { body: "Practice workshop", name: "Certificate of completion / pathway to KMP", attempts: "—" },
      outcomes: ["Visualized operational workflows", "Reduced WIP and multitasking", "Actionable evolutionary change plan"],
      tags: ["kanban", "operations", "flow", "workshop"]
    },
    {
      id: "kmp",
      title: "Kanban Management Professional",
      short: "Kanban University pathway for system design and improvement.",
      description: "Credentialed Kanban path covering system design and systems improvement — flow optimisation, statistical forecasting, and enterprise service delivery.",
      objectives: [
        "Design fit-for-purpose Kanban systems",
        "Optimize flow and reduce bottlenecks",
        "Introduce WIP policies that stick",
        "Scale Kanban across portfolio services",
        "Improve predictability with probabilistic forecasting"
      ],
      audience: ["Operations leaders", "Agile Coaches", "Process Improvement Specialists", "Portfolio Managers"],
      roles: ["ops-manager", "agile-coach", "portfolio-manager", "program-manager"],
      durationHours: 16,
      durationLabel: "2 days · 2 credentials",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "kanban-flow",
      prerequisites: ["None (TKP helpful)"],
      skills: ["Flow Metrics", "WIP Limits", "Lean Thinking", "Risk Management"],
      competencies: ["flow-optimization", "org-agility", "continuous-improvement"],
      tools: ["Kanban University materials", "Flow analytics"],
      followOn: ["ksi", "psk", "leading-safe"],
      certification: { body: "Kanban University", name: "KMP", attempts: "Included in pathway" },
      outcomes: ["Credentialed Kanban capability", "More predictable service delivery", "Enterprise flow literacy"],
      tags: ["kanban", "certification", "flow"],
      link: "https://kanban.university/kanban-development-path/kmp-credential/"
    },
    {
      id: "product-mgmt",
      title: "Product Management Workshop",
      short: "Practice-led product skills from vision to evidence-based decisions.",
      description: "Two-day product management immersion: vision canvases, value validation, backlog prioritisation, OKRs, stakeholder negotiation, and servant leadership for product roles.",
      objectives: [
        "Create and communicate product vision and strategy",
        "Validate value with experiments and MVPs",
        "Prioritize backlogs using WSJF, MoSCoW, or Kano",
        "Connect Sprint Goals and OKRs to outcomes",
        "Influence stakeholders without authority"
      ],
      audience: ["Product Managers", "Product Owners", "Business Analysts", "Project / Program Managers"],
      roles: ["product-manager", "product-owner", "business-analyst", "project-manager"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face", "Campus cohort"],
      level: "intermediate",
      domain: "product",
      prerequisites: ["Basic Agile familiarity helpful"],
      skills: ["Product Vision", "OKRs", "Backlog Management", "Stakeholder Management"],
      competencies: ["product-value", "strategic-alignment", "stakeholder-influence"],
      tools: ["Vision Canvas", "Value Proposition Canvas", "Story Mapping"],
      followOn: ["pspo1", "pal-ebm", "safe-popm"],
      certification: { body: "Optional", name: "PSPO I prep pathway", attempts: "Campus formats may include attempts" },
      outcomes: ["Stronger product strategy literacy", "Evidence-based product decisions", "Career-ready product practices"],
      tags: ["product", "workshop", "practice"]
    },
    {
      id: "leading-safe",
      title: "Leading SAFe",
      short: "Lean-Agile leadership for enterprises running ARTs and LPM.",
      description: "Scaled Agile course for leaders implementing SAFe — business agility, Agile Release Trains, and Lean Portfolio Management foundations.",
      objectives: [
        "Apply Lean-Agile principles in large enterprises",
        "Drive business agility and digital transformation",
        "Stand up and support Agile Release Trains",
        "Introduce Lean Portfolio Management thinking"
      ],
      audience: ["Senior Leaders", "Program & Portfolio Managers", "Transformation Leaders"],
      roles: ["executive", "program-manager", "portfolio-manager", "rte"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "safe-scale",
      prerequisites: ["PSM I or PSPO I recommended", "KMP helpful for flow literacy"],
      skills: ["Lean Thinking", "ART Execution", "Lean Portfolio Management", "Change Leadership"],
      competencies: ["org-agility", "strategic-alignment", "flow-optimization"],
      tools: ["SAFe tooling concepts", "ART planning patterns"],
      followOn: ["safe-popm", "lpm", "ssm"],
      certification: { body: "Scaled Agile", name: "SAFe Agilist (SA)", attempts: "Exam included per SAFe policy" },
      outcomes: ["Shared SAFe language for leaders", "Clearer ART sponsorship", "Portfolio alignment foundations"],
      tags: ["safe", "certification", "scale", "leadership"],
      link: "https://scaledagile.com/training/leading-safe/"
    },
    {
      id: "safe-popm",
      title: "SAFe Product Owner / Product Manager",
      short: "Product roles at scale — Lean backlogs, dependencies, compliance-aware strategy.",
      description: "SAFe POPM for product people working across trains and large programs, with emphasis on customer-centric delivery and Lean backlog management.",
      objectives: [
        "Define customer-centric solutions at scale",
        "Apply Lean thinking to backlog management",
        "Manage cross-team dependencies",
        "Align product strategy with regulatory needs"
      ],
      audience: ["Product Owners", "Product Managers", "Business & IT Stakeholders"],
      roles: ["product-owner", "product-manager", "business-analyst", "rte"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "safe-scale",
      prerequisites: ["PSM I or PSPO I recommended", "KMP helpful"],
      skills: ["Backlog Management", "ART Execution", "Stakeholder Management", "Lean Thinking"],
      competencies: ["product-value", "strategic-alignment", "flow-optimization"],
      tools: ["SAFe Canvas patterns", "Program Board concepts"],
      followOn: ["leading-safe", "lpm", "pspo2"],
      certification: { body: "Scaled Agile", name: "POPM", attempts: "Exam included per SAFe policy" },
      outcomes: ["Product literacy on the ART", "Clearer PI backlog quality", "Better dependency management"],
      tags: ["safe", "product", "certification", "scale"],
      link: "https://scaledagile.com/training/safe-product-owner-product-manager/"
    },
    {
      id: "psm2",
      title: "Professional Scrum Master II",
      short: "Advanced Scrum Master stances, coaching, and organisational impact.",
      description: "Advanced facilitation, coaching, and leadership patterns for experienced Scrum Masters dealing with organisational complexity.",
      objectives: ["Deepen Scrum Master stances", "Coach product and leadership stakeholders", "Address structural impediments"],
      audience: ["Experienced Scrum Masters", "Agile Coaches"],
      roles: ["scrum-master", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "agile-scrum",
      prerequisites: ["PSM I or equivalent experience"],
      skills: ["Coaching", "Facilitation", "Change Leadership", "Systems Thinking"],
      competencies: ["team-enablement", "org-agility", "continuous-improvement"],
      tools: ["Coaching conversations", "Mural / Miro"],
      followOn: ["pal", "psk", "sps"],
      certification: { body: "Scrum.org", name: "PSM II", attempts: "Assessment pathway" },
      outcomes: ["More effective organisational coaching", "Stronger facilitation under conflict"],
      tags: ["scrum", "advanced", "certification"]
    },
    {
      id: "pspo2",
      title: "Professional Product Owner II",
      short: "Advanced product ownership for complex value streams.",
      description: "Elevate product strategy, stakeholder systems, and evidence-based product management beyond foundation level.",
      objectives: ["Advance product strategy practice", "Handle complex stakeholder systems", "Strengthen evidence-based decisions"],
      audience: ["Experienced Product Owners", "Product Managers"],
      roles: ["product-owner", "product-manager"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "product",
      prerequisites: ["PSPO I or equivalent experience"],
      skills: ["Product Vision", "Evidence-Based Management", "Stakeholder Management"],
      competencies: ["product-value", "strategic-alignment"],
      tools: ["EBM metrics", "Strategy canvases"],
      followOn: ["pal-ebm", "safe-popm"],
      certification: { body: "Scrum.org", name: "PSPO II", attempts: "Assessment pathway" },
      outcomes: ["Sharper product strategy", "Better value metrics"],
      tags: ["product", "advanced", "certification"]
    },
    {
      id: "pal-ebm",
      title: "PAL — Evidence-Based Management",
      short: "Measure capabilities and outcomes that improve business results.",
      description: "Learn Evidence-Based Management to inspect customer outcomes, time-to-market, innovation, and current value — and adapt investments accordingly.",
      objectives: ["Apply EBM key value areas", "Design experiments that inform investment", "Connect measures to leadership decisions"],
      audience: ["Leaders", "Product Managers", "Agile Coaches", "PMO"],
      roles: ["executive", "product-manager", "portfolio-manager", "agile-coach"],
      durationHours: 8,
      durationLabel: "1 day",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "leadership",
      prerequisites: ["Agile leadership or product experience"],
      skills: ["Evidence-Based Management", "OKRs", "Forecasting"],
      competencies: ["strategic-alignment", "product-value", "org-agility"],
      tools: ["EBM scoreboards"],
      followOn: ["pal", "pspo2"],
      certification: { body: "Scrum.org", name: "PAL-EBM", attempts: "Assessment pathway" },
      outcomes: ["Outcome-oriented measurement", "Better investment conversations"],
      tags: ["leadership", "metrics", "certification"]
    },
    {
      id: "psk",
      title: "Professional Scrum with Kanban",
      short: "Introduce flow practices inside Scrum without losing empiricism.",
      description: "Combine Scrum and Kanban practices to improve flow, forecasting, and service levels within Scrum Teams.",
      objectives: ["Add Kanban practices to Scrum", "Improve flow predictability", "Use little’s law thoughtfully"],
      audience: ["Scrum Masters", "Product Owners", "Flow coaches"],
      roles: ["scrum-master", "product-owner", "ops-manager", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "kanban-flow",
      prerequisites: ["Scrum experience"],
      skills: ["Scrum Framework", "Flow Metrics", "WIP Limits"],
      competencies: ["empirical-delivery", "flow-optimization"],
      tools: ["Scrum board + CFD"],
      followOn: ["kmp", "psm2"],
      certification: { body: "Scrum.org", name: "PSK I", attempts: "Assessment pathway" },
      outcomes: ["Smoother Sprint flow", "Better delivery forecasts"],
      tags: ["scrum", "kanban", "certification"]
    },
    {
      id: "sps",
      title: "Scaled Professional Scrum",
      short: "Scale Scrum with Nexus for multi-team product delivery.",
      description: "Learn Nexus to scale Scrum across multiple teams working on one product, focusing on dependency management and integration.",
      objectives: ["Apply Nexus framework", "Manage cross-team dependencies", "Maintain a single Product Backlog at scale"],
      audience: ["Scrum Masters", "Product Owners", "Leaders of multi-team products"],
      roles: ["scrum-master", "product-owner", "program-manager", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "agile-scrum",
      prerequisites: ["Solid Scrum experience"],
      skills: ["Scrum Framework", "Systems Thinking", "Facilitation"],
      competencies: ["empirical-delivery", "org-agility"],
      tools: ["Nexus patterns"],
      followOn: ["leading-safe", "psm2"],
      certification: { body: "Scrum.org", name: "SPS", attempts: "Assessment pathway" },
      outcomes: ["Clearer multi-team coordination", "Reduced integration risk"],
      tags: ["scrum", "scale", "certification"]
    },
    {
      id: "ssm",
      title: "SAFe Scrum Master",
      short: "Scrum Mastery in a SAFe ART context.",
      description: "Prepare Scrum Masters to facilitate team and ART events, support PI Planning, and coach teams in a SAFe environment.",
      objectives: ["Facilitate SAFe team events", "Support PI Planning", "Coach teams on the ART"],
      audience: ["Scrum Masters", "Team Coaches"],
      roles: ["scrum-master", "rte", "agile-coach"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "safe-scale",
      prerequisites: ["Scrum experience recommended"],
      skills: ["Facilitation", "ART Execution", "Coaching"],
      competencies: ["team-enablement", "flow-optimization"],
      tools: ["SAFe events toolkit"],
      followOn: ["leading-safe", "psm2"],
      certification: { body: "Scaled Agile", name: "SSM", attempts: "Exam included per SAFe policy" },
      outcomes: ["ART-ready Scrum Masters", "Better PI Inspect & Adapt support"],
      tags: ["safe", "scrum", "certification"]
    },
    {
      id: "lpm",
      title: "Lean Portfolio Management",
      short: "Align strategy, funding, and execution with Lean portfolio practices.",
      description: "SAFe LPM for leaders connecting portfolio vision, lean budgeting, and operational excellence.",
      objectives: ["Connect strategy to funding", "Apply lean budgeting guardrails", "Improve portfolio flow"],
      audience: ["Portfolio Managers", "Executives", "PMO / VMO"],
      roles: ["portfolio-manager", "executive", "program-manager"],
      durationHours: 16,
      durationLabel: "2 days",
      delivery: ["Facilitator-led"],
      format: ["Virtual", "Face-to-face"],
      level: "expert",
      domain: "safe-scale",
      prerequisites: ["Leading SAFe or equivalent leadership experience"],
      skills: ["Lean Portfolio Management", "Strategic Alignment", "Forecasting"],
      competencies: ["strategic-alignment", "org-agility"],
      tools: ["Portfolio Kanban", "Lean business cases"],
      followOn: ["leading-safe", "pal-ebm"],
      certification: { body: "Scaled Agile", name: "LPM", attempts: "Exam included per SAFe policy" },
      outcomes: ["Strategy-to-execution clarity", "Leaner funding conversations"],
      tags: ["safe", "portfolio", "certification", "expert"]
    },
    {
      id: "cornerstone",
      type: "consulting",
      title: "CORNERSTONE · Proficiency-Based Product Ownership",
      short: "Organisational consulting program that turns product strategy, value, coordination, GTM, adoption, and portfolio viability into run-ready capability.",
      description: "CORNERSTONE is a proficiency-based consulting and learning model for Manager+ product leaders moving from delivery habits to product ownership. It calibrates baseline proficiency, orients teams on a shared product-operations language, routes people into Foundation / Intermediate / Advanced pathways, nurtures capability through focused studios, enacts learning on live product work with coaching, reviews proficiency proof, and sustains rituals for 90 days. Designed for mixed-proficiency cohorts where title does not equal product practice — so ownership becomes structured operating system, not tribal knowledge.",
      objectives: [
        "Baseline product-operations proficiency across a Manager+ cohort",
        "Create shared language for product-based ways of working",
        "Route colleagues into Foundation, Intermediate, or Advanced pathways",
        "Build ownership through studios plus live product application",
        "Prove proficiency with observable artefacts — not attendance alone",
        "Embed rituals into BAU for 90-day sustainment"
      ],
      audience: [
        "Product Management / Product Operations leaders",
        "Manager, Senior Manager, Associate Director, Director cohorts",
        "Experienced project managers transitioning to product ownership",
        "Transformation sponsors embedding a product operating model"
      ],
      roles: ["product-owner", "product-manager", "project-manager", "program-manager", "executive", "team-leader", "business-analyst"],
      durationHours: 96,
      durationLabel: "12-week proficiency journey",
      delivery: ["Consulting engagement", "Facilitator-led", "Coaching"],
      format: ["Hybrid", "Virtual", "Face-to-face"],
      level: "advanced",
      domain: "consulting",
      prerequisites: [
        "Named sponsor and protected cohort time",
        "Live product work available for Enact phase",
        "Roster with role + current operating-cycle stage"
      ],
      skills: [
        "Proficiency Design", "Product Operations", "Product Vision", "Backlog Management",
        "Outcome Roadmapping", "GTM Enablement", "Portfolio Viability", "Change Leadership",
        "Stakeholder Management", "Front Door Intake"
      ],
      competencies: ["product-value", "strategic-alignment", "org-agility", "stakeholder-influence", "continuous-improvement"],
      tools: [
        "Proficiency baseline scenarios",
        "Product operations cycle map",
        "Coaching circles",
        "Proficiency demos & leadership showcase",
        "90-day embed plan"
      ],
      followOn: ["value-in-practice", "outcomes-leadership", "pspo1", "pal-ebm"],
      certification: { body: "Consulting program", name: "Proficiency badges (Foundation → Advanced)", attempts: "Evidence-based showcase" },
      outcomes: [
        "Shared product operating system across the cohort",
        "Clearer value decisions and healthier backlog flow",
        "Observable proficiency uplift on live product work",
        "Sustained PO rituals in business-as-usual"
      ],
      tags: ["consulting", "cornerstone", "product-ops", "proficiency", "featured"],
      trending: true,
      priceNote: "Enterprise cohort engagement — proposal based",
      note: "Includes Calibrate · Orient · Route · Nurture · Enact · Review · Sustain. Studios are typically delivered as separate cohorts by proficiency level — not one classroom for everyone."
    },
    {
      id: "value-in-practice",
      type: "consulting",
      title: "Value in Practice Studio",
      short: "2-day studio for backlog craft, goals, prioritisation, slicing, Scrum events, and PO maturity — Foundation → Intermediate.",
      description: "Hands-on consulting studio for product leaders who need practical Product Owner craft. Covers backlog management, weekly/monthly goals, estimation, prioritisation frameworks, front-door intake, capability-to-story slicing, Scrum event ownership, and a PO maturity self-placement — then applied on live product cases.",
      objectives: [
        "Run a transparent, value-ordered Product Backlog",
        "Set weekly and monthly outcome goals",
        "Prioritise with value, risk, learning, and dependency trade-offs",
        "Slice work from capability → epic → feature → user story",
        "Install a Front Door intake for requests and break-ins",
        "Demonstrate PO maturity behaviours with a 30-day apply plan"
      ],
      audience: ["Emerging and practicing Product Owners", "Manager+ leaders building foundation product craft", "BAs and PMs moving into ownership"],
      roles: ["product-owner", "product-manager", "business-analyst", "project-manager", "team-leader"],
      durationHours: 16,
      durationLabel: "2-day studio",
      delivery: ["Facilitator-led", "Consulting studio"],
      format: ["Virtual", "Face-to-face"],
      level: "intermediate",
      domain: "consulting",
      prerequisites: ["Part of CORNERSTONE or standalone private cohort"],
      skills: ["Backlog Management", "Front Door Intake", "Forecasting", "Scrum Framework", "Product Vision"],
      competencies: ["product-value", "empirical-delivery", "stakeholder-influence"],
      tools: ["Backlog studio", "Prioritisation frameworks", "PO maturity model", "Front Door intake canvas"],
      followOn: ["outcomes-leadership", "cornerstone", "pspo1"],
      certification: { body: "Aligned prep", name: "PSPO I / Product Backlog Management skills pathway", attempts: "Optional assessment prep" },
      outcomes: ["Ordered backlog + refinement demo", "Front Door intake in place", "30-day ownership apply plan"],
      tags: ["consulting", "studio", "product", "cornerstone"],
      priceNote: "Private studio pricing"
    },
    {
      id: "outcomes-leadership",
      type: "consulting",
      title: "Outcomes Leadership Studio",
      short: "2-day studio for roles, E2E delivery, vision/strategy/roadmap, quarterly goals, 90-day & FY planning — Intermediate → Advanced.",
      description: "Leadership studio for product leaders ready to own outcomes across the full product journey. Covers roles and RACI with partner teams, end-to-end delivery ownership, vision and strategy, roadmaps, quarterly goals, GTM/enablement, adoption/CX loops, and portfolio viability trade-offs — practiced on live opportunities.",
      objectives: [
        "Clarify PO vs partner-team responsibilities across the product journey",
        "Connect vision → strategy → roadmap → quarterly outcomes",
        "Run 90-day and financial-year planning with investment trade-offs",
        "Strengthen value propositions and discovery/validation habits",
        "Own GTM, enablement, adoption, and portfolio viability conversations"
      ],
      audience: ["Intermediate and advanced product leaders", "Directors and portfolio decision-makers", "Leaders coordinating cross-functional product delivery"],
      roles: ["product-manager", "product-owner", "program-manager", "portfolio-manager", "executive"],
      durationHours: 16,
      durationLabel: "2-day studio",
      delivery: ["Facilitator-led", "Consulting studio"],
      format: ["Virtual", "Face-to-face"],
      level: "advanced",
      domain: "consulting",
      prerequisites: ["Product ownership foundations or Value in Practice recommended"],
      skills: ["Outcome Roadmapping", "GTM Enablement", "Portfolio Viability", "Product Vision", "OKRs", "Change Leadership"],
      competencies: ["strategic-alignment", "product-value", "org-agility", "stakeholder-influence"],
      tools: ["Planning horizon map", "Value proposition packs", "90-day / FY planning clinic", "Leadership proficiency demo"],
      followOn: ["cornerstone", "pal-ebm", "lpm", "pspo2"],
      certification: { body: "Aligned prep", name: "PPDV / PAL leadership pathway", attempts: "Optional assessment prep" },
      outcomes: ["Outcome roadmap artefacts", "90-day / FY planning pack", "60-day leadership action plan"],
      tags: ["consulting", "studio", "leadership", "cornerstone"],
      priceNote: "Private studio pricing"
    }
  ],

  paths: [
    {
      id: "path-sm",
      role: "scrum-master",
      name: "Scrum Master Pathway",
      blurb: "From foundation facilitation to organisational coaching.",
      hours: 64,
      steps: [
        { level: "beginner", courseId: "psm1" },
        { level: "intermediate", courseId: "psk" },
        { level: "advanced", courseId: "psm2" },
        { level: "expert", courseId: "sps" }
      ]
    },
    {
      id: "path-po",
      role: "product-owner",
      name: "Product Owner Pathway",
      blurb: "Own value from vision through evidence-based decisions.",
      hours: 56,
      steps: [
        { level: "beginner", courseId: "pspo1" },
        { level: "intermediate", courseId: "product-mgmt" },
        { level: "advanced", courseId: "pspo2" },
        { level: "expert", courseId: "pal-ebm" }
      ]
    },
    {
      id: "path-pm",
      role: "project-manager",
      name: "Project Manager → Agile Delivery",
      blurb: "Transition classic PM strengths into agile delivery leadership.",
      hours: 48,
      steps: [
        { level: "beginner", courseId: "psm1" },
        { level: "intermediate", courseId: "pspo1" },
        { level: "advanced", courseId: "pal" },
        { level: "expert", courseId: "leading-safe" }
      ]
    },
    {
      id: "path-pgm",
      role: "program-manager",
      name: "Program Manager Pathway",
      blurb: "Coordinate multi-team value with Scrum, flow, and SAFe literacy.",
      hours: 64,
      steps: [
        { level: "beginner", courseId: "psm1" },
        { level: "intermediate", courseId: "psk" },
        { level: "advanced", courseId: "sps" },
        { level: "expert", courseId: "leading-safe" }
      ]
    },
    {
      id: "path-prod-mgr",
      role: "product-manager",
      name: "Product Manager Pathway",
      blurb: "Strategy, discovery, and scaled product ownership.",
      hours: 64,
      steps: [
        { level: "beginner", courseId: "pspo1" },
        { level: "intermediate", courseId: "product-mgmt" },
        { level: "advanced", courseId: "safe-popm" },
        { level: "expert", courseId: "pal-ebm" }
      ]
    },
    {
      id: "path-cornerstone",
      role: "product-manager",
      name: "Product Organisation · CORNERSTONE",
      blurb: "Proficiency-based consulting journey from delivery habits to run-ready product ownership.",
      hours: 96,
      steps: [
        { level: "beginner", courseId: "value-in-practice" },
        { level: "intermediate", courseId: "outcomes-leadership" },
        { level: "advanced", courseId: "cornerstone" },
        { level: "expert", courseId: "pal-ebm" }
      ]
    },
    {
      id: "path-ops",
      role: "ops-manager",
      name: "Operations & Flow Pathway",
      blurb: "Service delivery excellence with Kanban systems.",
      hours: 48,
      steps: [
        { level: "beginner", courseId: "kanban-systems" },
        { level: "intermediate", courseId: "kmp" },
        { level: "advanced", courseId: "psk" },
        { level: "expert", courseId: "lpm" }
      ]
    },
    {
      id: "path-exec",
      role: "executive",
      name: "Executive Leader Pathway",
      blurb: "Sponsor agility with leadership, evidence, and portfolio lean.",
      hours: 48,
      steps: [
        { level: "beginner", courseId: "pal" },
        { level: "intermediate", courseId: "leading-safe" },
        { level: "advanced", courseId: "pal-ebm" },
        { level: "expert", courseId: "lpm" }
      ]
    },
    {
      id: "path-rte",
      role: "rte",
      name: "Release Train Engineer Pathway",
      blurb: "Facilitate ARTs with Scrum Mastery and SAFe leadership.",
      hours: 64,
      steps: [
        { level: "beginner", courseId: "psm1" },
        { level: "intermediate", courseId: "ssm" },
        { level: "advanced", courseId: "leading-safe" },
        { level: "expert", courseId: "lpm" }
      ]
    },
    {
      id: "path-ba",
      role: "business-analyst",
      name: "Business Analyst Pathway",
      blurb: "From requirements thinking to product collaboration.",
      hours: 48,
      steps: [
        { level: "beginner", courseId: "pspo1" },
        { level: "intermediate", courseId: "product-mgmt" },
        { level: "advanced", courseId: "psm1" },
        { level: "expert", courseId: "safe-popm" }
      ]
    },
    {
      id: "path-coach",
      role: "agile-coach",
      name: "Agile Coach Pathway",
      blurb: "Coach teams and systems across Scrum, Kanban, and leadership.",
      hours: 64,
      steps: [
        { level: "beginner", courseId: "psm1" },
        { level: "intermediate", courseId: "kmp" },
        { level: "advanced", courseId: "psm2" },
        { level: "expert", courseId: "pal" }
      ]
    }
  ],

  /* Role capability matrices: 1=aware … 4=expert target after pathway */
  capabilities: {
    "scrum-master": {
      matrix: [
        { competency: "empirical-delivery", target: 4 },
        { competency: "team-enablement", target: 4 },
        { competency: "continuous-improvement", target: 4 },
        { competency: "flow-optimization", target: 3 },
        { competency: "stakeholder-influence", target: 3 },
        { competency: "org-agility", target: 3 }
      ],
      knowledge: ["Scrum Guide", "Facilitation patterns", "Coaching stances", "Flow basics"],
      certifications: ["PSM I", "PSK I", "PSM II", "SPS"]
    },
    "product-owner": {
      matrix: [
        { competency: "product-value", target: 4 },
        { competency: "strategic-alignment", target: 4 },
        { competency: "stakeholder-influence", target: 4 },
        { competency: "empirical-delivery", target: 3 },
        { competency: "continuous-improvement", target: 3 }
      ],
      knowledge: ["Product visioning", "Backlog management", "EBM", "Discovery habits"],
      certifications: ["PSPO I", "PSPO II", "PAL-EBM"]
    },
    "product-manager": {
      matrix: [
        { competency: "product-value", target: 4 },
        { competency: "strategic-alignment", target: 4 },
        { competency: "stakeholder-influence", target: 4 },
        { competency: "org-agility", target: 3 },
        { competency: "flow-optimization", target: 3 }
      ],
      knowledge: ["Strategy & roadmapping", "OKRs", "Scaled product ownership"],
      certifications: ["PSPO I", "POPM", "PAL-EBM"]
    },
    "project-manager": {
      matrix: [
        { competency: "empirical-delivery", target: 3 },
        { competency: "stakeholder-influence", target: 4 },
        { competency: "team-enablement", target: 3 },
        { competency: "org-agility", target: 3 },
        { competency: "strategic-alignment", target: 3 }
      ],
      knowledge: ["Scrum basics", "Agile leadership", "SAFe literacy"],
      certifications: ["PSM I", "PSPO I", "PAL I", "SA"]
    },
    "program-manager": {
      matrix: [
        { competency: "org-agility", target: 4 },
        { competency: "flow-optimization", target: 3 },
        { competency: "strategic-alignment", target: 4 },
        { competency: "stakeholder-influence", target: 4 }
      ],
      knowledge: ["Multi-team coordination", "Nexus / SAFe", "Dependency management"],
      certifications: ["PSM I", "SPS", "SA"]
    },
    "executive": {
      matrix: [
        { competency: "org-agility", target: 4 },
        { competency: "strategic-alignment", target: 4 },
        { competency: "product-value", target: 3 },
        { competency: "flow-optimization", target: 3 }
      ],
      knowledge: ["Agile leadership", "EBM", "Lean portfolio"],
      certifications: ["PAL I", "SA", "PAL-EBM", "LPM"]
    },
    "ops-manager": {
      matrix: [
        { competency: "flow-optimization", target: 4 },
        { competency: "continuous-improvement", target: 4 },
        { competency: "org-agility", target: 3 },
        { competency: "strategic-alignment", target: 3 }
      ],
      knowledge: ["Kanban method", "Service classes", "Flow metrics"],
      certifications: ["KMP", "PSK I"]
    },
    "rte": {
      matrix: [
        { competency: "flow-optimization", target: 4 },
        { competency: "team-enablement", target: 4 },
        { competency: "org-agility", target: 4 },
        { competency: "stakeholder-influence", target: 3 }
      ],
      knowledge: ["ART operations", "PI Planning", "Lean portfolio basics"],
      certifications: ["PSM I", "SSM", "SA", "LPM"]
    },
    "business-analyst": {
      matrix: [
        { competency: "product-value", target: 3 },
        { competency: "stakeholder-influence", target: 4 },
        { competency: "empirical-delivery", target: 3 },
        { competency: "strategic-alignment", target: 3 }
      ],
      knowledge: ["Backlog refinement", "Discovery", "Product collaboration"],
      certifications: ["PSPO I", "POPM"]
    },
    "agile-coach": {
      matrix: [
        { competency: "team-enablement", target: 4 },
        { competency: "org-agility", target: 4 },
        { competency: "continuous-improvement", target: 4 },
        { competency: "flow-optimization", target: 3 }
      ],
      knowledge: ["Coaching ethics", "Scrum & Kanban", "Leadership enablement"],
      certifications: ["PSM I", "KMP", "PSM II", "PAL I"]
    },
    "portfolio-manager": {
      matrix: [
        { competency: "strategic-alignment", target: 4 },
        { competency: "org-agility", target: 4 },
        { competency: "flow-optimization", target: 3 },
        { competency: "product-value", target: 3 }
      ],
      knowledge: ["Lean budgeting", "Portfolio Kanban", "Strategy deployment"],
      certifications: ["SA", "LPM", "PAL-EBM"]
    },
    "team-leader": {
      matrix: [
        { competency: "team-enablement", target: 4 },
        { competency: "empirical-delivery", target: 3 },
        { competency: "org-agility", target: 3 },
        { competency: "stakeholder-influence", target: 3 }
      ],
      knowledge: ["Servant leadership", "Scrum team health", "Change leadership"],
      certifications: ["PSM I", "PAL I"]
    }
  }
};
