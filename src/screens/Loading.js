import React from 'react'
import pic from "../assests/load.svg"

import { motion} from "framer-motion";


const Loading = () => {
  return (
    <motion.div
     exit={{scale:1.1, opacity:0}} transition={{duration:2,delay:2}}
     className='w-full h-[100vh] grid items-center justify-center'> 
         <div>
          <img src={pic} alt='pic' className='w-16 h-16' />
         </div>
        
    </motion.div>
  )
}

export default Loading