import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Manual Testing',
    count: 28,
    topics: [
      'Introduction to Software Testing','Testing Methods & Techniques',
      'Levels of Testing','SDLC Models (Waterfall, Prototype, Agile, V-Model)',
      'QA vs QC Roles','STLC Phases',
      'Test Scenarios','Test Cases Writing',
      'Test Execution','Bug Reporting',
      'Bug Life Cycle','Severity and Priority',
      'JIRA Tool','Zephyr Scale',
      'Build Acceptance Testing','Regression Testing',
      'Smoke & Sanitary Testing','Static & Dynamic Testing',
      'Compatibility & Usability Testing','Integration Testing',
      'Alpha & Beta Testing','Security-Based Testing',
      'Installation & Privilege Testing','Load Testing',
      'Exploratory & Ad hoc Testing','End-to-End Testing',
      'Monkey & Gorilla Testing','Spike Testing',
    ]
  },
  {
    title: 'Core Java for Testers',
    count: 18,
    topics: [
      'Introduction & Installation','Programming Elements',
      'First Java Application','Data Types',
      'Operators','Control Statements',
      'Access Modifiers','Wrapper Classes',
      'Packages','OOPS – Encapsulation',
      'OOPS – Inheritance','OOPS – Polymorphism',
      'Exception Handling','String Handling',
      'Reflection API','Arrays',
      'Collection Framework (List, Queue, Set)','Map Interface',
    ]
  },
  {
    title: 'Selenium WebDriver',
    count: 22,
    topics: [
      'Automation Testing Introduction','Web Locators (8 Types)',
      'Browser Launching (Chrome, Firefox, Edge)','Test Execution across Browsers',
      'HTML Elements & Methods','Conditions & Abstract Classes',
      'Google Search Automation','Positive & Negative Testing',
      'Login Automation','Parallel Execution',
      'Multi-Browser Testing','Screenshots',
      'Dropdown Handling','Alerts',
      'Frames','Multi-Window Handling',
      'Synchronization','Actions Class',
      'JavaScript Executor','Exception Types in Selenium',
      'Cross-Browser Testing','Selenium Grid',
    ]
  },
  {
    title: 'TestNG Framework',
    count: 14,
    topics: [
      'Framework Download & Installation','Testing Class Creation',
      'Multiple Test Execution','Priority-Based Execution',
      'Group Test Execution','Annotation Ordering',
      'Parallel Execution','Cross-Browser Testing with TestNG',
      'XML Configuration','Data Providers',
      'Test Result Analysis','Enable/Disable Tests',
      'Annotations Comparison (JUnit vs TestNG)','Reports Generation',
    ]
  },
  {
    title: 'Maven & Build Management',
    count: 7,
    topics: [
      'Maven Project Creation','Folder Structure',
      'Dependency Management','POM Configuration',
      'Maven Execution','Error Resolution',
      'Integration with TestNG/Selenium',
    ]
  },
  {
    title: 'GitHub & Version Control',
    count: 6,
    topics: [
      'Installation (Node.js, npm, Git)','GitHub Account Setup',
      'Framework Storage & Repositories','Code Pulling & Updating',
      'Central Repository Management','Branching & Merging',
    ]
  },
  {
    title: 'Jenkins & CI/CD',
    count: 6,
    topics: [
      'Jenkins Installation','CI/CD Concepts',
      'Project & Job Creation','Job Execution',
      'Pipeline Configuration','DevOps Role Integration',
    ]
  },
  {
    title: 'Cucumber BDD',
    count: 8,
    topics: [
      'BDD Project Creation','Feature Files',
      'Scenario Creation','Step Definitions',
      'Gherkin Language','Test Runners',
      'Execution & Reports','Plugin Installation',
    ]
  },
  {
    title: 'API Testing with Postman & Rest Assured',
    count: 10,
    topics: [
      'Postman Setup','Collections & Requests',
      'HTTP Methods (GET, POST, PUT, DELETE)','REST vs SOAP',
      'Global Variables','HTTPS Status Codes',
      'Token Creation & Usage','Collection-Level APIs',
      'Rest Assured Installation','Rest Assured Examples & Assertions',
    ]
  },
  {
    title: 'Database Testing',
    count: 9,
    topics: [
      'MySQL Installation & Configuration','Table Operations (Create, Insert, Delete, Update)',
      'Primary & Foreign Keys','Eclipse Database Connectivity',
      'Data Driven Framework','Apache POI Implementation',
      'XML Handling','Excel Data Read/Write Operations',
      'SQL Queries for Test Validation',
    ]
  },
  {
    title: 'Log4j & Logging',
    count: 4,
    topics: [
      'Log4j Implementation Steps','Advantages of Logging',
      'Configuration & Setup','Log Levels & Appenders',
    ]
  },
]

const BATCHES = [
  { course:'Full Stack Software Testing', faculty:'Real-Time Expert', date:'01 Jun', time:'10:00 AM IST', mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack Software Testing', faculty:'Real-Time Expert', date:'01 Jun', time:'10:00 AM IST', mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Full-stack testing from Manual Testing and Selenium to API, Database, and CI/CD integration.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Real-world automation frameworks using Selenium, TestNG, Cucumber BDD, and Rest Assured.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from seasoned QA professionals with live industry project experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Dedicated placement support, mock interviews, resume preparation and Naukri assistance.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your full-stack QA and automation skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock lab support (online & offline), assignments, and doubt-clearing sessions.' },
]

const REVIEWS = [
  { name:'Suresh Babu',     course:'Full Stack Software Testing', rating:5, initials:'SB', color:'#1565c0', text:'The Full Stack Software Testing course gave me an excellent foundation in both manual and automation testing. The Selenium + TestNG curriculum is thorough. I cracked my first QA role at an MNC within weeks of completing the programme.' },
  { name:'Kavitha Reddy',   course:'Full Stack Software Testing', rating:5, initials:'KR', color:'#e05c2a', text:'Outstanding training with real-world focus. API Testing with Postman and Rest Assured was covered in great depth. Mock interview sessions boosted my confidence and I got placed in a top IT company.' },
  { name:'Harish Chandra',  course:'Full Stack Software Testing', rating:5, initials:'HC', color:'#2e7d32', text:'Best QA course I have attended. The BDD Cucumber framework and Jenkins CI/CD integration were highlights. The trainer explains every concept with live project examples. Highly recommended!' },
  { name:'Pooja Srinivas',  course:'Full Stack Software Testing', rating:4, initials:'PS', color:'#6a1b9a', text:'Very structured curriculum covering the entire STLC to advanced automation tools. The lab support and resume preparation service made a real difference in my job search. Excellent placement team.' },
]

const RELATED = [
  { title:'Full Stack Java',         slug:'full-stack-java-online-training',    icon:'☕' },
  { title:'Full Stack Python',       slug:'full-stack-python-online-training',  icon:'🐍' },
  { title:'UI Full Stack React',     slug:'ui-full-stack-react',                icon:'⚛️' },
  { title:'Full Stack Data Science', slug:'full-stack-data-science-ai',         icon:'📊' },
  { title:'Full Stack .NET',         slug:'full-stack-dotnet',                  icon:'🔷' },
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

export default function FullStackSoftwareTestingDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 10:00 AM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack Software Testing', mode:'Online' })
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
            <span>Full Stack Software Testing</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/banner_image_1720069342709.jpg"
            alt="Full Stack Software Testing Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Software Testing Online Training</h1>
              <p className="fsj-banner__sub">Master Manual Testing, Selenium, API Testing, BDD & CI/CD</p>
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
                    <option>Classroom Training</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Real-Time Expert</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 10:00 AM IST</option>
                    <option>15 Jun - 10:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>2 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>6000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/full-stack-software-testing-curriculum.pdf"
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
                  The Full Stack Software Testing programme provides a comprehensive understanding of software
                  testing across the entire stack, including both front-end and back-end testing. It emphasises
                  key concepts, techniques, and best practices for ensuring software quality through automated
                  and manual testing methods.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This course covers the complete spectrum of software quality assurance — starting from Manual
                  Testing fundamentals and SDLC models through to advanced Selenium WebDriver automation,
                  TestNG frameworks, BDD with Cucumber, and API testing using Postman and Rest Assured.
                </p>
                <p className="fsj-para">
                  Learners also gain hands-on experience with CI/CD integration using Jenkins, version control
                  with GitHub, database testing with MySQL, and reporting tools like Log4j — preparing them
                  for end-to-end QA roles in modern software teams.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Understand the full software testing lifecycle (STLC) and SDLC models</li>
                  <li>Master manual testing techniques: test case writing, bug reporting, and JIRA</li>
                  <li>Automate web applications with Selenium WebDriver and Java</li>
                  <li>Build scalable test frameworks using TestNG, Maven, and Page Object Model</li>
                  <li>Implement BDD test suites with Cucumber and Gherkin</li>
                  <li>Perform API testing with Postman and Rest Assured</li>
                  <li>Integrate test automation into CI/CD pipelines using Jenkins and GitHub</li>
                  <li>Conduct database testing with MySQL and Apache POI</li>
                  <li>Apply performance and security testing fundamentals</li>
                  <li>Prepare for mock interviews with resume and placement support</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic software testing concepts understanding</li>
                  <li>Familiarity with a programming language (Java or Python preferred)</li>
                  <li>HTML and CSS knowledge (helpful)</li>
                  <li>Web browser developer tools familiarity</li>
                  <li>Test automation principles awareness</li>
                  <li>IDE experience (Eclipse or IntelliJ)</li>
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
                  Upon successful completion of the Full Stack Software Testing course, you will receive
                  an industry-recognised certificate from Pro Training Tech validating your QA and
                  test automation expertise.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Full Stack Software Testing Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Full Stack Software Testing</div>
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
                    <option>Full Stack Software Testing</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack .NET</option>
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
              Average package of course <strong>(Full Stack Software Testing)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">3–6L</span>
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
