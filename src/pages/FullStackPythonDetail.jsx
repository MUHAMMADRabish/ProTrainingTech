import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// Reuses the identical fsj- CSS class system
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Core Python',
    count: 24,
    topics: [
      'Introduction to Programming Languages','Introduction to Python',
      'Working with Python Software','Python Language Fundamentals',
      'Different Modes of working with Python','Basic I/O Operations in Python',
      'Operators and Expressions in Python','Data Types in Python',
      'Flow Control Statements','String Handling Operations',
      'Bytes / ByteArray / Range Data Types','List Data Structure and Operations',
      'Tuple Data Structure and Operations','Set and Frozenset Data Structures',
      'Dictionary Data Structures','Comprehensions (List / Dictionary / Set)',
      'NoneType Category','Functions in Python',
      'Modules in Python','Packages in Python',
      'Exception Handling in Python','Regular Expressions (Re Module)',
      'File / Stream Handling','Collections Module for Building Applications',
    ]
  },
  {
    title: 'Advanced Python',
    count: 9,
    topics: [
      'Object Oriented Programming Principles','OS Module',
      'Multi Threading','Python Logging',
      'Date and Time Module','Garbage Collection',
      'Python Database Communications (PDBC)',
      'Network / Socket Programming (socket module)',
      'Tkinter and Turtle',
    ]
  },
  {
    title: 'NumPy',
    count: 21,
    topics: [
      'Basic Introduction to NumPy','Creation of NumPy Arrays',
      'Array Attributes & NumPy Data Types','View vs Copy',
      'Indexing / Slicing / Advanced Indexing','Iterating Elements of ndarray',
      'Arithmetic Operators','Broadcasting',
      'Array Manipulation Functions','Joining Multiple Arrays',
      'Splitting of Arrays','Sorting Elements',
      'Searching Elements','Inserting Elements',
      'Deleting Elements','Matrix Multiplication using dot()',
      'Importance of Matrix Class','Linear Algebra Functions (linalg)',
      'I/O Operations with NumPy','Basic Statistics with NumPy',
      'NumPy Mathematical Functions',
    ]
  },
  {
    title: 'Pandas',
    count: 22,
    topics: [
      'Introduction & Environment Setup','Data Structures: Series & DataFrame',
      'Basic Functionality','Descriptive Statistics',
      'Function Application & Reindexing','Sorting & Iteration',
      'Working with Text Data','Indexing and Selecting Data',
      'Statistical & Window Functions','Aggregations',
      'Missing Data Handling','GroupBy Operations',
      'Merging / Joining / Concatenation','Date Functionality & Timedelta',
      'Categorical Data','Visualization with Pandas',
      'IO Tools (CSV, Excel, SQL, JSON)','Sparse Data',
      'Comparison with SQL','Caveats & Gotchas',
      'Custom Styling and Options','Data Cleaning Techniques',
    ]
  },
  {
    title: 'Matplotlib',
    count: 16,
    topics: [
      'Introduction to Matplotlib','Line Plot (Basics and Advanced)',
      'Adding Grid Lines & Legends','Customization of Tick Location and Labels',
      'Setting Limit Range on Axes (xlim / ylim)','Setting Scale of Axes',
      'Plotting Styles','Functional vs Object Oriented Approaches',
      'Bar Charts / Graphs / Plots','Pie Charts',
      'Histograms','Scatter Plots',
      'Subplots','Plotting Geographic Data with Basemap',
      'Three-Dimensional (3D) Plotting','Animations',
    ]
  },
  {
    title: 'HTML',
    count: 14,
    topics: [
      'Web Introduction','Introduction to HTML','Introduction to HTML Structure',
      'Presentational & Formatting Tags','Title and HTML Entities',
      'Attributes','HTML Images & Anchor Tag',
      'Working with Lists','Working with Div Tag',
      'HTML Tables','HTML Forms',
      'HTML Form Controls','Additional Form Controls',
      'HTML5 New Semantic / Structural Elements',
    ]
  },
  {
    title: 'CSS',
    count: 5,
    topics: [
      'Introduction to CSS','CSS Selectors','CSS Box Model',
      'Styling Elements','Advanced Cascading Style Sheets',
    ]
  },
  {
    title: 'JavaScript',
    count: 17,
    topics: [
      'Introduction to JavaScript','JavaScript Implementations',
      'Variables & Data Types','JavaScript Operators',
      'Control Statements','Arrays & Functions',
      'Functional Expressions & Arrow Functions','JavaScript Strings',
      'Working with JS Objects','JS Constructors',
      'DOM – Document Object','DOM – Element Object',
      'DOM – Event Handling','BOM – Window Object',
      'JavaScript Validations & Regular Expressions',
      'Bootstrap Integration','ES6+ Features',
    ]
  },
  {
    title: 'Django with REST API',
    count: 20,
    topics: [
      'Introduction to Django','Django & Atom Installation',
      'Templates and Static Files','Views and URLs',
      'Models and Databases','Forms and Validation',
      'Advanced Template Features','Session Management',
      'User Authentication and Authorization','Class Based Views & CRUD Operations',
      'Django ORM','Advanced Model Concepts',
      'Django REST Framework','Testing and Debugging',
      'Caching and Performance Optimization','Django Forms Advanced Topics',
      'Django Security','Django Signals & Async Tasks',
      'Django Deployment and Production',
      'WebSockets and Real-Time Communication',
    ]
  },
  {
    title: 'Flask',
    count: 8,
    topics: [
      'Introduction to Flask','Building Web Applications with Flask',
      'Web Forms and User Input','Databases and Data Storage',
      'User Authentication and Authorization','RESTful APIs with Flask',
      'Deployment and Scaling','Advanced Flask Topics',
    ]
  },
  {
    title: 'Angular',
    count: 17,
    topics: [
      'Introduction to Web Technologies','TypeScript Deep Dive',
      'Introduction to Angular','Setting Up Angular Environment',
      'Angular Architecture','Introduction to Components',
      'Angular Pipes','Angular Services',
      'Angular Forms','Observables & RxJS',
      'NgModules','Dependency Injection',
      'HttpClient','Routing & Navigation',
      'Angular Animations','Angular Materials',
      'Unit Testing in Angular',
    ]
  },
  {
    title: 'Database – MySQL & MongoDB',
    count: 8,
    topics: [
      'MySQL Introduction & Installation','DDL, DML, DQL',
      'Joins & Subqueries','Stored Procedures & Triggers',
      'MongoDB Introduction & Installation','CRUD Operations in MongoDB',
      'Aggregation Framework','Indexing in MongoDB',
    ]
  },
  {
    title: 'Tools & DevOps',
    count: 4,
    topics: [
      'AWS Basics','Version Control with GIT','Docker','Kubernetes',
    ]
  },
]

const BATCHES = [
  { course:'Full Stack Python', faculty:'Mr. Shareef', date:'01 Jun', time:'6:00 PM IST', mode:'online',  type:'Online Training', link:'Join' },
  { course:'Full Stack Python', faculty:'Mr. Shareef', date:'01 Jun', time:'6:00 PM IST', mode:'offline', type:'KPHB',             link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Master Python full-stack development from fundamentals to advanced Django, Flask, NumPy, Pandas and Angular.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Build real-world Python web applications and data-driven projects for a strong portfolio.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry practitioners with deep Python and data science expertise.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Access dedicated placement support, resume building, and employer referrals.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Earn an industry-recognised certificate validating your Python full-stack skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Get round-the-clock assistance through doubt sessions, forums, and recorded lectures.' },
]

const REVIEWS = [
  { name:'Ananya Reddy',  course:'Full Stack Python', rating:5, initials:'AR', color:'#1565c0', text:'The Full Stack Python course at Pro Training Tech is outstanding. Mr. Shareef explains Django and Flask concepts with excellent real-world examples. I landed a Python developer role within two months of completing the programme.' },
  { name:'Rahul Verma',   course:'Full Stack Python', rating:5, initials:'RV', color:'#e05c2a', text:'Best Python training I have come across. The curriculum covers everything from Core Python to NumPy, Pandas, Django and Angular. The hands-on projects gave me the confidence to crack interviews at top companies.' },
  { name:'Preethi Kumar', course:'Full Stack Python', rating:5, initials:'PK', color:'#2e7d32', text:'Excellent structured course with in-depth coverage of data science libraries alongside full-stack web development. The placement team is very supportive and helped me get placed at a top MNC.' },
  { name:'Siddharth Rao', course:'Full Stack Python', rating:4, initials:'SR', color:'#6a1b9a', text:'Great course content covering Flask, Django and REST APIs thoroughly. The mock interview sessions and resume workshops were incredibly helpful. Highly recommended for aspiring Python developers.' },
]

const RELATED = [
  { title:'Full Stack Java',             slug:'full-stack-java-online-training',   icon:'☕' },
  { title:'Full Stack Software Testing', slug:'full-stack-software-testing',        icon:'🧪' },
  { title:'UI Full Stack React',         slug:'ui-full-stack-react',                icon:'⚛️' },
  { title:'Full Stack Data Science',     slug:'full-stack-data-science-ai',         icon:'📊' },
  { title:'Full Stack .NET',             slug:'full-stack-dotnet',                  icon:'🔷' },
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

export default function FullStackPythonDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Shareef')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 6:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack Python', mode:'Online' })
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

  const toggleSection = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))

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
            <span>Full Stack Python</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        {/* Banner */}
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/python.jpg"
            alt="Full Stack Python Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Python Online Training</h1>
              <p className="fsj-banner__sub">Master Python Full Stack Development — Django, Flask, Angular & More</p>
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                    <option>KPHB</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Shareef</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 6:00 PM IST</option>
                    <option>15 Jun - 6:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>5 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>18000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/full-stack-python-curriculum.pdf"
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
                  The Full Stack Python program offers an immersive learning experience that delves into both
                  front-end and back-end facets of Python-driven web development. Participants gain expertise
                  across the complete technology stack — from Core Python and advanced data libraries to Django,
                  Flask, Angular, and cloud deployment.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This course addresses the complete stack of technologies involved in Python web development,
                  including Flask, Django, MySQL, MongoDB, HTML, CSS, JavaScript and Angular — delivered through
                  lectures, coding exercises, and real-world projects focused on API development, authentication,
                  security, and production deployment.
                </p>
                <p className="fsj-para">
                  The programme also covers essential data science libraries — NumPy, Pandas, and Matplotlib —
                  giving learners a competitive edge in both web development and data-driven roles. DevOps
                  fundamentals including Git, Docker, Kubernetes, and AWS are included to prepare students for
                  modern cloud workflows.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Understand full-stack web application architecture using Python</li>
                  <li>Gain Python programming proficiency from basics to advanced OOP</li>
                  <li>Develop dynamic web interfaces using Flask and Django frameworks</li>
                  <li>Master backend development with Python, MySQL, and MongoDB</li>
                  <li>Acquire RESTful API development knowledge with Django REST Framework</li>
                  <li>Implement user authentication, authorization, and security best practices</li>
                  <li>Work with NumPy, Pandas, and Matplotlib for data processing and visualization</li>
                  <li>Learn production deployment strategies with Docker, Kubernetes, and AWS</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic programming concepts understanding (preferably Python)</li>
                  <li>Familiarity with HTML, CSS, and JavaScript (helpful but not mandatory)</li>
                  <li>Database concepts knowledge (beneficial but optional)</li>
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
                  Upon successful completion of the Full Stack Python course, you will receive an
                  industry-recognised certificate from Pro Training Tech validating your expertise
                  in Python full-stack development.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Full Stack Python Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Full Stack Python Development</div>
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
                    <option>Full Stack Python</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack .NET</option>
                    <option>Full Stack Software Testing</option>
                    <option>UI Full Stack React</option>
                    <option>Full Stack Data Science</option>
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
              Average package of course <strong>(Full Stack Python)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">4–8L</span>
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
