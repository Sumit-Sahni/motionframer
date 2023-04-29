import React from 'react'
import pic from "../assests/load2.svg"
import india from "../assests/india.png"
import { motion} from "framer-motion";


const Loading = () => {
  return (
    <motion.div
     exit={{scale:1.1, opacity:0}} transition={{duration:2,delay:2}}
     className='w-full h-[100vh] grid items-center justify-center bg-[#0a192f]'> 
         <div className='flex flex-col items-center relative'>
            <div className=' absolute top-10 bg-[#0a192f]'>
                <img src={india} alt='india' className='w-20 pb-1  bg-[#0a192f] '/>
             </div>
            <img src={pic} alt='pic' className='w-32   bg-[#0a192f]' />
         </div>
        
    </motion.div>
  )
}

export default Loading