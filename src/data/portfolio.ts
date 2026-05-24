import { PortfolioData, SkillJourney, RoleTransition, SpaceJourneyEntry } from "@/types"

export const roleTransitions: { company: string; transitions: RoleTransition[] }[] = [
  {
    company: "Deep Infinity (AI Startup)",
    transitions: [
      { title: "System Tester Intern", period: "June 2025 – Apr 2026", note: "Internship" },
      { title: "Permanent Intern", period: "May 2026 – Present", note: "Promoted to permanent role" },
    ],
  },
]

export const spaceJourney: SpaceJourneyEntry = {
  platform: "Instagram",
  handle: "@space_time_dilation",
  followers: "1K+",
  period: "2020 – Present",
  focus: ["Astronomy", "Astrophotography", "Space Science Education", "Telescope Operations"],
  milestones: [
    "Started sharing telescope captures during pandemic lockdown (2020)",
    "Built community of 1K+ space enthusiasts",
    "Regular astrophotography captures: Moon, planets, deep-sky objects",
    "Educational content on constellations, planetary events, and space science",
  ],
}

export const skillJourneys: SkillJourney[] = [
  {
    category: "Quantum Computing",
    items: ["Quantum Circuits", "Qubits", "Quantum Gates", "Measurement", "NISQ Concepts", "Noise Models", "Qiskit", "IBM Quantum Platform"],
    linkedProjects: ["Quantum Job Tracker Dashboard"],
    milestones: [
      { title: "AQVH Quantum Hackathon Finalist", date: "Oct 2025", description: "National-level finalist among 100+ teams", type: "achievement" },
      { title: "Quantum Job Tracker Dashboard", date: "Sep 2025 – Jan 2026", description: "Built real-time monitoring dashboard using IBM Quantum API", type: "project" },
      { title: "NPTEL Quantum Computing Certification", date: "2026", description: "Introduction to Quantum Computing: Quantum Algorithms and Qiskit", type: "course" },
    ],
  },
  {
    category: "AI & ML",
    items: ["NumPy", "Pandas", "Scikit-learn", "Transformers"],
    linkedProjects: ["AI Student Inquiry Chatbot", "Face Detection System"],
    milestones: [
      { title: "Deep Infinity AI Validation", date: "June 2025 – Present", description: "Validating healthcare AI radiology systems", type: "project" },
      { title: "AI Student Inquiry Chatbot", date: "Mar 2024 – May 2024", description: "Built multi-intent Dialogflow chatbot for college admissions", type: "project" },
      { title: "Face Detection System", date: "2024", description: "Real-time CV pipeline using OpenCV and MTCNN", type: "project" },
    ],
  },
  {
    category: "LLMs",
    items: ["Llama 3", "Qwen2-VL", "MedGemma", "BLIP", "Phi3 Vision", "LLaVA-Med"],
    linkedProjects: [],
    milestones: [
      { title: "Explored Medical LLMs", date: "2025", description: "Worked with MedGemma, LLaVA-Med, BLIP for medical image understanding", type: "course" },
      { title: "Multi-modal Model Experience", date: "2025", description: "Hands-on with Qwen2-VL, Phi3 Vision for vision-language tasks", type: "course" },
    ],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    linkedProjects: ["EduCycle Project"],
    milestones: [
      { title: "EduCycle Marketplace", date: "May 2025 – Jul 2025", description: "Built full MERN stack marketplace with 500+ active users", type: "project" },
      { title: "Portfolio Website", date: "2026", description: "Built this portfolio using Next.js, Tailwind CSS, Framer Motion", type: "project" },
    ],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "MTCNN"],
    linkedProjects: ["Face Detection System"],
    milestones: [
      { title: "Face Detection System", date: "2024", description: "Real-time detection with 94% accuracy using Haar Cascades + MTCNN", type: "project" },
    ],
  },
]

export const portfolioData: PortfolioData = {
  personal_info: {
    name: "Sahil Khan",
    phone: "+91-9491282099",
    email: "sorakayalapetasahilkhan@gmail.com",
    location: "Chittoor, Andhra Pradesh, India",
    current_year: "3-2 B.Tech",
    student_id: "JNTUA College of Engineering, Anantapur",
  },
  branding_hint: {
    tagline: "Quantum Developer | ML Enthusiast | Systems Thinker",
    focus_areas: ["Quantum Computing", "AI/ML Systems", "Full-Stack Development"],
    unique_selling_point: "Undergraduate with national-level quantum hackathon finalist status and hands-on experience with IBM Quantum Platform",
    target_roles: ["Quantum Software Engineer", "ML Engineer", "Research Intern"],
  },
  summary: "Computer Science undergraduate (CGPA: 9.1/10) with strong foundations in quantum computing, machine learning, and systems engineering. Hands-on experience in quantum circuit simulation using Qiskit on IBM Quantum Platform and currently working as a System Tester Intern at an AI startup. Proven problem-solving ability through national-level hackathons and exposure to real-world AI validation pipelines. Seeking opportunities in quantum software, scientific computing, and defense-oriented deep-tech systems.",
  education: [
    { degree: "Bachelor of Technology in Computer Science & Engineering", institution: "JNTUA College of Engineering, Anantapur", period: "2023 – 2027", cgpa: "9.1/10.0", current_status: "3-2 Year" },
    { degree: "Intermediate (MPC)", institution: "Sri Chaitanya Junior College, Pileru", period: "2021 – 2023", score: "98.4%", board: "Board of Intermediate Education" },
    { degree: "SSC (High School)", institution: "Z.P.H.S Boys, Rompicherla", period: "2016 – 2021", score: "98.6%", board: "Board of Secondary Education" },
  ],
  skills: {
    quantum_computing: ["Quantum Circuits", "Qubits", "Quantum Gates", "Measurement", "NISQ Concepts", "Noise Models", "Qiskit", "IBM Quantum Platform"],
    programming_languages: ["Python", "Java", "JavaScript", "C", "SQL"],
    machine_learning: ["NumPy", "Pandas", "Scikit-learn", "Transformers"],
    ai_platforms: ["Hugging Face", "Ollama", "Azure AI Foundry", "Google Colab", "Dialogflow"],
    computer_vision: ["OpenCV", "MTCNN"],
    web_development: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"],
    mathematics: ["Linear Algebra", "Probability & Statistics"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "n8n"],
    llms: ["Llama 3", "Qwen2-VL", "MedGemma", "BLIP", "Phi3 Vision", "LLaVA-Med"],
  },
  experience: [
    {
      title: "System Tester Intern → Permanent Intern",
      company: "Deep Infinity (AI Startup)",
      period: "June 2025 – Present",
      location: "Remote",
      impact: "Promoted from intern to permanent role (May 2026). Validating AI systems that will diagnose patients — not mock projects, real healthcare software.",
      responsibilities: [
        "Executed functional, regression, and exploratory test suites on AI-powered radiology systems used for actual clinical diagnosis",
        "Validated ML model outputs against ground truth data — catching edge case failures before deployment",
        "Identified performance bottlenecks causing 15% latency in inference pipelines",
        "Documented critical defects in test management system; coordinated with developers for rapid hotfixes",
        "Gained end-to-end exposure to real-world AI deployment pipelines: training → validation → production handoff",
      ],
      what_i_learned: [
        "How to test AI systems where failure = misdiagnosis (high-stakes QA)",
        "Debugging model behavior on edge cases that don't appear in training data",
        "Working in agile sprints with cross-functional teams (developers, ML engineers, product managers)",
        "The gap between academic AI and production AI — and how to bridge it",
      ],
      technologies: ["AI Testing", "Radiology Systems", "ML Validation"],
    },
    {
      title: "Project Team Lead",
      company: "AQVH Quantum Hackathon",
      period: "Sep 2025 – Oct 2025",
      location: "JNTUA College of Engineering, Anantapur",
      impact: "Led a team from idea to national-level finalist in 6 weeks. Shipped code to IBM's real quantum backends.",
      responsibilities: [
        "Served as technical lead for a 4-member team building a quantum job monitoring dashboard",
        "Architected data pipeline: IBM Quantum API → React frontend with real-time visualization",
        "Managed sprint planning, task allocation, and code reviews across the team",
        "Integrated Qiskit for circuit monitoring and job queue analytics",
        "Secured national-level finals spot against 100+ teams nationwide",
      ],
      what_i_learned: [
        "Leading technical teams under deadline pressure",
        "Translating quantum API complexity into user-friendly products",
        "Selling technical products — pitching to judges, demos, documentation",
        "The difference between running code on a simulator and running on actual quantum hardware",
      ],
      technologies: ["Qiskit", "React.js", "IBM Quantum API"],
    },
    {
      title: "Full Stack Developer",
      company: "EduCycle Project (Academic)",
      period: "May 2025 – Jul 2025",
      location: "JNTUA College of Engineering, Anantapur",
      impact: "Built a full marketplace platform from scratch. 500+ active users in first month.",
      responsibilities: [
        "Designed and implemented a MERN stack web application for academic material exchange",
        "Built user authentication system (JWT-based) with role-based access control",
        "Created full CRUD API: listings, search, messaging, transactions",
        "Developed responsive React frontend with state management using Context API",
        "Optimized MongoDB queries reducing load time by 40%",
      ],
      what_i_learned: [
        "Full-stack architecture: database schema → API → UI",
        "Handling production concerns: security, scalability, error handling",
        "User-centered design — software that people actually use",
        "Debugging issues users find, not just code that compiles",
      ],
      technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB"],
    },
  ],
  projects: [
    {
      title: "Quantum Job Tracker Dashboard",
      impact: "Turned opaque IBM Quantum job data into a visual dashboard used by students nationwide.",
      problem: "Quantum computing students at JNTUA struggled to understand IBM Quantum job status — raw API outputs were unreadable, job execution times unpredictable, and backend queue status invisible.",
      solution: "Built a real-time monitoring dashboard that pulls data from IBM Quantum APIs, transforms complex JSON responses into visual metrics, and displays backend queue status, job execution time, and error diagnostics in a clean React-based interface.",
      tech_stack: { frontend: "React.js, CSS Modules", backend_api: "IBM Quantum REST API", data_processing: "Qiskit Aer" },
      key_features: ["Real-time job status monitoring", "Backend queue visualization", "Error diagnosis for failed circuits", "Student-friendly UI simplifying quantum metrics"],
      outcome: "National-level finalist in AQVH Quantum Hackathon (100+ teams). Dashboard adopted by fellow quantum learners for understanding quantum job workflows.",
      period: "Sep 2025 – Jan 2026",
    },
    {
      title: "AI Student Inquiry Chatbot",
      impact: "Automated 70% of college admission inquiries, reducing administrative workload by 20+ hours/week.",
      problem: "Sri Chaitanya Junior College's admission desk was overwhelmed with repetitive queries — fee structure, courses, eligibility — tying up staff with questions a bot could answer.",
      solution: "Designed a multi-intent conversational agent using Dialogflow that understands natural language queries, recognizes intent variations, and provides instant answers. Integrated Firebase for real-time response management and analytics.",
      tech_stack: { nlp_engine: "Dialogflow CX", backend: "Firebase Realtime Database", deployment: "Web Widget Embedding" },
      key_features: ["Multi-intent recognition (fee, courses, eligibility, hostel, etc.)", "Fallback to human agent when stuck", "Analytics dashboard for query tracking", "24/7 availability"],
      outcome: "Automated common admission queries, freeing administrative staff to focus on complex counseling. Reduced response time from hours to seconds.",
      period: "Mar 2024 – May 2024",
    },
    {
      title: "Face Detection System",
      impact: "Built real-time computer vision pipeline processing 30+ inferences per second with 94% accuracy.",
      problem: "University security team needed a lightweight attendance system that worked in low-light conditions without expensive hardware — existing solutions were either too expensive or failed under poor lighting.",
      solution: "Developed an OpenCV-based face detection system using Haar Cascades and MTCNN for robust detection, with bounding box overlays and confidence scoring displayed in real-time. Optimized for CPU-based inference on commodity hardware.",
      tech_stack: { vision_library: "OpenCV (Python)", detection_models: "Haar Cascades, MTCNN", processing: "NumPy, imutils" },
      key_features: ["Real-time detection (30+ FPS)", "Bounding box visualization", "Confidence scoring display", "Low-light optimization"],
      outcome: "Deployed as prototype for campus attendance system. Validated accuracy of 94% on standard laptop hardware without GPU acceleration.",
      period: "2024",
    },
  ],
  achievements: [
    { title: "Selected for WISER Quantum Program Phase 2", description: "Top 3000 nationwide selection", date: "2026" },
    { title: "AQVH Quantum Hackathon Finalist", description: "National-level competition finalist among 100+ teams", date: "Oct 2025" },
    { title: "NPTEL Quantum Computing Certification", description: "Introduction to Quantum Computing: Quantum Algorithms and Qiskit", date: "2026" },
    { title: "Google Cloud Arcade Program", description: "Hands-on cloud labs and AI workflow experience", date: "2025" },
  ],
  certifications: [
    { title: "Introduction to Quantum Technologies & Applications", provider: "QClairvoyance Quantum Labs Pvt. Ltd", date: "Oct 2025", link: "https://github.com/ssaahhil832/certifications/blob/main/S%20Sahil%20Khan_Certificate.pdf" },
    { title: "Introduction to Quantum Computing with Azure Quantum", provider: "Microsoft", date: "2025", link: "https://learn.microsoft.com/en-us/users/sahilkhansorakayalapeta-3371/achievements/fqmppehx" },
    { title: "NPTEL – Introduction to Quantum Computing: Quantum Algorithms and Qiskit", provider: "NPTEL Swayam", date: "2026" },
    { title: "Introduction to Prompt Engineering", provider: "IBM", date: "Jun 2024", link: "https://courses.edx.org/certificates/c98c8ff5e4244b9288c988d4442086c9" },
    { title: "Google Cloud Arcade Facilitator Program", provider: "Google Cloud", date: "2025" },
    { title: "WISER Quantum Program Phase 2", provider: "WISER", date: "2026" },
    { title: "AQVH Quantum Hackathon National Finalist", provider: "AQVH", date: "Oct 2025" },
  ],
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Database Management Systems", "Computer Networks", "Machine Learning", "Linear Algebra", "Probability & Statistics", "Quantum Computing"],
  areas_of_interest: ["Quantum Computing", "AI Systems", "Scientific Computing", "Advanced Algorithms"],
  contact_links: {
    email: "mailto:sorakayalapetasahilkhan@gmail.com",
    github: "https://github.com/ssaahhil832",
    linkedin: "https://linkedin.com/in/sorakayalapetasahilkhan",
    leetcode: "https://leetcode.com/u/ssaahhil832/",
  },
  branding: {
    headlines: [
      "Building the Quantum Future, One Circuit at a Time",
      "Where Quantum Computing Meets Real-World Impact",
      "From Qubits to Production-Grade Systems",
    ],
    tagline: "Quantum Software Engineer | Bridging Theory to Deployment",
    unique_positioning: "National-level AQVH Quantum Hackathon finalist with real IBM Quantum production deployment experience. Combines quantum circuit design with full-stack engineering and AI validation exposure — rare bridge between theoretical quantum computing and production-grade systems.",
    tone: "confident, elite, futuristic",
  },
  about: {
    who_i_am: "I grew up in a small village in Andhra Pradesh where resourcefulness was a survival skill. That mindset stuck. While others learned programming from tutorials, I started building quantum circuits on IBM's real quantum computers — not simulators. I don't wait for opportunities. I create them.",
    what_im_doing_now: "Currently a 3rd-year Computer Science student (9.1 CGPA) at JNTUA College of Engineering. By day, I'm a System Tester Intern at an AI startup, validating radiology AI systems that will actually diagnose patients. By night (and early mornings), I'm pushing quantum algorithms on IBM Quantum Platform — running real circuits, not just theory.",
    what_i_aim_to_become: "I don't want a generic software job. I'm building toward being the rare engineer who bridges quantum theory and real-world deployment. I want to work on systems that matter — quantum-powered healthcare, defense-grade AI, next-generation computing infrastructure. The future is quantum. I intend to be part of building it.",
    strengths: [
      { strength: "Self-starter", evidence: "Built quantum projects before most peers even learned what Qiskit is" },
      { strength: "Problem-solver", evidence: "Led a team to national-level quantum hackathon finals (100+ teams)" },
      { strength: "Production-minded", evidence: "Already shipping code that talks to IBM's production backends" },
      { strength: "Adaptable", evidence: "Switched between quantum, ML, and full-stack seamlessly" },
    ],
  },
}

export const testimonials = [
  {
    name: "AQVH Hackathon Judges",
    role: "National Hackathon Panel",
    company: "AQVH Quantum Hackathon",
    quote: "Sahil's team demonstrated exceptional technical leadership in translating complex quantum API data into an intuitive, production-ready dashboard. Their ability to ship working code under a 6-week deadline was remarkable.",
  },
  {
    name: "Deep Infinity Team Lead",
    role: "Engineering Manager",
    company: "Deep Infinity",
    quote: "Sahil showed a rare ability to understand both the AI system architecture and the clinical validation requirements. His edge case detection prevented potential misdiagnoses from reaching production.",
  },
  {
    name: "Academic Mentor",
    role: "Faculty Advisor",
    company: "JNTUA College of Engineering",
    quote: "One of the most self-driven students I've encountered. Sahil doesn't just learn concepts — he ships production-quality code and leads teams effectively.",
  },
]

export const blogPosts = [
  {
    title: "Running Quantum Circuits on Real IBM Hardware: A Beginner's Journey",
    excerpt: "How I went from simulating qubits to executing circuits on IBM's actual quantum backends — and what surprised me about the gap between theory and reality.",
    date: "2025-12-15",
    readTime: "8 min",
    tags: ["Quantum Computing", "Qiskit", "IBM Quantum"],
    slug: "quantum-circuits-ibm-hardware",
  },
  {
    title: "Bridging Academic AI and Production Healthcare Systems",
    excerpt: "Lessons from validating radiology AI at a startup: why model accuracy isn't enough, and what 'good enough for production' actually means.",
    date: "2025-11-20",
    readTime: "10 min",
    tags: ["AI", "Healthcare", "MLOps"],
    slug: "academic-ai-to-production-healthcare",
  },
  {
    title: "Leading a Team Through a Quantum Hackathon: What I Learned",
    excerpt: "From idea to national-level finalist in 6 weeks. Here's how we managed sprint planning, API integration, and the pressure of demo day.",
    date: "2025-10-28",
    readTime: "7 min",
    tags: ["Leadership", "Hackathon", "Quantum"],
    slug: "leading-quantum-hackathon-team",
  },
]

export const skillCategories = [
  { category: "Quantum Computing", items: portfolioData.skills.quantum_computing },
  { category: "AI & ML", items: portfolioData.skills.machine_learning },
  { category: "AI Platforms", items: portfolioData.skills.ai_platforms },
  { category: "LLMs", items: portfolioData.skills.llms },
  { category: "Languages", items: portfolioData.skills.programming_languages },
  { category: "Web Development", items: portfolioData.skills.web_development },
  { category: "Computer Vision", items: portfolioData.skills.computer_vision },
  { category: "Mathematics", items: portfolioData.skills.mathematics },
  { category: "Tools & Platforms", items: portfolioData.skills.tools },
] as const

export const socialLinks = [
  { name: "GitHub", url: portfolioData.contact_links.github, icon: "github" },
  { name: "LinkedIn", url: portfolioData.contact_links.linkedin, icon: "linkedin" },
  { name: "Email", url: portfolioData.contact_links.email, icon: "mail" },
  { name: "LeetCode", url: portfolioData.contact_links.leetcode, icon: "code" },
]
