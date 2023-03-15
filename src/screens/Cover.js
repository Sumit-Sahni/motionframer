import Logo from "../assests/Logo.jpg"
import {motion } from "framer-motion"
import React from 'react'
import { NavLink } from 'react-router-dom'



 const Cover = () => {

  return (
    <>

       <div
          className='w-full h-[80px] z-10  sticky bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1 ,delay:1}} className='flex items-center'>
                  <NavLink to="/"><img src={Logo} alt='logo' width={40}></img></NavLink>
             </motion.div>
          </div>
         
          
        </div>

       <motion.div
         initial={{opacity: 0, scale:3}}
         animate={{opacity: 1, scale:1}}
         transition={{ duration:2, delay:0.2}}
         exit={{y:-50, opacity:0.2}}
         
         className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:w-full  p-4  flex flex-col lg:flex-row items-center justify-center sm:p-10 w-full sm:h-[100vh] font-medium'>
          <div className=' sm:w-[80%] mx-auto' >
            <div className='pb-5'>
              <p> <span className='text-sm sm:text-4xl'>D</span>ear Hiring Manager,</p>
            </div>
            <div className='md:w-[80%]  leading-8 font-opensans '>
              <p>I am writing to express my interest in the Front-end Developer position at your company. As a recent graduate
                  in Computer Science with a passion for front-end development, I believe that I would be an excellent fit for
                  this role.<br/>
                  
                  Throughout my academic career and personal projects, I have gained experience in a wide range of front-end
                  development technologies, including <u> HTML, CSS, JavaScript</u> , and various frameworks such as <u className='font-bold'>React Js.</u>  <u className='font-bold'>React Native.</u> and
                  Angular. I have worked on numerous projects, including <u>responsive websites</u> , web applications, and mobile
                  applications, which have enabled me to develop strong skills in web design, user experience, and development.<br/>
                  
                  I am excited about the opportunity to work with a team of experienced developers and to contribute my
                  skills to your organization. I am highly motivated, detail-oriented, and eager to learn and grow as a developer.
                  I believe that my passion for front-end development, my experience with various technologies, and my
                  willingness to take on new challenges make me an ideal candidate for this position.<br/>
                  Thank you for considering my application. I look forward to discussing my qualifications further and
                  learning more about the opportunities available at your company
                </p>
            </div>
            <div className='py-5'>
                  <p>Sincerely,</p>
                  <p>Sumit Sahni</p>
                  <NavLink href={"https://symut-sahni-f42c7f.netlify.app/"}>Portfolio</NavLink>
            </div>
          </div>
      </motion.div>
    </>
  )
}


export default Cover