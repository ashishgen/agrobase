import React from 'react'
import agri11 from '../photo/11.jpg'

export default function About(){
  const values = [
    {title: 'Farmer First', desc: 'Every decision centered on farmer prosperity and sustainability.'},
    {title: 'Innovation', desc: 'Leveraging research and technology to solve real agricultural challenges.'},
    {title: 'Transparency', desc: 'Open pricing, honest advice, and clear communication always.'},
    {title: 'Community', desc: 'Building networks where farmers learn, share, and grow together.'}
  ]

  const stats = [
    {num: '15K+', label: 'Farmers Served'},
    {num: '5000+', label: 'Acres Supported'},
    {num: '10+', label: 'Services Offered'},
    {num: '95%', label: 'Satisfaction Rate'}
  ]

  return (
    <div>
      {/* Hero Section */}
      <section style={{marginBottom:'2rem', borderRadius:12, overflow:'hidden'}}>
        <div style={{position:'relative', height:300}}>
          <img
            src={agri11}
            alt="farm landscape"
            loading="lazy"
            onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://picsum.photos/seed/about-hero/1400/300'}}
            style={{width:'100%', height:'100%', objectFit:'cover'}}
          />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(135deg, rgba(47,143,63,0.7), rgba(15,23,42,0.5))'}}>
            <div style={{padding:'2rem', height:'100%', display:'flex', flexDirection:'column', justifyContent:'flex-end', color:'white'}}>
              <h1 style={{margin:'0 0 0.5rem', fontSize:'2.5rem'}}>About AgriSite</h1>
              <p style={{margin:0, fontSize:'1.1rem', opacity:0.95}}>Empowering farmers with knowledge, tools, and opportunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'1.5rem', marginBottom:'2rem'}}>
        <div className="card">
          <h2 style={{color:'var(--accent)', marginTop:0}}>Our Mission</h2>
          <p>To connect every farmer with modern resources, expert guidance, and market opportunities — enabling them to increase yields, reduce costs, and build sustainable livelihoods.</p>
        </div>
        <div className="card">
          <h2 style={{color:'var(--accent)', marginTop:0}}>Our Vision</h2>
          <p>A thriving agricultural ecosystem where technology, tradition, and community drive innovation and prosperity across farming regions.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'white', padding:'1.5rem', borderRadius:12, marginBottom:'2rem', boxShadow:'0 2px 8px rgba(0,0,0,0.06)'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))', gap:'1.5rem', textAlign:'center'}}>
          {stats.map((stat,idx) => (
            <div key={idx}>
              <div style={{fontSize:'2rem', fontWeight:700, color:'var(--accent)', marginBottom:8}}>{stat.num}</div>
              <div style={{fontSize:'0.95rem', color:'var(--muted)'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section style={{marginBottom:'2rem'}}>
        <h2 style={{marginBottom:'1.25rem'}}>Our Core Values</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'1.25rem'}}>
          {values.map((val,idx) => (
            <div key={idx} className="card">
              <h3 style={{margin:'0 0 0.5rem', color:'var(--accent)'}}>{val.title}</h3>
              <p className="small" style={{margin:0}}>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="card" style={{textAlign:'center', background:'linear-gradient(135deg, rgba(47,143,63,0.05), rgba(107,178,128,0.05))'}}>
        <h2 style={{marginTop:0}}>Ready to grow with us?</h2>
        <p className="small">Join thousands of farmers who are already benefiting from AgriSite services and community.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', marginTop:'1rem'}}>
          <a href="/services" style={{padding:'0.75rem 1.5rem', background:'var(--accent)', color:'white', borderRadius:8, textDecoration:'none', fontWeight:'500'}}>Explore Services</a>
          <a href="/contact" style={{padding:'0.75rem 1.5rem', border:'1px solid #e6e6e6', borderRadius:8, textDecoration:'none', color:'var(--accent)'}}>Get in touch</a>
        </div>
      </section>
    </div>
  )
}
