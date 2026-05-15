import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BsShieldCheck } from 'react-icons/bs'
import { FaLeaf, FaAward } from 'react-icons/fa'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import aboutHeroImg from '../../assets/about_header.jpg'
import coastImg from '../../assets/cleanning_heroe.jpg'
import cleaningImg from '../../assets/home_cleanning.png'

/* ─── Hero ───────────────────────────────────────────────── */
const AboutHero = () => (
  <section className="bg-transparent py-20 md:py-28 overflow-hidden">
    <div className="max-w-[1280px] mx-auto px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-14 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#2D6A4F] leading-tight mb-6">
            About Us
          </h1>
          <p className="text-[#4B5563] text-base leading-relaxed max-w-md">
            At North Manly Services, we believe that luxury is the mastery of space and the
            elimination of the unnecessary. Our commitment to excellence transforms your
            environment into a sanctuary of clinical precision and organic freshness.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-3xl overflow-hidden shadow-lg"
          style={{ height: '480px' }}
        >
          <img src={aboutHeroImg} alt="Our Story" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  </section>
)

/* ─── Heritage ──────────────────────────────────────────── */
const Heritage = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <section className="bg-transparent py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img src={coastImg} alt="Northern Beaches" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <img src={cleaningImg} alt="Cleaning equipment" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2D6A4F] mb-4">OUR HERITAGE</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight mb-6">
              Born in North Manly,<br />
              <span className="text-[#2D6A4F]">Driven by Detail.</span>
            </h2>
            <p className="text-[#4B5563] leading-relaxed mb-5">
              Founded on the rugged beauty of the Northern Beaches,
              North Manly Services began as a local pursuit of perfection.
              What started as a small team servicing coastal homes has
              evolved into the region's premier curator of pristine spaces.
            </p>
            <p className="text-[#4B5563] leading-relaxed">
              We grew through word-of-mouth, anchored by the trust of
              neighbors who demanded more than just a surface clean—
              they sought a professional standard that mirrors the clarity of
              the Pacific horizon.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Standard of Excellence ────────────────────────────── */
const StandardOfExcellence = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const pillars = [
    {
      Icon: BsShieldCheck, title: 'Clinic-Grade Precision',
      desc: 'Utilising HEPA-filtered vacuum systems and medical-grade disinfectants, we eliminate 99.9% of allergens and pathogens without leaving a chemical trace.',
      tags: ['HEPA Certified', 'Hospital Grade'], bg: 'bg-[#EBF5F0]', iconBg: 'bg-[#2D6A4F]', dark: false,
    },
    {
      Icon: FaLeaf, title: 'Eco-Conscious Philosophy',
      desc: 'Our botanical solutions are safe for children, pets, and the planet — sourced from sustainable Australian ingredients.',
      tags: [], bg: 'bg-[#2D6A4F]', iconBg: 'bg-white/20', dark: true,
    },
    {
      Icon: FaAward, title: 'Expert Training',
      desc: 'Every curator undergoes 120+ hours of certified training process sovering surface-specific care and spatial ethics.',
      tags: [], bg: 'bg-[#D1ECF7]', iconBg: 'bg-[#2D6A4F]', dark: false,
    },
    {
      Icon: HiOutlineClipboardCheck, title: 'Meticulous Management',
      desc: "Our digital check-list system ensures no corner is overlooked, providing you with a complete audit of your sanctuary's care after every visit.",
      tags: [], bg: 'bg-[#1A1A1A]', iconBg: 'bg-[#2D6A4F]', dark: true,
    },
  ]

  return (
    <section className="bg-transparent py-20 md:py-28" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            The Standard of Excellence
          </h2>
          <p className="text-[#6B7280] max-w-lg mx-auto">
            Clinical precision meets botanical care. We don't just clean — we restore the integrity of your space.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${p.bg} rounded-2xl p-8 flex flex-col gap-5`}
            >
              <div className={`w-11 h-11 ${p.iconBg} rounded-xl flex items-center justify-center text-white`}>
                <p.Icon size={20} />
              </div>
              <div>
                <h3 className={`font-display text-xl font-bold mb-2 ${p.dark ? 'text-white' : 'text-[#1A1A1A]'}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed ${p.dark ? 'text-white/70' : 'text-[#6B7280]'}`}>{p.desc}</p>
              </div>
              {p.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="bg-[#2D6A4F] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const AboutContent = () => (
  <>
    <AboutHero />
    <Heritage />
    <StandardOfExcellence />
  </>
)

export default AboutContent
