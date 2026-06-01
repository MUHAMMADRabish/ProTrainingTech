import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PolicyPage.css'

const TOC = [
  { id: 'acceptance',       label: '1. Acceptance of Terms' },
  { id: 'services',         label: '2. Description of Services' },
  { id: 'accounts',         label: '3. User Accounts' },
  { id: 'enrollment',       label: '4. Enrollment & Payment' },
  { id: 'course-access',    label: '5. Course Access & Use' },
  { id: 'ip',               label: '6. Intellectual Property' },
  { id: 'conduct',          label: '7. Code of Conduct' },
  { id: 'disclaimers',      label: '8. Disclaimers' },
  { id: 'liability',        label: '9. Limitation of Liability' },
  { id: 'indemnification',  label: '10. Indemnification' },
  { id: 'governing-law',    label: '11. Governing Law' },
  { id: 'changes',          label: '12. Changes to Terms' },
  { id: 'contact',          label: '13. Contact Us' },
]

export default function TermsConditions() {
  return (
    <div className="policy-page">
      <Navbar />

      <section className="policy-hero">
        <div className="policy-hero__inner">
          <nav className="policy-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Terms &amp; Conditions</span>
          </nav>
          <span className="policy-hero__icon">📄</span>
          <h1>Terms &amp; Conditions</h1>
          <p className="policy-hero__sub">
            The rules and guidelines that govern your use of Pro Training Tech's services and platform.
          </p>
          <div className="policy-hero__meta">
            <span className="policy-hero__badge">📅 Last Updated: January 1, 2025</span>
            <span className="policy-hero__badge">⚖️ Governed by Indian Law</span>
          </div>
        </div>
      </section>

      <div className="policy-layout">

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

        <main className="policy-main">

          <div className="policy-note">
            <p>
              <strong>Please read carefully.</strong> These Terms constitute a legally binding
              agreement between you and Pro Training Tech. By using our website or services, you confirm
              that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          <p style={{ fontSize: '.93rem', color: 'var(--txt-muted)', lineHeight: 1.8, margin: '1.5rem 0 2rem' }}>
            These Terms and Conditions ("Terms") govern your access to and use of the website,
            learning management system, and all related services operated by Pro Training Tech
            Pvt. Ltd. ("Pro Training Tech", "Company", "we", "our", or "us"). References to "you" or
            "user" mean any individual or entity accessing our services.
          </p>

          {/* 1 */}
          <section id="acceptance" className="policy-section">
            <div className="policy-section__num">Section 1</div>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using any part of our website at Pro Training Tech.com or any subdomain,
              enrolling in a course, creating an account, or using our mobile application,
              you agree to be bound by these Terms and our <Link to="/privacy-policy" style={{ color: 'var(--navy)', fontWeight: 600 }}>Privacy Policy</Link> and{' '}
              <Link to="/refund-policy" style={{ color: 'var(--navy)', fontWeight: 600 }}>Refund Policy</Link>, which are incorporated herein by reference.
            </p>
            <p>
              If you do not agree to these Terms, you may not access or use our services. These
              Terms apply to all visitors, registered users, enrolled students, and corporate clients.
            </p>
            <p>
              Users must be at least 16 years of age to use our services independently. Users
              between 16 and 18 may use our services with the consent of a parent or legal guardian,
              who agrees to be bound by these Terms on the user's behalf.
            </p>
          </section>

          {/* 2 */}
          <section id="services" className="policy-section">
            <div className="policy-section__num">Section 2</div>
            <h2>Description of Services</h2>
            <p>Pro Training Tech provides the following educational and career services:</p>
            <ul>
              <li><strong>Online Training:</strong> Live instructor-led online classes delivered via video conferencing platforms, with access to recorded sessions through our LMS.</li>
              <li><strong>Classroom Training:</strong> In-person training at our authorised centres in Virginia and other locations.</li>
              <li><strong>Corporate Training:</strong> Customised training programmes delivered to enterprises at their premises or online.</li>
              <li><strong>Workshops:</strong> Short-duration intensive programmes covering specific technologies or skills.</li>
              <li><strong>Placement Services:</strong> Career counselling, resume support, mock interviews, and connections to hiring partner companies for enrolled students.</li>
              <li><strong>Online Resources:</strong> Study materials, practice tests, code repositories, and interview preparation guides available through the student portal.</li>
            </ul>
            <p>
              Pro Training Tech reserves the right to modify, suspend, or discontinue any service,
              feature, or programme at any time with reasonable notice to affected users.
            </p>
          </section>

          {/* 3 */}
          <section id="accounts" className="policy-section">
            <div className="policy-section__num">Section 3</div>
            <h2>User Accounts</h2>
            <p>
              To access course materials and placement services, you must create a user account.
              By creating an account, you agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration and keep it up to date.</li>
              <li>Maintain the confidentiality of your login credentials (username and password) and not share them with any third party.</li>
              <li>Accept responsibility for all activity that occurs under your account, whether authorised by you or not.</li>
              <li>Notify us immediately at security@protrainingtech.com if you suspect any unauthorised use of your account.</li>
            </ul>
            <div className="policy-note--warn policy-note">
              <p>
                <strong>Account sharing is strictly prohibited.</strong> Sharing your login
                credentials with others to allow them to access paid course content is a material
                breach of these Terms and may result in immediate account suspension without refund.
              </p>
            </div>
            <p>
              Pro Training Tech reserves the right to suspend or terminate accounts found to be in violation
              of these Terms, to be providing false information, or to be engaged in fraudulent activity.
            </p>
          </section>

          {/* 4 */}
          <section id="enrollment" className="policy-section">
            <div className="policy-section__num">Section 4</div>
            <h2>Enrollment &amp; Payment</h2>
            <h3>Enrollment</h3>
            <p>
              Enrollment in a course is confirmed only upon receipt of full payment (or approved
              instalment arrangement). A confirmation email with batch details and portal access
              will be sent to your registered email address within 24 hours of payment confirmation.
            </p>
            <h3>Fees &amp; Taxes</h3>
            <p>
              All fees are quoted in Indian Rupees (INR) and are inclusive of applicable Goods and
              Services Tax (GST) unless stated otherwise. A GST-compliant tax invoice will be issued
              within 7 days of payment. Fees are subject to change for future batches; your enrolled
              batch fee is locked at the time of payment.
            </p>
            <h3>Instalment Plans</h3>
            <p>
              Where an instalment plan is agreed, failure to make any instalment payment on the due
              date may result in suspension of course access until the overdue amount is cleared.
              Persistent non-payment may result in enrollment cancellation without refund of amounts
              already paid.
            </p>
            <h3>Promotions &amp; Discounts</h3>
            <p>
              Promotional discounts are time-limited and cannot be combined with other offers unless
              explicitly stated. Discounts cannot be applied retrospectively to completed transactions.
            </p>
          </section>

          {/* 5 */}
          <section id="course-access" className="policy-section">
            <div className="policy-section__num">Section 5</div>
            <h2>Course Access &amp; Use</h2>
            <p>Upon enrollment, you are granted a limited, non-exclusive, non-transferable licence to:</p>
            <ul>
              <li>Access and view course materials through the Pro Training Tech platform for personal, non-commercial educational purposes.</li>
              <li>Download materials explicitly marked as downloadable for offline personal use only.</li>
              <li>Participate in live sessions, submit assignments, and interact with trainers and co-learners through official channels.</li>
            </ul>
            <h3>Recording &amp; Screenshotting</h3>
            <p>
              Recording of live sessions — whether by screen recording software, external cameras,
              or any other means — is strictly prohibited without prior written consent from Pro Training Tech.
              Screenshots of course materials may be taken for personal revision only and may not be
              shared publicly or commercially.
            </p>
            <h3>Course Completion</h3>
            <p>
              Certificates of completion are issued upon achieving the minimum passing score in the
              final assessment (typically 60%) and meeting the minimum attendance requirement
              (typically 75% of live sessions). Pro Training Tech reserves the right to withhold certificates
              pending resolution of any outstanding fee payments.
            </p>
          </section>

          {/* 6 */}
          <section id="ip" className="policy-section">
            <div className="policy-section__num">Section 6</div>
            <h2>Intellectual Property</h2>
            <p>
              All content on the Pro Training Tech website and learning platform — including but not limited
              to course videos, written materials, code examples, assessments, graphics, logos,
              and branding — is the exclusive property of Pro Training Tech or its
              content licensors and is protected by Indian and international copyright, trademark,
              and intellectual property laws.
            </p>
            <p>You may <strong>not</strong>:</p>
            <ul>
              <li>Copy, reproduce, distribute, or create derivative works from Pro Training Tech course content for any purpose, commercial or otherwise, without written permission.</li>
              <li>Upload, post, or share Pro Training Tech course videos or materials on YouTube, Telegram, or any other public platform.</li>
              <li>Use Pro Training Tech's name, logo, or branding in any marketing, social media, or promotional material without written consent.</li>
              <li>Reverse-engineer, decompile, or attempt to extract source code from any Pro Training Tech software or platform.</li>
            </ul>
            <p>
              Violations of intellectual property rights will result in immediate account termination
              and may be subject to civil and criminal action under the Copyright Act, 1957 and the
              Information Technology Act, 2000.
            </p>
          </section>

          {/* 7 */}
          <section id="conduct" className="policy-section">
            <div className="policy-section__num">Section 7</div>
            <h2>Code of Conduct</h2>
            <p>
              Pro Training Tech is committed to maintaining a respectful and inclusive learning environment
              for all students, trainers, and staff. All users of our services agree to:
            </p>
            <ul>
              <li>Treat trainers, fellow students, and staff with respect and courtesy at all times, in both online and in-person settings.</li>
              <li>Not engage in or promote harassment, discrimination, hate speech, or bullying based on religion, caste, gender, nationality, or any other characteristic.</li>
              <li>Not disrupt live sessions through repeated off-topic contributions, spam, or abuse of chat and Q&amp;A features.</li>
              <li>Not share, sell, or distribute Pro Training Tech course access credentials, materials, or recordings with others.</li>
              <li>Not use Pro Training Tech's platform to promote competing businesses, collect student contact information for third-party purposes, or engage in any form of solicitation.</li>
              <li>Comply with all applicable laws, including those relating to data privacy, intellectual property, and online conduct.</li>
            </ul>
            <p>
              Violation of the Code of Conduct may result in warnings, suspension from live sessions,
              or permanent account termination, at Pro Training Tech's sole discretion.
            </p>
          </section>

          {/* 8 */}
          <section id="disclaimers" className="policy-section">
            <div className="policy-section__num">Section 8</div>
            <h2>Disclaimers</h2>
            <h3>No Employment Guarantee</h3>
            <p>
              While Pro Training Tech provides placement assistance and has a strong track record of
              graduate employment, <strong>we do not guarantee job placement</strong> as a
              condition of enrollment. Placement outcomes depend on individual student
              performance, industry conditions, and employer hiring decisions, all of which
              are beyond Pro Training Tech's control.
            </p>
            <h3>Course Content Accuracy</h3>
            <p>
              Course content is developed and reviewed by experienced industry professionals.
              However, the technology industry evolves rapidly, and Pro Training Tech does not warrant
              that all content will be current, error-free, or suitable for every specific
              professional use case. Students are encouraged to supplement their learning
              with current official documentation.
            </p>
            <h3>Service Availability</h3>
            <p>
              Pro Training Tech's online platform is provided on an "as-is" and "as-available" basis.
              We do not guarantee uninterrupted or error-free service and are not liable for
              disruptions caused by third-party infrastructure, internet connectivity issues,
              or circumstances beyond our reasonable control.
            </p>
          </section>

          {/* 9 */}
          <section id="liability" className="policy-section">
            <div className="policy-section__num">Section 9</div>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable Indian law, Pro Training Tech and its
              directors, officers, employees, trainers, and affiliates shall not be liable for:
            </p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</li>
              <li>Loss of profits, data, career opportunities, or business arising in connection with these Terms.</li>
              <li>Damages resulting from unauthorised access to your account due to your failure to maintain credential security.</li>
              <li>Technical failures of third-party platforms (video conferencing, payment gateways, cloud services) used in the delivery of our services.</li>
            </ul>
            <p>
              In all cases, Pro Training Tech's total liability to you for any claim arising from or
              related to our services shall not exceed the total fees paid by you for the
              specific course or programme giving rise to the claim in the 12 months
              preceding the claim.
            </p>
          </section>

          {/* 10 */}
          <section id="indemnification" className="policy-section">
            <div className="policy-section__num">Section 10</div>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Pro Training Tech and its directors,
              officers, employees, trainers, and agents from and against any claims, liabilities,
              damages, losses, costs, or expenses (including reasonable legal fees) arising out of
              or in any way connected with:
            </p>
            <ul>
              <li>Your violation of these Terms or any applicable law or regulation.</li>
              <li>Your infringement of any third-party intellectual property or privacy rights.</li>
              <li>Any content you submit, post, or transmit through our platform.</li>
              <li>Your misuse of our services or platform.</li>
            </ul>
          </section>

          {/* 11 */}
          <section id="governing-law" className="policy-section">
            <div className="policy-section__num">Section 11</div>
            <h2>Governing Law &amp; Dispute Resolution</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India,
              without regard to its conflict-of-law provisions. The courts of <strong>Virginia,
              VA</strong> shall have exclusive jurisdiction to settle any dispute or claim
              arising out of or in connection with these Terms.
            </p>
            <p>
              Before initiating formal legal proceedings, both parties agree to attempt to
              resolve any dispute through good-faith negotiation for a period of 30 days
              following written notice of the dispute. If the dispute cannot be resolved
              by negotiation, either party may refer the matter to arbitration in accordance
              with the Arbitration and Conciliation Act, 1996.
            </p>
          </section>

          {/* 12 */}
          <section id="changes" className="policy-section">
            <div className="policy-section__num">Section 12</div>
            <h2>Changes to Terms</h2>
            <p>
              Pro Training Tech reserves the right to modify these Terms at any time. We will provide
              notice of material changes by:
            </p>
            <ul>
              <li>Updating the "Last Updated" date at the top of this page</li>
              <li>Sending an email notification to all registered users</li>
              <li>Displaying a prominent banner on the website for 30 days after the change</li>
            </ul>
            <p>
              Your continued use of our services after the effective date of any updated Terms
              constitutes your acceptance of the revised Terms. If you disagree with the changes,
              you must stop using our services and may request a refund in accordance with our
              Refund Policy if within the eligible window.
            </p>
          </section>

          {/* 13 */}
          <section id="contact" className="policy-section">
            <div className="policy-section__num">Section 13</div>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, wish to report a violation, or need
              to reach our legal team, please contact us:
            </p>

            <div className="policy-contact-card">
              <div className="policy-contact-card__icon">⚖️</div>
              <div>
                <h3>Legal &amp; Compliance</h3>
                <p>
                  Pro Training Tech<br />
                  1340 Old Chain Bridge Rd, McLean, VA 22101, USA<br />
                  CIN: U72200TG2002PTC038955
                </p>
                <div className="policy-contact-card__links">
                  <a href="mailto:legal@protrainingtech.com">✉️ legal@protrainingtech.com</a>
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
