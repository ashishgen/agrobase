import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>AgriSite</strong>
          <div className="footer-contact">
            <div>Email: hello@agrisite.example</div>
            <div>Phone: +1 (555) 123-4567</div>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Facebook" className="icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 4.99 3.66 9.12 8.44 9.9v-7.01H8.38v-2.9h3.92V9.41c0-3.88 2.31-6.01 5.84-6.01 1.69 0 3.46.3 3.46.3v3.8h-1.95c-1.92 0-2.51 1.19-2.51 2.4v2.16h4.27l-.68 2.9h-3.59v7.01C18.34 21.19 22 17.06 22 12.07z"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.63.28-1.3.48-2 .57.72-.43 1.27-1.12 1.53-1.94-.68.4-1.43.7-2.23.86C18.9 4.5 17.86 4 16.73 4c-1.64 0-2.97 1.34-2.97 2.99 0 .23.03.45.07.67C10.3 7.5 7.11 5.8 5.04 3.01c-.25.44-.4.95-.4 1.5 0 1.04.53 1.96 1.34 2.5-.5-.02-.97-.15-1.38-.38v.03c0 1.45 1.03 2.66 2.4 2.93-.25.07-.51.11-.78.11-.19 0-.37-.02-.55-.05.37 1.16 1.45 2.02 2.72 2.04C7.7 14.6 6.08 15.3 4.32 15.3c-.28 0-.57-.02-.85-.05 1.58 1.01 3.45 1.6 5.45 1.6 6.54 0 10.12-5.42 10.12-10.12v-.46c.7-.5 1.3-1.12 1.78-1.83-.64.28-1.32.46-2.02.54z"/></svg>
          </a>
          <a href="#" aria-label="Instagram" className="icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.3a4.7 4.7 0 100 9.4 4.7 4.7 0 000-9.4zm6.4-.8a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5V24H0zM8 8h4.8v2.16h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-7.13c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.87-2.76 3.79V24H8z"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-1.1-1.6-1.1-2-1.2C16.6 2.5 12 2.5 12 2.5h-.1s-4.6 0-8.6.2c-.4 0-1.3 0-2 1.2-.6.7-.8 2.3-.8 2.3S0 8 0 9.9v2.3C0 14 0.2 15.6.2 15.6s.2 1.6.8 2.3c.8 1.1 1.8 1.1 2.3 1.2 1.7.1 7.5.2 7.5.2s4.6 0 8.6-.2c.4 0 1.3 0 2-1.2.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-2.3c0-2-.2-3.8-.2-3.8zM9.8 15.5V8.5l6.1 3.5-6.1 3.5z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
