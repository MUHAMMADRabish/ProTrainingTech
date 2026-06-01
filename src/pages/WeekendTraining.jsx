import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './WeekendTraining.css'

const STUDENTS = [
  { id: 1,  name: 'Debashis Behera',   role: 'Java Developer', company: 'Emagia Corporation',   img: 'https://images.nareshit.com/3.jpg' },
  { id: 2,  name: 'Rupal Borkar',      role: 'Web Developer',  company: 'Mphasis Ltd',          img: 'https://images.nareshit.com/5.jpg' },
  { id: 3,  name: 'Sai Bharathi',      role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/10.jpg' },
  { id: 4,  name: 'Indrani Malladi',   role: 'QA Engineer',    company: 'Celium Pvt Ltd',       img: 'https://images.nareshit.com/6.jpg' },
  { id: 5,  name: 'Balaji Kumar',      role: 'Java Developer', company: 'Alodial Infotech',     img: 'https://images.nareshit.com/1.jpg' },
  { id: 6,  name: 'Anshuman Swain',    role: 'Web Developer',  company: 'Conseqta Technology',  img: 'https://images.nareshit.com/Oct_24-2.jpg' },
  { id: 7,  name: 'Shreya V Tawalare', role: 'Java Developer', company: 'Sisnx Techno',         img: 'https://images.nareshit.com/Oct_24-1.jpg' },
  { id: 8,  name: 'Sameer',            role: 'Web Developer',  company: 'Ikerly Pvt Ltd',       img: 'https://images.nareshit.com/Oct_24-3.jpg' },
  { id: 9,  name: 'K Tejeswari',       role: 'Java Developer', company: 'Kitechi',              img: 'https://images.nareshit.com/Oct_24-4.jpg' },
  { id: 10, name: 'Ganga Muthyala',    role: 'QA Engineer',    company: 'SS Solutions Pvt Ltd', img: 'https://images.nareshit.com/Oct_24-5.jpg' },
]

const PER_PAGE    = 5
const TOTAL_PAGES = Math.ceil(STUDENTS.length / PER_PAGE)

function LinkedInIcon() {
  return (
    <svg className="wt-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function WeekendTraining() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="wt-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="wt-info">
        <div className="wt-info__inner">

          {/* Left column */}
          <div className="wt-info__left">
            <h2 className="wt-info__label">Weekend Training</h2>
            <img
              src="https://images.nareshit.com/images/image_1706336807195.jpeg"
              alt="Weekend Training at Pro Training Tech"
              className="wt-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="wt-info__right">
            <h1 className="wt-info__heading">
              Supercharge Your Weekends with Pro Training Tech&rsquo;s IT Training Programs
            </h1>

            <p className="wt-info__para">
              Pro Training Tech&rsquo;s weekend IT training programmes are designed specifically for
              working professionals and students who want to upskill without disrupting their weekday
              commitments. Our weekend sessions deliver the same expert-led, hands-on learning as our
              regular programmes, condensed into focused Saturday and Sunday batches.
            </p>

            <p className="wt-info__para">
              Make the most of your weekends by investing in skills that directly advance your career.
              With flexible batch timings and a curriculum built around current industry demands, our
              weekend training is the smartest way to accelerate your professional growth.
            </p>

            <p className="wt-info__sub-heading">
              Why Opt for Pro Training Tech&rsquo;s Weekend IT Training Programs:
            </p>

            <ul className="wt-info__bullets">
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Flexible Learning Schedule</strong> — Saturday and Sunday batches designed to fit around your full-time job or college schedule without compromise.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Latest IT Technologies</strong> — Curriculum continuously updated to cover in-demand technologies, frameworks, and tools that employers are actively hiring for.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Hands-On Learning Experience</strong> — Every session includes practical coding exercises and real-world projects so you build portfolio-ready work from day one.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Expert Led Sessions</strong> — Learn from industry professionals with years of hands-on experience who bring real-world context to every concept they teach.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Tailored Curriculum</strong> — Course content structured specifically for weekend learners — focused, practical, and free of unnecessary filler.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Real-World Application</strong> — Industry scenario simulations and capstone projects that directly mirror the challenges you will face in your tech career.</span>
              </li>
              <li>
                <span className="wt-bullet-dot" />
                <span><strong>Certification and Recognition</strong> — Earn an industry-recognised Pro Training Tech certificate upon completion that validates your skills to employers.</span>
              </li>
            </ul>

            <Link to="/contact" className="wt-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="wt-placed">
        <div className="wt-placed__inner">

          <div className="wt-placed__head">
            <h2 className="wt-placed__title">Placed Students</h2>
            <p className="wt-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="wt-carousel">
            <button
              className="wt-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="wt-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="wt-card">
                  <div className="wt-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="wt-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="wt-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="wt-card__name">{s.name}</div>
                  <div className="wt-card__role">{s.role}</div>
                  <div className="wt-card__company">
                    <span className="wt-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="wt-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="wt-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`wt-carousel__dot${page === i ? ' wt-carousel__dot--active' : ''}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
