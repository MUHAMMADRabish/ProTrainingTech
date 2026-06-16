import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'HTML & CSS',
    count: 26,
    topics: [
      'HTML Introduction & Document Structure',
      'Headings, Paragraphs & Text Formatting',
      'Lists (ul, ol, li) & Comments',
      'Links (Anchor Tags) & Images',
      'Block vs Inline Elements & Semantic Elements',
      'Tables, Symbols & Miscellaneous HTML',
      'HTML Forms – UI Elements & Attributes',
      'Form Validation',
      'Media Tags (video, audio, picture, iframe, embed)',
      'HTML5 Features (Canvas, SVG, Geolocation)',
      'CSS Basics – Selectors, Colors & Fonts',
      'Box Model (Margin, Padding, Border)',
      'Display Property, Pseudo Selectors & Pseudo Classes',
      'Positioning, Floats & Clearfix',
      'Flexbox',
      'CSS Grid',
      'Transforms, Transitions & Units (vw, vh, em, rem, px)',
      'CSS Animations & Responsive Basics',
      'Media Queries',
      'Filters, Blending Modes, Custom Variables',
      'Project 1 – HTML & CSS',
      'Project 2 – HTML & CSS',
      'SASS – Variables, Nesting, Mixins & Partials',
      'SASS Control Directives, Extend & Sample Usage',
      'Project 3 – HTML & CSS',
      'CSS Architecture Best Practices',
    ]
  },
  {
    title: 'Bootstrap',
    count: 6,
    topics: [
      'Introduction to Bootstrap & Libraries',
      'Bootstrap Grid System',
      'Bootstrap Typography & Colors',
      'Bootstrap Images & Utilities',
      'Bootstrap Components (Navbar, Cards, Modals)',
      'Bootstrap Forms & Validation Styles',
    ]
  },
  {
    title: 'JavaScript (Core & ES6+)',
    count: 28,
    topics: [
      'Introduction to JavaScript & Variables',
      'Data Types & Methods',
      'Operators in JavaScript',
      'Control Statements (if, switch)',
      'Loops (while, do-while, for, for...in, for...of)',
      'Array Methods – forEach, map, filter, reduce',
      'Functions – Declaration, Parameters & Arguments',
      'Scope, Closures & Callbacks',
      'DOM Introduction & Selection',
      'DOM Content Modification & Element Creation',
      'Event Handling (Handlers & Listeners)',
      'Event Propagation & Delegation',
      'Forms in JavaScript',
      'Asynchronous JavaScript & Callback Hell',
      'Promises',
      'HTTP Requests & Fetch API',
      'Async / Await',
      'ES6 – Arrow Functions & Template Literals',
      'ES6 – Destructuring (Array & Object)',
      'ES6 Classes (this, bind, apply, call)',
      'ES6 Modules & Prototypes with Chaining',
      'BOM – Window Object Basics',
      'Local Storage & Session Storage',
      'Cookies',
      'AJAX (XHR, JSON, CORS)',
      'jQuery (Selectors, Events & AJAX)',
      'DOM & API Practice Projects',
      'Complete JavaScript Capstone Project',
    ]
  },
  {
    title: 'React',
    count: 20,
    topics: [
      'Getting Started with React (CRA & Vite)',
      'Components & JSX',
      'State, Props & Event Handling',
      'Advanced React Components',
      'Styling in React (CSS Modules, Styled Components)',
      'Debugging & Error Boundaries',
      'Introduction to Hooks (useState, useEffect)',
      'Advanced Hooks (useRef, useCallback, useMemo)',
      'Higher-Order Components (HOC)',
      'Context API',
      'HTTP Requests & Axios in React',
      'Forms Handling in React',
      'React Router v6 – Navigation & Nested Routes',
      'Form Validation (React Hook Form)',
      'State Management with Redux & Redux Toolkit',
      'Material UI Components',
      'Advanced React Features (Lazy Loading, Suspense)',
      'Unit Testing (Jest & React Testing Library)',
      'Webpack & Build Optimisation',
      'Server-Side Rendering & Cloud Deployment',
    ]
  },
  {
    title: 'Node.js & Express.js',
    count: 18,
    topics: [
      'Introduction to Server-Side Scripting & NPM',
      'Node.js Features, Drawbacks & Environment Setup',
      'Node.js Program Architecture',
      'Node.js Core Modules',
      'Node.js File System & Asynchronous Operations',
      'Nodemailer – Sending Emails with Node.js',
      'Express.js Introduction & Routing',
      'Advanced Express.js – Middleware & Error Handling',
      'Authentication & JWT Security',
      'Security Practices & Input Validation',
      'REST API Development with Express',
      'Testing Express APIs',
      'WebSockets & Real-Time Communication',
      'GraphQL Basics',
      'Caching (Redis Integration)',
      'Streams & Buffers',
      'Microservices Architecture',
      'Deployment with PM2 & Nginx',
    ]
  },
  {
    title: 'MongoDB',
    count: 10,
    topics: [
      'MongoDB Introduction & Installation',
      'CRUD Operations in MongoDB',
      'Mongoose – Schema & Model Definition',
      'Relationships & Population in Mongoose',
      'MongoDB Aggregation Framework',
      'Indexing & Performance Optimisation',
      'Authentication with MongoDB',
      'Express + MongoDB Integration (Full CRUD)',
      'Hands-On Exercises',
      'REST API with Node, Express & MongoDB',
    ]
  },
  {
    title: 'MySQL',
    count: 14,
    topics: [
      'MySQL Introduction & Installation',
      'Primary & Foreign Keys',
      'Constraints (Unique, NOT NULL, Check, Default)',
      'CRUD Operations (Create, Read, Update, Delete)',
      'DDL – CREATE, ALTER, DROP',
      'DML – INSERT, UPDATE, DELETE',
      'DQL – SELECT, WHERE, ORDER BY',
      'SQL Clauses (GROUP BY, HAVING, LIMIT)',
      'Operators (Comparison, Logical, Membership)',
      'Wildcards & LIKE Operator',
      'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
      'SQL Joins (Inner, Left, Right, Full)',
      'Subqueries & Nested Queries',
      'MySQL Integration with Node.js',
    ]
  },
  {
    title: 'DevOps & Cloud Deployment',
    count: 8,
    topics: [
      'Git & GitHub – Version Control',
      'Branching, Merging & Pull Requests',
      'Docker – Containerisation Basics',
      'Docker Compose for Multi-Container Apps',
      'Kubernetes – Orchestration Basics',
      'CI/CD Pipeline Concepts',
      'Deployment to Cloud (Heroku / Vercel / AWS)',
      'Environment Variables & Production Best Practices',
    ]
  },
]

const BATCHES = [
  { course:'UI Full Stack React', faculty:'Mr. Durga Prasad', date:'01 Jun', time:'9:00 AM IST', mode:'online',  type:'Online Training', link:'Join' },
  { course:'UI Full Stack React', faculty:'Mr. Durga Prasad', date:'01 Jun', time:'9:00 AM IST', mode:'offline', type:'Offline Live',      link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Full-stack React coverage from HTML/CSS/JS foundations to React, Node.js, MongoDB, MySQL and DevOps.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Build real-world web apps using React, Node.js, Express and MongoDB with 3+ capstone projects.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from experienced full-stack developers with live project delivery experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Mock interviews, resume preparation, LinkedIn optimisation and direct employer referrals.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your UI Full Stack React development skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock doubt sessions, recorded lectures, and lab support throughout the programme.' },
]

const REVIEWS = [
  { name:'Kiran Babu',    course:'UI Full Stack React', rating:5, initials:'KB', color:'#1565c0', text:'The UI Full Stack React course is exceptional. Mr. Durga Prasad explains every concept with live examples — from HTML fundamentals to React Hooks, Redux and Node.js. I got placed at a product startup within weeks of completing the programme.' },
  { name:'Ananya Iyer',   course:'UI Full Stack React', rating:5, initials:'AI', color:'#e05c2a', text:'Brilliant curriculum covering the full modern web stack. The React + Node + MongoDB MERN stack projects were exactly what companies look for. Mock interview sessions gave me the confidence to crack multiple technical rounds.' },
  { name:'Rohan Mehta',   course:'UI Full Stack React', rating:5, initials:'RM', color:'#2e7d32', text:'Best React full-stack course available. The SASS, ES6, and Redux Toolkit sections are thorough and practical. The trainer connects theory to real-world use cases exceptionally well. Placement team is very supportive.' },
  { name:'Lakshmi Devi',  course:'UI Full Stack React', rating:4, initials:'LD', color:'#6a1b9a', text:'Very well-structured programme. The Docker and Kubernetes section at the end gives you an edge over other candidates. Resume preparation and mock interviews helped me transition from a manual testing role to a frontend developer position.' },
]

const RELATED = [
  { title:'Full Stack Java',             slug:'full-stack-java-online-training',               icon:'☕' },
  { title:'Full Stack Python',           slug:'full-stack-python-online-training',             icon:'🐍' },
  { title:'Full Stack Software Testing', slug:'full-stack-software-testing-online-training',   icon:'🧪' },
  { title:'Full Stack Data Science',     slug:'full-stack-data-science-ai-online-training',    icon:'📊' },
  { title:'Full Stack .NET',             slug:'full-stack-dot-net-core-online-training',        icon:'🔷' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png',
  'https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png',
  'https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png',
  'https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png',
  'https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png',
  'https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png',
  'https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png',
  'https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png',
  'https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png',
  'https://images.nareshit.com/images/logo_1706095110331.png',
]

const LOGOS_PER_PAGE = 10

const TABS = [
  { id:'overview',          label:'Overview'          },
  { id:'curriculum',        label:'Curriculum'        },
  { id:'certificate',       label:'Certificate'       },
  { id:'upcoming-batches',  label:'Upcoming Batches'  },
  { id:'training-features', label:'Training Features' },
  { id:'reviews',           label:'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function UIFullStackReactDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Durga Prasad')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 9:00 AM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'UI Full Stack React', mode:'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)
  const tabsRef   = useRef(null)
  const [sticky,  setSticky] = useState(false)

  useEffect(() => {
    const NAVBAR_H = 64
    const onScroll = () => {
      if (!headerRef.current) return
      setSticky(headerRef.current.getBoundingClientRect().bottom <= NAVBAR_H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection    = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  const scrollToTab = (id) => {
    setActiveTab(id)
    if (headerRef.current) {
      const target = headerRef.current.offsetTop + headerRef.current.offsetHeight - 64
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }

  return (
    <div className="fsj-page">
      <Navbar />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/full-stack-courses">Full Stack Courses</Link>
            <span>›</span>
            <span>UI Full Stack Web Development with React</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/images/banner_image_1711267484028"
            alt="UI Full Stack Web Development with React Online Training"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">UI Full Stack Web Development with React</h1>
              <p className="fsj-banner__sub">HTML · CSS · JavaScript · React · Node.js · MongoDB · MySQL · DevOps</p>
            </div>
          </div>
        </div>

        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                    <option>Offline Live</option>
                  </select>
                </div>
                <div className="fsj-select-group" style={{ display: 'none' }}>
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Durga Prasad</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 9:00 AM IST</option>
                    <option>15 Jun - 9:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>5 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>18000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  style={{ display: 'none' }}
                  href="/curriculum/ui-full-stack-react-curriculum.pdf"
                  className="fsj-btn fsj-btn--outline"
                  onClick={e => e.preventDefault()}
                >
                  ↓ Download Curriculum
                </a>
                <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs Bar ───────────────────────────────────────────────────────── */}
      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <div className="fsj-container">
        <div className="fsj-layout">

          <main className="fsj-content">

            {/* ── OVERVIEW ─────────────────────────────────────────────── */}
            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  The UI Full Stack Web Development with React programme is a comprehensive educational
                  journey tailored for individuals aspiring to master both frontend and backend web
                  development. The course encompasses HTML, CSS, JavaScript, React, Node.js, MongoDB,
                  MySQL, and DevOps — building you into a job-ready full-stack developer.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Starting with web development foundations, the curriculum progresses through
                  responsive UI creation with modern CSS (Flexbox, Grid, SASS), then deep-dives into
                  JavaScript and ES6+ before moving into React with Hooks, Redux Toolkit, and React
                  Router. The backend stack covers Node.js, Express.js, REST APIs, MongoDB, and MySQL.
                </p>
                <p className="fsj-para">
                  The programme closes with real-world deployment skills — Docker, Kubernetes,
                  CI/CD pipelines, and cloud hosting — ensuring graduates are equipped for modern
                  full-stack development roles across product companies and MNCs.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Master HTML5, CSS3 (Flexbox, Grid, SASS) and responsive web design</li>
                  <li>Build interactive UIs with JavaScript ES6+, DOM manipulation, and APIs</li>
                  <li>Develop modern React applications with Hooks, Context API, and Redux Toolkit</li>
                  <li>Build server-side applications with Node.js and Express.js</li>
                  <li>Integrate MongoDB (Mongoose) and MySQL databases with REST APIs</li>
                  <li>Implement JWT authentication, security best practices, and WebSockets</li>
                  <li>Understand version control with Git and GitHub workflows</li>
                  <li>Deploy full-stack applications with Docker, Kubernetes, and CI/CD</li>
                  <li>Complete 3+ real-world capstone projects for your portfolio</li>
                  <li>Prepare for technical interviews with mock sessions and placement support</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic HTML and CSS understanding (helpful but not mandatory)</li>
                  <li>JavaScript programming familiarity (helpful)</li>
                  <li>Basic web development concepts awareness</li>
                  <li>Version control systems knowledge (Git) is a plus</li>
                  <li>No prior React or Node.js experience required</li>
                </ul>

                <button
                  className="fsj-btn fsj-btn--primary fsj-enroll-now"
                  onClick={() => scrollToTab('upcoming-batches')}
                >
                  Enroll Now
                </button>
              </div>
            )}

            {/* ── CURRICULUM ───────────────────────────────────────────── */}
            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button
                        className="fsj-acc__head"
                        onClick={() => toggleSection(i)}
                        aria-expanded={!!openSections[i]}
                      >
                        <span className="fsj-acc__title">{sec.title}</span>
                        <div className="fsj-acc__right">
                          <span className="fsj-acc__count">{sec.count} Topics</span>
                          <span className="fsj-acc__chevron">{openSections[i] ? '▲' : '▼'}</span>
                        </div>
                      </button>
                      {openSections[i] && (
                        <div className="fsj-acc__body">
                          <div className="fsj-topics-grid">
                            {sec.topics.map((t, j) => (
                              <div key={j} className="fsj-topic-item">
                                <span className="fsj-topic-num">{String(j + 1).padStart(2, '0')}.</span>
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign:'center', marginTop:'2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {/* ── CERTIFICATE ──────────────────────────────────────────── */}
            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the UI Full Stack Web Development with React course,
                  you will receive an industry-recognised certificate from Pro Training Tech validating
                  your expertise across the complete MERN stack and modern web development.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="UI Full Stack React Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">UI Full Stack Web Development with React</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign:'center', marginTop:'1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>
                    Drop a Query
                  </button>
                </div>
              </div>
            )}

            {/* ── UPCOMING BATCHES ─────────────────────────────────────── */}
            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Faculty</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mode</th>
                        <th>Batch Type</th>
                        <th>Meeting Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td>
                          <td>{b.date}</td>
                          <td>{b.time}</td>
                          <td>
                            <span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>
                              {b.mode}
                            </span>
                          </td>
                          <td>{b.type}</td>
                          <td>
                            <button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>
                              {b.link}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── TRAINING FEATURES ────────────────────────────────────── */}
            {activeTab === 'training-features' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Training Features</h2>
                <div className="fsj-features-grid">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="fsj-feature-card" style={{ '--feat-color': f.color, '--feat-bg': f.bg }}>
                      <div className="fsj-feature-card__icon-wrap" style={{ background: f.bg }}>
                        <f.Icon width={40} height={40} color={f.color} strokeWidth={1.5} />
                      </div>
                      <h3 className="fsj-feature-card__title">{f.title}</h3>
                      <p className="fsj-feature-card__desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REVIEWS ──────────────────────────────────────────────── */}
            {activeTab === 'reviews' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Student Reviews</h2>
                <div className="fsj-reviews-grid">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="fsj-review-card">
                      <div className="fsj-review-card__top">
                        <div className="fsj-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                        <div>
                          <div className="fsj-rev-name">{r.name}</div>
                          <div className="fsj-rev-course">{r.course}</div>
                        </div>
                      </div>
                      <div className="fsj-rev-stars">
                        {Array.from({ length: 5 }, (_, j) => (
                          <span key={j} className={j < r.rating ? 'fsj-star--on' : 'fsj-star--off'}>★</span>
                        ))}
                      </div>
                      <p className="fsj-rev-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* Sidebar */}
          <aside className="fsj-sidebar">

            <a href="tel:+17035651995" className="fsj-advisor-btn">
              <span className="fsj-advisor-btn__icon">📞</span>
              +1-703-565-1995
            </a>

            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field">
                  <input type="text" name="name" placeholder="Full Name *" required
                    value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required
                    value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required
                    value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>UI Full Stack React</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Software Testing</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>Full Stack .NET Core</option>
                  </select>
                </div>
                <div className="fsj-form-field">
                  <select name="mode" value={formData.mode} onChange={handleFormChange}>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Live Online</option>
                  </select>
                </div>
                <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
                <p className="fsj-form-terms">
                  By submitting you agree to our{' '}
                  <Link to="/terms-conditions">Terms of Use</Link> &amp;{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Salary Stats Bar ───────────────────────────────────────────────── */}
      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(UI Full Stack Web Development with React)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">8.2L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MNC Logos Carousel ─────────────────────────────────────────────── */}
      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button
              className="fsj-logo-arrow fsj-logo-arrow--left"
              aria-label="Previous logos"
              disabled={logoPage === 0}
              onClick={() => setLogoPage(p => Math.max(0, p - 1))}
            >
              &#8592;
            </button>
            <div className="fsj-logo-grid-wrap">
              <div className="fsj-logo-grid" style={{ transform: `translateX(-${logoPage * 100}%)` }}>
                {Array.from({ length: totalLogoPages }, (_, page) => (
                  <div key={page} className="fsj-logo-page">
                    {MNC_LOGOS.slice(page * LOGOS_PER_PAGE, page * LOGOS_PER_PAGE + LOGOS_PER_PAGE).map((src, i) => (
                      <div key={i} className="fsj-logo-card">
                        <img src={src} alt={`Company logo ${page * LOGOS_PER_PAGE + i + 1}`} className="fsj-logo-card__img" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="fsj-logo-arrow fsj-logo-arrow--right"
              aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1}
              onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* ── Related Courses ────────────────────────────────────────────────── */}
      <section className="fsj-related-section">
        <div className="fsj-container">
          <h2 className="fsj-related-title">Our Relevant Courses list</h2>
          <div className="fsj-related-grid">
            {RELATED.map((rc, i) => (
              <Link key={i} to={`/courses/${rc.slug}`} className="fsj-related-card">
                <div className="fsj-related-card__icon">{rc.icon}</div>
                <div className="fsj-related-card__title">{rc.title}</div>
                <div className="fsj-related-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
