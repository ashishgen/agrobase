import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="site-header">
      <nav className="nav">
        <div style={{fontWeight:700, color:'var(--accent)'}}>AgriSite</div>
        <div style={{flex:1}} />
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    </header>
  )
}
