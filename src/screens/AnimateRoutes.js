import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import  HeroSection  from "./HeroScreen";
import UIWorks from "./UIWorks";
import Work from "./Work";
import Cover  from "./Cover";
import Main from "./Main";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence  >
      <Routes key={location.pathname} location={location}>
       <Route path="/Ui" element={<UIWorks/>}/> 
        <Route path="/" element={<Main/>} />
        <Route path="/cover" element={<Cover/>}/> 
        <Route path="/work" element={<Work/>}/> 
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;