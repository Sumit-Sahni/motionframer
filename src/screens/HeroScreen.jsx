import React from 'react'
import { motion} from "framer-motion"
import me1 from "../assests/me1.png"
import Footer from './FooterScreen'
import { useRef } from "react";
import { useInView } from "framer-motion";
import NavbarComp from './NavbarComp';


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px) ",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          delay:"2"
        }}
      >
        {children}
      </span>
    </section>
  );
}


const HeroScreen = () => {
  return (
    <>
    <NavbarComp/>
    <motion.div  exit={{backgroundColor: "#666666", y:-80, opacity:0.2}} transition={{duration:1}} className='w-full h-full flex flex-col items-center justify-center'>
          <motion.div  className="flex flex-row  justify-center items-center rounded-full  mt-4 p-4  border  shadow-lg shadow-gray-500/60  ">
          <motion.img  initial={{opacity:0, y:-100}} animate={{y:0, opacity:1}} transition={{ duration:2, type:"keyframes", stiffness:120}}  src={me1} alt="me1" className=" w-52 sm:w-72  h-full rounded-full border border-gray-200  hover:shadow-2xl"/>
            </motion.div>

        <motion.div
                 initial={{y:60,opacity:0,}}
                 animate={{ once:"true", y:10, opacity:1 }}
                 transition={{delay:1, duration:1}}
                 whileInView={{textShadow: "8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)"}}
                  className='w-full h-full text-black py-6'>
                 <h1 className='text-center text-sm md:text-3xl font-playfair text-gray-500'>Hi! I am Sumit Sahni a UI designer</h1>
               <div className='w-full mx-auto sm:1/2 md:w-4/5 lg:w-3/5 xl:w-4/5'>
                 <h2 className='p-2 text-center text-3xl md:text-6xl font-playfair font-semibold text-gray-600'>Transforming ideas into interactive digital Realities</h2>  
               </div>
        </motion.div>

        <motion.div
                 initial={{opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1 ,delay:2}}
                 whileHover={{shadow: "8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25)"}}
                  className='w-[90%] mx-auto  sm:w-1/2 md:w-1/3 sm:mx-auto mt-10  text-center p-4 border border-1 hover:border-double  hover:shadow-2xl delay-550 hover:bg-gray-500 hover:text-white transition duration-700 ease-in-out mb-16 '>
               <h1>
                    <span className='w-96 '>
                    <p>Currently at Pune Maharashtra studying Master's in Computer Application, set to post graduate in May 2023.</p></span>
                 </h1>
                      <div className='p-4'></div> 
                 <h1>
                 <span className='w-96 '>
                    <p>I have made a life out of thinking (sometimes a bit too much) about how people come together and connect in the physical and digital worlds around them.</p>     
               </span>
                 </h1>
                    <div className='p-4'></div> 
                 <h1>
                    <span className='w-96 '>
                       <p>I believe that the projects I have worked on have been the highlight of my design journey. I have been influenced to constantly look for problems and design solutions for them; for challenges like these are what drive me to work. And I love every moment of the process.</p>
                   </span>
                 </h1>
                     <div className='p-4'></div>
                 <h1>
                    <span className='w-96 '>
                       <p>I aim towards combining my learnings of UI design  to integrate diverse perspectives and a collaborative approach to the product innovation process.</p>
                   </span>
                 </h1>
        </motion.div>
       
        <section className='w-full h-48 flex flex-col items-center justify-center  ' id='contact'>
          <Section>
             <div className=' xsm:w-3/5 lg:w-3/5 xl:w-1/2 mx-auto'>
                    <div className='text-xl md:text-3xl font-thin px-4 md:px-12 text-center '>
                       <p>
                       Thanks for checking out my work! 🙌🏻
                       tap to know more about <u><a href="/me" className='text-red-600 font-semibold' >me</a></u> or look at my <u><a href="https://drive.google.com/file/d/1lxEePzFNT4mQQsCDWHg9bBLsgTXiXSjc/view?usp=share_link" className='text-red-600 font-semibold'>resume!</a></u>
                       </p>
                    </div>
              </div>
              </Section>
        </section>
       
        <Footer/>
    </motion.div>
    </>
  )
}

export default HeroScreen