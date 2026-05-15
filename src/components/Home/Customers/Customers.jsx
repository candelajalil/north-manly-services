import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import img2 from '../../../assets/customers_logos/cleangreenstrata.png'
import img3 from '../../../assets/customers_logos/etchrealestate.png'
import img4 from '../../../assets/customers_logos/iga.png'
import img5 from '../../../assets/customers_logos/mjt.png'
import img6 from '../../../assets/customers_logos/vdgservices.png'
import img7 from '../../../assets/customers_logos/day_to_day.png'
import img8 from '../../../assets/customers_logos/strata_one.png'
import img9 from '../../../assets/customers_logos/belle_property.png'

const logos = [img3, img4, img2, img5, img6, img7, img8, img9]
const logoAlts = [
  'Etch Real Estate',
  'IGA',
  'Clean Green Strata',
  'MJT',
  'VDG Services',
  'Day to Day',
  'Strata One',
  'Belle Property',
]

const Customers = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="py-20 bg-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-3">
            TRUSTED BY
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#111827]">
            Our Clients
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-md mx-auto">
            Proudly partnering with leading businesses and properties across
            North Manly and the Northern Beaches.
          </p>
        </motion.div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logoAlts[i]}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center justify-center p-6 bg-[#F9F6F0] rounded-2xl hover:bg-[#D8F3DC]/40 transition-colors duration-300 group"
            >
              <img
                src={logo}
                alt={logoAlts[i]}
                className="max-h-12 max-w-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Customers
