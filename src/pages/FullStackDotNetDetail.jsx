import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'C# 10.0 & .NET Runtime',
    count: 24,
    topics: [
      '.NET Languages, Compilers & Platform Independence',
      'CIL / MSIL Code & Language Interoperability',
      '.NET Framework, .NET Core, .NET 5 & .NET 6',
      'Architecture of .NET Runtime & Managed Code',
      'CLR – Security Manager, JIT Compiler, Garbage Collector',
      'History of C# – Versions & Features',
      'Writing the First C# Program',
      'C# Data Types (int, float, decimal, bool, char, string, DateTime)',
      'Value Types vs Reference Types & Nullable Types',
      'Implicitly Typed & Dynamic Variables',
      'Boxing & Un-Boxing',
      'Conditional Statements & Jump Statements',
      'Single & Multi-Dimensional Arrays, Jagged Arrays',
      'Working with Visual Studio IDE (Project / Solution Templates)',
      'Encapsulation – Methods, Parameters, Constructors, Static Keyword',
      'Inheritance – Types, Parent-Child Class Relationships',
      'Polymorphism – Overloading, Overriding, Sealed Classes',
      'Abstract Classes & Methods',
      'Interfaces & Multiple Inheritance',
      'Extension Methods',
      'Enums, Finalizers, Properties, Indexers & Deconstructors',
      'Exception Handling (Try / Catch / Finally, Custom Exceptions)',
      'Delegates, Lambda Expressions & Anonymous Methods',
      'Partial Classes, Anonymous Types & Miscellaneous Members',
    ]
  },
  {
    title: 'Collections, LINQ & ADO.NET',
    count: 18,
    topics: [
      'Stack, Queue, ArrayList & HashTable',
      'Generics & Generic Collections (List, Dictionary)',
      'LINQ to Objects, Databases & XML',
      'Implementing LINQ on Arrays & Collections',
      'ODBC, OLEDB & ADO.NET Providers',
      'ADO.NET Connected Architecture (DataReader)',
      'ADO.NET Disconnected Architecture (DataSet)',
      'Connection Strings & Configuration Files',
      'DataTable, DataRow, DataColumn, DataView, DataRelation',
      'Working with Stored Procedures',
      'Data Binding with GridView & DataGrid',
      'Private, Shared & Global Assembly Cache',
      'Assembly Versioning & Contents',
      'Task Parallel Library (TPL) – Task vs Threads',
      'Asynchronous Programming (Async & Await)',
      'Parallel.For & Parallel.ForEach',
      'Task Chaining & Cancellation Tokens',
      'Thread Synchronization',
    ]
  },
  {
    title: 'HTML, CSS & JavaScript',
    count: 16,
    topics: [
      'HTML Fundamentals & Structural Elements',
      'Formatting, Images, Anchor Tags & Tables',
      'HTML Forms & Form Controls',
      'HTML5 New Semantic Elements',
      'CSS Introduction, Selectors & Box Model',
      'CSS Styling, Borders & Backgrounds',
      '2D / 3D Transforms, Transitions & Animations',
      'Responsive Design Basics',
      'JavaScript Variables, Data Types & Operators',
      'Control Statements, Loops & Arrays',
      'Functions, Objects & DOM Manipulation',
      'Event Handling & BOM (Window Object)',
      'JavaScript Validations & Regular Expressions',
      'jQuery Introduction & DOM Manipulation',
      'jQuery AJAX Calls',
      'Bootstrap Grid & Components',
    ]
  },
  {
    title: 'ASP.NET MVC 5.0',
    count: 22,
    topics: [
      'Windows vs Web vs Distributed Applications',
      'ASP.NET vs ASP.NET Core Architecture',
      'MVC Design Pattern – Controller, View & Model',
      'Request Flow in ASP.NET MVC',
      'Creating Controllers & Action Methods',
      'URL Routing – Parameters & Default Values',
      'Action Results & Razor Views',
      'Passing Data: ViewData, ViewBag, TempData & Sessions',
      'Strongly Typed Models',
      'HTML Helpers & Strongly Typed HTML Helpers',
      'Partial Views (Html.Partial, Html.RenderPartial)',
      'Layout Views & _ViewStart.cshtml',
      'Bundling & Minification (BundleConfig.cs)',
      'Areas in MVC – Creation & Registration',
      'Data Annotations & Validations (Required, Range, Remote)',
      'LINQ to SQL – CRUD Operations',
      'ADO.NET Entity Framework (DB First, Code First, Model First)',
      'Scaffold Templates (Index, Details, Create, Edit, Delete)',
      'Filters (Action, Authorization, Exception, Custom)',
      'Authentication & Authorization (AllowAnonymous)',
      'jQuery & AJAX Integration in MVC',
      'Web API – HTTP Methods, CORS & Consuming from MVC',
    ]
  },
  {
    title: 'ASP.NET Core 6.0 (MVC Core)',
    count: 20,
    topics: [
      '.NET Core vs ASP.NET Core – Introduction',
      'ASP.NET Core Project Structure & Program.cs',
      'Startup & Middleware – Configure & ConfigureServices',
      'Exception, Routing & Static Files Middleware',
      'Hosting Models – Kestrel & Reverse Proxy Servers',
      'Controllers, Routing & MVC Design Pattern',
      'Views with Tag Helpers (Built-in & Custom)',
      'Models & Strongly Typed Views',
      'Entity Framework Core – Architecture & DbContext',
      'EF Core Migrations',
      'EF Core DB First & Code First Approaches',
      'CRUD Application with MVC Core (DB First)',
      'CRUD Application with MVC Core (Code First)',
      'Dependency Injection – Containers & Implementation',
      'Error Handling (Client & Server Errors)',
      'ASP.NET Core Identity – Authentication & Authorization',
      'Open Authentication (OAuth)',
      'Web API Core – Creating & Testing with Swagger',
      'Consuming Web API Core in MVC (jQuery & C#)',
      'Publishing & Hosting on Microsoft Azure',
    ]
  },
  {
    title: 'SQL Server',
    count: 16,
    topics: [
      'SQL Server Installation & Management Studio',
      'DDL – CREATE, ALTER, DROP, TRUNCATE',
      'DML – INSERT, UPDATE, DELETE',
      'DQL – SELECT, WHERE, ORDER BY, GROUP BY',
      'Constraints (Primary Key, Foreign Key, Unique, Check)',
      'Joins (Inner, Left, Right, Full Outer, Self)',
      'Subqueries & Nested Queries',
      'Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)',
      'Views, Indexes & Stored Procedures',
      'Triggers & User-Defined Functions',
      'Transactions & Error Handling in SQL',
      'T-SQL Programming',
      'Common Table Expressions (CTEs)',
      'Database Normalization (1NF, 2NF, 3NF)',
      'ADO.NET Integration with SQL Server',
      'Connection Pooling & Performance Optimization',
    ]
  },
  {
    title: 'Angular (Frontend Framework)',
    count: 14,
    topics: [
      'Introduction to Angular & TypeScript',
      'Angular Architecture & CLI Setup',
      'Components & Templates',
      'Data Binding (One-way, Two-way, Event)',
      'Angular Directives (ngIf, ngFor, ngSwitch)',
      'Angular Services & Dependency Injection',
      'Angular Forms (Template-Driven & Reactive)',
      'Angular Routing & Navigation',
      'HTTP Client & REST API Integration',
      'Observables & RxJS',
      'Angular Modules (NgModule)',
      'Angular Pipes (Built-in & Custom)',
      'Angular Animations',
      'Unit Testing in Angular',
    ]
  },
  {
    title: 'Tools & Deployment',
    count: 8,
    topics: [
      'Git & GitHub – Version Control Fundamentals',
      'Branching, Merging & Pull Requests',
      'Visual Studio & VS Code Setup',
      'NuGet Package Manager',
      'IIS (Internet Information Services) Setup',
      'Publishing .NET Apps (File System, Web Deploy)',
      'Microsoft Azure – Hosting .NET Applications',
      'Swagger – API Documentation & Testing',
    ]
  },
]

const BATCHES = [
  { course:'Full Stack .NET Core', faculty:'Real-Time Expert', date:'01 Jun', time:'9:00 AM IST', mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack .NET Core', faculty:'Real-Time Expert', date:'01 Jun', time:'9:00 AM IST', mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'Full-stack .NET coverage from C# 10 and ASP.NET MVC to .NET Core 6, Angular, SQL Server and Azure.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Projects',             desc: 'Build real-world enterprise web applications using ASP.NET Core MVC, Web API, and Angular.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from Microsoft-stack specialists with live enterprise project experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Dedicated placement support, mock interviews, resume preparation, and employer referrals.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your Full Stack .NET Core development skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock lab support, doubt-clearing sessions, and access to recorded lectures.' },
]

const REVIEWS = [
  { name:'Vikram Nair',    course:'Full Stack .NET Core', rating:5, initials:'VN', color:'#1565c0', text:'The Full Stack .NET Core course is outstanding. The curriculum covers everything from C# fundamentals to ASP.NET Core MVC, Web API, and Azure deployment. I transitioned from a junior role to a senior .NET developer position at an MNC within months.' },
  { name:'Neha Gupta',     course:'Full Stack .NET Core', rating:5, initials:'NG', color:'#e05c2a', text:'Excellent training with real-world project focus. The Entity Framework Core and Web API sections were especially thorough. The Angular integration module gave me the full-stack confidence I needed. Highly recommend!' },
  { name:'Arjun Reddy',    course:'Full Stack .NET Core', rating:5, initials:'AR', color:'#2e7d32', text:'Best .NET training available. The trainer explains every concept from first principles with live examples. The placement team was proactive and helped me land a great role. The Azure deployment section was a bonus.' },
  { name:'Meera Krishnan', course:'Full Stack .NET Core', rating:4, initials:'MK', color:'#6a1b9a', text:'Well-structured programme covering the entire .NET stack. Mock interview sessions and resume workshops made a real difference. The SQL Server and LINQ sections are especially thorough and exactly what interviews ask.' },
]

const RELATED = [
  { title:'Full Stack Java',             slug:'full-stack-java-online-training',                icon:'☕' },
  { title:'Full Stack Python',           slug:'full-stack-python-online-training',              icon:'🐍' },
  { title:'Full Stack Software Testing', slug:'full-stack-software-testing-online-training',    icon:'🧪' },
  { title:'Full Stack Data Science',     slug:'full-stack-data-science-ai-online-training',     icon:'📊' },
  { title:'UI Full Stack React',         slug:'ui-full-stack-react',                             icon:'⚛️' },
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

export default function FullStackDotNetDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 9:00 AM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack .NET Core', mode:'Online' })
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
            <span>Full Stack .NET Core</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/images/banner_image_1712208971151"
            alt="Full Stack .NET Core Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack .NET Core Online Training</h1>
              <p className="fsj-banner__sub">C# · ASP.NET MVC · .NET Core 6 · Angular · SQL Server · Azure</p>
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
                    <option>01 Jun - 9:00 AM IST</option>
                    <option>15 Jun - 9:00 AM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>20000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/full-stack-dotnet-curriculum.pdf"
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
                  The Full Stack .NET Core programme provides a comprehensive online training experience
                  tailored for individuals eager to excel in both frontend and backend development
                  utilising the .NET framework. Participants master HTML, CSS, JavaScript, C#,
                  ASP.NET Core, Angular, and SQL Server through engaging modules, hands-on projects,
                  and real-world scenarios.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  Beginning with web development fundamentals and C# 10.0, the curriculum progresses
                  through frontend technologies (HTML, CSS, JavaScript, Bootstrap, Angular) and deep
                  backend development with ASP.NET MVC 5, ASP.NET Core 6, Web API, Entity Framework
                  Core, and SQL Server.
                </p>
                <p className="fsj-para">
                  The programme emphasises practical examples, hands-on projects, and real-world
                  enterprise scenarios — including authentication, dependency injection, LINQ, ADO.NET,
                  and deploying .NET applications to Microsoft Azure. Learners leave fully prepared
                  for full-stack .NET developer roles in modern tech companies.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Understand web development technologies and .NET framework capabilities</li>
                  <li>Build responsive UIs with HTML, CSS, JavaScript, Bootstrap, and Angular</li>
                  <li>Gain backend proficiency in C#, ASP.NET MVC, and ASP.NET Core 6</li>
                  <li>Design and query relational databases using SQL Server and LINQ</li>
                  <li>Work with Entity Framework Core (DB First & Code First approaches)</li>
                  <li>Build and consume RESTful Web APIs with JWT authentication</li>
                  <li>Implement dependency injection, middleware, and authentication in .NET Core</li>
                  <li>Understand version control with Git and GitHub</li>
                  <li>Deploy .NET applications to IIS and Microsoft Azure</li>
                  <li>Apply testing, debugging, and security best practices</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic programming concepts understanding</li>
                  <li>C# programming language familiarity (helpful but not mandatory)</li>
                  <li>Object-oriented programming (OOP) principles knowledge</li>
                  <li>Web development fundamentals (HTML, CSS) awareness</li>
                  <li>Relational databases and SQL awareness</li>
                  <li>Version control experience (Git) is a plus</li>
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
                  Upon successful completion of the Full Stack .NET Core course, you will receive an
                  industry-recognised certificate from Pro Training Tech validating your expertise
                  in full-stack .NET development.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Full Stack .NET Core Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Full Stack .NET Core Development</div>
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
                    <option>Full Stack .NET Core</option>
                    <option>Full Stack Java</option>
                    <option>Full Stack Python</option>
                    <option>Full Stack Software Testing</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>UI Full Stack React</option>
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
              Average package of course <strong>(Full Stack .NET Core)</strong>
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
