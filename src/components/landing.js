import React from 'react'
import landing from '../../public/images/landing.png'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Landing = () => {
  return (
    <AnimatePresence>
    <div>
    <div className='h-screen flex flex-row items-center justify-center bg-cyan-300 z-0'>
        <motion.div 
        initial={{opacity: 0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{opacity: 0, x: -100}}
        transition={{delay: 0.6}}
        className=' w-1/2 flex flex-col items-center justify-center -mt-40'>
            <p className='text-[42px] text-onPrimary text-center'>Products of Ethiopian Artificial Intelligence Institute</p>
            <p className='text-[20px] text-onPrimary mt-10 text-center'>You can access all AII products here!</p>
            <div className='w-44 py-2 cursor-pointer border-2 rounded-md text-onPrimary mt-10 text-center'>Get Access</div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{opacity: 0, x: 100}}
        transition={{delay: 0.6}}
        className='w-[400px] -mt-40'>
            <Image src={landing} className='w-full h-full' />
        </motion.div>
    </div>
    </div>
    </AnimatePresence>
  )
}

export default Landing