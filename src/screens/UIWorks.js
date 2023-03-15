import React , {useState} from 'react'
import {motion} from "framer-motion"
import {BsDot} from "react-icons/bs"
import apk from "../assests/House.apk"
import room1 from "../assests/room1.jpg"
import room2 from "../assests/room2.jpg"
import room3 from "../assests/room3.jpg"
import Vid  from "../assests/vid.mp4"
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import {Link} from "react-scroll"
import Logo from  "../assests/Logo.jpg"


const UIWorks = () => {

  const [nav, setNav] = useState(true)
  const handleNavbar = () =>{
     setNav(!nav)
  }

   
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
     <div
          className='w-full h-[80px] z-10  sticky bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1 ,delay:2}} className='flex items-center'>
                  <NavLink to="/"><img src={Logo} alt='logo' width={40}></img></NavLink>
             </motion.div>
              <motion.ul  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hidden md:flex items-center text-xl  mx-4 '>
                <NavLink className="mx-8" to='/cover'>Cover</NavLink>
                <NavLink to='/work'>work</NavLink>
              </motion.ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer "/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul  className={nav ? "hidden" :  ` absolute bg-black text-white w-full h-[800vh]  px-8 md:hidden text-3xl`}>
          <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                <NavLink to='/cover'>Cover</NavLink>
                 </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                  <NavLink to={'/work'}>Work</NavLink>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 </li>
              </ul>
        
        </div>
    <motion.div  transition={{duration:1.3}} exit={{y:-100, opacity:0.2}} className=' sm:w-full p-4 sm:h-auto flex flex-col lg:flex-row items-center justify-center sm:p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white'>
          <div className=' w-full h-72  lg:w-1/2 sm:h-auto lg:h-full flex flex-col justify-center items-center'>
            <motion.div 
               className='bg-white w-32 sm:w-[10rem] sm:h-[25vh] md:w-[8rem] md:h-[33vh] lg:w-64  lg:h-[70vh] rounded-2xl ' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
                <video src={Vid} width="full" height="full" controls autoPlay className='w-32 sm:w-60 lg:w-64 h-full overflow-hidden p-2 rounded-2xl'/>
            </motion.div>
          
          </div>
          <div className='w-full   lg:w-1/2 sm:h-auto lg:h-full flex flex-col items-center justify-center sm:p-16 '>
            <div className='flex flex-col  items-center sm:block'>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:1.2, delay:1}}
               className='py-4 self sm:p-0 text-3xl px-4   sm:text-left sm:text-6xl w-full font-opensans font-extralight  lg:text-left text-white'>React Native Project</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.2,  delay:1}}
                className= "leading-6  text-left text-sm px-4 sm:p-1 sm:w-full h-auto">For my recent college mini project, I used React Native as the primary framework to build a mobile application.The goal of my project was to build a mobile application that would allow users to place food order on app. To accomplish this, I used React Native's powerful UI components to create an intuitive and user-friendly interface.Overall, my experience with React Native was very positive. The framework allowed me to build a high-quality mobile application.
                </motion.p>
                <motion.button
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:"true"}}
                 transition={{duration:2, delay:2.5}}
                className='hover:bg-gray-600 mx-4 sm:mx-0 hover:border-2 self-start  hover:text-white bg-gray-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                 <NavLink href={"/"}  >Download Soon</NavLink>  
                </motion.button>
            </div> 
           </div>
      </motion.div>
      
         {/* <hr className='w-[80%] mx-auto border-1 border-slate-200 mx-a cursor-pointer '></hr> */}

      <motion.div  transition={{duration:1.3}} exit={{backgroundColor: "#666666", y:-100, opacity:0.2}} className='sm:w-full p-4 sm:py-32 sm:h-auto flex flex-col lg:flex-row-reverse items-center justify-center sm:p-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white'>
          <div className=' w-full h-72  lg:w-1/2 sm:h-auto lg:h-full flex flex-col justify-center items-center '>
            <motion.div 
               initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}}   viewport={{once:"true"}} transition={{duration:1, delay:1}}
            className='w-32 bordre-2 bg-white sm:w-60 lg:w-64 rounded-2xl overflow-hidden' style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
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
          <div className='w-full p-3  lg:w-1/2 sm:h-auto lg:h-full flex flex-col items-center justify-center sm:p-16  '>
            <div className='flex flex-col  items-center sm:block'>
               <motion.h1 
                initial={{x:400, scale:0}}
                animate={{x:0, scale:1}}
                transition={{duration:1.2, delay:1}}
               className='text-3xl px-4 sm:px-0 sm:text-6xl w-full font-opensans font-extralight text-white lg:text-left'>React Native UI</motion.h1>
               <motion.p 
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1.2,  delay:1}}
                className= "leading-6 mt-4  text-left  text-sm px-4 sm:px-0  sm:w-full">Goal was to design an attractive and user-friendly interface that would be intuitive and easy to navigate.
                To achieve this, I implemented a range of UI elements in React Native, including buttons, text input fields, dropdown menus, and other common UI components. I also used React Native's styling features to create a connected and visually appealing design for the app.
                </motion.p>
                <motion.button
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 viewport={{once:"true"}}
                 transition={{duration:2, delay:2.5}}
                  className='hover:bg-gray-600 hover:border-2 self-start mx-4 sm:mx-0 hover:text-white bg-gray-400 text-white font-bold py-2 px-4 rounded-full mt-4'>
                 <NavLink href={apk} download={apk} >Download</NavLink>  
                </motion.button>
            </div> 
           </div>
      </motion.div>

      

       
      </>
  )
}
export default UIWorks