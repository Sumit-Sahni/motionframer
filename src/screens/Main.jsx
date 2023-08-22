import React, { useState } from 'react'
import { motion} from "framer-motion"
import NavbarComp from './NavbarComp'
import Footer from './FooterScreen'
import me1 from "../assests/me1.png"
import { Link } from 'react-router-dom'
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import {CgIfDesign} from "react-icons/cg"
import styled, {keyframes, css} from 'styled-components';


const scrollX = keyframes`
   from{ 
    left:translateX(0);
  }
  to{
    transform:translateX(-100%)
   }
` 

const common = css`
flex-shrink: 0;
display: flex;
align-items: center;
justify-content: space-between;
white-space: nowrap;
width: 100%;

animation:${scrollX} 12s linear infinite;
`
const MarqueeGroup = styled.div`
    ${common}
`
const MarqueeGroup2 = styled.div`
    ${common}
    animation-direction:reverse;
    animation-delay:-3s; 
`
const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width:clamp(10rem, 1rem + 40vmin, 30rem);
    padding: clac(clamp(10rem, 1rem +30vmin, 30rem)/10);
    

`
const Image = styled.div`
   @media (max-width: 780px) {
    padding: 0px 0px 0px 0px;
  }
`

const row1 = [
  "React Js",
  "Next JS",
  "Javascript",
  "Tailwind css",
  "MERN",
  "React Native",
];

const row2 = [
  "React Js",
  "Next JS",
  "Javascript",
  "Tailwind css",
  "MERN",
  "React Native",
];

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
const Main = () => {

  const maskImageStyle = {
    maskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))'
  };
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
       <motion.section transition={{duration:0.6}} exit={{y:-100, opacity:0}} className='h-auto md:h-[450vh] lg:h-[540vh] bg-[#0a192f] absolute '>
        {/* MY INTRO  */}
         <div className='h-[80vh] sm:h-auto lg:h-[90vh] w-full sm:w-2/3 mx-auto py-16 px-2 md:px-16 mt-24 '>
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
                 initial={{y:20, opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:0.6, delay:0.3}}
                className='text-gray-400 sm:text-xl'>I'm a software developer specializing in Web-App's and problem solving. Currently, I'm focused on learning Typescript & Algorithm's <span><a href="https://leetcode.com/sssirius/" className='text-orange text-white'>(LeetCode)</a></span> </motion.p>
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
                className='md:w-[50%] relative'> 
                    <div className='md:w-[30%] border-l-2 h-[65vh] sm:h-96 sm:mt-5 border-gray-600 absolute'></div> 
                 <div className='p-4 text-gray-400  '>
                         <h1>
                            <span className='w-96 '>
                            <p>Currently at Pune Maharashtra studying Master's in Computer Application, set to post graduate in Aug 2023.</p></span>
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
          
           {/* SKILLS */}
           <motion.div  exit={{scale:1.1, opacity:0}} transition={{duration:0.5,delay:0.5}} className=' w-full h-auto flex flex-col items-center justify-center '>
           <section className="">
          <div className="w-[90%] mx-auto py-16">
          <div className="px-2  flex flex-col items-center  mx-auto justify-center">
                <div className="w-full mx-auto px-4 text-center mb-12 ">
                   <h1 className='text-[#64ffda] text-4xl md:text-6xl'  >Skills</h1>
                  </div>

                    <div className=''>

                      <div className={`${maskImageStyle} relative w-[360px] md:w-[800px] lg:[1200px] overflow-hidden flex  `}>
                          <MarqueeGroup  className=''>
                            {
                              row1.map((item, index)=>{
                                return(
                                   <ImageGroup key={index}>
                                       <Image className='mx-4'><h1 className='text-white  ' >{item}</h1></Image>
                                   </ImageGroup>
                                )
                              })
                            }
                          </MarqueeGroup>
                          <MarqueeGroup>
                            {
                              row1.map((item, index)=>{
                                return(
                                   <ImageGroup key={index}>
                                       <Image className=' hidden lg:block '><h1 className='text-white '>{item}</h1></Image>
                                   </ImageGroup>
                                )
                              })
                            }
                          </MarqueeGroup>
                      </div>
                    </div>

                    <div className=' w-[360px] md:w-[800px] lg:[1200px] overflow-hidden flex my-6'>
                      <MarqueeGroup2>
                        {
                          row2.map((item, index)=>{
                            return(
                               <ImageGroup key={index}>
                                       <Image className='mx-4'><h1 className='text-white  ' >{item}</h1></Image>
                               </ImageGroup>
                            )
                          })
                        }
                      </MarqueeGroup2>
                      <MarqueeGroup2>
                        {
                          row2.map((item, index)=>{
                            return(
                               <ImageGroup key={index}>
                                       <Image className=' hidden lg:block '><h1 className='text-white '>{item}</h1></Image>
                               </ImageGroup>
                            )
                          })
                        }
                      </MarqueeGroup2>
                    </div>
              </div>
           </div>
      </section>
          </motion.div>
           {/* ACHIVEMENT & EXPERIENCE  */}
           <div className='h-auto md:h-[60vh] w-full md:w-3/4 mx-auto  px-2 sm:px-24 lg:mt-24 lg:py-24'> 
              <div className='px-4 sm:px-3 flex flex-row items-center gap-6 mb-5 lg:mb-20'>
                 <motion.h1
                   initial={{y:30,opacity:0}}
                   viewport={{once:'true'}}
                   whileInView={{y:0,opacity:1}}
                   transition={{duration:0.6, delay:0.3}}
                 className='md:text-4xl text-white font-semibold font-comfort'><span className='text-[#64ffda]'>0.3 </span>Achivement & Experience</motion.h1>
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
                                      className='text-gray-400'>Have been devloping & creating UI design since last 1 year</motion.p>
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
           {/* SERVICES  */}
           <section className='hidden  w-full  lg:flex flex-col items-center sm:p-12 text-white'>
          <div className='w-[90%] px-9  sm:w-full  md:w-[53rem] md:h-auto  sm:py-8 sm:px-4  cursor-pointer'>
            <h1><span className="text-2xl text-[#64ffda]"> S</span> ervices</h1>
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
                              className='w-24 sm:w-52 sm:h-52 md:w-[25rem] md:h-60  flex items-center justify-cente py-8'>
                               <div style={{backgroundImage:`url(${item.img})`}} className='relative w-full h-full bg-no-repeat bg-cover z-0 '>
                                <div className=' items-start absolute w-32 h-28 sm:w-52 sm:h-[18rem] md:w-[25rem] md:h-60  hover:scale-125 hover: bg-[#3e4d49] opacity-55  hover:border-solid hover:border-2  border-[#64ffda] hover:opacity-80 cursor-pointer  duration-200 z-50'>
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
           {/* GET IN TOUCH  */}

          <div className='h-[60vh] sm:h-auto lg:h-[60vh] w-full sm:w-full md:w-3/4 mx-auto sm:px-24 mt-10 sm:mt-32 lg:mt-32'> 
              <div className='w-full md:w-3/4 mx-auto flex flex-col items-center justify-center'>
                  <h1 className='px-1 py-4 text-[#64ffda] mx-2 sm:py-6 sm:px-2 font-semibold'><span>0.4 What's Next?</span></h1>
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
     </motion.section>
   </>
  )
}

export default Main