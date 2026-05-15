import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'
import { AiOutlineShop, AiOutlineHome } from 'react-icons/ai'
import { BiBuildingHouse } from 'react-icons/bi'
import { MdCleaningServices } from 'react-icons/md'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const ServicesCards = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-transparent py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F] mb-3">
            OUR EXPERTISE
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Curated Services
          </h2>
          <p className="text-[#6B7280] mt-3 text-sm max-w-md">
            Bespoke cleaning solutions tailored for premium residential and commercial environments.
          </p>
        </div>

        {/* View all — pegado a las cards */}
        <div className="flex justify-end mb-4">
          <Link to="/services">
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6A4F] hover:gap-3 transition-all duration-200 whitespace-nowrap"
              whileHover={{ x: 3 }}
            >
              View all services <HiArrowRight size={15} />
            </motion.span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Strata & Corporate */}
          {inView && (
            <motion.div
              custom={0} variants={cardVariants} initial="hidden" animate="visible"
              className="md:row-span-2 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:border-[#2D6A4F]/40 hover:shadow-sm transition-all duration-300 group min-h-[320px]"
            >
              <div>
                <div className="w-9 h-9 bg-[#D8F3DC] border border-[#D8F3DC] rounded-xl flex items-center justify-center mb-5 transition-all">
                  <MdCleaningServices size={18} className="text-[#2D6A4F]" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-2">
                  Strata & Corporate
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                  Comprehensive care for shared high-end assets.
                </p>
                <ul className="flex flex-col gap-2 mb-5">
                  {['Behind appliances & heavy furniture', 'Detailed upholstery sanitization', 'High-pressure grout treatment'].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#4B5563]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6A4F] hover:gap-3 transition-all">
                Learn more <HiArrowRight size={13} />
              </Link>
            </motion.div>
          )}

          {/* Domestic Cleaning */}
          {inView && (
            <motion.div
              custom={1} variants={cardVariants} initial="hidden" animate="visible"
              className="border border-gray-200 rounded-2xl p-8 hover:border-[#2D6A4F]/40 hover:shadow-sm transition-all duration-300 group min-h-[220px]"
            >
              <div className="w-9 h-9 bg-[#D8F3DC] border border-[#D8F3DC] rounded-xl flex items-center justify-center mb-5 transition-all">
                <AiOutlineHome size={18} className="text-[#2D6A4F]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-2">Domestic Cleaning</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed mb-5">
                Regular maintenance for elegant living spaces.
              </p>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6A4F] hover:gap-3 transition-all">
                Learn more <HiArrowRight size={13} />
              </Link>
            </motion.div>
          )}

          {/* AirBnB Services */}
          {inView && (
            <motion.div
              custom={2} variants={cardVariants} initial="hidden" animate="visible"
              className="border border-gray-200 rounded-2xl p-8 hover:border-[#2D6A4F]/40 hover:shadow-sm transition-all duration-300 group min-h-[220px]"
            >
              <div className="w-9 h-9 bg-[#D8F3DC] border border-[#D8F3DC] rounded-xl flex items-center justify-center mb-5 transition-all">
                <BiBuildingHouse size={18} className="text-[#2D6A4F]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1A1A1A] mb-2">AirBnB Services</h3>
              {/* <p className="text-[#6B7280] text-sm leading-relaxed mb-5"> */}
              {/* Comprehensive care for shared high-end environments. */}
              {/* </p> */}
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D6A4F] hover:gap-3 transition-all">
                Learn more <HiArrowRight size={13} />
              </Link>
            </motion.div>
          )}

          {/* Supermarket & Retail */}
          {inView && (
            <motion.div
              custom={3} variants={cardVariants} initial="hidden" animate="visible"
              className="md:col-span-2 bg-[#1B2B1E] rounded-2xl p-8 flex flex-col gap-4 min-h-[100px]"
            >
              <div className="w-11 h-11 bg-[#2D6A4F] rounded-xl flex items-center justify-center flex-shrink-0">
                <AiOutlineShop size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">Supermarket & Retail</h3>
                <p className="text-white/60 text-sm">Scalable cleanliness for high-traffic essential services. Refflect professional excellence.</p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:gap-3 transition-all">
                Learn more <HiArrowRight size={13} />
              </Link>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  )
}

export default ServicesCards
