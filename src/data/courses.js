export const CATEGORY_COLORS = {
  'Full Stack':          '#1e3a5f',
  'DevOps':              '#e05c2a',
  'Data Science':        '#6a1b9a',
  'Cloud Computing':     '#1565c0',
  'Software Testing':    '#2e7d32',
  'Programming':         '#c62828',
  'Web Development':     '#1a5276',
  'Frameworks':          '#b71c1c',
  'Analytics':           '#6a1b9a',
  'Digital Marketing':   '#e05c2a',
  'Soft Skills':         '#2e7d32',
  'Data Base':           '#1565c0',
  'Automations':         '#1565c0',
  'Mobile Technologies': '#2e7d32',
  'Mulesoft':            '#e05c2a',
  'Internships':         '#0d7a5f',
  'Operating System':    '#1a5276',
  'Internships':         '#1a5276',
  'Placement Assistance':'#2e7d32',
  'DevSecOps':           '#b71c1c',
}


export const COURSES = [
  {
    id:1, title:'Playwright with TypeScript', slug:'playwright-with-typescript', visible: true, category:'Software Testing', rating:0, reviews:0, image:'https://images.nareshit.com/Playwright_with_TypeScript_at_Naresh_IT_(1).png',
    enriched:true,
    description:'Master modern web automation with Playwright and TypeScript to build reliable, fast, and scalable test scripts for real-world applications with hands-on experience in UI automation and end-to-end testing.',
    trainer:'', trainerBio:'Course designed by expert trainers at Naresh IT', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🎥', label: '10 Comprehensive Modules' },
      { icon: '💻', label: 'Hands-on UI Automation' },
      { icon: '🔗', label: 'CI/CD Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🌐', label: 'Cross-browser Testing' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement Playwright automation using TypeScript',
      'Perform UI automation for dynamic interfaces',
      'Execute end-to-end testing across browsers',
      'Design reusable automation frameworks',
      'Integrate tests with CI/CD pipelines',
      'Handle real-time challenges like waits and dynamic elements'
    ],
    requirements:[
      'Basic programming concepts (variables, functions, control structures)',
      'Familiarity with JavaScript',
      'Basic understanding of web technologies (HTML, CSS)'
    ],
    whoIsFor:[
      'Automation Testing aspirants',
      'Manual Testers upgrading to automation',
      'QA Engineers',
      'Software Developers interested in testing',
      'Engineering graduates and freshers'
    ],
    curriculum:[
      { module: 'Module 1: Introduction to Playwright', lessons: [
        'Foundations',
        'Setup & First Test',
        'Tools & Runners'
      ] },
      { module: 'Module 2: Locators - Finding Elements Reliably', lessons: [
        'Accessibility-First Locators',
        'Traditional Selectors',
        'Advanced Selection'
      ] },
      { module: 'Module 3: Actions, Assertions & Auto-Wait', lessons: [
        'User Actions',
        'Auto-Wait Mechanism',
        'Assertions'
      ] },
      { module: 'Module 4: playwright.config.ts', lessons: [
        'Configuration',
        'Test Structure & Hooks',
        'Fixtures'
      ] },
      { module: 'Module 5: Page Object Model & Scalable Architecture', lessons: [
        'POM Fundamentals',
        'Design Patterns',
        'Integration & Structure'
      ] },
      { module: 'Module 6: Advanced Browser & Network Features', lessons: [
        'Browser Contexts',
        'Network Control',
        'Authentication & Storage'
      ] },
      { module: 'Module 7: API Testing with Playwright', lessons: [
        'API Testing Fundamentals',
        'Assertions & Validation',
        'Integration Patterns'
      ] },
      { module: 'Module 8: Visual Testing & Accessibility', lessons: [
        'Visual Testing',
        'Accessibility',
        'PDF & Mobile'
      ] },
      { module: 'Module 9: Parallel Execution, Reporting & Debugging', lessons: [
        'Parallel Execution',
        'Reporting',
        'Debugging'
      ] },
      { module: 'Module 10: CI/CD Integration & Capstone Project', lessons: [
        'GitHub Actions',
        'Docker & Cloud Grids',
        'Capstone Project'
      ] }
    ],
    skills:[
      'Playwright',
      'TypeScript',
      'End-to-end testing',
      'Web automation frameworks',
      'CI/CD integration'
    ],
  },
  {
    id:2, title:'DSA with AI Engineer Program', slug:'dsa-with-ai-engineer-program', visible: false, category:'Data Science', rating:0, reviews:0, image:'https://images.nareshit.com/DSA_with_AI_Engineer_Program_Naresh_IT.png',
    enriched:true,
    description:'Combines Data Structures & Algorithms mastery with AI fundamentals to build strong problem-solving abilities and prepare learners for AI-driven careers and technical interviews.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🧠', label: 'DSA + AI Combined Program' },
      { icon: '💻', label: 'Coding Interview Prep' },
      { icon: '📊', label: 'Algorithm Optimization' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔍', label: 'Problem-solving Mastery' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master core Data Structures and Algorithms',
      'Analyze time and space complexity',
      'Write optimized and scalable code',
      'Apply algorithmic thinking to AI challenges',
      'Strengthen logical reasoning and problem-solving',
      'Prepare for coding interviews'
    ],
    requirements:[
      'Basic programming knowledge in Python, Java, or C++',
      'Understanding of variables, loops, conditions, functions',
      'Basic object-oriented principles knowledge'
    ],
    whoIsFor:[
      'Computer Science & IT students',
      'Engineering graduates and freshers',
      'Aspiring AI Engineers',
      'Software developers upgrading to AI roles',
      'Professionals preparing for product-based company interviews'
    ],
    curriculum:[],
    skills:[
      'Problem-solving',
      'Algorithmic thinking',
      'Code optimization',
      'Time/space complexity analysis',
      'AI integration understanding'
    ],
  },
  {
    id:3, title:'Microsoft Fabric Data Engineer Training (DP-700)', slug:'microsoft-fabric-data-engineer-training', visible: false, category:'Cloud Computing', rating:0, reviews:0, image:'https://images.nareshit.com/Microsoft_Fabric_Data_Engineer_Training(DP-700)_at_Naresh_IT.png',
    enriched:true,
    description:'Comprehensive program designed to master modern data engineering using Microsoft\'s unified analytics platform, covering data integration, transformation, orchestration, real-time analytics, and lakehouse architecture.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏗️', label: 'Lakehouse Architecture' },
      { icon: '🔄', label: 'ETL/ELT Pipelines' },
      { icon: '📊', label: 'Power BI Integration' },
      { icon: '⚡', label: 'Real-time Analytics' },
      { icon: '📜', label: 'DP-700 Certification Prep' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Design scalable lakehouse solutions with OneLake',
      'Build ETL/ELT pipelines using Data Factory and Spark',
      'Implement Delta tables and medallion architecture',
      'Develop real-time analytics and data orchestration skills',
      'Integrate Microsoft Fabric with Power BI for business intelligence',
      'Prepare for Microsoft Fabric Data Engineer Associate certification'
    ],
    requirements:[
      'Basic understanding of databases and SQL',
      'Familiarity with data warehousing concepts and ETL processes',
      'Knowledge of cloud platforms like Microsoft Azure (beneficial but not mandatory)'
    ],
    whoIsFor:[
      'Aspiring Data Engineers',
      'ETL Developers',
      'Business Intelligence Professionals',
      'Azure Data Engineers',
      'Data Analysts seeking to upskill'
    ],
    curriculum:[
      { module: 'Introduction to Microsoft Fabric & Data Engineering', lessons: [
        'Data Engineering Fundamentals',
        'Introduction to Microsoft Fabric',
        'Data Engineering Tools Comparison'
      ] },
      { module: 'Azure Storage & Data Sources', lessons: [
        'Azure Storage Fundamentals',
        'Blob Storage & Data Lake',
        'Data Ingestion'
      ] },
      { module: 'Apache Spark & PySpark', lessons: [
        'Apache Spark Fundamentals',
        'PySpark in Fabric',
        'SparkSQL for Analytics'
      ] },
      { module: 'Delta Lake & Lakehouse Architecture', lessons: [
        'Delta Lake Fundamentals',
        'Delta Tables',
        'Optimization & Streaming'
      ] },
      { module: 'Data Integration with Pipelines & Dataflow', lessons: [
        'Dataflow Gen2',
        'Data Pipelines',
        'Data Integration'
      ] },
      { module: 'Medallion Architecture', lessons: [
        'Bronze/Silver/Gold Layers',
        'Data Modeling',
        'Business Analytics Preparation'
      ] },
      { module: 'Real-Time Intelligence', lessons: [
        'Real-Time Analytics Fundamentals',
        'Eventstream & Eventhouse',
        'KQL & Real-Time Dashboards'
      ] },
      { module: 'Data Visualization & Reporting', lessons: [
        'Business Intelligence Fundamentals',
        'Dashboard Creation',
        'Reporting & Insights'
      ] }
    ],
    skills:[
      'Microsoft Fabric',
      'Data Pipeline Design',
      'PySpark',
      'Delta Lake',
      'Data Warehousing',
      'Real-Time Analytics',
      'Power BI',
      'SQL'
    ],
  },
  {
    id:4, title:'Data Structures and Algorithms with Python', slug:'data-structures-and-algorithms-with-python', visible: false, category:'Programming', rating:0, reviews:0, image:'https://images.nareshit.com/Data_Structures_and_Algorithms_with_Python.png',
    enriched:true,
    description:'Master data structures and algorithms using Python with hands-on coding exercises. Learn efficient problem-solving techniques for technical interviews and real-world development.',
    trainer:'Mr. Dinesh', trainerBio:'Industry expert trainer offering real-world insights through extensive professional experience.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'29 May (Online), 29 Aug (Offline)',
    highlights:[
      { icon: '🐍', label: 'Python-based DSA' },
      { icon: '💡', label: 'Interview Preparation' },
      { icon: '🔢', label: 'Algorithm Mastery' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧩', label: 'Problem-solving Focus' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Arrays, linked lists, stacks, and queues',
      'Trees, graphs, and heaps',
      'Sorting and searching algorithms',
      'Recursion and dynamic programming',
      'Time and space complexity analysis',
      'Technical interview problem-solving patterns'
    ],
    requirements:[
      'Basic Python programming understanding',
      'Familiarity with variables, loops, and conditionals',
      'Logical thinking mindset'
    ],
    whoIsFor:[
      'Students and fresh graduates',
      'Campus placement aspirants',
      'Coding interview preparation',
      'Career switchers to Python development'
    ],
    curriculum:[
      { module: 'Python Fundamentals & Problem Solving', lessons: [
        'Variables, loops, conditionals, functions, strings'
      ] },
      { module: 'Core Python & DSA Basics', lessons: [
        'Lists, dictionaries, arrays, recursion, binary search'
      ] },
      { module: 'Intermediate DSA', lessons: [
        'Linked lists, stacks, queues, trees, BSTs'
      ] },
      { module: 'Advanced Topics', lessons: [
        'Graphs, heaps, greedy algorithms, backtracking, bit manipulation'
      ] }
    ],
    skills:[
      'Data structure implementation',
      'Algorithm optimization',
      'Python programming',
      'Problem-solving',
      'Technical interview readiness'
    ],
  },
  {
    id:5, title:'Advanced Generative & Agentic AI', slug:'advanced-generative-and-agentic-ai', visible: true, category:'Data Science', rating:0, reviews:0, image:'https://images.nareshit.com/Advanced_Generative_and_Agentic_AI_Online_Training_NARESHIT.jpg',
    enriched:true,
    description:'Master autonomous AI agents, multi-agent systems, and advanced generative models using LangChain, CrewAI, and OpenAI to build next-generation intelligent applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'Agentic AI Systems' },
      { icon: '🧠', label: 'LLM Fine-tuning' },
      { icon: '🔗', label: 'LangChain & CrewAI' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🚀', label: 'Production Deployment' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build autonomous AI agents using LangChain and CrewAI',
      'Master retrieval-augmented generation (RAG) systems with vector databases',
      'Implement multi-agent workflows and collaboration patterns',
      'Fine-tune and deploy production-grade LLM applications',
      'Design domain-specific chatbots with persistent memory',
      'Create AI-powered automation pipelines for enterprise solutions'
    ],
    requirements:[
      'Python programming proficiency',
      'Machine learning fundamentals understanding',
      'Familiarity with AI/ML concepts'
    ],
    whoIsFor:[
      'Software engineers transitioning to AI automation',
      'Data scientists expanding into autonomous workflows',
      'AI developers mastering enterprise frameworks',
      'Product managers designing AI-first platforms',
      'AI startup entrepreneurs'
    ],
    curriculum:[
      { module: 'Introduction & Foundations', lessons: [
        'What is Generative AI',
        'What is Agentic AI',
        'Generative AI vs Agentic AI'
      ] },
      { module: 'Fundamentals of Generative AI & LLMs', lessons: [
        'Tokenization',
        'Embeddings',
        'Transformer Architecture'
      ] },
      { module: 'Prompt Engineering & Control', lessons: [
        'Chain of Thought',
        'ReAct',
        'Guardrails'
      ] },
      { module: 'Retrieval-Augmented Generation (RAG)', lessons: [
        'Vector Databases',
        'Chunking Strategies',
        'Answer Grading'
      ] },
      { module: 'LangChain Framework', lessons: [
        'Memory Systems',
        'Document Loaders',
        'RAG Pipelines'
      ] },
      { module: 'LangGraph', lessons: [
        'Agent Workflows',
        'Memory & State Management'
      ] },
      { module: 'Fine-Tuning and Quantization', lessons: [
        'LoRA',
        'QLoRA',
        'Quantization Techniques'
      ] },
      { module: 'Model Serving & Deployment', lessons: [
        'vLLM',
        'TensorRT-LLM'
      ] }
    ],
    skills:[
      'LangChain',
      'CrewAI',
      'Prompt engineering',
      'RAG systems',
      'Vector databases',
      'LLM fine-tuning',
      'Docker',
      'Flask'
    ],
  },
  {
    id:6, title:'Core Java', slug:'core-java-online-training', visible: false, category:'Programming', rating:0, reviews:0, image:'https://images.nareshit.com/Core_java_Naresh_ITECH.png',
    enriched:true,
    description:'Core Java serves as the foundation for advanced Java concepts and enterprise applications. Master Java fundamentals, OOP, exception handling, and real-world development through live interactive classes and hands-on projects.',
    trainer:'Mr. Mahendra', trainerBio:'Expert trainer delivering Core Java instruction with flexibility through live classes, recorded videos, and self-paced learning options.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner to Advanced', mode:'Online / Offline / Classroom', startDate:'1 Jun 2026',
    highlights:[
      { icon: '☕', label: 'Core to Advanced Java' },
      { icon: '💻', label: 'OOP & Design Patterns' },
      { icon: '🔄', label: 'Multithreading & Concurrency' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗂️', label: 'Collections Framework' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Java syntax and fundamentals',
      'Implement object-oriented programming principles',
      'Develop robust error handling with exceptions',
      'Handle file I/O operations and streams',
      'Understand multithreading and concurrent programming',
      'Apply Collections Framework and generics for type-safe code'
    ],
    requirements:[
      'Basic computer and programming logic understanding',
      'Logical thinking and analytical problem-solving',
      'Interest in backend development (prior programming experience optional)'
    ],
    whoIsFor:[
      'Beginners and students new to programming',
      'Software developers strengthening Java skills',
      'Testing professionals moving into automation testing',
      'Android developers building foundational knowledge',
      'IT and engineering graduates preparing for development roles'
    ],
    curriculum:[],
    skills:[
      'Java programming',
      'Object-oriented design',
      'Exception handling',
      'Multithreading',
      'Collections Framework',
      'File I/O operations'
    ],
  },
  {
    id:7, title:'Generative AI & Agentic AI with Python', slug:'generative-ai-online-training', visible: true, category:'Data Science', rating:0, reviews:0, image:'https://images.nareshit.com/Generative_AI_&_Agentic_AI_with_Python.png',
    enriched:true,
    description:'Comprehensive journey from Python fundamentals to advanced AI model development, covering NLP, deep learning, transformers, LLMs, RAG systems, and production deployment with 15+ practical projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'LLMs & Transformers' },
      { icon: '🔗', label: 'LangChain & RAG' },
      { icon: '☁️', label: 'Cloud Deployment' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧠', label: 'Deep Learning' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Python programming with OOP and advanced concepts',
      'Build neural networks, RNNs, LSTMs, and transformer architectures',
      'Implement NLP preprocessing pipelines and text vectorization techniques',
      'Design and deploy LLMs using Hugging Face and OpenAI APIs',
      'Create RAG systems with vector databases',
      'Develop production-ready AI applications on cloud platforms'
    ],
    requirements:[
      'Basic mathematics and algebra',
      'Computer literacy and file management',
      'Programming mindset and problem-solving approach'
    ],
    whoIsFor:[
      'Complete beginners without programming experience',
      'Software developers specializing in AI',
      'Data analysts upgrading to generative AI',
      'Business professionals and entrepreneurs',
      'Graduate students in computer science'
    ],
    curriculum:[
      { module: 'Introduction to Python', lessons: [
        'Syntax',
        'Variables',
        'Data Types',
        'Operators'
      ] },
      { module: 'Machine Learning for NLP', lessons: [
        'Tokenization',
        'Text Preprocessing',
        'Word Embeddings'
      ] },
      { module: 'Deep Learning for NLP', lessons: [
        'Artificial Neural Networks',
        'RNNs',
        'LSTMs'
      ] },
      { module: 'Transformers', lessons: [
        'Self Attention',
        'Multi Head Attention',
        'Encoder-Decoder Architecture'
      ] },
      { module: 'Generative AI', lessons: [
        'LLMs',
        'Hugging Face',
        'OpenAI APIs'
      ] },
      { module: 'LangChain', lessons: [
        'Prompt Templates',
        'Chains',
        'Agents'
      ] },
      { module: 'Retrieval Augmented Generation', lessons: [
        'RAG Systems',
        'Vector Databases'
      ] },
      { module: 'Deployment', lessons: [
        'Flask',
        'AWS'
      ] }
    ],
    skills:[
      'Python',
      'NLP',
      'Deep Learning',
      'Transformer architectures',
      'Large Language Models',
      'RAG',
      'LangChain',
      'Cloud deployment'
    ],
  },
  {
    id:8, title:'Terraform Associate Certification Training (003)', slug:'terraform-associate-certification-training-003', visible: true, category:'Cloud Computing', rating:0, reviews:0, image:'https://images.nareshit.com/Terraform_Associate_Certification_Training_(003).jpg',
    enriched:true,
    description:'Master Infrastructure as Code using Terraform with hands-on labs and real-time projects aligned with HashiCorp Certified Associate (003) exam objectives.',
    trainer:'Mr. Raham', trainerBio:'Industry expert bringing real-world insights and practical experience to training delivery.', trainerExp:'', trainerStudents:'',
    duration:'21 days', level:'Intermediate', mode:'Online / Offline', startDate:'1 Jun 2026',
    highlights:[
      { icon: '🏗️', label: 'Infrastructure as Code' },
      { icon: '☁️', label: 'Cloud Provisioning' },
      { icon: '📋', label: 'State Management' },
      { icon: '📜', label: 'HashiCorp Certification Prep' },
      { icon: '🔧', label: 'Terraform Modules' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build and provision infrastructure with Terraform',
      'Understand Terraform workflow lifecycle and state management',
      'Write, plan, and apply configurations to provision cloud resources',
      'Manage Terraform state locally and remotely',
      'Implement reusable infrastructure using modules',
      'Work with Terraform Cloud and Sentinel policies'
    ],
    requirements:[
      'Basic cloud computing concepts (AWS/Azure/GCP)',
      'Familiarity with command-line interfaces',
      'Basic infrastructure and networking knowledge'
    ],
    whoIsFor:[
      'DevOps Engineers',
      'Cloud Engineers/Architects',
      'System Administrators',
      'IT Professionals seeking certification',
      'Developers integrating Terraform into CI/CD pipelines'
    ],
    curriculum:[
      { module: 'Infrastructure as Code', lessons: [
        'Infrastructure as Code',
        'IaC Introduction',
        'Terraform Use Cases'
      ] },
      { module: 'Terraform Fundamentals', lessons: [
        'Terraform State',
        'Provider Configuration',
        'Dependency Lock File'
      ] },
      { module: 'Terraform Core Workflow', lessons: [
        'init',
        'validate',
        'plan',
        'apply',
        'destroy'
      ] },
      { module: 'Subcommands', lessons: [
        'state',
        'import',
        'Debugging'
      ] },
      { module: 'Use and Create Modules', lessons: [
        'Module Versioning',
        'Input Variables',
        'Output Values'
      ] },
      { module: 'Read and Write Configuration', lessons: [
        'Resources',
        'Data Sources',
        'Built-in Functions'
      ] },
      { module: 'Manage State', lessons: [
        'State Locking',
        'Backends',
        'Remote State Migration'
      ] },
      { module: 'Understand HCP Terraform', lessons: [
        'HCP Terraform Workflow',
        'Sentinel',
        'Policy Enforcement'
      ] }
    ],
    skills:[
      'Terraform CLI',
      'Infrastructure as Code',
      'Cloud provisioning',
      'State management',
      'Module creation',
      'HCP Terraform',
      'Sentinel policies'
    ],
  },
  {
    id:9, title:'Cyber Security & Ethical Hacking', slug:'cyber-security-and-ethical-hacking', visible: false, category:'DevSecOps', rating:0, reviews:0, image:'https://images.nareshit.com/cyber_security_700_x_420.jpg',
    enriched:true,
    description:'A specialized course teaching ethical hacking and cybersecurity fundamentals, covering penetration testing, vulnerability assessment, and practical defense strategies using industry-standard tools.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔐', label: 'Penetration Testing' },
      { icon: '🛡️', label: 'Defensive Security' },
      { icon: '🔍', label: 'Vulnerability Assessment' },
      { icon: '📜', label: 'CEH & Security+ Prep' },
      { icon: '🌐', label: 'Web Application Security' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Perform penetration testing and vulnerability assessments',
      'Recognize and mitigate cyber threats and attacks',
      'Use industry-standard tools like Nmap, Metasploit, Wireshark, Burp Suite',
      'Comply with legal and ethical guidelines',
      'Prepare for certifications like CEH and CompTIA Security+',
      'Conduct incident response and forensic analysis'
    ],
    requirements:[
      'Basic understanding of computer systems and networks',
      'Familiarity with Windows and Linux operating systems',
      'Programming/scripting experience (Python or Bash) helpful but not mandatory'
    ],
    whoIsFor:[
      'Students pursuing IT/cybersecurity careers',
      'IT professionals upgrading skills',
      'Network/System Administrators',
      'Software Developers',
      'Cybersecurity enthusiasts'
    ],
    curriculum:[
      { module: 'Introduction to Cybersecurity', lessons: [
        'Threats and vulnerabilities',
        'Types of cyber attacks',
        'CIA Triad',
        'Security frameworks'
      ] },
      { module: 'Ethical Hacking Fundamentals', lessons: [
        'Hacker types',
        'Legal compliance',
        'Penetration testing lifecycle'
      ] },
      { module: 'Reconnaissance and Footprinting', lessons: [
        'Passive vs active reconnaissance',
        'OSINT tools',
        'Social engineering'
      ] },
      { module: 'Web Application Hacking', lessons: [
        'OWASP Top 10',
        'SQL injection',
        'XSS attacks'
      ] },
      { module: 'Defensive Security', lessons: [
        'Firewall configuration',
        'IDS/IPS',
        'SIEM tools'
      ] },
      { module: 'Incident Response', lessons: [
        'Threat intelligence',
        'Forensic acquisition',
        'SOC functions'
      ] }
    ],
    skills:[
      'Penetration testing',
      'Vulnerability assessment',
      'Network security',
      'Cryptography',
      'Malware analysis',
      'Incident response',
      'Web application security'
    ],
  },
  {
    id:10, title:'Playwright Automation', slug:'playwright-automation', visible: false, category:'Software Testing', rating:4.5, reviews:0, image:'https://images.nareshit.com/playwright-automation-online-training.jpg',
    enriched:true,
    description:'End-to-end testing automation training using Microsoft\'s Playwright framework across multiple browsers. Learn robust, scalable automation with JavaScript, TypeScript, and Python.',
    trainer:'Mr. Sumanth', trainerBio:'Industry professional offering real-world insights into automation testing practices.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'1 Jun 2026',
    highlights:[
      { icon: '🎭', label: 'Multi-browser Automation' },
      { icon: '🔗', label: 'CI/CD Integration' },
      { icon: '🎨', label: 'Visual Regression Testing' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🐳', label: 'Docker & Containerization' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Automate web applications across Chrome, Firefox, Edge, and WebKit',
      'Write efficient test scripts in multiple languages',
      'Implement headless and parallel execution',
      'Integrate with CI/CD tools like Jenkins and GitHub Actions',
      'Perform API testing and visual regression testing',
      'Generate detailed test reports and logs'
    ],
    requirements:[
      'Basic JavaScript, TypeScript, or Python knowledge',
      'Understanding of web elements and HTML DOM',
      'Familiarity with manual testing or automation frameworks'
    ],
    whoIsFor:[
      'Software testers and QA engineers',
      'Manual testers transitioning to automation',
      'Developers and SDETs',
      'Automation engineers',
      'DevOps professionals'
    ],
    curriculum:[
      { module: 'JavaScript Fundamentals', lessons: [
        'Variables and data types',
        'Operators and conditionals',
        'Arrays and objects',
        'Template literals'
      ] },
      { module: 'Getting Started with Playwright', lessons: [
        'Installation and setup',
        'Code generation',
        'Headless vs headful mode'
      ] },
      { module: 'Core Playwright Actions', lessons: [
        'Navigation and typing',
        'Clicking and waiting',
        'File handling',
        'Assertions'
      ] },
      { module: 'Advanced Scenarios', lessons: [
        'Browser contexts',
        'Device emulation',
        'Parallel execution',
        'Data-driven testing'
      ] },
      { module: 'API Testing and Integration', lessons: [
        'Request context',
        'GET/POST requests',
        'Authentication',
        'Response validation'
      ] },
      { module: 'Visual Regression Testing', lessons: [
        'Screenshot comparison',
        'Full-page vs element screenshots',
        'Baseline management'
      ] },
      { module: 'Jenkins Integration', lessons: [
        'Job configuration',
        'Pipeline setup',
        'Report generation'
      ] },
      { module: 'Framework Design', lessons: [
        'Page Object Model',
        'Logging strategies',
        'Allure report integration'
      ] }
    ],
    skills:[
      'Playwright',
      'Cross-browser testing',
      'JavaScript/TypeScript/Python',
      'CI/CD integration',
      'API testing',
      'Docker',
      'Page Object Model'
    ],
  },
  {
    id:11, title:'Internship Program on DevOps with Cloud', slug:'internship-program-on-devops-with-cloud', visible: true, category:'Internships', rating:4.5, reviews:0, image:'https://images.nareshit.com/internship-on-devops-with-multicloud-online-training.jpg',
    enriched:true,
    description:'A structured 45-day hands-on internship covering DevOps principles, cloud infrastructure, CI/CD pipelines, and containerization with real-world capstone projects.',
    trainer:'Veera Sir', trainerBio:'Teaches multicloud DevOps with clear, practical instruction making complex cloud concepts accessible.', trainerExp:'', trainerStudents:'',
    duration:'45 days', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏆', label: 'Internship Certificate' },
      { icon: '☁️', label: 'Multi-cloud DevOps' },
      { icon: '🔗', label: 'CI/CD Pipelines' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '🤖', label: 'AI Virtual Lab' },
      { icon: '💼', label: 'Job Assistance' }
    ],
    whatYouLearn:[
      'DevOps culture and automation workflows',
      'Docker and Kubernetes containerization',
      'CI/CD pipelines with Jenkins and GitHub Actions',
      'Cloud infrastructure management (AWS, Azure, GCP)',
      'Infrastructure automation using Terraform and Ansible',
      'Cloud-native application deployment and management'
    ],
    requirements:[
      'Basic DevOps and cloud computing understanding',
      'Linux commands and scripting familiarity',
      'Git version control knowledge'
    ],
    whoIsFor:[
      'IT students and graduates',
      'Software developers and engineers',
      'System administrators',
      'Cloud practitioners',
      'Job seekers and career changers'
    ],
    curriculum:[],
    skills:[
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD pipelines',
      'Terraform',
      'Ansible',
      'Cloud deployment',
      'Infrastructure as Code'
    ],
  },
  {
    id:12, title:'Internship Program on Python', slug:'internship-program-on-python', visible: true, category:'Internships', rating:5, reviews:0, image:'https://images.nareshit.com/internship-on-python-online-training.jpg',
    enriched:true,
    description:'A 45-day structured hands-on internship focusing on Python, NumPy, and Pandas with real-world project experience through an advanced AI Virtual Lab.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'45 days', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏆', label: 'Internship Certificate' },
      { icon: '🐍', label: 'Python + NumPy + Pandas' },
      { icon: '🤖', label: 'AI Virtual Lab' },
      { icon: '🗃️', label: 'Real-world Projects' },
      { icon: '🔍', label: 'Machine Learning Basics' },
      { icon: '💼', label: 'Job Assistance' }
    ],
    whatYouLearn:[
      'Master Python programming fundamentals',
      'Work with NumPy and Pandas for data analysis',
      'Implement real-world data processing solutions',
      'Develop automation scripts for data manipulation',
      'Complete capstone projects with hands-on experience',
      'Earn internship certificate for career enhancement'
    ],
    requirements:[
      'Basic understanding of Python programming',
      'Interest in Data Analysis and Automation',
      'Familiarity with NumPy and Pandas (recommended)'
    ],
    whoIsFor:[
      'Students & Graduates',
      'Software Engineers & Developers',
      'Data Analysts & Business Professionals',
      'AI & Machine Learning Enthusiasts',
      'Job Seekers & Career Changers'
    ],
    curriculum:[
      { module: 'Introduction to Python', lessons: [
        'Installation',
        'IDE Setup',
        'Basics of Python',
        'Hello World Program'
      ] },
      { module: 'Variables & Data Types', lessons: [
        'Strings',
        'Lists',
        'Tuples',
        'Dictionaries',
        'Simple Calculator'
      ] },
      { module: 'Control Statements', lessons: [
        'If-Else',
        'Loops',
        'Prime Number Checker'
      ] },
      { module: 'Functions & Modules', lessons: [
        'Defining Functions',
        'Lambda Expressions',
        'Built-in Modules',
        'Factorial Calculator'
      ] },
      { module: 'Object-Oriented Programming', lessons: [
        'Classes & Objects',
        'Inheritance',
        'Polymorphism',
        'Bank Account Simulation'
      ] },
      { module: 'NumPy Basics', lessons: [
        'Arrays',
        'Operations',
        'Indexing',
        'Matrix Multiplication'
      ] },
      { module: 'Pandas for Data Analysis', lessons: [
        'DataFrames',
        'Reading/Writing Files',
        'Data Cleaning'
      ] },
      { module: 'Web Scraping & APIs', lessons: [
        'BeautifulSoup',
        'Requests',
        'Scraping Weather Data'
      ] },
      { module: 'Machine Learning Basics', lessons: [
        'Supervised & Unsupervised Learning',
        'Linear Regression',
        'Spam Email Detector'
      ] },
      { module: 'Final Project', lessons: [
        'AI Chatbot Using Python'
      ] }
    ],
    skills:[
      'Python Programming',
      'Data Analysis',
      'NumPy',
      'Pandas',
      'Machine Learning Basics',
      'Web Scraping',
      'SQL with Python',
      'Flask/Streamlit'
    ],
  },
  {
    id:13, title:'Internship Program on Data Science', slug:'internship-program-on-data-science', visible: true, category:'Internships', rating:5, reviews:0, image:'https://images.nareshit.com/internship-on-data-scince-online-training.jpg',
    enriched:true,
    description:'A 45-day hands-on internship integrating Python, Machine Learning, and NLP with AI-powered tools for real-world project experience and capstone development.',
    trainer:'Omkar Sir', trainerBio:'Trainer focused on real-world company problems with practical internship experience.', trainerExp:'', trainerStudents:'',
    duration:'45 days', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏆', label: 'Internship Certificate' },
      { icon: '📊', label: 'ML & NLP Projects' },
      { icon: '🤖', label: 'AI Virtual Lab' },
      { icon: '🧠', label: 'Generative AI Intro' },
      { icon: '📁', label: 'Portfolio Building' },
      { icon: '💼', label: 'Job Assistance' }
    ],
    whatYouLearn:[
      'Build and deploy Machine Learning models',
      'Work on Natural Language Processing projects',
      'Implement real-world data science solutions',
      'Analyze performance metrics using AI Virtual Lab',
      'Earn Internship Certificate for career advancement',
      'Master end-to-end data science workflows'
    ],
    requirements:[
      'Basic Python programming knowledge',
      'Understanding of Machine Learning concepts',
      'Passion for Data Science and AI applications'
    ],
    whoIsFor:[
      'Students and Graduates',
      'Software Engineers and Developers',
      'Data Analysts',
      'IT Professionals',
      'Job Seekers'
    ],
    curriculum:[
      { module: 'Aptitude & Analytical Skills', lessons: [
        'Quantitative Aptitude',
        'Logical Reasoning',
        'Verbal Ability'
      ] },
      { module: 'Technical Foundation', lessons: [
        'Python Programming',
        'SQL for Data Analysis',
        'Statistics and Probability'
      ] },
      { module: 'Machine Learning & AI Core', lessons: [
        'Supervised and Unsupervised Learning',
        'Model Evaluation',
        'Advanced Models'
      ] },
      { module: 'Natural Language Processing', lessons: [
        'Text Preprocessing',
        'Sentiment Analysis',
        'Transformer Models'
      ] },
      { module: 'Generative AI', lessons: [
        'Introduction to GenAI Concepts',
        'Working with LLMs',
        'Prompt Engineering'
      ] },
      { module: 'Project & Portfolio Building', lessons: [
        'End-to-End ML Projects',
        'NLP Mini Projects',
        'Capstone Project'
      ] }
    ],
    skills:[
      'Python for Data Science',
      'Machine Learning',
      'Natural Language Processing',
      'Data Visualization',
      'Generative AI',
      'Model Deployment'
    ],
  },
  {
    id:14, title:'Backend Development', slug:'backend-development-online-training', visible: false, category:'Web Development', rating:4.5, reviews:0, image:'https://images.nareshit.com/Backend_Development_with_Node.js,_Express.js,_and_MongoDB_online_training.jpg',
    enriched:true,
    description:'Learn to build robust, scalable backend applications with NodeJS, ExpressJS, and MongoDB. Master server-side programming, RESTful APIs, and database management for modern web applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🖥️', label: 'Node.js & Express.js' },
      { icon: '🗄️', label: 'MongoDB & REST APIs' },
      { icon: '🔐', label: 'JWT Authentication' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '☁️', label: 'Cloud Deployment' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build and configure servers using ExpressJS',
      'Develop RESTful APIs for CRUD operations',
      'Master MongoDB database design and optimization',
      'Implement authentication and authorization',
      'Deploy backend applications to cloud platforms',
      'Debug and optimize backend code'
    ],
    requirements:[
      'Basic JavaScript knowledge',
      'HTML and CSS familiarity',
      'Web development fundamentals'
    ],
    whoIsFor:[
      'Aspiring web developers',
      'Frontend developers expanding to backend',
      'IT professionals switching roles',
      'Students and beginners',
      'Startup entrepreneurs'
    ],
    curriculum:[
      { module: 'Introduction to Backend Development', lessons: [
        'Web Architecture',
        'Node.js Fundamentals',
        'APIs and Databases'
      ] },
      { module: 'Getting Started with Node.js', lessons: [
        'Environment Setup',
        'Core Modules',
        'Asynchronous Programming'
      ] },
      { module: 'Express.js Framework', lessons: [
        'Installation and Configuration',
        'Routing and Middleware',
        'Static Files'
      ] },
      { module: 'MongoDB and Mongoose', lessons: [
        'NoSQL Databases',
        'Mongoose ODM',
        'CRUD Operations'
      ] },
      { module: 'RESTful API Development', lessons: [
        'REST Architecture',
        'Building APIs',
        'Error Handling'
      ] },
      { module: 'Authentication & Authorization', lessons: [
        'User Registration',
        'Password Hashing',
        'JWT Tokens'
      ] },
      { module: 'Advanced Features & Best Practices', lessons: [
        'API Validation',
        'File Uploads',
        'Pagination'
      ] },
      { module: 'Testing, Deployment, and Project', lessons: [
        'Unit Testing',
        'Deployment Options',
        'Capstone Project'
      ] }
    ],
    skills:[
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'RESTful APIs',
      'JWT Authentication',
      'Asynchronous Programming',
      'Database Design'
    ],
  },
  {
    id:15, title:'DevOps & Site Reliability Engineering (SRE)', slug:'devops-and-site-reliability-engineering-online-training', visible: false, category:'DevOps', rating:0, reviews:0, image:'https://images.nareshit.com/Site_Reliability_Engineering_(SRE)_online_training.jpg',
    enriched:true,
    description:'Comprehensive training in DevOps practices and SRE principles, covering CI/CD pipelines, containerization, infrastructure as code, and production monitoring with hands-on labs.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚙️', label: 'DevOps & SRE Best Practices' },
      { icon: '📊', label: 'Observability & Monitoring' },
      { icon: '🔒', label: 'DevSecOps Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🏗️', label: 'Infrastructure as Code' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master DevOps & SRE best practices',
      'Build reliable and scalable systems',
      'Implement CI/CD pipelines',
      'Containerize applications with Docker & Kubernetes',
      'Set up observability with monitoring tools',
      'Handle production-level responsibilities'
    ],
    requirements:[
      'Basic software development and IT operations knowledge',
      'Linux/Unix command familiarity',
      'Cloud computing concepts understanding'
    ],
    whoIsFor:[
      'Software developers transitioning to DevOps',
      'System administrators',
      'Cloud engineers',
      'IT managers and team leads',
      'Fresh graduates in IT'
    ],
    curriculum:[
      { module: 'Fundamentals of DevOps', lessons: [
        'DevOps lifecycle',
        'CI/CD processes',
        'Key principles'
      ] },
      { module: 'Fundamentals of SRE', lessons: [
        'SLIs, SLOs',
        'Error budgets',
        'Incident management'
      ] },
      { module: 'Infrastructure as Code', lessons: [
        'Terraform',
        'Ansible',
        'CloudFormation',
        'State management'
      ] },
      { module: 'Cloud Platforms', lessons: [
        'AWS services',
        'GCP fundamentals',
        'Multi-cloud deployment'
      ] },
      { module: 'Containerization', lessons: [
        'Docker basics',
        'Kubernetes essentials',
        'Orchestration'
      ] },
      { module: 'Observability & Monitoring', lessons: [
        'ELK Stack',
        'Prometheus',
        'OpenTelemetry',
        'Logging'
      ] },
      { module: 'CI/CD', lessons: [
        'Jenkins pipelines',
        'GitLab CI/CD',
        'Automation'
      ] },
      { module: 'DevSecOps', lessons: [
        'Security integration',
        'Vulnerability scanning',
        'SonarQube'
      ] },
      { module: 'Microservices with Istio', lessons: [
        'Service mesh',
        'Traffic management',
        'Canary deployments'
      ] },
      { module: 'Python & Shell Scripting', lessons: [
        'Automation',
        'Provisioning',
        'System monitoring'
      ] }
    ],
    skills:[
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'AWS',
      'GCP',
      'Ansible',
      'Prometheus',
      'Python scripting',
      'Shell scripting'
    ],
  },
  {
    id:16, title:'SnowFlake', slug:'snowflake-online-training', visible: false, category:'Data Science', rating:4.5, reviews:0, image:'https://images.nareshit.com/snowflake_2.jpg',
    enriched:true,
    description:'Comprehensive cloud-based data platform training covering Snowflake architecture, data warehousing, and real-world data operations with hands-on projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '❄️', label: 'Snowflake Architecture' },
      { icon: '🗄️', label: 'Cloud Data Warehousing' },
      { icon: '🔒', label: 'Data Security & Roles' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚡', label: 'Performance Optimization' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Snowflake cloud architecture and design',
      'Data warehouse management and optimization',
      'Data loading, transformation, and querying',
      'Data sharing and security features',
      'Performance scaling and caching',
      'Real-world data integration projects'
    ],
    requirements:[
      'Basic SQL and data warehousing knowledge',
      'Cloud platform familiarity (optional)',
      'Enthusiasm for modern data platforms'
    ],
    whoIsFor:[
      'Data engineers',
      'Data analysts',
      'Database administrators',
      'IT professionals',
      'Students pursuing data careers'
    ],
    curriculum:[
      { module: 'Introduction to Cloud', lessons: [
        'Cloud vendors',
        'Cloud advantages'
      ] },
      { module: 'Data Warehousing Concepts', lessons: [
        'Data Warehouse vs Database',
        'ETL processes'
      ] },
      { module: 'Snowflake Architecture', lessons: [
        'Cloud layers',
        'Virtual warehouses'
      ] },
      { module: 'Data Loading', lessons: [
        'File formats',
        'Bulk and continuous loading',
        'S3 integration'
      ] },
      { module: 'Snowpipe', lessons: [
        'CSV and JSON loading'
      ] },
      { module: 'Stages', lessons: [
        'Table, user, and named stages'
      ] },
      { module: 'Security', lessons: [
        'User roles',
        'Data encryption'
      ] },
      { module: 'Pricing', lessons: [
        'Credits',
        'Storage costs'
      ] }
    ],
    skills:[
      'Snowflake architecture',
      'Data warehouse design',
      'ETL processes',
      'Data security',
      'Performance optimization',
      'Cloud data platforms'
    ],
  },
  {
    id:17, title:'Numpy | Pandas | Matplotlib', slug:'numpy-pandas-matplotlib-online-training', visible: true, category:'Data Science', rating:5, reviews:0, image:'https://images.nareshit.com/Numpy-Pandas-Matplotlib-online-training-nareshit.jpg',
    enriched:true,
    description:'Master NumPy, Pandas, and Matplotlib to efficiently handle, analyze, and visualize data for data science projects with hands-on practical knowledge.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📊', label: 'Data Visualization' },
      { icon: '🔢', label: 'NumPy Array Operations' },
      { icon: '🐼', label: 'Pandas DataFrames' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📈', label: 'Statistical Analysis' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand NumPy arrays and applications',
      'Learn data manipulation using Pandas',
      'Develop visualization skills with Matplotlib',
      'Perform data cleaning and aggregation',
      'Work with real-world datasets',
      'Create comprehensive data reports'
    ],
    requirements:[
      'Basic Python programming knowledge',
      'Familiarity with mathematics',
      'Interest in data analysis and visualization'
    ],
    whoIsFor:[
      'Data science beginners',
      'Data analysis professionals',
      'Python developers',
      'Machine learning aspirants'
    ],
    curriculum:[
      { module: 'NumPy', lessons: [
        'Introduction',
        'Installation',
        'Array Creation',
        'Manipulation',
        'Mathematical Operations',
        'Indexing',
        'Slicing',
        'Statistical Functions',
        'Filtering'
      ] },
      { module: 'Pandas', lessons: [
        'Fundamentals',
        'Series',
        'DataFrame',
        'Loading Files',
        'Handling Missing Values',
        'Filtering',
        'Sorting',
        'GroupBy',
        'Merging',
        'Concatenation'
      ] },
      { module: 'Matplotlib', lessons: [
        'Introduction',
        'Pyplot',
        'Figure Class',
        'Axes Class',
        'Multiple Plots',
        'Line Graphs',
        'Bar Charts',
        'Histograms',
        'Scatter Plots',
        'Pie Charts',
        '3D Plots'
      ] }
    ],
    skills:[
      'Array manipulation',
      'Data transformation',
      'Data visualization',
      'Statistical analysis',
      'Feature engineering'
    ],
  },
  {
    id:18, title:'DevOps with Multi Cloud', slug:'devops-with-multi-cloud-online-training', visible: false, category:'DevOps', rating:5, reviews:0, image:'https://images.nareshit.com/DevOps_with_Multi_Cloud_Online_Training_thumb.jpg',
    enriched:true,
    description:'Comprehensive DevOps training across Azure, AWS, and GCP covering containerization, CI/CD pipelines, cloud automation, and real-time monitoring for multi-cloud environments.',
    trainer:'Mr. Veera Babu', trainerBio:'Industry professional with extensive experience offering real-world DevOps insights.', trainerExp:'', trainerStudents:'',
    duration:'4 months', level:'Intermediate', mode:'Online / Offline', startDate:'June 1, 2026',
    highlights:[
      { icon: '☁️', label: 'AWS + Azure + GCP' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '🔗', label: 'CI/CD Pipelines' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🏗️', label: 'Terraform & Ansible' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement DevOps across multi-cloud platforms',
      'Deploy applications with Docker and Kubernetes',
      'Build automated CI/CD pipelines',
      'Automate cloud operations with Python',
      'Monitor workloads with Prometheus and Grafana',
      'Optimize performance across cloud providers'
    ],
    requirements:[
      'Basic DevOps and cloud platform knowledge',
      'Familiarity with CI/CD and Docker',
      'Knowledge of Python or scripting language'
    ],
    whoIsFor:[
      'DevOps engineers expanding multi-cloud skills',
      'Cloud architects',
      'System administrators',
      'Software developers',
      'Infrastructure engineers'
    ],
    curriculum:[
      { module: 'AWS, Azure and GCP Cloud Overview', lessons: [
        'Introduction to Cloud Computing',
        'Cloud Service Models',
        'Security in the Cloud'
      ] },
      { module: 'Linux Introduction', lessons: [
        'Virtualization',
        'Linux fundamentals'
      ] },
      { module: 'Docker', lessons: [
        'Docker Introduction',
        'Docker Compose',
        'Docker Swarm'
      ] },
      { module: 'Kubernetes', lessons: [
        'Cluster Architecture',
        'Helm Charts'
      ] },
      { module: 'Jenkins', lessons: [
        'Continuous Integration',
        'Jenkins Plugins'
      ] },
      { module: 'Terraform', lessons: [
        'Infrastructure Automation',
        'Terraform Modules'
      ] },
      { module: 'Ansible', lessons: [
        'Ansible Playbooks',
        'YAML Scripts'
      ] },
      { module: 'Python Boto3', lessons: [
        'Python Object Oriented',
        'Cloud Automation'
      ] }
    ],
    skills:[
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Terraform',
      'Ansible',
      'AWS',
      'Azure',
      'GCP',
      'CI/CD',
      'Python automation'
    ],
  },
  {
    id:19, title:'Linux Administration Online Training', slug:'linux-online-training', visible: false, category:'Operating System', rating:5, reviews:0, image:'https://images.nareshit.com/linux-adminisrtation-online-training.jpg',
    enriched:true,
    description:'Linux Administration includes daily management of servers, systems, or networks with installation, configuration, security, and troubleshooting capabilities for enterprise and development environments.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🐧', label: 'Linux System Administration' },
      { icon: '🔒', label: 'Security & SELinux' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '💻', label: 'Shell Scripting' },
      { icon: '🌐', label: 'Networking & Services' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand Linux File System Hierarchy',
      'Master user and group management',
      'Configure networking and services',
      'Implement SELinux and firewalls',
      'Automate tasks through shell scripting',
      'Monitor systems and manage logs'
    ],
    requirements:[
      'Basic knowledge of operating systems',
      'Familiarity with command-line interface (CLI) is helpful but not mandatory'
    ],
    whoIsFor:[
      'Beginners starting a Linux system administration career',
      'IT professionals expanding Linux knowledge',
      'System administrators enhancing Linux skills',
      'Network administrators managing Linux-based systems'
    ],
    curriculum:[
      { module: 'Introduction to Linux and UNIX', lessons: [
        'History of UNIX & LINUX',
        'Basic Concepts of Operating Systems',
        'Kernel, shell and file system structure'
      ] },
      { module: 'Installation of Linux', lessons: [
        'GUI installation',
        'Text installation'
      ] },
      { module: 'Linux System Structure', lessons: [
        'Basic concepts',
        'bash commands',
        'Editors'
      ] },
      { module: 'Boot Process of Linux', lessons: [
        'Booting process',
        'Init Process or Runlevels'
      ] },
      { module: 'Software Package Administration', lessons: [
        'Repository description',
        'RPM and YUM',
        'YUM server configuration'
      ] },
      { module: 'User and Group Administration', lessons: [
        'Types of Users',
        'Creating/deleting Users and Groups',
        'Modifying user profiles'
      ] },
      { module: 'Logical Volume Management', lessons: [
        'LVM basics',
        'Physical volumes',
        'Volume groups and logical volumes'
      ] },
      { module: 'NFS', lessons: [
        'Server configuration',
        'Client mounting'
      ] },
      { module: 'DNS', lessons: [
        'BIND 9',
        'Primary server configuration'
      ] },
      { module: 'Web Server (Apache)', lessons: [
        'Apache basics',
        'Multiple site configurations'
      ] },
      { module: 'Shell Scripting', lessons: [
        'Basics of shell scripting'
      ] },
      { module: 'Troubleshooting', lessons: [
        'Password recovery',
        'Network troubleshooting'
      ] }
    ],
    skills:[
      'Linux system administration',
      'User and group management',
      'File permissions',
      'Network configuration',
      'Service management',
      'Shell scripting',
      'System troubleshooting'
    ],
  },
  {
    id:20, title:'Tableau', slug:'tableau-online-training', visible: false, category:'Analytics', rating:4.5, reviews:0, image:'https://images.nareshit.com/Tableau-online-training-nareshit.jpg',
    enriched:true,
    description:'NareshIT\'s comprehensive Tableau Online Training teaches data visualization fundamentals and advanced dashboard creation for professional growth in data analysis and business intelligence.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📊', label: 'Interactive Dashboards' },
      { icon: '🗺️', label: 'Geospatial Analytics' },
      { icon: '📈', label: 'Advanced Calculations' },
      { icon: '📜', label: 'Tableau Certification Prep' },
      { icon: '📉', label: 'Forecasting & Trend Lines' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Tableau interface and data connections',
      'Create interactive dashboards and visualizations',
      'Develop advanced calculations and table operations',
      'Apply filtering, parameters, and set operations',
      'Design geospatial analytics and maps',
      'Prepare for Tableau Certification'
    ],
    requirements:[
      'Basic understanding of data importance',
      'Familiarity with Excel or spreadsheet tools',
      'No prior Tableau knowledge required'
    ],
    whoIsFor:[
      'Data analysts',
      'Business intelligence professionals',
      'IT professionals transitioning to data analysis',
      'Tableau Certification candidates',
      'Data visualization beginners'
    ],
    curriculum:[
      { module: 'Introduction to Data Visualization & Tableau', lessons: [
        'What is Data Visualization',
        'Tableau Products',
        'Installation & Environment Setup'
      ] },
      { module: 'Tableau Interface and Basics', lessons: [
        'Understanding the Tableau UI',
        'Connecting to Data Sources',
        'Data Types and Metadata'
      ] },
      { module: 'Data Preparation and Cleaning', lessons: [
        'Data Interpreter',
        'Pivoting and Splitting Fields',
        'Creating Calculated Fields'
      ] },
      { module: 'Basic Visualizations', lessons: [
        'Bar Charts, Line Charts, Pie Charts',
        'Geographic Maps',
        'Tree Maps & Bubble Charts'
      ] },
      { module: 'Advanced Calculations & Table Calculations', lessons: [
        'Level of Detail Expressions',
        'Aggregate Functions',
        'Table Calculations'
      ] },
      { module: 'Dashboards and Stories', lessons: [
        'Building Dashboards',
        'Interactive Dashboards',
        'Creating Stories'
      ] },
      { module: 'Analytics and Forecasting', lessons: [
        'Reference Lines & Bands',
        'Trend Lines & Forecasting',
        'Statistical Summaries'
      ] }
    ],
    skills:[
      'Data visualization',
      'Dashboard creation',
      'Tableau Desktop',
      'Data analysis',
      'Business intelligence reporting'
    ],
  },
  {
    id:21, title:'Google Cloud Online Training', slug:'google-cloud-online-training-gcp', visible: false, category:'Cloud Computing', rating:4.5, reviews:0, image:'https://images.nareshit.com/gppgle_cloud.jpg',
    enriched:true,
    description:'Google Cloud Online Training provides comprehensive knowledge of GCP services and infrastructure, enabling professionals to deploy and manage cloud-based solutions effectively.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☁️', label: 'GCP Core Services' },
      { icon: '🌐', label: 'Virtual Networks & VPC' },
      { icon: '🗄️', label: 'Cloud Storage & Databases' },
      { icon: '📜', label: 'Google Cloud Certification Prep' },
      { icon: '🔒', label: 'Cloud IAM & Security' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Deploy and manage applications on GCP',
      'Master Compute Engine, App Engine, and BigQuery',
      'Gain proficiency in cloud storage and data management',
      'Handle cloud infrastructure and resource management',
      'Prepare for Google Cloud Certification',
      'Work on real-life projects and case studies'
    ],
    requirements:[
      'Basic cloud computing concepts',
      'Linux operating systems and networking familiarity',
      'Prior programming or IT infrastructure experience'
    ],
    whoIsFor:[
      'IT professionals',
      'Software developers',
      'System administrators',
      'Data engineers and analysts',
      'Google Cloud Certification aspirants'
    ],
    curriculum:[
      { module: 'Introduction to Google Cloud Platform', lessons: [
        'GCP Infrastructure',
        'Console and Cloud Shell',
        'Projects'
      ] },
      { module: 'Virtual Machines', lessons: [
        'Compute Engine',
        'Creating Virtual Machines',
        'Working with Virtual Machines'
      ] },
      { module: 'Autoscaling', lessons: [
        'Autoscaling Policies and Configuration'
      ] },
      { module: 'Load Balancing', lessons: [
        'Managed Instance Groups',
        'HTTPS load balancing',
        'SSL/TCP proxy load balancing'
      ] },
      { module: 'Virtual Networks', lessons: [
        'VPC',
        'Subnetworks',
        'Firewall rules',
        'Virtual Networking'
      ] },
      { module: 'Cloud IAM', lessons: [
        'Organizations',
        'Roles',
        'Service Accounts'
      ] },
      { module: 'Data Storage Services', lessons: [
        'Cloud Storage',
        'Cloud SQL',
        'Cloud Bigtable'
      ] },
      { module: 'Monitoring', lessons: [
        'Stackdriver',
        'Logging',
        'Error Reporting'
      ] }
    ],
    skills:[
      'Cloud infrastructure management',
      'GCP service deployment',
      'Database management',
      'Network configuration',
      'Identity and access management'
    ],
  },
  {
    id:22, title:'Full Stack Software Testing', slug:'full-stack-software-testing-online-training', visible: true, category:'Software Testing', rating:4.5, reviews:0, image:'https://images.nareshit.com/full_stack_software_testing_by_naresh_it.jpg',
    enriched:true,
    description:'Comprehensive full-stack software testing course covering manual testing, automation tools, frameworks, and best practices for front-end and back-end quality assurance.',
    trainer:'Real-Time Expert', trainerBio:'Industry experts providing practical insights and guidance in software testing methodologies.', trainerExp:'', trainerStudents:'',
    duration:'2 months', level:'Beginner', mode:'Online / Offline', startDate:'1 Jun 2026',
    highlights:[
      { icon: '🧪', label: 'Manual + Automation Testing' },
      { icon: '🤖', label: 'Selenium & TestNG' },
      { icon: '🔗', label: 'API Testing with Postman' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'CI/CD Integration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Full-stack testing across front-end and back-end',
      'Automation with Selenium and TestNG',
      'Manual testing techniques and SDLC models',
      'API testing with Postman and Rest Assured',
      'Database testing and data-driven frameworks',
      'Performance and security testing fundamentals'
    ],
    requirements:[
      'Basic software testing concepts',
      'Familiarity with one programming language',
      'HTML and CSS knowledge'
    ],
    whoIsFor:[
      'QA Engineers',
      'Software Testers',
      'Developers',
      'Automation Test Engineers',
      'DevOps Professionals',
      'Students and Graduates'
    ],
    curriculum:[
      { module: 'Manual Testing', lessons: [
        'SDLC',
        'STLC',
        'Test Scenarios',
        'Test Cases',
        'Bug Life Cycle',
        'JIRA',
        'Zephyr Scale'
      ] },
      { module: 'Core Java', lessons: [
        'Variables',
        'Data Types',
        'OOP',
        'Collections',
        'Exception Handling'
      ] },
      { module: 'Selenium', lessons: [
        'Locators',
        'Web Elements',
        'Actions',
        'Synchronization',
        'Multi-browser Testing'
      ] },
      { module: 'TestNG', lessons: [
        'Annotations',
        'Data Providers',
        'Parallel Execution'
      ] },
      { module: 'Tools', lessons: [
        'Maven',
        'GitHub',
        'Jenkins',
        'Log4j',
        'Cucumber',
        'API Testing',
        'Database Testing'
      ] }
    ],
    skills:[
      'Test Automation',
      'Manual Testing',
      'Selenium WebDriver',
      'TestNG Framework',
      'API Testing',
      'Database Testing',
      'CI/CD Integration'
    ],
  },
  {
    id:23, title:'DevOps', slug:'devops-online-training', visible: false, category:'DevOps', rating:4.5, reviews:0, image:'https://images.nareshit.com/devops-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive DevOps program covering software development and IT operations integration, with hands-on experience using Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform for modern software environments.',
    trainer:'Mr. Sandeep', trainerBio:'Industry professional instructor at Naresh IT.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Intermediate', mode:'Online / Offline', startDate:'Jun 1, 2026',
    highlights:[
      { icon: '🔄', label: 'CI/CD Pipelines' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '🏗️', label: 'Terraform & Ansible' },
      { icon: '📜', label: 'DevOps Certification Prep' },
      { icon: '☁️', label: 'AWS Cloud Integration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand DevOps principles and practices',
      'Master CI/CD pipeline implementation',
      'Gain containerization skills with Docker and Kubernetes',
      'Learn infrastructure automation with Terraform and Ansible',
      'Develop monitoring and logging expertise',
      'Prepare for industry-recognized DevOps certifications'
    ],
    requirements:[
      'Basic software development lifecycle understanding',
      'Familiarity with version control systems',
      'Knowledge of CI/CD concepts',
      'Understanding of containerization technologies'
    ],
    whoIsFor:[
      'Software developers',
      'System administrators',
      'Operations engineers',
      'IT managers',
      'Quality assurance professionals'
    ],
    curriculum:[
      { module: 'Introduction', lessons: [
        'SDLC',
        'Agile vs Waterfall',
        'DevOps lifecycle'
      ] },
      { module: 'AWS Cloud', lessons: [
        'IAM',
        'EC2',
        'VPC',
        'RDS'
      ] },
      { module: 'Git', lessons: [
        'Version control',
        'Branching strategies',
        'Repository management'
      ] },
      { module: 'Jenkins', lessons: [
        'Pipeline setup',
        'Integration',
        'Continuous deployment'
      ] },
      { module: 'Docker', lessons: [
        'Containerization',
        'Images',
        'Orchestration'
      ] },
      { module: 'Kubernetes', lessons: [
        'Container management',
        'Scaling'
      ] },
      { module: 'Terraform', lessons: [
        'Infrastructure as Code',
        'State management'
      ] },
      { module: 'Ansible', lessons: [
        'Configuration management',
        'Playbooks'
      ] },
      { module: 'Monitoring', lessons: [
        'Prometheus',
        'Grafana',
        'Nagios'
      ] }
    ],
    skills:[
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Git',
      'AWS',
      'CI/CD pipelines',
      'Infrastructure automation',
      'Monitoring'
    ],
  },
  {
    id:24, title:'Multi Cloud', slug:'multi-cloud-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/multi-cloud-online-training-nareshit.jpg',
    enriched:true,
    description:'Master multi-cloud computing across AWS and Azure platforms with strategies for designing, deploying, and managing distributed workloads while optimizing costs and ensuring security.',
    trainer:'Mr. Veera Babu', trainerBio:'Industry expert providing real-world insights into cloud architecture and multi-cloud management practices.', trainerExp:'', trainerStudents:'',
    duration:'4 months', level:'Intermediate', mode:'Online / Offline', startDate:'Jun 1, 2026',
    highlights:[
      { icon: '☁️', label: 'AWS + Azure Multi-cloud' },
      { icon: '🔒', label: 'Security & Compliance' },
      { icon: '💰', label: 'Cost Optimization' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🏗️', label: 'Cloud Migration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand AWS and Azure services, features, and pricing models',
      'Design and deploy multi-cloud environments',
      'Implement cloud migration and workload optimization',
      'Ensure security, compliance, and governance across clouds',
      'Leverage cloud-native tools for integration and automation',
      'Reduce vendor lock-in through strategic multi-cloud architecture'
    ],
    requirements:[
      'Basic cloud computing concepts and terminology',
      'Familiarity with networking, storage, and virtualization fundamentals',
      'Prior AWS or Azure experience preferred but not mandatory',
      'Basic Linux/Unix CLI and Python scripting knowledge'
    ],
    whoIsFor:[
      'IT professionals seeking cloud architecture skills',
      'System administrators and DevOps engineers',
      'Solution architects interested in multi-cloud strategies',
      'Business leaders optimizing cloud infrastructure',
      'Students pursuing cloud computing careers'
    ],
    curriculum:[],
    skills:[
      'Multi-cloud architecture design',
      'AWS platform expertise',
      'Azure platform expertise',
      'Cloud migration and optimization',
      'Cost management',
      'Security and compliance governance'
    ],
  },
  {
    id:25, title:'DevOps with AWS', slug:'devops-with-aws-online-training', visible: false, category:'DevOps', rating:5, reviews:0, image:'https://images.nareshit.com/devops-with-aws-online-training.jpg',
    enriched:true,
    description:'Comprehensive AWS DevOps training covering CI/CD pipelines, Infrastructure as Code, monitoring, and security best practices to streamline development and operations processes.',
    trainer:'Mr. Raham', trainerBio:'Made complex concepts easily understandable and practical per student feedback.', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☁️', label: 'AWS Native DevOps' },
      { icon: '🔄', label: 'CI/CD Automation' },
      { icon: '🏗️', label: 'Infrastructure as Code' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement CI/CD pipelines with AWS services',
      'Deploy Infrastructure as Code using CloudFormation and CDK',
      'Configure monitoring with CloudWatch and X-Ray',
      'Apply DevOps security best practices',
      'Automate tasks with OpsWorks and Systems Manager',
      'Understand core DevOps principles'
    ],
    requirements:[
      'Basic software development understanding',
      'Familiarity with AWS services recommended',
      'Knowledge of at least one programming language (Python, Java, JavaScript)'
    ],
    whoIsFor:[
      'Software developers',
      'System administrators and operations engineers',
      'DevOps engineers',
      'IT professionals adopting DevOps practices'
    ],
    curriculum:[
      { module: 'Overview of DevOps', lessons: [
        'What is DevOps',
        'DevOps Market Trends',
        'DevOps Delivery Pipeline'
      ] },
      { module: 'Linux', lessons: [
        'Linux commands',
        'File permissions',
        'Process management',
        'Networking'
      ] },
      { module: 'Cloud Concepts', lessons: [
        'EC2 Instance',
        'Load Balancing',
        'VPC',
        'Lambda'
      ] },
      { module: 'Continuous Integration - Jenkins', lessons: [
        'Jenkins configuration',
        'Master & Slave setup',
        'Jenkins plugins'
      ] },
      { module: 'Docker', lessons: [
        'Docker images',
        'Docker containers',
        'Docker Compose',
        'Docker Hub'
      ] },
      { module: 'Kubernetes', lessons: [
        'Cluster architecture',
        'YAML',
        'Deployments',
        'Services',
        'Helm Charts'
      ] },
      { module: 'Terraform', lessons: [
        'Introduction',
        'Modules',
        'State management',
        'AWS labs'
      ] }
    ],
    skills:[
      'AWS services',
      'CI/CD pipeline design',
      'Infrastructure as Code',
      'Docker and Kubernetes',
      'Terraform',
      'Ansible',
      'Jenkins',
      'Git version control'
    ],
  },
  {
    id:26, title:'Java Real-Time Projects', slug:'java-real-time-projects-online-training', visible: false, category:'Programming', rating:4.5, reviews:0, image:'https://images.nareshit.com/java-real-time-projects-online-training.jpg',
    enriched:true,
    description:'Comprehensive online training in building real-world Java applications with hands-on expertise across web development, enterprise applications, and mobile apps using industry best practices.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☕', label: 'Real-world Java Projects' },
      { icon: '🏗️', label: 'Enterprise Architecture' },
      { icon: '🧪', label: 'Debugging & Testing' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔧', label: 'Design Patterns' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Hands-on Java application development',
      'Popular Java frameworks and libraries',
      'Debugging and testing techniques',
      'Design patterns application',
      'Building and deploying real-world applications',
      'Collaboration and problem-solving skills'
    ],
    requirements:[
      'Core Java concepts',
      'Object-oriented programming (OOP) principles',
      'Java frameworks (Spring, Hibernate)',
      'Databases and SQL',
      'Version control systems (Git)'
    ],
    whoIsFor:[
      'Java enthusiasts',
      'Computer science students/graduates',
      'Software developers expanding skill sets',
      'Professionals advancing Java careers',
      'Anyone interested in real-world Java applications'
    ],
    curriculum:[],
    skills:[
      'Java application development',
      'Spring and Hibernate frameworks',
      'Design patterns',
      'Debugging methodologies',
      'Testing procedures',
      'Deployment strategies'
    ],
  },
  {
    id:27, title:'Python Programming', slug:'python-online-training', visible: false, category:'Programming', rating:4.3, reviews:0, image:'https://images.nareshit.com/python-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Python programming course covering fundamentals to advanced topics including OOP, file handling, and real-world applications. Designed for beginners and professionals seeking to develop practical software solutions.',
    trainer:'Mr. Shareef', trainerBio:'Expert instructor delivering Python programming training with hands-on practical exercises and real-world insights.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'May 29, 2026',
    highlights:[
      { icon: '🐍', label: 'Python Fundamentals to Advanced' },
      { icon: '📦', label: 'OOP & Modules' },
      { icon: '🔄', label: 'Multi-threading' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'Database Integration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Python syntax and data structures',
      'Object-oriented programming principles',
      'File handling and exception management',
      'Module and library usage',
      'Application development',
      'Career advancement in Python development'
    ],
    requirements:[
      'Basic computer and programming concepts',
      'Familiarity with mathematics',
      'Logical thinking and problem-solving skills',
      'Text editor or IDE knowledge'
    ],
    whoIsFor:[
      'Programming beginners',
      'Computer science students',
      'Professionals enhancing programming skills',
      'Data analysts and scientists',
      'Software developers',
      'Automation and scripting enthusiasts'
    ],
    curriculum:[
      { module: 'Introduction to Programming Languages', lessons: [
        'Introduction to Python',
        'Working with Python Software',
        'Python Language Fundamentals'
      ] },
      { module: 'Python Fundamentals', lessons: [
        'Different Modes of working with Python',
        'Basic I/O operations',
        'Operators and Expressions',
        'Data Types'
      ] },
      { module: 'Data Structures', lessons: [
        'List Operations',
        'Tuple Operations',
        'Set and Frozenset',
        'Dictionary Operations',
        'Comprehensions'
      ] },
      { module: 'Advanced Topics', lessons: [
        'Functions',
        'Modules and Packages',
        'OOP Principles',
        'Exception Handling',
        'Regular Expressions'
      ] },
      { module: 'Practical Applications', lessons: [
        'File Handling',
        'Collections Module',
        'OS Module',
        'Multi Threading',
        'Database Communications'
      ] }
    ],
    skills:[
      'Python programming',
      'Data structure manipulation',
      'Object-oriented design',
      'Exception handling',
      'File I/O operations',
      'Module integration'
    ],
  },
  {
    id:28, title:'Full Stack .Net Placement Assistance Program', slug:'full-stack-dot-net-placement-assistance-program-online-training', visible: true, category:'Full Stack', rating:5, reviews:0, image:'https://images.nareshit.com/full-stack-dot-net-placement-assistance-program-nareshit.jpg',
    enriched:true,
    description:'Comprehensive .NET placement program covering C#, ASP.NET Core, MVC, and full-stack development with guaranteed job assistance and interview preparation.',
    trainer:'Real-Time Expert', trainerBio:'Industry professionals delivering practical insights into Full Stack .NET development.', trainerExp:'', trainerStudents:'',
    duration:'6 months', level:'Intermediate', mode:'Online / Classroom', startDate:'Jun 8, 2026',
    highlights:[
      { icon: '🎯', label: 'Job Placement Guarantee' },
      { icon: '💼', label: 'Interview Preparation' },
      { icon: '🖥️', label: 'ASP.NET Core & MVC' },
      { icon: '⚛️', label: 'React JS Frontend' },
      { icon: '🗄️', label: 'SQL Server & Entity Framework' },
      { icon: '🎓', label: 'Mock Interviews' }
    ],
    whatYouLearn:[
      'Master C#.NET and ASP.NET Core',
      'Build web applications with MVC architecture',
      'Database management with SQL Server and Entity Framework',
      'Frontend development with React JS',
      'Secure job placement through dedicated assistance',
      'Develop communication and professional soft skills'
    ],
    requirements:[
      'Basic programming knowledge',
      'Familiarity with object-oriented programming',
      'Strong motivation for .NET development'
    ],
    whoIsFor:[
      'IT aspirants',
      'Working professionals transitioning to .NET',
      'Career changers in software development',
      'Passionate learners seeking placements'
    ],
    curriculum:[
      { module: 'C#.NET', lessons: [
        'Programming fundamentals',
        'OOP concepts',
        'LINQ and Entity Framework'
      ] },
      { module: 'ASP.NET Core', lessons: [
        'Web application development',
        'RESTful APIs',
        'Middleware configuration'
      ] },
      { module: 'MVC 5 + MVC Core', lessons: [
        'Model-View-Controller architecture',
        'Routing and controllers',
        'Views and data binding'
      ] },
      { module: 'SQL Server', lessons: [
        'Database design',
        'Query optimization',
        'Transaction management'
      ] },
      { module: 'React JS', lessons: [
        'Component development',
        'State management',
        'Integration with backend'
      ] },
      { module: 'Communication Skills', lessons: [
        'Technical presentation',
        'Interview readiness'
      ] },
      { module: 'CRT', lessons: [
        'Campus recruitment training'
      ] }
    ],
    skills:[
      'C# programming',
      'ASP.NET Core',
      'MVC architecture',
      'SQL Server',
      'React JS',
      'Full-stack development',
      'Mock interviews'
    ],
  },
  {
    id:29, title:'Full Stack Java Placement Assistance Program', slug:'full-stack-java-placement-assistance-program-online-training', visible: true, category:'Full Stack', rating:4.5, reviews:0, image:'https://images.nareshit.com/full-stack-java-placement-assistance-program-nareshit.jpg',
    enriched:true,
    description:'Meticulously crafted program delivering top-notch training to empower Java proficiency and secure lucrative software development roles with dedicated placement support.',
    trainer:'Real-Time Expert', trainerBio:'Industry professionals providing practical insights into Full Stack development.', trainerExp:'', trainerStudents:'',
    duration:'6 months', level:'Beginner to Intermediate', mode:'Online / Classroom', startDate:'June 8, 2026',
    highlights:[
      { icon: '🎯', label: 'Job Placement Assistance' },
      { icon: '☕', label: 'Full Stack Java' },
      { icon: '⚛️', label: 'React Frontend' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'Oracle SQL & PL/SQL' },
      { icon: '🎓', label: 'Mock Interviews' }
    ],
    whatYouLearn:[
      'Master core Java programming',
      'Develop full-stack web applications',
      'Build real-world projects',
      'Secure job placement through dedicated assistance',
      'Strengthen interview and soft skills',
      'Implement database connectivity and design patterns'
    ],
    requirements:[
      'Basic programming concepts understanding',
      'Prior experience with Java, Python, or C/C++ preferred',
      'Familiarity with variables, loops, and functions beneficial'
    ],
    whoIsFor:[
      'Recent graduates',
      'Career-switching professionals',
      'Coding enthusiasts seeking skill enhancement',
      'Individuals targeting software development roles'
    ],
    curriculum:[
      { module: 'Programming Foundation with C', lessons: [
        'Introduction to C',
        'C Fundamentals',
        'Data Types & I/O',
        'Control Structures'
      ] },
      { module: 'Web Development with HTML & CSS', lessons: [
        'HTML Structure',
        'CSS Fundamentals',
        'Layout Techniques'
      ] },
      { module: 'JavaScript Programming', lessons: [
        'Variables & Data Types',
        'DOM & BOM',
        'Promises & Async'
      ] },
      { module: 'Core Java Programming', lessons: [
        'OOP Concepts',
        'Collections',
        'Streams API & Lambda'
      ] },
      { module: 'Oracle SQL & PL/SQL', lessons: [
        'SQL Commands',
        'PL/SQL Programming'
      ] },
      { module: 'Advanced Java (J2EE)', lessons: [
        'JDBC',
        'Servlets',
        'Spring Boot & MicroServices'
      ] }
    ],
    skills:[
      'Java programming',
      'Full-stack development',
      'Database design',
      'Web technologies',
      'Problem-solving',
      'Interview preparation'
    ],
  },
  {
    id:30, title:'MS Azure Data Factory', slug:'ms-azure-data-factory-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/azure-data-factory-online-training-nareshit.jpg',
    enriched:true,
    description:'Azure Data Factory enables organizations to efficiently move data across on-premises and cloud environments, transforming raw data into meaningful insights through data integration and orchestration.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔄', label: 'Data Pipeline Design' },
      { icon: '☁️', label: 'Azure Data Integration' },
      { icon: '⚡', label: 'Real-time Streaming' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'ETL & Data Flows' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Create and manage data pipelines using Azure Data Factory',
      'Connect to different data sources and perform transformations',
      'Load data into target destinations',
      'Monitor, debug, and optimize pipelines',
      'Integrate ADF with other Azure services',
      'Design scalable and reliable data workflows'
    ],
    requirements:[
      'Cloud computing concepts',
      'Azure fundamentals',
      'Data storage technologies',
      'SQL and data querying',
      'ETL concepts and data integration patterns'
    ],
    whoIsFor:[
      'Data Engineers',
      'Data Analysts',
      'BI Developers',
      'Database Administrators',
      'IT Professionals'
    ],
    curriculum:[
      { module: 'Introduction to Cloud Computing', lessons: [
        'Cloud Models',
        'Cloud Services',
        'Cloud Vendors'
      ] },
      { module: 'Microsoft Azure Platform', lessons: [
        'Azure Services',
        'Resource Manager',
        'Management Portal'
      ] },
      { module: 'Azure Storage Services', lessons: [
        'Blob Storage',
        'File Share',
        'Data Lake Gen2'
      ] },
      { module: 'Azure Data Factory Fundamentals', lessons: [
        'Pipelines',
        'Activities',
        'Datasets',
        'Linked Services',
        'Triggers'
      ] },
      { module: 'Data Flows & Transformations', lessons: [
        'Source Transformation',
        'Join',
        'Aggregate',
        'Conditional Split'
      ] },
      { module: 'Azure Databricks & Synapse', lessons: [
        'Spark Clusters',
        'SQL Pools',
        'Apache Spark'
      ] },
      { module: 'Azure Stream Analytics', lessons: [
        'IoT Integration',
        'Real-time Processing'
      ] }
    ],
    skills:[
      'Data pipeline design',
      'Cloud data integration',
      'ETL processes',
      'Azure services',
      'Data transformation',
      'Stream processing',
      'SQL optimization'
    ],
  },
  {
    id:31, title:'Azure Fundamentals (AZ-900)', slug:'azure-fundamentals-az-900-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/azure-fundamentals-online-training-nareshit.jpg',
    enriched:true,
    description:'Azure Fundamentals (AZ-900) is a foundational certification introducing cloud computing and Microsoft Azure\'s core concepts, services, and solutions for beginners.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☁️', label: 'Azure Core Services' },
      { icon: '🔒', label: 'Security & Compliance' },
      { icon: '💰', label: 'Pricing & SLA' },
      { icon: '📜', label: 'AZ-900 Certification Prep' },
      { icon: '🌐', label: 'Networking Fundamentals' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Cloud concepts and deployment models',
      'Core Azure services (compute, storage, networking, databases)',
      'Security, privacy, and compliance in Azure',
      'Azure pricing and service level agreements',
      'IoT, AI, and ML solutions on Azure',
      'Azure Active Directory and access management'
    ],
    requirements:[
      'Basic IT concepts understanding',
      'Familiarity with internet and web services',
      'No prior Azure experience required'
    ],
    whoIsFor:[
      'IT professionals expanding cloud knowledge',
      'Students and recent graduates',
      'Business decision-makers',
      'Anyone seeking foundational cloud computing understanding'
    ],
    curriculum:[
      { module: 'Azure Basics', lessons: [
        'Azure Introduction',
        'Creating Azure Free Account',
        'Understanding Azure Subscriptions and Roles',
        'ARM (Azure Resource Manager)'
      ] },
      { module: 'Compute', lessons: [
        'Introduction to Virtual Machines',
        'Pricing',
        'Availability Sets',
        'Availability Zones'
      ] },
      { module: 'Network', lessons: [
        'Azure Virtual Networks',
        'Network Security Groups',
        'ExpressRoute'
      ] },
      { module: 'Storage', lessons: [
        'Azure Storage Replication',
        'Blob Storage',
        'File Storage'
      ] },
      { module: 'Identity and Access Management', lessons: [
        'Azure Active Directory',
        'Multifactor Authentication'
      ] },
      { module: 'PaaS', lessons: [
        'Azure Web Apps',
        'Azure SQL Database',
        'Azure Service Bus'
      ] }
    ],
    skills:[
      'Cloud architecture',
      'Azure service deployment',
      'Identity and access management',
      'Cloud security principles',
      'Azure pricing and SLA understanding'
    ],
  },
  {
    id:32, title:'Azure Developer Associate (AZ-204)', slug:'azure-developer-associate-az-204-online-training', visible: false, category:'Cloud Computing', rating:4, reviews:0, image:'https://images.nareshit.com/azure-developer-online-training-nareshit.jpg',
    enriched:true,
    description:'AZ-204 certification training for developers to design, build, test, and maintain cloud applications on Microsoft Azure, covering SDKs, storage, security, and optimization.',
    trainer:'Wasif sir', trainerBio:'Teaches Microsoft Azure DevOps with excellent techniques for clear concept understanding.', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '👨‍💻', label: 'Azure Developer Certification' },
      { icon: '🔐', label: 'Azure Security & Identity' },
      { icon: '📊', label: 'Application Insights' },
      { icon: '📜', label: 'AZ-204 Certification Prep' },
      { icon: '🔗', label: 'API & Event Integration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement IaaS solutions and Azure VMs',
      'Develop Azure storage and Cosmos DB solutions',
      'Implement user authentication with Azure AD',
      'Monitor and optimize Azure applications',
      'Deploy solutions with DevOps and GitHub Actions',
      'Integrate Azure services and APIs'
    ],
    requirements:[
      'Proficiency in programming language (C#, JavaScript, Python, Java)',
      'Familiarity with Azure fundamentals and cloud concepts',
      'Experience with Azure services deployment recommended'
    ],
    whoIsFor:[
      'Software developers enhancing cloud skills',
      'Application architects designing scalable solutions',
      'DevOps engineers integrating Azure services',
      'IT professionals seeking Azure certification'
    ],
    curriculum:[
      { module: 'Azure Compute Solutions', lessons: [
        'Create Azure VMs',
        'Configure and manage VMs',
        'Implement Azure Functions'
      ] },
      { module: 'Develop Azure Storage Solutions', lessons: [
        'Develop for Blob Storage',
        'Develop for Cosmos DB',
        'Manage Table & Queue Storage'
      ] },
      { module: 'Implement Azure Security', lessons: [
        'User Authentication and Authorization',
        'Secure Cloud Solutions'
      ] },
      { module: 'Monitor, Troubleshoot, and Optimize', lessons: [
        'Application Insights',
        'Implement autoscaling',
        'Azure Cache for Redis'
      ] },
      { module: 'Connect to and Consume Services', lessons: [
        'API Management',
        'Event-Based Solutions',
        'Message-Based Solutions'
      ] },
      { module: 'Deploy Azure Solutions', lessons: [
        'Deployment Environments',
        'Azure DevOps and GitHub Actions'
      ] }
    ],
    skills:[
      'Azure compute services',
      'Azure storage solutions',
      'Azure security and identity',
      'Application monitoring',
      'DevOps deployment practices',
      'Azure API management'
    ],
  },
  {
    id:33, title:'Azure DevOps (AZ-400)', slug:'azure-devops-az-400-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/azure-devops-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive course on Microsoft Azure DevOps (AZ-400) covering CI/CD pipelines, infrastructure automation, release management, and DevOps best practices for cloud-based software delivery.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔄', label: 'Azure Pipelines CI/CD' },
      { icon: '🏗️', label: 'Infrastructure Automation' },
      { icon: '📋', label: 'Azure Boards & Repos' },
      { icon: '📜', label: 'AZ-400 Certification Prep' },
      { icon: '📊', label: 'Azure Monitor & Alerts' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement CI/CD pipelines using Azure Pipelines',
      'Manage source code with Azure Repos',
      'Automate infrastructure deployment with IaC',
      'Configure Azure DevOps services',
      'Collaborate using Azure Boards',
      'Monitor applications with Azure Monitor'
    ],
    requirements:[
      'Basic software development knowledge',
      'Understanding of version control systems like Git',
      'Cloud computing familiarity'
    ],
    whoIsFor:[
      'Software developers and engineers',
      'DevOps engineers',
      'IT professionals in deployment roles',
      'Project managers and team leads',
      'Cloud technology enthusiasts'
    ],
    curriculum:[
      { module: 'Cloud Computing Fundamentals', lessons: [
        'Cloud Models',
        'Cloud Services',
        'Cloud Vendors'
      ] },
      { module: 'Microsoft Azure Platform', lessons: [
        'Azure Services',
        'Resource Management',
        'Azure Portal'
      ] },
      { module: 'DevOps Tools', lessons: [
        'Azure Pipelines',
        'Release Management',
        'Testing'
      ] },
      { module: 'Monitoring & Security', lessons: [
        'Azure Monitor',
        'Alerts',
        'RBAC'
      ] }
    ],
    skills:[
      'Azure DevOps',
      'CI/CD Implementation',
      'Infrastructure as Code',
      'Release Management',
      'Azure Pipelines',
      'Continuous Integration',
      'Azure Repos'
    ],
  },
  {
    id:34, title:'Azure Administrator (AZ-104)', slug:'azure-administrator-az-104-online-training', visible: false, category:'Cloud Computing', rating:4.5, reviews:0, image:'https://images.nareshit.com/azue-administrator-online-training-nareshit.jpg',
    enriched:true,
    description:'Azure Administrator (AZ-104) certification validates skills for managing cloud services including storage, security, networking, and compute resources within Microsoft Azure environment.',
    trainer:'Shiva Rama Krishna', trainerBio:'Industry professional providing expertise in Azure administration and cloud technologies.', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚙️', label: 'Azure Administration' },
      { icon: '🔒', label: 'Identity & Governance' },
      { icon: '🌐', label: 'Virtual Networking' },
      { icon: '📜', label: 'AZ-104 Certification Prep' },
      { icon: '📊', label: 'Azure Monitor' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Managing Azure identities and governance',
      'Implementing and managing storage solutions',
      'Deploying and managing virtual machines',
      'Configuring virtual networking',
      'Securing identities with multi-factor authentication',
      'Monitoring and backing up resources'
    ],
    requirements:[
      'Basic cloud computing understanding',
      'Familiarity with core Azure services',
      'Basic networking knowledge',
      'Operating system experience (Windows/Linux)',
      'Virtualization experience'
    ],
    whoIsFor:[
      'IT professionals seeking cloud careers',
      'System administrators validating Azure skills',
      'Cloud architects understanding Azure administration',
      'Career transition candidates in cloud computing'
    ],
    curriculum:[
      { module: 'Cloud Concepts', lessons: [
        'Why Cloud Services',
        'Types of Cloud models',
        'Types of Cloud services'
      ] },
      { module: 'Core Azure Services', lessons: [
        'Architectural components',
        'Core services and products',
        'Azure solutions',
        'Management tools'
      ] },
      { module: 'Azure Administration', lessons: [
        'Portal and CloudShell',
        'PowerShell and CLI',
        'Resource Manager',
        'ARM Templates'
      ] },
      { module: 'Azure Virtual Machines', lessons: [
        'Planning',
        'Creation',
        'Availability',
        'Extensions'
      ] },
      { module: 'Azure Storage', lessons: [
        'Storage Accounts',
        'Blobs',
        'Files',
        'Security'
      ] },
      { module: 'Virtual Networking', lessons: [
        'Networks',
        'IP Addressing',
        'DNS',
        'Security Groups'
      ] },
      { module: 'Monitoring', lessons: [
        'Azure Monitor',
        'Alerts',
        'Log Analytics',
        'Network Watcher'
      ] }
    ],
    skills:[
      'Azure resource management',
      'Virtual machine deployment',
      'Storage implementation',
      'Network configuration',
      'Identity security',
      'Compliance and governance',
      'Monitoring and diagnostics'
    ],
  },
  {
    id:35, title:'Full Stack Java Developer Program', slug:'full-stack-java-developer-program-online-training', visible: false, category:'Full Stack', rating:5, reviews:0, image:'https://images.nareshit.com/Full_Stack_Java_Developer_Program_.png',
    enriched:true,
    description:'Comprehensive full-stack Java program covering front-end frameworks (React/Angular), back-end technologies (Spring Boot), databases (MySQL/MongoDB), and deployment strategies (Docker/Kubernetes) for modern application development.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☕', label: 'Java + Spring Boot' },
      { icon: '⚛️', label: 'React Frontend' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'MySQL & MongoDB' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Java programming language',
      'Develop interactive user interfaces with modern frameworks',
      'Build robust back-end systems using Spring Boot',
      'Understand database design and management',
      'Deploy applications using Docker and Kubernetes',
      'Gain real-world project experience'
    ],
    requirements:[
      'Basic programming concepts',
      'Knowledge of Java basics',
      'Understanding of web technologies',
      'Familiarity with databases',
      'Basic command line skills'
    ],
    whoIsFor:[
      'Students pursuing software development careers',
      'Professionals transitioning to full-stack Java development',
      'Java developers expanding to full-stack skills',
      'Entrepreneurs building web applications'
    ],
    curriculum:[
      { module: 'Core Java', lessons: [
        'Introduction',
        'Installation',
        'Programming Elements',
        'OOPS',
        'Exception Handling',
        'Collection Framework',
        'JDK 8/10/11 features'
      ] },
      { module: 'ADV.JAVA', lessons: [
        'JDBC',
        'Servlet',
        'JSP'
      ] },
      { module: 'Oracle', lessons: [
        'DDL',
        'DML',
        'PL/SQL',
        'Triggers'
      ] },
      { module: 'HTML/CSS/JavaScript', lessons: [
        'Forms',
        'Canvas',
        '2D/3D Transforms',
        'Animations'
      ] },
      { module: 'ReactJS', lessons: [
        'Components',
        'Hooks',
        'Routing',
        'Redux'
      ] },
      { module: 'Spring Boot & Microservices', lessons: [
        'REST APIs',
        'JPA Repository',
        'Spring Security',
        'Microservices Design'
      ] },
      { module: 'Tools', lessons: [
        'Git',
        'Jenkins',
        'Docker',
        'Maven',
        'Gradle',
        'Jira'
      ] }
    ],
    skills:[
      'Java programming',
      'React/Angular',
      'Spring Boot',
      'Microservices',
      'Docker & Kubernetes',
      'Database management',
      'REST APIs',
      'Git/CI-CD'
    ],
  },
  {
    id:36, title:'Full Stack Python', slug:'full-stack-python-online-training', visible: true, category:'Full Stack', rating:5, reviews:0, image:'https://images.nareshit.com/python.jpg',
    enriched:true,
    description:'Comprehensive online training in full-stack Python web development covering frontend, backend, databases, and deployment strategies for building scalable applications.',
    trainer:'Mr. Shareef', trainerBio:'Experienced instructor delivering Full Stack Python training with practical expertise in web development.', trainerExp:'', trainerStudents:'',
    duration:'5 months', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'May 29, 2026',
    highlights:[
      { icon: '🐍', label: 'Python Full Stack' },
      { icon: '🌐', label: 'Django & Flask' },
      { icon: '⚛️', label: 'React Frontend' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'MySQL & MongoDB' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master full-stack architecture',
      'Develop dynamic web interfaces with Flask/Django',
      'Build RESTful APIs',
      'Implement user authentication and security',
      'Deploy Python applications to production',
      'Integrate frontend and backend components'
    ],
    requirements:[
      'Basic programming knowledge (preferably Python)',
      'Familiarity with HTML, CSS, JavaScript',
      'Database concept understanding beneficial'
    ],
    whoIsFor:[
      'Aspiring web developers',
      'Software engineers expanding skills',
      'Entrepreneurs building applications',
      'Career transitioners',
      'Technology enthusiasts'
    ],
    curriculum:[
      { module: 'Core Python', lessons: [
        'Introduction to Programming',
        'Python Fundamentals',
        'Data Types',
        'Functions',
        'Exception Handling'
      ] },
      { module: 'Advanced Python', lessons: [
        'Object-Oriented Programming',
        'Multi-Threading',
        'Database Communications'
      ] },
      { module: 'NumPy', lessons: [
        'Array Creation',
        'Indexing',
        'Broadcasting'
      ] },
      { module: 'Pandas', lessons: [
        'DataFrames',
        'Data Manipulation',
        'Merging'
      ] },
      { module: 'Django with Rest API', lessons: [
        'Models',
        'Forms',
        'Authentication',
        'REST Framework'
      ] },
      { module: 'Flask', lessons: [
        'Web Applications',
        'User Authentication',
        'RESTful APIs'
      ] },
      { module: 'Database', lessons: [
        'MySQL',
        'MongoDB'
      ] }
    ],
    skills:[
      'Python programming',
      'Full-stack architecture',
      'Django/Flask frameworks',
      'RESTful API development',
      'Database design',
      'Frontend technologies',
      'Deployment strategies',
      'Security best practices'
    ],
  },
  {
    id:37, title:'Hadoop Online Training', slug:'hadoop-online-training', visible: false, category:'Data Science', rating:4, reviews:0, image:'https://images.nareshit.com/hadoop-online-training-nareshit.jpg',
    enriched:true,
    description:'Master big data processing with Hadoop through comprehensive online training covering HDFS, MapReduce, and ecosystem tools like Hive, Pig, and Spark.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🐘', label: 'Hadoop Ecosystem' },
      { icon: '⚡', label: 'Apache Spark' },
      { icon: '🗄️', label: 'HDFS & MapReduce' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔍', label: 'Big Data Analytics' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Grasp Hadoop fundamentals and architecture',
      'Master HDFS for data storage and retrieval',
      'Execute MapReduce programming model',
      'Utilize Hadoop ecosystem tools effectively',
      'Implement cluster deployment best practices',
      'Process real-time data with Apache Spark'
    ],
    requirements:[
      'Basic programming concepts preferably Java',
      'Familiarity with data structures and algorithms',
      'Basic SQL and database knowledge'
    ],
    whoIsFor:[
      'Beginners in big data analytics',
      'Data analysts seeking enhancement',
      'IT professionals pivoting to data engineering',
      'Business analysts handling large datasets',
      'Anyone interested in Hadoop expertise'
    ],
    curriculum:[
      { module: 'Introduction to Big Data', lessons: [
        'What is Big data',
        'Big Data opportunities',
        'Characteristics of Big data'
      ] },
      { module: 'HDFS', lessons: [
        'HDFS Design',
        'Name nodes and Data nodes',
        'File Read/Write Anatomy'
      ] },
      { module: 'MapReduce', lessons: [
        'Map Reduce Basics',
        'Job Run Anatomy',
        'Shuffling and Sorting'
      ] },
      { module: 'Hive', lessons: [
        'Installation and Architecture',
        'Table Operations',
        'User Defined Functions'
      ] },
      { module: 'Pig', lessons: [
        'Installation',
        'Pig Latin',
        'Data Processing'
      ] },
      { module: 'Sqoop', lessons: [
        'Import Data',
        'Incremental Import',
        'Export data'
      ] },
      { module: 'Spark', lessons: [
        'RDDs',
        'Transformations',
        'Actions'
      ] }
    ],
    skills:[
      'HDFS management',
      'MapReduce programming',
      'Hive and Pig scripting',
      'Apache Spark',
      'Data ingestion and ETL',
      'Hadoop cluster deployment'
    ],
  },
  {
    id:38, title:'UI Full Stack Web Development with React', slug:'ui-full-stack-web-development-with-react-online-training', visible: true, category:'Full Stack', rating:4.5, reviews:0, image:'https://images.nareshit.com/web.jpg',
    enriched:true,
    description:'Comprehensive full-stack web development training covering frontend (HTML, CSS, JavaScript, React) and backend (Node.js, MongoDB, MySQL) technologies with real-world projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚛️', label: 'React Full Stack' },
      { icon: '🖥️', label: 'Node.js Backend' },
      { icon: '🗄️', label: 'MongoDB & MySQL' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🐳', label: 'Docker Deployment' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build responsive user interfaces with React',
      'Develop server-side applications using Node.js',
      'Integrate databases (MongoDB/SQL)',
      'Create RESTful APIs',
      'Deploy web applications',
      'Implement security best practices'
    ],
    requirements:[
      'Basic HTML and CSS understanding',
      'JavaScript programming familiarity',
      'Version control systems knowledge',
      'RESTful API awareness'
    ],
    whoIsFor:[
      'Aspiring web developers',
      'Software engineers',
      'Computer science students',
      'Entrepreneurs',
      'IT professionals',
      'Career switchers'
    ],
    curriculum:[
      { module: 'HTML & CSS', lessons: [
        'Document structure',
        'Forms',
        'Semantic elements',
        'Flexbox',
        'Grid',
        'Responsive design',
        'SASS'
      ] },
      { module: 'Bootstrap', lessons: [
        'Grid system',
        'Components',
        'Typography'
      ] },
      { module: 'JavaScript', lessons: [
        'Variables',
        'DOM manipulation',
        'Async operations',
        'ES6 features',
        'Classes'
      ] },
      { module: 'React', lessons: [
        'Components',
        'Hooks',
        'State management',
        'Routing',
        'Redux'
      ] },
      { module: 'Backend', lessons: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Authentication',
        'Microservices',
        'Docker'
      ] },
      { module: 'MySQL', lessons: [
        'CRUD operations',
        'Joins',
        'Aggregate functions'
      ] }
    ],
    skills:[
      'React',
      'Node.js',
      'MongoDB',
      'MySQL',
      'Express.js',
      'RESTful APIs',
      'Git',
      'Docker',
      'Full-stack development',
      'Web security'
    ],
  },
  {
    id:39, title:'Full Stack Data Science & AI', slug:'full-stack-data-science-ai-online-training', visible: true, category:'Full Stack', rating:5, reviews:0, image:'https://images.nareshit.com/Data_Sci_(1).jpg',
    enriched:true,
    description:'Comprehensive online program covering data science fundamentals, machine learning, deep learning, and AI applications with hands-on projects and real-world datasets.',
    trainer:'Mr. Omkar', trainerBio:'Faculty member specializing in Full Stack Data Science & AI instruction at NareshIT.', trainerExp:'', trainerStudents:'',
    duration:'4 months', level:'Intermediate', mode:'Online / Offline', startDate:'June 1, 2026',
    highlights:[
      { icon: '📊', label: 'Data Science to AI' },
      { icon: '🧠', label: 'Deep Learning & NLP' },
      { icon: '👁️', label: 'Computer Vision' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⏱️', label: 'Time Series Forecasting' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Data preprocessing and exploratory analysis',
      'Machine learning algorithms and model evaluation',
      'Deep learning architectures and neural networks',
      'Natural language processing and computer vision',
      'Time series forecasting and deployment',
      'Ethical AI and responsible data practices'
    ],
    requirements:[
      'Basic Python programming',
      'Statistics and mathematics fundamentals',
      'Data manipulation with NumPy and Pandas'
    ],
    whoIsFor:[
      'Data Scientists',
      'AI Engineers',
      'Software Developers',
      'Business Analysts',
      'Graduates in computer science',
      'Entrepreneurs'
    ],
    curriculum:[
      { module: 'Python', lessons: [
        'Data types',
        'Functions',
        'OOPs',
        'Pandas',
        'NumPy',
        'Matplotlib'
      ] },
      { module: 'Mathematics', lessons: [
        'Set theory',
        'Probability',
        'Distributions',
        'Linear algebra',
        'Calculus'
      ] },
      { module: 'Statistics', lessons: [
        'Descriptive analysis',
        'Hypothesis testing',
        'Correlation',
        'Regression'
      ] },
      { module: 'SQL', lessons: [
        'Database operations',
        'Joins',
        'Aggregate functions'
      ] },
      { module: 'EDA & ML', lessons: [
        'Univariate analysis',
        'Supervised/unsupervised learning',
        'Feature engineering'
      ] },
      { module: 'Deep Learning', lessons: [
        'Neural networks',
        'CNN',
        'RNN',
        'LSTM',
        'Transfer learning'
      ] },
      { module: 'NLP', lessons: [
        'Text processing',
        'Sentiment analysis',
        'Named entity recognition'
      ] },
      { module: 'Computer Vision', lessons: [
        'Image processing',
        'Object detection',
        'YOLO'
      ] }
    ],
    skills:[
      'Machine learning',
      'Deep learning',
      'Natural language processing',
      'Computer vision',
      'Data visualization',
      'Model deployment'
    ],
  },
  {
    id:40, title:'Full Stack .NET Core', slug:'full-stack-dot-net-core-online-training', visible: true, category:'Full Stack', rating:4.5, reviews:0, image:'https://images.nareshit.com/dot net.jpg',
    enriched:true,
    description:'Comprehensive full-stack training covering frontend (HTML, CSS, JavaScript) and backend (.NET, C#, ASP.NET) development with hands-on projects and real-world applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🖥️', label: '.NET Core Full Stack' },
      { icon: '🔷', label: 'C# & ASP.NET' },
      { icon: '🌐', label: 'Web API Development' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'SQL Server Integration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build end-to-end web applications',
      'Master C# and ASP.NET',
      'Database integration with SQL Server',
      'Version control and Git workflows',
      'Deploy applications to web servers',
      'Implement security best practices'
    ],
    requirements:[
      'Basic programming concepts',
      'Familiarity with C#',
      'Object-oriented programming principles',
      'HTML and CSS knowledge',
      'SQL basics'
    ],
    whoIsFor:[
      'Software developers',
      'Web developers',
      'Computer science graduates',
      'Career switchers',
      'IT professionals'
    ],
    curriculum:[
      { module: 'C# 10.0', lessons: [
        '.NET Introduction',
        'CLR',
        'Data Types',
        'Variables & Fields',
        'Conditional Statements',
        'Arrays',
        'Encapsulation',
        'Inheritance',
        'Polymorphism'
      ] },
      { module: 'ASP.NET', lessons: [
        'Introduction to Web Applications',
        'ASP.NET Technology',
        'Controllers',
        'URL Routing'
      ] },
      { module: 'ASP.NET MVC 5.0', lessons: [
        'Project Creation',
        'Views',
        'Data Binding',
        'Filters'
      ] },
      { module: 'ASP.NET 6.0', lessons: [
        '.NET CORE',
        'Entity Framework',
        'Web API Core'
      ] }
    ],
    skills:[
      'C# programming',
      'ASP.NET development',
      'Full-stack web development',
      'Database management',
      'API development',
      'MVC architecture'
    ],
  },
  {
    id:41, title:'Spring Boot and Microservices', slug:'spring-boot-microservices-online-training', visible: false, category:'Frameworks', rating:5, reviews:0, image:'https://images.nareshit.com/spring-boot-micro-services-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive training on building scalable, production-grade microservices using Spring Boot framework with hands-on exercises and real-world scenarios.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏗️', label: 'Microservices Architecture' },
      { icon: '☁️', label: 'Cloud Deployment' },
      { icon: '📨', label: 'Kafka & RabbitMQ' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔐', label: 'Spring Security' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build microservices with Spring Boot',
      'Implement service discovery and inter-service communication',
      'Containerize with Docker and orchestrate with Kubernetes',
      'Apply security best practices',
      'Monitor and log microservices',
      'Deploy to cloud platforms'
    ],
    requirements:[
      'Java programming',
      'Object-oriented programming concepts',
      'RESTful API principles',
      'Database and SQL knowledge',
      'Maven or Gradle familiarity'
    ],
    whoIsFor:[
      'Java developers',
      'System architects',
      'DevOps engineers',
      'Web developers',
      'Software engineers'
    ],
    curriculum:[
      { module: 'Introduction to Spring Boot', lessons: [
        'Microservices architecture',
        'SOA',
        'Monolith vs microservices'
      ] },
      { module: 'Building Spring Boot Applications', lessons: [
        'Maven',
        'Spring Initializer',
        'Auto-configuration'
      ] },
      { module: 'REST APIs with Databases', lessons: [
        'H2',
        'MySQL',
        'PostgreSQL',
        'JPA Repository'
      ] },
      { module: 'Spring Boot Security', lessons: [
        'Authentication',
        'Authorization',
        'LDAP',
        'SSL/TLS'
      ] },
      { module: 'MicroServices Architecture', lessons: [
        'Design patterns',
        'Communication',
        'Challenges'
      ] },
      { module: 'Spring Cloud', lessons: [
        'Eureka',
        'Feign Client',
        'Ribbon'
      ] },
      { module: 'API Gateway', lessons: [
        'ZUUL integration'
      ] },
      { module: 'Messaging Queues', lessons: [
        'Apache Kafka',
        'RabbitMQ',
        'JMS'
      ] },
      { module: 'Cloud Hosting', lessons: [
        'AWS',
        'Pivotal Cloud Foundry'
      ] }
    ],
    skills:[
      'Spring Boot',
      'Microservices architecture',
      'Docker',
      'Kubernetes',
      'Spring Cloud',
      'API design',
      'Cloud deployment',
      'Security implementation'
    ],
  },
  {
    id:42, title:'Django with Rest API', slug:'django-online-training', visible: false, category:'Frameworks', rating:5, reviews:0, image:'https://images.nareshit.com/django-with-rest-api-online-training.jpg',
    enriched:true,
    description:'Comprehensive Django online training covering web development fundamentals, MVC architecture, ORM, and RESTful API development using Django REST Framework with hands-on projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🐍', label: 'Django REST Framework' },
      { icon: '🗄️', label: 'ORM & Database Integration' },
      { icon: '🔐', label: 'Authentication & Permissions' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🌐', label: 'API Development' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Django MVC architecture and project structure',
      'RESTful API design and Django REST Framework',
      'Database integration using ORM',
      'User authentication and permissions',
      'API testing and deployment'
    ],
    requirements:[
      'Python programming basics',
      'HTML, CSS, web fundamentals',
      'Object-oriented programming concepts',
      'Relational databases and SQL'
    ],
    whoIsFor:[
      'Web developers',
      'Python developers',
      'Full Stack developers',
      'Students pursuing CS degrees',
      'Application developers',
      'Entrepreneurs'
    ],
    curriculum:[
      { module: 'Introduction to Django', lessons: [
        'Overview',
        'Installation',
        'Project structure',
        'Creating apps'
      ] },
      { module: 'Django Installation & First Web Application', lessons: [
        'ATOM IDE',
        'Development server',
        'HTTP request flow'
      ] },
      { module: 'Models and Databases', lessons: [
        'Relationships',
        'Migrations',
        'ORM queries'
      ] },
      { module: 'Django REST Framework', lessons: [
        'Serializers',
        'Viewsets',
        'Authentication'
      ] },
      { module: 'Deployment and Production', lessons: [
        'Configuration',
        'Server setup',
        'Scaling'
      ] }
    ],
    skills:[
      'Django framework',
      'RESTful API development',
      'Database design',
      'Authentication systems',
      'API documentation',
      'Django deployment'
    ],
  },
  {
    id:43, title:'Power Apps', slug:'power-apps-online-training', visible: false, category:'Automations', rating:5, reviews:0, image:'https://images.nareshit.com/power-apps-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Power Apps training covering low-code development for building custom business applications without extensive coding.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚡', label: 'Low-Code Development' },
      { icon: '🔗', label: 'Power Automate Integration' },
      { icon: '📊', label: 'Microsoft 365 Connected' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'Dataverse Management' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Design user interfaces for custom applications',
      'Connect Power Apps to various data sources',
      'Create canvas and model-driven apps',
      'Automate workflows using Power Automate',
      'Integrate with Microsoft 365 services',
      'Implement security and compliance measures'
    ],
    requirements:[
      'Basic understanding of business processes',
      'Familiarity with Microsoft Office applications',
      'Knowledge of data management concepts',
      'Understanding of UI design principles'
    ],
    whoIsFor:[
      'Business Analysts',
      'Citizen Developers',
      'IT Professionals',
      'App Developers',
      'Project Managers',
      'Students'
    ],
    curriculum:[
      { module: 'Power Apps Overview', lessons: [
        'Power Apps Overview',
        'Types of Power Apps',
        'Power Apps building blocks'
      ] },
      { module: 'Canvas Apps', lessons: [
        'Canvas App Overview',
        'Canvas App Studio Overview'
      ] },
      { module: 'Data Connections', lessons: [
        'Power Apps Connectors',
        'SharePoint integration'
      ] },
      { module: 'Advanced Features', lessons: [
        'Variables',
        'Collections',
        'Components'
      ] },
      { module: 'Model-Driven Apps', lessons: [
        'Dataverse tables',
        'Forms and views',
        'Dashboards'
      ] }
    ],
    skills:[
      'Low-code application development',
      'Data source integration',
      'UI/UX design',
      'Workflow automation',
      'Power Automate integration',
      'Dataverse management'
    ],
  },
  {
    id:44, title:'Power BI', slug:'power-bi-online-training', visible: false, category:'Analytics', rating:5, reviews:0, image:'https://images.nareshit.com/power-bi-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive training in Microsoft Power BI for data visualization and business intelligence, covering desktop tools, data modeling, DAX functions, and cloud-based reporting services.',
    trainer:'Miss. Mohana', trainerBio:'Industry professional offering real-world insights in Power BI and data analytics.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner to Intermediate', mode:'Online', startDate:'Jun 1, 2026',
    highlights:[
      { icon: '📊', label: 'Interactive Dashboards' },
      { icon: '🔢', label: 'DAX Programming' },
      { icon: '☁️', label: 'Power BI Service' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Row-Level Security' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Create interactive dashboards and reports',
      'Master data transformation and modeling',
      'Develop DAX calculations for advanced analytics',
      'Connect to multiple data sources',
      'Share and collaborate using Power BI Service',
      'Implement security and compliance measures'
    ],
    requirements:[
      'Basic data analysis concepts',
      'Microsoft Excel proficiency',
      'SQL knowledge',
      'Data visualization principles'
    ],
    whoIsFor:[
      'Business Analysts',
      'Data Analysts',
      'IT Professionals',
      'Report Developers',
      'Data Scientists',
      'Project Managers',
      'Students'
    ],
    curriculum:[
      { module: 'SQL (Structured Query Language)', lessons: [
        'Database fundamentals',
        'SQL commands',
        'Joins and subqueries',
        'Window functions'
      ] },
      { module: 'Introduction to Power BI', lessons: [
        'Power BI Desktop',
        'Power Query',
        'Data modeling'
      ] },
      { module: 'Power Query Editor', lessons: [
        'Data transformation',
        'Query optimization'
      ] },
      { module: 'Data Modeling', lessons: [
        'Relationships and cardinalities',
        'Schema design'
      ] },
      { module: 'Power Pivot/Data View', lessons: [
        'DAX functions and expressions'
      ] },
      { module: 'Power View/Report View', lessons: [
        'Visualizations',
        'Filtering and drill reports'
      ] },
      { module: 'Power BI Service', lessons: [
        'Cloud publishing',
        'Row-level security',
        'Deployment pipelines'
      ] }
    ],
    skills:[
      'Power BI Desktop',
      'Data Visualization',
      'DAX Programming',
      'Data Modeling',
      'Power Query',
      'Business Intelligence'
    ],
  },
  {
    id:45, title:'Blue Prism', slug:'blue-prism-online-training', visible: false, category:'Automations', rating:4, reviews:0, image:'https://images.nareshit.com/blue-prism-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive RPA training covering Blue Prism architecture, bot creation, process automation, and integration with external systems for business workflow optimization.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'RPA Bot Development' },
      { icon: '🔄', label: 'Process Automation' },
      { icon: '🗂️', label: 'Work Queue Management' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚠️', label: 'Exception Handling' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand RPA and Blue Prism fundamentals',
      'Master bot creation using process flows and actions',
      'Learn data management and manipulation techniques',
      'Implement error handling and exception management',
      'Integrate Blue Prism with external systems',
      'Deploy and manage Blue Prism bots in production'
    ],
    requirements:[
      'Basic business process understanding',
      'Microsoft Windows familiarity',
      'Basic programming concepts (variables, loops)',
      'Data handling knowledge',
      'RPA concepts awareness'
    ],
    whoIsFor:[
      'RPA Developers',
      'Business Analysts',
      'IT Professionals',
      'Automation Testers',
      'Process Owners',
      'Project Managers'
    ],
    curriculum:[
      { module: 'Process Studio', lessons: [
        'Running a Process',
        'Basic Skills',
        'Process Validation',
        'Decision Stage',
        'Calculation Stage'
      ] },
      { module: 'Process Flow', lessons: [
        'Circular Path',
        'Controlling Play',
        'Set Next Stage',
        'Break Points'
      ] },
      { module: 'Business Objects', lessons: [
        'Object Studio',
        'Business Objects',
        'Action Stage',
        'Inputs and Outputs'
      ] },
      { module: 'Error Management', lessons: [
        'Exception Handling',
        'Recover and Resume',
        'Throwing Exceptions'
      ] },
      { module: 'Case Management', lessons: [
        'Work Queues',
        'Queue items',
        'Work queue configuration'
      ] },
      { module: 'Advanced Features', lessons: [
        'Undefined collections',
        'Data item initialization',
        'Code stage',
        'Dynamic Attributes'
      ] }
    ],
    skills:[
      'Robotic Process Automation',
      'Blue Prism Platform',
      'Bot Development',
      'Process Automation',
      'Exception Handling',
      'System Integration',
      'Business Process Optimization'
    ],
  },
  {
    id:46, title:'Automation Anywhere', slug:'automation-anywhere-online-training', visible: false, category:'Automations', rating:4.5, reviews:0, image:'https://images.nareshit.com/automation-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive RPA platform training covering bot creation, deployment, and management using Automation Anywhere tools for automating business processes.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'Automation Anywhere RPA' },
      { icon: '🔄', label: 'Bot Creation & Deployment' },
      { icon: '🔍', label: 'OCR & Image Recognition' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚙️', label: 'Control Room Management' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Bot creation and design',
      'Task automation and workflow optimization',
      'Data extraction and manipulation',
      'Integration with external systems',
      'Error handling and exception management',
      'Security and compliance in RPA'
    ],
    requirements:[
      'Basic computer operations',
      'Familiarity with programming concepts',
      'Operating system fundamentals',
      'Data handling knowledge'
    ],
    whoIsFor:[
      'RPA Developers',
      'Business Analysts',
      'IT Professionals',
      'Automation Testers',
      'Process Owners',
      'Project Managers'
    ],
    curriculum:[
      { module: 'Introduction to RPA and Automation Anywhere', lessons: [
        'Overview of RPA',
        'Automation Anywhere Architecture',
        'Control Room View'
      ] },
      { module: 'Task Editor', lessons: [
        'Features of Task Editor',
        'Different sections in Task Editor'
      ] },
      { module: 'Automation Anywhere Commands', lessons: [
        'Keystrokes/Mouse',
        'Programs/Files/Windows',
        'Conditions/Loops'
      ] },
      { module: 'Internet', lessons: [
        'Web Recorder',
        'Launch Website',
        'Send Email',
        'REST Web Service'
      ] },
      { module: 'Applications', lessons: [
        'Read from CSV/Text',
        'Excel',
        'Database',
        'XML'
      ] },
      { module: 'Advanced', lessons: [
        'Error Handling',
        'Image Recognition',
        'Screen Capture'
      ] },
      { module: 'Integration', lessons: [
        'App Integration',
        'OCR',
        'Email Automation',
        'PDF Integration'
      ] },
      { module: 'Control Room', lessons: [
        'Upload/Deploy Project',
        'Add AA Clients',
        'Operations Room'
      ] }
    ],
    skills:[
      'Bot development',
      'Process automation',
      'Data extraction',
      'Web automation',
      'Error handling',
      'Integration management'
    ],
  },
  {
    id:47, title:'Adv Spoken English', slug:'adv-spoken-english-online-training', visible: false, category:'Soft Skills', rating:5, reviews:0, image:'https://images.nareshit.com/advanced-spoken-english-online-training-nareshit.jpg',
    enriched:true,
    description:'Advanced Spoken English course elevating oral communication skills through sophisticated vocabulary, nuanced language structures, and specialized contexts for professional and academic environments.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🗣️', label: 'Advanced Vocabulary Mastery' },
      { icon: '💼', label: 'Professional Communication' },
      { icon: '🎤', label: 'Presentation Skills' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧠', label: 'Critical Listening' },
      { icon: '🌐', label: 'Cultural Fluency' }
    ],
    whatYouLearn:[
      'Advanced vocabulary mastery',
      'Precision in expressing complex ideas',
      'Nuanced grammatical structures',
      'Professional communication skills',
      'Academic communication preparation',
      'Cultural fluency awareness',
      'Critical listening comprehension',
      'Debating and persuasion techniques'
    ],
    requirements:[
      'Basic spoken and written English proficiency',
      'Familiarity with conversational topics',
      'Knowledge of basic grammar and sentence structure',
      'Understanding of cultural communication nuances'
    ],
    whoIsFor:[
      'Professionals in leadership roles',
      'Academic and research professionals',
      'Public speakers and presenters',
      'Advanced English learners',
      'Corporate professionals'
    ],
    curriculum:[],
    skills:[
      'Advanced vocabulary usage',
      'Complex idea articulation',
      'Professional communication',
      'Academic discourse',
      'Cultural fluency',
      'Persuasive communication',
      'Active listening',
      'Presentation skills'
    ],
  },
  {
    id:48, title:'Spoken English', slug:'spoken-english-online-training', visible: false, category:'Soft Skills', rating:5, reviews:0, image:'https://images.nareshit.com/spoken-english-online-training-nareshit.jpg',
    enriched:true,
    description:'Develop effective oral communication skills in English through pronunciation drills, vocabulary building, and conversational practice with interactive activities and real-life scenarios.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🗣️', label: 'Pronunciation Improvement' },
      { icon: '📖', label: 'Vocabulary Enhancement' },
      { icon: '💬', label: 'Conversational Fluency' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🎯', label: 'Grammar Mastery' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Pronunciation improvement',
      'Vocabulary enhancement',
      'Fluency development',
      'Grammar and syntax mastery',
      'Conversational skills for social and professional situations',
      'Listening comprehension and idiomatic expressions'
    ],
    requirements:[
      'Basic spoken and written English proficiency',
      'Familiarity with common conversational topics',
      'Knowledge of basic grammar and sentence structure',
      'Understanding of cultural nuances in communication'
    ],
    whoIsFor:[
      'Non-native English speakers',
      'Students and graduates',
      'Working professionals',
      'Job seekers',
      'Business executives',
      'Tourism and hospitality professionals'
    ],
    curriculum:[],
    skills:[
      'Pronunciation clarity',
      'Vocabulary expansion',
      'Speaking fluency',
      'Grammar application',
      'Accent neutralization',
      'Listening comprehension',
      'Conversational communication'
    ],
  },
  {
    id:49, title:'Mongo DB', slug:'mongo-db-online-training', visible: false, category:'Data Base', rating:4.5, reviews:0, image:'https://images.nareshit.com/mongo-db-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive NoSQL database course covering MongoDB fundamentals, CRUD operations, indexing, aggregation, replication, sharding, and administration with hands-on projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🍃', label: 'MongoDB NoSQL Database' },
      { icon: '🔍', label: 'Aggregation Framework' },
      { icon: '📈', label: 'Replication & Sharding' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Security & Access Control' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Document-oriented data modeling',
      'CRUD operations and querying',
      'Indexing strategies for performance',
      'Aggregation framework for data analysis',
      'Replication and sharding for scalability',
      'MongoDB administration and security'
    ],
    requirements:[
      'Basic database and data management concepts',
      'Familiarity with JSON format',
      'Command line interface knowledge',
      'Understanding of CRUD operations',
      'NoSQL database principles awareness'
    ],
    whoIsFor:[
      'Database Administrators',
      'Application Developers',
      'System Administrators',
      'Web Developers',
      'Data Engineers',
      'IT Managers'
    ],
    curriculum:[
      { module: 'Getting Started with MongoDB', lessons: [
        'Installation',
        'Basic commands',
        'Hello World'
      ] },
      { module: 'CRUD Operation', lessons: [
        'Create',
        'Read',
        'Update',
        'Delete'
      ] },
      { module: 'Querying for Data', lessons: [
        'Find()',
        'FindOne()',
        'Projection',
        'AND/OR/IN conditions'
      ] },
      { module: 'Aggregation', lessons: [
        'Count',
        'Sum',
        'Average',
        'Match',
        'Left Outer Join'
      ] },
      { module: 'Indexes', lessons: [
        'Creation',
        'Compound',
        'Unique',
        'Sparse indexes'
      ] },
      { module: 'Replication', lessons: [
        'Basic configuration with three nodes'
      ] },
      { module: 'Authentication and Authorization', lessons: [
        'Authentication mechanisms',
        'Built-in roles'
      ] },
      { module: 'Backup and Restore', lessons: [
        'mongodump',
        'mongorestore',
        'mongoimport'
      ] }
    ],
    skills:[
      'MongoDB querying',
      'Data modeling',
      'Index optimization',
      'Aggregation framework',
      'Database administration',
      'Replication and sharding',
      'Security configuration',
      'Backup/restore operations'
    ],
  },
  {
    id:50, title:'MySQL', slug:'mysql-online-training', visible: false, category:'Data Base', rating:5, reviews:0, image:'https://images.nareshit.com/sql-server-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive MySQL course covering database design, SQL programming, administration, and optimization for web applications and software projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🗄️', label: 'MySQL Database Mastery' },
      { icon: '🔍', label: 'Advanced SQL Queries' },
      { icon: '⚡', label: 'Performance Tuning' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Security & Administration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Database design principles',
      'SQL fundamentals and advanced queries',
      'MySQL installation and configuration',
      'Database administration tasks',
      'Security and performance optimization',
      'Backup and recovery strategies'
    ],
    requirements:[
      'Basic database and data management knowledge',
      'SQL syntax familiarity',
      'Relational database principles understanding',
      'CRUD operations awareness'
    ],
    whoIsFor:[
      'Database Administrators',
      'Software Developers',
      'System Administrators',
      'Web Developers',
      'IT Managers',
      'Computer Science Students'
    ],
    curriculum:[
      { module: 'Introduction to Databases & MySQL', lessons: [
        'Database Fundamentals',
        'Getting Started with MySQL'
      ] },
      { module: 'Basic SQL Queries', lessons: [
        'DDL Operations',
        'DML Operations',
        'Filtering and Sorting'
      ] },
      { module: 'Working with Multiple Tables', lessons: [
        'Keys and Constraints',
        'Joins in MySQL'
      ] },
      { module: 'SQL Functions and Expressions', lessons: [
        'Aggregate Functions',
        'Grouping Data',
        'String and Date Functions'
      ] },
      { module: 'Subqueries and Set Operations', lessons: [
        'Subqueries',
        'Set Operators'
      ] },
      { module: 'Data Modeling and Normalization', lessons: [
        'Normalization',
        'ER Modeling'
      ] },
      { module: 'Advanced SQL & Performance Tuning', lessons: [
        'Views, Indexes, Stored Routines',
        'Transactions and Locking'
      ] },
      { module: 'Database Administration', lessons: [
        'User Management and Security',
        'MySQL Configuration and Optimization'
      ] }
    ],
    skills:[
      'SQL query writing',
      'Database design',
      'MySQL administration',
      'Performance tuning',
      'Data security',
      'Backup and recovery'
    ],
  },
  {
    id:51, title:'SQL Server', slug:'sql-server-online-training', visible: false, category:'Data Base', rating:5, reviews:0, image:'https://images.nareshit.com/sql-server-online-training-nareshit.jpg',
    enriched:true,
    description:'Master SQL Server database management with comprehensive training covering design, queries, optimization, and security through hands-on exercises.',
    trainer:'Mr. Shiva Chaitanya', trainerBio:'Experienced SQL Server instructor at Naresh IT providing industry-focused training.', trainerExp:'', trainerStudents:'',
    duration:'40 days', level:'Beginner', mode:'Online / Offline', startDate:'June 1, 2026',
    highlights:[
      { icon: '🗄️', label: 'SQL Server Complete Training' },
      { icon: '🔢', label: 'T-SQL Programming' },
      { icon: '📈', label: 'Performance Optimization' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Security & Administration' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Write efficient SQL queries',
      'Design and implement relational databases',
      'Master data retrieval and reporting',
      'Understand database administration best practices',
      'Develop performance optimization skills',
      'Learn security and user management'
    ],
    requirements:[
      'Basic programming knowledge',
      'Data structures and algorithms familiarity',
      'Basic computer operations understanding'
    ],
    whoIsFor:[
      'Career changers from non-IT backgrounds',
      'IT professionals upgrading skills',
      'Data analysts',
      'Software developers',
      'Database management aspirants'
    ],
    curriculum:[
      { module: 'Introduction to DBMS', lessons: [
        'File Management System',
        'Database Management System',
        'Conceptual Data Models'
      ] },
      { module: 'Introduction to TSQL', lessons: [
        'TSQL history',
        'TSQL commands',
        'Data types'
      ] },
      { module: 'Data Definition Language', lessons: [
        'Create',
        'Alter',
        'Drop',
        'Truncate'
      ] },
      { module: 'Data Manipulation Language', lessons: [
        'Insert',
        'Update',
        'Delete',
        'MERGE'
      ] },
      { module: 'Built-in Functions', lessons: [
        'Numeric',
        'Character',
        'Date',
        'Aggregate',
        'Ranking'
      ] },
      { module: 'Joins', lessons: [
        'Inner Join',
        'Outer Join',
        'Self Join',
        'Cross Join'
      ] },
      { module: 'Sub Queries', lessons: [
        'Single Row',
        'Multi Row',
        'CTEs'
      ] },
      { module: 'Security', lessons: [
        'Authentication',
        'Login creation',
        'Permissions'
      ] },
      { module: 'Stored Programs', lessons: [
        'Stored Procedures',
        'User Defined Functions'
      ] },
      { module: 'Triggers', lessons: [
        'Purpose',
        'Magic Tables'
      ] },
      { module: 'Advanced Concepts', lessons: [
        'Temporary Tables',
        'Normalization',
        'Backup and Restore'
      ] }
    ],
    skills:[
      'SQL query writing',
      'Database design',
      'TSQL programming',
      'Transaction management',
      'Index optimization',
      'Trigger creation'
    ],
  },
  {
    id:52, title:'Tosca', slug:'tosca-online-training', visible: false, category:'Software Testing', rating:5, reviews:0, image:'https://images.nareshit.com/tosca-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive continuous testing platform training covering Tricentis Tosca for end-to-end test automation, including test case design, data management, and execution capabilities.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🧪', label: 'Model-based Testing' },
      { icon: '🔗', label: 'Jenkins CI/CD Integration' },
      { icon: '🌐', label: 'API Testing in Tosca' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔁', label: 'Cross-browser Testing' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Model-based test automation',
      'Risk-based testing implementation',
      'Test case design in Tosca',
      'Test data management',
      'API and mobile testing',
      'Cross-browser testing',
      'Jenkins integration'
    ],
    requirements:[
      'Basic software testing concepts',
      'Test automation principles familiarity',
      'Basic programming knowledge',
      'Agile development understanding'
    ],
    whoIsFor:[
      'QA Engineers',
      'Test Automation Engineers',
      'Test Managers',
      'Business Analysts',
      'DevOps Professionals',
      'Software Developers',
      'Students'
    ],
    curriculum:[
      { module: 'Introduction to Automation', lessons: [
        'What is automation',
        'When and Why automation',
        'Advantages and Disadvantages'
      ] },
      { module: 'Installation/Setup', lessons: [
        'System Requirements',
        'Process to Download Tosca',
        'Process to Install Tosca'
      ] },
      { module: 'Tosca Commander', lessons: [
        'Requirement Section',
        'Test case Design Section',
        'Modules section'
      ] },
      { module: 'Test Cases Creation', lessons: [
        'Create Test Cases',
        'Cross Browser Testing',
        'Parallel Execution'
      ] },
      { module: 'API Testing in Tosca', lessons: [
        'What is Web service',
        'API Scan',
        'Create API Test case'
      ] }
    ],
    skills:[
      'Test automation',
      'Model-based testing',
      'Risk-based testing',
      'API testing',
      'Data-driven frameworks',
      'Manual test recording',
      'Jenkins integration'
    ],
  },
  {
    id:53, title:'Selenium', slug:'selenium-online-training', visible: false, category:'Software Testing', rating:4.8, reviews:0, image:'https://images.nareshit.com/software-testing-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Selenium online training covering automated web testing fundamentals, WebDriver, locators, and cross-browser testing with hands-on projects and real-world scenarios.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'Selenium WebDriver' },
      { icon: '🌐', label: 'Cross-browser Testing' },
      { icon: '🧪', label: 'TestNG Framework' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔗', label: 'CI/CD with Jenkins' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Browser automation with Selenium WebDriver',
      'Web element locating and interaction techniques',
      'Handling dynamic content and asynchronous operations',
      'Cross-browser testing implementation',
      'Page Object Model design patterns',
      'Test framework integration with TestNG'
    ],
    requirements:[
      'Basic software testing concepts',
      'Familiarity with at least one programming language like Java or Python',
      'Knowledge of HTML and CSS',
      'Web browser developer tools understanding'
    ],
    whoIsFor:[
      'QA engineers',
      'Software testers',
      'Developers',
      'Automation test engineers',
      'DevOps professionals',
      'Computer science students'
    ],
    curriculum:[
      { module: 'Manual Testing', lessons: [
        'Introduction to testing',
        'SDLC models',
        'Test scenarios and cases',
        'Bug life cycle',
        'JIRA integration'
      ] },
      { module: 'Core Java', lessons: [
        'OOP concepts',
        'Inheritance',
        'Interfaces',
        'Exception handling',
        'Collections framework'
      ] },
      { module: 'Selenium', lessons: [
        'WebDriver basics',
        'Locators',
        'Actions',
        'Alerts',
        'Frames',
        'Synchronization',
        'JavaScript Executor'
      ] },
      { module: 'TestNG', lessons: [
        'Annotations',
        'Data providers',
        'Parallel execution',
        'Cross-browser testing'
      ] },
      { module: 'Tools', lessons: [
        'Maven',
        'GitHub',
        'Jenkins',
        'Log4j',
        'Cucumber BDD',
        'API testing',
        'Database testing'
      ] }
    ],
    skills:[
      'Test automation',
      'Web element handling',
      'Selenium WebDriver',
      'TestNG framework',
      'CI/CD integration',
      'API and database testing'
    ],
  },
  {
    id:54, title:'Digital Marketing', slug:'digital-marketing-online-training', visible: false, category:'Digital Marketing', rating:5, reviews:0, image:'https://images.nareshit.com/digital-marketing-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive digital marketing training covering SEO, social media, content marketing, email campaigns, and analytics for online promotion success.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔍', label: 'SEO & Google Ads' },
      { icon: '📱', label: 'Social Media Marketing' },
      { icon: '📧', label: 'Email Marketing' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📊', label: 'Analytics & Reporting' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Search Engine Optimization strategies',
      'Social Media Marketing campaigns',
      'Email Marketing automation',
      'Pay-Per-Click advertising',
      'Content creation and distribution',
      'Analytics and performance measurement'
    ],
    requirements:[
      'Basic internet usage understanding',
      'Familiarity with social media platforms',
      'Knowledge of marketing fundamentals'
    ],
    whoIsFor:[
      'Marketing professionals',
      'Business owners',
      'Aspiring marketers',
      'Sales professionals',
      'Content creators',
      'Small business managers'
    ],
    curriculum:[
      { module: 'Basics of Marketing', lessons: [
        'Marketing Terms',
        'Sales Process',
        'Lead Generation'
      ] },
      { module: 'Introduction to Digital Marketing', lessons: [
        'Digital channels',
        'Marketing Funnel',
        'Conversion Strategy'
      ] },
      { module: 'Search Engine Optimization', lessons: [
        'On-Page SEO',
        'Technical SEO',
        'Off-Page SEO'
      ] },
      { module: 'Google AdWords PPC', lessons: [
        'Campaign setup',
        'Quality Score',
        'Bidding strategies'
      ] },
      { module: 'Social Media Marketing', lessons: [
        'Facebook Ads',
        'Twitter Marketing',
        'LinkedIn Ads'
      ] },
      { module: 'Email Marketing', lessons: [
        'List segmentation',
        'MailChimp platform',
        'A/B testing'
      ] }
    ],
    skills:[
      'SEO optimization',
      'Social media strategy',
      'Email campaign management',
      'PPC advertising',
      'Content marketing',
      'Web analytics'
    ],
  },
  {
    id:55, title:'Node JS', slug:'node-js-online-training', visible: false, category:'Web Development', rating:4.5, reviews:0, image:'https://images.nareshit.com/node-js-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Node.js server-side JavaScript training covering asynchronous architecture, Express.js framework, and database integration for building scalable web applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🟢', label: 'Node.js Server-side JS' },
      { icon: '🌐', label: 'Express.js Framework' },
      { icon: '🗄️', label: 'Database Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔐', label: 'JWT Authentication' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Create server-side applications using JavaScript',
      'Handle HTTP requests and asynchronous programming',
      'Build web applications with Express.js framework',
      'Manage dependencies with npm',
      'Interact with SQL and NoSQL databases',
      'Implement authentication and image uploading functionality'
    ],
    requirements:[
      'Basic JavaScript programming knowledge',
      'Familiarity with asynchronous programming concepts',
      'Understanding of RESTful API principles',
      'Command line interface experience'
    ],
    whoIsFor:[
      'Back-end developers',
      'Full Stack developers',
      'Web developers',
      'Computer science students',
      'Entrepreneurs seeking scalable applications',
      'System architects'
    ],
    curriculum:[
      { module: 'Node JS Modules', lessons: [
        'Functions',
        'Module',
        'Buffer',
        'Core modules',
        'Module exports'
      ] },
      { module: 'Setup Dev Environment', lessons: [
        'Install Node.js',
        'Working in REPL',
        'Node console'
      ] },
      { module: 'Node Packaging Manager', lessons: [
        'NPM basics',
        'Installing packages locally and globally'
      ] },
      { module: 'Creating Web Server', lessons: [
        'HTTP requests',
        'Handling requests'
      ] },
      { module: 'Express.js', lessons: [
        'Configuring routes',
        'Working with middleware'
      ] },
      { module: 'Databases CRUD Operations', lessons: [
        'MySQL',
        'MongoDB',
        'SQLServer'
      ] },
      { module: 'Authentication and Security', lessons: [
        'Tokens',
        'JWT-simple',
        'Middleware comparison'
      ] },
      { module: 'Images Uploading', lessons: [
        'Multer module',
        'Single and multiple image uploading'
      ] }
    ],
    skills:[
      'Node.js runtime',
      'Express.js framework',
      'npm package management',
      'HTTP server creation',
      'Database connectivity',
      'Middleware implementation',
      'Authentication and security'
    ],
  },
  {
    id:56, title:'PhP with My SQL', slug:'php-with-my-sql-online-training', visible: false, category:'Web Development', rating:4.5, reviews:0, image:'https://images.nareshit.com/php-my-sql-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive PHP and MySQL course covering server-side scripting and relational database management for building dynamic, data-driven web applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🐘', label: 'PHP Server-side Scripting' },
      { icon: '🗄️', label: 'MySQL Integration' },
      { icon: '🔐', label: 'Session & Security' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🌐', label: 'Dynamic Web Apps' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'PHP syntax and control structures',
      'MySQL database connectivity and SQL queries',
      'Form handling and user input processing',
      'Session management and authentication',
      'Security best practices and error handling',
      'Real-world project development'
    ],
    requirements:[
      'Basic programming concepts',
      'HTML and CSS familiarity',
      'SQL knowledge',
      'Server-side scripting understanding'
    ],
    whoIsFor:[
      'Web developers',
      'Full-stack developers',
      'Students and graduates',
      'Entrepreneurs',
      'System architects'
    ],
    curriculum:[
      { module: 'An Introduction to PHP', lessons: [
        'History',
        'Installation',
        'Configuration'
      ] },
      { module: 'Default Syntax', lessons: [
        'Tags',
        'Comments',
        'Output functions'
      ] },
      { module: 'Variables', lessons: [
        'Declarations',
        'Scope',
        'Superglobal variables'
      ] },
      { module: 'Object-Oriented Programming', lessons: [
        'Classes',
        'Inheritance',
        'Polymorphism'
      ] },
      { module: 'PHP with MySQL', lessons: [
        'Integration',
        'Data Grid',
        'Image upload/download'
      ] },
      { module: 'Error and Exception Handling', lessons: [
        'Logging',
        'Custom exceptions'
      ] },
      { module: 'Sessions', lessons: [
        'Variables',
        'Creation',
        'Auto-login'
      ] },
      { module: 'MySQL Concepts', lessons: [
        'DDL',
        'DML',
        'Stored procedures'
      ] }
    ],
    skills:[
      'PHP programming',
      'MySQL database management',
      'CRUD operations',
      'Session management',
      'Form handling',
      'Security implementation'
    ],
  },
  {
    id:57, title:'React JS', slug:'react-js-online-training', visible: false, category:'Web Development', rating:5, reviews:0, image:'https://images.nareshit.com/react-js-online-training-nareshit.jpg',
    enriched:true,
    description:'React JS is a JavaScript library for building dynamic, interactive user interfaces using a component-based approach. Learn modern UI development with practical, real-world projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚛️', label: 'React Component Architecture' },
      { icon: '🔄', label: 'State Management & Redux' },
      { icon: '🌐', label: 'React Router' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧪', label: 'Jest Testing' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'React fundamentals and JSX syntax',
      'Component architecture and state management',
      'Client-side routing with React Router',
      'API integration and data fetching',
      'Styling approaches including CSS and styled-components',
      'Testing with Jest and React Testing Library',
      'Deployment to cloud platforms'
    ],
    requirements:[
      'Basic HTML and CSS knowledge',
      'JavaScript programming familiarity',
      'ES6 features understanding',
      'Web development concepts knowledge',
      'Git version control experience'
    ],
    whoIsFor:[
      'Frontend developers',
      'Web developers seeking modern skills',
      'Computer science students',
      'UI/UX designers',
      'Entrepreneurs building web applications'
    ],
    curriculum:[
      { module: 'React Introduction', lessons: [
        'Overview of frameworks',
        'React version history',
        'Environment setup',
        'NPM commands'
      ] },
      { module: 'React Essential Features', lessons: [
        'JSX understanding',
        'Component creation',
        'Webpack and Babel overview'
      ] },
      { module: 'React Components, Props and State', lessons: [
        'Functional vs class components',
        'Props and state manipulation',
        'Event handling'
      ] },
      { module: 'React Hooks', lessons: [
        'State Hook',
        'Effect Hook',
        'Custom hooks'
      ] },
      { module: 'HTTP Requests/AJAX', lessons: [
        'Axios package',
        'GET, POST, DELETE requests',
        'Error handling'
      ] },
      { module: 'React Routing V5 and V6', lessons: [
        'Route parameters',
        'Programmatic navigation'
      ] },
      { module: 'React Forms', lessons: [
        'Form validation',
        'Input handling',
        'Error messages'
      ] },
      { module: 'React Redux', lessons: [
        'Actions, reducers, store',
        'mapStateToProps and mapDispatchToProps'
      ] }
    ],
    skills:[
      'JSX and component creation',
      'State and props management',
      'React Router',
      'API integration',
      'Component styling',
      'Unit testing',
      'Redux state management',
      'Deployment'
    ],
  },
  {
    id:58, title:'Angular', slug:'angular-online-training', visible: false, category:'Web Development', rating:5, reviews:0, image:'https://images.nareshit.com/angularjs-online-training-nareshit.jpg',
    enriched:true,
    description:'Angular is a powerful front-end framework maintained by Google for developing dynamic single-page applications (SPAs) with modularity and efficiency. Covers components, directives, services, dependency injection, routing, and forms.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🅰️', label: 'Angular SPA Development' },
      { icon: '🔷', label: 'TypeScript Integration' },
      { icon: '🔗', label: 'REST API Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧪', label: 'Unit Testing' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build dynamic single-page applications',
      'Master component-based architecture',
      'Implement two-way data binding',
      'Create reactive user interfaces',
      'Handle HTTP client operations',
      'Develop routing and navigation systems'
    ],
    requirements:[
      'HTML and CSS fundamentals',
      'TypeScript familiarity',
      'JavaScript and ES6 knowledge',
      'MVC architecture understanding',
      'Command-line interface experience'
    ],
    whoIsFor:[
      'Front-end developers',
      'Web developers',
      'Full stack developers',
      'UI/UX designers',
      'Students and graduates',
      'System architects'
    ],
    curriculum:[
      { module: 'Introduction to Web Technologies', lessons: [
        'Web fundamentals',
        'Stack requirements',
        'Modern development challenges'
      ] },
      { module: 'TypeScript Deep Dive', lessons: [
        'Basic types',
        'Interfaces',
        'Classes',
        'Generics',
        'Decorators'
      ] },
      { module: 'Introduction to Angular', lessons: [
        'Angular architecture',
        'MVC/MVW overview',
        'SPA concepts',
        'PWA introduction'
      ] },
      { module: 'Components & Templates', lessons: [
        'Data binding',
        'Directives',
        'Event handling'
      ] },
      { module: 'Angular Services', lessons: [
        'Dependency injection',
        'Custom services'
      ] },
      { module: 'Angular Forms', lessons: [
        'Template-driven forms',
        'Reactive forms',
        'Form validation'
      ] },
      { module: 'Routing & Navigation', lessons: [
        'Router configuration',
        'Route guards'
      ] },
      { module: 'HTTP Client', lessons: [
        'REST API integration'
      ] },
      { module: 'Testing', lessons: [
        'Unit testing with Karma and Jasmine'
      ] }
    ],
    skills:[
      'Angular framework',
      'TypeScript',
      'Component development',
      'Dependency injection',
      'Reactive forms',
      'REST API integration',
      'Routing',
      'Unit testing'
    ],
  },
  {
    id:59, title:'BootStrap', slug:'bootstrap-online-training', visible: false, category:'Web Development', rating:4.5, reviews:0, image:'https://images.nareshit.com/boot-strap-online-training-nareshit.jpg',
    enriched:true,
    description:'Bootstrap course teaching responsive web design fundamentals and component-based development. Learn to build modern, mobile-friendly websites using Bootstrap\'s grid system, pre-built components, and utilities.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📱', label: 'Responsive Design' },
      { icon: '🗂️', label: 'Grid System' },
      { icon: '🎨', label: 'Pre-built Components' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🎭', label: 'SASS Preprocessing' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Bootstrap grid system and responsive layouts',
      'Pre-built components and UI elements',
      'Customization of styles and components',
      'Integration with JavaScript for interactivity',
      'SASS preprocessing for CSS',
      'Accessibility best practices'
    ],
    requirements:[
      'Basic HTML and CSS knowledge',
      'Responsive web design fundamentals',
      'JavaScript basics',
      'Code editor familiarity'
    ],
    whoIsFor:[
      'Front-End Developers',
      'Web Designers',
      'UI/UX Designers',
      'Full Stack Developers',
      'Students and Beginners'
    ],
    curriculum:[
      { module: 'Introduction to Bootstrap', lessons: [
        'What is Bootstrap',
        'Features',
        'History and Evolution',
        'Comparison with Other Frameworks'
      ] },
      { module: 'Setting Up Bootstrap', lessons: [
        'Installation Methods',
        'CDN',
        'Local Setup',
        'Development Environment'
      ] },
      { module: 'Bootstrap Basics', lessons: [
        'Typography',
        'Colors',
        'Spacing Utilities',
        'Breakpoints'
      ] },
      { module: 'Layout and Structure', lessons: [
        'Grid System',
        'Flexbox Utilities',
        'Auto Margins'
      ] },
      { module: 'Bootstrap Components', lessons: [
        'Buttons',
        'Navbars',
        'Forms',
        'Cards'
      ] },
      { module: 'Advanced Components', lessons: [
        'Carousels',
        'Modals',
        'Tooltips',
        'Popovers'
      ] }
    ],
    skills:[
      'Bootstrap grid system',
      'Responsive design',
      'Component customization',
      'JavaScript integration',
      'SASS preprocessing',
      'Accessibility implementation'
    ],
  },
  {
    id:60, title:'HTML CSS Java Script', slug:'html-css-java-script-online-training', visible: false, category:'Web Development', rating:4.5, reviews:0, image:'https://images.nareshit.com/html-css-javascript-online-training-nareshit.jpg',
    enriched:true,
    description:'Foundational web development course covering HTML for content structure, CSS for styling, and JavaScript for dynamic interactivity to create responsive websites.',
    trainer:'Mr. Ram Kumar', trainerBio:'Industry professionals offering real-world insights with extensive experience in web development.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'June 1, 2026',
    highlights:[
      { icon: '🌐', label: 'HTML5 + CSS3 + JavaScript' },
      { icon: '📱', label: 'Responsive Design' },
      { icon: '🎯', label: 'DOM Manipulation' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🎨', label: 'CSS Animations' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'HTML markup fundamentals',
      'CSS styling and responsive design',
      'JavaScript programming basics',
      'DOM manipulation and event handling',
      'Form validation techniques',
      'CSS animations and transitions',
      'Cross-browser compatibility',
      'Writing clean, maintainable code'
    ],
    requirements:[
      'Basic computer operations understanding',
      'Familiarity with text/code editors',
      'Web browser usage knowledge',
      'Basic internet concepts awareness'
    ],
    whoIsFor:[
      'Beginners in web development',
      'Computer science students',
      'Aspiring front-end developers',
      'Graphic designers',
      'Entrepreneurs',
      'Marketing professionals'
    ],
    curriculum:[
      { module: 'Introduction to WEB', lessons: [
        'W3C standards',
        'WHATWG',
        'Web concepts'
      ] },
      { module: 'HTML Basics', lessons: [
        'Elements',
        'Attributes',
        'Headings',
        'Links',
        'Images',
        'Tables'
      ] },
      { module: 'HTML5 Introduction', lessons: [
        'New features',
        'Backward compatibility'
      ] },
      { module: 'HTML5 Elements', lessons: [
        'Semantic elements',
        'Canvas',
        'SVG',
        'Video',
        'Audio'
      ] },
      { module: 'CSS 1.0-3.0', lessons: [
        'Selectors',
        'Box model',
        'Backgrounds',
        'Animations',
        'Transforms'
      ] },
      { module: 'JavaScript Fundamentals', lessons: [
        'Variables',
        'Operators',
        'DOM manipulation',
        'Event handling',
        'Form validation'
      ] }
    ],
    skills:[
      'HTML5 markup',
      'CSS3 styling',
      'JavaScript programming',
      'Responsive web design',
      'DOM manipulation',
      'Event handling',
      'Form validation',
      'Web animations'
    ],
  },
  {
    id:61, title:'UI Full Stack Web with React', slug:'ui-full-stack-web-with-react-online-training', visible: false, category:'Web Development', rating:5, reviews:0, image:'https://images.nareshit.com/ui-full-stack-web-development-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive full-stack web development course covering React for frontend UI, Node.js/Express backend, and database integration with hands-on projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚛️', label: 'React + Node.js Full Stack' },
      { icon: '🗄️', label: 'MongoDB & MySQL' },
      { icon: '🔐', label: 'JWT Authentication' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'State Management' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build dynamic React components and SPAs',
      'Develop server-side applications with Node.js and Express',
      'Design responsive UIs with HTML, CSS, and modern frameworks',
      'Create RESTful APIs for frontend-backend communication',
      'Implement authentication and database integration',
      'Master state management with Redux'
    ],
    requirements:[
      'Basic HTML and CSS understanding',
      'JavaScript programming familiarity',
      'Version control systems knowledge (Git)',
      'RESTful APIs awareness'
    ],
    whoIsFor:[
      'Front-end developers',
      'Full-stack developers',
      'Web developers',
      'UI/UX designers',
      'Computer science students',
      'Entrepreneurs'
    ],
    curriculum:[
      { module: 'HTML & CSS', lessons: [
        'Document structure',
        'Forms',
        'Flexbox',
        'Grid',
        'Responsive design',
        'SASS'
      ] },
      { module: 'JavaScript', lessons: [
        'Variables',
        'DOM manipulation',
        'Async/await',
        'ES6 features',
        'Promises'
      ] },
      { module: 'React', lessons: [
        'Components',
        'State',
        'Props',
        'Hooks',
        'Routing',
        'Redux',
        'Testing'
      ] },
      { module: 'Backend', lessons: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Authentication',
        'Security'
      ] },
      { module: 'MySQL', lessons: [
        'CRUD operations',
        'SQL commands',
        'Joins'
      ] }
    ],
    skills:[
      'React',
      'Node.js',
      'Express.js',
      'JavaScript',
      'RESTful APIs',
      'Database design',
      'Responsive web design',
      'State management',
      'Authentication'
    ],
  },
  {
    id:62, title:'Data Structures & Algorithms using Java', slug:'data-structures-algorithms-using-java-online-training', visible: false, category:'Programming', rating:5, reviews:0, image:'https://images.nareshit.com/data-structures-algorithms-using-java-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive course teaching fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms using Java with real-world problem-solving exercises.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☕', label: 'Java DSA' },
      { icon: '🧠', label: 'Algorithm Design' },
      { icon: '⏱️', label: 'Complexity Analysis' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🎯', label: 'Interview Preparation' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master fundamental data structures',
      'Implement trees and graph structures',
      'Apply algorithmic techniques for searching and sorting',
      'Analyze time and space complexity',
      'Solve optimization problems using dynamic programming',
      'Develop recursive algorithms and hashing techniques'
    ],
    requirements:[
      'Basic Java programming knowledge',
      'Object-oriented programming concepts',
      'Familiarity with data types and control flow',
      'Arrays and collections (ArrayList, HashMap)'
    ],
    whoIsFor:[
      'Java developers',
      'Computer science students',
      'Competitive programmers',
      'Software engineers',
      'Interview preparation candidates',
      'System architects'
    ],
    curriculum:[
      { module: 'Time & Space Complexity', lessons: [
        'Introduction to complexity analysis',
        'Big O notation',
        'Measuring algorithm runtime'
      ] },
      { module: 'Arrays & Strings', lessons: [
        '1-D and 2-D array operations',
        'Two pointers and sliding window techniques',
        'Prefix/postfix sum approach'
      ] },
      { module: 'Recursion – Divide & Conquer', lessons: [
        'Recursion fundamentals',
        'Base conditions',
        'Types of recursion with examples'
      ] },
      { module: 'Searching & Sorting', lessons: [
        'Linear and binary search',
        'Selection, bubble, insertion, merge, and quick sort'
      ] },
      { module: 'Linked Lists', lessons: [
        'Single/double/circular linked lists',
        'Floyd\'s algorithm',
        'Linked list operations'
      ] },
      { module: 'Stacks & Queues', lessons: [
        'Stack and queue implementation',
        'Infix/postfix/prefix expressions',
        'Queue types and applications'
      ] }
    ],
    skills:[
      'Data structure implementation',
      'Algorithm design',
      'Complexity analysis',
      'Problem-solving',
      'Java programming',
      'Recursive thinking'
    ],
  },
  {
    id:63, title:'Data Structures & Algorithms using C', slug:'data-structures-algorithms-using-c-online-training', visible: false, category:'Programming', rating:5, reviews:0, image:'https://images.nareshit.com/data-structures-algorithms-using-c-online-training-nareshit.jpg',
    enriched:true,
    description:'Master fundamental data structures (arrays, linked lists, stacks, queues, trees, graphs) and algorithms using C programming with practical implementation and real-world problem-solving.',
    trainer:'C Kishore Sir, Oracle Sudhakar Sir, Ravi Shankar Singh Sir', trainerBio:'Experienced faculty members with expertise in C programming and algorithmic problem-solving.', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔤', label: 'C Language DSA' },
      { icon: '🌳', label: 'Trees & Graphs' },
      { icon: '🔄', label: 'Sorting Algorithms' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚡', label: 'Dynamic Programming' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand fundamental data structures',
      'Implement trees and graphs',
      'Master algorithmic techniques',
      'Analyze time/space complexity',
      'Apply dynamic programming',
      'Develop recursive algorithms',
      'Apply hashing techniques',
      'Implement graph traversal algorithms'
    ],
    requirements:[
      'Basic C programming knowledge',
      'Understanding of variables and loops',
      'Knowledge of arrays and pointers',
      'Familiarity with control flow statements'
    ],
    whoIsFor:[
      'Programmers strengthening foundations',
      'Computer science students',
      'Software engineers',
      'Competitive programmers',
      'System architects',
      'Interview preparation candidates'
    ],
    curriculum:[
      { module: 'Introduction to Data Structure', lessons: [
        'Algorithms',
        'Performance Analysis',
        'Asymptotic Notations'
      ] },
      { module: 'Arrays', lessons: [
        'Structures',
        'Pointers',
        'Dynamic Memory Allocation'
      ] },
      { module: 'Stacks', lessons: [
        'Stack Operations',
        'Applications'
      ] },
      { module: 'Queues', lessons: [
        'Enqueue/Dequeue',
        'Circular Queues'
      ] },
      { module: 'Linked Lists', lessons: [
        'Single',
        'Doubly',
        'Circular'
      ] },
      { module: 'Trees', lessons: [
        'Binary Trees',
        'BST',
        'AVL Trees'
      ] },
      { module: 'Graphs', lessons: [
        'BFS',
        'DFS',
        'Traversals'
      ] },
      { module: 'Sorting', lessons: [
        'Bubble',
        'Quick',
        'Merge Sort'
      ] },
      { module: 'Advanced Topics', lessons: [
        'Hashing',
        'Dynamic Programming',
        'Pattern Matching'
      ] }
    ],
    skills:[
      'Data structure implementation',
      'Algorithm analysis',
      'C programming',
      'Problem-solving',
      'Complexity evaluation',
      'Recursive thinking',
      'Graph algorithms'
    ],
  },
  {
    id:64, title:'Asp.Net MVC 5 + MVC Core 9.0', slug:'asp-net-mvc-online-training', visible: false, category:'Frameworks', rating:4.5, reviews:0, image:'https://images.nareshit.com/asp-net-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive ASP.NET Core training covering MVC architecture, routing, middleware, Entity Framework, authentication, and Web API development for building modern, scalable web applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔷', label: 'ASP.NET Core MVC' },
      { icon: '🗄️', label: 'Entity Framework' },
      { icon: '🔐', label: 'Authentication & Authorization' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🌐', label: 'Web API Development' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Build modern web applications with ASP.NET Core',
      'Master MVC design pattern implementation',
      'Develop RESTful Web APIs',
      'Implement authentication and authorization',
      'Work with Entity Framework Core',
      'Deploy applications across platforms'
    ],
    requirements:[
      'C# programming knowledge',
      '.NET framework familiarity',
      'HTML, CSS, JavaScript basics',
      'MVC architecture understanding',
      'SQL and database concepts'
    ],
    whoIsFor:[
      'Web Developers',
      'ASP.NET Professionals',
      'Full-Stack Developers',
      'Software Engineers',
      'System Architects',
      'Computer Science Students'
    ],
    curriculum:[
      { module: 'Introduction to MVC', lessons: [
        'Design Patterns',
        'MVC Architecture',
        'Request Flow'
      ] },
      { module: 'Controllers', lessons: [
        'Creating Controllers',
        'Action Methods',
        'Parameters'
      ] },
      { module: 'URL Routing', lessons: [
        'Routing overview',
        'Default parameters',
        'Literals'
      ] },
      { module: 'Views', lessons: [
        'Action Results',
        'Razor Views',
        'View Engines'
      ] },
      { module: 'Data Passing', lessons: [
        'ViewData',
        'ViewBag',
        'TempData',
        'Sessions'
      ] },
      { module: 'Validations', lessons: [
        'Data Annotations',
        'Model validation',
        'Custom Validations'
      ] },
      { module: 'Entity Framework', lessons: [
        'DB First',
        'Code First',
        'CRUD Operations'
      ] },
      { module: 'Web API', lessons: [
        'HTTP Methods',
        'API Controllers',
        'CORS'
      ] },
      { module: 'Authentication & Authorization', lessons: [
        'Types of Authentication',
        'AllowAnonymous'
      ] }
    ],
    skills:[
      'ASP.NET Core',
      'MVC Architecture',
      'Entity Framework Core',
      'Razor Views',
      'Web API Development',
      'Authentication/Authorization',
      'Dependency Injection',
      'C# Programming'
    ],
  },
  {
    id:65, title:'C#.NET', slug:'c-sharp-net-online-training', visible: false, category:'Programming', rating:5, reviews:0, image:'https://images.nareshit.com/c-net-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive C# .NET training covering fundamentals, OOP principles, and practical application development using the .NET framework for building Windows and web applications.',
    trainer:'Mr. Bangar Raju', trainerBio:'Industry professional offering real-world insights through extensive experience.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner/Intermediate', mode:'Online / Offline', startDate:'Jun 1, 2026',
    highlights:[
      { icon: '🔷', label: 'C# .NET Complete Training' },
      { icon: '🖥️', label: 'Windows Forms & ADO.NET' },
      { icon: '📦', label: 'Collections & LINQ' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🌐', label: 'ASP.NET Web Development' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'C# programming fundamentals',
      'Object-oriented programming principles',
      '.NET framework architecture',
      'Visual Studio IDE proficiency',
      'ASP.NET web development',
      'Database connectivity with ADO.NET'
    ],
    requirements:[
      'Basic programming concepts',
      'Object-oriented programming familiarity',
      'Understanding of control flow statements'
    ],
    whoIsFor:[
      'Programmers and developers',
      'Computer science students',
      'Software engineers',
      'Web developers',
      'System architects'
    ],
    curriculum:[
      { module: '.NET Introduction', lessons: [
        'Platform dependency vs independence',
        '.NET languages and compilers',
        'CIL/MSIL code'
      ] },
      { module: 'C# Data Types', lessons: [
        'Integer, float, decimal types',
        'Boolean and DateTime types',
        'String and object types'
      ] },
      { module: 'Encapsulation', lessons: [
        'Method syntax and parameters',
        'Instance creation',
        'Constructors and static keywords'
      ] },
      { module: 'Inheritance', lessons: [
        'Parent-child relationships',
        'Method access patterns'
      ] },
      { module: 'Polymorphism', lessons: [
        'Method overloading and overriding',
        'Operator overloading'
      ] },
      { module: 'Collections', lessons: [
        'Generic collections',
        'List and Dictionary classes'
      ] },
      { module: 'LINQ', lessons: [
        'LINQ queries',
        'Database and XML integration'
      ] },
      { module: 'ADO.NET', lessons: [
        'Connected and disconnected architectures',
        'Stored procedures'
      ] }
    ],
    skills:[
      'C# syntax and data types',
      'Object-oriented design',
      '.NET framework knowledge',
      'Windows Forms development',
      'ASP.NET web development',
      'Database integration'
    ],
  },
  {
    id:66, title:'Spring', slug:'spring-online-training', visible: false, category:'Frameworks', rating:5, reviews:0, image:'https://images.nareshit.com/spring-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Spring framework training covering IoC, dependency injection, Spring MVC, Security, and Boot for enterprise Java application development.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🌿', label: 'Spring Framework' },
      { icon: '🔐', label: 'Spring Security' },
      { icon: '🏗️', label: 'Microservices Architecture' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'Spring Data JPA' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Spring Core Container and Bean management',
      'Build scalable web applications with Spring MVC',
      'Implement application security using Spring Security',
      'Simplify data access with Spring Data and JPA',
      'Apply aspect-oriented programming for cross-cutting concerns',
      'Deploy stand-alone applications with Spring Boot'
    ],
    requirements:[
      'Basic Java programming proficiency',
      'Object-oriented programming principles',
      'Integrated Development Environment experience'
    ],
    whoIsFor:[
      'Java developers enhancing enterprise skills',
      'Web developers building scalable applications',
      'Enterprise application architects',
      'Database developers',
      'Software engineers',
      'DevOps professionals'
    ],
    curriculum:[
      { module: 'Spring Introduction', lessons: [
        'Overview of framework architecture and core concepts'
      ] },
      { module: 'Spring Core Module', lessons: [
        'IoC',
        'DI',
        'BeanFactory',
        'ApplicationContext'
      ] },
      { module: 'Spring Boot Core', lessons: [
        'Stand-alone application setup'
      ] },
      { module: 'Spring JDBC/DAO', lessons: [
        'Data access patterns'
      ] },
      { module: 'Spring AOP', lessons: [
        'Cross-cutting concerns'
      ] },
      { module: 'Spring MVC', lessons: [
        'Web application development'
      ] },
      { module: 'Spring Security', lessons: [
        'Authentication and authorization'
      ] },
      { module: 'Spring Data JPA', lessons: [
        'Simplified data persistence'
      ] },
      { module: 'Spring Microservices', lessons: [
        'Distributed system architecture'
      ] }
    ],
    skills:[
      'Spring Framework expertise',
      'Dependency Injection',
      'Spring Security implementation',
      'Spring MVC development',
      'Microservices architecture',
      'Enterprise application design'
    ],
  },
  {
    id:67, title:'Advanced Java', slug:'advanced-java-online-training', visible: false, category:'Programming', rating:4.8, reviews:0, image:'https://images.nareshit.com/advanced-java-online-training-nareshit.jpg',
    enriched:true,
    description:'Advanced Java online training covers enterprise-level technologies including servlets, JSP, Spring, and Hibernate for building scalable applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☕', label: 'Enterprise Java' },
      { icon: '🌐', label: 'Servlets & JSP' },
      { icon: '🏗️', label: 'Spring & Hibernate' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'MVC Architecture' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master servlets and JSP',
      'Understand Enterprise JavaBeans (EJB)',
      'Learn Spring and Hibernate frameworks',
      'Implement MVC architecture',
      'Apply security best practices',
      'Build real-world applications'
    ],
    requirements:[
      'Core Java fundamentals',
      'Object-oriented programming principles',
      'Java collections framework knowledge'
    ],
    whoIsFor:[
      'Java developers seeking enterprise skills',
      'Web developers building scalable applications',
      'Enterprise application developers',
      'Database developers',
      'System architects'
    ],
    curriculum:[
      { module: 'Introduction', lessons: [
        'Java Platforms',
        'API',
        'Runtime Polymorphism'
      ] },
      { module: 'JDBC', lessons: [
        'Connection Management',
        'PreparedStatement',
        'ResultSet',
        'Transaction Management'
      ] },
      { module: 'Servlet', lessons: [
        'HTTP Protocol',
        'ServletRequest/Response',
        'Session Management'
      ] },
      { module: 'JSP', lessons: [
        'JSP Lifecycle',
        'Scripting Elements',
        'JSTL'
      ] },
      { module: 'MVC Architecture', lessons: [
        'MVC-1 Page Centric',
        'MVC-2 Design'
      ] }
    ],
    skills:[
      'Servlet development',
      'JSP programming',
      'Spring Framework',
      'Hibernate ORM',
      'Database connectivity',
      'Web application architecture'
    ],
  },
  {
    id:68, title:'C Language', slug:'c-language-online-training', visible: false, category:'Programming', rating:0, reviews:0, image:'https://images.nareshit.com/c-language-online-training-nareshit.jpg',
    enriched:true,
    description:'Master C programming fundamentals through comprehensive online training covering data types, control structures, pointers, memory management, and file I/O with hands-on coding assignments.',
    trainer:'Mr. Srikanth', trainerBio:'Experienced industry professional offering real-world insights in C programming instruction.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'1 Jun 2026',
    highlights:[
      { icon: '🔤', label: 'C Programming Mastery' },
      { icon: '💾', label: 'Pointers & Memory Management' },
      { icon: '📂', label: 'File I/O Operations' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'Recursion & Functions' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Write and debug C programs with confidence',
      'Master pointers and dynamic memory allocation',
      'Develop strong problem-solving skills',
      'Understand functions and data structures',
      'Apply file handling and I/O techniques',
      'Build software applications professionally'
    ],
    requirements:[
      'Basic computer familiarity',
      'Understanding of programming logic',
      'No prior programming experience required'
    ],
    whoIsFor:[
      'Programming beginners',
      'Computer Science students',
      'IT professionals',
      'Software development aspirants'
    ],
    curriculum:[
      { module: 'Fundamentals in C', lessons: [
        'Program',
        'Programming Languages',
        'Introduction to C',
        'Data Types',
        'Variables',
        'Keywords'
      ] },
      { module: 'Operators and Expressions', lessons: [
        'Arithmetic operators',
        'Relational operators',
        'Logical operators',
        'Type casting'
      ] },
      { module: 'Control Statements', lessons: [
        'Conditional statements',
        'Loop structures',
        'Jump controls'
      ] },
      { module: 'Arrays', lessons: [
        '1D Arrays',
        '2D Arrays',
        '3D Arrays'
      ] },
      { module: 'Strings', lessons: [
        'String Concept',
        'String Manipulation',
        'Character Arrays'
      ] },
      { module: 'Pointers', lessons: [
        'Memory Addresses',
        'Pointer Operators',
        'Dynamic Memory Allocation'
      ] },
      { module: 'Functions', lessons: [
        'Function Definition',
        'Recursion',
        'Parameter Passing'
      ] },
      { module: 'Structures and Unions', lessons: [
        'Structure Declaration',
        'Nested structures',
        'Unions'
      ] },
      { module: 'File I/O', lessons: [
        'File Operations',
        'Streams',
        'Error Handling'
      ] }
    ],
    skills:[
      'C programming fundamentals',
      'Pointer manipulation',
      'Memory management',
      'File handling',
      'Data structure implementation',
      'Problem-solving'
    ],
  },
  {
    id:69, title:'Android', slug:'android-online-training', visible: false, category:'Mobile Technologies', rating:4, reviews:0, image:'https://images.nareshit.com/android-online-training-nareshit.jpg',
    enriched:true,
    description:'Android Online Training teaches app development for the Android platform, covering Java/Kotlin programming, UI design, and device feature integration through hands-on projects and real-world examples.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📱', label: 'Android App Development' },
      { icon: '🔥', label: 'Firebase Integration' },
      { icon: '🗺️', label: 'Google Maps & Location' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'SQLite Database' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Android ecosystem architecture',
      'Build responsive user interfaces with XML layouts',
      'Develop interactive apps using Java/Kotlin',
      'Integrate device features like camera and location services',
      'Deploy applications to Google Play Store',
      'Apply industry best practices and design guidelines'
    ],
    requirements:[
      'Basic Java programming knowledge',
      'XML familiarity',
      'Object-oriented programming principles',
      'Android Studio IDE understanding'
    ],
    whoIsFor:[
      'Aspiring Android developers',
      'Software developers expanding skillsets',
      'Computer science students',
      'Entrepreneurs and product managers',
      'UX/UI designers',
      'App development enthusiasts'
    ],
    curriculum:[
      { module: 'Introduction of Android & History', lessons: [
        'Mobile App Development',
        'Android Features',
        'Open Source Projects',
        'Version-wise Features'
      ] },
      { module: 'Android Architecture', lessons: [
        'Applications',
        'Android Frameworks',
        'Linux Kernel',
        'Dalvik Virtual Machine'
      ] },
      { module: 'User Interface Design', lessons: [
        'Layouts',
        'Fragments',
        'UI Components'
      ] },
      { module: 'Data Management', lessons: [
        'SQLite Databases',
        'File Storage',
        'Content Providers'
      ] },
      { module: 'Advanced Features', lessons: [
        'Firebase',
        'Google Maps',
        'Notifications'
      ] },
      { module: 'Web Services & Integration', lessons: [
        'JSON',
        'Retrofit',
        'Volley'
      ] }
    ],
    skills:[
      'Java/Kotlin programming',
      'Android Studio IDE',
      'UI/UX design',
      'SQLite database management',
      'Firebase integration',
      'RESTful API integration'
    ],
  },
  {
    id:70, title:'iPhone Operating System (iOS)', slug:'iphone-ios-online-training', visible: false, category:'Mobile Technologies', rating:5, reviews:0, image:'https://images.nareshit.com/ios-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive iOS app development course covering Swift programming, UIKit framework, and best practices for building feature-rich applications for Apple\'s iOS platform.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🍎', label: 'iOS App Development' },
      { icon: '⚡', label: 'Swift Programming' },
      { icon: '🗄️', label: 'Core Data' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗺️', label: 'Core Location & Maps' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Swift Programming Language',
      'Xcode IDE Development Environment',
      'UIKit Framework & User Interface Design',
      'User Interactions & Event Handling',
      'Data Management & Core Data',
      'Device Features Integration',
      'App Store Deployment',
      'iOS Development Best Practices'
    ],
    requirements:[
      'Basic Swift programming knowledge',
      'Xcode familiarity',
      'Object-oriented programming principles',
      'Apple\'s Human Interface Guidelines awareness'
    ],
    whoIsFor:[
      'Aspiring iOS Developers',
      'Software Developers expanding skillsets',
      'Computer Science Students',
      'Entrepreneurs & Product Managers',
      'UX/UI Designers',
      'App Development Enthusiasts'
    ],
    curriculum:[
      { module: 'Introduction iOS and SDK', lessons: [
        'SDK components',
        'Xcode',
        'Interface Builder',
        'Simulator'
      ] },
      { module: 'Classes, Objects, Methods and Properties', lessons: [
        'OOP concepts',
        'Inheritance',
        'Polymorphism'
      ] },
      { module: 'Foundation Framework', lessons: [
        'Core framework overview'
      ] },
      { module: 'Collections', lessons: [
        'NSArray',
        'NSDictionary',
        'Data structures'
      ] },
      { module: 'Memory Management', lessons: [
        'Allocation',
        'Reference counting'
      ] },
      { module: 'Controls', lessons: [
        'UI elements',
        'Event handling'
      ] },
      { module: 'Table View', lessons: [
        'Data source',
        'Delegates'
      ] },
      { module: 'Networking', lessons: [
        'NSURL',
        'HTTP connections'
      ] },
      { module: 'Working with Core Data', lessons: [
        'Data persistence'
      ] },
      { module: 'Location and Mapping', lessons: [
        'Core Location',
        'Map Kit'
      ] }
    ],
    skills:[
      'Swift',
      'Xcode',
      'UIKit',
      'Core Data',
      'Object-Oriented Programming',
      'Mobile App Development',
      'iOS SDK',
      'User Interface Design'
    ],
  },
  {
    id:71, title:'Docker & Kubernetes', slug:'docker-kubernetes-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/dockers-kubernetes-online-training-nareshit.jpg',
    enriched:true,
    description:'Master containerization with Docker and orchestration with Kubernetes for scalable application deployment. Covers hands-on labs and real-world scenarios for modern software development.',
    trainer:'Mr. Raham', trainerBio:'Industry professional offering real-world insights in containerization and orchestration technologies.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Intermediate', mode:'Online / Offline', startDate:'Jun 1, 2026',
    highlights:[
      { icon: '🐳', label: 'Docker Containers' },
      { icon: '⚙️', label: 'Kubernetes Orchestration' },
      { icon: '📦', label: 'Helm Charts' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'GitOps with ArgoCD' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Create and manage Docker containers',
      'Deploy applications using Kubernetes',
      'Configure container orchestration',
      'Scale applications efficiently',
      'Implement service discovery and load balancing',
      'Monitor containerized environments'
    ],
    requirements:[
      'Basic Linux understanding',
      'Command line interface familiarity',
      'Containerization concept knowledge',
      'Virtualization and cloud computing awareness'
    ],
    whoIsFor:[
      'DevOps Engineers',
      'Software Developers',
      'System Administrators',
      'Cloud Architects',
      'IT Operations Professionals'
    ],
    curriculum:[
      { module: 'Docker', lessons: [
        'Introduction to Docker',
        'Basic Docker Commands',
        'Dockerfile Basics',
        'Docker Hub',
        'Docker Compose',
        'Docker Networking',
        'Docker Volumes',
        'Docker Security'
      ] },
      { module: 'Kubernetes (K8s)', lessons: [
        'Introduction to Kubernetes',
        'Basic Kubernetes Concepts',
        'Kubernetes CLI (kubectl)',
        'ConfigMaps and Secrets',
        'Kubernetes Networking',
        'Deployments and StatefulSets',
        'Monitoring and Logging'
      ] },
      { module: 'Terraform', lessons: [
        'Introduction to Terraform',
        'Writing Terraform Configuration',
        'Terraform State Management',
        'Variables and Outputs'
      ] },
      { module: 'Helm', lessons: [
        'Introduction to Helm',
        'Basic Helm Commands',
        'Writing Helm Charts'
      ] },
      { module: 'ArgoCD', lessons: [
        'Introduction to ArgoCD',
        'Deploying Applications with ArgoCD',
        'ArgoCD and GitOps'
      ] }
    ],
    skills:[
      'Docker',
      'Kubernetes',
      'Container Orchestration',
      'Terraform',
      'Helm',
      'GitOps',
      'CI/CD Integration'
    ],
  },
  {
    id:72, title:'Data Analytics & Business Analytics', slug:'data-analytics-online-training', visible: true, category:'Analytics', rating:5, reviews:0, image:'https://images.nareshit.com/Data_Analytics.jpg',
    enriched:true,
    description:'Data Analytics & Business Analytics course equips participants with essential skills to analyze and interpret data effectively using techniques and tools to extract valuable insights for informed decision-making.',
    trainer:'Mr. Rahul, Mr. Nikhil', trainerBio:'Industry professionals offering real-world insights through extensive experience.', trainerExp:'', trainerStudents:'',
    duration:'4 months', level:'Beginner to Advanced', mode:'Online / Offline / KPHB', startDate:'May 29, 2026',
    highlights:[
      { icon: '📊', label: 'Data & Business Analytics' },
      { icon: '🐍', label: 'Python + SQL' },
      { icon: '📈', label: 'Power BI & Tableau' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📉', label: 'Statistical Analysis' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Data exploration and cleaning',
      'Statistical analysis and hypothesis testing',
      'Data visualization techniques',
      'Python programming with Pandas and NumPy',
      'SQL database querying',
      'Power BI and Tableau dashboard creation'
    ],
    requirements:[
      'Basic data understanding',
      'Spreadsheet application familiarity',
      'Basic statistical concepts knowledge'
    ],
    whoIsFor:[
      'Business analysts',
      'Data enthusiasts',
      'Students and graduates',
      'Managers and executives',
      'Researchers'
    ],
    curriculum:[
      { module: 'Excel', lessons: [
        'Basic formulas and functions',
        'Pivot tables',
        'VBA automation'
      ] },
      { module: 'Statistics', lessons: [
        'Descriptive statistics',
        'Inferential statistics',
        'Hypothesis testing',
        'ANOVA'
      ] },
      { module: 'Python', lessons: [
        'Core Python programming',
        'Numpy arrays',
        'Pandas DataFrames'
      ] },
      { module: 'Data Science', lessons: [
        'Exploratory data analysis',
        'Data cleaning',
        'Matplotlib and Seaborn visualization'
      ] },
      { module: 'SQL', lessons: [
        'Database fundamentals',
        'Joins and subqueries',
        'Views and stored procedures'
      ] },
      { module: 'Power BI', lessons: [
        'Data transformation',
        'DAX calculations',
        'Dashboard design'
      ] },
      { module: 'Tableau', lessons: [
        'Visual analytics',
        'Trend lines and forecasting',
        'Advanced dashboards'
      ] }
    ],
    skills:[
      'Python',
      'Excel',
      'SQL',
      'Statistics',
      'Data Visualization',
      'Power BI',
      'Tableau',
      'ETL',
      'Data Cleaning',
      'Data Analysis'
    ],
  },
  {
    id:73, title:'Chat GPT', slug:'chat-gpt-online-training', visible: true, category:'Data Science', rating:4.5, reviews:0, image:'https://images.nareshit.com/chat-gpt-online-training-nareshit.jpg',
    enriched:true,
    description:'ChatGPT course explores the powerful language model developed by OpenAI, teaching participants to understand its architecture and effectively utilize it for natural language understanding and generation tasks.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'ChatGPT & Prompt Engineering' },
      { icon: '🔧', label: 'Custom GPT Creation' },
      { icon: '🌐', label: 'API Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚖️', label: 'Ethical AI Practices' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand ChatGPT architecture and capabilities',
      'Master prompt engineering techniques',
      'Customize ChatGPT for specific use cases',
      'Apply ChatGPT to content generation and chatbot development',
      'Explore ethical considerations and responsible AI use',
      'Build and deploy custom GPTs'
    ],
    requirements:[
      'Basic NLP understanding',
      'Familiarity with machine learning principles',
      'Python programming knowledge',
      'Text preprocessing techniques knowledge'
    ],
    whoIsFor:[
      'Developers',
      'Data Scientists and ML Engineers',
      'Content Creators',
      'Product Managers',
      'Researchers',
      'AI Enthusiasts'
    ],
    curriculum:[
      { module: 'Introduction to ChatGPT', lessons: [
        'What is ChatGPT',
        'History and evolution',
        'Understanding LLMs',
        'Difference between GPT models'
      ] },
      { module: 'ChatGPT for Beginners', lessons: [
        'Creating an OpenAI account',
        'Exploring ChatGPT interface',
        'Prompt Engineering Basics'
      ] },
      { module: 'Advanced Prompt Engineering', lessons: [
        'Prompt Templates',
        'Chain of Thought and Reasoning',
        'Using Tools with ChatGPT'
      ] },
      { module: 'ChatGPT for Professionals', lessons: [
        'ChatGPT for Developers',
        'ChatGPT for Digital Marketers',
        'ChatGPT for Educators'
      ] },
      { module: 'Building with Custom GPTs', lessons: [
        'Creating a Custom GPT',
        'Use Cases of Custom GPTs'
      ] },
      { module: 'Ethics, Safety & Limitations', lessons: [
        'Responsible AI Use',
        'Limitations and Best Practices'
      ] }
    ],
    skills:[
      'Prompt engineering',
      'ChatGPT customization',
      'API integration',
      'Custom GPT creation',
      'Conversational AI development',
      'Ethical AI implementation'
    ],
  },
  {
    id:74, title:'MLOps & AIOps', slug:'mlops-and-aiops-online-training', visible: true, category:'Data Science', rating:4.5, reviews:0, image:'https://images.nareshit.com/MLOps_and_AIOps_Online_Training_Naresh_IT.jpg',
    enriched:true,
    description:'MLOps & AIOps training bridges machine learning development and IT operations, teaching automation, monitoring, and deployment of ML models using industry tools like MLflow, Kubeflow, Docker, and Kubernetes.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'MLOps & AIOps' },
      { icon: '🔄', label: 'ML CI/CD Pipelines' },
      { icon: '📊', label: 'Model Monitoring' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🧠', label: 'Generative AI Intro' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement CI/CD pipelines for ML models',
      'Automate data workflows and model training',
      'Monitor and deploy ML models in production',
      'Apply AIOps practices to IT operations',
      'Work with MLflow, Kubeflow, TFX tools',
      'Manage infrastructure using Docker and Kubernetes'
    ],
    requirements:[
      'Basic Python and Machine Learning knowledge',
      'Familiarity with DevOps concepts',
      'Knowledge of AWS, Azure, or GCP cloud platforms'
    ],
    whoIsFor:[
      'Machine Learning Engineers',
      'DevOps Engineers',
      'Data Scientists',
      'IT Operations Teams',
      'Cloud Engineers',
      'Software Engineers'
    ],
    curriculum:[
      { module: 'DevOps Fundamentals', lessons: [
        'Introduction to DevOps',
        'Linux Fundamentals',
        'Version Control with Git',
        'CI/CD Fundamentals',
        'Infrastructure as Code'
      ] },
      { module: 'MLOps', lessons: [
        'Introduction to MLOps',
        'Data Engineering for ML',
        'ML Experimentation & Tracking',
        'ML Model Packaging & Deployment',
        'ML CI/CD Pipelines'
      ] },
      { module: 'AIOps', lessons: [
        'Introduction to AIOps',
        'Anomaly Detection Systems',
        'Root Cause Analysis & Remediation',
        'Self-Healing Systems'
      ] },
      { module: 'Generative AI', lessons: [
        'Introduction to Generative AI',
        'Foundation Models',
        'Text Generation Models',
        'Image Generation'
      ] },
      { module: 'AI Agents', lessons: [
        'Introduction to AI Agents',
        'Agent Development Frameworks',
        'Multi-Agent Systems',
        'Human-Agent Interaction'
      ] }
    ],
    skills:[
      'MLflow',
      'Kubeflow',
      'TensorFlow Extended',
      'Jenkins',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Grafana',
      'Python',
      'CI/CD Pipeline Design',
      'Model Monitoring'
    ],
  },
  {
    id:75, title:'Salesforce LWC', slug:'salesforce-lwc-online-training', visible: false, category:'Mulesoft', rating:5, reviews:0, image:'https://images.nareshit.com/salesforce-lwc-online-training-nareshit.jpg',
    enriched:true,
    description:'Build responsive web applications on Salesforce using modern web standards (JavaScript, HTML, CSS). Master Lightning Web Components framework for custom UI development and seamless Salesforce integration.',
    trainer:'Ashok Sir', trainerBio:'Experienced Salesforce CRM professional dedicated to teaching fundamentals to advanced concepts for career development.', trainerExp:'10+ Years', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '⚡', label: 'Lightning Web Components' },
      { icon: '🔗', label: 'Apex Integration' },
      { icon: '🎨', label: 'SLDS Styling' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔄', label: 'Event-driven Programming' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Design responsive LWC components',
      'Integrate with Apex and Lightning Data Service',
      'Master event-driven programming',
      'Implement data binding techniques',
      'Build custom applications',
      'Optimize component performance'
    ],
    requirements:[
      'Basic HTML/CSS/JavaScript knowledge',
      'Salesforce platform familiarity',
      'Developer Edition or Sandbox access'
    ],
    whoIsFor:[
      'Salesforce developers',
      'Web developers',
      'System integrators',
      'IT professionals seeking cloud expertise'
    ],
    curriculum:[
      { module: 'Introduction of LWC', lessons: [
        'LWC basics',
        'ECMAScript 7',
        'Aura vs LWC comparison'
      ] },
      { module: 'Setup Environment & Scratch Org', lessons: [
        'Development environment setup',
        'VS Code configuration',
        'CLI commands',
        'Org connection'
      ] },
      { module: 'Create LWC', lessons: [
        'Basic components',
        'Data binding',
        'Decorators',
        'Lifecycle hooks'
      ] },
      { module: 'LWC With SLDS', lessons: [
        'UI design patterns',
        'Forms',
        'Data tables'
      ] },
      { module: 'Events', lessons: [
        'Event handling',
        'Event propagation',
        'Publish-Subscribe'
      ] },
      { module: 'LWC & Apex', lessons: [
        'Imperative method calls',
        'Error handling'
      ] },
      { module: 'Lightning Data Services', lessons: [
        'Record forms',
        'CRUD operations'
      ] },
      { module: 'Navigation in LWC', lessons: [
        'Multi-destination navigation'
      ] }
    ],
    skills:[
      'Lightning Web Components',
      'JavaScript ES7+',
      'Component lifecycle management',
      'Event handling',
      'Apex integration',
      'SLDS styling',
      'Data binding',
      'Performance optimization'
    ],
  },
  {
    id:76, title:'Salesforce CRM', slug:'salesforce-crm-online-training', visible: false, category:'Mulesoft', rating:4.5, reviews:0, image:'https://images.nareshit.com/salesforce-crm-online-training-nareshit.jpg',
    enriched:true,
    description:'Cloud-based CRM training covering administration, development, Lightning components, and integrations with hands-on real-world projects.',
    trainer:'Kishore Babu', trainerBio:'Excellent faculty, providing real-time examples and superb teaching method for Salesforce CRM.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☁️', label: 'Salesforce CRM Platform' },
      { icon: '⚡', label: 'Lightning Web Components' },
      { icon: '🔗', label: 'REST & SOAP Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '⚙️', label: 'Apex Programming' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'CRM software features and automation',
      'Cloud computing fundamentals',
      'Security and debugging',
      'Lightning Web Components development',
      'REST/SOAP integrations',
      'Apex programming'
    ],
    requirements:[
      'Core Java or any programming language'
    ],
    whoIsFor:[
      'App Builders',
      'System Developers',
      'Administrators',
      'Sales Managers',
      'Sales Executives'
    ],
    curriculum:[
      { module: 'Administration with CRM Apps', lessons: [
        'Cloud Computing Fundamentals',
        'Salesforce CRM Concepts',
        'Workflows',
        'Flows',
        'Approval Process',
        'Security & Access'
      ] },
      { module: 'Development', lessons: [
        'Apex Fundamentals',
        'Apex Classes',
        'Apex Concepts'
      ] },
      { module: 'Lightning', lessons: [
        'App Builder',
        'Lightning App Builder',
        'Record Pages',
        'Standard Components'
      ] },
      { module: 'Lightning Web Components', lessons: [
        'LWC Fundamentals',
        'ECMAScript Script 7',
        'LWC with SLDS',
        'LWC with Apex'
      ] },
      { module: 'Integrations', lessons: [
        'REST & SOAP',
        'Connected App',
        'OAuth',
        'JSON Parsing'
      ] }
    ],
    skills:[
      'Salesforce administration',
      'Apex development',
      'Lightning Web Components',
      'API integrations',
      'Cloud architecture'
    ],
  },
  {
    id:77, title:'Azure Data Engineer', slug:'azure-data-engineer-online-training', visible: false, category:'Cloud Computing', rating:4.5, reviews:0, image:'https://images.nareshit.com/azure-devops-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Azure data engineering course covering data ingestion, transformation, storage, and analysis using Azure services like Data Factory, Databricks, and Synapse Analytics.',
    trainer:'Mr. Pavan', trainerBio:'Industry professional offering real-world insights into Azure data engineering practices.', trainerExp:'', trainerStudents:'',
    duration:'2 months', level:'Intermediate', mode:'Online / Offline', startDate:'1 Jun 2026',
    highlights:[
      { icon: '⚙️', label: 'Azure Data Engineering' },
      { icon: '⚡', label: 'Databricks & Spark' },
      { icon: '📊', label: 'Synapse Analytics' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Data Governance' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Design and implement data ingestion pipelines',
      'Process data at scale using Databricks',
      'Master Azure storage solutions',
      'Build data warehousing with Synapse Analytics',
      'Implement data governance and security',
      'Develop data visualization and reporting skills'
    ],
    requirements:[
      'Basic database and data management knowledge',
      'SQL proficiency',
      'Understanding of cloud computing',
      'Azure Portal familiarity'
    ],
    whoIsFor:[
      'Data engineers',
      'Database administrators',
      'Data analysts',
      'Software developers',
      'IT professionals and system architects'
    ],
    curriculum:[
      { module: 'Introduction to Cloud Computing', lessons: [
        'Cloud models',
        'Cloud services',
        'Cloud vendors'
      ] },
      { module: 'Azure Storage Services', lessons: [
        'Blob storage',
        'Data Lake Gen2',
        'Storage security'
      ] },
      { module: 'Azure Data Factory', lessons: [
        'Pipeline design',
        'Data flows',
        'Integration runtime'
      ] },
      { module: 'Azure Synapse Analytics', lessons: [
        'Dedicated SQL pools',
        'Spark pools',
        'Data analysis'
      ] },
      { module: 'Azure Stream Analytics', lessons: [
        'IoT integration',
        'Stream processing',
        'Real-time analytics'
      ] }
    ],
    skills:[
      'Azure Data Factory',
      'Data pipeline design',
      'Apache Spark',
      'SQL query optimization',
      'Data governance',
      'Power BI'
    ],
  },
  {
    id:78, title:'MS Azure + Azure DevOps', slug:'ms-azure-devops-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/ms-azure-and-devops-online-training-nareshit.jpg',
    enriched:true,
    description:'Master Azure cloud platform and DevOps tools to streamline software development lifecycle, automate CI/CD pipelines, and manage infrastructure efficiently.',
    trainer:'Mr. Sandeep', trainerBio:'Industry professional delivering Azure and DevOps expertise through practical training.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Intermediate', mode:'Online / Offline', startDate:'June 1, 2026',
    highlights:[
      { icon: '☁️', label: 'Azure + DevOps Combined' },
      { icon: '🔄', label: 'CI/CD Pipelines' },
      { icon: '🐳', label: 'Containerization & AKS' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📊', label: 'Azure Monitoring' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Implement CI/CD pipelines and automation',
      'Design Azure infrastructure and resource management',
      'Execute DevOps best practices and deployment strategies',
      'Configure monitoring, alerts, and performance tracking',
      'Manage version control and collaborate using Azure Repos',
      'Deploy applications using containers and Kubernetes'
    ],
    requirements:[
      'Basic understanding of software development lifecycle',
      'Familiarity with version control systems like Git',
      'Knowledge of agile methodologies',
      'Understanding of CI/CD principles'
    ],
    whoIsFor:[
      'Developers',
      'DevOps Engineers',
      'Project Managers',
      'QA Engineers',
      'IT Professionals',
      'System Administrators'
    ],
    curriculum:[
      { module: 'Introduction to Cloud Computing', lessons: [
        'Cloud Models',
        'Azure Services',
        'Cloud Vendors'
      ] },
      { module: 'Azure DevOps', lessons: [
        'Organization Setup',
        'Project Configuration',
        'Pipeline Creation'
      ] },
      { module: 'Azure Repos', lessons: [
        'Git vs TFVC',
        'Branching Strategies',
        'Code Merging'
      ] },
      { module: 'Azure Pipelines', lessons: [
        'CI/CD Implementation',
        'Build Automation',
        'Deployment Pipelines'
      ] },
      { module: 'Containerization', lessons: [
        'Docker Containers',
        'Azure Container Instances'
      ] },
      { module: 'Azure Kubernetes Services', lessons: [
        'AKS Deployment',
        'Kubectl Commands'
      ] }
    ],
    skills:[
      'Azure Infrastructure Management',
      'CI/CD Pipeline Development',
      'DevOps Automation',
      'Container Orchestration',
      'Infrastructure as Code',
      'Cloud Deployment'
    ],
  },
  {
    id:79, title:'Oracle', slug:'oracle-online-training', visible: false, category:'Data Base', rating:4, reviews:0, image:'https://images.nareshit.com/oracle-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Oracle training covering database fundamentals, SQL/PL/SQL programming, cloud services, and enterprise applications for IT professionals.',
    trainer:'Mr. Shareef', trainerBio:'Real-time expert instructor delivering Oracle Database and related technologies training.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner to Intermediate', mode:'Online / Offline / Classroom', startDate:'June 1, 2026',
    highlights:[
      { icon: '🔶', label: 'Oracle Database Complete' },
      { icon: '📊', label: 'SQL & PL/SQL' },
      { icon: '☁️', label: 'Oracle Cloud Services' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'Security & Performance' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'SQL querying and data manipulation',
      'PL/SQL procedural programming',
      'Oracle Database administration and architecture',
      'Oracle Cloud services (DBaaS, PaaS, SaaS)',
      'Database security, backup, recovery, and performance tuning',
      'Oracle APEX web application development'
    ],
    requirements:[
      'Basic database and data management understanding',
      'Familiarity with SQL syntax',
      'Knowledge of relational database principles',
      'Database administration task awareness'
    ],
    whoIsFor:[
      'Database Administrators',
      'Application Developers',
      'Cloud Professionals',
      'IT Managers',
      'Business Analysts',
      'Students and Graduates',
      'System Architects'
    ],
    curriculum:[
      { module: 'SQL', lessons: [
        'File Management System',
        'DBMS Architecture',
        'Normalization',
        'Oracle Architecture',
        'Data types',
        'SQL Sub-Languages',
        'Operators',
        'Pre-Defined Functions',
        'Data Aggregation',
        'Integrity Constraints',
        'JOINS',
        'Sub-Queries',
        'Database Transactions',
        'Security'
      ] },
      { module: 'PL/SQL', lessons: [
        'Introduction to PL/SQL',
        'Variables and Constants',
        'Conditional Statements',
        'Iteration Control',
        'Cursor Management',
        'Exception Handling',
        'Sub Programs',
        'Packages',
        'Database Triggers',
        'Dynamic SQL'
      ] }
    ],
    skills:[
      'Oracle Database Administration',
      'SQL and PL/SQL Programming',
      'Oracle Cloud Infrastructure',
      'Database Security and Performance Tuning',
      'Data Modeling and Normalization',
      'Oracle APEX Development'
    ],
  },
  {
    id:80, title:'Ui Path', slug:'ui-path-online-training', visible: false, category:'Automations', rating:5, reviews:0, image:'https://images.nareshit.com/ui-path-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive RPA training covering UI Path Studio, Orchestrator, and automation workflows. Gain hands-on expertise in creating efficient automation solutions for business processes.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🤖', label: 'UiPath RPA Platform' },
      { icon: '⚙️', label: 'Orchestrator Management' },
      { icon: '🔄', label: 'Workflow Automation' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🏆', label: 'UiPath Certification Prep' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand RPA fundamentals',
      'Install and configure UI Path tools',
      'Build and deploy automation workflows',
      'Design real-world automation solutions',
      'Manage RPA bots securely',
      'Automate data entry and report generation',
      'Clear UI Path certification exams'
    ],
    requirements:[
      'Basic programming knowledge (preferred)',
      'Familiarity with automation tools (optional)',
      'Passion for learning automation'
    ],
    whoIsFor:[
      'IT professionals seeking automation roles',
      'Business analysts',
      'RPA beginners',
      'Project managers',
      'Anyone automating repetitive tasks'
    ],
    curriculum:[
      { module: 'Introduction to RPA and UiPath', lessons: [
        'RPA fundamentals',
        'UiPath architecture',
        'Product suite overview'
      ] },
      { module: 'UiPath Studio and Interface', lessons: [
        'Studio components',
        'Project types',
        'Workflow types',
        'Control flow'
      ] },
      { module: 'Variables and Data Types', lessons: [
        'Working with variables',
        'Data types',
        'Constants and arguments'
      ] },
      { module: 'Data Manipulation and Tables', lessons: [
        'Data table activities',
        'Excel automation',
        'XML handling'
      ] },
      { module: 'UI Automation and Selectors', lessons: [
        'Basic automation',
        'Recording',
        'Advanced interaction'
      ] },
      { module: 'Exception Handling and Debugging', lessons: [
        'Exception types',
        'Try catch activity',
        'Logging'
      ] },
      { module: 'UiPath Orchestrator', lessons: [
        'Robot creation',
        'Assets and queues',
        'Scheduling and monitoring'
      ] }
    ],
    skills:[
      'RPA development',
      'UI Path Studio proficiency',
      'Workflow automation',
      'Data extraction',
      'Exception handling',
      'Orchestrator management',
      'Process automation design'
    ],
  },
  {
    id:81, title:'R Programming Online Training', slug:'r-programming-online-training', visible: false, category:'Data Science', rating:4.5, reviews:0, image:'https://images.nareshit.com/R Prog.jpg',
    enriched:true,
    description:'R is an open-source programming language for statistical analysis with powerful graphical functionality and extensive packages for data analytics and visualization.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📊', label: 'Statistical Programming' },
      { icon: '📈', label: 'Data Visualization' },
      { icon: '🔢', label: 'Regression Analysis' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📉', label: 'Probability Distributions' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Complete R language knowledge',
      'R Studio interface usage',
      'Add-on package handling',
      'Basic graph creation',
      'R programming commands',
      'Independent project management'
    ],
    requirements:[
      'Basic statistics and mathematics',
      'Programming concepts familiarity',
      'Data manipulation knowledge',
      'Statistical software navigation experience'
    ],
    whoIsFor:[
      'Data Analysts',
      'Statisticians',
      'Researchers',
      'Students',
      'Data Scientists',
      'Programmers'
    ],
    curriculum:[
      { module: 'Essential to R Programming', lessons: [
        'Introduction to R',
        'Programming statistical graphics',
        'Programming with R',
        'Simulation',
        'Computational linear algebra',
        'Numerical optimization'
      ] },
      { module: 'Data Manipulation Techniques', lessons: [
        'Reading and Writing Data',
        'Character Manipulation',
        'Data Aggregation',
        'Reshaping Data'
      ] },
      { module: 'Statistical Applications', lessons: [
        'Probability and distributions',
        'Regression and correlation',
        'Multiple Regression',
        'Logistic regression',
        'Survival analysis'
      ] }
    ],
    skills:[
      'Statistical analysis',
      'Data manipulation',
      'Data visualization',
      'Regression analysis',
      'Probability distributions'
    ],
  },
  {
    id:82, title:'SEO Online Training', slug:'seo-online-training', visible: false, category:'Digital Marketing', rating:4.5, reviews:0, image:'https://images.nareshit.com/seo-training-online-training-nareshit.jpg',
    enriched:true,
    description:'SEO is a methodology to increase website traffic and visibility in search engines. Learn optimization strategies, tools, and techniques to improve search rankings and earn qualified leads.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔍', label: 'Search Engine Optimization' },
      { icon: '📊', label: 'Google Analytics' },
      { icon: '🔗', label: 'Link Building' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📱', label: 'Local SEO' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Complete SEO knowledge',
      'Keyword research methodology',
      'Competitive assessment techniques',
      'Site URL analysis',
      'Website performance optimization',
      'Mobile responsive design'
    ],
    requirements:[
      'Basic HTML knowledge',
      'Familiarity with website structure',
      'Programming language basics'
    ],
    whoIsFor:[
      'IT professionals seeking digital marketing careers',
      'BE/B.Tech/BCA/MCA graduates',
      'Fresh graduates',
      'Students from any academic stream'
    ],
    curriculum:[
      { module: 'Introduction to SEO', lessons: [
        'Organic search marketing',
        'Search engines & web crawlers',
        'Google algorithms',
        'Domain authority'
      ] },
      { module: 'On Page SEO', lessons: [
        'Meta tags',
        'Title & description tags',
        'Page content optimization',
        'Schema structured data'
      ] },
      { module: 'Technical SEO', lessons: [
        'Webpage design',
        'Robots.txt',
        'Sitemaps',
        'Page speed',
        'URL structure'
      ] },
      { module: 'Off Page SEO', lessons: [
        'Backlinks & link juice',
        'Link prospecting',
        'Competitor strategy',
        'Disavow tools'
      ] },
      { module: 'Local SEO', lessons: [
        'Google My Business',
        'Google Maps optimization'
      ] },
      { module: 'Webmaster Tools', lessons: [
        'Google Search Console',
        'Bing Webmaster'
      ] }
    ],
    skills:[
      'Keyword research',
      'On-page SEO optimization',
      'Technical SEO',
      'Backlink analysis',
      'Local SEO',
      'Search Console management'
    ],
  },
  {
    id:83, title:'Data Science with AI', slug:'data-science-online-training', visible: true, category:'Data Science', rating:5, reviews:0, image:'https://images.nareshit.com/data-science-ai-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive data science training covering Python, statistics, machine learning, and deep learning with hands-on projects and real-world applications for aspiring data professionals.',
    trainer:'Mr. Hari Krishna', trainerBio:'Experienced industry professional offering real-world insights into data science practices and applications.', trainerExp:'20+ Years', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online', startDate:'May 29, 2026',
    highlights:[
      { icon: '📊', label: 'Data Science Complete Program' },
      { icon: '🧠', label: 'ML & Deep Learning' },
      { icon: '👁️', label: 'Computer Vision' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔤', label: 'NLP & Text Analysis' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master data analysis and visualization',
      'Build and deploy machine learning models',
      'Develop proficiency with Python, R, and SQL',
      'Understand statistical methods and mathematical foundations',
      'Apply deep learning and NLP techniques',
      'Implement computer vision and reinforcement learning'
    ],
    requirements:[
      'Basic statistics and mathematics understanding',
      'Familiarity with programming preferably Python or R',
      'Basic database and SQL knowledge'
    ],
    whoIsFor:[
      'Career changers entering data science',
      'Data analysts seeking skill enhancement',
      'IT professionals pivoting careers',
      'Business professionals leveraging data',
      'Beginners in analytics'
    ],
    curriculum:[
      { module: 'Python', lessons: [
        'Introduction to Data Science',
        'Python Basics',
        'Data Types & Utilities',
        'OOPs',
        'Pandas',
        'Numpy',
        'Matplotlib'
      ] },
      { module: 'Mathematics', lessons: [
        'Set Theory',
        'Combinatorics',
        'Probability',
        'Linear Algebra',
        'Calculus'
      ] },
      { module: 'Statistics', lessons: [
        'Descriptive Statistics',
        'Correlation & Regression',
        'Inferential Statistics'
      ] },
      { module: 'SQL', lessons: [
        'CRUD Operations',
        'SQL Commands',
        'Aggregate Functions',
        'Joins'
      ] },
      { module: 'EDA & ML', lessons: [
        'Data Visualization',
        'Regression',
        'Classification',
        'Clustering'
      ] },
      { module: 'Deep Learning', lessons: [
        'ANN',
        'CNN',
        'RNN',
        'TensorFlow',
        'PyTorch'
      ] },
      { module: 'NLP', lessons: [
        'Document Vectorization',
        'Sentiment Analysis'
      ] },
      { module: 'Computer Vision', lessons: [
        'Image Processing',
        'Video Processing'
      ] }
    ],
    skills:[
      'Python programming',
      'Machine learning',
      'Statistical analysis',
      'Data visualization',
      'Deep learning',
      'Natural language processing',
      'SQL',
      'PowerBI',
      'Computer vision'
    ],
  },
  {
    id:84, title:'AWS Solutions Architect Associate', slug:'aws-solutions-architect-online-training', visible: false, category:'Cloud Computing', rating:5, reviews:0, image:'https://images.nareshit.com/aws-certification-online-training-nareshit.jpg',
    enriched:false,
  },
  {
    id:85, title:'Full Stack Data Science Program', slug:'full-stack-data-science-ai-certification-online-training', visible: true, category:'Full Stack', rating:4.5, reviews:0, image:'https://images.nareshit.com/full-stack-data-science-certification-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive online training merging theoretical principles with hands-on applications in data science and AI, covering the complete pipeline from data collection to modeling and interpretation.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '📊', label: 'Full Data Science Pipeline' },
      { icon: '🧠', label: 'Deep Learning & NLP' },
      { icon: '👁️', label: 'Computer Vision' },
      { icon: '📜', label: 'Certification Course' },
      { icon: '🔬', label: 'AI Research Track' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master data science pipeline and AI techniques',
      'Develop proficiency in Python, R, and machine learning libraries',
      'Build practical experience through real-world projects',
      'Apply skills to predictive analytics and computer vision',
      'Understand deep learning and neural networks',
      'Prepare for careers in data science and AI engineering'
    ],
    requirements:[
      'Programming fundamentals',
      'Statistics and mathematics knowledge',
      'Data manipulation skills',
      'Machine learning algorithm familiarity'
    ],
    whoIsFor:[
      'Students and graduates interested in data science',
      'Working professionals transitioning to data science',
      'Data analysts and statisticians',
      'Software engineers incorporating ML techniques',
      'Individuals passionate about data and AI'
    ],
    curriculum:[
      { module: 'Python', lessons: [
        'Introduction to Data Science',
        'Python Basics',
        'Data Types & Utilities',
        'Functions',
        'OOPs',
        'Pandas',
        'Numpy',
        'Matplotlib',
        'Seaborn'
      ] },
      { module: 'Mathematics', lessons: [
        'Set Theory',
        'Probability',
        'Distributions',
        'Linear Algebra',
        'Calculus'
      ] },
      { module: 'Statistics', lessons: [
        'Central Tendency',
        'Descriptive Statistics',
        'Correlation & Regression'
      ] },
      { module: 'SQL', lessons: [
        'CRUD Operations',
        'SQL Commands',
        'Joins'
      ] },
      { module: 'EDA & ML', lessons: [
        'Univariate Analysis',
        'Data Processing',
        'Regression',
        'Classification',
        'Clustering'
      ] },
      { module: 'Deep Learning', lessons: [
        'Neural Networks',
        'TensorFlow',
        'ANN',
        'RNN',
        'CNN'
      ] },
      { module: 'NLP', lessons: [
        'Text Cleaning',
        'Document Vectorization',
        'Sentiment Analysis'
      ] },
      { module: 'Computer Vision', lessons: [
        'Image Processing',
        'Object Detection',
        'Reinforcement Learning'
      ] }
    ],
    skills:[
      'Python programming',
      'Machine learning',
      'Deep learning',
      'Natural language processing',
      'Computer vision',
      'Data visualization',
      'SQL',
      'Statistical analysis',
      'TensorFlow and PyTorch',
      'Data engineering'
    ],
  },
  {
    id:86, title:'Software Testing', slug:'software-testing-certification-online-training', visible: false, category:'Software Testing', rating:4, reviews:0, image:'https://images.nareshit.com/full-stack-testing-certification-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive online software testing program covering manual testing, automation with Selenium, and industry tools. Participants gain hands-on experience in test design, execution, and defect tracking across web, mobile, and desktop applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🧪', label: 'Full Testing Certification' },
      { icon: '🤖', label: 'Selenium Automation' },
      { icon: '🔗', label: 'CI/CD Integration' },
      { icon: '📜', label: 'Testing Certification' },
      { icon: '🥒', label: 'Cucumber BDD' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Software testing fundamentals and SDLC principles',
      'Manual and automated testing methodologies',
      'Selenium WebDriver and test automation frameworks',
      'Test case design and defect management',
      'JIRA and testing tools proficiency',
      'Real-world project implementation'
    ],
    requirements:[
      'Basic SDLC understanding',
      'Familiarity with testing types',
      'Knowledge of test case creation',
      'Defect tracking awareness'
    ],
    whoIsFor:[
      'Aspiring software testers',
      'QA professionals seeking skill enhancement',
      'Software developers interested in testing',
      'Quality assurance engineers',
      'Software quality enthusiasts'
    ],
    curriculum:[
      { module: 'Manual Testing', lessons: [
        'Software Testing Fundamentals',
        'SDLC Models',
        'STLC Understanding',
        'Test Case Design',
        'Defect Management'
      ] },
      { module: 'Selenium', lessons: [
        'Object Identification',
        'Core Java Fundamentals',
        'WebDriver Testing',
        'Framework Design',
        'Third-party Tools Integration'
      ] },
      { module: 'Tools', lessons: [
        'Maven',
        'JIRA',
        'Zephyr Scale',
        'GitHub',
        'Jenkins',
        'API',
        'Cucumber',
        'Log4j'
      ] }
    ],
    skills:[
      'Manual test execution',
      'Selenium automation',
      'TestNG and JUnit frameworks',
      'JIRA project management',
      'API testing',
      'Cucumber BDD framework',
      'Jenkins CI/CD integration'
    ],
  },
  {
    id:87, title:'DevOps Certification Course', slug:'devops-certification-course-online-training', visible: false, category:'DevOps', rating:4.5, reviews:0, image:'https://images.nareshit.com/devops-certification-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive online DevOps training covering essential tools, methodologies, and industry best practices including CI/CD pipelines, containerization, and infrastructure automation for modern software development.',
    trainer:'Raham sir', trainerBio:'Instructor praised for delivering impressive and excellent content on Jenkins, Docker, Ansible, Kubernetes, and Terraform.', trainerExp:'', trainerStudents:'',
    duration:'', level:'Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🏆', label: 'DevOps Certification' },
      { icon: '🔄', label: 'CI/CD with Jenkins' },
      { icon: '🐳', label: 'Docker & Kubernetes' },
      { icon: '📜', label: 'DevOps Certification Prep' },
      { icon: '🏗️', label: 'Terraform & Ansible' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand DevOps principles and architecture',
      'Implement CI/CD pipelines with Jenkins',
      'Master containerization using Docker and Kubernetes',
      'Automate infrastructure provisioning with Terraform and Ansible',
      'Deploy monitoring solutions with Prometheus and Grafana',
      'Prepare for industry-recognized DevOps certifications'
    ],
    requirements:[
      'Basic SDLC understanding',
      'Git familiarity',
      'CI/CD concepts knowledge',
      'Docker awareness',
      'AWS/Azure platform exposure',
      'CLI command line experience'
    ],
    whoIsFor:[
      'Software developers',
      'System administrators',
      'Operations engineers',
      'QA professionals',
      'IT managers',
      'DevOps practitioners'
    ],
    curriculum:[
      { module: 'Introduction', lessons: [
        'SDLC',
        'Agile',
        'DevOps lifecycle',
        'Tools'
      ] },
      { module: 'AWS Cloud', lessons: [
        'EC2',
        'VPC',
        'S3',
        'RDS',
        'IAM'
      ] },
      { module: 'Git & GitHub', lessons: [
        'Version control',
        'Branching strategies',
        'Repositories'
      ] },
      { module: 'Docker', lessons: [
        'Containerization',
        'Images',
        'Networks',
        'Registries'
      ] },
      { module: 'Kubernetes', lessons: [
        'Orchestration',
        'Deployment'
      ] },
      { module: 'Jenkins', lessons: [
        'CI/CD pipelines',
        'Architecture',
        'Plugins'
      ] },
      { module: 'Ansible', lessons: [
        'Configuration management',
        'Playbooks',
        'Roles'
      ] },
      { module: 'Terraform', lessons: [
        'Infrastructure as Code',
        'State management'
      ] },
      { module: 'Monitoring', lessons: [
        'Prometheus',
        'Grafana',
        'Nagios'
      ] }
    ],
    skills:[
      'Git and GitHub',
      'Docker and Kubernetes',
      'Jenkins',
      'Terraform',
      'Ansible',
      'AWS',
      'Prometheus',
      'Grafana',
      'CI/CD implementation',
      'Infrastructure automation'
    ],
  },
  {
    id:88, title:'Python Developer', slug:'python-developer-certification-online-training', visible: false, category:'Programming', rating:5, reviews:0, image:'https://images.nareshit.com/python-developer-certification-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive online training covering Python fundamentals to advanced concepts including web development, data science, and automation with hands-on projects.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Advanced', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🐍', label: 'Python Developer Certification' },
      { icon: '🌐', label: 'Django & Flask Web Dev' },
      { icon: '📊', label: 'Data Science Integration' },
      { icon: '📜', label: 'Python Certification Prep' },
      { icon: '⚙️', label: 'Automation Scripting' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Write efficient Python code',
      'Understand data structures and algorithms',
      'Work with libraries like NumPy and Pandas',
      'Build web applications with Django/Flask',
      'Apply machine learning and data science',
      'Automate tasks and system administration'
    ],
    requirements:[
      'Basic computer operations',
      'Familiarity with text editors/IDEs',
      'Basic mathematics and logical thinking'
    ],
    whoIsFor:[
      'Beginners with no programming experience',
      'Computer science students',
      'Career switchers',
      'Software developers expanding skillsets',
      'Data analysts and scientists',
      'System administrators'
    ],
    curriculum:[
      { module: 'Introduction to Python', lessons: [
        'History',
        'Features',
        'Implementations'
      ] },
      { module: 'Python Language Fundamentals', lessons: [
        'Literals',
        'Variables',
        'Syntax'
      ] },
      { module: 'Data Types in Python', lessons: [
        'Classification',
        'Properties'
      ] },
      { module: 'Object Oriented Programming', lessons: [
        'Classes',
        'Inheritance',
        'Polymorphism'
      ] },
      { module: 'Exception Handling', lessons: [
        'Error types',
        'Custom exceptions'
      ] },
      { module: 'File Handling', lessons: [
        'Text/Binary files',
        'CSV',
        'JSON'
      ] },
      { module: 'Database Communications', lessons: [
        'DBMS',
        'Queries',
        'Transactions'
      ] }
    ],
    skills:[
      'Python programming',
      'Data structures and algorithms',
      'Web development',
      'Database management',
      'Object-oriented programming',
      'Exception handling',
      'File I/O operations',
      'GUI development with Tkinter'
    ],
  },
  {
    id:89, title:'Campus Recruitment Training (CRT)', slug:'crt-online-training', visible: false, category:'Placement Assistance', rating:4.5, reviews:0, image:'https://images.nareshit.com/crt-online-training-nareshit.jpg',
    enriched:true,
    description:'Campus Recruitment Training (CRT) prepares students and graduates for competitive job markets through aptitude tests, technical interviews, group discussions, and personal interview coaching.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🎯', label: 'Campus Recruitment Prep' },
      { icon: '🧩', label: 'Aptitude & Reasoning' },
      { icon: '💬', label: 'Group Discussions' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🎤', label: 'Interview Coaching' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Aptitude skills development',
      'Technical skills enhancement',
      'Effective communication',
      'Problem-solving abilities',
      'Group discussion strategies',
      'Interview techniques and resume building'
    ],
    requirements:[
      'Basic understanding of recruitment processes',
      'Familiarity with job market trends',
      'Knowledge of effective communication skills'
    ],
    whoIsFor:[
      'College students',
      'Recent graduates',
      'Engineering graduates',
      'MBA aspirants',
      'Career changers',
      'Job seekers'
    ],
    curriculum:[
      { module: 'Arithmetic', lessons: [
        'Ratio and Proportion',
        'Problems on Ages',
        'Percentages',
        'Profit & Loss',
        'Time & Work',
        'Data Interpretation'
      ] },
      { module: 'Logical Reasoning', lessons: [
        'Number Series',
        'Coding & Decoding',
        'Seating Arrangement',
        'Analytical Puzzles'
      ] },
      { module: 'Verbal Ability', lessons: [
        'Spotting Errors',
        'Reading Comprehension',
        'Vocabulary'
      ] },
      { module: 'Soft Skills', lessons: [
        'Resume Preparation',
        'Group Discussions',
        'Interview Skills'
      ] }
    ],
    skills:[
      'Quantitative reasoning',
      'Logical reasoning',
      'Verbal communication',
      'Technical knowledge',
      'Resume building',
      'Interview etiquette'
    ],
  },
  {
    id:90, title:'MuleSoft', slug:'mulesoft-online-training', visible: false, category:'Mulesoft', rating:4.5, reviews:0, image:'https://images.nareshit.com/mulesoft-online-training-nareshit.jpg',
    enriched:true,
    description:'MuleSoft course equips participants with skills for API development, data integration, and application connectivity using Anypoint Platform. Hands-on experience in designing integration solutions.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🔗', label: 'MuleSoft Anypoint Platform' },
      { icon: '🌐', label: 'API Design & Management' },
      { icon: '🔄', label: 'Data Integration' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '☁️', label: 'CloudHub Deployment' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'API development and management',
      'Data transformation and integration',
      'Flow design and message processing',
      'Error handling and logging strategies',
      'Security best practices in integrations',
      'Monitoring and troubleshooting applications'
    ],
    requirements:[
      'Basic integration concepts understanding',
      'Familiarity with REST and SOAP web services',
      'Knowledge of XML and JSON formats',
      'Programming fundamentals (variables, loops)',
      'IDE navigation experience'
    ],
    whoIsFor:[
      'Integration developers',
      'API developers',
      'System architects',
      'Business analysts',
      'IT professionals',
      'Web developers',
      'Computer science students',
      'Integration enthusiasts'
    ],
    curriculum:[
      { module: 'Introducing MuleSoft', lessons: [
        'Introduction to MuleSoft',
        'Platform features',
        'Fundamentals'
      ] },
      { module: 'Overview of Application Integration', lessons: [
        'Messaging Patterns',
        'XML/SOAP/REST',
        'Service Component Architecture'
      ] },
      { module: 'Mule API & ESB', lessons: [
        'API concepts',
        'Mule ESB architecture',
        'Flow types',
        'Message structure'
      ] },
      { module: 'Core Components', lessons: [
        'Flows and SubFlows',
        'Logger',
        'Set Variable',
        'Set Payload'
      ] },
      { module: 'Working with Connectors', lessons: [
        'HTTP/HTTPS',
        'Database',
        'File',
        'FTP/SFTP',
        'Salesforce'
      ] },
      { module: 'DataWeave Transformations', lessons: [
        'XML to JSON conversion',
        'DataWeave selectors',
        'Custom functions'
      ] },
      { module: 'Error Handling', lessons: [
        'Exception strategies',
        'Try Scope',
        'Error propagate/continue'
      ] },
      { module: 'API Management', lessons: [
        'REST API design',
        'RAML',
        'API policies',
        'API Manager'
      ] },
      { module: 'CloudHub & Deployment', lessons: [
        'CloudHub features',
        'Runtime Manager',
        'Cloud/On-premise/Hybrid deployment'
      ] }
    ],
    skills:[
      'API design and development',
      'MuleSoft Anypoint Platform',
      'Data transformation',
      'Integration architecture',
      'Error handling',
      'CloudHub deployment',
      'RAML design',
      'API security',
      'Flow design'
    ],
  },
  {
    id:91, title:'Manual Testing', slug:'manual-testing-online-training', visible: false, category:'Software Testing', rating:4.5, reviews:0, image:'https://images.nareshit.com/Manual Test.jpg',
    enriched:true,
    description:'Manual testing course covering QA methodologies, test case design, defect reporting, and regression testing for software quality assurance professionals.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '🧪', label: 'Manual Testing Fundamentals' },
      { icon: '🐛', label: 'Defect Reporting' },
      { icon: '🔄', label: 'SDLC & STLC' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '📋', label: 'JIRA Tool Proficiency' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Understand manual testing fundamentals',
      'Learn testing techniques and methodologies',
      'Gain proficiency in test case design and execution',
      'Master defect reporting and tracking',
      'Acquire regression testing skills',
      'Prepare for entry-level QA roles'
    ],
    requirements:[
      'Basic SDLC understanding',
      'Software testing fundamentals familiarity',
      'Knowledge of testing types',
      'Attention to detail'
    ],
    whoIsFor:[
      'Aspiring software testers',
      'Quality assurance professionals',
      'Software developers',
      'Project managers',
      'Computer science students',
      'Non-technical professionals transitioning to QA'
    ],
    curriculum:[
      { module: 'Software Testing Fundamentals', lessons: [
        'Introduction to Software Testing',
        'Software Development Process',
        'QA Process Definition',
        'Testing Scope and Objectives'
      ] },
      { module: 'SDLC', lessons: [
        'Waterfall Model',
        'V Model',
        'Agile Model',
        'RAD Model'
      ] },
      { module: 'STLC', lessons: [
        'Requirements Specification',
        'Test Plan Preparation'
      ] },
      { module: 'Test Engineer Responsibilities', lessons: [
        'Test Scenarios',
        'Test Cases',
        'Testing Methods and Types'
      ] },
      { module: 'Defect Management', lessons: [
        'JIRA Tool Usage',
        'Status Reports',
        'Test Closure'
      ] }
    ],
    skills:[
      'Test case design',
      'Defect reporting',
      'Regression testing',
      'Test execution',
      'JIRA proficiency',
      'Test documentation'
    ],
  },
  {
    id:92, title:'Unix / Linux', slug:'linux-administration-online-training', visible: false, category:'Operating System', rating:4.5, reviews:0, image:'https://images.nareshit.com/unix-linux-online-training-nareshit.jpg',
    enriched:true,
    description:'Comprehensive Unix/Linux operating systems training covering file systems, user management, shell scripting, and system administration for server environments.',
    trainer:'Mr. Imran', trainerBio:'Industry professional offering practical, real-world insights into Unix/Linux systems.', trainerExp:'', trainerStudents:'',
    duration:'60 days', level:'Beginner', mode:'Online', startDate:'May 29, 2026',
    highlights:[
      { icon: '🐧', label: 'Unix/Linux Administration' },
      { icon: '💻', label: 'Shell Scripting' },
      { icon: '🔒', label: 'Permissions & ACLs' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '💾', label: 'LVM & Backup' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Unix/Linux file system structure',
      'User and group management',
      'Shell scripting for automation',
      'Process control and monitoring',
      'System administration tasks',
      'Network configuration and troubleshooting'
    ],
    requirements:[
      'Basic computer literacy',
      'Familiarity with command-line interface',
      'Understanding of file systems and directories',
      'Knowledge of text editors'
    ],
    whoIsFor:[
      'System administrators',
      'Software developers',
      'IT professionals',
      'Students and graduates',
      'Tech enthusiasts',
      'Web developers',
      'Database administrators'
    ],
    curriculum:[
      { module: 'Introduction to Unix/Linux', lessons: [
        'OS basics',
        'UNIX history',
        'Linux flavors',
        'OS installation'
      ] },
      { module: 'Basics and Advance Unix/Linux', lessons: [
        'File system',
        'Basic commands',
        'Advanced commands',
        'Filter commands'
      ] },
      { module: 'User & Group Administration', lessons: [
        'Creating/deleting users',
        'Group management',
        'Network configuration'
      ] },
      { module: 'Disk Utilities', lessons: [
        'Mount/Umount',
        'Process monitoring',
        'Networking commands'
      ] },
      { module: 'Boot Process', lessons: [
        'RHEL 6/7 boot process',
        'GRUB/LILO',
        'Kernel parameters'
      ] },
      { module: 'Permissions and ACLs', lessons: [
        'Basic permissions',
        'File system access control',
        'Special permissions'
      ] },
      { module: 'Logical Volume Management', lessons: [
        'LVM components and configuration'
      ] },
      { module: 'Backup and Restore', lessons: [
        'tar',
        'gzip',
        'SCP/SSH',
        'Remote backup'
      ] }
    ],
    skills:[
      'Linux command-line proficiency',
      'User and group administration',
      'Shell scripting',
      'System monitoring and troubleshooting',
      'Network configuration',
      'File system management',
      'Security and permissions'
    ],
  },
  {
    id:93, title:'Amazon Web Services (AWS)', slug:'aws-online-training', visible: false, category:'Cloud Computing', rating:4.5, reviews:0, image:'https://images.nareshit.com/aws-online-training-nareshit.jpg',
    enriched:true,
    description:'AWS Online Training covers cloud computing fundamentals, EC2, storage, networking, databases, and security on Amazon\'s widely-used platform for building scalable applications.',
    trainer:'', trainerBio:'', trainerExp:'', trainerStudents:'',
    duration:'', level:'Beginner to Intermediate', mode:'Online / Offline', startDate:'',
    highlights:[
      { icon: '☁️', label: 'AWS Core Services' },
      { icon: '🖥️', label: 'EC2 & Auto Scaling' },
      { icon: '🗄️', label: 'S3 & RDS Storage' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🔒', label: 'VPC & Security' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master AWS services and cloud architecture',
      'Deploy and manage EC2 instances and storage solutions',
      'Implement security measures and optimize costs',
      'Set up databases with RDS and DynamoDB',
      'Configure networking with VPC and Route 53',
      'Pursue AWS certifications'
    ],
    requirements:[
      'Basic cloud computing concepts',
      'Familiarity with networking concepts',
      'Basic Linux/Windows OS knowledge',
      'Fundamental database concepts',
      'Basic command line skills'
    ],
    whoIsFor:[
      'Software Developers',
      'System Administrators',
      'IT Managers',
      'Data Engineers/Scientists',
      'Entrepreneurs and Startups',
      'Computer Science Students'
    ],
    curriculum:[
      { module: 'Cloud Computing Overview', lessons: [
        'Why Cloud and What is Cloud Computing',
        'Service Models',
        'Deployment models'
      ] },
      { module: 'Linux Introduction', lessons: [
        'Linux Commands',
        'File System',
        'Process Management'
      ] },
      { module: 'Elastic Compute Cloud (EC2)', lessons: [
        'EC2 Instance Launch',
        'Security Groups',
        'Auto Scaling Groups'
      ] },
      { module: 'VPC (Virtual Private Cloud)', lessons: [
        'VPC Configuration',
        'Subnets',
        'NAT Gateways',
        'VPC Peering'
      ] },
      { module: 'AWS Storage', lessons: [
        'S3 Buckets',
        'Storage Classes',
        'Encryption',
        'Lifecycle Management'
      ] },
      { module: 'RDS (Relational Database Services)', lessons: [
        'Database Configuration',
        'Backups',
        'Multi-AZ',
        'Read Replicas'
      ] },
      { module: 'DynamoDB', lessons: [
        'Table Creation',
        'Consistency Models',
        'Capacity Units'
      ] },
      { module: 'AWS Lambda Serverless', lessons: [
        'Lambda Configuration',
        'Lambda Layers'
      ] },
      { module: 'Infrastructure As Code', lessons: [
        'CloudFormation',
        'Terraform'
      ] }
    ],
    skills:[
      'EC2 and compute management',
      'S3 and cloud storage',
      'VPC networking',
      'Database administration (RDS/DynamoDB)',
      'Infrastructure as Code',
      'AWS security implementation'
    ],
  },
  {
    id:94, title:'Full Stack Java', slug:'full-stack-java-online-training', visible: true, category:'Full Stack', rating:5, reviews:0, image:'https://images.nareshit.com/Java.jpg',
    enriched:true,
    description:'Comprehensive full-stack development course covering Java programming, front-end technologies (HTML, CSS, JavaScript, React), back-end frameworks (Spring Boot), and database management for building end-to-end web applications.',
    trainer:'Mr. Mahendra', trainerBio:'Industry expert instructor providing guidance in full-stack Java development.', trainerExp:'', trainerStudents:'',
    duration:'6 months', level:'Beginner', mode:'Online / Offline / Classroom', startDate:'June 1, 2026',
    highlights:[
      { icon: '☕', label: 'Full Stack Java' },
      { icon: '⚛️', label: 'React Frontend' },
      { icon: '🌿', label: 'Spring Boot Backend' },
      { icon: '📜', label: 'Industry Certificate' },
      { icon: '🗄️', label: 'SQL & Hibernate' },
      { icon: '💼', label: 'Placement Assistance' }
    ],
    whatYouLearn:[
      'Master Java programming fundamentals',
      'Build responsive front-end interfaces with React',
      'Develop server-side applications using Spring Boot',
      'Design and manage databases with SQL and Hibernate',
      'Deploy scalable web applications',
      'Implement security and best practices'
    ],
    requirements:[
      'Basic programming knowledge',
      'Java fundamentals',
      'Web technology basics',
      'Database familiarity',
      'Command-line skills'
    ],
    whoIsFor:[
      'Programming beginners',
      'Java developers expanding skills',
      'Web developers transitioning to Java',
      'Computer science students'
    ],
    curriculum:[
      { module: 'Core Java', lessons: [
        'Installation',
        'Data Types',
        'OOPS',
        'Exception Handling',
        'Collection Framework'
      ] },
      { module: 'Advanced Java', lessons: [
        'JDBC',
        'Servlet',
        'JSP'
      ] },
      { module: 'Frontend Technologies', lessons: [
        'HTML',
        'CSS',
        'JavaScript',
        'React'
      ] },
      { module: 'Spring Boot & Microservices', lessons: [
        'REST APIs',
        'Security',
        'Database Integration'
      ] },
      { module: 'Database Management', lessons: [
        'Oracle',
        'SQL',
        'PL/SQL'
      ] }
    ],
    skills:[
      'Java programming',
      'React development',
      'Spring Boot',
      'REST APIs',
      'SQL',
      'Microservices architecture',
      'Docker',
      'Git version control',
      'Security implementation'
    ],
  },
]
