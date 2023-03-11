import React , {useState,  useEffect}from "react";
import {AnimatePresence, motion,} from "framer-motion"
import styled from "styled-components";
import boy from "../../assests/boy.jpg"
import popup from "../../assests/popup.mp3"



const PopContainers = styled.div`
   position:absolute;
   top:0;
   left:0;
   width:100%;
   height:100vh;
   background-color: rgba(0,0,0,0.7);
   display: flex;
   flex-direction:row
   justify-content:center
   transition: 400ms;
   opacity: 100px
   z-index:10
}

   align-items:center;
`
const InnerPop = styled.div`
    color:black;
    background-color: rgba(255,255,255,0.9);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;
    width:100%;
    height:110vh;
    margin:auto;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:15px;
    position:relative;
    z-index:10
  }
  
   
    h5{
      line-height:2rem;
      font-family: "Josefin Sans", "sans-serif";
    }
    
    @media (max-width:700px){
       width:100%;
       h5{
        line-height:1.5rem
      }
    }
  
   
`

const PopContainer = ({trigger, setFalse}) =>{
    const [triggers, setTriggers] = useState(false)
    const [value, setValue] = useState(true)
 
    const play = ()=>{
        new Audio(popup).play(value)
        value(false)
     }
   
       useEffect(()=>{
          setTimeout(()=>{
             setTriggers(true)
          },2000)
       },[])
   

    return(trigger)? (
      <PopContainers>
            <InnerPop >
             {
                <AnimatePresence>
                               {
                                 triggers ? (
                                   <motion.div
                                      initial={{x:-250,}}
                                      animate={{x:-10,}}
                                      transition={{delay:1, duration:1}}
                                      exit={{x:-250, delay:0, duration:0}}
                                      className='hidden  left-0 w-60 h-auto lg:flex flex-row items-center justify-between -bottom-2'>
                                       <motion.img 
                                         initial={{x:-120}}
                                         animate={{x:-10, rotate:[0,20]}}
                                         transition={{delay:2, duration:5, type:"spring", stiffness:300,damping:20}}
                                         src={boy} className='w-28 self-start relative -top-10  '
                                       />
                                       <div className='w-1/2 '>
                                         <h1 className='text-xl font-opensans text-center'>Hey!! There</h1>  
                                         <h1 className='text-sm font-opensans text-center'>Cover Letter</h1>  
                                         <button className='w-2 h-2 rounded-full text-slate-700 absolute -top-10 right-0 mx-3 cursor-pointer'onClick={()=>setFalse=(false)}>X</button>
                                       </div>      
                                   </motion.div>
                                 
                                 ) : null
                               }
                              </AnimatePresence>
             }
        </InnerPop>
      </PopContainers>
   ): ""
}

export default PopContainer