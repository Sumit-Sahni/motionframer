import React from 'react'
import india from "../assests/india.png"

const Footer = () => {
  return (
    <section className='w-full bg-white'>
          <div className='w-full lg:w-1/2 mx-auto bg-black text-white lg:bg-white lg:text-black'>
              <div className='flex flex-row items-center justify-center text-center text-[1rem] font-thin py-3 px-4'>
                   <div className='text-sm'>
                    <p> © 2023 SUMIT SAHNI MADE WITH <span>❤️</span></p>
                   </div>
                   <div>
                     <img src={india} alt='india' className='w-16 pb-1 '/>
                   </div>
                   <div className='text-sm mx-1'>
                    <p>Pune</p>
                    </div>
              </div>
          </div>
    </section>
  )
}

export default Footer