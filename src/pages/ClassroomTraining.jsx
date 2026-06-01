import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ClassroomTraining.css'

/* ── Placed students — 10 total, 5 per page ─────────────── */
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
const TOTAL_PAGES = Math.ceil(STUDENTS.length / PER_PAGE)   // = 2

function LinkedInIcon() {
  return (
    <svg className="ct-student-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function ClassroomTraining() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="ct-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="ct-info">
        <div className="ct-info__inner">

          {/* Left column */}
          <div className="ct-info__left">
            <h2 className="ct-info__label">Classroom Training</h2>
            <img
              src="https://images.nareshit.com/images/image_1706093906274.jpg"
              alt="Classroom Training at Pro Training Tech"
              className="ct-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="ct-info__right">
            <h1 className="ct-info__heading">
              Empowering Learning in a<br />Conducive Environment
            </h1>

            <p className="ct-info__para">
              Pro Training Tech offers a premium classroom training experience designed to match the
              demands of today's IT industry. Our state-of-the-art facilities provide the ideal
              environment for focused, effective learning under expert guidance.
            </p>

            <p className="ct-info__para">
              Our classroom programmes combine theoretical foundations with hands-on lab practice,
              ensuring you gain both knowledge and the practical skills employers expect. Small batch
              sizes guarantee personalised attention from experienced trainers throughout the course.
            </p>

            <ul className="ct-info__bullets">
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Engaging Learning Atmosphere</strong> — A structured, distraction-free environment that fosters deeper understanding and peer collaboration.</span>
              </li>
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Expert Instructors</strong> — Learn directly from industry professionals with real-world experience and specialised domain knowledge.</span>
              </li>
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Hands-On Practical Sessions</strong> — Dedicated lab time for every module so you build and test real applications during class.</span>
              </li>
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Personalized Attention</strong> — Small batches ensure every student receives individual feedback, doubt-clearing, and mentoring.</span>
              </li>
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Tailored Curriculum</strong> — Course content continuously updated to reflect current industry tools, frameworks, and best practices.</span>
              </li>
              <li>
                <span className="ct-bullet-dot" />
                <span><strong>Certification of Completion</strong> — Receive an industry-recognised certificate upon successfully completing the programme and assessments.</span>
              </li>
            </ul>

            <Link to="/contact" className="ct-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="ct-placed">
        <div className="ct-placed__inner">

          <div className="ct-placed__head">
            <h2 className="ct-placed__title">Placed Students</h2>
            <p className="ct-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="ct-carousel">
            <button
              className="ct-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="ct-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="ct-student-card">
                  <div className="ct-student-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="ct-student-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="ct-student-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="ct-student-card__name">{s.name}</div>
                  <div className="ct-student-card__role">{s.role}</div>
                  <div className="ct-student-card__company">
                    <span className="ct-student-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ct-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="ct-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`ct-carousel__dot${page === i ? ' ct-carousel__dot--active' : ''}`}
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
