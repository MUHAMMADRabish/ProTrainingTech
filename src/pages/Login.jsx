import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [step, setStep]         = useState(1)   // 1=phone, 2=otp, 3=success
  const [phone, setPhone]       = useState('')
  const [otp, setOtp]           = useState(['', '', '', '', '', ''])
  const [timer, setTimer]       = useState(30)
  const [resendActive, setResendActive] = useState(false)
  const [loading, setLoading]   = useState(false)
  const otpRefs                 = useRef([])
  const navigate                = useNavigate()

  /* Countdown timer for OTP step */
  useEffect(() => {
    if (step !== 2) return
    setTimer(30)
    setResendActive(false)
    const id = setInterval(() => {
      setTimer(t => {
        if (t <= 1) { clearInterval(id); setResendActive(true); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [step])

  const sendOtp = e => {
    e.preventDefault()
    if (phone.length !== 10) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setStep(2) }, 800)
  }

  const handleOtpChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]
    next[idx] = val
    setOtp(next)
    if (val && idx < 5) otpRefs.current[idx + 1]?.focus()
  }

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1]?.focus()
    }
  }

  const handleOtpPaste = e => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (!pasted) return
    const next = [...otp]
    pasted.split('').forEach((ch, i) => { next[i] = ch })
    setOtp(next)
    otpRefs.current[Math.min(pasted.length, 5)]?.focus()
    e.preventDefault()
  }

  const verifyOtp = e => {
    e.preventDefault()
    if (otp.join('').length !== 6) return
    setLoading(true)
    setTimeout(() => { setLoading(false); setStep(3) }, 800)
  }

  const resendOtp = () => {
    setOtp(['', '', '', '', '', ''])
    setStep(2)   // triggers the useEffect countdown reset
  }

  const otpFilled = otp.join('').length === 6

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="login-logo">
          <img src="/PT-logo.png" alt="Pro Training Tech" style={{ height: '50px', objectFit: 'contain' }} />
          <div className="login-logo__tag">One Stop Career Solution</div>
        </div>

        {/* ── Step 1: Phone ── */}
        {step === 1 && (
          <form onSubmit={sendOtp}>
            <div className="login-step-badge">📱 Step 1 of 2</div>
            <div className="login-step-title">Enter Your Mobile Number</div>
            <div className="login-step-sub">
              We'll send a 6-digit OTP to verify your number. No passwords needed.
            </div>

            <div className="login-phone-row">
              <span className="login-phone-prefix">🇮🇳 +91</span>
              <input
                className="login-input"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="10-digit mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                autoFocus
                required
              />
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={phone.length !== 10 || loading}
            >
              {loading ? 'Sending OTP…' : 'Send OTP →'}
            </button>

            <div className="login-footer">
              By continuing you agree to our{' '}
              <a href="#">Terms of Service</a> &amp; <a href="#">Privacy Policy</a>.
              <br />
              Already have a demo scheduled?{' '}
              <Link to="/contact">Contact us</Link>
            </div>
          </form>
        )}

        {/* ── Step 2: OTP ── */}
        {step === 2 && (
          <form onSubmit={verifyOtp}>
            <button type="button" className="login-back" onClick={() => setStep(1)}>
              ← Back
            </button>

            <div className="login-step-badge">🔐 Step 2 of 2</div>
            <div className="login-step-title">Enter the OTP</div>
            <div className="login-step-sub">
              A 6-digit code was sent to <strong>+91 {phone}</strong>.
              It expires in 10 minutes.
            </div>

            <div className="otp-grid" onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={el => (otpRefs.current[i] = el)}
                  className={`otp-box${digit ? ' filled' : ''}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={e => handleOtpChange(e.target.value, i)}
                  onKeyDown={e => handleOtpKeyDown(e, i)}
                  autoFocus={i === 0}
                />
              ))}
            </div>

            <div className="otp-resend">
              {resendActive ? (
                <>Didn't receive it?{' '}
                  <button type="button" onClick={resendOtp}>Resend OTP</button>
                </>
              ) : (
                <>Resend OTP in <strong>{timer}s</strong></>
              )}
            </div>

            <button
              type="submit"
              className="login-btn"
              disabled={!otpFilled || loading}
            >
              {loading ? 'Verifying…' : 'Verify & Login →'}
            </button>
          </form>
        )}

        {/* ── Step 3: Success ── */}
        {step === 3 && (
          <div className="login-success">
            <div className="login-success__icon">✓</div>
            <h2>You're logged in!</h2>
            <p>
              Welcome back to Pro Training Tech. Your account is verified and ready.
              Access your courses, track progress, and connect with trainers.
            </p>
            <button className="login-btn" onClick={() => navigate('/')}>
              Go to Home →
            </button>

            <div className="login-footer" style={{ marginTop: '1.2rem' }}>
              <Link to="/courses">Browse Courses</Link>
              {' · '}
              <Link to="/contact">Need Help?</Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
