import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { COURSES, CATEGORY_COLORS } from '../data/courses'
import './AllCourses.css'

const VISIBLE_COURSES = COURSES.filter(c => c.visible)
const SIDEBAR_CATEGORIES = [...new Set(VISIBLE_COURSES.map(c => c.category))].sort()

const PER_PAGE = 6

function Stars({ rating }) {
  if (!rating) return <span className="ac-stars ac-stars--empty">☆☆☆☆☆</span>
  const full  = Math.floor(rating)
  const half  = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="ac-stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}{half ? '⯨' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

export default function AllCourses() {
  const [active,    setActive]    = useState('All Courses')
  const [page,      setPage]      = useState(0)
  const [saved,     setSaved]     = useState({})

  const filtered = active === 'All Courses'
    ? VISIBLE_COURSES
    : VISIBLE_COURSES.filter(c => c.category === active)

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const safePage   = Math.min(page, totalPages - 1)
  const visible    = filtered.slice(safePage * PER_PAGE, (safePage + 1) * PER_PAGE)

  const pick = (cat) => { setActive(cat); setPage(0) }
  const toggleSave = (slug, e) => {
    e.preventDefault()
    e.stopPropagation()
    setSaved(prev => ({ ...prev, [slug]: !prev[slug] }))
  }

  return (
    <div className="ac-page">
      <Navbar />

      <div className="ac-layout">

        {/* ── LEFT SIDEBAR ─────────────────────────────── */}
        <aside className="ac-sidebar">
          <ul className="ac-sidebar__list">

            <li>
              <button
                className={`ac-sidebar__btn${active === 'All Courses' ? ' ac-sidebar__btn--active' : ''}`}
                onClick={() => pick('All Courses')}
              >
                All Courses
              </button>
            </li>

            {SIDEBAR_CATEGORIES.map(cat => (
              <li key={cat}>
                <button
                  className={`ac-sidebar__btn${active === cat ? ' ac-sidebar__btn--active' : ''}`}
                  onClick={() => pick(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}

          </ul>
        </aside>

        {/* ── RIGHT CONTENT ────────────────────────────── */}
        <main className="ac-content">

          {/* Section heading */}
          <div className="ac-content__head">
            <h1 className="ac-content__heading">{active}</h1>
            <span className="ac-content__count">{filtered.length} Course{filtered.length !== 1 ? 's' : ''}</span>
          </div>

          {visible.length > 0 ? (
            <>
              {/* Card grid — 3 cols, 2 rows = 6 cards */}
              <div className="ac-grid">
                {visible.map(course => {
                  const bg = CATEGORY_COLORS[course.category] || '#1e3a5f'
                  return (
                    <Link key={course.id} to={`/courses/${course.slug}`} className="ac-card" style={{ textDecoration: 'none', color: 'inherit' }}>

                      {/* Header — thumbnail image */}
                      <div
                        className="ac-card__thumb"
                        style={{
                          backgroundColor: bg,
                          backgroundImage: `url(${course.image})`,
                        }}
                      >
                        <button
                          className={`ac-card__bm${saved[course.slug] ? ' ac-card__bm--saved' : ''}`}
                          onClick={(e) => toggleSave(course.slug, e)}
                          aria-label={saved[course.slug] ? 'Remove bookmark' : 'Bookmark course'}
                        >
                          {saved[course.slug]
                            ? <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a1 1 0 011 1v17l-8-4-8 4V4a1 1 0 011-1z"/></svg>
                            : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3h14a1 1 0 011 1v17l-8-4-8 4V4a1 1 0 011-1z"/></svg>
                          }
                        </button>
                      </div>

                      {/* Body */}
                      <div className="ac-card__body">
                        <span className="ac-card__title">
                          {course.title}
                        </span>
                        <div className="ac-card__rating">
                          <Stars rating={course.rating} />
                          <span className="ac-card__rval">{course.rating || '0'}</span>
                          <span className="ac-card__rcnt">({course.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Footer — ENROLL + SHARE */}
                      <div className="ac-card__footer">
                        <span className="ac-card__enroll">
                          ENROLL
                        </span>
                        <button
                          className="ac-card__share"
                          onClick={e => {
                            e.stopPropagation()
                            navigator.share?.({
                              title: course.title,
                              url: `${window.location.origin}/courses/${course.slug}`,
                            }).catch(() => {})
                          }}
                        >
                          SHARE
                        </button>
                      </div>

                    </Link>
                  )
                })}
              </div>

              {/* ── Carousel arrows ── */}
              {totalPages > 1 && (
                <div className="ac-carousel">
                  <button
                    className="ac-carousel__arrow"
                    onClick={() => setPage(p => Math.max(0, p - 1))}
                    disabled={safePage === 0}
                    aria-label="Previous page"
                  >
                    &#8249;
                  </button>
                  <span className="ac-carousel__info">
                    {safePage + 1} <span>/</span> {totalPages}
                  </span>
                  <button
                    className="ac-carousel__arrow"
                    onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                    disabled={safePage === totalPages - 1}
                    aria-label="Next page"
                  >
                    &#8250;
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="ac-empty">
              <span>📚</span>
              <p>No courses available in this category yet.</p>
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  )
}
