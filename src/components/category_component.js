import Link from 'next/link'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';

const CategoryComponent = () => {
  return (
    <>
    <AnimatePresence>
    <div>
        <div className='h-[300px] bg-cyan-300 flex flex-col justify-center items-center mb-32'>
            <p className='text-[36px] font-bold text-onPrimary'>Health</p>
            <p className='text-[24px] text-onPrimary mt-2'>Products for Health Sector.</p>
        </div>
        <div className='flex flex-row mb-16'>
    <div className='w-1/2 pl-20'>
      <p className='font-semibold text-[36px] pb-3'>Diabetes</p>
      <p>Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.</p>
      <Link href="https://www.youtube.com"><p className='text-primaryColor mt-6 cursor-pointer'>Go to product</p></Link>
    </div>
    <div className='w-1/2 h-full hidden md:flex justify-center'>
            <motion.div 
            initial= {{opacity: 0, x: 100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0.6}}
            >
                <img className='max-w-[450px]' src='https://products.aii.et/assets/img/diabetes-2.webp' />
            </motion.div>
        </div>
    </div>
    <div className='flex flex-row mb-6'>
    <div className='w-1/2 h-full hidden md:flex justify-center'>
            <motion.div
            initial= {{opacity: 0, x: -100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{delay: 0.6}}
            >
                <img className='max-w-[450px]' src='https://products.aii.et/assets/img/diabetes-2.webp' />
            </motion.div>
        </div>
        <div className='w-1/2 pr-20'>
      <p className='font-semibold text-[36px] pb-3'>Diabetes</p>
      <p>Diabetes is a leading cause of blindness, kidney failure, heart attacks, stroke, and amputation of lower limbs. Diabetes burden is strongly linked to metabolic risks and behavioral factors. Algorithms supporting predictive models for the risk of getting diabetes or its complications have been developed using artificial intelligence. It is also capable of identifying diabetes mellitus type based on the data obtained from a patient.</p>
      <Link href="https://www.youtube.com"><p className='text-primaryColor mt-6 cursor-pointer'>Go to product</p></Link>
    </div>
    </div>
    </div>
    </AnimatePresence>
    </>
  )
}

export default CategoryComponent