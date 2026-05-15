import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import cleaningImg from '../../assets/home_cleanning.png'

const checkItems = [
  // {
  //   title: 'Local Heritage',
  //   desc: 'Deeply rooted in North Manly for over a decade.',
  // },
  // {
  //   title: 'Eco-Certified',
  //   desc: 'Non-toxic, sustainable products for your space.',
  // },
]

const ProfessionalStandards = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="bg-transparent py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-16 items-start">

          {/* LEFT — Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#E0EDE6]">
              <img
                src={cleaningImg}
                alt="Professional cleaner"
                className="w-full object-cover object-center"
                style={{ height: '520px' }}
              />
            </div>
            {/* Badge 100% — sobresale arriba a la derecha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-[#2D6A4F] rounded-full w-28 h-28 flex flex-col items-center justify-center shadow-lg"
            >
              <span className="text-xl font-bold text-white leading-none">100%</span>
              <span className="text-[8px] font-semibold uppercase tracking-wider text-white/80 mt-1.5">Satisfaction</span>
              <span className="text-[8px] font-semibold uppercase tracking-wider text-white/80 mt-0.5">Guarantee</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Professional standards,<br />
              <span className="text-[#2D6A4F]">Manly local heart.</span>
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-[#4B5563] leading-relaxed">
                Born from a passion for clinical precision and the relaxed elegance of
                Northern Beaches living, North Manly Services has redefined the
                meaning of "clean."
              </p>
              <p className="text-[#4B5563] leading-relaxed">
                We utilise hospital-grade equipment and strictly eco-friendly practices
                to ensure your environment is visually stunning and biologically safe.
              </p>
            </div>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {checkItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#D8F3DC] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#2D6A4F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm">{item.title}</p>
                    <p className="text-[#6B7280] text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ProfessionalStandards
