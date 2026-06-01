import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Contact.css'

const COURSES = [
  'Java Full Stack', 'Python Full Stack', '.NET Full Stack', 'MERN Stack',
  'DevOps & AWS', 'DevOps with Azure', 'Data Science & ML',
  'Artificial Intelligence', 'Power BI & Tableau', 'AWS Cloud',
  'Microsoft Azure', 'Google Cloud Platform', 'Software Testing (Manual)',
  'Selenium with Java', 'API Testing', 'Salesforce', 'Other',
]

const OFFICES = [
  {
    city: 'McLean — HQ',
    country: 'USA',
    flag: '🇺🇸',
    address: '1340 Old Chain Bridge Rd,\nMcLean, VA 22101, USA',
    phone: '+1-703-565-1995',
    mobile: '+1-703-565-1995',
    email: 'info@protrainingtech.com',
    hours: 'Mon – Sat: 9 AM – 7 PM',
    color: '#1e3a5f',
    badge: 'Head Office',
  },
  {
    city: 'Kukatpally',
    country: 'India',
    flag: '🇮🇳',
    address: '2nd Floor, KPHB Colony,\nKukatpally, Hyderabad – 500072',
    phone: '+91 8179191999',
    mobile: '+91 8179191999',
    email: 'kukatpally@protrainingtech.com',
    hours: 'Mon – Sat: 9 AM – 7 PM',
    color: '#e05c2a',
    badge: 'Branch',
  },
  {
    city: 'Dilsukhnagar',
    country: 'India',
    flag: '🇮🇳',
    address: '1st Floor, SVR Complex,\nDilsukhnagar, Hyderabad – 500060',
    phone: '+91 8179191999',
    mobile: '+91 8179191999',
    email: 'dilsukh@protrainingtech.com',
    hours: 'Mon – Sat: 9 AM – 7 PM',
    color: '#1e3a5f',
    badge: 'Branch',
  },
  {
    city: 'New Jersey',
    country: 'USA',
    flag: '🇺🇸',
    address: '101 Wood Avenue South, Suite 201,\nIselin, NJ 08830, United States',
    phone: '+1 (732) 947-4788',
    mobile: '+1 (732) 947-4799',
    email: 'usa@protrainingtech.com',
    hours: 'Mon – Fri: 9 AM – 6 PM EST',
    color: '#e05c2a',
    badge: 'USA Office',
  },
]

const SOCIALS = [
  {
    name: 'YouTube',
    handle: '@Pro Training Tech Official',
    icon: '▶',
    desc: '500K+ subscribers · Free tutorials',
    color: '#FF0000',
    href: 'https://protrainingtech.com',
  },
  {
    name: 'LinkedIn',
    handle: 'Pro Training Tech',
    icon: 'in',
    desc: 'Job updates & industry news',
    color: '#0A66C2',
    href: 'https://protrainingtech.com',
  },
  {
    name: 'Facebook',
    handle: 'Pro Training Tech',
    icon: 'f',
    desc: 'Community & course updates',
    color: '#1877F2',
    href: 'https://protrainingtech.com',
  },
  {
    name: 'Instagram',
    handle: '@Pro Training Tech_official',
    icon: '◈',
    desc: 'Student stories & campus life',
    color: '#E1306C',
    href: 'https://protrainingtech.com',
  },
  {
    name: 'Twitter / X',
    handle: '@Pro Training Tech',
    icon: '✕',
    desc: 'Tech news & quick tips',
    color: '#000000',
    href: 'https://protrainingtech.com',
  },
  {
    name: 'WhatsApp',
    handle: '+1-703-565-1995',
    icon: '💬',
    desc: 'Chat with a counsellor',
    color: '#25D366',
    href: 'https://protrainingtech.com',
  },
]

const FAQS = [
  {
    q: 'How soon will I get a response after submitting the form?',
    a: 'Our counselling team responds within 2–4 working hours on weekdays, and by the next morning for weekend submissions.',
  },
  {
    q: 'Can I request a free demo class before enrolling?',
    a: 'Absolutely. Every student is entitled to a free demo session. Mention it in your message or call us directly to schedule one.',
  },
  {
    q: 'Do you offer online training for international students?',
    a: 'Yes. Our live online batches are open globally. Students from the USA, UK, Australia, and the Middle East regularly attend our sessions.',
  },
  {
    q: 'Is placement support available for online students?',
    a: 'Yes — placement support, mock interviews, and resume reviews are provided to all students regardless of their training mode.',
  },
]

export default function Contact() {
  const [form,      setForm]      = useState({ name: '', email: '', mobile: '', course: '', message: '' })
  const [errors,    setErrors]    = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)
  const [openFaq,   setOpenFaq]   = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim())                       e.name    = 'Full name is required.'
    if (!form.email.trim())                      e.email   = 'Email address is required.'
    else if (!/\S+@\S+\.\S+/.test(form.email))  e.email   = 'Enter a valid email address.'
    if (!form.mobile.trim())                     e.mobile  = 'Mobile number is required.'
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.mobile)) e.mobile = 'Enter a valid mobile number.'
    if (!form.course)                            e.course  = 'Please select a course.'
    if (!form.message.trim())                    e.message = 'Please write a brief message.'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setForm({ name: '', email: '', mobile: '', course: '', message: '' })
    }, 1200)
  }

  const resetForm = () => setSubmitted(false)

  return (
    <div className="contact-page">

      <Navbar />

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <span className="contact-hero__tag">Get In Touch</span>
          <h1 className="contact-hero__heading">
            We're Here to <em>Help You</em><br />Start Your Journey
          </h1>
          <p className="contact-hero__sub">
            Have questions about a course, batch timings, or fees? Our expert counsellors
            are ready to guide you — reach out through any channel below.
          </p>

          {/* Quick contact pills */}
          <div className="contact-hero__pills">
            <a href="tel:+17035651995" className="contact-pill">
              <span>📞</span> +1-703-565-1995
            </a>
            <a href="mailto:info@protrainingtech.com" className="contact-pill">
              <span>✉️</span> info@protrainingtech.com
            </a>
            <span className="contact-pill contact-pill--plain">
              <span>🕐</span> Mon–Sat, 9 AM–7 PM
            </span>
          </div>
        </div>

        <span className="contact-hero__orb contact-hero__orb--1" />
        <span className="contact-hero__orb contact-hero__orb--2" />

        <div className="contact-hero__wave">
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill="#f5f7fa" />
          </svg>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section className="form-map-section">
        <div className="form-map-section__inner">

          {/* ── CONTACT FORM ── */}
          <div className="cform-wrap">
            <div className="cform-header">
              <h2 className="cform-header__title">Send Us a Message</h2>
              <p className="cform-header__sub">
                Fill in your details and a counsellor will reach out within 4 hours.
              </p>
            </div>

            {submitted ? (
              <div className="cform-success">
                <div className="cform-success__check">✓</div>
                <h3>Enquiry Received!</h3>
                <p>
                  Thank you, <strong>{form.name || 'there'}</strong>. Our team will contact
                  you within 4 working hours on the details you provided.
                </p>
                <button className="btn btn-primary" onClick={resetForm}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="cform" onSubmit={handleSubmit} noValidate>

                <div className="cform__row">
                  <div className={`cform__field${errors.name ? ' cform__field--err' : ''}`}>
                    <label htmlFor="cf-name">Full Name <span>*</span></label>
                    <input
                      id="cf-name" name="name" type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={form.name} onChange={handleChange}
                    />
                    {errors.name && <span className="cform__err-msg">{errors.name}</span>}
                  </div>

                  <div className={`cform__field${errors.email ? ' cform__field--err' : ''}`}>
                    <label htmlFor="cf-email">Email Address <span>*</span></label>
                    <input
                      id="cf-email" name="email" type="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={form.email} onChange={handleChange}
                    />
                    {errors.email && <span className="cform__err-msg">{errors.email}</span>}
                  </div>
                </div>

                <div className="cform__row">
                  <div className={`cform__field${errors.mobile ? ' cform__field--err' : ''}`}>
                    <label htmlFor="cf-mobile">Mobile Number <span>*</span></label>
                    <input
                      id="cf-mobile" name="mobile" type="tel"
                      placeholder="e.g. +1-703-565-1995"
                      value={form.mobile} onChange={handleChange}
                    />
                    {errors.mobile && <span className="cform__err-msg">{errors.mobile}</span>}
                  </div>

                  <div className={`cform__field${errors.course ? ' cform__field--err' : ''}`}>
                    <label htmlFor="cf-course">Interested Course <span>*</span></label>
                    <select
                      id="cf-course" name="course"
                      value={form.course} onChange={handleChange}
                    >
                      <option value="">Select a course…</option>
                      {COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.course && <span className="cform__err-msg">{errors.course}</span>}
                  </div>
                </div>

                <div className={`cform__field${errors.message ? ' cform__field--err' : ''}`}>
                  <label htmlFor="cf-message">Your Message <span>*</span></label>
                  <textarea
                    id="cf-message" name="message" rows={5}
                    placeholder="Tell us about your background, preferred batch timings, or any questions you have…"
                    value={form.message} onChange={handleChange}
                  />
                  {errors.message && <span className="cform__err-msg">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-full cform__submit${sending ? ' cform__submit--sending' : ''}`}
                  disabled={sending}
                >
                  {sending ? (
                    <><span className="cform__spinner" /> Sending…</>
                  ) : (
                    <>Send Enquiry &rarr;</>
                  )}
                </button>

                <p className="cform__note">
                  🔒 Your information is 100% confidential and never shared with third parties.
                </p>
              </form>
            )}
          </div>

          {/* ── MAP ── */}
          <div className="map-wrap">
            <div className="map-wrap__header">
              <h2 className="map-wrap__title">Find Us in McLean</h2>
              <p className="map-wrap__sub">Pro Training Tech Head Office — Virginia, VA</p>
            </div>
            <div className="map-wrap__frame">
              <iframe
                title="Pro Training Tech McLean Virginia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3307024173765!2d78.44399317521546!3d17.437893583456643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c3b13b62c5%3A0x5f4e5e4b7e8c2a3d!2sMcLean%2C%20Virginia%2C%20VA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-wrap__address">
              <span className="map-wrap__address-icon">📍</span>
              <div>
                <div className="map-wrap__address-line">1340 Old Chain Bridge Rd</div>
                <div className="map-wrap__address-line">McLean, VA 22101, USA</div>
              </div>
              <a
                href="https://maps.google.com/?q=McLean,Virginia"
                target="_blank"
                rel="noreferrer"
                className="map-wrap__directions"
              >
                Get Directions ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── OFFICE LOCATIONS ── */}
      <section className="offices-section">
        <div className="offices-section__inner">
          <div className="sec-head">
            <span className="sec-tag">Our Locations</span>
            <h2>Offices &amp; <mark>Training Centres</mark></h2>
            <p>Visit us at any of our centres — or connect with our global team online.</p>
          </div>

          <div className="offices-grid">
            {OFFICES.map((o) => (
              <div key={o.city} className="office-card">
                <div className="office-card__top" style={{ background: o.color }}>
                  <span className="office-card__flag">{o.flag}</span>
                  <div>
                    <h3 className="office-card__city">{o.city}</h3>
                    <span className="office-card__badge">{o.badge}</span>
                  </div>
                </div>
                <div className="office-card__body">
                  <ul className="office-card__list">
                    <li>
                      <span className="office-card__icon">📍</span>
                      <span>{o.address.split('\n').map((l, i) => (
                        <span key={i}>{l}{i === 0 && <br />}</span>
                      ))}</span>
                    </li>
                    <li>
                      <span className="office-card__icon">📞</span>
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`}>{o.phone}</a>
                    </li>
                    <li>
                      <span className="office-card__icon">📱</span>
                      <a href={`tel:${o.mobile.replace(/\s/g, '')}`}>{o.mobile}</a>
                    </li>
                    <li>
                      <span className="office-card__icon">✉️</span>
                      <a href={`mailto:${o.email}`}>{o.email}</a>
                    </li>
                    <li>
                      <span className="office-card__icon">🕐</span>
                      <span>{o.hours}</span>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ── */}
      <section className="social-section">
        <div className="social-section__inner">
          <div className="sec-head sec-head--light">
            <span className="sec-tag sec-tag--light">Stay Connected</span>
            <h2>Follow Us on <mark>Social Media</mark></h2>
            <p>Join our growing community for free tutorials, career tips, and student success stories.</p>
          </div>

          <div className="socials-grid">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="social-card"
                style={{ '--sc-color': s.color }}
                aria-label={`Follow Pro Training Tech on ${s.name}`}
              >
                <div className="social-card__icon" style={{ background: s.color }}>
                  {s.icon}
                </div>
                <div className="social-card__body">
                  <span className="social-card__name">{s.name}</span>
                  <span className="social-card__handle">{s.handle}</span>
                  <span className="social-card__desc">{s.desc}</span>
                </div>
                <span className="social-card__arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="faq-section__inner">
          <div className="sec-head">
            <span className="sec-tag">Common Questions</span>
            <h2>Frequently <mark>Asked Questions</mark></h2>
          </div>
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-item__q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__chevron">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <p className="faq-item__a">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="https://protrainingtech.com/wp-content/uploads/2022/12/cropped-Pro-Training-Techs-Logo-2.png" alt="Pro Training Tech" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <p className="footer__tagline">
              One Stop Career Solution
            </p>
            <div className="footer__socials">
              {[['f', 'Facebook'], ['in', 'LinkedIn'], ['◈', 'Instagram'], ['▶', 'YouTube'], ['♪', 'TikTok']].map(([icon, label]) => (
                <a key={label} href="https://protrainingtech.com" className="footer__social" aria-label={label} target="_blank" rel="noreferrer">{icon}</a>
              ))}
            </div>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[['/', 'Home'], ['/courses', 'Courses'], ['/about', 'About Us'],
                ['/contact', 'Contact'], ['/blog', 'Blog']].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4>Popular Courses</h4>
            <ul>
              {['Java Full Stack', 'Python Full Stack', 'DevOps & AWS',
                'Data Science & ML', 'Software Testing', 'Salesforce'].map((c) => (
                <li key={c}><Link to="/courses">{c}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer__col footer__col--contact">
            <h4>Contact Us</h4>
            <ul>
              <li><span>📍</span><span>1340 Old Chain Bridge Rd, McLean, VA 22101</span></li>
              <li><span>📞</span><span>+1-703-565-1995</span></li>
              <li><span>✉️</span><span>info@protrainingtech.com</span></li>
              <li><span>🕐</span><span>Mon – Sat: 9 AM – 7 PM</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <span>© 2025 Pro Training Tech. All rights reserved.</span>
            <div className="footer__legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
