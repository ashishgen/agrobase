import React, {useState} from 'react'

export default function Signin(){
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  function validateEmail(em){
    return /\S+@\S+\.\S+/.test(em)
  }

  function handleSubmit(e){
    e.preventDefault()
    setError('')
    if(!validateEmail(email)) return setError('Please enter a valid email')
    if(password.length < 6) return setError('Please enter your password')

    // Replace with real sign-in flow
    alert(`Signed in: ${email} (${remember ? 'remembered' : 'no remember'})`)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card" role="region" aria-label="Sign in form">
        <div className="auth-header">
          <div>
            <h1>Welcome back</h1>
            <div className="auth-sub">Sign in to manage your profile and saved resources.</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <input className="auth-input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email" required />
          <input className="auth-input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} aria-label="Password" required />

          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <label style={{display:'flex', gap:8, alignItems:'center'}}>
              <input type="checkbox" checked={remember} onChange={e=>setRemember(e.target.checked)} /> Remember me
            </label>
            <a href="/contact" style={{color:'var(--accent)'}}>Forgot password?</a>
          </div>

          {error && <div className="error" role="alert">{error}</div>}

          <div className="auth-actions">
            <button className="auth-cta" type="submit">Sign in</button>
            <a className="auth-secondary" href="/signup">Create account</a>
          </div>
        </form>
      </div>
    </div>
  )
}
