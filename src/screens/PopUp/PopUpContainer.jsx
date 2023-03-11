import React , {useState,  useEffect}from "react";
import {AnimatePresence, motion,} from "framer-motion"
import styled from "styled-components";
import boy from "../../assests/boy.jpg"
import popup from "../../assests/popup.mp3"



const PopContainers = styled.div`
   position:absolute;
   top:0;
   left:0;
   width:100%;
   height:100vh;
   background-color: rgba(0,0,0,0.7);
   display: flex;
   flex-direction:row
   justify-content:center
   transition: 400ms;
   opacity: 100px
   z-index:10
}

   align-items:center;
`
const InnerPop = styled.div`
    color:black;
    background-color: rgba(255,255,255,0.9);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    width:100%;
    height:110vh;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    position:relative;
    z-index:10
  }
  
   
    h5{
      line-height:2rem;
      font-family: "Josefin Sans", "sans-serif";
    }
    
    @media (max-width:700px){
       width:100%;
       h5{
        line-height:1.5rem
      }
    }
  
   
`

const PopContainer = ({trigger, setFalse}) =>{
    const [triggers, setTriggers] = useState(false)
    const [value, setValue] = useState(true)
 
    const play = ()=>{
        new Audio(popup).play(value)
        value(false)
     }
   
       useEffect(()=>{
          setTimeout(()=>{
             setTriggers(true)
          },2000)
       },[])
   

    return(trigger)? (
      <PopContainers>
            <InnerPop >
             {
                <AnimatePresence>
                               {
                                 triggers ? (
                                   <motion.div
                                      initial={{x:-250,}}
                                      animate={{x:-10,}}
                                      transition={{delay:1, duration:1}}
                                      exit={{x:-250, delay:0, duration:0}}
                                      className='hidden  left-0 w-60 h-auto lg:flex flex-row items-center justify-between -bottom-2'>
                                       <motion.img 
                                         initial={{x:-120}}
                                         animate={{x:-10, rotate:[0,20]}}
                                         transition={{delay:2, duration:5, type:"spring", stiffness:300,damping:20}}
                                         src={boy} className='w-28 self-start relative -top-10  '
                                       />
                                       <div className='w-1/2 '>
                                         <h1 className='text-xl font-opensans text-center'>Hey!! There</h1>  
                                         <h1 className='text-sm font-opensans text-center'>Cover Letter</h1>  
                                         <button className='w-2 h-2 rounded-full text-slate-700 absolute -top-10 right-0 mx-3 cursor-pointer'onClick={()=>setFalse=(false)}>X</button>
                                       </div>   
                                       <section  className='flex flex-col items-center border-2 '>
             <div 
                 className='w-full p-8 mt-12'>
                <motion.h1 
                 initial={{scale:0}}
                 whileInView={{scale:1}}
                 viewport={{once:'true'}}
                 transition={{duration:1.2,  type: "spring", stiffness: 400, damping: 10 }}
                className='text-center text-5xl sm:text-6xl sm:p-8 font-opensans font-extralight text-gray-600'>From Coding to Creation</motion.h1>
             </div>

             <div className='w-full h-[100vh]  sm:h-auto  flex flex-col md:flex-row item-center justify-between p-4 sm:p-16'>
                 
               <motion.div
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:'true'}}
                 transition={{duration:1.3}}
                 className="transform transition duration-300 ease-out cursor-pointer sm:w-[85%] max-w-full md:w-[96%] lg:w-2/5  h-[70%]  xl:w-2/3  md:h-[25rem] lg:h-[40vh] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-centerbg-white rounded-2xl  hover:text-white hover:font-bold hover:bg-gradient-to-r from-green-400 to-blue border-2">
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
              className=" mt-4 sm:mt-0 transform transition duration-300 hover:ease-out cursor-pointer w-full sm:w-[85%] md:w-[96%] lg:w-2/5 xl:w-2/3 h-[70%]  md:h-[25rem] lg:h-[40vh] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-center   bg-white rounded-2xl  hover:text-white hover:font-bold hover:bg-gradient-to-r from-green-400 to-blue border-2">
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
                                   </motion.div>
                                 
                                 ) : null
                               }
                              </AnimatePresence>
             }
        </InnerPop>
      </PopContainers>
   ): ""
}

export default PopContainer