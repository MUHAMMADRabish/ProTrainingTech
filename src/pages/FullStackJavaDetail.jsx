import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Core Java',
    count: 25,
    topics: [
      'Introduction','Installation','Programming Elements','First Application',
      'Data Types','Operators','Control Statements','Access Modifiers',
      'Wrapper Classes','Packages','OOPS Concepts','Object Casting',
      'Exception Handling','Multi Threading','Garbage Collection',
      'Inner Classes','Java I/O','File Handling','String Handling',
      'Reflection API','Arrays','Collection Framework','Map Interface',
      'JDK 8 Features','JDK 10/11 Features'
    ]
  },
  {
    title: 'ADV.JAVA – JDBC',
    count: 8,
    topics: [
      'Introduction to JDBC','Database Connection','Statement',
      'PreparedStatement','CallableStatement','ResultSet Interface & Metadata',
      'Batch Updates','Transaction Management'
    ]
  },
  {
    title: 'Servlet Programming',
    count: 20,
    topics: [
      'Introduction to Servlets','Servlet Development across Servers',
      'ServletRequest & ServletResponse','ServletConfig','ServletContext',
      'HttpServlet','HttpServletRequest & HttpServletResponse',
      'HTML-to-Servlet Communication','Database Communication',
      'Request Dispatching','Redirecting','Attributes',
      'State & Session Management','URL Rewriting','Hidden Form Fields',
      'Cookies','HttpSession','Filters','Listeners','Annotations',
    ]
  },
  {
    title: 'JSP – Java Server Pages',
    count: 11,
    topics: [
      'Introduction & JSP Tags','Scripting Elements','JSP Implicit Objects',
      'Directives','Standard Actions','Java Beans',
      'Expression Languages with JSTL','JSTL Usage','Custom Tags',
      'MVC Architectures','MVC Project Deployment'
    ]
  },
  {
    title: 'Oracle',
    count: 20,
    topics: [
      'DB Fundamentals','RDBMS','Oracle Introduction','DDL','DRL','DML',
      'Functions','Integrity Constraints','Joins','Sub Queries',
      'Transactions','Views','Indexes','PL/SQL','Error Handling',
      'Stored Procedures','Functions','Triggers','Sequences','Synonyms'
    ]
  },
  {
    title: 'HTML',
    count: 14,
    topics: [
      'Web Introduction','HTML Fundamentals','Formatting Tags',
      'Images','Anchor Tags','Tables','Lists','Frames & Div',
      'Forms','Form Controls','HTML5','Canvas',
      'SVG','Multimedia & Geolocation'
    ]
  },
  {
    title: 'CSS',
    count: 9,
    topics: [
      'Introduction to CSS','Selectors','Attributes',
      'Lists & Tables','Advanced Cascading Styles','Borders',
      'Text Properties & Backgrounds','2D & 3D Transforms',
      'Transitions, Animations & Multiple Columns'
    ]
  },
  {
    title: 'JavaScript',
    count: 18,
    topics: [
      'Scripting Fundamentals','History','Operators',
      'Condition Controls','Looping','Arrays','Functions',
      'Object Basics','Date, Math & Time','Error Handling',
      'OOPs in JS','HTML DOM','Events','Regular Expressions',
      'Window Object','History Object','Cookies','Web Hosting'
    ]
  },
  {
    title: 'Bootstrap',
    count: 6,
    topics: [
      'Bootstrap Introduction','Grid System','Components',
      'Navigation','Forms & Inputs','Utilities & Helpers'
    ]
  },
  {
    title: 'ReactJS',
    count: 20,
    topics: [
      'Introduction','Essential Features','Components, Props & State',
      'Styling in React','Debugging','Component Lifecycle',
      'Hooks','Component Details','HTTP/Ajax Calls',
      'Routing v5/v6','Forms & Validation','Web Deployment',
      'Redux','Material UI','Error Handling','React 18 Features',
      'Unit Testing','Webpack','Server-Side Rendering','Cloud Deployment'
    ]
  },
  {
    title: 'Spring Boot & MicroServices',
    count: 25,
    topics: [
      'Spring Boot Introduction','Application Building','REST Annotations',
      'In-Memory Database & CRUD','Relational Database Operations',
      'JPA Repository','Actuator','Custom Logging',
      'Profile Components','Auto Configuration','Thymeleaf',
      'Spring Web Integration','Security','Database Concepts',
      'Microservices Core Concepts','Microservices Design',
      'Spring Cloud','Config Server','Netflix OSS',
      'Fault Tolerance','API Gateway','Messaging Queues (CloudBus)',
      'OAuth2','Swagger API','Cloud Hosting'
    ]
  },
  {
    title: 'Tools & Technologies',
    count: 15,
    topics: [
      'GIT','GitHub','Jenkins','Docker',
      'Datadog','JUnit','Mockito','JMeter',
      'Maven','JIRA','SonarQube','SLF4J',
      'ELK Stack','Heroku','Chef'
    ]
  }
]

const BATCHES = [
  { course:'Full Stack Java', faculty:'Mr. Mahendra', date:'21 May',  time:'9:00 AM IST',  mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack Java', faculty:'Mr. Mahendra', date:'21 May',  time:'9:00 AM IST',  mode:'offline', type:'KPHB',               link:'Join' },
  { course:'Full Stack Java', faculty:'Mr. Kishan B', date:'18 May',  time:'7:15 AM IST',  mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack Java', faculty:'Mr. Kishan B', date:'18 May',  time:'7:15 AM IST',  mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Master web development with a full-stack curriculum covering front-end, back-end, databases, and more.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Apply skills to real-world projects for practical experience and enhanced learning.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry experts for insights and guidance in full-stack development.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Access job placement assistance for career support and employer connections.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Receive a recognised certification validating your full-stack development skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Access round-the-clock support for immediate assistance, ensuring a seamless learning journey.' },
]

const REVIEWS = [
  { name:'Ravi Teja', course:'Full Stack Java', rating:5, initials:'RT', color:'#1565c0', text:'It was a great learning experience for me in Naresh IT. One of the best trainers. The Full Stack Java course is very well structured. Highly recommend for Java learners.' },
  { name:'Priya Sharma', course:'Full Stack Java', rating:5, initials:'PS', color:'#e05c2a', text:'The trainer explains every concept with real-world examples. Hands-on projects helped me land my first job at an MNC. Best investment I have ever made.' },
  { name:'Karthik Reddy', course:'Full Stack Java', rating:5, initials:'KR', color:'#2e7d32', text:'Excellent course with tremendous practical exposure. The curriculum is thorough and perfectly aligned with what companies expect. Placed within weeks of completing the programme.' },
  { name:'Swetha Nair', course:'Full Stack Java', rating:4, initials:'SN', color:'#6a1b9a', text:'Great content and mentorship throughout. The mock interview sessions gave me real confidence. The placement team is proactive and genuinely supportive.' },
]

const RELATED = [
  { title:'Full Stack Software Testing', slug:'full-stack-software-testing', icon:'🧪' },
  { title:'Full Stack Python',           slug:'full-stack-python-online-training', icon:'🐍' },
  { title:'UI Full Stack React',         slug:'ui-full-stack-react',         icon:'⚛️' },
  { title:'Full Stack Data Science',     slug:'full-stack-data-science-ai',   icon:'📊' },
  { title:'Full Stack .NET',             slug:'full-stack-dotnet',            icon:'🔷' },
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

const LOGOS_PER_PAGE = 10 // 2 rows × 5 cols

const TABS = [
  { id:'overview',         label:'Overview'          },
  { id:'curriculum',       label:'Curriculum'        },
  { id:'certificate',      label:'Certificate'       },
  { id:'upcoming-batches', label:'Upcoming Batches'  },
  { id:'training-features',label:'Training Features' },
  { id:'reviews',          label:'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function FullStackJavaDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Mr. Mahendra')
  const [batchDate,    setBatchDate]    = useState('21 May - 9:00 AM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack Java', mode:'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)   // ref on the controls/fee section
  const tabsRef   = useRef(null)   // ref on the tabs bar (for scroll-to target)
  const [sticky,  setSticky]  = useState(false)

  useEffect(() => {
    const NAVBAR_H = 64
    const onScroll = () => {
      if (!headerRef.current) return
      // Sticky when the bottom of the header has scrolled above the navbar
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
            <span>Full Stack Java</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        {/* Banner */}
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/Full-Stack-Java-at-Naresh-IT.png"
            alt="Full Stack Java Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Java Online Training</h1>
              <p className="fsj-banner__sub">Master Java Full Stack Development — Frontend to Backend</p>
            </div>
          </div>
        </div>

        {/* Controls row */}
        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              {/* Left — selectors + info */}
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                    <option>Classroom Training</option>
                    <option>KPHB</option>
                  </select>
                </div>
                <div className="fsj-select-group" style={{ display: 'none' }}>
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Mr. Mahendra</option>
                    <option>Mr. Kishan B</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>21 May - 9:00 AM IST</option>
                    <option>18 May - 7:15 AM IST</option>
                    <option>01 Jun - 9:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>6 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>20000 /-</strong></span>
                </div>
              </div>

              {/* Right — buttons */}
              <div className="fsj-controls__right">
                <a
                  style={{ display: 'none' }}
                  href="/curriculum/full-stack-java-curriculum.pdf"
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

      {/* ── Main Layout: content + sidebar ────────────────────────────────── */}
      <div className="fsj-container">
        <div className="fsj-layout">

          {/* Content pane */}
          <main className="fsj-content">

            {/* ── OVERVIEW ─────────────────────────────────────────────── */}
            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  The Full Stack Java program enables learners to develop comprehensive web applications using Java
                  technologies. Participants gain expertise in both front-end and back-end components of web applications
                  using Java technologies, with flexibility in learning formats including live classes with or without
                  video recordings.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  The structured curriculum covers client-side and server-side development using Java technologies.
                  Content begins with Java fundamentals including variables and object-oriented programming, then
                  progresses through HTML, CSS, JavaScript, and ReactJS for front-end work.
                </p>
                <p className="fsj-para">
                  Back-end instruction focuses on Spring Boot for building robust and scalable server-side applications,
                  including HTTP handling, session management, security implementation, and database integration via
                  JDBC or Hibernate. The course also covers microservices architecture, DevOps tools, and cloud deployment.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Establish proficiency in Java programming fundamentals</li>
                  <li>Master front-end development with HTML, CSS, JavaScript, and ReactJS</li>
                  <li>Understand server-side development with Spring Boot & Java EE</li>
                  <li>Learn database interaction using JDBC, JPA & Hibernate</li>
                  <li>Gain practical experience through hands-on projects</li>
                  <li>Apply best practices for scalable, secure web applications</li>
                  <li>Deploy and maintain full stack Java applications on cloud</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic programming concept knowledge</li>
                  <li>Java basics familiarity (helpful but not mandatory)</li>
                  <li>Basic web technologies understanding</li>
                  <li>Database familiarity</li>
                  <li>Command line skills</li>
                  <li>Development tools experience</li>
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
                  Upon successful completion of the Full Stack Java course, you will receive an industry-recognised
                  certificate from Pro Training Tech, validating your expertise in full-stack Java development.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Full Stack Java Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Full Stack Java Development</div>
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

            {/* Talk to Advisor */}
            <a href="tel:+17035651995" className="fsj-advisor-btn">
              <span className="fsj-advisor-btn__icon">📞</span>
              +1-703-565-1995
            </a>

            {/* Enquiry Form */}
            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="fsj-form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="fsj-form-field">
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number *"
                    required
                    value={formData.mobile}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
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
              Average package of course <strong>(Full Stack Java)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">30%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">5L</span>
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
            {/* Left arrow */}
            <button
              className="fsj-logo-arrow fsj-logo-arrow--left"
              aria-label="Previous logos"
              disabled={logoPage === 0}
              onClick={() => setLogoPage(p => Math.max(0, p - 1))}
            >
              &#8592;
            </button>

            {/* Grid */}
            <div className="fsj-logo-grid-wrap">
              <div
                className="fsj-logo-grid"
                style={{ transform: `translateX(-${logoPage * 100}%)` }}
              >
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

            {/* Right arrow */}
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
