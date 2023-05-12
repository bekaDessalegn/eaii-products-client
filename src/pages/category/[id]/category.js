import CategoryComponent from '@/components/category_component'
import Footer from '@/components/footer'
import NavBar from '@/components/navbar'
import React, { useState } from 'react'
import Image from "next/image";
import logo from "../../../../public/images/logo.png"

const CategoryPage = () => {

  const [isLoading, setIsLoading] = useState(false)

  return (
    // isLoading ? <>
    // <div className='w-screen h-screen bg-white flex justify-center items-center'>
    //   <Image src={logo} className='animate-pulse max-w-[200px]' />
    // </div>
    // </> : 
    <>
    <NavBar loadingState = {(value) => setIsLoading(value)} />
    <CategoryComponent/>
    <Footer />
    </>
  )
}

export default CategoryPage