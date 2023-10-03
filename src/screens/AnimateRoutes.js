import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState , useEffect} from 'react'
import { AnimatePresence } from "framer-motion";
import  HeroSection  from "./HeroScreen";
import UIWorks from "./UIWorks";
import Work from "./Work";
import Cover  from "./Cover";
import Main from "./Main";
import  Sql from "./Sql";

function AnimatedRoutes() {
  const location = useLocation();
     
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
  return (
    <AnimatePresence  >
      <Routes key={location.pathname} location={location}>
       <Route path="/Ui" element={<UIWorks isTopOfPage={isTopOfPage}/>}/> 
        <Route path="/" element={<Main/>} />
        <Route path="/cover" element={<Cover/>}/> 
        <Route path="/work" element={<Work/>}/> 
        <Route path="/*" element={<Navigate to="/"/>}/>
        <Route path="/sql" element={<Sql/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;