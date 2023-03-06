import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import {Link} from "react-scroll"
import Logo from  "../assests/Logo.jpg"
import { motion} from "framer-motion"

const NavbarComp = () => {

     const [nav, setNav] = useState(true)

     const handleNavbar = () =>{
        setNav(!nav)
     }

  return (
        <motion.div
       
        className='w-full h-[80px] z-10  sticky'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1}} className='flex items-center'>
                 <h1 className='text-3xl lg:text-4xl font-bold mr-4 '><img src={Logo} alt='logo' width={40}></img> </h1>
             </motion.div>
              <motion.ul  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hidden md:flex items-center text-xl font-light '>
                 <li><Link className='cursor-pointer ' to="book" spy={true} smooth={true} offset={10} duration={700}><NavLink to='/UI'>UI</NavLink></Link></li>
                 <button className='px-7 py-2 rounded-3xl hover:underline underline-offset-4'>
                 <Link className='cursor-pointer' to="project" spy={true} smooth={true} offset={-150} duration={700}>Work</Link>
                 </button>
              </motion.ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration:1, delay:0.5}} className={nav ? "hidden" :  ` absolute bg-black text-white w-full h-[200vh] px-8 md:hidden `}>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="about" spy={true} smooth={true} offset={-110} duration={700}><NavLink to='/UI'>UI</NavLink></Link>
                 </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="project" spy={true} smooth={true} offset={-180} duration={700} >Work</Link>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link className='cursor-pointer ' to="book" spy={true} smooth={true} offset={10} duration={700}><NavLink to='/books'>Books</NavLink></Link>
                 </li>
              </motion.ul>
        
        </motion.div>
  )
}

export default NavbarComp;