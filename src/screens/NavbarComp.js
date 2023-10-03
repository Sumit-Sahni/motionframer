import React from 'react'
import { useState , useEffect} from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from  "../assests/Logo2.jpg"
import { motion} from "framer-motion"

const NavbarComp = () => {

     const [nav, setNav] = useState(true)
     const handleNavbar = () =>{
        setNav(!nav)
     }
     
     const [isTopOfPage, setIsTopOfPage] = useState(true)

     useEffect(()=>{
         const handleScroll = () =>{
            if(window.scrollY === 0){
               setIsTopOfPage(true);
            }
            if(window.scrollY !==0){
               setIsTopOfPage(false);
            }
         }
         window.addEventListener('scroll', handleScroll);
         return ()=>window.addEventListener('scroll', handleScroll);
     },[])
    
    const navbarbackground = isTopOfPage ? "" : " bg-[#0e1423] grop-shadow-xl transition durations-500 delay-200"

  return (
        <div
          className={`${navbarbackground} w-full h-[80px] z-10  fixed  bg-[#0a192f] text-white`}>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1 ,delay:1}} className='flex items-center'>
                  <Link to="/"><img  src={Logo} alt='logo' width={40}></img></Link>
             </motion.div>
              <motion.ul  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='hidden md:flex items-center text-xl font-light mx-4 '>
                <h1><a href="https://feeff6b9.evogym-bfv.pages.dev/"  target="_blank" className='text-sm'>React Js</a></h1>
                <Link className="mx-8 text-sm" to='/Ui'>Ui</Link>
                <Link to='/cover' className='text-sm'>Cover</Link>
                <Link to='/sql' className='text-sm mx-6'>Sql</Link>

                 <button class="mx-4 hover:bg-gray-900 hover:border-dotted  border-spacing-1 font-semibold text-[#64ffda] py-2 px-2 border-2 border-[#64ffda] rounded">
                   <Link to="https://drive.google.com/file/d/1GoT5y92ZlqxENP_eZqJOIiGVg3k6J78N/view?usp=sharing" target="_blank" className='text-red-600 font-semibold'>resume</Link>
                  </button>
              </motion.ul>
              <div className=' md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer "/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul  className={nav ? "hidden" :  ` absolute bg-[#0a192f] text-white w-full h-[800vh]  px-8 md:hidden text-3xl`}>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                     <Link to="/Ui" className=' cursor-pointer'>UI</Link>
                  </li>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <Link to='/cover' >Cover</Link>
                 </li>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                    <Link to='/Sql' >Sql</Link>
                 </li>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                  <button class=" hover:bg-gray-900 hover:border-dotted  border-spacing-1 font-semibold text-[#ffffff] rounded">
                   <Link to="https://drive.google.com/file/d/1GoT5y92ZlqxENP_eZqJOIiGVg3k6J78N/view?usp=sharing" className='text-red-600 font-semibold'>resume</Link>
                  </button>      
                 </li>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                     <h1><a href="https://e22929cd.typescript-f18.pages.dev/" target="_blank" className=''>React Js</a></h1>
                  </li>
         </ul>
        
        </div>
  )
}

export default NavbarComp;