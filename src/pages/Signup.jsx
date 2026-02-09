import React, {useState} from 'react'

export default function Signup(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')

  function validateEmail(em){
    return /\S+@\S+\.\S+/.test(em)
  }

  function passwordStrength(p){
    if(p.length > 10 && /[A-Z]/.test(p) && /[0-9]/.test(p)) return 100
    if(p.length >= 8) return 65
    if(p.length >= 5) return 35
    return 10
  }

  function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(!name.trim()) return setError('Please enter your full name')
    if(!validateEmail(email)) return setError('Please enter a valid email')
    if(password.length < 8) return setError('Password must be at least 8 characters')
    if(password !== confirm) return setError('Passwords do not match')

    // Replace with real signup flow
    alert(`Account created for ${name} (${email})`)
    setName('')
    setEmail('')
    setPassword('')
    setConfirm('')
  }

  const strength = passwordStrength(password)

  return (
    <div className="auth-wrapper">
      <div className="auth-card" role="region" aria-label="Sign up form">
        <div className="auth-header">
          <div>
            <h1>Create account</h1>
            <div className="auth-sub">Create an account to access farmer resources and services.</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <input className="auth-input" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} aria-label="Full name" required />
          <input className="auth-input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email" required />
          <input className="auth-input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} aria-label="Password" required />

          <div className="password-strength" aria-hidden>
            <i style={{width: `${strength}%`}} />
          </div>

          <input className="auth-input" placeholder="Confirm password" type="password" value={confirm} onChange={e=>setConfirm(e.target.value)} aria-label="Confirm password" required />

          {error && <div className="error" role="alert">{error}</div>}

          <div className="auth-actions">
            <button className="auth-cta" type="submit">Create account</button>
            <button type="button" className="auth-secondary" onClick={()=>{setName(''); setEmail(''); setPassword(''); setConfirm(''); setError('')}}>Reset</button>
          </div>
        </form>

        <div className="auth-foot">Already have an account? <a href="/signin">Sign in</a></div>
      </div>
    </div>
  )
}
