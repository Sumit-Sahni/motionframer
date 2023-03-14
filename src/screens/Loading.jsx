import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


 const Loading =() => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, 100, { duration: 10 });
      return animation.stop;
    }, []);

  return (
    <div className='w-full h-[100vh] grid items-center justify-center'>
        <motion.h1 
         className='text-8xl font-bold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'
        >{rounded}</motion.h1>
    </div>
  )
}

export default Loading