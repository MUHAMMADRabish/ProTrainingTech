import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Introduction to ChatGPT',
    count: 8,
    topics: [
      'What is ChatGPT?',
      'History and Evolution of ChatGPT',
      'Understanding Large Language Models (LLMs)',
      'Difference Between GPT-3, GPT-3.5, GPT-4, and GPT-4 Turbo',
      'Use Cases and Capabilities',
      'ChatGPT in Daily Productivity',
      'ChatGPT for Content Creation',
      'ChatGPT in Education, Research, and Business',
    ],
  },
  {
    title: 'ChatGPT for Beginners',
    count: 6,
    topics: [
      'Creating an OpenAI Account',
      'Exploring the ChatGPT Interface',
      'Understanding ChatGPT Modes – Default, Custom GPTs, Plugins, Browsing',
      'What is a Prompt?',
      'Anatomy of Effective Prompts',
      'Tips for Clear and Concise Prompts',
    ],
  },
  {
    title: 'Intermediate Prompt Engineering',
    count: 6,
    topics: [
      'System vs User Prompts',
      'Using Temperature and Tokens Effectively',
      'Role Prompting and Task-Based Prompts',
      'Maintaining Context in Multi-Turn Conversations',
      'Improving Coherence Across Conversation Turns',
      'Resetting Context When Needed',
    ],
  },
  {
    title: 'Advanced Prompt Engineering',
    count: 7,
    topics: [
      'Creating Reusable Prompt Templates',
      'Dynamic Input Integration – {{name}}, {{goal}} Patterns',
      'Step-by-Step Chain of Thought Reasoning Prompts',
      'Guided Problem-Solving and Ideation',
      'Browsing Tool for Live Data (Pro Users)',
      'Code Interpreter – Python Tool',
      'Image Analysis with Vision Tool',
    ],
  },
  {
    title: 'ChatGPT for Professionals',
    count: 9,
    topics: [
      'Writing and Debugging Code with ChatGPT',
      'Generating Documentation Automatically',
      'Integrating with APIs Using GPT',
      'Ad Copy Generation for Digital Marketing',
      'SEO Blog Writing and Keyword Optimization',
      'Social Media Calendar Generation',
      'Lesson Planning and Quiz Generation for Educators',
      'Tutoring with ChatGPT',
      'Personalized Learning Paths',
    ],
  },
  {
    title: 'Building with Custom GPTs',
    count: 6,
    topics: [
      'Introduction to GPT Builder',
      'Designing Behavior and Personality for Custom GPTs',
      'Uploading Files, Setting Actions, and APIs',
      'GPTs for Customer Support',
      'GPTs for Training Assistants',
      'GPTs as AI Coaches',
    ],
  },
  {
    title: 'Ethics, Safety & Limitations',
    count: 6,
    topics: [
      'Understanding Hallucinations in LLMs',
      'Avoiding Bias and Misinformation',
      'Ensuring Ethical and Safe AI Usage',
      'Knowing What GPT Can and Cannot Do',
      'Recognizing When to Use Human Verification',
      'Staying Up to Date with Model Improvements',
    ],
  },
]

const BATCHES = [
  { course: 'Chat GPT', faculty: 'Real-Time Expert', date: '01 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
  { course: 'Chat GPT', faculty: 'Real-Time Expert', date: '15 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'From ChatGPT basics to advanced prompt engineering, custom GPTs, API integration, and ethical AI usage.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: 'Hands-On Practice',             desc: 'Build custom GPTs, write professional prompts, integrate APIs, and automate real-world workflows.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from AI practitioners with deep experience deploying conversational AI in production environments.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Portfolio guidance, interview preparation, and employer referrals for AI and automation-focused roles.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate from Pro Training Tech validating your ChatGPT and prompt engineering skills.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock access to course materials, expert mentors, and lab sessions for uninterrupted learning.' },
]

const REVIEWS = [
  { name: 'Abhisek Biswal',  course: 'Chat GPT', rating: 5, initials: 'AB', color: '#1565c0', text: 'Clear explanations, well-structured content, and practical examples. I now have a solid understanding of AI-powered conversations and can build custom GPTs confidently.' },
  { name: 'Neha Kapoor',     course: 'Chat GPT', rating: 5, initials: 'NK', color: '#e05c2a', text: 'The prompt engineering modules are exceptional. Learning role prompting, chain of thought, and dynamic templates gave me skills I apply daily in my content marketing job.' },
  { name: 'Suresh Babu',     course: 'Chat GPT', rating: 5, initials: 'SB', color: '#2e7d32', text: 'Fantastic course for developers. The API integration section and custom GPT builder modules helped me automate workflows at my company that used to take hours each week.' },
  { name: 'Divya Lakshmi',   course: 'Chat GPT', rating: 4, initials: 'DL', color: '#6a1b9a', text: 'Very comprehensive and up to date. The ethics and limitations module is something every AI user needs. Placement support was proactive and connected me with relevant opportunities.' },
]

const RELATED = [
  { title: 'Generative AI & Agentic AI',         slug: 'generative-ai-online-training',              icon: '🤖' },
  { title: 'Advanced Generative & Agentic AI',   slug: 'advanced-generative-and-agentic-ai',         icon: '🚀' },
  { title: 'MLOps & AIOps',                      slug: 'mlops-and-aiops-online-training',            icon: '⚙️' },
  { title: 'Data Science with AI',               slug: 'data-science-online-training',               icon: '🧠' },
  { title: 'Data Analytics & Business Analytics',slug: 'data-analytics-online-training',             icon: '📈' },
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

export default function ChatGPTDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name: '', email: '', mobile: '', course: 'Chat GPT', mode: 'Online' })
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
            <Link to="/courses">Data Science</Link>
            <span>›</span>
            <span>Chat GPT</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/chat-gpt-online-training.jpg"
            alt="Chat GPT Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Chat GPT Online Training</h1>
              <p className="fsj-banner__sub">Prompt Engineering · Custom GPTs · API Integration · Conversational AI · Ethics</p>
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
                <div className="fsj-select-group" style={{ display: 'none' }}>
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
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>15000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  style={{ display: 'none' }}
                  href="/curriculum/chat-gpt-curriculum.pdf"
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

            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  This Chat GPT online training provides an in-depth exploration of ChatGPT, the powerful
                  language model developed by OpenAI. The programme is designed to help participants understand
                  its capabilities, architecture, and practical applications — from beginner prompt writing
                  to building custom GPTs and integrating the API into real-world workflows.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  The course progresses from ChatGPT fundamentals through intermediate and advanced prompt
                  engineering techniques including role prompting, chain of thought reasoning, and dynamic
                  templates. Students explore professional applications for developers, marketers, and educators,
                  then build custom GPTs using the GPT Builder.
                </p>
                <p className="fsj-para">
                  The programme concludes with ethical AI usage, hallucination mitigation, bias avoidance,
                  and understanding the boundaries of large language models — preparing learners to use AI
                  responsibly in their careers.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Develop a comprehensive understanding of ChatGPT architecture, capabilities, and limitations</li>
                  <li>Master prompt engineering from beginner to advanced level including chain of thought and role prompting</li>
                  <li>Build and deploy custom GPTs using the OpenAI GPT Builder</li>
                  <li>Integrate ChatGPT with APIs for developer and automation use cases</li>
                  <li>Apply ChatGPT professionally for content creation, marketing, education, and coding</li>
                  <li>Understand and apply ethical AI principles including bias mitigation and responsible usage</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic NLP and Natural Language Processing concepts</li>
                  <li>Familiarity with machine learning principles</li>
                  <li>Knowledge of Python or any programming language</li>
                  <li>Understanding of text preprocessing techniques</li>
                  <li>Awareness of neural networks and deep learning basics</li>
                </ul>

                <button
                  className="fsj-btn fsj-btn--primary fsj-enroll-now"
                  onClick={() => scrollToTab('upcoming-batches')}
                >
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
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Chat GPT course, you will receive an industry-recognised
                  certificate from Pro Training Tech validating your expertise in prompt engineering,
                  custom GPT development, API integration, and responsible AI usage.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Chat GPT Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Chat GPT Online Training</div>
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
                      <tr>
                        <th>Course</th><th>Faculty</th><th>Date</th>
                        <th>Time</th><th>Mode</th><th>Batch Type</th><th>Meeting Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td>
                          <td>{b.date}</td>
                          <td>{b.time}</td>
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
                    <option>Chat GPT</option>
                    <option>Generative AI &amp; Agentic AI with Python</option>
                    <option>Advanced Generative &amp; Agentic AI</option>
                    <option>MLOps &amp; AIOps</option>
                    <option>Data Science with AI</option>
                    <option>Data Analytics &amp; Business Analytics</option>
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
              Average package of course <strong>(Chat GPT)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">2L</span>
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
