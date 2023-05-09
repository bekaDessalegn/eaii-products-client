import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { useRouter } from 'next/router';

const CategoryComponent = () => {

  const [categories, setCategories] = useState([])
  const router = useRouter()
  const {id} = router.query;

  const fetchData = () => {
    const query = `
        query {
          categories_by_pk(id: ${id}){
            name
            description
            categories_product{
             title
             url
             description
             image_path
             created_at
            }
          }
          }
        `;

        const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
        };

        fetch(process.env.baseUrl, options)
        .then(response => response.json())
        .then(data => {

          let cats = data.data;

          if((typeof cats === 'undefined')) {

          } else {
            setCategories(data.data.categories_by_pk);
          }
        });
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
    {
      categories.length == 0 ? <div> Loading </div> :
    <AnimatePresence>
    <div>
        <div className='hero h-[45vh] flex flex-col justify-center items-center mb-32 relative'>
            <p className='text-[36px] font-bold text-onPrimary'>{categories.name}</p>
            <p className='text-[20px] text-onPrimary mt-2'>{categories.description}</p>
        </div>
        {categories.categories_product.map((product, idx) => (
        (idx%2 == 0) ? <div key={idx} id={product.title.split(" ").join("")} className='flex flex-row mb-32 mt-32'>
        <div className='w-1/2 pl-20'>
          <p className='font-semibold text-[36px] pb-3'>{product.title}</p>
          <p>{product.description}</p>
          <Link href={product.url}><p className='text-primaryColor mt-6 cursor-pointer'>Go to product</p></Link>
        </div>
        <div className='w-1/2 h-full hidden md:flex justify-center'>
                <motion.div 
                initial= {{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0}}
                transition={{delay: 0.6}}
                >
                    <img className='max-w-[450px]' src={product.image_path} />
                </motion.div>
            </div>
        </div> : <div key={idx} id={product.title.split(" ").join("")} className='flex flex-row mb-32 mt-32'>
    <div className='w-1/2 h-full hidden md:flex justify-center'>
            <motion.div
            initial= {{opacity: 0, x: -100}}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{delay: 0.6}}
            >
                <img className='max-w-[450px]' src={product.image_path} />
            </motion.div>
        </div>
        <div className='w-1/2 pr-20'>
      <p className='font-semibold text-[36px] pb-3'>{product.title}</p>
      <p>{product.description}</p>
      <Link href={product.url}><p className='text-primaryColor mt-6 cursor-pointer'>Go to product</p></Link>
    </div>
    </div>
        ))}
    </div>
    </AnimatePresence>
}
    </>
  )
}

export default CategoryComponent