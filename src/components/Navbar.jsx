import React, { useState, useEffect } from 'react'
import logo from '../assets/nm_logo.png'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F8FAF8] ${
          scrolled ? 'shadow-md py-3' : 'py-4'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 md:px-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img src={logo} alt="NM Services" className="h-9 w-9 object-contain rounded-full" />
              <span className="font-semibold text-[#1A1A1A] text-sm leading-tight hidden sm:block">
                North Manly Services
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`relative pb-1 text-sm font-medium transition-colors duration-200 group ${
                      isActive ? 'text-[#1A1A1A]' : 'text-[#4B5563] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#2D6A4F] rounded-full transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <motion.button
                className="bg-[#2D6A4F] hover:bg-[#40916C] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1A1A1A] p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#F8FAF8] border-t border-gray-100 shadow-lg md:hidden"
          >
            <div className="max-w-[1280px] mx-auto px-8 py-6 flex flex-col gap-5">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.to
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-lg font-semibold transition-colors ${
                        isActive ? 'text-[#2D6A4F]' : 'text-[#1A1A1A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <Link to="/contact">
                <button className="mt-2 w-full bg-[#2D6A4F] hover:bg-[#40916C] text-white font-semibold py-3 rounded-full transition-colors text-sm">
                  Book Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-[64px]" />
    </>
  )
}

export default Navbar
