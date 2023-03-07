import React , {useState}from 'react'
import {AnimatePresence, motion} from "framer-motion"
import {BsDot} from "react-icons/bs"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
// import frame from "../assests/frame.Png"

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

  // const prevSlide = ()=>{
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slide.length -1 :currentIndex -1;
  //   setCurrentIndex(newIndex)
  // }
  // const nextSlide = ()=>{
  //   const isFirstSlide = currentIndex === slide.length-1;
  //   const newIndex = isFirstSlide ? 0 :currentIndex +1;
  //   setCurrentIndex(newIndex)
  // }
  const goToSlide = (slideIndex)=>{
     setCurrentIndex(slideIndex)
  }


  // const parentVarients ={
  //       hidden:{
  //         opacity:0,
  //         x:60
  //       },
  //       visible:{
  //           opacity:1,
  //           x:0,
  //           transition:{
  //             duration:2
  //           }
  //       }
  // }
  // const childvarients ={
  //      hidden:{
  //       x:600,
  //       y:100,
  //      },
  //      visible:{
  //         x:0
  //      }
  // }

  const svgVarient ={
      hidden:{
        opacity:0
      },
      visible:{
        opacity:1,
        transition:{
          duration:2
        }
      }
  }

  const svgPathVarient={
      hidden:{
         opacity:0,
         pathLength:0
      },
      visible:{
        opacity:1,
        pathLength:1,
        transition:{
          duration:1,
          ease:"easeOut"
        }
      }
  }
  return (
      <div className='sm:w-full sm:p-10 sm:h-[90vh] flex flex-col sm:flex-row items-center justify-center border p-10'>
          <div className='w-full h-72 lg:w-1/2 sm:h-[80vh] lg:h-full flex flex-col justify-center items-center p-4 overflow-hidden '>
            {/* <AiOutlineLeft className='cursor-pointer mx-4 text-gray-400' onClick={prevSlide}/> */}
            <div className='w-32 sm:w-60 lg:w-64  rounded-2xl overflow-hidden' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
              <AnimatePresence>
              <motion.img 
                 key={currentIndex}
                 initial={{y:50}}
                 animate={{once:"true",y:0}}
                 transition={{duration:1}}
                 exit={{y:-20}}
                src={slide[currentIndex].url}  className='w-32 sm:w-60 lg:w-64 overflow-hidden'>
                </motion.img>
              </AnimatePresence>
            </div>
            {/* <AiOutlineRight className='cursor-pointer mx-4 text-gray-400'onClick={nextSlide}/> */}
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
          <div className='w-full  lg:w-1/2 sm:h-[80vh] lg:h-full flex items-center sm:p-16'>
            <div>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:2, delay:0.2}}
               className='text-3xl text-center sm:text-6xl w-full font-serif lg:text-left'>React Native Project</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:2, delay:0.2}}
                className= "leading-8 mt-4 text-center sm:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam reiciendis! Aspernatur commodi vel excepturi, repudiandae sint praesentium rerum iste laborum dignissimos, vitae tenetur reprehenderit hic quia saepe iure. Odio!
                </motion.p>
            </div> 
           </div>
      </div>
  )
}

export default UIWorks