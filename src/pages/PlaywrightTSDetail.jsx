import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Introduction to Playwright',
    count: 7,
    topics: [
      'Test Automation Concepts and Playwright Architecture (CDP, WebSocket, Browser Contexts)',
      'Playwright vs Selenium vs Cypress – Feature Comparison',
      'Supported Browsers – Chromium, Firefox, WebKit',
      'Supported Languages – JavaScript, TypeScript, Python, Java, C#',
      'Installation via npm and Project Structure Setup',
      'Headed vs Headless Execution Modes',
      'Test Runner vs Standalone Library, VS Code Playwright Extension',
    ],
  },
  {
    title: 'Locators – Finding Elements Reliably',
    count: 8,
    topics: [
      'Locator API vs Element Handle',
      'Accessibility-First Locators – getByRole()',
      'Text-Based Locators – getByText(), getByLabel(), getByPlaceholder()',
      'Test ID Locators – getByTestId()',
      'Traditional Selectors – CSS and XPath (Relative vs Absolute)',
      'Advanced Selection – Chaining Locators, Filtering',
      'nth(), first(), last() Locator Operators (and/or)',
      'Playwright Inspector, codegen, and Accessibility-First Best Practices',
    ],
  },
  {
    title: 'Actions, Assertions & Auto-Wait',
    count: 9,
    topics: [
      'Page Navigation – goto(), reload(), goBack(), waitForURL()',
      'Click Variants and Keyboard Input – fill(), type(), clear(), press()',
      'Mouse Actions – hover(), dragTo(), wheel(), focus(), tap()',
      'Form Elements – select(), check(), uncheck(), setInputFiles()',
      'Auto-Wait Mechanism and Actionability Checks',
      'Web-First Assertions – toBeVisible(), toHaveText(), toBeEnabled()',
      'Soft Assertions and Page Assertions – toHaveURL(), toHaveTitle()',
      'Custom Matchers',
      'Explicit Waits – Global, Test, Action, and Assertion-Level Timeouts',
    ],
  },
  {
    title: 'playwright.config.ts – Projects, Hooks & Fixtures',
    count: 8,
    topics: [
      'Configuration – testDir, timeout, retries, workers, reporters',
      'Projects for Multiple Browsers and Viewports',
      'Multiple Configuration Files',
      'Test Structure – describe() Grouping and Lifecycle Hooks',
      'beforeAll(), afterAll(), beforeEach(), afterEach()',
      'test.use(), skip, only, fixme Flags, and Test Tagging (@smoke, @regression)',
      'Built-In Fixtures – page, browser, context, browserName, request',
      'Custom Fixtures, Scope Levels (test vs worker), and Fixture Composition',
    ],
  },
  {
    title: 'Page Object Model & Scalable Architecture',
    count: 8,
    topics: [
      'POM Fundamentals – Maintainability, DRY Principle, Separation of Concerns',
      'BasePage Class Design Pattern',
      'Method Chaining and Fluent Interface',
      'Component Objects Pattern',
      'POM Integration with Playwright Fixtures',
      'Folder Structure – pages/, components/, helpers/, data/',
      'Data-Driven Testing with test.each(), CSV/JSON Data',
      'Factory Pattern with Faker.js and TypeScript Generics/Interfaces',
    ],
  },
  {
    title: 'Advanced Browser & Network Features',
    count: 9,
    topics: [
      'Browser Contexts – Isolated Sessions and Multiple Users',
      'Network Control – page.route() Interception',
      'API Mocking, Request/Response Inspection',
      'HAR Recording and Playback',
      'Authentication – storageState, Session Reuse, Cookies, localStorage',
      'Bypassing Login UI with Saved Sessions',
      'Complex UI – New Windows/Tabs, iFrame Handling, Dialog Handling',
      'File Upload and Download Automation',
      'Emulation – Geolocation, Permissions, Dark Mode, Timezone; page.evaluate()',
    ],
  },
  {
    title: 'API Testing with Playwright',
    count: 7,
    topics: [
      'APIRequestContext Setup and Configuration',
      'HTTP Methods – GET, POST, PUT, PATCH, DELETE',
      'Headers, Query Parameters, and Request Bodies (JSON, form-data)',
      'Response Assertions – Status, Headers, Body, json()',
      'JSON Schema Validation with ajv and zod',
      'Reusable apiContext Fixtures',
      'Hybrid Tests – Seed via API, Test UI, Verify via API; GraphQL Testing',
    ],
  },
  {
    title: 'Visual Testing & Accessibility',
    count: 6,
    topics: [
      'Screenshot Testing and Snapshot Comparison (toMatchSnapshot)',
      'Pixel Diff Thresholds, Masks, and Clip Regions',
      'Percy Integration for Visual CI Testing',
      'Accessibility Testing with @axe-core/playwright',
      'WCAG Criteria and Accessibility Assertions',
      'PDF Generation Testing and CSS Print Media Emulation',
    ],
  },
  {
    title: 'Parallel Execution, Reporting & Debugging',
    count: 8,
    topics: [
      'fullyParallel Mode and Workers Configuration',
      'Test Sharding for CI – --shard=1/4 Pattern',
      'Built-In Reporters – html, list, json, junit, dot',
      'Allure Report Integration',
      'Video Recording on Failure, Console/Network Logs',
      'Trace Viewer – on-first-retry, always, on-failure',
      '--debug Flag, page.pause(), PWDEBUG Environment Variable',
      'Flaky Test Analysis and Retry Strategies',
    ],
  },
  {
    title: 'CI/CD Integration & Capstone Project',
    count: 6,
    topics: [
      'GitHub Actions Workflow YAML for Playwright',
      'node_modules and Browser Caching, HTML Report Publishing',
      'Environment Secrets Management',
      'Docker – Playwright Docker Image Setup',
      'Cloud Grids – BrowserStack, Sauce Labs, LambdaTest Integration',
      'Capstone: Full E-Commerce POM Framework – Login, Search, Cart, Checkout, Order Confirmation',
    ],
  },
]

const BATCHES = [
  { course: 'Playwright with TypeScript', faculty: 'Real-Time Expert', date: '01 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
  { course: 'Playwright with TypeScript', faculty: 'Real-Time Expert', date: '15 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: '10 modules covering Playwright from locators and assertions to POM architecture, API testing, CI/CD, and capstone.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Framework Building',  desc: 'Build a full e-commerce POM automation framework with login, cart, checkout, and cross-browser GitHub Actions CI.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',           desc: 'Learn from QA engineers with real-world Playwright automation experience across enterprise test pipelines.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',     desc: 'Interview preparation, portfolio guidance, and employer referrals targeting QA and automation engineering roles.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised Pro Training Tech certificate validating your Playwright and TypeScript automation expertise.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                 desc: 'Round-the-clock access to lab sessions, expert mentors, and lifetime course material for continued learning.' },
]

const REVIEWS = [
  { name: 'Sujith Varma',    course: 'Playwright with TypeScript', rating: 5, initials: 'SV', color: '#1565c0', text: 'Best automation course I have attended. The POM design pattern module and CI/CD integration with GitHub Actions are exactly what enterprise teams need. Got placed as a Senior QA Engineer.' },
  { name: 'Kavitha Rao',     course: 'Playwright with TypeScript', rating: 5, initials: 'KR', color: '#e05c2a', text: 'The network interception and API mocking sections are outstanding. Being able to test UI and API in the same framework is a game changer. Playwright is the future of test automation.' },
  { name: 'Harish Reddy',    course: 'Playwright with TypeScript', rating: 5, initials: 'HR', color: '#2e7d32', text: 'Excellent depth on visual testing with Percy and accessibility with axe-core. The Trace Viewer debugging section saved me countless hours in my first automation project. Highly recommend.' },
  { name: 'Padma Jayanthi',  course: 'Playwright with TypeScript', rating: 4, initials: 'PJ', color: '#6a1b9a', text: 'Well-structured from beginner concepts to advanced parallel execution and BrowserStack integration. Transitioned from manual testing to automation in 2 months. Placement support was excellent.' },
]

const RELATED = [
  { title: 'Full Stack Software Testing',  slug: 'full-stack-software-testing-online-training', icon: '🧪' },
  { title: 'Generative AI & Agentic AI',  slug: 'generative-ai-online-training',               icon: '🤖' },
  { title: 'Full Stack Java',             slug: 'full-stack-java-online-training',              icon: '☕' },
  { title: 'Full Stack Python',           slug: 'full-stack-python-online-training',            icon: '🐍' },
  { title: 'Data Science with AI',        slug: 'data-science-online-training',                 icon: '🧠' },
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
  { id: 'overview',          label: 'Overview'          },
  { id: 'curriculum',        label: 'Curriculum'        },
  { id: 'certificate',       label: 'Certificate'       },
  { id: 'upcoming-batches',  label: 'Upcoming Batches'  },
  { id: 'training-features', label: 'Training Features' },
  { id: 'reviews',           label: 'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function PlaywrightTSDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name: '', email: '', mobile: '', course: 'Playwright with TypeScript', mode: 'Online' })
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

      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/courses">Software Testing</Link>
            <span>›</span>
            <span>Playwright with TypeScript</span>
          </nav>
        </div>
      </div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/playwright-automation-online-training.jpg"
            alt="Playwright with TypeScript Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Playwright with TypeScript</h1>
              <p className="fsj-banner__sub">POM Framework · Cross-Browser Testing · API Testing · Visual Testing · CI/CD Integration</p>
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
                    <option>01 Jun - 7:00 PM IST</option>
                    <option>15 Jun - 7:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>2 Months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>18000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a href="/curriculum/playwright-typescript-curriculum.pdf" className="fsj-btn fsj-btn--outline" onClick={e => e.preventDefault()}>
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

      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fsj-container">
        <div className="fsj-layout">
          <main className="fsj-content">

            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  This Playwright with TypeScript course teaches learners to build reliable, fast, and
                  scalable test scripts for real-world applications through hands-on experience in UI
                  automation, API testing, visual testing, cross-browser execution, and CI/CD integration.
                  It is one of the most comprehensive automation testing programmes available today.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Starting from Playwright architecture and TypeScript fundamentals, the course progresses
                  through the Locator API, auto-wait mechanisms, and web-first assertions. Students learn
                  Page Object Model design patterns, fixture composition, and data-driven testing with
                  Faker.js and TypeScript generics.
                </p>
                <p className="fsj-para">
                  Advanced modules cover network interception and API mocking, visual regression with Percy,
                  accessibility testing with axe-core, parallel sharding, Allure reporting, Trace Viewer
                  debugging, and full CI/CD pipelines with GitHub Actions, Docker, and BrowserStack —
                  culminating in a complete e-commerce capstone project.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Understand Playwright architecture and TypeScript fundamentals for test automation</li>
                  <li>Implement reliable element location using accessibility-first and CSS/XPath locators</li>
                  <li>Execute end-to-end testing across Chromium, Firefox, and WebKit browsers</li>
                  <li>Design reusable and maintainable POM automation frameworks</li>
                  <li>Perform API testing and hybrid UI+API test patterns within Playwright</li>
                  <li>Conduct visual regression testing and WCAG accessibility audits</li>
                  <li>Integrate tests with GitHub Actions CI/CD pipelines and cloud grids</li>
                  <li>Generate and analyse comprehensive Allure and HTML test reports</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic programming knowledge — variables, functions, control structures</li>
                  <li>JavaScript familiarity helpful (not mandatory)</li>
                  <li>Foundational software testing and web technology understanding</li>
                  <li>HTML, CSS, and browser behaviour basics advantageous</li>
                  <li>Beginner-friendly with clear foundational coverage provided</li>
                </ul>

                <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Now
                </button>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button className="fsj-acc__head" onClick={() => toggleSection(i)} aria-expanded={!!openSections[i]}>
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
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Playwright with TypeScript course, you will receive
                  an industry-recognised certificate from Pro Training Tech validating your expertise in
                  modern web automation, POM framework design, API testing, and CI/CD integration.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Playwright with TypeScript Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Playwright with TypeScript</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>Drop a Query</button>
                </div>
              </div>
            )}

            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr><th>Course</th><th>Faculty</th><th>Date</th><th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th></tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td><td>{b.date}</td><td>{b.time}</td>
                          <td><span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>{b.mode}</span></td>
                          <td>{b.type}</td>
                          <td><button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>{b.link}</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

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
                  <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Playwright with TypeScript</option>
                    <option>Full Stack Software Testing</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Data Science with AI</option>
                    <option>Generative AI &amp; Agentic AI with Python</option>
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

      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Playwright with TypeScript)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">6.5L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button className="fsj-logo-arrow fsj-logo-arrow--left" aria-label="Previous logos"
              disabled={logoPage === 0} onClick={() => setLogoPage(p => Math.max(0, p - 1))}>&#8592;</button>
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
            <button className="fsj-logo-arrow fsj-logo-arrow--right" aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1} onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}>&#8594;</button>
          </div>
        </div>
      </section>

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
