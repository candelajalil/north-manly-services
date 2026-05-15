import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineCloseCircle, AiOutlineHome, AiOutlineMail  } from 'react-icons/ai'
import { MdOutlineCleaningServices, MdOutlineFactory  } from 'react-icons/md'





const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}


const NavbarModal = ({ showModal, setShowModal, setToggle , toggle }) => {

    const closeModal = () => {
        setShowModal(!showModal)
        setToggle(!toggle)
    }

  return (
    <AnimatePresence mode='wait'>
        {
            showModal && (
                <motion.div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1 p-10'
                 variants={backdrop}
                 initial="hidden"
                 animate="visible"
                 exit='hidden'
                >
                   <motion.div className='m-w-[400px] h-[500px] bg-white rounded-[30px] text-center flex flex-col  px-20 py-10 gap-24'>
                    <div>
                      <button className='w-6' onClick={closeModal}>
                        <AiOutlineCloseCircle size={25} className='text-cyan-500' />
                      </button>
                    </div>
                    <motion.div className='flex flex-col items-center gap-10'>
                    <Link to='/' className='w-32'>
                      <motion.button className='text-cyan-500 font-bold text-xl flex flex-row gap-2 items-center'><AiOutlineHome size={20} className='text-cyan-500'/> Home</motion.button>
                    </Link>
                    <Link to='/services' className='w-32'>
                      <motion.button className='text-cyan-500 font-bold text-xl flex flex-row gap-2 items-center'><MdOutlineCleaningServices size={20} className='text-cyan-500'/> Services</motion.button>
                    </Link>
                    <Link to='/about' className='w-32'>
                      <motion.button className='text-cyan-500 font-bold text-xl flex flex-row gap-2 items-center'><MdOutlineFactory size={20} className='text-cyan-500'/>About</motion.button>
                    </Link>
                    <Link to='/contact' className='w-32'>
                      <motion.button className='text-cyan-500 font-bold text-xl flex flex-row gap-2 items-center'><AiOutlineMail size={20} className='text-cyan-500'/>Contact</motion.button>
                    </Link>
                    </motion.div>

                   </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence >
  )
}

export default NavbarModal