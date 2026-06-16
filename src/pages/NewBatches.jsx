import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './NewBatches.css'

const COURSE_SLUGS = {
  "Full Stack Java": "full-stack-java-online-training",
  "Full Stack Python": "full-stack-python-online-training",
  "Full Stack Software Testing": "full-stack-software-testing-online-training",
  "Full Stack Data Science & AI": "full-stack-data-science-ai-online-training",
  "Full Stack .NET Core": "full-stack-dot-net-core-online-training",
  "UI Full Stack Web with React": "ui-full-stack-web-development-with-react-online-training",
  "Data Science with AI": "data-science-online-training",
  "Data Analytics & Business Analytics": "data-analytics-online-training",
  "MLOps & AIOps": "mlops-and-aiops-online-training",
  "Generative AI & Agentic AI with Python": "generative-ai-online-training",
  "Advanced Generative & Agentic AI": "advanced-generative-and-agentic-ai",
  "Chat GPT": "chat-gpt-online-training",
  "Numpy | Pandas | Matplotlib": "numpy-pandas-matplotlib-online-training",
  "Full Stack Data Science Program": "full-stack-data-science-ai-certification-online-training",
  "Playwright with TypeScript": "playwright-with-typescript",
  "Full Stack Java Placement Assistance": "full-stack-java-placement-assistance-program-online-training",
  "Full Stack .Net Placement Assistance": "full-stack-dot-net-placement-assistance-program-online-training",
  "Terraform Associate Certification (003)": "terraform-associate-certification-training-003",
  "Data Science Internship Program": "internship-program-on-data-science",
  "Python Internship Program": "internship-program-on-python",
  "DevOps with Cloud Internship": "internship-program-on-devops-with-cloud",
  "Workshop on Modern Data Lake Analytics": "data-science-online-training",
  "Workshop on Advanced LLMOPS": "mlops-and-aiops-online-training",
  "Workshop on Production Agentic AI": "advanced-generative-and-agentic-ai",
}

/* ── Batch data per tab ─────────────────────────────────── */
const BATCH_DATA = {
  'Online Training': [
    { course: 'Full Stack Java',                             faculty: '', date: '01 Jul 2026', time: '9:30 AM IST'  },
    { course: 'Full Stack Python',                           faculty: '', date: '01 Jul 2026', time: '6:00 PM IST'  },
    { course: 'Full Stack Software Testing',                 faculty: '', date: '01 Jul 2026', time: '10:00 AM IST' },
    { course: 'Full Stack Data Science & AI',                faculty: '', date: '02 Jul 2026', time: '8:00 AM IST'  },
    { course: 'Full Stack .NET Core',                        faculty: '', date: '02 Jul 2026', time: '9:15 AM IST'  },
    { course: 'UI Full Stack Web with React',                faculty: '', date: '03 Jul 2026', time: '7:00 AM IST'  },
    { course: 'Data Science with AI',                        faculty: '', date: '03 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Data Analytics & Business Analytics',         faculty: '', date: '04 Jul 2026', time: '7:30 AM IST'  },
    { course: 'MLOps & AIOps',                              faculty: '', date: '04 Jul 2026', time: '10:00 AM IST' },
    { course: 'Generative AI & Agentic AI with Python',     faculty: '', date: '05 Jul 2026', time: '9:30 AM IST'  },
    { course: 'Advanced Generative & Agentic AI',           faculty: '', date: '05 Jul 2026', time: '11:00 AM IST' },
    { course: 'Chat GPT',                                   faculty: '', date: '06 Jul 2026', time: '10:00 AM IST' },
    { course: 'Numpy | Pandas | Matplotlib',                faculty: '', date: '06 Jul 2026', time: '8:00 AM IST'  },
    { course: 'Full Stack Data Science Program',            faculty: '', date: '07 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '07 Jul 2026', time: '10:00 PM IST' },
    { course: 'Full Stack Java Placement Assistance',       faculty: '', date: '08 Jul 2026', time: '1:30 AM IST'  },
    { course: 'Full Stack .Net Placement Assistance',       faculty: '', date: '08 Jul 2026', time: '1:30 AM IST'  },
    { course: 'Terraform Associate Certification (003)',    faculty: '', date: '09 Jul 2026', time: '9:15 AM IST'  },
    { course: 'Data Science Internship Program',            faculty: '', date: '10 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Python Internship Program',                  faculty: '', date: '10 Jul 2026', time: '5:00 PM IST'  },
    { course: 'DevOps with Cloud Internship',               faculty: '', date: '11 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '11 Jul 2026', time: '10:00 AM IST' },
  ],
  'Classroom Training': [
    { course: 'Full Stack Java',                             faculty: '', date: '15 Jul 2026', time: '10:30 AM IST' },
    { course: 'Full Stack Python',                           faculty: '', date: '15 Jul 2026', time: '7:00 PM IST'  },
    { course: 'Full Stack Software Testing',                 faculty: '', date: '15 Jul 2026', time: '11:00 AM IST' },
    { course: 'Full Stack Data Science & AI',                faculty: '', date: '16 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Full Stack .NET Core',                        faculty: '', date: '16 Jul 2026', time: '10:15 AM IST' },
    { course: 'UI Full Stack Web with React',                faculty: '', date: '17 Jul 2026', time: '8:00 AM IST'  },
    { course: 'Data Science with AI',                        faculty: '', date: '17 Jul 2026', time: '10:00 AM IST' },
    { course: 'Data Analytics & Business Analytics',         faculty: '', date: '18 Jul 2026', time: '8:30 AM IST'  },
    { course: 'MLOps & AIOps',                              faculty: '', date: '18 Jul 2026', time: '11:00 AM IST' },
    { course: 'Generative AI & Agentic AI with Python',     faculty: '', date: '19 Jul 2026', time: '10:30 AM IST' },
    { course: 'Advanced Generative & Agentic AI',           faculty: '', date: '19 Jul 2026', time: '12:00 PM IST' },
    { course: 'Chat GPT',                                   faculty: '', date: '20 Jul 2026', time: '11:00 AM IST' },
    { course: 'Numpy | Pandas | Matplotlib',                faculty: '', date: '20 Jul 2026', time: '9:00 AM IST'  },
    { course: 'Full Stack Data Science Program',            faculty: '', date: '21 Jul 2026', time: '10:00 AM IST' },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '21 Jul 2026', time: '11:00 PM IST' },
    { course: 'Full Stack Java Placement Assistance',       faculty: '', date: '22 Jul 2026', time: '2:30 AM IST'  },
    { course: 'Full Stack .Net Placement Assistance',       faculty: '', date: '22 Jul 2026', time: '2:30 AM IST'  },
    { course: 'Terraform Associate Certification (003)',    faculty: '', date: '23 Jul 2026', time: '10:15 AM IST' },
    { course: 'Data Science Internship Program',            faculty: '', date: '24 Jul 2026', time: '10:00 AM IST' },
    { course: 'Python Internship Program',                  faculty: '', date: '24 Jul 2026', time: '6:00 PM IST'  },
    { course: 'DevOps with Cloud Internship',               faculty: '', date: '25 Jul 2026', time: '10:00 AM IST' },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '25 Jul 2026', time: '11:00 AM IST' },
  ],
  'Workshops': [
    { course: 'Workshop on Modern Data Lake Analytics', faculty: '', date: '12 Jul 2026', time: '10:00 AM IST' },
    { course: 'Workshop on Advanced LLMOPS',            faculty: '', date: '12 Jul 2026', time: '10:00 AM IST' },
    { course: 'Workshop on Production Agentic AI',      faculty: '', date: '13 Jul 2026', time: '10:00 AM IST' },
  ],
  'Internships': [
    { course: 'Data Science Internship Program', faculty: '', date: '01 Jul 2026', time: '9:00 AM IST' },
    { course: 'Python Internship Program',       faculty: '', date: '01 Jul 2026', time: '5:00 PM IST' },
    { course: 'DevOps with Cloud Internship',    faculty: '', date: '01 Jul 2026', time: '9:00 AM IST' },
  ],
  'Weekend Training': [
    { course: 'Full Stack Java',                             faculty: '', date: '04 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack Python',                           faculty: '', date: '04 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack Software Testing',                 faculty: '', date: '04 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack Data Science & AI',                faculty: '', date: '05 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack .NET Core',                        faculty: '', date: '05 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'UI Full Stack Web with React',                faculty: '', date: '05 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Data Science with AI',                        faculty: '', date: '11 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Data Analytics & Business Analytics',         faculty: '', date: '11 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'MLOps & AIOps',                              faculty: '', date: '11 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Generative AI & Agentic AI with Python',     faculty: '', date: '12 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Advanced Generative & Agentic AI',           faculty: '', date: '12 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Chat GPT',                                   faculty: '', date: '12 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Numpy | Pandas | Matplotlib',                faculty: '', date: '18 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack Data Science Program',            faculty: '', date: '18 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '18 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack Java Placement Assistance',       faculty: '', date: '19 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Full Stack .Net Placement Assistance',       faculty: '', date: '19 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Terraform Associate Certification (003)',    faculty: '', date: '19 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Data Science Internship Program',            faculty: '', date: '25 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Python Internship Program',                  faculty: '', date: '25 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'DevOps with Cloud Internship',               faculty: '', date: '26 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
    { course: 'Playwright with TypeScript',                 faculty: '', date: '26 Jul 2026', time: '9:00 AM - 12:00 PM IST' },
  ],
}

const TABS         = Object.keys(BATCH_DATA)
const SHOW_OPTIONS = [10, 25, 50, 'All']

/* ── Page ────────────────────────────────────────────────── */
export default function NewBatches() {
  const [activeTab,   setActiveTab]   = useState('Online Training')
  const [showEntries, setShowEntries] = useState(10)
  const [search,      setSearch]      = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const rawData = BATCH_DATA[activeTab] || []

  /* Filter by search */
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return rawData
    return rawData.filter(
      r => r.course.toLowerCase().includes(q) || r.faculty.toLowerCase().includes(q)
    )
  }, [rawData, search])

  /* Pagination */
  const perPage     = showEntries === 'All' ? filtered.length || 1 : showEntries
  const totalPages  = Math.max(1, Math.ceil(filtered.length / perPage))
  const safePage    = Math.min(currentPage, totalPages)
  const pageData    = filtered.slice((safePage - 1) * perPage, safePage * perPage)
  const startEntry  = filtered.length === 0 ? 0 : (safePage - 1) * perPage + 1
  const endEntry    = Math.min(safePage * perPage, filtered.length)

  function switchTab(tab) {
    setActiveTab(tab)
    setSearch('')
    setCurrentPage(1)
  }

  function handleShowEntries(val) {
    setShowEntries(val === 'All' ? 'All' : Number(val))
    setCurrentPage(1)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
    setCurrentPage(1)
  }

  /* Build page number buttons (show up to 5 around current) */
  function pageNumbers() {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages = []
    const start = Math.max(2, safePage - 2)
    const end   = Math.min(totalPages - 1, safePage + 2)
    pages.push(1)
    if (start > 2) pages.push('…')
    for (let i = start; i <= end; i++) pages.push(i)
    if (end < totalPages - 1) pages.push('…')
    pages.push(totalPages)
    return pages
  }

  return (
    <div className="nb-page">
      <Navbar />

      <div className="nb-main">

        {/* ── Page heading ── */}
        <div className="nb-header">
          <h1 className="nb-header__title">New Batch Timetable</h1>
          <p className="nb-header__sub">Explore new and trending free online courses.</p>
        </div>

        {/* ── Tab bar ── */}
        <div className="nb-tabs" role="tablist">
          {TABS.map(tab => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`nb-tab${activeTab === tab ? ' nb-tab--active' : ''}`}
              onClick={() => switchTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Controls row ── */}
        <div className="nb-controls">
          <div className="nb-controls__left">
            <label className="nb-show-label">
              Show
              <select
                className="nb-show-select"
                value={showEntries}
                onChange={e => handleShowEntries(e.target.value)}
              >
                {SHOW_OPTIONS.map(o => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              entries
            </label>
          </div>
          <div className="nb-controls__right">
            <label className="nb-search-label">
              Search:
              <input
                type="text"
                className="nb-search-input"
                value={search}
                onChange={handleSearch}
                placeholder="Course or faculty…"
              />
            </label>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="nb-table-wrap">
          <table className="nb-table">
            <thead>
              <tr>
                <th className="nb-th nb-th--sno">S.No</th>
                <th className="nb-th">Course Name</th>
                <th className="nb-th" style={{ display: 'none' }}>Faculty</th>
                <th className="nb-th">Date</th>
                <th className="nb-th">Time</th>
                <th className="nb-th" style={{ display: 'none' }}>Meeting Link</th>
                <th style={{ background: '#1565c0', color: '#fff', padding: '12px 16px' }}>Course Details</th>
              </tr>
            </thead>
            <tbody>
              {pageData.length > 0 ? (
                pageData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'nb-tr--even' : 'nb-tr--odd'}>
                    <td className="nb-td nb-td--sno">{startEntry + idx}</td>
                    <td className="nb-td">{row.course}</td>
                    <td className="nb-td" style={{ display: 'none' }}>{row.faculty}</td>
                    <td className="nb-td nb-td--nowrap">{row.date}</td>
                    <td className="nb-td nb-td--nowrap">{row.time}</td>
                    <td className="nb-td" style={{ display: 'none' }}>
                      <button className="nb-join-btn" type="button">Click here</button>
                    </td>
                    <td className="nb-td">
                      {COURSE_SLUGS[row.course] && (
                        <Link
                          to={`/courses/${COURSE_SLUGS[row.course]}`}
                          style={{
                            background: '#1565c0',
                            color: '#fff',
                            padding: '6px 14px',
                            borderRadius: '4px',
                            textDecoration: 'none',
                            fontSize: '13px',
                            fontWeight: '600',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          View Details
                        </Link>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="nb-td nb-td--empty">
                    {search ? 'No matching batches found.' : 'No batches available.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Footer row: info + pagination ── */}
        <div className="nb-footer-row">
          <div className="nb-info-text">
            {filtered.length === 0
              ? 'Showing 0 entries'
              : `Showing ${startEntry} to ${endEntry} of ${filtered.length} entries`}
          </div>

          {totalPages > 1 && (
            <div className="nb-pagination">
              <button
                className="nb-page-btn"
                disabled={safePage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                Previous
              </button>

              {pageNumbers().map((p, i) =>
                p === '…' ? (
                  <span key={`ellipsis-${i}`} className="nb-page-ellipsis">…</span>
                ) : (
                  <button
                    key={p}
                    className={`nb-page-btn nb-page-btn--num${safePage === p ? ' nb-page-btn--active' : ''}`}
                    onClick={() => setCurrentPage(p)}
                  >
                    {p}
                  </button>
                )
              )}

              <button
                className="nb-page-btn"
                disabled={safePage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>

      </div>

      <Footer />
    </div>
  )
}
