import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import img1 from '../../assets/home_services/home1.jpg'
import img2 from '../../assets/home_services/home2.jpg'
import img3 from '../../assets/home_services/home3.jpg'
import img4 from '../../assets/home_services/home4.jpg'
import img5 from '../../assets/home_services/home5.jpg'
import img6 from '../../assets/home_services/home6.jpg'
import img7 from '../../assets/home_services/home7.jpg'
import img8 from '../../assets/home_services/home8.jpg'
import img9 from '../../assets/home_services/home9.jpg'
import img10 from '../../assets/home_services/home10.jpg'

const servicesList = [
  {
    num: '01', title: 'Strata Cleaning Services', img: img1,
    desc: 'Comprehensive common-area maintenance for residential complexes, maintaining property value and resident pride.',
  },
  {
    num: '02', title: 'Domestics Services', img: img2,
    desc: 'Personalised home cleaning focusing on toxin-free cleaning and meticulous organization for the discerning homeowner.',
  },
  {
    num: '03', title: 'Gardening Services', img: img3,
    desc: 'Expert landscaping and regular maintenance to ensure your outdoor spaces are as pristine as your interiors.',
  },
  {
    num: '04', title: 'Air BnB Services', img: img4,
    desc: 'Rapid turnaround services that guarantee 5-star hygiene reviews, including laundry coordination and staging essentials.',
  },
  {
    num: '05', title: 'Recycling Machines Services', img: img5,
    desc: 'Sanitation and technical maintenance of automated recycling units, keeping green infrastructure operational and inviting.',
  },
  {
    num: '06', title: 'Windows Cleaning Services', img: img6,
    desc: 'Pure water technology for streak-free views in residential and commercial buildings, including high-reach tasks.',

  },
  {
    num: '07', title: 'Steam Cleaning Services', img: img7,
    desc: 'Deep steam treatment for upholstery and carpets, removing allergens and restoring fabric vitality naturally.',
  },
  {
    num: '08', title: 'Water Pressure Services', img: img8,
    desc: 'Industrial-grade restoration for exterior surfaces, driveways, and building facades using eco-conscious methods.',
  },
  {
    num: '09', title: 'Restaurant Services', img: img9,
    desc: 'High-frequency sanitation and floor maintenance for retail environments, ensuring a safe, sparkling experience for your customers.',
  },
  {
    num: '10', title: 'Supermarket Services', img: img10,
    desc: 'Specialised deep-cleaning for front-of-house elegance and back-of-house hygiene compliance in luxury dining establishments.',
  },
]

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className="group"
    >
      {/* Image */}
      <div className="rounded-2xl overflow-hidden h-[180px] mb-3">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline gap-3">
          <span className="text-base font-semibold text-[#2D6A4F]/50 flex-shrink-0 tabular-nums">
            {service.num}
          </span>
          <h3 className="font-display text-xl font-bold text-[#1A1A1A]">{service.title}</h3>
        </div>
        <p className="text-[#6B7280] text-base leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  )
}

const ServicesCards = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero */}
      <section className="bg-transparent pt-16 pb-12">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F] mb-4">
              OUR EXPERTISE
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-5">
              Our Services
            </h1>
            <p className="text-[#6B7280] max-w-xl text-base leading-relaxed">
              We redefine professional cleaning through clinical precision and botanical freshness.
              Explore our specialised services designed for elite commercial and residential spaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-transparent pb-20">
        <div className="max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {servicesList.map((service, i) => (
              <ServiceCard key={service.num} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default ServicesCards
