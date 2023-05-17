import React from 'react'
import landing from '../../public/images/landing.png'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Landing = () => {
  return (
    <>
    <div className='hero h-[100vh] relative'>
    <div className='absolute w-full -bottom-[150px] overflow-hidden'>
      <svg width="100%" height="355px" viewBox="0 0 1920 355" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Apple-TV" transform="translate(0.000000, -402.000000)" fill="#FFFFFF">
            <path d="M0,439.134243 C175.04074,464.89273 327.944386,477.771974 458.710937,477.771974 C654.860765,477.771974 870.645295,442.632362 1205.9828,410.192501 C1429.54114,388.565926 1667.54687,411.092417 1920,477.771974 L1920,757 L1017.15166,757 L0,757 L0,439.134243 Z" id="Path"></path>
          </g>
        </g>
      </svg>

    </div>

    <div className='h-full flex flex-row items-center justify-center'>
        <motion.div 
        initial={{opacity: 0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity: 0, x: -100}}
        transition={{delay: 0.6}}
        className=' w-1/2 flex flex-col items-center justify-center -mt-40'>
            <p className={`text-[42px] text-onPrimary text-center font-bold`}>Products of Ethiopian Artificial Intelligence Institute</p>
            <p className={`text-[20px] text-onPrimary mt-10 text-center`}>You can access all EAII products here!</p>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity: 0, x: 100}}
        transition={{delay: 0.6}}
        className='w-[400px] mt-40'>
            <Image src={landing} className='w-full h-full' />
        </motion.div>
    </div>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 mx-10 mt-10 absolute z-50'>
      <div className='border-2 rounded-md px-8 py-8 bg-surface'>
        Health
      </div>
    </div>
  </div>
    </>
  )
}

export default Landing