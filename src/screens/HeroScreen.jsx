import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion,} from "framer-motion"
import {CgIfDesign} from "react-icons/cg"
// import {TbHandClick} from "react-icons/tb"
import me1 from "../assests/me1.png"
import Footer from './FooterScreen'
import NavbarComp from './NavbarComp';
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import react from "../assests/react.png"
import nextjs from "../assests/nextjs.png"
import javascript from "../assests/javascript.png"
import typescript from "../assests/typescript.png"
import redux from "../assests/redux.png"
import html from "../assests/html.png"
import css from "../assests/css.png"
import styled from "../assests/styled-components.png"
import tailwind from "../assests/Tailwind.png"
import popup from "../assests/popup.mp3"
import { Link } from 'react-router-dom';



   

const slide = [
  {
   url :room1,
   img: "https://unsplash.com/photos/pqzRfBhd9r0/download?force=true&w=640",
   title:"UX Research",
   about:"Offer to design interfaces that provide a seamless user experience for visitors to the website, which can increase engagement and conversions."
  },
  {
   url :room2,
   img: "https://unsplash.com/photos/i1VQZsU86ok/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NTQ4ODY1&force=true&w=640",
   title:"Web Dev",
   about:"Offer to design and develop visually appealing and user-friendly websites that are optimized for various devices."
  },
  {
   url :room3,
     img: "https://unsplash.com/photos/x9WGMWwp1NM/download?force=true&w=640",
     title:"App Design",
     about:"Offer to test websites or applications across multiple browsers and platforms to ensure that they work correctly and look consistent."
  },
  {
    url :room1,
     img: "https://unsplash.com/photos/m_HRfLhgABo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjc4NTQ4NjI5&force=true&w=640",
     title:"Web Design",
     about:"Offer ongoing maintenance and support services to ensure that websites or applications are up-to-date and running smoothly."
  }
]

const HeroScreen = () => {
  const [trigger, setTrigger] = useState(false)
  // const [value, setValue] = useState(true)

  const play1 = ()=>{
     const audio =  new Audio(popup)
     audio.play(true)
     console.log("Played")
  }

    useEffect(()=>{
       setTimeout(()=>{
          setTrigger(true)
       },4000) 
    },[])
   

  return (
    <>
    <NavbarComp />
    <section className='relative w-full  flex flex-col items-center 'style={{background:"linear-gradient(to top, #bdc3c7, #2c3e50)"}} >
    <div className='absolute h[60%] w-full h-full' >
            
            </div>
      <motion.div className="relative flex flex-row  justify-center items-center rounded-full  mt-4 p-2   border  shadow-lg shadow-gray-500/60  ">
            <motion.img  initial={{opacity:0, y:-100}} animate={{y:0, opacity:1}} transition={{ duration:2, type:"keyframes", stiffness:120}}  src={me1} alt="me1" className=" w-52 sm:w-72  h-full rounded-full border border-gray-200  hover:shadow-2xl"/>
            </motion.div>
          
              <motion.div 
                 initial={{y:60,opacity:0,}}
                 animate={{ once:"true", y:10, opacity:1,}}
                 transition={{delay:1, duration:1}}
                 whileInView={{textShadow: "8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)"}}
                 className='w-full h-full text-white p-8 relative'
                 >
      
                  {/* BOY POP UP */}
                 <AnimatePresence>
                 {
                  trigger ? (
                    <motion.div
                       initial={{x:-250,y:-250}}
                       animate={{x:0,y:-10}}
                       transition={{duration:1}}
                       exit={{x:-250, delay:0, duration:0}}
                        className=' sm:hidden absolute w-48 -top-[3rem] left-2 lg:left-0 lg:-top-14 lg:w-60 lg:h-48 lg:flex flex-row items-center justify-between lg:-bottom-2'>
                        <motion.img 
                          initial={{x:-120}}
                          animate={{x:-10, rotate:[0,15]}}
                          transition={{delay:2,duration:2, type:"spring", stiffness:500,damping:20}}
                          src={""} className=' w-8 sm:w-28 self-start relative lg:-top-2  '
                        />
                        <div className='w-11/12'>
                          <Link to='/cover'  className='text-[10px] sm:text-xl font-comfort '>Cover Letter</Link>
                          <button className='w-2 h-2 rounded-full text-slate-700 absolute bottom-10 mx-3 lg:top-[50px] cursor-pointer'onClick={()=>{setTrigger(false); play1();}}>X</button>
                        </div>      
                    </motion.div>
                  
                  ) : null
                }
               </AnimatePresence>
     { /* BOY POP UP */}

                 <h1 className='text-center text-sm md:text-3xl font-playfair text-white my-3'>Hey! I am <u className='font-bold'><Link to="/me"> <span className=' lg:text-3xl'>Sumit Sahni,</span></Link></u> a UI designer</h1>
                 <motion.div  className='w-full mx-auto sm:1/2 md:w-4/5 lg:w-3/5 xl:w-4/5'>
                 <h2 className='p-2 text-center text-3xl md:text-6xl font-comfort  text-white'>Transforming ideas into interactive digital<br/> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-700 font-bold to-pink-600 '>Realities</span></h2>  
               </motion.div>
        </motion.div>
    </section>

    <motion.div  exit={{scale:1.1, opacity:0}} transition={{duration:0.5,delay:0.5}} className=' bg- w-full h-auto flex flex-col items-center justify-center '>
           <section className='w-full h-auto py-24'>
            <div className='w-full sm:w-[70%] mx-auto px-5 sm:px-10'>
                <div>
                   <h1 className='sm:text-6xl font-semibold font-playfair'>Skills</h1>
                   <p className='text-xl py-2'>My Area of Expertiese</p>
                </div>
                <div className='mt-8 h-[40vh] '>
                     <h1>frontend development</h1>
                     <motion.div initial={{opacity:0}}  whileInView={{opacity:1,}} transition={{duration:1}} className='w-full sm:w-full  p-6 h-[40vh] flex flex-row gap-x-7 flex-wrap'>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={react} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-32 sm:h-6'> <img src={nextjs} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={javascript} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={typescript} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={redux} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={html} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={css} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={styled} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={tailwind} alt="react" /></div>   
                     </motion.div>
                </div>
                <div className='mt-10 h-[40vh] '>
                     <h1>backent development</h1>
                     <motion.div initial={{opacity:0}}    whileInView={{opacity:1,}} transition={{duration:1}} className='w-full sm:w-full  p-6 h-[40vh] flex flex-row gap-x-7 flex-wrap'>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={react} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-32 sm:h-6'> <img src={nextjs} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={javascript} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={typescript} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={redux} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={html} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={css} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={styled} alt="react" /></div>
                      <div className='w-10 h-4 sm:w-24 sm:h-6'> <img src={tailwind} alt="react" /></div>   
                     </motion.div>
                </div>
            </div>
           </section>
         

         {/* EXPERTISE */}
         
          <section className=' w-full  flex flex-col items-center sm:p-12'>
          <div className='w-[90%] px-9  sm:w-full  md:w-[53rem] md:h-auto  sm:py-8 sm:px-4  cursor-pointer'>
            <h1><span className="text-2xl">S</span>ervices</h1>
            <hr
            className='w-24  mx-a cursor-pointer'></hr>
            <p className=' font-opensans text-sm py-2'>Create visually stunning, user-friendly websites with our expert frontend development services, including custom UX design, pixel-perfect coding, responsive design, cross-browser testing, optimization, accessibility testing, and ongoing maintenance and support.</p>
          </div>                 
                <div className='w-full  p-1  md:w-[80%] mx-auto flex flex-row flex-wrap items-center justify-center  gap-4 '>
         
                      {
                        slide.map(( item, i)=>{
                          return(
                             <motion.div
                              initial={{opacity:0, x:i%2 ===0?-50:100,y:50}}
                              whileInView={{opacity:1, x:0, y:0}}
                              viewport={{once:'true'}}
                              transition={{duration:0.5, delay:i*0.2}}
                              key={i}
                              className='w-32 h-28 sm:w-52 sm:h-52 md:w-[25rem] md:h-60  flex items-center justify-cente py-8'>
                               <div style={{backgroundImage:`url(${item.img})`}} className='relative w-full h-full bg-no-repeat bg-cover z-0 '>
                                <div className='items-start absolute w-32 h-28 sm:w-52 sm:h-52 md:w-[25rem] md:h-60  hover:scale-125 hover: bg-[#545965] bg-gradient-to-r from-gray-700 via-gray-900 to-black    hover:opacity-80  duration-200 z-50'>
                                    <div className='h-10 sm:w-full p-4 '>
                                           <CgIfDesign size={60} color='white'/>
                                           <h1 className='text-white sm:text-2xl font-playfair font-bold'>{item.title}</h1>
                                           <p className='text-white text-sm hidden sm:block font-comfort py-2'>{item.about}</p>
                                    </div>
                                 </div>
                                 
                               </div>
                             </motion.div>
                          )
                        })
                      }
                </div>
          </section>

       {/* CONTACTS */}

        <section className='w-full mt-10 py-12'>
        
             <div className=' xsm:w-3/5 lg:w-3/5 xl:w-1/2 mx-auto'>
                    <div className='text-xl md:text-3xl font-thin px-4 md:px-12 text-center '>
                       <p>
                       Thanks for checking out my work! 🙌🏻
                       tap to know more about <u><Link to="/" className='text-red-600 font-semibold' >me</Link></u> or look at my <u><Link to="https://drive.google.com/file/d/1Tf2dvDszyQLZPsLPQqVB8gKuE04JlIoR/view?usp=share_link" className='text-red-600 font-semibold'>resume!</Link></u>
                       </p>
                    </div>
              </div>    
        </section>
        <Footer/>
    </motion.div>
    </>
  )
}

export default HeroScreen