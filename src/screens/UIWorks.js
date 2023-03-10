import React , {useEffect, useRef, useState} from 'react'
import {AnimatePresence, motion, useAnimation, useScroll, useTransform, useMotionValue} from "framer-motion"
import { useInView } from "react-intersection-observer";
import {BsDot} from "react-icons/bs"
import apk from "../assests/House.apk"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import Mern from "../assests/MERN.jpg"
import Port from "../assests/Port.jpg"
import Figma from "../assests/Figma.jpg"
import eshop from "../assests/Eshop.jpg"
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

  // const {ref, inView} = useInView()
  // const animation = useAnimation();
  //  useEffect(()=>{
  //   console.log("use effect hook, inVuew = ", inView)
  //   if(inView){
  //        animation.start({
  //         opacity:1,
  //         scale:1,
  //         transition:{
  //              type: 'fade', duration: 1, bounce: 0.3
  //          }
  //     })
  //   }
  //  },[inView])
  const { scrollXProgress } = useScroll();
  const scale = useTransform(scrollXProgress, [0, 1], [1, 0.5]);

  return (
    <>
    <NavbarComp/>
      <motion.div initial={{y:0, opacity:0}} animate={{ y:0, opacity:1}} transition={{duration:1.3}} exit={{backgroundColor: "#666666", y:-100, opacity:0.2}} className='sm:w-full p-4 sm:h-auto flex flex-col lg:flex-row items-center justify-center sm:p-10'>
          <div className=' w-full h-72  lg:w-1/2 sm:h-auto lg:h-full flex flex-col justify-center items-center '>
            <motion.div 
               initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1}}
            className='w-32 sm:w-60 lg:w-64 rounded-2xl overflow-hidden' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                 <motion.img 
                   initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1 , delay:1}}
                   src={slide[currentIndex].url}  className='w-32 sm:w-60 lg:w-64 overflow-hidden p-2 rounded-2xl'>
                </motion.img>
              
            </motion.div>
            <div className='w-32 h-5 flex items-center justify-center mt-2 cursor-pointer'>
                 {
                  slide.map((slide, index)=>{
                    return(
                        <BsDot key={index} onClick={()=> goToSlide(index)}/>
                    )
                  })
                 }
            </div>
          </div>
          <div className='w-full p-2  lg:w-1/2 sm:h-auto lg:h-full flex flex-col items-center justify-center sm:p-16 '>
            <div className='flex flex-col  items-center sm:block'>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:1.2}}
               className='text-3xl text-center sm:text-6xl w-full font-opensans font-extralight text-gray-600 lg:text-left'>React Native Project</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.2}}
                className= "leading-8 mt-4 text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam reiciendis! Aspernatur commodi vel excepturi, repudiandae sint praesentium rerum iste laborum dignissimos, vitae tenetur reprehenderit hic quia saepe iure. Odio!
                </motion.p>
                <button className='hover:bg-gray-600 hover:border-2 hover:text-white bg-gray-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                 <a href={apk}>Download</a>  
                </button>
            </div> 
           </div>
      </motion.div>

                                {/* / REACT OTHER PROJECT  */}
       <section   className='flex flex-col items-center '>
             <div 
                 className='w-full p-8 mt-12'>
                <motion.h1 
                 initial={{scale:0}}
                 whileInView={{scale:1}}
                 viewport={{once:'true'}}
                 transition={{duration:1.2,}}
                className='text-center text-5xl sm:text-6xl sm:p-8 font-opensans font-extralight text-gray-600'>From Coding to Creation</motion.h1>
             </div>
             <div className='w-full h-[60vh]  sm:h-auto  flex flex-col md:flex-row item-center justify-between p-4 sm:p-16'>
                 
               <motion.div
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:'true'}}
                 transition={{duration:1.3}}
                 className="transform transition duration-300 ease-out cursor-pointer sm:w-[85%] max-w-full md:w-[96%] lg:w-2/5  h-[70%] hover:h-[80%] xl:w-2/3  md:h-[25rem] lg:h-[40vh] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-centerbg-white rounded-2xl  hover:text-white hover:font-bold hover:bg-gradient-to-r from-green-400 to-blue border-2">
                         <div className='h-96 lg:w-12 hidden  md:hidden   lg:flex flex-col items-center justify-center'>
                            <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                         </div>
                         <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                              <img src={Figma} alt="MERN" className=' lg:w-[100%] lg:h-[100%]  object-cover'  /> 
                         </div>
  
                         <div className=' h-60 md:w-68 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                           <div className=' w-full h-60 flex flex-col justify-evenly  hover:font-bold'>
                               <div className='mt-6 sm:mt-6'>
                                     <h1 className=' lg:text-xl font-semibold font-cba'>College Project</h1>
                               </div>
                               <div  className=''>
                                      <p className=' font-thin '>The work I did during my College 2nd semestar I got to  lead the whole project, which was made using MEARN stack. it was a great learning experience. </p>
                               </div>
                               <div className=''>
                                    <h1><a href="https://sumit-sahni.github.io/outshade/" className="font-cba font-bold"><u>Explore</u></a></h1>
                                   
                               </div>
                           </div>
                        </div>
              </motion.div>

              <motion.div 
                           initial={{opacity:0}}
                           whileInView={{opacity:1}}
                           viewport={{once:'true'}}
                           transition={{duration:1.3}}
              className=" mt-4 transform transition duration-300 ease-out cursor-pointer w-full sm:w-[85%] md:w-[96%] lg:w-2/5 xl:w-2/3 h-[70%] hover:h-[80%] md:h-[25rem] lg:h-[40vh] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center   bg-white rounded-2xl  hover:text-white hover:font-bold hover:bg-gradient-to-r from-green-400 to-blue border-2">
                         <div className=' h-96 lg:w-12 hidden  md:hidden   lg:flex flex-col items-center justify-center'>
                            <p className='rotate-180 ' style={{"writingMode":"vertical-rl"}}>UX Design + Research  (by Sumit)</p>
                         </div>
                         <div className='w-[100%] h-[100%] md:h-full lg:h-full lg:w-1/2 overflow-hidden rounded'>
                              <img src={Port} alt="MERN" className='w-[100%] h-[100%]  object-cover'  /> 
                         </div>
  
                         <div className=' h-60 md:w-68 lg:w-1/2 flex items-center justify-center flex-col px-6 cursor-pointer'>
                           <div className=' w-full h-60 flex flex-col justify-evenly  hover:font-bold'>
                               <div className=''>
                                     <h1 className='lg:text-xl font-semibold font-cba'>College Project</h1>
                               </div>
                               <div  className=''>
                                      <p className=' font-thin '>This project solely based on HTML, Javascript and CSS </p>
                               </div>
                               <div className=''>
                                    <h1><a href="https://sumit-sahni.github.io/Banklist/" className="font-cba font-bold"><u>Explore</u></a></h1>
                                   
                               </div>
                           </div>
                        </div>
              </motion.div>
             
               {/* jhcvxzcb */}
             </div>
       </section>
      </>
  )
}
export default UIWorks