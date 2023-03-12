import React , {useEffect, useRef, useState} from 'react'
import {AnimatePresence, motion, useAnimation, useScroll, useTransform, useMotionValue} from "framer-motion"
import {BsDot} from "react-icons/bs"
import apk from "../assests/House.apk"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import Vid  from "../assests/vid.mp4"
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
    <motion.div  transition={{duration:1.3}} exit={{backgroundColor: "#666666", y:-100, opacity:0.2}} className='sm:w-full p-4 sm:h-auto flex flex-col lg:flex-row items-center justify-center sm:p-10'>
          <div className=' w-full h-72  lg:w-1/2 sm:h-auto lg:h-full flex flex-col justify-center items-center '>
            <motion.div 
               className='w-32 sm:w-[10rem] sm:h-[25vh] md:w-[8rem] md:h-[33vh] lg:w-64  lg:h-[70vh] rounded-2xl ' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                <video src={Vid} width="full" height="full" controls autoPlay className='w-32 sm:w-60 lg:w-64 h-full overflow-hidden p-2 rounded-2xl'/>
            </motion.div>
          
          </div>
          <div className='w-full p-2  lg:w-1/2 sm:h-auto lg:h-full flex flex-col items-center justify-center sm:p-16 '>
            <div className='flex flex-col  items-center sm:block'>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:1.2, delay:1}}
               className='text-3xl text-center sm:text-6xl w-full font-opensans font-extralight text-gray-600 lg:text-left'>React Native Project</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.2,  delay:1}}
                className= "leading-8 mt-4 text-center text-sm sm:text-left w-[90%] sm:w-full">For my recent college mini project, I used React Native as the primary framework to build a mobile application.The goal of my project was to build a mobile application that would allow users to place food order on app. To accomplish this, I used React Native's powerful UI components to create an intuitive and user-friendly interface.Overall, my experience with React Native was very positive. The framework allowed me to build a high-quality mobile application.
                </motion.p>
                <motion.button
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:"true"}}
                 transition={{duration:2, delay:2.5}}
                className='hover:bg-gray-600 hover:border-2 hover:text-white bg-gray-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                 <a href={'#'} >Download Soon</a>  
                </motion.button>
            </div> 
           </div>
      </motion.div>
         <hr className='w-[80%] mx-auto border-1 border-slate-200 mx-a cursor-pointer p-8'></hr>
      <motion.div  transition={{duration:1.3}} exit={{backgroundColor: "#666666", y:-100, opacity:0.2}} className='sm:w-full p-4 sm:h-auto flex flex-col lg:flex-row-reverse items-center justify-center sm:p-10'>
          <div className=' w-full h-72  lg:w-1/2 sm:h-auto lg:h-full flex flex-col justify-center items-center '>
            <motion.div 
               initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:1, delay:1}}
            className='w-32 bordre-2 border-sky-400 sm:w-60 lg:w-64 rounded-2xl overflow-hidden' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
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
                transition={{duration:1.2, delay:1}}
               className='text-3xl text-center sm:text-6xl w-full font-opensans font-extralight text-gray-600 lg:text-left'>React Native UI</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.2,  delay:1}}
                className= "leading-8 mt-4 text-center text-sm sm:text-left">Goal was to design an attractive and user-friendly interface that would be intuitive and easy to navigate.
                To achieve this, I implemented a range of UI elements in React Native, including buttons, text input fields, dropdown menus, and other common UI components. I also used React Native's styling features to create a connected and visually appealing design for the app.
                </motion.p>
                <motion.button
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:"true"}}
                 transition={{duration:2, delay:2.5}}
                  className='hover:bg-gray-600 hover:border-2 hover:text-white bg-gray-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                 <a href={apk} download={apk} >Download</a>  
                </motion.button>
            </div> 
           </div>
      </motion.div>

      

       
      </>
  )
}
export default UIWorks