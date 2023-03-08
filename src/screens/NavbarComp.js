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
        <div
          className='w-full h-[80px] z-10  sticky'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1 ,delay:1}} className='flex items-center'>
                  <NavLink to="/"><img src={Logo} alt='logo' width={40}></img></NavLink>
             </motion.div>
              <motion.ul  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hidden md:flex items-center text-xl font-light '>
                <NavLink to='/Ui'>UI</NavLink>
                <NavLink to='/work'>work</NavLink>
              </motion.ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <motion.ul initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration:1, delay:0.5}} className={nav ? "hidden" :  ` absolute bg-black text-white w-full h-[200vh] px-8 md:hidden `}>
                  <NavLink to={"/Ui"}>UI</NavLink>
              </motion.ul>
        
        </div>
  )
}

export default NavbarComp;