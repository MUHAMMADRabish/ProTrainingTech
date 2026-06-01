import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Code2, GraduationCap, Briefcase, Award, Headphones } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './FullStackJavaDetail.css'

// ─── Data ────────────────────────────────────────────────────────────────────

const CURRICULUM = [
  {
    title: 'Python Fundamentals',
    count: 22,
    topics: [
      'Introduction – What We Will Learn in This Course',
      'Getting Started with Python & Basic Syntax',
      'Variables & Basic Data Types in Python',
      'Operators in Python',
      'Conditional Statements (if, elif, else)',
      'Loops (for, while)',
      'Lists & List Comprehension',
      'Tuples',
      'Dictionaries',
      'Sets',
      'Functions – Getting Started & Lambda',
      'Map & Filter Functions',
      'Importing Modules & Packages',
      'Standard Libraries Overview',
      'File Operations with Python',
      'Working with File Paths',
      'Exception Handling (try, except, else, finally)',
      'Classes & Objects',
      'Single & Multiple Inheritance',
      'Polymorphism',
      'Encapsulation & Abstraction',
      'Advanced OOP Patterns',
    ]
  },
  {
    title: 'NLP & Machine Learning',
    count: 14,
    topics: [
      'Text Pre-processing – Cleaning & Normalisation',
      'Tokenization',
      'Stemming & Lemmatization',
      'Stopwords Removal',
      'Bag of Words',
      'N-Grams',
      'TF-IDF Vectorization',
      'Word2Vec – CBOW & Skip-Grams',
      'GloVe Word Embeddings',
      'Parts of Speech (PoS) Tagging',
      'Named Entity Recognition (NER)',
      'Text Classification Basics',
      'Sentiment Analysis',
      'End-to-End NLP Pipeline',
    ]
  },
  {
    title: 'Deep Learning & Neural Networks',
    count: 14,
    topics: [
      'Introduction to Deep Learning',
      'Understanding Deep Learning Architecture',
      'What is a Neuron',
      'Activation Functions (Step, Linear, Sigmoid, TanH, ReLU)',
      'Forward Pass & Backpropagation',
      'Gradient Descent',
      'ANN Intuition & Hyperparameter Optimisation',
      'Step-by-Step Training with ANN',
      'Optimisers (Adam, SGD, RMSProp)',
      'Loss Functions',
      'Finding Optimal Hidden Layers & Neurons',
      'RNN Forward Propagation with Time',
      'Simple RNN Backward Propagation',
      'End-to-End Deep Learning Project with Simple RNN',
    ]
  },
  {
    title: 'LSTM, GRU & Bidirectional RNN',
    count: 12,
    topics: [
      'Why LSTM – Problems with Simple RNN',
      'LSTM Architecture',
      'Forget Gate in LSTM',
      'Input Gate & Candidate Memory in LSTM',
      'Output Gate in LSTM',
      'Training Process in LSTM',
      'Variants of LSTM',
      'GRU – In-Depth Intuition',
      'LSTM & GRU End-to-End Project',
      'Bidirectional RNN Architecture',
      'Advantages, Disadvantages & Applications',
      'Sequence-to-Sequence Architecture & Problems',
    ]
  },
  {
    title: 'Transformers & Attention Mechanism',
    count: 16,
    topics: [
      'Attention Mechanism Architecture',
      'Seq2Seq Networks with Attention',
      'What & Why Transformers',
      'Encoder Basic Architecture',
      'Self-Attention Layer Working',
      'Multi-Head Attention',
      'Feed-Forward Neural Network with Multi-Head Attention',
      'Positional Encoding',
      'Layer Normalisation',
      'Complete Encoder Transformer Architecture',
      'Decoder – Masked Multi-Head Attention',
      'Encoder-Decoder Multi-Head Attention',
      'Decoder Final Linear & Softmax Layer',
      'Introduction to BERT, RoBERTa, DistilBERT, AlBERT',
      'BERT Fine-Tuning & Pre-Training (Masked LM)',
      'GPT Architecture & Masked Multi-Head Attention',
    ]
  },
  {
    title: 'Generative AI Fundamentals & LLMs',
    count: 10,
    topics: [
      'What is Generative AI – AI vs ML vs DL vs GenAI',
      'How OpenAI ChatGPT & LLaMA LLM Models are Trained',
      'Evolution of LLM Models',
      'All LLM Models Analysis',
      'Data Preprocessing – Cleaning & Embeddings',
      'End-to-End Generative AI Pipeline',
      'Introduction to Large Language Models & Architecture',
      'In-Depth Intuition of Transformer – "Attention is All You Need"',
      'How ChatGPT is Trained',
      'Fine-tuning vs RAG vs Prompt Engineering',
    ]
  },
  {
    title: 'Hugging Face Platform & OpenAI API',
    count: 14,
    topics: [
      'Introduction to Hugging Face',
      'Hugging Face – Transformers, HF Pipeline, Datasets, LLMs',
      'Data Processing, Tokenizing & Feature Extraction',
      'Fine-Tuning Using Pre-Trained Models',
      'Hugging Face API Key Generation',
      'Project: Text Summarisation with Hugging Face',
      'Project: Text-to-Image Generation with Hugging Face',
      'Project: Text-to-Speech Generation with Hugging Face',
      'Introduction to OpenAI & API Key Generation',
      'Chat Completion API & Completion API',
      'Function Calling in OpenAI',
      'Project: Fine-Tuning GPT-3 for Text Classification',
      'Project: Audio Transcript Translation with Whisper',
      'Project: Image Generation with DALL-E',
    ]
  },
  {
    title: 'Vector Databases & LangChain',
    count: 16,
    topics: [
      'Vector Databases – Introduction & How They Work',
      'Vector Index vs Vector Database',
      'Vector Database Practicals',
      'Complete LangChain Ecosystem',
      'Getting Started with LangChain & OpenAI',
      'Prompt Templates in LangChain',
      'Chains in LangChain',
      'LangChain Agents & Tools',
      'Memory in LangChain',
      'Documents Loader in LangChain',
      'Multi-Dataframe Agents in LangChain',
      'Hugging Face Open-Source LLM with LangChain',
      'Text Splitting (Recursive, Character, HTML Header, JSON)',
      'OpenAI, Ollama & Hugging Face Embeddings',
      'Project: Interview Questions Creator Application',
      'Project: Custom Website Chatbot',
    ]
  },
  {
    title: 'Open-Source LLMs & RAG',
    count: 10,
    topics: [
      'Introduction to Open-Source LLMs – LLaMA',
      'Using Open-Source LLMs with LangChain',
      'Custom Website Chatbot with Open-Source LLMs',
      'Open-Source LLMs – Falcon',
      'Introduction & Importance of RAG',
      'RAG Practical Demo',
      'RAG vs Fine-Tuning – When to Use Which',
      'Q&A App with RAG using Gemini Pro & LangChain',
      'LlamaIndex – Introduction & End-to-End Demo',
      'Project: Financial Stock Analysis using LlamaIndex',
    ]
  },
  {
    title: 'Fine-Tuning & Production Deployment',
    count: 8,
    topics: [
      'What is Fine-Tuning?',
      'Parameter Efficient Fine-Tuning (PEFT)',
      'LoRA – Low-Rank Adaptation',
      'QLoRA – Quantized LoRA',
      'Meta LLaMA 2 Fine-Tuning on Custom Data',
      'How to Deploy Generative AI Applications',
      'Deployment with Flask',
      'Deployment on AWS (Cloud Production)',
    ]
  },
]

const BATCHES = [
  { course:'Generative AI & Agentic AI', faculty:'Real-Time Expert', date:'01 Jun', time:'7:00 PM IST', mode:'online',  type:'Online Training', link:'Join' },
]

const FEATURES = [
  { Icon: BookOpen,      color: '#1565c0', bg: '#dbeafe', title: 'Comprehensive Curriculum',      desc: 'End-to-end GenAI — Python, NLP, Deep Learning, Transformers, LLMs, LangChain, RAG, and production deployment.' },
  { Icon: Code2,         color: '#e05c2a', bg: '#ffedd5', title: '15+ Hands-On Projects',         desc: 'Chatbots, text summarisation, image generation (DALL-E), audio transcription, RAG Q&A apps and more.' },
  { Icon: GraduationCap, color: '#16a34a', bg: '#dcfce7', title: 'Expert Instructors',            desc: 'Learn from industry AI engineers with live LLM deployment and production GenAI project experience.' },
  { Icon: Briefcase,     color: '#9333ea', bg: '#f3e8ff', title: 'Job Placement Assistance',      desc: 'Portfolio development, mock interviews, resume prep and employer referrals for AI/ML roles.' },
  { Icon: Award,         color: '#dc2626', bg: '#fee2e2', title: 'Certification upon Completion', desc: 'Industry-recognised certificate validating your Generative AI & Agentic AI expertise with Python.' },
  { Icon: Headphones,    color: '#0891b2', bg: '#cffafe', title: '24/7 Support',                  desc: 'Round-the-clock lab access, expert mentor sessions, and lifetime access to course materials.' },
]

const REVIEWS = [
  { name:'Sanjay Reddy',   course:'Generative AI & Agentic AI', rating:5, initials:'SR', color:'#1565c0', text:'The Generative AI course is outstanding. Starting from Python basics and progressing all the way to LangChain, RAG, and LLaMA fine-tuning is exactly the journey I needed. I transitioned from a backend developer role to an AI engineer position at a tech startup.' },
  { name:'Meena Patel',    course:'Generative AI & Agentic AI', rating:5, initials:'MP', color:'#e05c2a', text:'15+ hands-on projects make this course unmatched. Building custom chatbots, DALL-E image generation apps, and RAG systems with Gemini Pro gave me a portfolio that immediately impressed interviewers. Highly recommend for anyone serious about GenAI.' },
  { name:'Rahul Krishna',  course:'Generative AI & Agentic AI', rating:5, initials:'RK', color:'#2e7d32', text:'Excellent curriculum that truly goes deep — the transformer architecture from scratch, BERT fine-tuning, and LoRA/QLoRA fine-tuning sections are world-class. The Flask + AWS deployment at the end makes the skills immediately production-ready.' },
  { name:'Anitha Sharma',  course:'Generative AI & Agentic AI', rating:4, initials:'AS', color:'#6a1b9a', text:'Very comprehensive programme. The LangChain and LlamaIndex modules are thorough and up-to-date. The vector database and RAG sections directly align with what enterprises are building today. Placement support helped me secure a GenAI developer role quickly.' },
]

const RELATED = [
  { title:'Full Stack Data Science & AI',        slug:'full-stack-data-science-ai-online-training', icon:'📊' },
  { title:'MLOps & AIOps',                       slug:'mlops-and-aiops-online-training',            icon:'⚙️' },
  { title:'Data Science with AI',                slug:'data-science-online-training',               icon:'🤖' },
  { title:'Data Analytics & Business Analytics', slug:'data-analytics-online-training',             icon:'📈' },
  { title:'Full Stack Python',                   slug:'full-stack-python-online-training',          icon:'🐍' },
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
  { id:'overview',          label:'Overview'          },
  { id:'curriculum',        label:'Curriculum'        },
  { id:'certificate',       label:'Certificate'       },
  { id:'upcoming-batches',  label:'Upcoming Batches'  },
  { id:'training-features', label:'Training Features' },
  { id:'reviews',           label:'Reviews'           },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function GenerativeAIDetail() {
  const [activeTab,    setActiveTab]    = useState('overview')
  const [trainingType, setTrainingType] = useState('Online Training')
  const [faculty,      setFaculty]      = useState('Real-Time Expert')
  const [batchDate,    setBatchDate]    = useState('01 Jun - 7:00 PM IST')
  const [openSections, setOpenSections] = useState({ 0: true })
  const [formData,     setFormData]     = useState({ name:'', email:'', mobile:'', course:'Generative AI & Agentic AI with Python', mode:'Online' })
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
            <span>Generative AI &amp; Agentic AI with Python</span>
          </nav>
        </div>
      </div>

      {/* ── Course Header ───────────────────────────────────────────────────── */}
      <section className="fsj-header" ref={headerRef}>
        <div className="fsj-banner">
          <img
            src="https://images.nareshit.com/banner_image_1763118907075.png"
            alt="Generative AI & Agentic AI with Python Online Training at Pro Training Tech"
            className="fsj-banner__img"
            onError={e => {
              e.target.style.display = 'none'
              e.target.parentElement.classList.add('fsj-banner--fallback')
            }}
          />
          <div className="fsj-banner__overlay">
            <div className="fsj-container">
              <h1 className="fsj-banner__title">Generative AI &amp; Agentic AI with Python</h1>
              <p className="fsj-banner__sub">Python · NLP · Deep Learning · Transformers · LLMs · LangChain · RAG · Deployment</p>
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
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Faculty</label>
                  <select className="fsj-select" value={faculty} onChange={e => setFaculty(e.target.value)}>
                    <option>Real-Time Expert</option>
                  </select>
                </div>
                <div className="fsj-select-group">
                  <label className="fsj-select-label">Batch Date</label>
                  <select className="fsj-select" value={batchDate} onChange={e => setBatchDate(e.target.value)}>
                    <option>01 Jun - 7:00 PM IST</option>
                    <option>15 Jun - 7:00 PM IST</option>
                  </select>
                </div>
                <div className="fsj-info-pill">
                  <span className="fsj-info-pill__icon">🕐</span>
                  <span>Dur: <strong>4 months</strong></span>
                </div>
                <div className="fsj-info-pill fsj-info-pill--fee">
                  <span className="fsj-info-pill__icon">₹</span>
                  <span>Fee: <strong>20000 /-</strong></span>
                </div>
              </div>
              <div className="fsj-controls__right">
                <a
                  href="/curriculum/generative-ai-curriculum.pdf"
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
                  This comprehensive Generative AI &amp; Agentic AI course provides a complete journey from
                  foundational Python programming to advanced AI model development and deployment. The
                  programme spans Python fundamentals through transformer architectures, LangChain,
                  Hugging Face, and OpenAI APIs, featuring over 15 practical projects including chatbots,
                  text summarisation, image generation, audio transcription, and custom AI applications.
                </p>

                <h3 className="fsj-sub-title">Course Description</h3>
                <p className="fsj-para">
                  This intensive programme combines theoretical foundations with practical implementation,
                  progressing through NLP and machine learning techniques, deep learning architectures
                  (neural networks, RNNs, LSTMs), and transformer models with self-attention mechanisms.
                  Learners master modern frameworks including Hugging Face, OpenAI API, and LangChain.
                </p>
                <p className="fsj-para">
                  The course covers RAG systems with vector databases, fine-tuning using LoRA/QLoRA,
                  open-source LLMs (LLaMA, Falcon), and production deployment using Flask and AWS —
                  preparing learners for real-world Generative AI engineering roles.
                </p>

                <h3 className="fsj-sub-title">Course Objectives</h3>
                <ul className="fsj-bullet-list">
                  <li>Develop Python proficiency with OOP, file handling, and exception management</li>
                  <li>Implement NLP pipelines including tokenization, stemming, lemmatization, and text vectorization</li>
                  <li>Build and train neural networks, RNNs, LSTMs, and transformer architectures from scratch</li>
                  <li>Master attention mechanisms, self-attention, and multi-head attention in transformers</li>
                  <li>Design and deploy LLMs using Hugging Face transformers and OpenAI APIs</li>
                  <li>Create sophisticated RAG systems with vector databases (Chroma, Pinecone)</li>
                  <li>Develop conversational AI using LangChain with advanced prompt engineering</li>
                  <li>Fine-tune pre-trained models with LoRA/QLoRA for specific domains</li>
                  <li>Build custom chatbots, DALL-E image generators, and Q&A systems</li>
                  <li>Deploy production-ready AI applications on Flask and AWS</li>
                </ul>

                <h3 className="fsj-sub-title">Prerequisites</h3>
                <ul className="fsj-bullet-list">
                  <li>Basic mathematics (algebra, basic statistics, logical reasoning)</li>
                  <li>Computer literacy (file management, software installation)</li>
                  <li>Any programming experience helpful but not required</li>
                  <li>Basic understanding of calculus and linear algebra (recommended)</li>
                  <li>Minimum 8GB RAM computer (Windows, Mac, or Linux)</li>
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
                <div style={{ textAlign:'center', marginTop:'2rem' }}>
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
                  Upon successful completion of the Generative AI &amp; Agentic AI with Python course,
                  you will receive an industry-recognised certificate from Pro Training Tech validating
                  your expertise in LLMs, LangChain, RAG, fine-tuning, and production AI deployment.
                </p>
                <div className="fsj-cert-img-wrap">
                  <img
                    src="https://nareshit.com/wp-content/uploads/2023/01/Naresh-IT-Certificate.png"
                    alt="Generative AI & Agentic AI Certificate"
                    className="fsj-cert-img"
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="fsj-cert-placeholder">
                          <div class="fsj-cert-placeholder__inner">
                            <div class="fsj-cert-placeholder__logo">Pro Training Tech</div>
                            <div class="fsj-cert-placeholder__title">Certificate of Completion</div>
                            <div class="fsj-cert-placeholder__course">Generative AI &amp; Agentic AI with Python</div>
                            <div class="fsj-cert-placeholder__line"></div>
                            <div class="fsj-cert-placeholder__name">Student Name</div>
                          </div>
                        </div>`
                    }}
                  />
                </div>
                <div style={{ textAlign:'center', marginTop:'1.5rem' }}>
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

          {/* Sidebar */}
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
                    <option>Generative AI & Agentic AI with Python</option>
                    <option>MLOps & AIOps</option>
                    <option>Full Stack Data Science & AI</option>
                    <option>Data Science with AI</option>
                    <option>Full Stack Python</option>
                    <option>Data Analytics & Business Analytics</option>
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
              Average package of course <strong>(Generative AI &amp; Agentic AI with Python)</strong>
            </div>
            <div className="fsj-salary-stats">
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">100%</span>
                <span className="fsj-salary-stat__lbl">Avg salary hike</span>
              </div>
              <div className="fsj-salary-divider" />
              <div className="fsj-salary-stat">
                <span className="fsj-salary-stat__val">6L</span>
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
