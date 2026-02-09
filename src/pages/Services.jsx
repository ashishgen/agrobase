import React from 'react'
import agri12 from '../photo/12.jpg'
import agri13 from '../photo/13.jpg'
import agri6 from '../photo/6.jpg'
import agri7 from '../photo/7.jpg'
import agri8 from '../photo/8.jpg'


const services = [
  {
    id: 'soil-testing',
    title: 'Soil Testing & Analysis',
    desc: 'Comprehensive soil reports with nutrient recommendations and fertilizer plans tailored to your land.',
    img: agri12
  },
  {
    id: 'irrigation',
    title: 'Irrigation Design & Setup',
    desc: 'Efficient drip and sprinkler systems that reduce water use while maintaining yields.',
    img: agri13
  },
  {
    id: 'crop-advisory',
    title: 'Crop Advisory & Pest Management',
    desc: 'Seasonal crop planning, integrated pest management and yield optimization from agronomists.',
    img: agri6
  },
  {
    id: 'market-access',
    title: 'Market Access & Pricing',
    desc: 'Connect with buyers, cooperative groups and get realtime pricing guidance for your harvest.',
    img: agri7
  },
  {
    id: 'training',
    title: 'Farmer Training & Workshops',
    desc: 'On-site and online training sessions covering sustainable practices and machinery use.',
    img: agri8
  }
]

export default function Services(){
  return (
    <div>
      <header style={{marginBottom: '1.25rem'}}>
        <h1 className="home-title">Our Services</h1>
        <p className="small">Practical, research-backed services to help you increase productivity and reduce costs.</p>
      </header>

      <section className="grid" style={{gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem', justifyItems:'center'}}>
        {services.map(s => (
          <article key={s.id} className="card" style={{overflow:'hidden'}} aria-labelledby={s.id}>
            <div style={{height:200, overflow:'hidden'}}>
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=`https://picsum.photos/seed/${s.id}/1200/800`}}
                style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
              />
            </div>
            <div style={{padding:'1rem'}}>
              <h3 id={s.id} style={{margin:'0 0 0.5rem'}}>{s.title}</h3>
              <p className="small" style={{margin:0}}>{s.desc}</p>
              <div style={{marginTop:12, display:'flex', gap:8}}>
                <a href={`/services#${s.id}`} style={{color:'var(--accent)', textDecoration:'none'}}>Learn more</a>
                <a href="/contact" style={{color:'#475569', textDecoration:'none'}}>Request quote</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section style={{marginTop: '2rem'}}>
        <div className="card">
          <h2 style={{marginTop:0}}>How it works</h2>
          <ol className="small">
            <li>Request a service or sample collection via the contact form.</li>
            <li>We schedule a visit or arrange sample pickup.</li>
            <li>Receive a detailed report and recommendations within 3–7 business days.</li>
          </ol>
        </div>
      </section>
    </div>
  )
}
