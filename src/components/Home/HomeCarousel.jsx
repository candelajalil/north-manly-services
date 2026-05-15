import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import images from './images'

function HomeCarousel() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.offsetWidth, 'current');
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])


  return (
    <div className="flex flex-col gap-4 py-10">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[80%]">
          <h1 className="text-cyan-500 text-3xl font-bold">Customer testimonials</h1>
        </div>
        <hr className="border-[1.5px] border-gray-300 w-[80%] " />
        <div className="w-[80%] flex justify-end">
          <p className="text-gray-300 text-lg">Coments</p>
        </div>
      </div>
      <motion.div ref={carousel} className="cursor-grab overflow-hidden p-2">
        <motion.div className="flex " drag='x' dragConstraints={{ right: 0, left: -width }}>
          {images.map(image => {
            return (
              <motion.div className="min-h-[20rem] min-w-[30rem] p-[40px] ">
                <img src={image} alt="carousel_images" className="w-full h-full rounded-[2rem] pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div className="w-[100%] sm:py-10 sm:px-60 flex flex-row items-center sm:justify-end justify-center gap-3">
        <Link to='/contact'>
          <motion.button className='p-3 bg-cyan-500 rounded-xl text-white shadow-xl'
            whileHover={{ scale: 1.2 }}
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default HomeCarousel;