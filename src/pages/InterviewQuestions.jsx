import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './InterviewQuestions.css'

/* ── Category data ─────────────────────────────────────────────────────
   All img URLs are confirmed present on images.nareshit.com.
   bg / color are used only if the image fails to load.
   ─────────────────────────────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'java',
    name: 'Java',
    img: 'https://images.nareshit.com/Core_java_Naresh_ITECH.png',
    bg: '#ef4444', color: '#fff',
  },
  {
    id: 'python',
    name: 'Python',
    img: 'https://images.nareshit.com/python-online-training-nareshit.jpg',
    bg: '#3b82f6', color: '#fff',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    img: 'https://images.nareshit.com/html-css-javascript-online-training-nareshit.jpg',
    bg: '#eab308', color: '#fff',
  },
  {
    id: 'react',
    name: 'React',
    img: 'https://images.nareshit.com/react-js-online-training-nareshit.jpg',
    bg: '#06b6d4', color: '#fff',
  },
  {
    id: 'sql-databases',
    name: 'SQL & Databases',
    img: 'https://images.nareshit.com/sql-server-online-training-nareshit.jpg',
    bg: '#8b5cf6', color: '#fff',
  },
  {
    id: 'aws',
    name: 'AWS',
    img: 'https://images.nareshit.com/aws-online-training-nareshit.jpg',
    bg: '#f97316', color: '#fff',
  },
  {
    id: 'devops',
    name: 'DevOps',
    img: 'https://images.nareshit.com/devops-online-training-nareshit.jpg',
    bg: '#22c55e', color: '#fff',
  },
  {
    id: 'data-structures',
    name: 'Data Structures',
    img: 'https://images.nareshit.com/DSA_with_AI_Engineer_Program_Naresh_IT.png',
    bg: '#14b8a6', color: '#fff',
  },
  {
    id: 'system-design',
    name: 'System Design',
    img: 'https://images.nareshit.com/Site_Reliability_Engineering_(SRE)_online_training.jpg',
    bg: '#6366f1', color: '#fff',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    img: 'https://images.nareshit.com/mongo-db-online-training-nareshit.jpg',
    bg: '#16a34a', color: '#fff',
  },
  {
    id: 'docker',
    name: 'Docker',
    img: 'https://images.nareshit.com/dockers-kubernetes-online-training-nareshit.jpg',
    bg: '#2563eb', color: '#fff',
  },
  {
    id: 'git',
    name: 'Git',
    img: 'https://images.nareshit.com/azure-devops-online-training-nareshit.jpg',
    bg: '#ea580c', color: '#fff',
  },
  {
    id: 'nasscom',
    name: 'NASSCOM',
    img: 'https://images.nareshit.com/images/image_1711014922224.jpg',
    bg: '#dc2626', color: '#fff',
  },
  {
    id: 'programming',
    name: 'Programming',
    img: 'https://images.nareshit.com/images/image_1706093917022.jpg',
    bg: '#7c3aed', color: '#fff',
  },
  {
    id: 'automations',
    name: 'Automations',
    img: 'https://images.nareshit.com/images/image_1706532317771.jpg',
    bg: '#d97706', color: '#fff',
  },
  {
    id: 'data-base',
    name: 'Data Base',
    img: 'https://images.nareshit.com/images/image_1706532292403.jpg',
    bg: '#1d4ed8', color: '#fff',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    img: 'https://images.nareshit.com/images/image_1706532234414.jpg',
    bg: '#db2777', color: '#fff',
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    img: 'https://images.nareshit.com/images/image_1706687556313.png',
    bg: '#475569', color: '#fff',
  },
]

/* ── Page ────────────────────────────────────────────────────── */
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
              <div className="iq-card__img-wrap">
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
                {/* letter fallback shown only when img fails */}
                <div
                  className="iq-card__fallback"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.name[0]}
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
