import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { FiFacebook } from 'react-icons/fi'

/* ─── Contact Details + Form ─────────────────────────────── */
const ContactSection = () => {
  const formRef = useRef()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sectionRef, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm('service_wkxhgyn', 'template_xfsdwgh', formRef.current, 'SIJtNs1-X_zHRXt3h')
      .then(() => { setLoading(false); setSent(true) })
      .catch(() => { setLoading(false); setSent(true) })
  }

  return (
    <section className="bg-transparent py-12 md:py-16" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 items-start"
        >
          {/* ── Left: Contact Details (green card) ── */}
          <div className="bg-[#2D6A4F] rounded-2xl px-8 py-10 flex flex-col justify-between min-h-[480px]">
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-8">
                Contact Details
              </h2>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <HiOutlineLocationMarker size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Our Location</p>
                    <p className="text-white text-sm">North Manly, NSW 2100</p>
                    <p className="text-white text-sm">Sydney, Australia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HiOutlinePhone size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Phone Number</p>
                    <a href="tel:+610478024363" className="text-white text-sm hover:text-white/80 transition-colors">
                      +61 0478 024 363
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HiOutlineMail size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Email Address</p>
                    <a href="mailto:hello@northmanlycleaners.com.au" className="text-white text-sm hover:text-white/80 transition-colors">
                      hello@northmanlycleaners.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <HiOutlineClock size={20} className="text-white mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-0.5">Business Hours</p>
                    <p className="text-white text-sm">Mon – Fri: 8am – 6pm</p>
                    <p className="text-white text-sm">Sat: 9am – 4pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-10">
              <a
                href="https://api.whatsapp.com/send?phone=61478024363"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <FaWhatsapp size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/northmanlycleaners"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
              >
                <FiFacebook size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="bg-white rounded-2xl px-10 py-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center"
              >
                <div className="w-16 h-16 bg-[#EBF5F0] rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8 text-[#2D6A4F]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#1A1A1A]">Message Sent!</h3>
                <p className="text-[#6B7280] text-sm max-w-xs">
                  Thank you for reaching out. Our team will be in touch with you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-[#1A1A1A] mb-8">
                  Send a Message
                </h2>
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_name" className="text-xs font-semibold text-[#1A1A1A]">Full Name</label>
                      <input
                        id="user_name" name="user_name" type="text" required placeholder="John Doe"
                        className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_email" className="text-xs font-semibold text-[#1A1A1A]">Email Address</label>
                      <input
                        id="user_email" name="user_email" type="email" required placeholder="john@example.com"
                        className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="user_phone" className="text-xs font-semibold text-[#1A1A1A]">Phone Number</label>
                      <input
                        id="user_phone" name="user_phone" type="tel" placeholder="+61 400 000 000"
                        className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="service" className="text-xs font-semibold text-[#1A1A1A]">Service Type</label>
                      <select
                        id="service" name="service"
                        className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-[#2D6A4F] transition-colors"
                      >
                        <option value="">General House Cleaning</option>
                        <option>Supermarket Services</option>
                        <option>Restaurant Services</option>
                        <option>Recycling Machines Services</option>
                        <option>Domestics Services</option>
                        <option>Air BnB Services</option>
                        <option>Gardening Services</option>
                        <option>Windows Cleaning Services</option>
                        <option>Steam Cleaning Services</option>
                        <option>Water Pressure Services</option>
                        <option>Strata Cleaning Services</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-[#1A1A1A]">Message</label>
                    <textarea
                      id="message" name="message" rows={5} required
                      placeholder="Tell us about your space and requirements..."
                      className="border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2D6A4F] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2D6A4F] hover:bg-[#40916C] disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl text-sm transition-all"
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </motion.button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Map Section ────────────────────────────────────────── */
const MapSection = () => (
  <section className="bg-transparent pb-16">
    <div className="max-w-[1280px] mx-auto px-8 md:px-16">
      <div className="rounded-2xl overflow-hidden relative h-[340px]">
        <iframe
          title="North Manly Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.5!2d151.2876!3d-33.7676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12abc9e3b3b3b3%3A0x1234567890abcdef!2sNorth+Manly+NSW+2100!5e0!3m2!1sen!2sau!4v1680000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.3)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Overlay badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-md">
            <div className="w-5 h-5 bg-[#2D6A4F] rounded-full flex items-center justify-center">
              <HiOutlineLocationMarker size={12} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-[#1A1A1A]">Find us in North Manly</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

/* ─── Root export ────────────────────────────────────────── */
const ContactForm = () => (
  <>
    <ContactSection />
    <MapSection />
  </>
)

export default ContactForm
