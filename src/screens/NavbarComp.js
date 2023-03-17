import React from 'react'
import { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from  "../assests/Logo.jpg"
import { motion} from "framer-motion"

const NavbarComp = () => {

     const [nav, setNav] = useState(true)
     const handleNavbar = () =>{
        setNav(!nav)
     }

  return (
        <div
          className='w-full h-[80px] z-10  sticky '>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1 ,delay:2}} className='flex items-center'>
                  <Link to="/"><img src={Logo} alt='logo' width={40}></img></Link>
             </motion.div>
              <motion.ul  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hidden md:flex items-center text-xl font-light mx-4 '>
                <Link className="mx-8" to='/Ui'>UI</Link>
                <Link to='/work'>work</Link>
              </motion.ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer "/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul  className={nav ? "hidden" :  ` absolute bg-black text-white w-full h-[800vh]  px-8 md:hidden text-3xl`}>
          <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                   <Link to="/Ui" className=' cursor-pointer'>UI</Link>
            </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link to="/work" className=' cursor-pointer'>Work</Link>                 
                 </li>
              </ul>
        
        </div>
  )
}

export default NavbarComp;