import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './InterviewQuestions.css'

/* ── Category data ──────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'java',
    name: 'Java',
    img: null,
    emoji: '☕',
    bg: '#fee2e2',
    color: '#dc2626',
  },
  {
    id: 'python',
    name: 'Python',
    img: null,
    emoji: '🐍',
    bg: '#dcfce7',
    color: '#16a34a',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    img: null,
    emoji: '🟨',
    bg: '#fef9c3',
    color: '#ca8a04',
  },
  {
    id: 'react',
    name: 'React',
    img: null,
    emoji: '⚛️',
    bg: '#dbeafe',
    color: '#1565c0',
  },
  {
    id: 'sql-databases',
    name: 'SQL & Databases',
    img: null,
    emoji: '🗄️',
    bg: '#dbeafe',
    color: '#0369a1',
  },
  {
    id: 'aws',
    name: 'AWS',
    img: null,
    emoji: '☁️',
    bg: '#ffedd5',
    color: '#ea580c',
  },
  {
    id: 'devops',
    name: 'DevOps',
    img: null,
    emoji: '⚙️',
    bg: '#f3e8ff',
    color: '#7c3aed',
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    img: null,
    emoji: '🔗',
    bg: '#dcfce7',
    color: '#15803d',
  },
  {
    id: 'system-design',
    name: 'System Design',
    img: null,
    emoji: '🏗️',
    bg: '#dbeafe',
    color: '#1d4ed8',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    img: null,
    emoji: '🍃',
    bg: '#dcfce7',
    color: '#16a34a',
  },
  {
    id: 'docker',
    name: 'Docker',
    img: null,
    emoji: '🐳',
    bg: '#dbeafe',
    color: '#0284c7',
  },
  {
    id: 'git',
    name: 'Git',
    img: null,
    emoji: '🔀',
    bg: '#ffedd5',
    color: '#ea580c',
  },
  {
    id: 'nasscom',
    name: 'NASSCOM',
    img: 'https://images.nareshit.com/images/image_1711014922224.jpg',
    emoji: '🎓',
    bg: '#fee2e2',
    color: '#dc2626',
  },
  {
    id: 'programming',
    name: 'Programming',
    img: 'https://images.nareshit.com/images/image_1706093917022.jpg',
    emoji: '💻',
    bg: '#dcfce7',
    color: '#16a34a',
  },
  {
    id: 'automations',
    name: 'Automations',
    img: 'https://images.nareshit.com/images/image_1706532317771.jpg',
    emoji: '🤖',
    bg: '#ffedd5',
    color: '#ea580c',
  },
  {
    id: 'data-base',
    name: 'Data Base',
    img: 'https://images.nareshit.com/images/image_1706532292403.jpg',
    emoji: '🗃️',
    bg: '#dbeafe',
    color: '#1565c0',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    img: 'https://images.nareshit.com/images/image_1706532234414.jpg',
    emoji: '🌐',
    bg: '#f3e8ff',
    color: '#7c3aed',
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    img: 'https://images.nareshit.com/images/image_1706687556313.png',
    emoji: '🧩',
    bg: '#dbeafe',
    color: '#0284c7',
  },
]

/* ── Page ────────────────────────────────────────────────── */
export default function InterviewQuestions() {
  return (
    <div className="iq-page">
      <Navbar />

      <div className="iq-main">
        <div className="iq-header">
          <h1 className="iq-header__title">Interview Questions</h1>
          <p className="iq-header__sub">Explore new and trending free online courses.</p>
        </div>

        <div className="iq-grid">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.id}
              to={`/interview-questions/${cat.id}`}
              className="iq-card"
            >
              <div
                className="iq-card__img-wrap"
                style={{ background: cat.bg }}
              >
                {cat.img ? (
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="iq-card__img"
                    loading="lazy"
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="iq-card__emoji-wrap"
                  style={{
                    display: cat.img ? 'none' : 'flex',
                    color: cat.color,
                  }}
                >
                  <span className="iq-card__emoji">{cat.emoji}</span>
                </div>
              </div>
              <div className="iq-card__name">{cat.name}</div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
