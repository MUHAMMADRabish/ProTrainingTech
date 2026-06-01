import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Trainers.css'

// ── Trainer data (12 cards) ───────────────────────────────────────────────────
const TRAINERS = [
  {
    id: 1,
    name: 'Alex Carter',
    title: 'Lead Java & Full Stack Trainer',
    specialization: 'Java Full Stack Development',
    category: 'Full Stack',
    experience: 12,
    courses: 8,
    rating: 4.9,
    students: 3200,
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'Microservices'],
    bio: 'Alex Carter is one of India\'s most sought-after Java trainers with 12 years of enterprise development experience at TCS and Wipro. He has a passion for simplifying complex concepts and has guided over 3,200 students into successful software careers. His teaching style blends deep theory with hands-on coding so learners leave every session ready to build real applications.',
    skills: ['Core Java', 'Spring Boot', 'Hibernate/JPA', 'React.js', 'MySQL', 'REST APIs', 'Microservices', 'Docker', 'AWS EC2', 'Git & CI/CD'],
    coursesTaught: ['Java Full Stack Development', 'Core Java Masterclass', 'Spring Boot & Microservices', 'Java for Beginners', 'Advanced Java EE'],
  },
  {
    id: 2,
    name: 'Suresh Reddy',
    title: 'Senior Python & Django Trainer',
    specialization: 'Python Full Stack Development',
    category: 'Full Stack',
    experience: 10,
    courses: 6,
    rating: 4.8,
    students: 2800,
    colorA: '#e05c2a', colorB: '#c04e20',
    tags: ['Python', 'Django', 'React', 'PostgreSQL', 'REST APIs'],
    bio: 'Suresh Reddy brings 10 years of Python development experience spanning fintech and e-commerce domains. He has built production systems for companies like Infosys and Cognizant and translates that real-world expertise directly into the classroom. Students consistently praise his ability to make web frameworks feel intuitive from day one.',
    skills: ['Python 3.x', 'Django', 'Flask', 'React.js', 'PostgreSQL', 'Redis', 'Celery', 'REST APIs', 'Docker', 'Nginx'],
    coursesTaught: ['Python Full Stack Development', 'Django Deep Dive', 'Python for Data Analysis', 'REST API Design with Django', 'Python Scripting Bootcamp'],
  },
  {
    id: 3,
    name: 'Ravi Shankar',
    title: 'DevOps & Cloud Engineering Trainer',
    specialization: 'DevOps & Cloud Infrastructure',
    category: 'DevOps',
    experience: 9,
    courses: 5,
    rating: 4.8,
    students: 1900,
    colorA: '#1a5276', colorB: '#154360',
    tags: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'],
    bio: 'Ravi Shankar spent 9 years as a DevOps architect at HCL Technologies, where he led cloud migration projects for Fortune 500 clients. He is certified in AWS and Kubernetes and teaches with a lab-first methodology — students configure real pipelines, not toy examples. His students go on to roles at Google, Amazon, and leading Indian SaaS companies.',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'AWS', 'Terraform', 'Ansible', 'Prometheus', 'Grafana', 'Linux Administration'],
    coursesTaught: ['DevOps with AWS', 'Kubernetes Masterclass', 'CI/CD Pipeline Design', 'Infrastructure as Code (Terraform)', 'Linux for DevOps'],
  },
  {
    id: 4,
    name: 'Dr. Ramesh Iyer',
    title: 'Data Science & ML Research Trainer',
    specialization: 'Data Science & Machine Learning',
    category: 'Data Science',
    experience: 15,
    courses: 7,
    rating: 4.9,
    students: 2600,
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['Python', 'ML', 'TensorFlow', 'Pandas', 'Power BI'],
    bio: 'Dr. Ramesh Iyer holds a PhD in Computational Intelligence from IIT Virginia and has 15 years of research and industry experience. He has published 22 peer-reviewed papers and consulted for ISRO and NASSCOM on AI initiatives. At Pro Training Tech he makes advanced machine learning approachable, taking learners from Python basics to deploying production ML models in six months.',
    skills: ['Python', 'NumPy & Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Power BI', 'SQL', 'Statistics', 'Feature Engineering', 'Model Deployment (FastAPI)'],
    coursesTaught: ['Data Science & ML', 'Deep Learning with TensorFlow', 'Power BI for Analysts', 'Statistics for Data Science', 'Applied NLP', 'ML Model Deployment'],
  },
  {
    id: 5,
    name: 'Anil Gupta',
    title: 'AWS Solutions Architect Trainer',
    specialization: 'AWS & Cloud Solutions',
    category: 'Cloud',
    experience: 10,
    courses: 5,
    rating: 4.9,
    students: 2100,
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudFormation'],
    bio: 'Anil Gupta is an AWS Certified Solutions Architect – Professional and an AWS Certified DevOps Engineer with a decade of cloud consulting experience. He has architected cloud solutions for banking, healthcare, and retail clients across South Asia. His trainings are scenario-driven — students architect, deploy, and secure real-world cloud environments from day one.',
    skills: ['AWS EC2 & VPC', 'S3 & CloudFront', 'RDS & DynamoDB', 'Lambda & API Gateway', 'CloudFormation', 'IAM & Security', 'EKS', 'CloudWatch', 'Route 53', 'Cost Optimisation'],
    coursesTaught: ['AWS Cloud Solutions Architect', 'AWS DevOps Professional', 'Serverless on AWS', 'AWS Security Best Practices', 'Cloud Cost Optimisation'],
  },
  {
    id: 6,
    name: 'Meena Kumari',
    title: 'QA & Software Testing Trainer',
    specialization: 'Manual & Automation Testing',
    category: 'Testing',
    experience: 8,
    courses: 5,
    rating: 4.8,
    students: 1750,
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Manual Testing', 'Selenium', 'TestNG', 'JIRA', 'Agile'],
    bio: 'Meena Kumari has 8 years of QA engineering experience at Mphasis and Tech Mahindra, where she led testing teams across banking and insurance projects. She is ISTQB certified and covers both manual and automation testing so students graduate with a complete QA toolkit. Her training includes live bug-reporting exercises on real applications.',
    skills: ['Manual Testing', 'Test Case Design', 'Selenium WebDriver', 'TestNG', 'Cucumber BDD', 'JIRA', 'Agile/Scrum', 'API Testing (Postman)', 'Performance Testing (JMeter)', 'SQL for Testers'],
    coursesTaught: ['Software Testing (Manual)', 'Selenium with Java', 'Agile Testing & Scrum', 'API Testing with Postman', 'Performance Testing with JMeter'],
  },
  {
    id: 7,
    name: 'Vijay Reddy',
    title: 'MERN Stack & React Trainer',
    specialization: 'MERN Stack Development',
    category: 'Full Stack',
    experience: 7,
    courses: 4,
    rating: 4.8,
    students: 1600,
    colorA: '#2e7d32', colorB: '#388e3c',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    bio: 'Vijay Reddy is a full-stack JavaScript specialist who spent 7 years building high-traffic consumer apps at startups and product companies. He is passionate about modern JavaScript and state management patterns and runs one of the most engaging live-coding sessions at Pro Training Tech. Students build two complete MERN applications during his programme.',
    skills: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'GraphQL', 'JWT Auth', 'Socket.io', 'Vercel & Netlify Deployment'],
    coursesTaught: ['MERN Stack Development', 'React.js Masterclass', 'Node.js & Express APIs', 'GraphQL with React', 'JavaScript ES6+ Deep Dive'],
  },
  {
    id: 8,
    name: 'Pradeep Singh',
    title: 'Azure & DevOps Trainer',
    specialization: 'Microsoft Azure & Azure DevOps',
    category: 'DevOps',
    experience: 8,
    courses: 4,
    rating: 4.7,
    students: 1450,
    colorA: '#1565c0', colorB: '#1976d2',
    tags: ['Azure', 'Azure DevOps', 'AKS', 'ARM Templates', 'GitHub Actions'],
    bio: 'Pradeep Singh is a Microsoft Certified Azure Solutions Architect with 8 years of enterprise Azure deployments at Capgemini and L&T Infotech. He specialises in hybrid-cloud architecture and Azure DevOps pipelines and has trained teams at leading Indian banks. His classes are structured around real AZ-900 to AZ-400 exam readiness alongside practical project work.',
    skills: ['Microsoft Azure Services', 'Azure DevOps Pipelines', 'AKS (Azure Kubernetes)', 'ARM & Bicep Templates', 'Azure Monitor', 'GitHub Actions', 'Power Automate', 'Azure AD', 'Cosmos DB', 'Azure Functions'],
    coursesTaught: ['DevOps with Azure', 'Azure Cloud Solutions', 'AKS & Container Orchestration', 'Azure for Beginners', 'Azure Security & Compliance'],
  },
  {
    id: 9,
    name: 'Srikanth Reddy',
    title: 'Selenium & Test Automation Trainer',
    specialization: 'Selenium & Automation Testing',
    category: 'Testing',
    experience: 7,
    courses: 4,
    rating: 4.7,
    students: 1300,
    colorA: '#e05c2a', colorB: '#c04e22',
    tags: ['Selenium', 'Java', 'TestNG', 'Maven', 'Appium'],
    bio: 'Srikanth Reddy has 7 years of test automation experience at Hexaware and UST Global, specialising in Selenium WebDriver frameworks and mobile test automation with Appium. He is known for his framework-from-scratch approach — students build a fully reusable Page Object Model test suite during training, which many use directly in their first job.',
    skills: ['Selenium WebDriver', 'Java for Automation', 'TestNG & JUnit', 'Maven & Gradle', 'Appium', 'Page Object Model', 'Data-Driven Testing', 'Extent Reports', 'Jenkins Integration', 'REST Assured'],
    coursesTaught: ['Selenium with Java', 'Appium Mobile Testing', 'Test Framework Design', 'REST Assured API Testing', 'Advanced Selenium Patterns'],
  },
  {
    id: 10,
    name: 'Dr. Anitha Rao',
    title: 'AI & Deep Learning Trainer',
    specialization: 'Artificial Intelligence & Deep Learning',
    category: 'AI / ML',
    experience: 12,
    courses: 6,
    rating: 4.7,
    students: 1800,
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['AI', 'Deep Learning', 'PyTorch', 'NLP', 'Computer Vision'],
    bio: 'Dr. Anitha Rao holds a PhD in Artificial Intelligence from University of Virginia and has 12 years of research experience in NLP and computer vision. She has collaborated with Microsoft Research India and has filed three AI patents. At Pro Training Tech she bridges academia and industry, helping students understand both the mathematical foundations and practical deployment of AI systems.',
    skills: ['Deep Learning', 'PyTorch', 'TensorFlow', 'Computer Vision (OpenCV)', 'Natural Language Processing', 'Transformers & BERT', 'GANs', 'Reinforcement Learning', 'MLOps', 'ONNX Deployment'],
    coursesTaught: ['Artificial Intelligence Programme', 'Deep Learning with PyTorch', 'Computer Vision Bootcamp', 'NLP & Transformers', 'MLOps & Model Serving', 'Generative AI Fundamentals'],
  },
  {
    id: 11,
    name: 'Suresh Babu',
    title: '.NET & C# Full Stack Trainer',
    specialization: '.NET Full Stack Development',
    category: 'Full Stack',
    experience: 11,
    courses: 6,
    rating: 4.7,
    students: 2000,
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['.NET', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure'],
    bio: 'Suresh Babu has 11 years of .NET development experience at TCS and Accenture, building enterprise applications for banking and healthcare clients in the USA and UK. He is a Microsoft Certified Developer and covers the full .NET stack — from C# fundamentals to ASP.NET Core APIs to Azure deployment — giving students a complete enterprise-grade skillset.',
    skills: ['C# & .NET 8', 'ASP.NET Core Web API', 'Entity Framework Core', 'SQL Server', 'Azure App Service', 'Blazor', 'SignalR', 'MVC Pattern', 'LINQ', 'Unit Testing (xUnit)'],
    coursesTaught: ['.NET Full Stack Development', 'C# Masterclass', 'ASP.NET Core APIs', 'SQL Server for Developers', 'Azure for .NET Developers'],
  },
  {
    id: 12,
    name: 'Kavitha Sharma',
    title: 'React & UI/UX Frontend Trainer',
    specialization: 'React.js & UI/UX Engineering',
    category: 'Full Stack',
    experience: 6,
    courses: 4,
    rating: 4.8,
    students: 1400,
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Next.js'],
    bio: 'Kavitha Sharma is a frontend engineer with 6 years of product experience building design systems and component libraries used by millions of users. She bridges design and engineering, teaching both Figma prototyping and React implementation so students can own the full frontend workflow. Her energy and live-design sessions are legendary among alumni.',
    skills: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Figma', 'Storybook', 'React Query', 'Zustand', 'Accessibility (WCAG)', 'Performance Optimisation'],
    coursesTaught: ['React.js Masterclass', 'Next.js Full Stack', 'UI/UX Design with Figma', 'TypeScript for React Developers', 'Frontend Performance Engineering'],
  },
  {
    id: 13,
    name: 'Mr. K V Rao',
    title: 'Python & Java Full Stack Trainer',
    specialization: 'Python Full Stack & Java Development',
    category: 'Full Stack',
    experience: 14,
    courses: 7,
    rating: 4.9,
    students: 4200,
    colorA: '#1e3a5f', colorB: '#2d5a8e',
    tags: ['Python', 'Java', 'Django', 'Spring Boot', 'REST APIs'],
    bio: 'Mr. K V Rao is one of the most highly rated trainers at Pro Training Tech with 14 years of industry and teaching experience across Python and Java. His structured, beginner-friendly teaching approach makes even complex backend development feel approachable. Students consistently achieve placements as Python and Java developers within months of completing his courses.',
    skills: ['Python 3.x', 'Core Java', 'Django', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MySQL', 'Git', 'Docker', 'Linux'],
    coursesTaught: ['Python Full Stack Development', 'Python Programming', 'Core Java', 'Django with REST API', 'Python for Data Analysis'],
  },
  {
    id: 14,
    name: 'Mr. Omkar',
    title: 'Data Science & AI Trainer',
    specialization: 'Data Science, ML & Artificial Intelligence',
    category: 'Data Science',
    experience: 10,
    courses: 6,
    rating: 4.9,
    students: 3600,
    colorA: '#6a1b9a', colorB: '#8e24aa',
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'AI', 'Pandas'],
    bio: 'Mr. Omkar brings 10 years of data science and AI experience from industry projects across healthcare, finance, and retail. His teaching approach focuses on building job-ready knowledge — students complete real ML projects from scratch and graduate with a strong portfolio. His placement support record is among the best in the institute.',
    skills: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Feature Engineering', 'Power BI', 'SQL', 'Model Deployment'],
    coursesTaught: ['Data Science with AI', 'Full Stack Data Science Program', 'Machine Learning Bootcamp', 'Deep Learning with TensorFlow', 'Applied AI Projects'],
  },
  {
    id: 15,
    name: 'Mr. Nataraj',
    title: 'Core Java & J2EE Trainer',
    specialization: 'Java / J2EE Development',
    category: 'Full Stack',
    experience: 16,
    courses: 5,
    rating: 4.8,
    students: 5800,
    colorA: '#e05c2a', colorB: '#f07040',
    tags: ['Core Java', 'J2EE', 'Servlets', 'JSP', 'Hibernate'],
    bio: 'Mr. Nataraj has 16 years of Java enterprise development experience and is one of the most experienced Java trainers on the team. His deep knowledge of Core Java, J2EE, and enterprise frameworks makes him the go-to trainer for students building strong Java fundamentals. Thousands of Java developers across the country credit their career start to his guidance.',
    skills: ['Core Java', 'Advanced Java', 'J2EE', 'Servlets', 'JSP', 'JDBC', 'Hibernate', 'Spring MVC', 'Design Patterns', 'Git'],
    coursesTaught: ['Core Java', 'Advanced Java', 'J2EE Full Stack', 'Hibernate & Spring MVC', 'Java for Beginners'],
  },
  {
    id: 16,
    name: 'Mr. Karthik',
    title: 'Playwright & Test Automation Trainer',
    specialization: 'Playwright with TypeScript & Test Automation',
    category: 'Testing',
    experience: 7,
    courses: 4,
    rating: 4.9,
    students: 1650,
    colorA: '#1a5276', colorB: '#154360',
    tags: ['Playwright', 'TypeScript', 'Cypress', 'E2E Testing', 'CI/CD'],
    bio: 'Mr. Karthik is a specialist in modern test automation with 7 years of experience delivering high-quality testing frameworks for web applications. He is one of the few trainers in India specialising in Playwright with TypeScript, and his course is consistently among the most popular in the testing category. Students build complete E2E test suites with CI/CD integration.',
    skills: ['Playwright', 'TypeScript', 'JavaScript', 'Cypress', 'Selenium', 'TestNG', 'GitHub Actions', 'Docker', 'REST Assured', 'Page Object Model'],
    coursesTaught: ['Playwright with TypeScript', 'Playwright Automation', 'Selenium with Java', 'Advanced Test Automation', 'CI/CD for Test Engineers'],
  },
]

const CATEGORIES = ['All', 'Full Stack', 'DevOps', 'Data Science', 'Testing', 'Cloud', 'AI / ML', 'Generative AI']

// ── Helpers ───────────────────────────────────────────────────────────────────
function trainerInitials(name) {
  const words = name.replace(/^Dr\.\s*/i, '').trim().split(/\s+/)
  const first = words[0]?.[0] ?? ''
  const last  = words[words.length - 1]?.[0] ?? ''
  return (first + last).toUpperCase()
}

function Stars({ rating }) {
  return (
    <span className="tcard__stars" aria-label={`Rating: ${rating} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`tcard__star${i < Math.round(rating) ? ' tcard__star--on' : ''}`}>★</span>
      ))}
      <span className="tcard__rating-num">{rating}</span>
    </span>
  )
}

// ── Trainer Modal ─────────────────────────────────────────────────────────────
function TrainerModal({ trainer, onClose }) {
  const closeBtnRef = useRef(null)

  useEffect(() => {
    closeBtnRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const initials = trainerInitials(trainer.name)

  return (
    <div
      className="tr-modal__overlay"
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${trainer.name} profile`}
    >
      <div className="tr-modal__box">

        {/* Close */}
        <button
          ref={closeBtnRef}
          className="tr-modal__close"
          onClick={onClose}
          aria-label="Close profile"
        >
          ✕
        </button>

        {/* Header */}
        <div
          className="tr-modal__head"
          style={{ background: `linear-gradient(135deg, ${trainer.colorA} 0%, ${trainer.colorB} 100%)` }}
        >
          <div
            className="tr-modal__avatar"
            style={{ background: `linear-gradient(135deg, rgba(255,255,255,.25), rgba(255,255,255,.1))` }}
          >
            {initials}
          </div>
          <div className="tr-modal__head-info">
            <h2 className="tr-modal__name">{trainer.name}</h2>
            <p className="tr-modal__title">{trainer.title}</p>
            <div className="tr-modal__meta">
              <span className="tr-modal__meta-item">
                <Stars rating={trainer.rating} />
              </span>
              <span className="tr-modal__meta-sep" />
              <span className="tr-modal__meta-item">
                {trainer.students.toLocaleString()} students
              </span>
              <span className="tr-modal__meta-sep" />
              <span className="tr-modal__meta-item">
                {trainer.experience} yrs exp
              </span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="tr-modal__body">

          <div className="tr-modal__section">
            <h3 className="tr-modal__section-label">About</h3>
            <p className="tr-modal__bio">{trainer.bio}</p>
          </div>

          <div className="tr-modal__section">
            <h3 className="tr-modal__section-label">Skills & Technologies</h3>
            <div className="tr-modal__skills">
              {trainer.skills.map(s => (
                <span key={s} className="tr-modal__skill-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="tr-modal__section">
            <h3 className="tr-modal__section-label">Courses Taught</h3>
            <ul className="tr-modal__courses">
              {trainer.coursesTaught.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer actions */}
        <div className="tr-modal__foot">
          <Link
            to="/contact"
            className="btn btn-outline"
            onClick={onClose}
          >
            Contact Trainer
          </Link>
          <Link
            to="/courses"
            className="btn btn-primary"
            onClick={onClose}
          >
            View Courses →
          </Link>
        </div>

      </div>
    </div>
  )
}

// ── Trainer Card ──────────────────────────────────────────────────────────────
function TrainerCard({ trainer, onView }) {
  const initials = trainerInitials(trainer.name)

  return (
    <article className="tcard">

      {/* Header */}
      <div
        className="tcard__head"
        style={{ background: `linear-gradient(135deg, ${trainer.colorA} 0%, ${trainer.colorB} 100%)` }}
      >
        <div className="tcard__avatar">{initials}</div>
        <div className="tcard__head-info">
          <div className="tcard__name">{trainer.name}</div>
          <div className="tcard__specialization">{trainer.specialization}</div>
        </div>
        <span className="tcard__cat-badge">{trainer.category}</span>
      </div>

      {/* Stats */}
      <div className="tcard__stats">
        <div className="tcard__stat">
          <span className="tcard__stat-val">{trainer.experience}</span>
          <span className="tcard__stat-lbl">Yrs Exp</span>
        </div>
        <div className="tcard__stat-div" />
        <div className="tcard__stat">
          <span className="tcard__stat-val">{trainer.courses}</span>
          <span className="tcard__stat-lbl">Courses</span>
        </div>
        <div className="tcard__stat-div" />
        <div className="tcard__stat">
          <span className="tcard__stat-val">{(trainer.students / 1000).toFixed(1)}k</span>
          <span className="tcard__stat-lbl">Students</span>
        </div>
      </div>

      {/* Rating */}
      <div className="tcard__rating-row">
        <Stars rating={trainer.rating} />
      </div>

      {/* Tags */}
      <div className="tcard__tags">
        {trainer.tags.map(t => (
          <span key={t} className="tcard__tag">{t}</span>
        ))}
      </div>

      {/* CTA */}
      <button
        className="tcard__view-btn"
        onClick={() => onView(trainer)}
        aria-label={`View ${trainer.name}'s profile`}
      >
        View Profile →
      </button>

    </article>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Trainers() {
  const [search,         setSearch]         = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTrainer,  setActiveTrainer]  = useState(null)

  const closeModal  = useCallback(() => setActiveTrainer(null), [])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return TRAINERS.filter(t => {
      const matchCat = activeCategory === 'All' || t.category === activeCategory
      const matchQ   = !q
        || t.name.toLowerCase().includes(q)
        || t.specialization.toLowerCase().includes(q)
        || t.category.toLowerCase().includes(q)
        || t.tags.some(tag => tag.toLowerCase().includes(q))
      return matchCat && matchQ
    })
  }, [search, activeCategory])

  const clearAll  = () => { setSearch(''); setActiveCategory('All') }
  const hasFilter = search || activeCategory !== 'All'

  return (
    <div className="tr-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="tr-hero">
        <div className="tr-hero__inner">
          <span className="tr-hero__tag">Meet the Team</span>
          <h1 className="tr-hero__heading">
            Meet Pro Training Tech Trainers:<br /><em>Real-Time Experts &amp; Technology Leaders</em>
          </h1>
          <p className="tr-hero__sub">
            Our trainers are working professionals and technology leaders — not just instructors.
            They bring live project experience, industry war stories, and real career insights
            to every session to make you genuinely job-ready.
          </p>
          <div className="tr-hero__stats">
            {[
              ['140+',  'Expert Faculty'],
              ['8+',    'Avg Years Exp'],
              ['10L+',  'Students Trained'],
              ['4.8',   'Avg Rating'],
            ].map(([v, l]) => (
              <div key={l} className="tr-hero__stat">
                <span className="tr-hero__stat-val">{v}</span>
                <span className="tr-hero__stat-lbl">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tr-hero__wave">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="tr-filter">
        <div className="tr-filter__inner">

          {/* Row 1: search */}
          <div className="tr-search-wrap">
            <span className="tr-search-wrap__icon">🔍</span>
            <input
              type="text"
              className="tr-search-wrap__input"
              placeholder="Search by name, technology, or specialization…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              aria-label="Search trainers"
            />
            {search && (
              <button
                className="tr-search-wrap__clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >✕</button>
            )}
          </div>

          {/* Row 2: category tabs */}
          <div className="tr-cat-tabs" role="tablist" aria-label="Trainer category">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`tr-cat-tab${activeCategory === cat ? ' tr-cat-tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <div className="tr-filter__foot">
          <span className="tr-result-count">
            Showing <strong>{filtered.length}</strong> of {TRAINERS.length} trainer{TRAINERS.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> · <em>{activeCategory}</em></>}
            {search && <> matching "<em>{search}</em>"</>}
          </span>
          {hasFilter && (
            <button className="tr-clear-btn" onClick={clearAll}>
              Clear filters ✕
            </button>
          )}
        </div>
      </div>

      {/* ── TRAINER GRID ── */}
      <section className="tr-list">
        <div className="tr-list__inner">
          {filtered.length > 0 ? (
            <div className="tr-grid">
              {filtered.map(t => (
                <TrainerCard key={t.id} trainer={t} onView={setActiveTrainer} />
              ))}
            </div>
          ) : (
            <div className="tr-empty">
              <span className="tr-empty__icon">🔍</span>
              <h3 className="tr-empty__title">No trainers found</h3>
              <p className="tr-empty__sub">
                Try a different search term or select a different category.
              </p>
              <button className="btn btn-primary" onClick={clearAll}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="tr-cta">
        <div className="tr-cta__inner">
          <div className="tr-cta__text">
            <h2>Want to Become a Pro Training Tech Trainer?</h2>
            <p>
              We're always looking for industry practitioners with a passion for
              teaching. Share your profile and our academic team will reach out.
            </p>
          </div>
          <div className="tr-cta__actions">
            <Link to="/contact" className="btn btn-white">
              Submit Your Profile
            </Link>
            <Link to="/courses" className="btn btn-outline-white">
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p className="footer__tagline">
              One Stop Career Solution
            </p>
            <div className="footer__socials">
              {[['f', 'Facebook'], ['in', 'LinkedIn'], ['◈', 'Instagram'], ['▶', 'YouTube'], ['♪', 'TikTok']].map(([icon, label]) => (
                <a key={label} href="https://protrainingtech.com" className="footer__social" aria-label={label} target="_blank" rel="noreferrer">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/courses', 'Courses'], ['/trainers', 'Our Trainers'],
                ['/new-batches', 'New Batches'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Specializations</h4>
            <ul>
              {CATEGORIES.filter(c => c !== 'All').map(c => (
                <li key={c}>
                  <button className="footer__link-btn" onClick={() => setActiveCategory(c)}>
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--contact">
            <h4>Contact Us</h4>
            <ul>
              <li><span>📍</span><span>1340 Old Chain Bridge Rd, McLean, VA 22101</span></li>
              <li><span>📞</span><span>+1-703-565-1995</span></li>
              <li><span>✉️</span><span>info@protrainingtech.com</span></li>
              <li><span>🕐</span><span>Mon – Sat: 9 AM – 7 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <span>© 2025 Pro Training Tech. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── MODAL ── */}
      {activeTrainer && (
        <TrainerModal trainer={activeTrainer} onClose={closeModal} />
      )}

    </div>
  )
}
