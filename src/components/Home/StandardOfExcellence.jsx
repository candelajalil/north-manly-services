import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsShieldCheck } from 'react-icons/bs'
import { FaLeaf, FaAward } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const StandardOfExcellence = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  // JSX inside component to avoid module-scope issues
  const pillars = [
    {
      icon: <BsShieldCheck size={22} />,
      title: 'Clinic-Grade Precision',
      desc: 'Using 99.9% filtered eco-premium systems and medical-grade disinfectants, we eliminate 99.5% of allergens and pathogens without leaving a chemical trace.',
      tags: ['NDIS Certified', 'Hospital Grade'],
      bg: 'bg-[#EBF5F0]',
      iconBg: 'bg-[#2D6A4F]',
    },
    {
      icon: <FaLeaf size={20} />,
      title: 'Eco-Conscious Philosophy',
      desc: 'Our botanical solutions are safe for children, pets, and the planet — sourced from sustainable Australian establishments.',
      tags: ['Eco-Certified'],
      bg: 'bg-[#2D6A4F]',
      iconBg: 'bg-white/20',
      dark: true,
    },
    {
      icon: <FaAward size={22} />,
      title: 'Expert Training',
      desc: 'Every crew member undergoes 120+ hours of certified training, combining the latest methods with deep local knowledge.',
      bg: 'bg-[#F3F4F6]',
      iconBg: 'bg-[#2D6A4F]',
    },
    {
      icon: <HiOutlineClipboardCheck size={22} />,
      title: 'Meticulous Management',
      desc: 'Our digital check-list system ensures nothing is overlooked, providing you with a complete audit of your services after every visit.',
      bg: 'bg-[#111827]',
      iconBg: 'bg-[#2D6A4F]',
      dark: true,
    },
  ]

  return (
    <section className="py-24 bg-[#F9F6F0]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2D6A4F] mb-4">
            OUR APPROACH
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-4">
            The Standard of Excellence
          </h2>
          <p className="text-[#6B7280] max-w-xl mx-auto text-lg">
            Clinical precision meets botanical care. We don't just clean — we
            restore the integrity of your space.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className={`${pillar.bg} rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div
                className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 text-white`}
              >
                {pillar.icon}
              </div>
              <div className="flex-1">
                <h3
                  className={`font-display text-xl font-bold mb-2 ${
                    pillar.dark ? 'text-white' : 'text-[#111827]'
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    pillar.dark ? 'text-white/70' : 'text-[#6B7280]'
                  }`}
                >
                  {pillar.desc}
                </p>
              </div>
              {pillar.tags && (
                <div className="flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#D8F3DC] rounded-full flex items-center justify-center flex-shrink-0">
              <AiOutlinePhone size={26} className="text-[#2D6A4F]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#111827]">
                Let's Connect
              </h3>
              <p className="text-[#6B7280] text-sm mt-0.5">
                Ready to experience the North Manly standard? Discuss your
                specific needs with our curation team today.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+610478024363"
              className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 text-sm"
            >
              Call Us Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#40916C] text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md text-sm"
            >
              Request a Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StandardOfExcellence
