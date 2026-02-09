import React, {useState, useEffect} from 'react'
import agri1 from '../photo/1.jpg'
import agri2 from '../photo/2.jpg'
import agri3 from '../photo/3.jpg'
import agri4 from '../photo/4.jpg'
import agri5 from '../photo/5.jpg'
import agri6 from '../photo/6.jpg'
import agri7 from '../photo/7.jpg'
import agri8 from '../photo/8.jpg'
import agri9 from '../photo/9.jpg'
import agri10 from '../photo/10.jpg'


const IMAGES_COUNT = 10

const titles = [
  'Fertile Fields',
  'Green Pastures',
  'Harvest Season',
  'Farm Life',
  'Crop Growth',
  'Rural Beauty',
  'Agricultural Land',
  'Farming Heritage',
  'Land Cultivation',
  "Nature's Bounty"
]

// Use seeded picsum.photos images for reliable, unique images and descriptive titles (no numbers)
const images = import.meta.glob('../photo/*.jpg', { eager: true });
const imagePaths = Object.values(images).map((img) => img.default);
const items = Array.from({length: IMAGES_COUNT}).map((_, i) => {
  const id = i + 1
  return {
    id,
    title: titles[i % titles.length],
    desc: 'Premium agriculture and farming photography.',
    img: imagePaths[i % imagePaths.length]
  }
})

const heroSlides = [
  {
    id: 1,
    title: 'Lush Green Fields',
    desc: 'Expansive crop fields ready for harvest.',
    img: agri1
  },
  {
    id: 2,
    title: 'Rice Terraces',
    desc: 'Stepped rice terraces fed by mountain streams.',
    img: agri2
  },
  {
    id: 3,
    title: 'Orchard & Harvest',
    desc: 'Fruit orchards and seasonal harvest activity.',
    img: agri3
  }
  ,
  {
    id: 4,
    title: 'Crop Rotation',
    desc: 'Sustainable crop rotation patterns protecting soil health.',
    img: agri4
  },
  {
    id: 5,
    title: 'Organic Farming',
    desc: 'Organic methods promoting biodiversity and natural growth.',
    img: agri5
  },
  {
    id: 6,
    title: 'Irrigation Systems',
    desc: 'Modern irrigation ensuring efficient water use.',
    img: agri6
  },
  {
    id: 7,
    title: 'Tractor Work',
    desc: 'Mechanized tasks speeding up field preparation.',
    img: agri7
  },
  {
    id: 8,
    title: 'Harvest Time',
    desc: 'Harvesting season bringing crops to market.',
    img: agri8
  },
  {
    id: 9,
    title: 'Seedlings',
    desc: 'Young seedlings prepared for transplanting.',
    img: agri9
  },
  {
    id: 10,
    title: 'Farm Market',
    desc: 'Local farm markets connecting growers and buyers.',
    img: agri10
  }
]

export default function Home(){
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex(s => (s + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{marginTop: '-2rem'}}>
      <div className="hero-slider" aria-hidden={false}>
        <div className="hero-top-title">
          <h1 className="home-title">Welcome to AgriSite</h1>
          <p className="small">A large gallery of farming images with brief descriptions.</p>
        </div>
        {heroSlides.map((s, idx) => (
          <div
            key={s.id}
            className={`slide ${idx === slideIndex ? 'active' : ''}`}
            style={{backgroundImage: `url(${s.img})`}}
            role="img"
            aria-label={s.title}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h2 className="slide-title">{s.title}</h2>
                <p className="slide-desc">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="card" style={{marginBottom:12}}>
        <h1 className="home-title">Welcome to AgriSite</h1>
        <p className="small">A large gallery of farming images with brief descriptions.</p>
      </section>

      <div className="home-gallery">
        {items.map(item => (
          <article className="card" key={item.id}>
            <img src={item.img} alt={item.title} loading="lazy" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'}} />
            <div>
              <h3>{item.title}</h3>
              <p className="small">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
