import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './PolicyPage.css'

const TOC = [
  { id: 'overview',           label: '1. Overview' },
  { id: 'eligibility',        label: '2. Refund Eligibility' },
  { id: 'non-refundable',     label: '3. Non-Refundable Items' },
  { id: 'refund-process',     label: '4. How to Request a Refund' },
  { id: 'processing-time',    label: '5. Processing Time' },
  { id: 'course-transfer',    label: '6. Course Transfer Policy' },
  { id: 'rescheduling',       label: '7. Batch Rescheduling' },
  { id: 'partial-refunds',    label: '8. Partial Refunds' },
  { id: 'special-cases',      label: '9. Special Circumstances' },
  { id: 'contact',            label: '10. Contact for Refunds' },
]

export default function RefundPolicy() {
  return (
    <div className="policy-page">
      <Navbar />

      <section className="policy-hero">
        <div className="policy-hero__inner">
          <nav className="policy-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span><span>Refund Policy</span>
          </nav>
          <span className="policy-hero__icon">💳</span>
          <h1>Refund Policy</h1>
          <p className="policy-hero__sub">
            Our commitment to fair, transparent refund and cancellation terms.
          </p>
          <div className="policy-hero__meta">
            <span className="policy-hero__badge">📅 Last Updated: January 1, 2025</span>
            <span className="policy-hero__badge">✅ 7-Day Refund Window</span>
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
              <strong>Quick summary:</strong> You may request a full refund within 7 days of
              enrollment, provided you have not attended more than one live session or downloaded
              course materials. Refunds are processed within 7–10 business days.
            </p>
          </div>

          <p style={{ fontSize: '.93rem', color: 'var(--txt-muted)', lineHeight: 1.8, margin: '1.5rem 0 2rem' }}>
            This Refund Policy applies to all courses and programmes offered by Pro Training Tech
            Pvt. Ltd. ("Pro Training Tech"). By enrolling in any Pro Training Tech course or programme, you agree to
            the terms set out below. For further clarification, contact our support team at
            support@protrainingtech.com.
          </p>

          {/* 1 */}
          <section id="overview" className="policy-section">
            <div className="policy-section__num">Section 1</div>
            <h2>Overview</h2>
            <p>
              Pro Training Tech is committed to delivering high-quality training and ensuring student
              satisfaction. We understand that circumstances can change, and we aim to handle
              refund requests fairly and promptly. This policy applies to all training modes —
              online, classroom, corporate, and workshop programmes.
            </p>
            <p>
              All fees are quoted and collected in Indian Rupees (INR). GST is charged at the
              applicable rate and is non-refundable once the tax invoice has been issued.
            </p>
          </section>

          {/* 2 */}
          <section id="eligibility" className="policy-section">
            <div className="policy-section__num">Section 2</div>
            <h2>Refund Eligibility</h2>
            <p>
              You are eligible for a <strong>full refund of the course fee</strong> (excluding
              GST and payment gateway charges) if all of the following conditions are met:
            </p>
            <ul>
              <li>Your refund request is submitted within <strong>7 calendar days</strong> of the date of fee payment.</li>
              <li>You have attended <strong>no more than one live session</strong> (online or classroom) from the enrolled batch.</li>
              <li>You have <strong>not downloaded</strong> any study materials, recorded videos, or digital resources from the course portal.</li>
              <li>You have <strong>not received</strong> any personalised one-on-one mentoring sessions from a Pro Training Tech trainer.</li>
            </ul>
            <div className="policy-note--warn policy-note">
              <p>
                <strong>Note:</strong> The 7-day window begins on the date of payment, not the date
                the batch starts. Please verify the batch schedule and confirm your availability
                before completing payment.
              </p>
            </div>
          </section>

          {/* 3 */}
          <section id="non-refundable" className="policy-section">
            <div className="policy-section__num">Section 3</div>
            <h2>Non-Refundable Items</h2>
            <p>The following are not eligible for refund under any circumstances:</p>
            <ul>
              <li><strong>Registration / Enrollment Fee:</strong> A one-time non-refundable enrollment fee of ₹500 (if applicable) charged at the time of registration.</li>
              <li><strong>GST:</strong> Goods and Services Tax paid on the course fee cannot be refunded once the tax invoice has been issued.</li>
              <li><strong>Payment Gateway Charges:</strong> Transaction fees levied by payment processors (typically 1.5%–2%) are non-refundable.</li>
              <li><strong>Study Materials &amp; Books:</strong> Physical study kits, printed notes, or textbooks that have been dispatched cannot be returned or refunded.</li>
              <li><strong>Certification Exam Vouchers:</strong> Third-party exam vouchers (AWS, Microsoft, Oracle, etc.) that have been issued or activated are non-refundable.</li>
              <li><strong>Workshop Fees (after 48 hours):</strong> Workshop bookings cancelled less than 48 hours before the start date are non-refundable.</li>
              <li><strong>Corporate Training Contracts:</strong> Fees under signed corporate agreements are governed by the specific contract terms and are not subject to this general refund policy.</li>
            </ul>
          </section>

          {/* 4 */}
          <section id="refund-process" className="policy-section">
            <div className="policy-section__num">Section 4</div>
            <h2>How to Request a Refund</h2>
            <p>To initiate a refund request, follow these steps:</p>
            <ol>
              <li>Email <strong>refunds@protrainingtech.com</strong> with the subject line: "Refund Request — [Your Full Name] — [Course Name]".</li>
              <li>Include your <strong>enrollment ID or payment receipt number</strong>, the registered mobile number, and a brief reason for the refund.</li>
              <li>Our support team will acknowledge your request via email within <strong>2 business days</strong> and may ask for additional verification.</li>
              <li>Once verified and approved, the refund will be processed to your original payment method.</li>
            </ol>
            <p>
              You can also raise a refund request in person at any Pro Training Tech training centre
              by speaking to the front-desk team. Please carry your payment receipt and a
              government-issued photo ID.
            </p>
          </section>

          {/* 5 */}
          <section id="processing-time" className="policy-section">
            <div className="policy-section__num">Section 5</div>
            <h2>Processing Time</h2>
            <p>
              Once a refund request is approved, the amount is processed within <strong>7–10
              business days</strong>. The time taken for the refund to reflect in your account
              depends on your payment method:
            </p>
            <ul>
              <li><strong>Credit / Debit Card:</strong> 5–7 business days after our processing date, depending on your card issuer's billing cycle.</li>
              <li><strong>UPI / Net Banking:</strong> 3–5 business days after our processing date.</li>
              <li><strong>EMI (No-cost EMI plans):</strong> Refunds on EMI transactions are subject to the terms of your lending institution. Pro Training Tech will issue a reversal; your EMI provider will adjust future instalments accordingly.</li>
              <li><strong>Cash / Cheque Payments:</strong> Refunds are issued by cheque to the registered address and may take up to 15 business days to arrive.</li>
            </ul>
          </section>

          {/* 6 */}
          <section id="course-transfer" className="policy-section">
            <div className="policy-section__num">Section 6</div>
            <h2>Course Transfer Policy</h2>
            <p>
              If you wish to switch to a different course rather than receive a refund, Pro Training Tech
              allows a <strong>one-time course transfer</strong> under the following conditions:
            </p>
            <ul>
              <li>Transfer requests must be submitted within <strong>30 days</strong> of the original enrollment date.</li>
              <li>You must not have attended more than <strong>3 sessions</strong> of the original course.</li>
              <li>If the new course has a higher fee, you will be charged the fee difference. If the new course has a lower fee, no refund is issued for the difference.</li>
              <li>Transfer is allowed to any course running within the <strong>next 90 days</strong> from the transfer request date.</li>
              <li>Course transfers are processed within 3 business days of request approval.</li>
            </ul>
            <p>
              To request a transfer, email <strong>transfers@protrainingtech.com</strong> with your
              enrollment ID, the course you wish to leave, and the course you wish to join.
            </p>
          </section>

          {/* 7 */}
          <section id="rescheduling" className="policy-section">
            <div className="policy-section__num">Section 7</div>
            <h2>Batch Rescheduling</h2>
            <p>
              If your enrolled batch is cancelled or significantly rescheduled (more than 7 days
              from the original start date) by Pro Training Tech, you are entitled to one of the following
              at no additional cost:
            </p>
            <ul>
              <li>Transfer to the next available batch of the same course</li>
              <li>Transfer to a different course of equal or lesser value</li>
              <li>Full refund of the course fee, including the enrollment fee (if applicable)</li>
            </ul>
            <p>
              Pro Training Tech will notify you of any cancellations or significant schedule changes at
              least <strong>48 hours in advance</strong> via email and SMS to your registered
              contact details.
            </p>
          </section>

          {/* 8 */}
          <section id="partial-refunds" className="policy-section">
            <div className="policy-section__num">Section 8</div>
            <h2>Partial Refunds</h2>
            <p>
              Partial refunds are not generally offered. However, Pro Training Tech may consider a
              partial refund at management's discretion in exceptional cases where:
            </p>
            <ul>
              <li>A student has attended several sessions but has a documented medical emergency that prevents continuation of the course.</li>
              <li>A technical failure on Pro Training Tech's platform caused significant disruption to course delivery for an extended period.</li>
              <li>A specific module or component of the course was not delivered as described in the course curriculum.</li>
            </ul>
            <p>
              In such cases, refund amounts will be calculated based on the proportion of
              the course not yet consumed and at management's sole discretion. Please submit
              supporting documentation with your request to support@protrainingtech.com.
            </p>
          </section>

          {/* 9 */}
          <section id="special-cases" className="policy-section">
            <div className="policy-section__num">Section 9</div>
            <h2>Special Circumstances</h2>
            <h3>Visa Denials (for International Students)</h3>
            <p>
              International students who enrolled for classroom training and subsequently received
              a visa denial may request a full refund by submitting a copy of the official visa
              rejection letter within 30 days of enrollment.
            </p>
            <h3>Duplicate Payments</h3>
            <p>
              If you were accidentally charged twice for the same enrollment, the duplicate charge
              will be refunded in full within 5 business days of us confirming the duplicate.
              Contact us immediately at billing@protrainingtech.com with both payment receipts.
            </p>
            <h3>Deceased Student</h3>
            <p>
              In the event of the death of an enrolled student, the full course fee will be
              refunded to the legal next of kin upon submission of a death certificate. Please
              contact us at support@protrainingtech.com.
            </p>
          </section>

          {/* 10 */}
          <section id="contact" className="policy-section">
            <div className="policy-section__num">Section 10</div>
            <h2>Contact for Refund Queries</h2>
            <p>
              For any refund-related questions or to check the status of an existing refund
              request, please reach out to our support team:
            </p>

            <div className="policy-contact-card">
              <div className="policy-contact-card__icon">💳</div>
              <div>
                <h3>Refunds &amp; Billing Support</h3>
                <p>
                  Our team responds to all refund queries within 2 business days.<br />
                  Mon – Sat: 9 AM – 7 PM IST
                </p>
                <div className="policy-contact-card__links">
                  <a href="mailto:refunds@protrainingtech.com">✉️ refunds@protrainingtech.com</a>
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
