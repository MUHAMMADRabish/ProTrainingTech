import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './JobAssistance.css'

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
    <svg className="ja-card__linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

export default function JobAssistance() {
  const [page, setPage] = useState(0)
  const visible = STUDENTS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE)

  return (
    <div className="ja-page">
      <Navbar />

      {/* ── MAIN INFO SECTION ── */}
      <section className="ja-info">
        <div className="ja-info__inner">

          {/* Left column */}
          <div className="ja-info__left">
            <h2 className="ja-info__label">Job Assistance</h2>
            <img
              src="https://images.nareshit.com/images/image_1706335329390.jpg"
              alt="Job Assistance at Pro Training Tech"
              className="ja-info__photo"
            />
          </div>

          {/* Right column */}
          <div className="ja-info__right">
            <h1 className="ja-info__heading">
              Here at Pro Training Tech, our commitment to the success of your career begins beyond your training.
            </h1>

            <p className="ja-info__para">
              Our dedicated Placement Assistance Cell works tirelessly to connect our trained students
              with the right employment opportunities. We understand that securing a job is the
              ultimate goal of your training, and we are here to support you every step of the way
              on your journey to career success.
            </p>

            <p className="ja-info__sub-heading">
              Here&rsquo;s how our Placement Assistance program benefits you:
            </p>

            <ul className="ja-info__bullets">
              <li>
                <span className="ja-bullet-dot" />
                <span><strong>Comprehensive Screening Tests</strong> — We conduct thorough assessments to evaluate your technical skills and ensure you are prepared for real-world job requirements.</span>
              </li>
              <li>
                <span className="ja-bullet-dot" />
                <span><strong>On-Campus Recruitment Drives</strong> — We regularly organise recruitment events, bringing employers directly to our campus to meet and hire our talented students.</span>
              </li>
              <li>
                <span className="ja-bullet-dot" />
                <span><strong>Career Counseling</strong> — Our experienced career counselors provide personalised guidance to help you identify your strengths, set career goals, and craft a compelling professional profile.</span>
              </li>
              <li>
                <span className="ja-bullet-dot" />
                <span><strong>Job Market Insights</strong> — Stay informed about the latest trends and demands in the IT job market, enabling you to align your skills with industry requirements.</span>
              </li>
            </ul>

            <p className="ja-info__para">
              Our placement assistance extends beyond just job listings. We work closely with a
              wide network of companies, ranging from startups to Fortune 500 enterprises, to
              ensure our students have access to diverse and rewarding career opportunities.
            </p>

            <p className="ja-info__para ja-info__para--disclaimer">
              We offer wide-ranging support and resources, but be advised that employment is not guaranteed.
            </p>

            <Link to="/contact" className="ja-enquiry-btn">Enquiry</Link>
          </div>

        </div>
      </section>

      {/* ── PLACED STUDENTS ── */}
      <section className="ja-placed">
        <div className="ja-placed__inner">

          <div className="ja-placed__head">
            <h2 className="ja-placed__title">Placed Students</h2>
            <p className="ja-placed__sub">Explore new and trending free online courses.</p>
          </div>

          <div className="ja-carousel">
            <button
              className="ja-carousel__arrow"
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous students"
            >&#8249;</button>

            <div className="ja-carousel__grid">
              {visible.map(s => (
                <div key={s.id} className="ja-card">
                  <div className="ja-card__linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label={`${s.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                  </div>
                  <div className="ja-card__img-wrap">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="ja-card__img"
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(s.name)}&background=1565c0&color=fff&size=120`
                      }}
                    />
                  </div>
                  <div className="ja-card__name">{s.name}</div>
                  <div className="ja-card__role">{s.role}</div>
                  <div className="ja-card__company">
                    <span className="ja-card__company-icon">🏢</span>
                    {s.company}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="ja-carousel__arrow"
              onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
              disabled={page === TOTAL_PAGES - 1}
              aria-label="Next students"
            >&#8250;</button>
          </div>

          <div className="ja-carousel__dots">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <button
                key={i}
                className={`ja-carousel__dot${page === i ? ' ja-carousel__dot--active' : ''}`}
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
