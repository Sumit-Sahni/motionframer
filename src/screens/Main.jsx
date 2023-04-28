import React, { useState } from 'react'
import { motion} from "framer-motion"
import NavbarComp from './NavbarComp'
import Footer from './FooterScreen'
import me1 from "../assests/me1.png"
import { Link } from 'react-router-dom'


const Main = () => {
  const [toggle, setToggle] =useState(true)
  const [toggle1, setToggle1] =useState(false)
  const [toggle2, setToggle2] =useState(false)



  const HandleClick = ()=>{
      setToggle(true)
      setToggle1(false)
      setToggle2(false)
  }
  const HandleClick1 = ()=>{
    setToggle(false)
    setToggle2(false)
    setToggle1(!toggle1)
  }
  const HandleClick2 = ()=>{
    setToggle(false)
    setToggle1(false)
    setToggle2(!toggle2)
  }
  return (
   <>
      <NavbarComp/>
     <section className='h-auto md:h-[385vh] lg:h-[350vh] bg-[#0a192f] absolute '>
        {/* MY INTRO  */}
         <div className='h-[80vh] sm:h-[60vh] lg:h-[90vh] w-full sm:w-2/3 mx-auto py-16 px-2 md:px-16 mt-24'>
            <div>
                <h1 className='px-1 py-4 text-[#64ffda] mx-2 sm:py-6 sm:px-2 font-semibold'>Hi, my name is</h1>
            </div>
            <div className='p-2 sm:px-3'>
                  <motion.h1
                    initial={{y:20,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:0.6}}
                  className='text-4xl sm:text-7xl font-extrabold text-gray-300 font-opensans'>Sumit Sahni.</motion.h1>
            </div>
            <div className='p-2 sm:py-2 w-full'>
               <motion.h2
                initial={{y:20,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{duration:0.6, delay:0.2}}
               className='text-[28px] sm:text-6xl md:text-7xl font-opensans font-extrabold text-gray-600'>Build ideas into digital<br/><span className='sm:visible text-transparent bg-clip-text bg-gradient-to-r from-purple-700 font-bold to-pink-600 '>Realities.</span></motion.h2>  
            </div>
            <div className='p-2 w-full sm:w-full md:w-3/5 sm:py-4 sm:px-3'>
                <motion.p
                 initial={{y:20,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:0.6, delay:0.3}}
                className='text-gray-400 sm:text-xl'>I'm a software engineering student specializing in Web-dev and problem solving. Currently, I'm focused on learning other web based technologies</motion.p>
            </div>
            <div className='px-2 sm:px-4 mt-4'>
                  {/* BUTTON GET IN TOUCH */}
                  <button class=" hover:bg-gray-900 hover:border-dotted  border-spacing-1 font-semibold text-[#64ffda] py-4 px-8 border-2 border-[#64ffda] rounded">
                    <Link to="mailto:sumit.123sahni@gmail.com?subject=Let's grab coffee" target="_top" className='text-sm'>Get In Touch</Link>
                  </button>
            </div>
         </div>

           {/* ABOUT ME  */}
          <div className='sm:h-auto w-full md:w-3/4 mx-auto sm:py-10 md:py-16   px-2 sm:px-16'>
             <div className='px-4 sm:px-3 flex flex-row items-center gap-6 mb-5 lg:mb-10'>
                <h1 className='md:text-4xl text-white font-semibold font-comfort'><span className='text-[#64ffda]'>0.1 </span>About Me</h1>
                <div className='w-48 sm:w-96 border border-gray-600  sm:mt-1'></div>
             </div>

             <div className='w-full h-full flex flex-col md:flex-row'>
                <motion.div
                    initial={{x:-50,opacity:0}}
                    animate={{}}
                    whileInView={{x:0,opacity:1}}
                    viewport={{once:'true'}}
                    transition={{duration:0.6, delay:0.2}}
                className='md:w-[50%]'>  
                 <div className='p-4 text-gray-500 font-semibold '>
                         <h1>
                            <span className='w-96 '>
                            <p>Currently at Pune Maharashtra studying Master's in Computer Application, set to post graduate in May 2023.</p></span>
                         </h1>
                              <div className='p-4'></div> 
                          <h1>
                            <span className='w-96 '>
                            <p>I have made a life out of thinking (sometimes a bit too much) about how people come together and connect in the physical and digital worlds around them.</p>     
                           </span>
                          </h1>
                            <div className='p-4'></div> 
                          <h1>
                            <span className='w-96 '>
                               <p>I believe that the projects I have worked on have been the highlight of my design journey. I have been influenced to constantly look for problems and design solutions for them; for challenges like these are what drive me to work. And I love every moment of the process.</p>
                           </span>
                          </h1>
                             <div className='p-4'></div>
                         <h1>
                            <span className='w-96 '>
                               <p>I aim towards combining my learnings of UI design  to integrate diverse perspectives and a collaborative approach to the product innovation process.</p>
                           </span>
                         </h1>
                      </div>
               </motion.div>

                <div className='w-full  md:w-[80%] mx-auto lg:w-[50%] flex flex-col items-center lg:items-end py-10 '>
                     <motion.div
                        initial={{x:50,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        viewport={{once:'true'}}
                        transition={{duration:0.6, delay:0.2}}
                        className="relative flex flex-row  justify-center items-center rounded-full  mt-4 p-2   border-2 border-[#64ffda]  shadow-lg hover:border-dotted  ">
                       <img src={me1} alt="me1" className=" w-52 sm:w-72  h-full rounded-full border hover:opacity-75  opacity-40 cursor-pointer"/>
                     </motion.div>                  
                   </div>
             </div>
            </div>
          

           {/* ACHIVEMENT & EXPERIENCE  */}
           <div className='h-auto md:h-[60vh] w-full md:w-3/4 mx-auto  px-2 sm:px-24 lg:mt-24 lg:py-24'> 
              <div className='px-4 sm:px-3 flex flex-row items-center gap-6 mb-5 lg:mb-20'>
                 <motion.h1
                   initial={{y:30,opacity:0}}
                   viewport={{once:'true'}}
                   whileInView={{y:0,opacity:1}}
                   transition={{duration:0.6, delay:0.3}}
                 className='md:text-4xl text-white font-semibold font-comfort'><span className='text-[#64ffda]'>0.2 </span>Achivement & Experience</motion.h1>
                 <div className='w-48 sm:w-96 border border-gray-600  sm:mt-1'></div>
              </div>

            <div className='w-full h-full flex flex-col md:flex-row'>
               <div className='md:w-[30%] border-l-2 h-48 border-gray-600'>  
                  <div onClick={HandleClick} className='cursor-pointer w-full hover:bg-[#142540] delay-100 duration-300 hover:border-[#64ffda] hover:border-l-2'>
                      <div className='p-4'>
                        <h1 className='text-xl text-gray-500'>Web Designing</h1>  
                      </div>                             
                  </div>
                  <div onClick={HandleClick1} className='cursor-pointer w-full hover:bg-[#142540] delay-100 duration-300 hover:border-[#64ffda] hover:border-l-2'>
                      <div className='p-4'>
                        <h1 className='text-xl text-gray-500'>Developing</h1>  
                      </div>                             
                  </div>
                  <div onClick={HandleClick2} className='cursor-pointer w-full hover:bg-[#142540] delay-100 duration-300 hover:border-[#64ffda] hover:border-l-2'>
                      <div className='p-4'>
                        <h1 className='text-xl text-gray-500'>Project</h1>  
                      </div>                             
                  </div>
               </div>
            
                 <div className='w-full py-12 md:py-0 md:w-[80%] mx-auto lg:w-[70%] flex flex-col px-4 md:px-10 '>
                               {
                                (toggle?
                                 <motion.div
                                  initial={{y:-20,opacity:0}}
                                  animate={{y:0,opacity:1}}
                                  transition={{duration:0.6}}
                                 >
                                   <h1 className=' font-playfair text-3xl font-bold text-white'>Badge <span className='text-[#64ffda]'>1st</span> Position</h1>
                                    <p className='mt-2 text-gray-400 '>Dec 2021</p>
                                    <div className='w-full sm:w-3/5 py-4'>
                                      <motion.p 
                                       initial={{y:-20,opacity:0}}
                                       animate={{y:0,opacity:1}}
                                       transition={{duration:0.6}}
                                      className='text-gray-400'>Part of Inter-College competition, Sinhgad Institute of Management & Achivers College of Mumbai</motion.p>
                                    </div>
                                </motion.div>
                                :null)
                               }     
                                {
                                (toggle1?
                                 <motion.div
                                 initial={{y:-20,opacity:0}}
                                 animate={{y:0,opacity:1}}
                                 transition={{duration:0.6}}
                                 >
                                   <h1 className=' font-playfair text-3xl font-bold text-white'>Development</h1>
                                    <p className='mt-2 text-gray-400 '>Learning</p>
                                    <div className='w-full  sm:w-3/5 py-4'>
                                      <motion.p 
                                      initial={{y:-20,opacity:0}}
                                      animate={{y:0,opacity:1}}
                                      transition={{duration:0.6}}
                                      className='text-gray-400'>Have been devloping & creating UI design sicne last 1 year</motion.p>
                                    </div>
                                </motion.div>
                                :null)
                               }     
                               {
                                (toggle2?
                                 <motion.div
                                 initial={{y:-20,opacity:0}}
                                 animate={{y:0,opacity:1}}
                                 transition={{duration:0.6}}
                                 >
                                   <h1 className='font-playfair text-3xl font-bold text-white'>React <span className='text-[#64ffda]'>Native</span> Project</h1>
                                    <p className='mt-2 text-gray-400 '>Sep 2021 Nov 2021 </p>
                                    <div className='w-full sm:w-5/6 py-4'>
                                      <motion.p
                                       initial={{y:-20,opacity:0}}
                                       animate={{y:0,opacity:1}}
                                       transition={{duration:0.6}}
                                       className='text-gray-400'>The goal of my project was to build a mobile application that would allow users to place food order on app. To accomplish this, I used React Native's powerful UI components to create an intuitive and user-friendly interface.Overall, my experience with React Native was very positive. The framework allowed me to build a high-quality mobile application.</motion.p>
                                    </div>
                                </motion.div>
                                :null)
                               }        
                  </div>
            </div>
           </div>
          

           {/* GET IN TOUCH  */}

          <div className='h-[60vh] sm:h-[40vh] lg:h-[60vh] w-full sm:w-full md:w-3/4 mx-auto sm:px-24 sm:mt-32 lg:mt-32'> 
              <div className='w-full md:w-3/4 mx-auto flex flex-col items-center justify-center'>
                  <h1 className='px-1 py-4 text-[#64ffda] mx-2 sm:py-6 sm:px-2 font-semibold'><span>0.3 What's Next?</span></h1>
                  <div>
                      <h1 className='text-3xl sm:text-6xl font-semibold text-white'>Get In Touch</h1>
                  </div>
                  <div className='w-full sm:w-4/5 text-center p-8'>
                     <p className='text-white'>
                     I am constantly looking for new opportunities in industry, I am willing to work in the field of web-development & software<br/>
                     Apart from that, my inbox is open to any kind of queries as well <br/>Drop a mail and I'll reply within a day or two.
                     </p>
                  </div>

                  <div>
                  <button class=" hover:bg-gray-900 hover:border-dotted  border-spacing-1 font-semibold text-[#64ffda] py-4 px-8 border-2 border-[#64ffda] rounded">
                    <Link to="mailto:sumit.123sahni@gmail.com?subject=Let's grab coffee" target="_top" className='text-sm'>Say Hello</Link>
                  </button>
                  </div>
              </div>  
           </div>
          <Footer/> 
     </section>
   </>
  )
}

export default Main