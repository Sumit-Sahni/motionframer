import Logo from "../assests/Logo2.jpg"
import {motion } from "framer-motion"
import {Link } from 'react-router-dom'

 const Sql = () => {
  return (
    <>
      <div
          className='w-full h-[80px] z-10  sticky bg-[#0a192f]'>
          <div className='px-12 flex justify-between items-center w-full h-full'>
             <motion.div initial={{x:-100}} animate={{x:0}} transition={{duration:1}} className='flex items-center'>
                  <Link to="/"><img src={Logo} alt='logo' width={40}></img></Link>
             </motion.div>
          </div>
      </div>

      <h1 className=" animate-bounce text-2xl p-4 ">In Pregress....</h1>
      
    </>
  )
}


export default Sql