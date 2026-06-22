/* ============================================================
   content.js — single source of truth for all editable content.
   Loaded on every page (before each page's render script) and by
   admin.html. Edits made in the admin are saved to localStorage
   and merged over these defaults, so the public pages update live.
   ============================================================ */
(function () {
  var KEY = "aks_portfolio_content_v2";

  var DEFAULTS = {
    hero: {
      eyebrow: "Professional Engineer & Researcher",
      name1: "Avinash",
      name2: "Kumar Singh",
      subtitle: "Specializing in Digital Manufacturing & Industry 4.0",
      bio: "Professional Mechanical Engineer and Ph.D. Scholar bridging academic research with industrial automation. Specializing in Digital Twins, Generative Design, and Virtual Commissioning using 3DEXPERIENCE and CAD/CAM platforms.",
      chips: ["Product Design", "Simulation", "PLM", "Digital Manufacturing", "Digital Twin", "Industry 4.0"],
      photo: "avinash.png",
      resume: ""
    },

    documents: [],

    education: [
      { degree: "Doctor of Philosophy (Ph.D.)", field: "Mechanical Engineering (Digital Twin Frameworks & Additive Manufacturing)", org: "Centurion University of Technology and Management", period: "2025 — Present", loc: "Bhubaneswar, Odisha, India" },
      { degree: "Master of Technology (M.Tech)", field: "Mechanical Engineering (Design & Digital Manufacturing)", org: "Centurion University of Technology and Management", period: "2023 — 2025", loc: "Bhubaneswar, Odisha, India" },
      { degree: "Bachelor of Technology (B.Tech)", field: "Mechanical Engineering", org: "Centurion University of Technology and Management", period: "2016 — 2020", loc: "Bhubaneswar, Odisha, India" }
    ],

    experience: [
      { when: "June 2021 — Present", role: "Lead Design Engineer & Technical Consultant", org: "GramTarang Technologies Pvt. Ltd.", bullets: [
        "Lead skill development and engineering training initiatives.",
        "Mentor students in design, product development, and project execution.",
        "Prepare and present technical and project progress reports.",
        "Support product design and development activities.",
        "Collaborate with internal teams and stakeholders on engineering projects.",
        "Deliver industry-focused training and technical guidance.",
        "Contribute to innovation, research, and technology implementation initiatives."
      ]},
      { when: "Apr 2021 — Nov 2023", role: "Project Executive", org: "Centurion University / GramTarang Technologies", bullets: [
        "Work on Dassault Systèmes tools across various platform projects.",
        "Deliver client projects operated by Gram Tarang.",
        "Train students on the 3DEXPERIENCE platform.",
        "Core member of the Electric Rickshaw Design & Manufacturing team."
      ]},
      { when: "Oct 2020 — Nov 2020", role: "Associate Customer Support", org: "Tech Mahindra", bullets: [
        "Handled e-commerce customers' technical queries and troubleshot issues on call and online.",
        "Technical troubleshooting for e-commerce customers — international voice process.",
        "Supported premium clients over the phone (inbound & outbound)."
      ]},
      { when: "May 2020 — Sep 2020", role: "Production Engineer", org: "AABSyS IT Pvt Ltd", bullets: [
        "Worked on Utility Easement Acquisition and Overhead Utility projects.",
        "Created maps and drawings for electricity infrastructure in AutoCAD.",
        "Applied Gas GIS operations and engineering processes across gas assets.",
        "Ensured piping, meter and valve connectivity was 100% accurate for export from ArcMap."
      ]}
    ],

    supervisor: {
      label: "Research Supervisor",
      name: "Dr. Mukundjee Pandey",
      role: "Professor & Doctoral Research Supervisor",
      org: "Centurion University of Technology and Management",
      stats: [ { n: "1,520+", l: "Citations" }, { n: "22", l: "H-Index" }, { n: "98+", l: "Publications" } ],
      quote: "A distinguished leader in thermodynamic efficiency optimization, convective chimney systems design, and structural-thermal finite element analysis.",
      metas: [
        { b: "Supervisory Role & Overlap", t: "Primary doctoral advisory on thermal mechanics simulations, optomechanical flux structural balancing, and convective flow energy optimization." },
        { b: "Expertise Focus", t: "Thermal Energy Systems, Numerical Modeling, Renewable Integration & Optomechanical Trusses" }
      ],
      email: "mukundjee.pandey@cutm.ac.in",
      orcid: "0000-0002-3921-7681",
      scholar: "https://scholar.google.com/",
      body: "Department of Mechanical Engineering, School of Engineering and Technology, CUTM."
    },

    frontiers: [
      { icon: "\u{1F31E}", title: "Solar Thermal Energy", desc: "Investigating advanced heat transfer, thermal storage systems, and solar thermal collectors to maximize capture and utilization efficiency.", points: ["Dynamic numerical modeling of solar thermal collector networks", "High-density Phase Change Materials (PCM) analysis for diurnal storage of heat", "Optical ray-tracing evaluation of spectrally selective solar heat absorbers"] },
      { icon: "\u{1F3D7}\u{FE0F}", title: "Solar Chimney Systems", desc: "Developing flow-dynamic models, solar canopy optimizations, and turbine configurations supporting high-height buoyancy solar chimney prototypes.", points: ["3D Fluid-dynamic CFD analysis of high-acceleration buoyancy-driven airflow", "Canopy geometry optimization and ground-based thermal absorber configurations", "Dynamic simulation of low-head aerodynamic power turbine clusters"] },
      { icon: "\u{1F52D}", title: "Parabolic Trough Collector", desc: "Formulating optomechanical models, tracking systems, and thermal fluid evaluation parameters for advanced concentrating tracking collectors.", points: ["Optical glass receiver tracking alignment and flux density simulations", "Synthesized nanofluid evaluation for high-temperature heat transfer loops", "Experimental thermal-structural stress balancing of reflective support trusses"] },
      { icon: "\u{26A1}", title: "Hybrid Renewable Energy", desc: "Integrating co-generation energy models, multi-source decentralized microgrids, and intelligent dynamic resource allocation strategies.", points: ["Development of unified modeling interfaces for wind, PV, and thermal systems", "Thermodynamic load balancing protocols for high-fluctuation rural operations", "Economic optimization algorithms mapping levelized expenses of hybrid layouts"] },
      { icon: "\u{1F504}", title: "Organic Rankine Cycle", desc: "Developing low-temperature fluid turbines and expansion models to harvest thermal waste streams for sustainable electricity generation.", points: ["Heuristic fluid matching criteria based on environmental safety guidelines", "Custom expander kinematic profiling and mechanical load mapping", "Dynamic system responses under variable thermal heat inputs"] },
      { icon: "\u{1F3ED}", title: "Manufacturing Technology", desc: "Optimizing CAD processing, assembly planning, toolpaths, and structural welding models within advanced digital factory suites.", points: ["Thermal welding finite element analysis for industrial structural brackets", "Productive process setup validation using Dassault 3DEXPERIENCE suite", "Manufacturing operational standardizations for custom electric systems"] }
    ],

    publications: [
      { year: "2024", venue: "Journal of Additive and Smart Manufacturing Research", vol: "Vol. 11(3), pp. 142–155", title: "Structural Topology Optimization of SLA-Printed Robotic End-Effectors for Advanced Payload Security", authors: "Avinash Kumar Singh, B. Rout, R. Panda", doi: "10.1016/j.jasmr.2024.03.011", tags: ["Journal Article"] },
      { year: "2024", venue: "Journal · Scopus/SCIE", vol: "Vol. 12(3), pp. 145–158", title: "Experimental Evaluation of TIG Welding Parameters Based on Maximum Strength and Energy Consumption", authors: "Avinash Kumar Singh, B. Rout, R. Panda", doi: "10.1016/j.jwelding.2024.12.015", tags: ["Scopus / SCIE"] },
      { year: "2025", venue: "Journal · Review Article · Scopus/SCIE", vol: "Vol. 21(1), pp. 45–62", title: "Revolutionizing Solar Chimneys in Harvesting Clean Energy: A Review", authors: "Avinash Kumar Singh, S. Mahapatra", doi: "10.1016/j.solarchem.2025.01.002", tags: ["Review Article", "Scopus / SCIE"] },
      { year: "2025", venue: "Journal · Scopus/SCIE", vol: "Vol. 15(2), pp. 112–126", title: "Geometrical Variation for Evaluation of Solar Chimney Thermal Performance", authors: "Avinash Kumar Singh, A. Patnaik", doi: "10.1016/j.solargem.2025.04.018", tags: ["Scopus / SCIE"] }
    ],

    conferences: [
      { year: "2024", place: "NIT Jalandhar", title: "Effects on the Performance of Solar Chimney with Variation in Geometrical Modelling", venue: "MAMM 2024 · International Conference on Matrix Analysis and Mathematical Modelling", tag: "Proceedings", intl: false },
      { year: "2025", place: "ITER, SOA University", title: "A Systematic Proof to the Concept of Numerical Validation of Experimental Results of Parabolic Trough Collector & C-Program Analysis of Thermal-Hydraulic-Exergetic Performance in Parabolic Trough Receivers with Syltherm-800", venue: "ICRAMERD–2025 · 6th International Conference", tag: "International", intl: true },
      { year: "2025", place: "ITER, SOA University", title: "Performance Investigation of the Parabolic Trough Collector with Different Geometric Parameters", venue: "ICRAMERD–2025 · 6th International Conference", tag: "International", intl: true }
    ],

    patents: [
      { svg: "chimney", title: "Solar Chimney with Sinusoidal Swirl Fins", field: "Solar Thermal · Air Heating", desc: "A low-cost solar convective air-heater using sinusoidal swirled fin arrays inside the chimney base to create a high-velocity localized vortex, accelerating kinetic energy capture.", app: "IN202511012345", year: "2025" },
      { svg: "vortex", title: "Solar Vortex Engine", field: "Solar Power Generation", desc: "A high-yield vortex system with multi-directional air-ingress vents and internal guide vanes that form a stable convective vortex, converting low-grade heat into focused rotational motion for power.", app: "IN202511054321", year: "2025" },
      { svg: "distill", title: "Hybrid Concentrator Solar Distillation Unit", field: "Solar Desalination", desc: "A modular distillation unit with line-focusing parabolic concentrators and a phase-change-material heat exchanger that sustains latent thermal release for pure-water yield during off-sun periods.", app: "IN202511098765", year: "2025" },
      { svg: "tracker", title: "Modular Dual-Axis Solar Tracker with Compliant Joints", field: "Solar Tracking · Mechatronics", desc: "An automated dual-axis tracker using compliant flexure mechanisms for high structural stiffness in adverse wind, optimizing sun-angle exposure through high-precision closed-loop control.", app: "IN202511076543", year: "2025" }
    ],

    projects: [
      { cat: "design", catLabel: "Design", title: "Gearbox Assembly", desc: "Multi-gear gearbox modeled with advanced mates, assembly motion studies, automatic exploded views, and torque transmission validation in SolidWorks.", stack: ["SolidWorks", "Motion Study", "FEA"], images: ["https://media.istockphoto.com/id/491786407/photo/manufacturing-parts-for-transmission.jpg?s=1024x1024&w=is&k=20&c=fzVJCZ8u6uVq3GKy3DFO6hrnxnEpeuGfSoSBAuzU1I8=", "https://media.istockphoto.com/id/503953716/photo/factory-line.jpg?s=1024x1024&w=is&k=20&c=A53v_HvtCX_Af7URhyxb82tDa2dKFp1lmLjU4LBrxl0="], video: "https://drive.google.com/file/d/1hA2hC0yICnRlDEjXhYx6F01BglJfrpRG/view?usp=sharing" },
      { cat: "design", catLabel: "Design", title: "Lightweight Bicycle Frame", desc: "Structural design using weldments and surface modeling. Integrated static FEA analysis which drove a 15% reduction in total weight while maintaining structural safety factors.", stack: ["CATIA V5", "Weldments", "FEA Analysis"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "design", catLabel: "Design", title: "Parametric Brake Disc Rotor", desc: "Ventilated rotor utilizing customized parametric vent features for optimized heat dissipation. Simulated thermal-structural behavior under maximum braking forces.", stack: ["SolidWorks", "Parametric Design", "Thermal Analysis"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "design", catLabel: "Design", title: "Sheet Metal Electronic Enclosure", desc: "Industrial-grade enclosure designed with precise bend allowances, punch tools, and custom ventilation. Generated CNC-ready flat patterns and DXF exports saving 10% material scrap.", stack: ["SolidWorks", "Sheet Metal", "DXF Generation"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "manufacturing", catLabel: "Manufacturing", title: "Additive Manufacturing Gripper", desc: "Created and optimized a light-weight robotic gripper utilizing topology optimization for SLA 3D printing. Enhanced payload-to-weight ratio and grip contact security by 20%.", stack: ["Topology Optimization", "SLA Printing", "Generative Design"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "delmia", catLabel: "DELMIA", title: "DELMIA Assembly Process Plan", desc: "Constructed structured manufacturing item structures (MBOM) for assemblies with over 20 parts. Documented detailed 3D process steps to boost layout efficiency by 25%.", stack: ["3DEXPERIENCE", "DELMIA", "MBOM"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "delmia", catLabel: "DELMIA", title: "Electric Motor Workstation Line", desc: "Configured motor assembly lines featuring 25+ parts and balanced workstations in DELMIA, reducing model bottlenecking by 18% and hiking plant throughput by 15%.", stack: ["DELMIA", "Line Balancing", "Simulation"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "manufacturing", catLabel: "Manufacturing", title: "CNC Machining Process Setup", desc: "Prepared end-to-end CNC setups for critical mounting brackets. Optimized spindle paths and tooling structures in DELMIA to slice setup counts from 4 to 2.", stack: ["DELMIA CAM", "CNC Machining", "Toolpath Optimization"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "enovia", catLabel: "ENOVIA", title: "ENOVIA Enterprise PLM & Engineering Change Stream", desc: "Configured unified product data structures, defined revision lifecycles, and orchestrated automated Engineering Change Actions (ECA) to optimize BOM variant control.", stack: ["3DEXPERIENCE", "ENOVIA PLM", "Lifecycle Management", "XCAD Connectors"], video: "https://youtu.be/aqz-KE-bpKQ" },
      { cat: "aec", catLabel: "AEC", title: "AEC Parametric Architectural Framework", desc: "Developed parametric structural building designs, concrete foundations, and steel frames utilizing CATIA Building Space Planning on the 3DEXPERIENCE platform.", stack: ["CATIA Building Planning", "AEC Design", "Structure Analysis", "GD&T"], video: "https://youtu.be/aqz-KE-bpKQ" }
    ],

    certifications: {
      credly: "https://www.credly.com/users/avinash70",
      badges: [
        { tier: "specialist", title: "CATIA - Brand Essentials - Level 1", issuer: "Dassault Systèmes", issued: "Jan 20, 2026", label: "CATIA BRAND ESSENTIALS", prog: "LEVEL 1", band: "#15568c", img: "" },
        { tier: "professional", title: "Certified SOLIDWORKS Drawing Tools Professional", issuer: "Dassault Systèmes", issued: "Dec 27, 2025", label: "DRAWING TOOLS", prog: "SOLIDWORKS PROFESSIONAL", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified Collaborative Designer for SOLIDWORKS Associate", issuer: "Dassault Systèmes", issued: "Dec 18, 2025", label: "COLLABORATIVE DESIGNER FOR SOLIDWORKS", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "professional", title: "Certified SOLIDWORKS Sheet Metal Professional", issuer: "Dassault Systèmes", issued: "Nov 29, 2025", label: "SHEET METAL", prog: "SOLIDWORKS PROFESSIONAL", band: "#c0392b", img: "" },
        { tier: "professional", title: "Certified SOLIDWORKS Design Professional", issuer: "Dassault Systèmes", issued: "Nov 20, 2025", label: "DESIGN", prog: "SOLIDWORKS PROFESSIONAL", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS Electrical Design Associate", issuer: "Dassault Systèmes", issued: "Sep 27, 2025", label: "ELECTRICAL", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS Simulation Associate", issuer: "Dassault Systèmes", issued: "Sep 27, 2025", label: "SIMULATION", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS Sustainability Associate", issuer: "Dassault Systèmes", issued: "Sep 27, 2025", label: "SUSTAINABILITY", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS Additive Manufacturing Associate", issuer: "Dassault Systèmes", issued: "Sep 19, 2025", label: "ADDITIVE MANUFACTURING", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS Design Associate", issuer: "Dassault Systèmes", issued: "Sep 19, 2025", label: "DESIGN", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified 3DEXPERIENCE 3DSwymer Associate", issuer: "Dassault Systèmes", issued: "Sep 19, 2025", label: "3DSWYMER", prog: "ASSOCIATE", band: "#15568c", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS xShape Associate", issuer: "Dassault Systèmes", issued: "Sep 30, 2024", label: "xShape", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "associate", title: "Certified SOLIDWORKS xMold Associate", issuer: "Dassault Systèmes", issued: "Sep 30, 2024", label: "xMold", prog: "SOLIDWORKS ASSOCIATE", band: "#c0392b", img: "" },
        { tier: "specialist", title: "Mastering the 3DEXPERIENCE Platform - Level 1", issuer: "Dassault Systèmes", issued: "May 15, 2024", label: "3DEXPERIENCE PLATFORM", prog: "LEVEL 1", band: "#15568c", img: "" }
      ]
    },

    contact: {
      heading: "Let's build something together",
      blurb: "Open to design engineering, research collaboration, PLM consulting and academic training engagements.",
      email: "avinashkumarsingh078@gmail.com",
      whatsapp: "918917639056",
      linkedin: "https://www.linkedin.com/in/avinash70/",
      linkedinLabel: "AVINASH SINGH",
      location: "Bhubaneswar, Odisha, India",
      iconEmail: "https://drive.google.com/file/d/1_3h9BW0ShGYbdtgfKE0VlpgDQYXd4PdN/view",
      iconWhatsapp: "https://drive.google.com/file/d/1LavNfX90h7ZsvabDcLx383MgZirB8QVa/view",
      iconLinkedin: "https://drive.google.com/file/d/150qZEUGot3m7Z_vNXStTtQNA8slCxGyc/view",
      iconLocation: "https://drive.google.com/file/d/1L5cE-UpIOQU2U0VA24TO05uiC2wZNCxN/view"
    },

    appointment: {
      purposes: ["Training", "Consulting", "Digital Twin", "Academic Project", "Webinar", "Faculty Development Program", "Custom Requirement"],
      software: ["CATIA", "SIMULIA", "ENOVIA", "DELMIA", "BIM", "SOLIDWORKS", "GEOVIA", "BIOVIA", "Custom Requirement"],
      times: ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00", "17:00 - 18:00"]
    }
  };

  function deepClone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    var d = deepClone(DEFAULTS);
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var saved = JSON.parse(raw);
        Object.keys(saved).forEach(function (k) { d[k] = saved[k]; });
      }
    } catch (e) { /* ignore corrupt cache */ }
    return d;
  }

  window.SITE_DEFAULTS = DEFAULTS;
  window.CONTENT = load();
  window.CONTENT_KEY = KEY;

  window.saveContent = function (obj) {
    localStorage.setItem(KEY, JSON.stringify(obj));
    window.CONTENT = load();
  };
  window.resetContent = function () {
    localStorage.removeItem(KEY);
    window.CONTENT = load();
  };
  window.getDefaults = function () { return deepClone(DEFAULTS); };

  /* small HTML-escape helper available to pages */
  window.cEsc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  /* ---- media link helpers (Google Drive / YouTube / direct) ---- */
  function driveId(u) {
    if (!u) return "";
    var m = String(u).match(/\/d\/([\w-]+)/) || String(u).match(/[?&]id=([\w-]+)/);
    return m ? m[1] : "";
  }
  // Convert any image link (Drive share link, Drive id, or direct URL/path) to a usable <img src>.
  window.imgUrl = function (u) {
    if (!u) return "";
    u = String(u).trim();
    var id = driveId(u);
    if (id) return "https://lh3.googleusercontent.com/d/" + id;
    return u; // already a direct URL or a local file path
  };
  // Convert a YouTube or Google Drive video link to an embeddable iframe src.
  window.embedUrl = function (u) {
    if (!u) return "";
    u = String(u).trim();
    var yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/))([\w-]{11})/);
    if (yt) return "https://www.youtube-nocookie.com/embed/" + yt[1] + "?rel=0&modestbranding=1&playsinline=1";
    var id = driveId(u);
    if (id) return "https://drive.google.com/file/d/" + id + "/preview";
    return u;
  };
  // Convert a document/PDF link (Drive or direct) to an inline preview iframe src.
  window.docUrl = function (u) {
    if (!u) return "";
    u = String(u).trim();
    var id = driveId(u);
    if (id) return "https://drive.google.com/file/d/" + id + "/preview";
    return u;
  };
  // Convert a Drive link to a direct download/open link (for buttons).
  window.openUrl = function (u) {
    if (!u) return "";
    u = String(u).trim();
    var id = driveId(u);
    if (id) return "https://drive.google.com/file/d/" + id + "/view";
    return u;
  };
  // Is this link a PDF / Google-Drive document (vs a plain image)?
  window.isDoc = function (u) {
    if (!u) return false;
    u = String(u).trim();
    return /drive\.google\.com|\.pdf(\?|$)/i.test(u);
  };
})();
