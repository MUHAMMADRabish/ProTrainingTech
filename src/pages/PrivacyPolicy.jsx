import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PolicyPage.css'

const TOC = [
  { id: 'information-collect',  label: '1. Information We Collect' },
  { id: 'how-we-use',           label: '2. How We Use Your Information' },
  { id: 'information-sharing',  label: '3. Information Sharing' },
  { id: 'data-security',        label: '4. Data Security' },
  { id: 'cookies',              label: '5. Cookies & Tracking' },
  { id: 'your-rights',          label: '6. Your Rights' },
  { id: 'childrens-privacy',    label: '7. Children\'s Privacy' },
  { id: 'third-party-links',    label: '8. Third-Party Links' },
  { id: 'policy-changes',       label: '9. Changes to This Policy' },
  { id: 'contact',              label: '10. Contact Us' },
]

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <Navbar />

      <section className="policy-hero">
        <div className="policy-hero__inner">
          <nav className="policy-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Privacy Policy</span>
          </nav>
          <span className="policy-hero__icon">🔒</span>
          <h1>Privacy Policy</h1>
          <p className="policy-hero__sub">
            How Pro Training Tech collects, uses, and protects your personal information.
          </p>
          <div className="policy-hero__meta">
            <span className="policy-hero__badge">📅 Last Updated: January 1, 2025</span>
            <span className="policy-hero__badge">🏢 Pro Training Tech, Virginia</span>
          </div>
        </div>
      </section>

      <div className="policy-layout">

        {/* Table of Contents */}
        <aside className="policy-toc" aria-label="Table of contents">
          <div className="policy-toc__title">Contents</div>
          <ul className="policy-toc__list">
            {TOC.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="policy-main">

          <div className="policy-note">
            <p>
              <strong>Summary:</strong> Pro Training Tech respects your privacy. We collect only the information
              needed to provide our training services, never sell your data to third parties, and give
              you control over how your information is used.
            </p>
          </div>

          <p style={{ fontSize: '.93rem', color: 'var(--txt-muted)', lineHeight: 1.8, margin: '1.5rem 0 2rem' }}>
            This Privacy Policy applies to Pro Training Tech ("Pro Training Tech", "we", "our", or "us")
            and describes how we collect, use, disclose, and safeguard your information when you visit
            our website or enroll in our training programmes. Please read this policy carefully. If you
            disagree with its terms, please discontinue use of our site.
          </p>

          {/* 1 */}
          <section id="information-collect" className="policy-section">
            <div className="policy-section__num">Section 1</div>
            <h2>Information We Collect</h2>
            <h3>Personal Information You Provide</h3>
            <p>
              When you register for a course, submit an enquiry, or create an account, we collect
              information you voluntarily provide:
            </p>
            <ul>
              <li>Full name, email address, and phone number</li>
              <li>Date of birth and gender (for placement registration)</li>
              <li>Educational qualifications, college name, and graduation year</li>
              <li>Billing address and payment details (processed securely via third-party gateways)</li>
              <li>Resume, LinkedIn profile, and skills (when registering for placement support)</li>
            </ul>
            <h3>Information We Collect Automatically</h3>
            <p>
              When you visit our website, our servers and analytics tools automatically collect
              certain technical and usage data:
            </p>
            <ul>
              <li>IP address, browser type, operating system, and device identifiers</li>
              <li>Pages visited, time spent on each page, and navigation paths</li>
              <li>Referring URLs and search engine keywords that brought you to our site</li>
              <li>Course videos watched, assignments submitted, and progress within a course</li>
            </ul>
            <h3>Information from Third Parties</h3>
            <p>
              We may receive information about you from third-party sources such as social media
              platforms (if you choose to log in via Google or LinkedIn), job portals, and
              recruitment partners who refer candidates to our placement programme.
            </p>
          </section>

          {/* 2 */}
          <section id="how-we-use" className="policy-section">
            <div className="policy-section__num">Section 2</div>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To process enrolments, provide course access, issue certificates, and support your learning journey.</li>
              <li><strong>Communication:</strong> To send batch schedules, class reminders, assignment feedback, and course updates via email, SMS, or WhatsApp.</li>
              <li><strong>Placement Support:</strong> To share your profile with our hiring partner companies when you opt into the placement programme.</li>
              <li><strong>Marketing:</strong> To send you information about new courses, offers, and events — only where you have given consent. You may opt out at any time.</li>
              <li><strong>Product Improvement:</strong> To analyse usage patterns, identify technical issues, and improve our website, LMS, and course content.</li>
              <li><strong>Legal Compliance:</strong> To meet obligations under applicable Indian law, including GST invoicing, financial record-keeping, and responding to lawful government requests.</li>
            </ul>
            <div className="policy-note">
              <p>
                <strong>We do not use your data for automated decision-making or profiling</strong> that
                produces legal or similarly significant effects without your knowledge.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="information-sharing" className="policy-section">
            <div className="policy-section__num">Section 3</div>
            <h2>Information Sharing</h2>
            <p>
              Pro Training Tech does not sell, rent, or trade your personal information to third parties
              for their marketing purposes. We share data only in the following limited circumstances:
            </p>
            <ul>
              <li><strong>Hiring Partners:</strong> With your explicit consent, your resume and placement profile are shared with partner companies for recruitment purposes.</li>
              <li><strong>Service Providers:</strong> With trusted vendors who process data on our behalf — payment gateways (Razorpay, PayU), email delivery (SendGrid), SMS providers, and cloud hosting. These providers are contractually obligated to keep your data secure and use it only to perform services for us.</li>
              <li><strong>Legal Requirements:</strong> When required to comply with a court order, government request, or applicable law, or to protect the rights, safety, and property of Pro Training Tech, our users, or the public.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of business assets, your information may be transferred as part of that transaction. We will notify you via email or a prominent notice on our website before your information becomes subject to a different privacy policy.</li>
            </ul>
          </section>

          {/* 4 */}
          <section id="data-security" className="policy-section">
            <div className="policy-section__num">Section 4</div>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organisational security measures to protect
              your personal information against unauthorised access, alteration, disclosure, or
              destruction. These measures include:
            </p>
            <ul>
              <li>HTTPS/TLS encryption for all data transmitted between your browser and our servers</li>
              <li>Password hashing using industry-standard algorithms (bcrypt)</li>
              <li>Role-based access controls that restrict staff access to personal data on a need-to-know basis</li>
              <li>Regular security audits and vulnerability assessments of our web infrastructure</li>
              <li>Secure, encrypted backups stored in geographically separate data centres</li>
            </ul>
            <div className="policy-note--warn policy-note">
              <p>
                <strong>Important:</strong> No method of transmission over the internet is 100% secure.
                While we strive to protect your data, we cannot guarantee absolute security. If you
                suspect a breach, please contact us immediately at security@protrainingtech.com.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="cookies" className="policy-section">
            <div className="policy-section__num">Section 5</div>
            <h2>Cookies &amp; Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our
              website. A cookie is a small text file placed on your device by our server.
            </p>
            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function — managing your login session and remembering items in your cart.</li>
              <li><strong>Analytics Cookies:</strong> Provided by Google Analytics to help us understand aggregate usage patterns. Data collected is anonymised.</li>
              <li><strong>Marketing Cookies:</strong> Used by Google Ads and Facebook Pixel to measure ad effectiveness. These may track your activity across other websites.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings such as language, region, and course filters.</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies
              may affect the functionality of our website. To opt out of Google Analytics, install
              the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer" style={{ color: 'var(--navy)', fontWeight: 600 }}>Google Analytics Opt-out Browser Add-on</a>.
            </p>
          </section>

          {/* 6 */}
          <section id="your-rights" className="policy-section">
            <div className="policy-section__num">Section 6</div>
            <h2>Your Rights</h2>
            <p>
              Subject to applicable Indian data protection law, you have the following rights
              regarding your personal information:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> Ask us to correct inaccurate or incomplete information.</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your account and associated personal data, subject to our legal record-keeping obligations.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing communications at any time by clicking "Unsubscribe" in any email or contacting us directly.</li>
              <li><strong>Right to Data Portability:</strong> Request your personal data in a structured, machine-readable format.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at <strong>privacy@protrainingtech.com</strong> with
              the subject line "Privacy Request". We will respond within 30 days.
            </p>
          </section>

          {/* 7 */}
          <section id="childrens-privacy" className="policy-section">
            <div className="policy-section__num">Section 7</div>
            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not
              knowingly collect personal information from children. If you are a parent or
              guardian and believe that your child has provided us with personal information
              without your consent, please contact us at privacy@protrainingtech.com and we will
              promptly delete such information from our records.
            </p>
          </section>

          {/* 8 */}
          <section id="third-party-links" className="policy-section">
            <div className="policy-section__num">Section 8</div>
            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, YouTube videos, and
              external resources that are not operated by Pro Training Tech. Clicking on a third-party
              link will direct you away from our site. We have no control over and assume no
              responsibility for the content, privacy policies, or practices of any third-party
              sites and strongly advise you to review the privacy policy of every site you visit.
            </p>
          </section>

          {/* 9 */}
          <section id="policy-changes" className="policy-section">
            <div className="policy-section__num">Section 9</div>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or applicable law. We will notify you of any material changes by:
            </p>
            <ul>
              <li>Updating the "Last Updated" date at the top of this page</li>
              <li>Sending a notification email to registered users for significant changes</li>
              <li>Displaying a prominent notice on our homepage for 30 days after the change</li>
            </ul>
            <p>
              Your continued use of our services after any changes constitutes your acceptance
              of the revised policy.
            </p>
          </section>

          {/* 10 */}
          <section id="contact" className="policy-section">
            <div className="policy-section__num">Section 10</div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy
              or the way we handle your personal data, please reach out to us:
            </p>

            <div className="policy-contact-card">
              <div className="policy-contact-card__icon">🔒</div>
              <div>
                <h3>Privacy &amp; Data Queries</h3>
                <p>
                  Pro Training Tech<br />
                  1340 Old Chain Bridge Rd, McLean, VA 22101, USA
                </p>
                <div className="policy-contact-card__links">
                  <a href="mailto:privacy@protrainingtech.com">✉️ privacy@protrainingtech.com</a>
                  <a href="tel:+17035651995">📞 +1-703-565-1995</a>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', color: 'rgba(255,255,255,.9)', fontSize: '.82rem', fontWeight: 600, padding: '.32rem .9rem', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
                    📝 Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </div>
  )
}
