import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import Services from "./pages/Services.jsx";
import About from './pages/About';
import Contact from './pages/Contact';
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

const WhatsAppButton = () => (
  <a
    href="https://wa.me/610478024363"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    style={{ position: 'fixed', bottom: '28px', right: '28px', zIndex: 9999 }}
    className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
  >
    <FaWhatsapp size={30} color="white" />
  </a>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <WhatsAppButton />
    </Router>
  );
}

export default App;
