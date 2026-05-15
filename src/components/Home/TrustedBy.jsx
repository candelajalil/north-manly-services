import React from 'react'
import img1 from '../../assets/customers_logos/etchrealestate.png'
import img2 from '../../assets/customers_logos/belle_property.png'
import img3 from '../../assets/customers_logos/cleangreenstrata.png'
import img4 from '../../assets/customers_logos/mjt.png'
import img5 from '../../assets/customers_logos/iga.png'
import img6 from '../../assets/customers_logos/airbnb.png'
import img7 from '../../assets/customers_logos/day_to_day.png'
import img8 from '../../assets/customers_logos/strata_one.png'
import img9 from '../../assets/customers_logos/vdgservices.png'

const logos = [
  { src: img1, alt: 'Etch Real Estate' },
  { src: img2, alt: 'Belle Property' },
  { src: img3, alt: 'Clean Green Strata' },
  { src: img4, alt: 'MJT Group' },
  { src: img5, alt: 'IGA' },
  { src: img6, alt: 'Airbnb' },
  { src: img7, alt: 'Day to Day' },
  { src: img8, alt: 'Strata One' },
  { src: img9, alt: 'VDG Services' },
]

// Duplicamos para el efecto infinito
const track = [...logos, ...logos]

const TrustedBy = () => (
  <section className="bg-transparent py-10 border border-gray-100 overflow-hidden">
    <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF] mb-8">
      Industry leaders who trust us
    </p>

    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, white, transparent)' }} />
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, white, transparent)' }} />

      <div
        className="flex items-center gap-16"
        style={{
          animation: 'marquee 28s linear infinite',
          width: 'max-content',
        }}
      >
        {track.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
          />
        ))}
      </div>
    </div>

    <style>{`
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </section>
)

export default TrustedBy
