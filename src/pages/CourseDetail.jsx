import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { COURSES, CATEGORY_COLORS } from '../data/courses'
import './CourseDetail.css'

// ─── Stars helpers ────────────────────────────────────────────────────────────
function Stars({ rating }) {
  if (!rating) return <span className="stars" style={{ color: '#ddd' }}>☆☆☆☆☆</span>
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}{half ? '⯨' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

function ReviewStars({ n }) {
  return (
    <span className="rev-stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? 'rev-star--on' : 'rev-star--off'}>★</span>
      ))}
    </span>
  )
}

// ─── Trainer map ──────────────────────────────────────────────────────────────
const TRAINERS = {
  'Full Stack':           { name: 'Durga Vihari',      title: 'Full Stack Expert',           exp: '15+ Years', students: '50,000+' },
  'DevOps':               { name: 'Anil Kumar',         title: 'DevOps & Cloud Architect',    exp: '12+ Years', students: '25,000+' },
  'Data Science':         { name: 'Mr. KV Rao',         title: 'Data Science Expert',         exp: '10+ Years', students: '20,000+' },
  'Cloud Computing':      { name: 'Mr. Pavan',          title: 'Cloud Computing Expert',      exp: '12+ Years', students: '18,000+' },
  'Software Testing':     { name: 'Mr. Mahesh',         title: 'Software Testing Expert',     exp: '10+ Years', students: '15,000+' },
  'Programming':          { name: 'Mr. Nataraj',        title: 'Programming & Java Expert',   exp: '14+ Years', students: '30,000+' },
  'Web Development':      { name: 'Mr. Prasad',         title: 'Web Development Expert',      exp: '10+ Years', students: '12,000+' },
  'Frameworks':           { name: 'Mr. Srikanth',       title: 'Frameworks & Backend Expert', exp: '10+ Years', students: '10,000+' },
  'Analytics':            { name: 'Mr. Sandeep',        title: 'Analytics & BI Expert',       exp: '8+ Years',  students: '8,000+'  },
  'Digital Marketing':    { name: 'Mr. Ramakanth',      title: 'Digital Marketing Expert',    exp: '8+ Years',  students: '6,000+'  },
  'Soft Skills':          { name: 'Mr. Amith Pandey',   title: 'Communication & Soft Skills', exp: '12+ Years', students: '15,000+' },
  'Data Base':            { name: 'Mr. Shiva Chaitanya', title: 'Database Expert',            exp: '10+ Years', students: '10,000+' },
  'Automations':          { name: 'Mr. Madhusudhan',    title: 'RPA & Automation Expert',     exp: '8+ Years',  students: '7,000+'  },
  'Mobile Technologies':  { name: 'Mr. Pavan Kumar',    title: 'Mobile Development Expert',   exp: '10+ Years', students: '8,000+'  },
  'Mulesoft':             { name: 'Mr. Sridhar',        title: 'Salesforce & MuleSoft Expert',exp: '8+ Years',  students: '5,000+'  },
  'Operating System':     { name: 'Mr. Kishore',        title: 'Linux & OS Expert',           exp: '12+ Years', students: '12,000+' },
  'Internships':          { name: 'Mr. KV Rao',         title: 'Internship Program Lead',     exp: '10+ Years', students: '5,000+'  },
  'Placement Assistance': { name: 'Mr. Ravi',           title: 'Placement Training Expert',   exp: '10+ Years', students: '10,000+' },
  'DevSecOps':            { name: 'Mr. Anil Kumar',     title: 'DevSecOps & Security Expert', exp: '10+ Years', students: '5,000+'  },
}

// ─── Build full detail from minimal data ─────────────────────────────────────
function buildDetail(c) {
  const t  = TRAINERS[c.category] || TRAINERS['Programming']
  const bg = CATEGORY_COLORS[c.category] || '#1e3a5f'
  const nameWords = t.name.replace(/^(Mr\.|Dr\.)\s*/i, '').trim().split(/\s+/)
  const initials  = (nameWords[0][0] + (nameWords.length > 1 ? nameWords[nameWords.length - 1][0] : nameWords[0][1] || '')).toUpperCase()

  return {
    ...c,
    trainer:            t.name,
    trainerTitle:       t.title,
    trainerExp:         t.exp,
    trainerStudents:    t.students,
    trainerInitials:    initials,
    trainerColor:       bg,
    trainerBio:         `${t.name} is a highly experienced ${c.category} specialist with over ${t.exp.replace('+', '')} of industry expertise, having worked with leading MNCs and technology startups. Renowned for practical, project-based teaching with real-world scenarios, ${t.name} has personally trained ${t.students} students and guided thousands into successful tech careers. The curriculum is regularly updated to reflect current industry standards and hiring trends.`,
    trainerSpecializations: [`${c.title} — Core to Advanced`, 'Industry Best Practices & Design Patterns', 'Real-World Project Walkthroughs', 'Technical Interview Preparation', 'Career Guidance & Placement Support'],
    startDate:   'Jun 2, 2026',
    duration:    c.category === 'Full Stack' ? '4–6 Months' : ['Cloud Computing', 'DevOps', 'Data Science'].includes(c.category) ? '2–3 Months' : '2 Months',
    mode:        'Online / Offline / Weekend',
    description: `This comprehensive ${c.title} course takes you from foundational concepts to job-ready expertise through hands-on projects and live mentorship. Fully aligned with current industry demands, the programme covers real-world scenarios and in-demand tools. Complete 5+ portfolio-ready projects, earn an industry-recognised certificate, and benefit from dedicated placement support.`,
    whatYouLearn: [
      `Master the core architecture and concepts of ${c.title}`,
      `Build production-ready applications using industry-standard tools`,
      `Apply best practices, design patterns, and clean code principles`,
      `Integrate databases, APIs, and third-party services seamlessly`,
      `Deploy and maintain applications on cloud and on-premise environments`,
      `Complete 5+ hands-on projects to build a strong portfolio`,
      `Implement security, performance optimisation, and scalability strategies`,
      `Prepare for technical interviews with guided mock sessions`,
      `Earn an industry-recognised completion certificate`,
      `Receive one-on-one placement support and career counselling`,
      `Access live doubt-clearing sessions throughout the programme`,
      `Get lifetime access to recorded lectures and updated study materials`,
    ],
    requirements: [
      'Basic computer literacy and a stable internet connection',
      'No prior domain experience required — beginners are welcome',
      'A laptop or PC with minimum 8 GB RAM recommended',
      'Dedication to consistent daily practice and project completion',
    ],
    whoIsFor: [
      'Fresh graduates seeking their first IT job at a top MNC',
      'Working professionals looking to upskill or switch domains',
      'Students preparing for campus placements and technical interviews',
      'Freelancers aiming to expand their technical skill set',
    ],
    highlights: [
      { icon: '🎥', label: '40+ Hours of live training' },
      { icon: '📄', label: '15+ Articles & study materials' },
      { icon: '📁', label: '10+ Downloadable resources' },
      { icon: '📜', label: 'Industry certificate on completion' },
      { icon: '♾️', label: 'Lifetime access to recordings' },
      { icon: '💼', label: 'Dedicated placement assistance' },
    ],
    curriculum: [
      { module: `Module 1: Introduction & Foundations`, lessons: [`Introduction to ${c.title}`, 'Environment & Tool Setup', 'Core Concepts & Terminology', 'Architecture & Design Overview', 'Hands-on Lab Session 1', 'Module Quiz & Assessment'] },
      { module: 'Module 2: Core Skills — Deep Dive', lessons: ['Advanced Concepts & Features', 'Industry Best Practices', 'Practical Workshop — Core Projects', 'Common Patterns & Anti-patterns', 'Code Review & Optimisation', 'Mini Project Implementation'] },
      { module: 'Module 3: Integration & Real-World Scenarios', lessons: ['Integration with Supporting Technologies', 'Working with APIs, Databases & Data', 'Security Fundamentals & Secure Coding', 'Industry Case Study Analysis', 'Problem-Solving Workshop', 'Live Project Build — Phase 1'] },
      { module: 'Module 4: Advanced Topics & Performance', lessons: ['Advanced Configuration & Customisation', 'Scalability, High Availability & Resilience', 'Monitoring, Logging & Debugging', 'Cloud Deployment & DevOps Basics', 'Performance Tuning & Profiling', 'Live Project Build — Phase 2'] },
      { module: 'Module 5: Capstone Projects & Placement Prep', lessons: ['Full Capstone Project — Design & Build', 'Code Review & Best Practices Walkthrough', 'Resume Building & LinkedIn Profile Optimisation', 'Mock Technical Interviews & Aptitude Prep', 'Communication & Soft Skills Workshop', 'Placement Drive, Job Referrals & Career Guidance'] },
    ],
    ratingBreakdown: { 5: 68, 4: 20, 3: 8, 2: 3, 1: 1 },
    reviewCards: [
      { name: 'Arjun Mehta',   role: `${c.category} Developer · TCS`,       rating: 5, initials: 'AM', color: bg,         date: 'March 2025',    text: `Excellent course with tremendous practical exposure. The ${c.title} content is thorough and perfectly aligned with what companies expect. I was placed at a top MNC within weeks of completing the programme — highly recommend!` },
      { name: 'Divya Rao',     role: 'Software Engineer · Infosys',          rating: 5, initials: 'DR', color: '#e05c2a',  date: 'January 2025',  text: 'The trainer explains every concept with outstanding real-world clarity. The live projects were invaluable for interview preparation. I highly recommend this course to anyone serious about building a solid career in tech.' },
      { name: 'Karthik Nair',  role: 'Developer · Wipro',                    rating: 4, initials: 'KN', color: bg,         date: 'November 2024', text: 'Great content structure and excellent mentorship throughout. The placement team is proactive and genuinely supportive. Would definitely recommend to anyone looking to upskill quickly and join a leading MNC.' },
      { name: 'Ananya Singh',  role: 'Engineer · HCL Technologies',          rating: 5, initials: 'AS', color: '#2e7d32',  date: 'September 2024', text: 'I went from complete beginner to job-ready in just a few months. The curriculum is very well structured, instructors are genuine industry experts, and the mock interview sessions gave me real confidence. Best investment I have ever made.' },
    ],
  }
}

// ─── Prepare detail: real data for enriched courses, generated for fallback ───
function prepareDetail(base) {
  if (!base.enriched) return buildDetail(base)

  const bg = CATEGORY_COLORS[base.category] || '#1e3a5f'
  const catTrainer = TRAINERS[base.category] || TRAINERS['Programming']

  // Compute initials from real trainer name, fall back to category trainer
  const trainerName  = base.trainer || catTrainer.name
  const cleanName    = trainerName.replace(/^(Mr\.|Dr\.|Miss\.|Ms\.)\s*/i, '').trim()
  const nameWords    = cleanName.split(/\s+/).filter(Boolean)
  const initials     = ((nameWords[0]?.[0] || '') + (nameWords.length > 1 ? nameWords[nameWords.length - 1][0] : (nameWords[0]?.[1] || ''))).toUpperCase() || 'NI'

  const specFromSkills = base.skills?.length > 0
    ? [`${base.title} — Core to Advanced`, ...base.skills.slice(0, 3).map(s => `${s} — Hands-on Training`), 'Technical Interview Preparation', 'Career Guidance & Placement Support']
    : [`${base.title} — Core to Advanced`, 'Industry Best Practices & Design Patterns', 'Real-World Project Walkthroughs', 'Technical Interview Preparation', 'Career Guidance & Placement Support']

  const generated = buildDetail(base)

  return {
    ...base,
    trainer:              trainerName,
    trainerTitle:         catTrainer.title,
    trainerExp:           base.trainerExp   || catTrainer.exp,
    trainerStudents:      base.trainerStudents || catTrainer.students,
    trainerInitials:      initials,
    trainerColor:         bg,
    trainerBio:           base.trainerBio   || generated.trainerBio,
    trainerSpecializations: specFromSkills,
    startDate:            base.startDate    || 'Jun 2, 2026',
    duration:             base.duration     || generated.duration,
    mode:                 base.mode         || 'Online / Offline / Weekend',
    description:          base.description  || generated.description,
    whatYouLearn:         base.whatYouLearn?.length  > 0 ? base.whatYouLearn  : generated.whatYouLearn,
    requirements:         base.requirements?.length  > 0 ? base.requirements  : generated.requirements,
    whoIsFor:             base.whoIsFor?.length      > 0 ? base.whoIsFor      : generated.whoIsFor,
    highlights:           base.highlights?.length    > 0 ? base.highlights    : generated.highlights,
    curriculum:           base.curriculum?.length    > 0 ? base.curriculum    : generated.curriculum,
    ratingBreakdown:      generated.ratingBreakdown,
    reviewCards:          generated.reviewCards,
  }
}

// ─── Main Component ───────────────────────────────────────────────────────────
const TABS = [
  { id: 'overview',   label: 'Overview'   },
  { id: 'curriculum', label: 'Curriculum' },
  { id: 'trainer',    label: 'Trainer'    },
  { id: 'reviews',    label: 'Reviews'    },
]

export default function CourseDetail() {
  const { slug } = useParams()
  const base     = COURSES.find(c => c.slug === slug)

  const [activeTab,   setActiveTab]   = useState('overview')
  const [openModules, setOpenModules] = useState({ 0: true })
  const [showModal,   setShowModal]   = useState(false)
  const [saved,       setSaved]       = useState(false)
  const [form,        setForm]        = useState({ name: '', mobile: '', email: '' })

  // ── Not found ──────────────────────────────────────────────────────────────
  if (!base) {
    return (
      <div className="cd-page">
        <Navbar />
        <div className="cd-notfound">
          <span className="cd-notfound__icon">📚</span>
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist or may have been moved.</p>
          <Link to="/course-listing" className="cd-notfound__link">
            ← Browse All Courses
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const course  = prepareDetail(base)
  const related = COURSES.filter(c => c.category === base.category && c.slug !== base.slug).slice(0, 4)
  const totalLessons = course.curriculum.reduce((a, m) => a + m.lessons.length, 0)

  const toggleModule = (i) => setOpenModules(p => ({ ...p, [i]: !p[i] }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(false)
    setForm({ name: '', mobile: '', email: '' })
  }

  const heroColor = CATEGORY_COLORS[course.category] || '#1e3a5f'

  return (
    <div className="cd-page">
      <Navbar />

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section
        className="cd-hero"
        style={{ background: `linear-gradient(135deg, #0f1e30 0%, #152b47 45%, ${heroColor} 100%)` }}
      >
        <div className="cd-hero__inner">

          {/* LEFT — course info */}
          <div className="cd-hero__left">
            {/* Breadcrumb */}
            <nav className="cd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link to="/course-listing">Courses</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{course.title}</span>
            </nav>

            {/* Category */}
            <span className="cd-hero__cat">{course.category}</span>

            {/* Title */}
            <h1 className="cd-hero__title">{course.title}</h1>

            {/* Rating */}
            <div className="cd-hero__rating">
              <span className="cd-hero__rating-num">{course.rating || '4.5'}</span>
              <Stars rating={course.rating || 4.5} />
              <span className="cd-hero__rating-ct">({course.reviews || '0'} reviews)</span>
            </div>

            {/* Description */}
            <p className="cd-hero__desc">{course.description}</p>

            {/* Trainer row */}
            <div className="cd-hero__trainer">
              <div
                className="cd-hero__trainer-av"
                style={{ background: `linear-gradient(135deg, ${heroColor}, ${heroColor}cc)` }}
              >
                {course.trainerInitials}
              </div>
              <div className="cd-hero__trainer-info">
                <div className="cd-hero__trainer-name">{course.trainer}</div>
                <div className="cd-hero__trainer-role">{course.trainerTitle}</div>
              </div>
            </div>

            {/* Metadata */}
            <div className="cd-hero__meta">
              <span><span className="cd-hero__meta-icon">📅</span>Start: {course.startDate}</span>
              <span><span className="cd-hero__meta-icon">⏱</span>{course.duration}</span>
              <span><span className="cd-hero__meta-icon">🖥</span>{course.mode}</span>
              {course.level && <span><span className="cd-hero__meta-icon">📊</span>{course.level}</span>}
            </div>
          </div>

          {/* RIGHT — sticky enrollment card */}
          <div className="cd-hero__right">
            <div className="cd-scard">

              {/* Thumbnail */}
              <div
                className="cd-scard__thumb"
                style={{
                  backgroundImage: `url(${course.image})`,
                  backgroundColor: heroColor,
                }}
              />

              {/* ENROLL + SHARE */}
              <div className="cd-scard__actions">
                <button className="cd-scard__enroll" onClick={() => setShowModal(true)}>
                  ENROLL NOW
                </button>
                <button
                  className="cd-scard__share"
                  onClick={() =>
                    navigator.share?.({ title: course.title, url: window.location.href }).catch(() => {})
                  }
                >
                  SHARE
                </button>
              </div>

              {/* Date / Duration / Mode */}
              <ul className="cd-scard__meta">
                <li>
                  <span className="cd-scard__meta-icon">📅</span>
                  <span><strong>Start Date</strong><br />{course.startDate}</span>
                </li>
                <li>
                  <span className="cd-scard__meta-icon">⏱</span>
                  <span><strong>Duration</strong><br />{course.duration}</span>
                </li>
                <li>
                  <span className="cd-scard__meta-icon">🖥</span>
                  <span><strong>Mode</strong><br />{course.mode}</span>
                </li>
              </ul>

              <div className="cd-scard__divider" />

              {/* Quick stats */}
              <div className="cd-scard__stats">
                {course.highlights.map(h => (
                  <div key={h.label} className="cd-scard__stat-item">
                    <span className="cd-scard__stat-icon">{h.icon}</span>
                    <span className="cd-scard__stat-text">{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Bookmark */}
              <button className="cd-scard__bm" onClick={() => setSaved(s => !s)}>
                {saved ? '🔖 Saved' : '🔖 Save for Later'}
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ══ TAB BAR ═════════════════════════════════════════════════════════ */}
      <div className="cd-tabbar" role="tablist" aria-label="Course sections">
        <div className="cd-tabbar__inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`cd-tabbar__btn${activeTab === tab.id ? ' cd-tabbar__btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══ TAB CONTENT ═════════════════════════════════════════════════════ */}
      <div className="cd-wrap">

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="cd-panel">
            <section className="cd-section">
              <h2 className="cd-section__h">About This Course</h2>
              <p className="cd-desc">{course.description}</p>
            </section>

            <section className="cd-section cd-section--card">
              <h2 className="cd-section__h">What You'll Learn</h2>
              <div className="cd-learn-grid">
                {course.whatYouLearn.map(item => (
                  <div key={item} className="cd-learn-item">
                    <span className="cd-learn-check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="cd-section">
              <h2 className="cd-section__h">Requirements</h2>
              <ul className="cd-bullet-list">
                {course.requirements.map(r => <li key={r}>{r}</li>)}
              </ul>
            </section>

            <section className="cd-section">
              <h2 className="cd-section__h">Who Is This Course For?</h2>
              <ul className="cd-bullet-list">
                {course.whoIsFor.map(w => <li key={w}>{w}</li>)}
              </ul>
            </section>

            {course.skills?.length > 0 && (
              <section className="cd-section">
                <h2 className="cd-section__h">Skills You'll Gain</h2>
                <div className="cd-trainer-specs__tags">
                  {course.skills.map(s => (
                    <span key={s} className="cd-spec-tag">{s}</span>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* CURRICULUM */}
        {activeTab === 'curriculum' && (
          <div className="cd-panel">
            <div className="cd-curr-header">
              <h2 className="cd-section__h">Course Curriculum</h2>
              <span className="cd-curr-meta">
                {course.curriculum.length} modules · {totalLessons} lessons
              </span>
            </div>

            <div className="cd-accordion">
              {course.curriculum.map((mod, i) => (
                <div key={i} className={`cd-acc${openModules[i] ? ' cd-acc--open' : ''}`}>
                  <button
                    className="cd-acc__head"
                    onClick={() => toggleModule(i)}
                    aria-expanded={!!openModules[i]}
                  >
                    <div className="cd-acc__left">
                      <span className="cd-acc__num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="cd-acc__title">{mod.module}</span>
                    </div>
                    <div className="cd-acc__right">
                      <span className="cd-acc__count">{mod.lessons.length} lessons</span>
                      <span className="cd-acc__chevron">{openModules[i] ? '▲' : '▼'}</span>
                    </div>
                  </button>
                  {openModules[i] && (
                    <ul className="cd-acc__lessons">
                      {mod.lessons.map((lesson, j) => (
                        <li key={j} className="cd-acc__lesson">
                          <span className="cd-acc__lesson-play">▶</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRAINER */}
        {activeTab === 'trainer' && (
          <div className="cd-panel">
            <h2 className="cd-section__h">About Your Trainer</h2>
            <div className="cd-trainer-card">
              <div
                className="cd-trainer-photo"
                style={{ background: `linear-gradient(135deg, ${heroColor}, ${heroColor}99)` }}
              >
                <span className="cd-trainer-initials">{course.trainerInitials}</span>
              </div>

              <div className="cd-trainer-info">
                <h3 className="cd-trainer-name">{course.trainer}</h3>
                <div className="cd-trainer-title">{course.trainerTitle}</div>

                <div className="cd-trainer-stats">
                  <div className="cd-trainer-stat">
                    <span className="cd-trainer-stat__val">{course.trainerExp}</span>
                    <span className="cd-trainer-stat__lbl">Experience</span>
                  </div>
                  <div className="cd-trainer-stat">
                    <span className="cd-trainer-stat__val">{course.trainerStudents}</span>
                    <span className="cd-trainer-stat__lbl">Students Trained</span>
                  </div>
                  <div className="cd-trainer-stat">
                    <span className="cd-trainer-stat__val">{course.rating || '4.8'}★</span>
                    <span className="cd-trainer-stat__lbl">Trainer Rating</span>
                  </div>
                </div>

                <p className="cd-trainer-bio">{course.trainerBio}</p>

                <div className="cd-trainer-specs">
                  <span className="cd-trainer-specs__label">Specializations:</span>
                  <div className="cd-trainer-specs__tags">
                    {course.trainerSpecializations.map(s => (
                      <span key={s} className="cd-spec-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === 'reviews' && (
          <div className="cd-panel">
            <h2 className="cd-section__h">Student Reviews</h2>

            <div className="cd-reviews-summary">
              <div className="cd-rev-score">
                <div className="cd-rev-score__num">{course.rating || '4.5'}</div>
                <Stars rating={course.rating || 4.5} />
                <div className="cd-rev-score__label">Course Rating</div>
                <div className="cd-rev-score__ct">{course.reviews || '0'} reviews</div>
              </div>

              <div className="cd-rev-breakdown">
                {[5, 4, 3, 2, 1].map(star => (
                  <div key={star} className="cd-rev-bar-row">
                    <div className="cd-rev-bar-wrap">
                      <div
                        className="cd-rev-bar"
                        style={{ width: `${course.ratingBreakdown[star]}%` }}
                      />
                    </div>
                    <ReviewStars n={star} />
                    <span className="cd-rev-pct">{course.ratingBreakdown[star]}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="cd-review-cards">
              {course.reviewCards.map((r, i) => (
                <div key={i} className="cd-review-card">
                  <div className="cd-review-card__top">
                    <div className="cd-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                    <div className="cd-rev-meta">
                      <div className="cd-rev-name">{r.name}</div>
                      <div className="cd-rev-role">{r.role}</div>
                    </div>
                    <div className="cd-rev-date">{r.date}</div>
                  </div>
                  <div className="cd-rev-rating-row"><ReviewStars n={r.rating} /></div>
                  <p className="cd-rev-text">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ══ RELATED COURSES ═════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="cd-related">
          <div className="cd-related__inner">
            <h2 className="cd-related__heading">Related Courses</h2>
            <div className="cd-related__grid">
              {related.map(rc => (
                <article key={rc.id} className="cd-rel-card">
                  <div
                    className="cd-rel-card__thumb"
                    style={{
                      backgroundImage: `url(${rc.image})`,
                      backgroundColor: CATEGORY_COLORS[rc.category] || '#1e3a5f',
                    }}
                  />
                  <div className="cd-rel-card__body">
                    <Link to={`/courses/${rc.slug}`} className="cd-rel-card__title">
                      {rc.title}
                    </Link>
                    <div className="cd-rel-card__rating">
                      <span className="cd-rel-stars" style={{ color: rc.rating ? '#f5a623' : '#ddd' }}>
                        {rc.rating
                          ? '★'.repeat(Math.floor(rc.rating)) + (rc.rating % 1 >= 0.5 ? '⯨' : '')
                          : '☆☆☆☆☆'}
                      </span>
                      <span className="cd-rel-rval">{rc.rating || '0'}</span>
                    </div>
                  </div>
                  <div className="cd-rel-card__footer">
                    <Link to={`/courses/${rc.slug}`} className="cd-rel-card__enroll">
                      ENROLL
                    </Link>
                    <button
                      className="cd-rel-card__share"
                      onClick={() =>
                        navigator.share?.({ title: rc.title, url: `${window.location.origin}/courses/${rc.slug}` }).catch(() => {})
                      }
                    >
                      SHARE
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* ══ ENROLL MODAL ════════════════════════════════════════════════════ */}
      {showModal && (
        <div className="cd-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cd-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Enroll form">
            <button className="cd-modal__close" onClick={() => setShowModal(false)} aria-label="Close">✕</button>

            <div className="cd-modal__header">
              <div className="cd-modal__logo">
                <img src="/PT-logo.png" alt="Pro Training Tech" style={{ height: '32px', objectFit: 'contain' }} />
              </div>
              <h3>Enroll Now</h3>
              <p>{course.title}</p>
            </div>

            <form className="cd-modal__form" onSubmit={handleSubmit} noValidate>
              <div className="cd-modal__field">
                <label htmlFor="enroll-name">Full Name</label>
                <input
                  id="enroll-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  autoFocus
                />
              </div>
              <div className="cd-modal__field">
                <label htmlFor="enroll-mobile">Mobile Number</label>
                <input
                  id="enroll-mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={form.mobile}
                  onChange={e => setForm(f => ({ ...f, mobile: e.target.value }))}
                  required
                />
              </div>
              <div className="cd-modal__field">
                <label htmlFor="enroll-email">Email Address</label>
                <input
                  id="enroll-email"
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="cd-modal__actions">
                <button type="button" className="cd-modal__skip" onClick={() => setShowModal(false)}>
                  Skip
                </button>
                <button type="submit" className="cd-modal__submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
