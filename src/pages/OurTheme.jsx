import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './OurTheme.css'

const CORE_VALUES = [
  { icon: '🔧', title: 'Hands-On Learning',  desc: 'Every concept reinforced with live coding, real assignments, and practical lab sessions from day one.' },
  { icon: '👨‍💼', title: 'Industry Experts',   desc: 'Learn from trainers with 10–22 years of real-world industry experience — not just theoretical knowledge.' },
  { icon: '💻', title: 'Real Projects',       desc: 'Work on live industry projects that mirror actual work environments and strengthen your resume.' },
  { icon: '🤝', title: 'Placement Support',   desc: 'Dedicated placement cell, mock interviews, and tie-ups with 500+ companies to get you hired.' },
  { icon: '❤️', title: 'Student First',       desc: 'Every decision we make — from pricing to curriculum — is guided entirely by the needs of our students.' },
  { icon: '💡', title: 'Innovation',          desc: 'Continuously evolving curriculum that stays ahead of industry trends and emerging technologies.' },
]

const TIMELINE = [
  {
    year: '2001',
    title: 'Founded',
    desc: 'Alex Carter founded Pro Training Tech in McLean, Virginia, with a mission to bridge the gap between academic education and industry-ready skills.',
    side: 'left',
  },
  {
    year: '2003',
    title: 'First Batch Graduates',
    desc: 'Our inaugural batch of 50 students achieved 100% placement in top IT companies, setting the gold standard that would define Pro Training Tech for decades.',
    side: 'right',
  },
  {
    year: '2008',
    title: 'Online Training Launched',
    desc: 'Extended reach nationwide with live online training, enabling students from every corner of India to access the same quality education as Virginia batches.',
    side: 'left',
  },
  {
    year: '2014',
    title: 'NASSCOM Partnership',
    desc: 'Partnered with NASSCOM to deliver industry-certified programmes, aligning our curriculum with national IT standards and raising the bar for quality.',
    side: 'right',
  },
  {
    year: '2018',
    title: '1 Lakh Students Milestone',
    desc: 'Celebrated the landmark of 1,00,000 students trained across India — a testament to 17 years of hands-on, placement-focused education.',
    side: 'left',
  },
  {
    year: '2021',
    title: 'USA Expansion',
    desc: 'Launched Pro Training Tech USA to serve the growing Indian tech diaspora and international students seeking world-class, industry-aligned training.',
    side: 'right',
  },
  {
    year: '2023',
    title: '10 Lakh+ Students',
    desc: 'Crossed the historic milestone of 10 Lakh trained professionals, making Pro Training Tech India\'s most trusted and largest IT training institution.',
    side: 'left',
  },
  {
    year: '2024',
    title: '22+ Years & Growing',
    desc: 'Continuing our legacy with 500+ courses, 200+ trainers, and a relentless commitment to student success that drives everything we do.',
    side: 'right',
  },
]

const STATS = [
  { value: '22+',  label: 'Years of Excellence', icon: '🏆' },
  { value: '10L+', label: 'Students Trained',    icon: '🎓' },
  { value: '95%',  label: 'Placement Rate',      icon: '💼' },
  { value: '500+', label: 'Courses Offered',     icon: '📚' },
]

export default function OurTheme() {
  return (
    <div className="ot-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="ot-hero">
        <div className="ot-hero__inner">
          <span className="ot-hero__tag">Our Theme &amp; Philosophy</span>
          <h1 className="ot-hero__heading">
            The Values That <em>Drive</em> Everything<br />We Do at Pro Training Tech
          </h1>
          <p className="ot-hero__sub">
            For over 22 years, Pro Training Tech has been guided by a simple but powerful theme —
            student success above everything. Discover the principles, values, and vision
            that have shaped India's most trusted IT training institution.
          </p>
          <div className="ot-hero__btns">
            <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
            <Link to="/about" className="btn btn-outline-white">Our Story</Link>
          </div>
        </div>
        <span className="ot-hero__orb ot-hero__orb--1" aria-hidden="true" />
        <span className="ot-hero__orb ot-hero__orb--2" aria-hidden="true" />
        <div className="ot-hero__wave" aria-hidden="true">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── MISSION STATEMENT ── */}
      <section className="ot-mission section">
        <div className="container">
          <div className="ot-mission__inner">
            <span className="ot-mission__bg-mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="ot-mission__quote">
              We exist for one reason — to take every aspiring IT professional,
              regardless of their background or starting point, and transform them into
              a confident, job-ready engineer with the skills, the portfolio, and the
              mindset to build an exceptional career.
            </blockquote>
            <footer className="ot-mission__author">
              <div className="ot-mission__author-avatar" aria-hidden="true">NK</div>
              <div>
                <strong>Alex Carter</strong>
                <span>Founder &amp; CEO, Pro Training Tech</span>
              </div>
            </footer>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="ot-values section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">Core Values</span>
            <h2>The Six Pillars of <mark>Pro Training Tech</mark></h2>
            <p>Principles that shape every lesson, every interaction, and every placement.</p>
          </div>
          <div className="ot-values__grid">
            {CORE_VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="ot-val-card">
                <div className="ot-val-card__icon" aria-hidden="true">{icon}</div>
                <h3 className="ot-val-card__title">{title}</h3>
                <p className="ot-val-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY ── */}
      <section className="ot-philosophy section">
        <div className="container">
          <div className="ot-philosophy__layout">

            <div className="ot-philosophy__visual" aria-hidden="true">
              <div className="ot-phi__stat">
                <span className="ot-phi__stat-val">22+</span>
                <span className="ot-phi__stat-lbl">Years of Innovation</span>
              </div>
              <div className="ot-phi__divider" />
              {[
                'Curriculum reviewed every quarter',
                'Live projects from week one',
                '1-on-1 doubt resolution sessions',
                'Industry mentors guide each batch',
                'Post-placement support included',
              ].map((pt) => (
                <div key={pt} className="ot-phi__point">
                  <span aria-hidden="true">✦</span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="ot-philosophy__text">
              <span className="sec-tag">Our Philosophy</span>
              <h2>Learning That Goes<br /><mark>Beyond the Syllabus</mark></h2>
              <p>
                At Pro Training Tech, we don't just teach technology — we build professionals. Our
                philosophy is rooted in the belief that true education combines rigorous technical
                training with real-world context, professional development, and a community that
                supports you long after the course ends.
              </p>
              <p>
                Every curriculum we design starts with a single question: <em>"What does the
                industry actually need today?"</em> We work directly with hiring managers, CTOs,
                and senior engineers to ensure that every skill our students learn translates
                directly into workplace value.
              </p>
              <p>
                The result? Students who don't just get hired — they <strong>thrive</strong>.
                A 95% placement rate built over 22+ years is not an accident. It is the
                deliberate outcome of a philosophy that puts students first, every single time.
              </p>
              <Link to="/courses" className="btn btn-primary ot-phi__cta">
                Start Your Journey
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="ot-timeline-section section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">Our Journey</span>
            <h2>From 2001 to <mark>Today</mark></h2>
            <p>A legacy of milestones built on one promise — your success.</p>
          </div>

          <div className="ot-timeline">
            <div className="ot-timeline__spine" aria-hidden="true" />
            {TIMELINE.map(({ year, title, desc, side }) => (
              <div key={year} className={`ot-tl-item ot-tl-item--${side}`}>
                <div className="ot-tl-item__dot">
                  <span className="ot-tl-item__year">{year}</span>
                </div>
                <div className="ot-tl-item__card">
                  <h3 className="ot-tl-item__title">{title}</h3>
                  <p className="ot-tl-item__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER'S MESSAGE ── */}
      <section className="ot-founder section">
        <div className="container">
          <div className="sec-head">
            <span className="sec-tag">Founder's Message</span>
            <h2>A Word from <mark>Alex Carter</mark></h2>
          </div>
          <div className="ot-founder__card">

            <div className="ot-founder__left">
              <div className="ot-founder__avatar-wrap">
                <div className="ot-founder__avatar" aria-hidden="true">NK</div>
                <div className="ot-founder__ring" aria-hidden="true" />
              </div>
              <strong className="ot-founder__name">Alex Carter</strong>
              <span className="ot-founder__role">Founder &amp; CEO</span>
              <span className="ot-founder__exp">22+ Years in IT Education</span>
            </div>

            <div className="ot-founder__right">
              <span className="ot-founder__qmark" aria-hidden="true">&ldquo;</span>
              <p>
                When I started Pro Training Tech in 2001, I had one goal: to give every student the
                same quality of training I had seen only at elite institutions — but at a price
                that anyone could afford. That goal has never changed.
              </p>
              <p>
                Today, when I see the 10 lakh+ professionals who have built their careers
                through Pro Training Tech — in companies across India, the USA, the UK, and beyond — I
                am reminded that education is the most powerful equaliser there is.
              </p>
              <p>
                Our theme is simple: <em>technology changes, but commitment to the student
                never does.</em> Whatever tomorrow brings, Pro Training Tech will be ready — learning
                alongside our students, adapting, and always putting you first.
              </p>
              <footer className="ot-founder__footer">
                — Alex Carter &nbsp;|&nbsp; Founder &amp; CEO, Pro Training Tech
              </footer>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section className="ot-stats">
        <div className="ot-stats__inner">
          {STATS.map(({ value, label, icon }) => (
            <div key={label} className="ot-stat">
              <span className="ot-stat__icon" aria-hidden="true">{icon}</span>
              <span className="ot-stat__val">{value}</span>
              <span className="ot-stat__lbl">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
