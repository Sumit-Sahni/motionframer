import React , {useState} from 'react'
import {AnimatePresence, motion} from "framer-motion"
import {BsDot} from "react-icons/bs"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import NavbarComp from './NavbarComp'

const UIWorks = () => {
   const slide = [
       {
        url :room1
       },
       {
        url :room2
       },
       {
        url :room3
       },
   ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToSlide = (slideIndex)=>{
     setCurrentIndex(slideIndex)
  }
  return (
    <>
    <NavbarComp/>
      <motion.div initial={{y:0, opacity:0}} animate={{ y:0, opacity:1}} transition={{duration:1.3}} exit={{backgroundColor: "#666666", y:-80, opacity:0.2}} className='sm:w-full sm:p-10 sm:h-[90vh] flex flex-col lg:flex-row items-center justify-center border p-10'>
          <div className='w-full h-72  lg:w-1/2 sm:h-[80vh] lg:h-full flex flex-col justify-center items-center p-4  '>
            <div className='w-32 sm:w-60 lg:w-64  rounded-2xl overflow-hidden' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
              <AnimatePresence>
              <motion.img 
                 key={currentIndex}
                 initial={{scale:0, opacity:0}}
                 whileInView={{scale:0.9, opacity:1}}
                 transition={{duration:1}}
                 exit={{scale:0.5, opacity:0}}
                src={slide[currentIndex].url}  className='w-32 sm:w-60 lg:w-64 overflow-hidden'>
                </motion.img>
              </AnimatePresence>
            </div>
            <div className='w-32 h-5 flex items-center justify-center mt-2 cursor-pointer'>
                 {
                  slide.map((slide, index)=>{
                    return(
                        <BsDot onClick={()=> goToSlide(index)}/>
                    )
                  })
                 }
            </div>
          </div>
          <div className='w-full p-5  lg:w-1/2 sm:h-[80vh] lg:h-full flex items-center sm:p-16'>
            <div>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:1.7}}
               className='text-3xl text-center sm:text-6xl w-full font-serif lg:text-left'>React Native Project</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:2, delay:0.2}}
                className= "leading-8 mt-4 text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam reiciendis! Aspernatur commodi vel excepturi, repudiandae sint praesentium rerum iste laborum dignissimos, vitae tenetur reprehenderit hic quia saepe iure. Odio!
                </motion.p>
            </div> 
           </div>
      </motion.div>
      </>
  )
}
export default UIWorks