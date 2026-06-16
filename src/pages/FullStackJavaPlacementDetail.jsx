import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

const CURRICULUM = [
  {
    title: 'Programming Foundation with C',
    count: 8,
    topics: ['Introduction to C','Language Evolution','Fundamentals','Data Types','I/O Operations','Control Structures','Functions','Pointers & Arrays'],
  },
  {
    title: 'Web Development with HTML & CSS',
    count: 10,
    topics: ['Web Basics','HTML Structure','Media Integration','HTML5 Semantics','CSS Fundamentals','Selectors & Properties','Box Model','Flexbox & Grid','Responsive Design','Bootstrap'],
  },
  {
    title: 'JavaScript Programming',
    count: 12,
    topics: ['Essentials','Variables & Data Types','Operators','Control Flow','Arrays & Functions','OOP in JS','DOM Manipulation','BOM','Events','Async Programming','ES6+ Features','Error Handling'],
  },
  {
    title: 'Core Java Programming',
    count: 15,
    topics: ['Java Basics','OOP Concepts','Control Structures','Advanced Topics','Arrays','Strings','Exception Handling','Multithreading','File I/O','Collections Framework','Generics','Streams API','Lambda','JDK 8 Features','JDK 11+ Features'],
  },
  {
    title: 'Oracle SQL & PL/SQL',
    count: 10,
    topics: ['Database Fundamentals','DDL & DML','DRL','Integrity Constraints','Joins','Sub Queries','Views & Indexes','PL/SQL Basics','Cursors','Stored Procedures'],
  },
  {
    title: 'MongoDB (NoSQL)',
    count: 5,
    topics: ['Introduction to NoSQL','Documents & Collections','CRUD Operations','Aggregation','SQL vs NoSQL Comparison'],
  },
  {
    title: 'Advanced Java (J2EE)',
    count: 8,
    topics: ['JDBC','Servlets','JSP','MVC Architecture','DAO Pattern','Filters & Listeners','Annotations','Web Security'],
  },
  {
    title: 'Spring Boot & Microservices',
    count: 12,
    topics: ['Spring Boot Intro','REST APIs','JPA & Hibernate','Spring Security','Microservices Design','Spring Cloud','API Gateway','Config Server','Messaging Queues','OAuth2','Swagger','Cloud Hosting'],
  },
  {
    title: 'React JS',
    count: 10,
    topics: ['React Basics','Components & Props','State Management','Hooks','React Router','Redux','Axios & APIs','Material UI','Testing','Deployment'],
  },
  {
    title: 'Communication & Soft Skills',
    count: 8,
    topics: ['Functional English','Grammar','Sentence Construction','JAM Sessions','Group Discussions','Resume Writing','Email Etiquette','Interview Preparation'],
  },
  {
    title: 'CRT (Campus Recruitment Training)',
    count: 6,
    topics: ['Quantitative Aptitude','Logical Reasoning','Verbal Ability','Technical MCQs','Mock Tests','HR Interview Practice'],
  },
]

const BATCHES = [
  { course:'Full Stack Java Placement', faculty:'Real-Time Expert', date:'8 Jun', time:'11:00 AM IST', mode:'online',  type:'Online Training',    link:'Join' },
  { course:'Full Stack Java Placement', faculty:'Real-Time Expert', date:'8 Jun', time:'11:00 AM IST', mode:'offline', type:'Classroom Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color:'#1565c0', bg:'#dbeafe', title:'Comprehensive Software Training',    desc:'In-depth programs covering the latest industry technologies from C to Spring Boot.' },
  { Icon: GraduationCap, color:'#16a34a', bg:'#dcfce7', title:'Expert Instructors',                desc:'Learn from industry professionals with real-world practical insights and mentorship.' },
  { Icon: Code2,         color:'#e05c2a', bg:'#ffedd5', title:'Practical Hands-On Projects',       desc:'Build real-world applications with personal credentials and automated test case evaluation.' },
  { Icon: Briefcase,     color:'#9333ea', bg:'#f3e8ff', title:'Dedicated Job Placement Assistance',desc:'Specialized support for securing post-training employment with HR and technical mock interviews.' },
  { Icon: Award,         color:'#dc2626', bg:'#fee2e2', title:'Mock Interviews & Soft Skills',     desc:'Interview preparation sessions and essential workplace skill development included.' },
  { Icon: Headphones,    color:'#0891b2', bg:'#cffafe', title:'Interactive Coding Challenges',     desc:'Topic-wise MCQs, proof-of-concept exercises, and weekly performance reports.' },
]

const REVIEWS = [
  { name:'Arjun Mehta',    course:'Full Stack Java Placement', rating:5, initials:'AM', color:'#1565c0', text:'The placement assistance program is outstanding. The mock interviews and coding challenges prepared me thoroughly. I got placed at an MNC within a month of completing the course.' },
  { name:'Divya Rao',      course:'Full Stack Java Placement', rating:5, initials:'DR', color:'#e05c2a', text:'The weekly performance reports kept me on track. The mentor support and communication skills training made a huge difference during campus recruitment.' },
  { name:'Suresh Kumar',   course:'Full Stack Java Placement', rating:5, initials:'SK', color:'#2e7d32', text:'Best investment for a career switch. The curriculum covers everything from basics to microservices. The dedicated placement team helped me get multiple interview calls.' },
  { name:'Kavitha Nair',   course:'Full Stack Java Placement', rating:4, initials:'KN', color:'#6a1b9a', text:'Excellent program with hands-on coding practice. The platform with automated test cases was very helpful. The soft skills training was a great add-on for interview readiness.' },
]

const RELATED = [
  { title:'Full Stack Java',                  slug:'full-stack-java-online-training',                              icon:'☕' },
  { title:'Full Stack Python',                slug:'full-stack-python-online-training',                            icon:'🐍' },
  { title:'Full Stack .NET Placement',        slug:'full-stack-dot-net-placement-assistance-program-online-training', icon:'🔷' },
  { title:'Full Stack Software Testing',      slug:'full-stack-software-testing-online-training',                  icon:'🧪' },
  { title:'Full Stack Data Science & AI',     slug:'full-stack-data-science-ai-online-training',                   icon:'📊' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png','https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png','https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png','https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png','https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png','https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png','https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png','https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png','https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png','https://images.nareshit.com/images/logo_1706095110331.png',
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

export default function FullStackJavaPlacementDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Full Stack Java Placement', mode:'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) return
      setSticky(headerRef.current.getBoundingClientRect().bottom <= 64)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection = i => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000) }
  const scrollToTab = id => {
    setActiveTab(id)
    if (headerRef.current) window.scrollTo({ top: headerRef.current.offsetTop + headerRef.current.offsetHeight - 64, behavior: 'smooth' })
  }

  return (
    <div className="fsj-page">
      <Navbar />

      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link><span>›</span>
            <Link to="/job-guarantee-courses">Job Placement</Link><span>›</span>
            <span>Full Stack Java Placement Assistance</span>
          </nav>
        </div>
      </div>

      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img src="https://images.nareshit.com/full-stack-java-placement-assistance-program-nareshit.jpg"
            alt="Full Stack Java Placement Assistance Program"
            className="fsj-banner__img"
            onError={e => { e.target.style.display='none'; e.target.parentElement.classList.add('fsj-banner--fallback') }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Full Stack Java Placement Assistance Program</h1>
              <p className="fsj-banner__sub">Comprehensive Java Training with Dedicated Job Placement Support</p>
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
                <div className="fsj-select-group" style={{ display: 'none' }}>
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select"><option>Real-Time Expert</option></select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select"><option>8 Jun - 11:00 AM IST</option></select>
                </div>
                <div className="fsj-info-pill"><span className="fsj-info-pill__icon">🕐</span><span>Dur: <strong>6 months</strong></span></div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}><span className="fsj-info-pill__icon">₹</span><span>Fee: <strong>35,000 /-</strong></span></div>
              </div>
              <div className="fsj-controls__right">
                <a style={{ display: 'none' }} href="#curriculum" className="fsj-btn fsj-btn--outline" onClick={e => { e.preventDefault(); scrollToTab('curriculum') }}>↓ Download Curriculum</a>
                <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Enroll Course</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button key={tab.id} role="tab" aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}>{tab.label}</button>
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
                <p className="fsj-para">The Full Stack Java Placement Assistance Program is a meticulously crafted course designed to empower learners with Java proficiency and secure lucrative software development roles. The program combines theoretical foundations with hands-on exercises and expert mentorship for developing practical, industry-ready skills.</p>
                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">This placement-focused program covers everything from programming basics in C through modern full-stack Java development with Spring Boot and React. It includes a dedicated AI Virtual Lab, weekly performance reports, and automated test case evaluation to keep students on track.</p>
                <p className="fsj-para">The curriculum also incorporates communication skills, soft skills training, and CRT (Campus Recruitment Training) to prepare students for the complete hiring process — not just technical rounds.</p>
                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Gain access to a practice platform with personal credentials</li>
                  <li>Evaluate code on a live platform with automated test case verification</li>
                  <li>Receive weekly performance reports for continuous improvement</li>
                  <li>Solve topic-wise MCQs and proof-of-concept exercises</li>
                  <li>Benefit from dedicated mentor support throughout the program</li>
                  <li>Attend regular HR and technical mock interview sessions</li>
                  <li>Develop communication and soft skills for workplace readiness</li>
                </ul>
                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic programming concept knowledge</li>
                  <li>Familiarity with variables, loops, and conditional statements</li>
                  <li>Computer with internet access for online participation</li>
                  <li>No formal computer science education required</li>
                </ul>
                <button className="fsj-btn fsj-btn--primary fsj-enroll-now" onClick={() => scrollToTab('upcoming-batches')}>Enroll Now</button>
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
                                <span className="fsj-topic-num">{String(j+1).padStart(2,'0')}.</span>
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
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>Apply Now</button>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">Upon successful completion of the Full Stack Java Placement Assistance Program, you will receive an industry-recognised certificate from Pro Training Tech validating your expertise in full-stack Java development and job readiness.</p>
                <div className="fsj-cert-img-wrap">
                  <img src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png" alt="Certificate" className="fsj-cert-img"
                    onError={e => { e.target.style.display='none'; e.target.parentElement.innerHTML=`<div class="fsj-cert-placeholder"><div class="fsj-cert-placeholder__inner"><div class="fsj-cert-placeholder__logo">Pro Training Tech</div><div class="fsj-cert-placeholder__title">Certificate of Completion</div><div class="fsj-cert-placeholder__course">Full Stack Java Placement Program</div><div class="fsj-cert-placeholder__line"></div><div class="fsj-cert-placeholder__name">Student Name</div></div></div>` }}
                  />
                </div>
                <div style={{ textAlign:'center', marginTop:'1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline">Drop a Query</button>
                </div>
              </div>
            )}

            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead><tr><th>Course</th><th>Faculty</th><th>Date</th><th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th></tr></thead>
                    <tbody>
                      {BATCHES.map((b,i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td><td>{b.faculty}</td><td>{b.date}</td><td>{b.time}</td>
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
                  {FEATURES.map((f,i) => (
                    <div key={i} className="fsj-feature-card" style={{ '--feat-color':f.color, '--feat-bg':f.bg }}>
                      <div className="fsj-feature-card__icon-wrap" style={{ background:f.bg }}>
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
                  {REVIEWS.map((r,i) => (
                    <div key={i} className="fsj-review-card">
                      <div className="fsj-review-card__top">
                        <div className="fsj-rev-avatar" style={{ background:r.color }}>{r.initials}</div>
                        <div><div className="fsj-rev-name">{r.name}</div><div className="fsj-rev-course">{r.course}</div></div>
                      </div>
                      <div className="fsj-rev-stars">{Array.from({length:5},(_,j) => <span key={j} className={j<r.rating?'fsj-star--on':'fsj-star--off'}>★</span>)}</div>
                      <p className="fsj-rev-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          <aside className="fsj-sidebar">
            <a href="tel:+17035651995" className="fsj-advisor-btn"><span className="fsj-advisor-btn__icon">📞</span>+1-703-565-1995</a>
            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field"><input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleFormChange} /></div>
                <div className="fsj-form-field"><input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleFormChange} /></div>
                <div className="fsj-form-field"><input type="tel" name="mobile" placeholder="Mobile Number *" required value={formData.mobile} onChange={handleFormChange} /></div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Full Stack Java Placement</option><option>Full Stack Python</option><option>Full Stack .NET</option>
                    <option>Full Stack Software Testing</option><option>UI Full Stack React</option>
                  </select>
                </div>
                <div className="fsj-form-field">
                  <select name="mode" value={formData.mode} onChange={handleFormChange}>
                    <option>Online</option><option>Offline</option><option>Live Online</option>
                  </select>
                </div>
                <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">{submitted ? '✓ Submitted!' : 'Submit'}</button>
                <p className="fsj-form-terms">By submitting you agree to our <Link to="/terms-conditions">Terms of Use</Link> &amp; <Link to="/privacy-policy">Privacy Policy</Link>.</p>
              </form>
            </div>
          </aside>
        </div>
      </div>

      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">Average package of course <strong>(Full Stack Java Placement)</strong></div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">100%</span><span className="fsj-salary-stat__lbl">Avg salary hike</span></div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat"><span className="fsj-salary-stat__val">4–8L</span><span className="fsj-salary-stat__lbl">Avg Package</span></div>
            </div>
          </div>
        </div>
      </div>

      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button className="fsj-logo-arrow fsj-logo-arrow--left" aria-label="Previous" disabled={logoPage===0} onClick={() => setLogoPage(p => Math.max(0,p-1))}>&#8592;</button>
            <div className="fsj-logo-grid-wrap">
              <div className="fsj-logo-grid" style={{ transform:`translateX(-${logoPage*100}%)` }}>
                {Array.from({length:totalLogoPages},(_,page) => (
                  <div key={page} className="fsj-logo-page">
                    {MNC_LOGOS.slice(page*LOGOS_PER_PAGE, page*LOGOS_PER_PAGE+LOGOS_PER_PAGE).map((src,i) => (
                      <div key={i} className="fsj-logo-card"><img src={src} alt={`Company ${page*LOGOS_PER_PAGE+i+1}`} className="fsj-logo-card__img" /></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button className="fsj-logo-arrow fsj-logo-arrow--right" aria-label="Next" disabled={logoPage>=totalLogoPages-1} onClick={() => setLogoPage(p => Math.min(totalLogoPages-1,p+1))}>&#8594;</button>
          </div>
        </div>
      </section>

      <section className="fsj-related-section">
        <div className="fsj-container">
          <h2 className="fsj-related-title">Our Relevant Courses list</h2>
          <div className="fsj-related-grid">
            {RELATED.map((rc,i) => (
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
