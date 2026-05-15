import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'
import aboutImg from '../../assets/about_header.jpg'

const OurStory = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-24 bg-transparent overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={aboutImg}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-[#2D6A4F] text-white px-6 py-4 rounded-2xl shadow-xl"
            >
              <p className="font-display text-3xl font-bold">5+</p>
              <p className="text-white/80 text-sm">Years serving<br />North Manly</p>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="lg:pl-6"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-4">
              OUR STORY
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-6">
              Born in North Manly,<br />
              <span className="text-[#2D6A4F]">Driven by Detail.</span>
            </h2>
            <p className="text-[#4B5563] leading-relaxed mb-6">
              Founded on the rugged beauty of the Northern Beaches, North Manly
              Cleaners began as a local pursuit of perfection. What started as a
              small team serving coastal homes has evolved into the region's
              premier curator of pristine spaces.
            </p>
            <p className="text-[#4B5563] leading-relaxed mb-10">
              We grew through word-of-mouth, anchored by the trust of neighbours
              who demanded more than a surface clean — they sought a professional
              standard that mirrors the clarity of the Pacific horizon.
            </p>

            {/* Two key values */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#111827]">Local Heritage</p>
                <p className="text-[#6B7280] text-sm">
                  Proudly rooted in the Northern Beaches community since day one.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-[#111827]">Eco-Certified</p>
                <p className="text-[#6B7280] text-sm">
                  All products sustainably sourced and biologically safe.
                </p>
              </div>
            </div>

            <Link to="/about">
              <motion.button
                className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#40916C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Our full story
                <HiArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
