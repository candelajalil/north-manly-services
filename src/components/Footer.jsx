import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/nm_logo.png'
import { BsWhatsapp, BsFacebook } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <img src={logo} alt="NM Services" className="h-9 w-9 object-contain rounded-full" />
              <span className="font-semibold text-[#1A1A1A] text-sm leading-tight">
                North Manly<br />Services
              </span>
            </Link>
            <p className="text-[#6B7280] text-sm leading-relaxed mt-4 max-w-[220px]">
              Elevating environmental standards through meticulous and spatial clarity.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => {
                const to = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`
                return (
                  <li key={item}>
                    <Link to={to} className="text-sm text-[#6B7280] hover:text-[#2D6A4F] transition-colors">
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] mb-5">
              Support
            </p>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="/contact" className="text-sm text-[#6B7280] hover:text-[#2D6A4F] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Hours */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] mb-5">
              Hours
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex justify-between gap-4">
                <span className="text-[#6B7280]">Mon – Fri</span>
                <span className="text-[#1A1A1A] font-medium">8am – 6pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-[#6B7280]">Saturday</span>
                <span className="text-[#1A1A1A] font-medium">9am – 4pm</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-xs">
            © 2024 North Manly Services. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=61478024363"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-[#D8F3DC] rounded-full flex items-center justify-center transition-colors"
            >
              <BsWhatsapp size={14} className="text-[#4B5563]" />
            </a>
            <a
              href="https://www.facebook.com/northmanlycleaners"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 bg-gray-100 hover:bg-[#D8F3DC] rounded-full flex items-center justify-center transition-colors"
            >
              <BsFacebook size={14} className="text-[#4B5563]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
