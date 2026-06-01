import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './OnlineTraining.css'

/* ── Placed students — 10 total, displayed 5 per page ── */
const STUDENTS = [
  { id: 1,  name: 'Debashis Behera',   role: 'Java Developer',    company: 'Emagia Corporation',      img: 'https://images.nareshit.com/3.jpg' },
  { id: 2,  name: 'Rupal Borkar',      role: 'Web Developer',     company: 'Mphasis Ltd',             img: 'https://images.nareshit.com/5.jpg' },
  { id: 3,  name: 'Sai Bharathi',      role: 'Web Developer',     company: 'Conseqta Technology',     img: 'https://images.nareshit.com/10.jpg' },
  { id: 4,  name: 'Indrani Malladi',   role: 'QA Engineer',       company: 'Celium Pvt Ltd',          img: 'https://images.nareshit.com/6.jpg' },
  { id: 5,  name: 'Balaji Kumar',      role: 'Java Developer',    company: 'Alodial Infotech',        img: 'https://images.nareshit.com/1.jpg' },
  { id: 6,  name: 'Anshuman Swain',    role: 'Web Developer',     company: 'Conseqta Technology',     img: 'https://images.nareshit.com/Oct_24-2.jpg' },
  { id: 7,  name: 'Shreya V Tawalare', role: 'Java Developer',    company: 'Sisnx Techno',            img: 'https://images.nareshit.com/Oct_24-1.jpg' },
  { id: 8,  name: 'Sameer',            role: 'Web Developer',     company: 'Ikerly Pvt Ltd',          img: 'https://images.nareshit.com/Oct_24-3.jpg' },
  { id: 9,  name: 'K Tejeswari',       role: 'Java Developer',    company: 'Kitechi',                 img: 'https://images.nareshit.com/Oct_24-4.jpg' },
  { id: 10, name: 'Ganga Muthyala',    role: 'QA Engineer',       company: 'SS Solutions Pvt Ltd',    img: 'https://images.nareshit.com/Oct_24-5.jpg' },
]

const PER_PAGE   = 5
const TOTAL_PAGES = Math.ceil(STUDENTS.length / PER_PAGE)   // = 2

/* LinkedIn SVG icon */
function LinkedInIcon() {
  return (
    <svg className="ot-student-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

/* ── Page ───────────────────────────────────────────────────── */
export default function OnlineTraining() {
  const [page, setPage] = useState(0)

  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="ot-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="ot-info">
        <div className="ot-info__inner">

          {/* Left column */}
          <div className="ot-info__left">
            <h2 className="ot-info__label">Online Training</h2>
            <img
              src="https://images.nareshit.com/images/image_1706336260793.jpg"
              alt="Online Training at Pro Training Tech"
              className="ot-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="ot-info__right">
            <h1 className="ot-info__heading">
              Explore Online Learning!<br />
              It&rsquo;s just one click away.
            </h1>

            <p className="ot-info__para">
              Pro Training Tech offers a straightforward online training plan that matches the needs of
              the IT industry. Our curriculum is designed to provide learners with a comprehensive
              understanding of the subject matter, emphasising practical application and hands-on
              experience.
            </p>

            <p className="ot-info__para">
              Whether you are a beginner or a seasoned professional looking to upskill, our online
              training programmes cater to all levels. Our expert trainers bring real-world experience
              to every session, ensuring you gain industry-relevant knowledge and practical skills.
            </p>

            <ul className="ot-info__bullets">
              <li>
                <span className="ot-bullet-dot" />
                <span><strong>Personalized Learning</strong> — Customize your learning pace and focus on challenging topics at your convenience.</span>
              </li>
              <li>
                <span className="ot-bullet-dot" />
                <span><strong>Affordable and Accessible Education</strong> — Reasonably priced courses making quality education reachable for a broader audience.</span>
              </li>
              <li>
                <span className="ot-bullet-dot" />
                <span><strong>Course Resources</strong> — Multimedia content including videos, interactive simulations, and comprehensive study materials.</span>
              </li>
              <li>
                <span className="ot-bullet-dot" />
                <span><strong>Tech Skills Development</strong> — Training programmes designed to keep learners current with the rapidly evolving technology landscape.</span>
              </li>
              <li>
                <span className="ot-bullet-dot" />
                <span><strong>Real-World Projects</strong> — Industry scenario simulations and hands-on labs for practical, job-ready skill application.</span>
              </li>
            </ul>

            <Link to="/contact" className="ot-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="ot-placed">
        <div className="ot-placed__inner">

          <div className="ot-placed__head">
            <h2 className="ot-placed__title">Placed Students</h2>
            <p className="ot-placed__sub">Explore new and trending free online courses.</p>
          </div>

          {/* Carousel */}
          <div className="ot-carousel">
            <button
              className="ot-carousel__arrow ot-carousel__arrow--left"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >
              &#8249;
            </button>

            <div className="ot-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="ot-student-card">
                  <div className="ot-student-card__linkedin">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${s.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="ot-student-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="ot-student-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="ot-student-card__name">{s.name}</div>
                  <div className="ot-student-card__role">{s.role}</div>
                  <div className="ot-student-card__company">
                    <span className="ot-student-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ot-carousel__arrow ot-carousel__arrow--right"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >
              &#8250;
            </button>
          </div>

          {/* Dot indicators */}
          <div className="ot-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`ot-carousel__dot${page === i ? ' ot-carousel__dot--active' : ''}`}
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
