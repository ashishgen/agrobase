import React from 'react'

export default function Contact(){
  return (
    <div className="card">
      <h1>Contact Us</h1>
      <p className="small">Get in touch for services, partnerships, or general questions.</p>
      <form className="form" onSubmit={(e)=>{e.preventDefault(); alert('Message sent!')}}>
        <input placeholder="Your name" required />
        <input placeholder="Email" type="email" required />
        <textarea placeholder="Message" rows={4} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
