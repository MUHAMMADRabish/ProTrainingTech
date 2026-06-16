import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Introduction & Foundations',
    count: 4,
    topics: [
      'What We Will Learn – Course Roadmap',
      'Generative AI Fundamentals',
      'Agentic AI Principles',
      'Comparative Analysis – Generative AI vs Agentic AI',
    ],
  },
  {
    title: 'Fundamentals of Generative AI & LLMs',
    count: 8,
    topics: [
      'Generative AI Basics & Use Cases',
      'Large Language Models Overview',
      'Tokenization and Vocabulary',
      'Embeddings and Vector Representations',
      'Attention Mechanisms Overview',
      'Self-Attention Deep Dive',
      'Multi-Head Attention',
      'Encoder-Decoder Transformer Architecture',
    ],
  },
  {
    title: 'Working with LLMs',
    count: 6,
    topics: [
      'Open Source vs Closed Source LLM Comparison',
      'HuggingFace Ecosystem Overview',
      'Model Loading and Parameters',
      'Weight Formats and Quantization Basics',
      'Multi-Modal LLMs – Text, Audio, Image, Video',
      'Practical LLM Evaluation and Selection',
    ],
  },
  {
    title: 'Prompt Engineering & Control',
    count: 7,
    topics: [
      'Context Management and Sequence Length',
      'Sampling Parameters – Temperature, Top-k, Top-p',
      'Zero-Shot and Few-Shot Learning',
      'Chain of Thought Prompting',
      'ReAct Framework',
      'Chat Completion APIs – OpenAI, Google Gemini, Anthropic Claude',
      'Structured Output and Function Calling',
    ],
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    count: 7,
    topics: [
      'RAG Fundamentals and Architecture',
      'Hallucination Mitigation with RAG',
      'Embeddings and Semantic Search',
      'Vector Databases – Chroma, Pinecone, FAISS, Milvus',
      'Chunking Strategies for Documents',
      'Conversational RAG Pipelines',
      'RAG Response Evaluation Frameworks',
    ],
  },
  {
    title: 'Advanced RAG Patterns',
    count: 5,
    topics: [
      'Corrective RAG with Self-Evaluation',
      'Self-RAG with Reflection',
      'Graph RAG Architecture',
      'Hybrid RAG Approaches',
      'Advanced Retrieval Strategies',
    ],
  },
  {
    title: 'Graph-Based Knowledge & Retrieval',
    count: 4,
    topics: [
      'Graph Fundamentals and Knowledge Graphs',
      'Ontology Design for AI',
      'Neo4j Database Setup and Querying',
      'Graph-Based Question Answering',
    ],
  },
  {
    title: 'LangChain Framework',
    count: 7,
    topics: [
      'LangChain Ecosystem Overview',
      'Chains, Prompts, and Templates',
      'Memory Systems in LangChain',
      'Document Loaders and Text Splitters',
      'Output Parsers',
      'RAG Pipeline Implementation with LangChain',
      'Agents and Tool Integration',
    ],
  },
  {
    title: 'Agentic AI Principles',
    count: 6,
    topics: [
      'AI Agents vs Agentic AI – Key Distinctions',
      'Goal-Based Agent Design',
      'Planner and Orchestrator Patterns',
      'Framework Overview – CrewAI, LangGraph, AutoGen',
      'Tool Use and API Integration',
      'Agent Evaluation and Safety',
    ],
  },
  {
    title: 'LangGraph – Agent Workflows',
    count: 6,
    topics: [
      'Sequential Workflow Implementation',
      'Parallel Agent Execution',
      'Iterative and Conditional Workflows',
      'Memory and State Management',
      'LangSmith Observability and Tracing',
      'Multi-Agent Orchestration with LangGraph',
    ],
  },
  {
    title: 'Model Context Protocol (MCP)',
    count: 4,
    topics: [
      'MCP Architecture Overview',
      'MCP Server Implementation',
      'Tool Integration Patterns',
      'MCP for Agent Communication',
    ],
  },
  {
    title: 'Agent-to-Agent Communication',
    count: 4,
    topics: [
      'Manager-Worker Orchestration Pattern',
      'Peer-to-Peer Agent Collaboration',
      'Message Passing and Task Delegation',
      'Multi-Agent System Design',
    ],
  },
  {
    title: 'Fine-Tuning & Quantization',
    count: 5,
    topics: [
      'Fine-Tuning Fundamentals and Use Cases',
      'Parameter-Efficient Fine-Tuning (PEFT)',
      'LoRA – Low-Rank Adaptation',
      'QLoRA – Quantized LoRA',
      'Quantization Techniques and Model Compression',
    ],
  },
  {
    title: 'Model Serving & Deployment',
    count: 4,
    topics: [
      'Production Deployment Strategies',
      'vLLM for High-Throughput Serving',
      'TensorRT-LLM for GPU Optimization',
      'Deployment with Docker and Cloud Services',
    ],
  },
  {
    title: 'Capstone Projects',
    count: 4,
    topics: [
      'Project 1: Domain-Aware Enterprise Chatbot',
      'Project 2: RAG-Powered Customer Support System',
      'Project 3: AI Healthcare Advisor with Agentic Reasoning',
      'Project 4: Stock Market Insight System with Multi-Agent Analysis',
    ],
  },
]

const BATCHES = [
  { course: 'Advanced Generative & Agentic AI', faculty: 'Real-Time Expert', date: '15 Jun', time: '7:00 PM IST', mode: 'online', type: 'Online Training', link: 'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Advanced Curriculum',          desc: 'Covers LLMs, RAG, Graph RAG, LangGraph, CrewAI, MCP, LoRA/QLoRA fine-tuning, and production deployment end-to-end.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: '10+ Agentic AI Projects',      desc: 'Build autonomous agents, multi-agent systems, RAG pipelines, and real-world AI apps across healthcare, finance, and SaaS.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',           desc: 'Learn from practising AI engineers with hands-on experience deploying LLMs and agentic systems in production.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',     desc: 'Career guidance, portfolio reviews, mock interviews, and employer referrals targeting Agentic AI and LLM developer roles.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised Pro Training Tech certificate validating your advanced Generative AI and Agentic AI expertise.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Learning Support',        desc: 'Round-the-clock mentor access, lab sessions, and lifetime course material access to support your learning journey.' },
]

const REVIEWS = [
  { name: 'Vikram Nair',    course: 'Advanced Generative & Agentic AI', rating: 5, initials: 'VN', color: '#1565c0', text: 'This is the most comprehensive advanced AI course I have taken. LangGraph, CrewAI, and Graph RAG are rarely taught together. After completing the capstone projects I landed an Agentic AI Engineer role within two months of graduating.' },
  { name: 'Priya Menon',   course: 'Advanced Generative & Agentic AI', rating: 5, initials: 'PM', color: '#e05c2a', text: 'The MCP and agent-to-agent communication modules were eye-opening. Building manager-worker hierarchies using LangGraph and deploying them with Docker gave me skills that senior engineers at my company were still figuring out.' },
  { name: 'Arjun Sharma',  course: 'Advanced Generative & Agentic AI', rating: 5, initials: 'AS', color: '#2e7d32', text: 'Excellent depth on RAG — from basic retrieval to corrective RAG and Graph RAG. The vector database practicals with Pinecone and FAISS were extremely hands-on. Fine-tuning with QLoRA on custom datasets was the highlight of the programme.' },
  { name: 'Deepa Rao',     course: 'Advanced Generative & Agentic AI', rating: 4, initials: 'DR', color: '#6a1b9a', text: 'Very well structured and up-to-date curriculum. The LangSmith observability section is something I could apply immediately at work. Placement team was proactive and helped me target the right roles. Highly recommended for AI professionals looking to level up.' },
]

const RELATED = [
  { title: 'Generative AI & Agentic AI',          slug: 'generative-ai-online-training',                icon: '🤖' },
  { title: 'MLOps & AIOps',                        slug: 'mlops-and-aiops-online-training',              icon: '⚙️' },
  { title: 'Full Stack Data Science & AI',         slug: 'full-stack-data-science-ai-online-training',   icon: '📊' },
  { title: 'Data Science with AI',                 slug: 'data-science-online-training',                 icon: '🧠' },
  { title: 'Data Analytics & Business Analytics',  slug: 'data-analytics-online-training',               icon: '📈' },
]

const MNC_LOGOS = [
  'https://images.nareshit.com/images/logo_1706095643303.png',
  'https://images.nareshit.com/images/logo_1706095633847.png',
  'https://images.nareshit.com/images/logo_1706095622079.png',
  'https://images.nareshit.com/images/logo_1706095609087.png',
  'https://images.nareshit.com/images/logo_1706095596384.png',
  'https://images.nareshit.com/images/logo_1706095585072.png',
  'https://images.nareshit.com/images/logo_1706095560202.png',
  'https://images.nareshit.com/images/logo_1706095549234.png',
  'https://images.nareshit.com/images/logo_1706095534994.png',
  'https://images.nareshit.com/images/logo_1706095506341.png',
  'https://images.nareshit.com/images/logo_1706095491707.png',
  'https://images.nareshit.com/images/logo_1706095288391.png',
  'https://images.nareshit.com/images/logo_1706095273280.png',
  'https://images.nareshit.com/images/logo_1706095262264.png',
  'https://images.nareshit.com/images/logo_1706095252569.png',
  'https://images.nareshit.com/images/logo_1706095241345.png',
  'https://images.nareshit.com/images/logo_1706095167525.png',
  'https://images.nareshit.com/images/logo_1706095110331.png',
]

const LOGOS_PER_PAGE = 10

const TABS = [
  { id: 'overview',          label: 'Overview'          },
  { id: 'curriculum',        label: 'Curriculum'        },
  { id: 'certificate',       label: 'Certificate'       },
  { id: 'upcoming-batches',  label: 'Upcoming Batches'  },
  { id: 'training-features', label: 'Training Features' },
  { id: 'reviews',           label: 'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function AdvancedGenAIDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('15 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name: '', email: '', mobile: '', course: 'Advanced Generative & Agentic AI', mode: 'Online' })
  const [submitted,    setSubmitted]    = useState(false)
  const [logoPage,     setLogoPage]     = useState(0)
  const totalLogoPages = Math.ceil(MNC_LOGOS.length / LOGOS_PER_PAGE)

  const headerRef = useRef(null)
  const tabsRef   = useRef(null)
  const [sticky,  setSticky] = useState(false)

  useEffect(() => {
    const NAVBAR_H = 64
    const onScroll = () => {
      if (!headerRef.current) return
      setSticky(headerRef.current.getBoundingClientRect().bottom <= NAVBAR_H)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleSection    = (i) => setOpenSections(p => ({ ...p, [i]: !p[i] }))
  const handleFormChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }
  const scrollToTab = (id) => {
    setActiveTab(id)
    if (headerRef.current) {
      const target = headerRef.current.offsetTop + headerRef.current.offsetHeight - 64
      window.scrollTo({ top: target, behavior: 'smooth' })
    }
  }

  return (
    <div className="fsj-page">
      <Navbar />

      {/* ── Breadcrumb ─────────────────────────────────────────────────────── */}
      <div className="fsj-breadcrumb-bar">
        <div className="fsj-container">
          <nav className="fsj-breadcrumb" aria-label="Breadcrumb">
            <Link to="/course-listing">Courses</Link>
            <span>›</span>
            <Link to="/courses">Data Science</Link>
            <span>›</span>
            <span>Advanced Generative &amp; Agentic AI</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/advanced-generative-and-agentic-ai.jpg"
            alt="Advanced Generative & Agentic AI Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Advanced Generative &amp; Agentic AI</h1>
              <p className="fsj-banner__sub">LLMs · RAG · Graph RAG · LangGraph · CrewAI · MCP · Fine-Tuning · Production Deployment</p>
            </div>
          </div>
        </div>

        <div className="fsj-controls-wrap">
          <div className="fsj-container">
            <div className="fsj-controls">
              <div className="fsj-controls__left">
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Training Type</label>
                  <select className="fsj-select" value={trainingType} onChange={e => setTrainingType(e.target.value)}>
                    <option>Online Training</option>
                  </select>
                </div>
                <div className="fsj-select-group" style={{ display: 'none' }}>
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Real-Time Expert</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>15 Jun - 7:00 PM IST</option>
                    <option>01 Jul - 7:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 Months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee" style={{ display: 'none' }}>
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>25000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  style={{ display: 'none' }}
                  href="/curriculum/advanced-generative-agentic-ai-curriculum.pdf"
                  className="fsj-btn fsj-btn--outline"
                  onClick={e => e.preventDefault()}
                >
                  ↓ Download Curriculum
                </a>
                <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                  Enroll Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs Bar ───────────────────────────────────────────────────────── */}
      {sticky && <div className="fsj-tabs-bar-placeholder" />}
      <div className={`fsj-tabs-bar${sticky ? ' fsj-tabs-bar--sticky' : ''}`} ref={tabsRef} role="tablist">
        <div className="fsj-container">
          <div className="fsj-tabs">
            {TABS.map(tab => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`fsj-tab${activeTab === tab.id ? ' fsj-tab--active' : ''}`}
                onClick={() => scrollToTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ────────────────────────────────────────────────────── */}
      <div className="fsj-container">
        <div className="fsj-layout">

          <main className="fsj-content">

            {/* ── OVERVIEW ─────────────────────────────────────────────── */}
            {activeTab === 'overview' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Overview</h2>
                <p className="fsj-para">
                  Advanced Generative &amp; Agentic AI is a next-generation programme designed to
                  transform experienced Python developers into production-ready AI engineers. The course
                  goes well beyond introductory GenAI — diving deep into advanced RAG patterns, agentic
                  frameworks (LangGraph, CrewAI, AutoGen), Model Context Protocol, and fine-tuning
                  with LoRA/QLoRA — culminating in four industry capstone projects.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This programme covers the full agentic AI stack: from transformer internals and
                  multi-modal LLMs to advanced retrieval strategies including Graph RAG, self-RAG,
                  and corrective RAG. Students implement manager-worker agent hierarchies, build
                  observability pipelines with LangSmith, and master MCP for tool-augmented agents.
                </p>
                <p className="fsj-para">
                  The course concludes with model serving via vLLM and TensorRT-LLM, containerised
                  deployment with Docker, and cloud release — equipping learners for Agentic AI
                  Engineer, LLM Applications Developer, and AI Automation Architect roles.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Design and deploy autonomous AI agents using LangGraph, CrewAI, and AutoGen</li>
                  <li>Implement advanced RAG systems including Graph RAG, self-RAG, and corrective RAG</li>
                  <li>Master prompt engineering techniques — ReAct, chain of thought, and structured output</li>
                  <li>Build knowledge graphs with Neo4j and integrate graph-based retrieval into LLM pipelines</li>
                  <li>Orchestrate multi-agent systems with manager-worker and peer-to-peer communication patterns</li>
                  <li>Apply the Model Context Protocol (MCP) for scalable tool and API integration</li>
                  <li>Fine-tune large language models using LoRA and QLoRA for domain-specific tasks</li>
                  <li>Deploy models in production using vLLM, TensorRT-LLM, Docker, and cloud services</li>
                  <li>Monitor agent workflows with LangSmith observability and tracing tools</li>
                  <li>Complete four industry capstone projects spanning healthcare, finance, SaaS, and customer support</li>
                </ul>

                <h3 className="fsj-sub-title">Target Audience</h3>
                <ul className="fsj-bullet-list">
                  <li>Python-proficient developers seeking to transition into Agentic AI engineering</li>
                  <li>Software engineers building LLM-powered applications for production</li>
                  <li>Data scientists expanding from models to autonomous reasoning systems</li>
                  <li>AI developers focused on LangChain, OpenAI, and multi-agent frameworks</li>
                  <li>Product managers and entrepreneurs building AI-native SaaS platforms</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Python programming proficiency (functions, classes, libraries)</li>
                  <li>Familiarity with machine learning basics and neural network concepts</li>
                  <li>Basic understanding of REST APIs and cloud services</li>
                  <li>Exposure to LLMs or GenAI concepts recommended</li>
                </ul>

                <button
                  className="fsj-btn fsj-btn--primary fsj-enroll-now"
                  onClick={() => scrollToTab('upcoming-batches')}
                >
                  Enroll Now
                </button>
              </div>
            )}

            {/* ── CURRICULUM ───────────────────────────────────────────── */}
            {activeTab === 'curriculum' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Curriculum</h2>
                <div className="fsj-accordion">
                  {CURRICULUM.map((sec, i) => (
                    <div key={i} className={`fsj-acc${openSections[i] ? ' fsj-acc--open' : ''}`}>
                      <button
                        className="fsj-acc__head"
                        onClick={() => toggleSection(i)}
                        aria-expanded={!!openSections[i]}
                      >
                        <span className="fsj-acc__title">{sec.title}</span>
                        <div className="fsj-acc__right">
                          <span className="fsj-acc__count">{sec.count} Topics</span>
                          <span className="fsj-acc__chevron">{openSections[i] ? '▲' : '▼'}</span>
                        </div>
                      </button>
                      {openSections[i] && (
                        <div className="fsj-acc__body">
                          <div className="fsj-topics-grid">
                            {sec.topics.map((t, j) => (
                              <div key={j} className="fsj-topic-item">
                                <span className="fsj-topic-num">{String(j + 1).padStart(2, '0')}.</span>
                                <span>{t}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button className="fsj-btn fsj-btn--primary" onClick={() => scrollToTab('upcoming-batches')}>
                    Apply Now
                  </button>
                </div>
              </div>
            )}

            {/* ── CERTIFICATE ──────────────────────────────────────────── */}
            {activeTab === 'certificate' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Course Certificate</h2>
                <p className="fsj-para">
                  Upon successful completion of the Advanced Generative &amp; Agentic AI programme,
                  you will receive an industry-recognised certificate from Pro Training Tech validating
                  your expertise in LangGraph, CrewAI, advanced RAG, MCP, LoRA/QLoRA fine-tuning,
                  and production AI deployment.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Advanced Generative & Agentic AI Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Advanced Generative &amp; Agentic AI</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="fsj-btn fsj-btn--outline" onClick={() => {}}>
                    Drop a Query
                  </button>
                </div>
              </div>
            )}

            {/* ── UPCOMING BATCHES ─────────────────────────────────────── */}
            {activeTab === 'upcoming-batches' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Upcoming Batches</h2>
                <div className="fsj-table-wrap">
                  <table className="fsj-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Faculty</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Mode</th>
                        <th>Batch Type</th>
                        <th>Meeting Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {BATCHES.map((b, i) => (
                        <tr key={i}>
                          <td><strong>{b.course}</strong></td>
                          <td>{b.faculty}</td>
                          <td>{b.date}</td>
                          <td>{b.time}</td>
                          <td>
                            <span className={`fsj-mode-badge fsj-mode-badge--${b.mode}`}>
                              {b.mode}
                            </span>
                          </td>
                          <td>{b.type}</td>
                          <td>
                            <button className="fsj-btn fsj-btn--sm" onClick={() => scrollToTab('overview')}>
                              {b.link}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* ── TRAINING FEATURES ────────────────────────────────────── */}
            {activeTab === 'training-features' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Training Features</h2>
                <div className="fsj-features-grid">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="fsj-feature-card" style={{ '--feat-color': f.color, '--feat-bg': f.bg }}>
                      <div className="fsj-feature-card__icon-wrap" style={{ background: f.bg }}>
                        <f.Icon width={40} height={40} color={f.color} strokeWidth={1.5} />
                      </div>
                      <h3 className="fsj-feature-card__title">{f.title}</h3>
                      <p className="fsj-feature-card__desc">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REVIEWS ──────────────────────────────────────────────── */}
            {activeTab === 'reviews' && (
              <div className="fsj-panel">
                <h2 className="fsj-section-title">Student Reviews</h2>
                <div className="fsj-reviews-grid">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="fsj-review-card">
                      <div className="fsj-review-card__top">
                        <div className="fsj-rev-avatar" style={{ background: r.color }}>{r.initials}</div>
                        <div>
                          <div className="fsj-rev-name">{r.name}</div>
                          <div className="fsj-rev-course">{r.course}</div>
                        </div>
                      </div>
                      <div className="fsj-rev-stars">
                        {Array.from({ length: 5 }, (_, j) => (
                          <span key={j} className={j < r.rating ? 'fsj-star--on' : 'fsj-star--off'}>★</span>
                        ))}
                      </div>
                      <p className="fsj-rev-text">{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <aside className="fsj-sidebar">

            <a href="tel:+17035651995" className="fsj-advisor-btn">
              <span className="fsj-advisor-btn__icon">📞</span>
              +1-703-565-1995
            </a>

            <div className="fsj-enquiry-card">
              <div className="fsj-enquiry-card__top">
                <p className="fsj-enquiry-card__tag">Top 5 Technologies to learn</p>
                <h3 className="fsj-enquiry-card__title">Register for the Course!</h3>
              </div>
              <form className="fsj-enquiry-form" onSubmit={handleFormSubmit}>
                <div className="fsj-form-field">
                  <input type="text" name="name" placeholder="Full Name *" required
                    value={formData.name} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="email" name="email" placeholder="Email Address *" required
                    value={formData.email} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <input type="tel" name="mobile" placeholder="Mobile Number *" required
                    value={formData.mobile} onChange={handleFormChange} />
                </div>
                <div className="fsj-form-field">
                  <select name="course" value={formData.course} onChange={handleFormChange}>
                    <option>Advanced Generative &amp; Agentic AI</option>
                    <option>Generative AI &amp; Agentic AI with Python</option>
                    <option>MLOps &amp; AIOps</option>
                    <option>Full Stack Data Science &amp; AI</option>
                    <option>Data Science with AI</option>
                    <option>Data Analytics &amp; Business Analytics</option>
                  </select>
                </div>
                <div className="fsj-form-field">
                  <select name="mode" value={formData.mode} onChange={handleFormChange}>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Live Online</option>
                  </select>
                </div>
                <button type="submit" className="fsj-btn fsj-btn--primary fsj-btn--full">
                  {submitted ? '✓ Submitted!' : 'Submit'}
                </button>
                <p className="fsj-form-terms">
                  By submitting you agree to our{' '}
                  <Link to="/terms-conditions">Terms of Use</Link> &amp;{' '}
                  <Link to="/privacy-policy">Privacy Policy</Link>.
                </p>
              </form>
            </div>

          </aside>
        </div>
      </div>

      {/* ── Salary Stats Bar ───────────────────────────────────────────────── */}
      <div className="fsj-salary-bar">
        <div className="fsj-container">
          <div className="fsj-salary-bar__inner">
            <div className="fsj-salary-bar__label">
              Average package of course <strong>(Advanced Generative &amp; Agentic AI)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">8L</span>
                <span className="fsj-salary-stat__lbl">Avg Package</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MNC Logos Carousel ─────────────────────────────────────────────── */}
      <section className="fsj-mnc-section">
        <div className="fsj-container">
          <h2 className="fsj-mnc-title">Our Trainees are Working with</h2>
          <div className="fsj-logo-carousel">
            <button
              className="fsj-logo-arrow fsj-logo-arrow--left"
              aria-label="Previous logos"
              disabled={logoPage === 0}
              onClick={() => setLogoPage(p => Math.max(0, p - 1))}
            >
              &#8592;
            </button>
            <div className="fsj-logo-grid-wrap">
              <div className="fsj-logo-grid" style={{ transform: `translateX(-${logoPage * 100}%)` }}>
                {Array.from({ length: totalLogoPages }, (_, page) => (
                  <div key={page} className="fsj-logo-page">
                    {MNC_LOGOS.slice(page * LOGOS_PER_PAGE, page * LOGOS_PER_PAGE + LOGOS_PER_PAGE).map((src, i) => (
                      <div key={i} className="fsj-logo-card">
                        <img src={src} alt={`Company logo ${page * LOGOS_PER_PAGE + i + 1}`} className="fsj-logo-card__img" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="fsj-logo-arrow fsj-logo-arrow--right"
              aria-label="Next logos"
              disabled={logoPage >= totalLogoPages - 1}
              onClick={() => setLogoPage(p => Math.min(totalLogoPages - 1, p + 1))}
            >
              &#8594;
            </button>
          </div>
        </div>
      </section>

      {/* ── Related Courses ────────────────────────────────────────────────── */}
      <section className="fsj-related-section">
        <div className="fsj-container">
          <h2 className="fsj-related-title">Our Relevant Courses list</h2>
          <div className="fsj-related-grid">
            {RELATED.map((rc, i) => (
              <Link key={i} to={`/courses/${rc.slug}`} className="fsj-related-card">
                <div className="fsj-related-card__icon">{rc.icon}</div>
                <div className="fsj-related-card__title">{rc.title}</div>
                <div className="fsj-related-card__arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
