import React from 'react'
import heroImg from '../../assets/cleanning_heroe.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const HeroeHeader = () => {
  return (
    <section className="white min-h-[88vh] flex items-center overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-12 items-center">

          {/* LEFT — Text */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="h-px w-6 bg-[#2D6A4F]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F]">
                Established in Northern Beaches
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-[3.5rem] font-bold text-[#1A1A1A] leading-[1.1] mb-6"
            >
              Experience the power<br />of a{' '}
              <em className="text-[#2D6A4F] not-italic">pristine</em>{' '}
              space
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4B5563] text-base leading-relaxed mb-10 max-w-md"
            >
              We elevate the standard of cleanliness across every environment we support.<br />
              From strata and commercial spaces to specialised services, we deliver consistent, high-quality care.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#40916C] text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get a quote
                  <HiArrowRight size={15} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="inline-flex items-center gap-2 border border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Services
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-xl">
              <img
                src={heroImg}
                alt="Pristine cleaned space"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-[#D8F3DC] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#2D6A4F] text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] text-sm leading-none">500+ Spaces</p>
                <p className="text-[#6B7280] text-xs mt-0.5">Cleaned &amp; restored</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroeHeader
