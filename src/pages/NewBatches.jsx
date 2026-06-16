import { useState, useMemo } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './NewBatches.css'

/* ── Batch data per tab ─────────────────────────────────── */
const BATCH_DATA = {
  'Online Training': [
    { course: 'Generative AI & Agentic AI with Python', faculty: 'Mr. Shiva Rama Krishna', date: '04 Jun 2026', time: '9:30 AM IST'  },
    { course: 'Python with Gen AI',                      faculty: 'Mr. Rajesh',              date: '04 Jun 2026', time: '11:50 PM IST' },
    { course: 'Full Stack Data Science with Gen AI',     faculty: 'Mr. Omkar',               date: '03 Jun 2026', time: '1:00 AM IST'  },
    { course: 'Oracle',                                  faculty: 'Mr. Shiva Chaitanya',     date: '01 Jun 2026', time: '11:50 PM IST' },
    { course: 'HTML CSS Java Script',                    faculty: 'Mr. Shiva Kumar',         date: '01 Jun 2026', time: '9:30 AM IST'  },
    { course: 'Full Stack Java Placement Assistance',    faculty: 'Real-Time Expert',        date: '08 Jun 2026', time: '1:30 AM IST'  },
    { course: 'Full Stack .Net Placement Assistance',    faculty: 'Real-Time Expert',        date: '08 Jun 2026', time: '1:30 AM IST'  },
    { course: 'Full Stack Software Testing',             faculty: 'Real-Time Expert',        date: '01 Jun 2026', time: '10:00 AM IST' },
    { course: 'Azure Data Engineer',                     faculty: 'Mr. Pavan',               date: '01 Jun 2026', time: '10:00 AM IST' },
    { course: 'Data Analytics & Business Analytics',     faculty: 'Mr. Nikhil',              date: '01 Jun 2026', time: '7:30 AM IST'  },
    { course: 'Full Stack .Net Core 10 with AI',         faculty: 'Mr. Bangar Raju',         date: '01 Jun 2026', time: '11:45 PM IST' },
    { course: 'Playwright Automation',                   faculty: 'Mr. Sumanth',             date: '01 Jun 2026', time: '10:00 PM IST' },
    { course: 'MS Azure + Azure DevOps',                 faculty: 'Mr. Sandeep',             date: '01 Jun 2026', time: '10:20 PM IST' },
    { course: 'Unix / Linux',                            faculty: 'Mr. Imran',               date: '01 Jun 2026', time: '7:00 AM IST'  },
    { course: 'Power BI',                                faculty: 'Miss. Mohana',            date: '01 Jun 2026', time: '12:55 PM IST' },
    { course: 'Full Stack Python',                       faculty: 'Mr. Shareef',             date: '01 Jun 2026', time: '9:30 AM IST'  },
    { course: 'Python Programming',                      faculty: 'Mr. Shareef',             date: '01 Jun 2026', time: '9:30 AM IST'  },
    { course: 'Full Stack Java',                         faculty: 'Mr. Hari Krishna',        date: '01 Jun 2026', time: '9:30 AM IST'  },
    { course: 'Core Java',                               faculty: 'Mr. Hari Krishna',        date: '01 Jun 2026', time: '9:30 AM IST'  },
    { course: 'C# .NET',                                 faculty: 'Mr. Bangar Raju',         date: '01 Jun 2026', time: '11:45 PM IST' },
  ],
  'Classroom Training': [
    { course: 'Full Stack Java',               faculty: 'Mr. Mahendra',    date: '21 May 2026', time: '9:00 AM IST'  },
    { course: 'Full Stack Java',               faculty: 'Mr. Kishan B',    date: '18 May 2026', time: '7:15 AM IST'  },
    { course: 'Full Stack Python',             faculty: 'Mr. Shareef',     date: '27 May 2026', time: '6:00 PM IST'  },
    { course: 'Full Stack Software Testing',   faculty: 'Real-Time Expert', date: '28 May 2026', time: '9:00 AM IST'  },
    { course: 'Full Stack Data Science & AI',  faculty: 'Mr. Omkar',       date: '27 May 2026', time: '8:00 AM IST'  },
    { course: 'Full Stack .NET Core',          faculty: 'Mr. Bangar Raju', date: '25 May 2026', time: '9:15 AM IST'  },
    { course: 'Full Stack Java Placement',     faculty: 'Real-Time Expert', date: '08 Jun 2026', time: '11:00 AM IST' },
    { course: 'Full Stack .Net Placement',     faculty: 'Real-Time Expert', date: '08 Jun 2026', time: '11:00 AM IST' },
  ],
  'Workshops': [
    { course: 'Workshop on Modern Data Lake Analytics with Athena',                             faculty: 'Mr. Veera Babu',        date: '29 May 2026', time: '10:00 AM IST' },
    { course: 'Workshop on Advanced LLMOPS',                                                    faculty: 'Mr. Prakash Senapathi', date: '29 May 2026', time: '10:00 AM IST' },
    { course: 'Workshop on Production Agentic AI: Build Stateful AI Agents with LangGraph',     faculty: 'Mr. Omkar',             date: '29 May 2026', time: '10:00 AM IST' },
  ],
  'Internships': [
    { course: 'Internship Program on Python',          faculty: 'Mr. Mayur',        date: '01 Jun 2026', time: '5:00 PM IST' },
    { course: 'Internship on DevOps with Cloud',       faculty: 'Real-Time Expert',  date: '01 Jun 2026', time: '9:00 AM IST' },
    { course: 'Internship on Data Science',            faculty: 'Real-Time Expert',  date: '01 Jun 2026', time: '9:00 AM IST' },
  ],
  'Weekend Training': [
    { course: 'Full Stack Java',               faculty: 'Mr. Mahendra',   date: '07 Jun 2026', time: '9:00 AM IST'  },
    { course: 'Full Stack Python',             faculty: 'Mr. Shareef',    date: '07 Jun 2026', time: '10:00 AM IST' },
    { course: 'Full Stack Software Testing',   faculty: 'Real-Time Expert', date: '08 Jun 2026', time: '9:00 AM IST'  },
    { course: 'Data Analytics & Business Analytics', faculty: 'Mr. Nikhil', date: '08 Jun 2026', time: '10:00 AM IST' },
    { course: 'MS Azure + Azure DevOps',       faculty: 'Mr. Sandeep',    date: '07 Jun 2026', time: '11:00 AM IST' },
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="nb-td nb-td--empty">
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
