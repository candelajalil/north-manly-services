import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const services = [
  'Deep Cleaning',
  'Home Cleaning',
  'Strata & Corporate',
  'Supermarket & Retail',
  'Restaurant Services',
  'Recycling Machines',
  'Air BnB Services',
  'Gardening Services',
  'Windows Cleaning',
  'Steam Cleaning',
  'Water Pressure',
]

const LetsConnect = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm('service_wkxhgyn', 'template_xfsdwgh', formRef.current, 'SIJtNs1-X_zHRXt3h')
      .then(() => { setLoading(false); setSent(true) })
      .catch(() => { setLoading(false); setSent(true) })
  }

  return (
    <section className="bg-transparent py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F] mb-10"
        >
          CONNECT
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg">

          {/* LEFT — Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-10 border border-gray-100"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
              Let's connect.
            </h2>
            <p className="text-[#6B7280] text-sm mb-8">
              Request a bespoke quote for your environment.
            </p>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div className="w-16 h-16 bg-[#D8F3DC] rounded-full flex items-center justify-center">
                  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                    <path d="M2 11L10 19L26 2" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-display text-xl font-bold text-[#1A1A1A]">Message sent!</p>
                <p className="text-[#6B7280] text-sm text-center">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                  />
                </div>
                <div className="relative">
                  <select
                    name="service"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] appearance-none focus:outline-none focus:border-[#2D6A4F] transition-colors bg-white"
                  >
                    <option value="" disabled>Select Service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <textarea
                  name="message"
                  placeholder="Your space details..."
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#40916C] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm shadow-sm"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Sending…' : 'Send Inquiry'}
                  {!loading && <HiArrowRight size={15} />}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — Reach Out (green) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#2D6A4F] p-10 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-8">Reach Out</h3>
              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <BiWorld size={18} className="text-white/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">North Manly, NSW 2100</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AiOutlinePhone size={18} className="text-white/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="text-white text-sm font-medium">(+61) 0478 024 363</p>
                    <p className="text-white text-sm font-medium">(+61) 0422 135 989</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AiOutlineMail size={18} className="text-white/60 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium">hello@northmanlycleaners.com.au</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=61478024363"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <BsWhatsapp size={16} className="text-white" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default LetsConnect
