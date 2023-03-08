import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import  HeroSection  from "./HeroScreen";
import UIWorks from "./UIWorks";
import Work from "./Work";

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence  >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/Ui" element={<UIWorks/>}/> 
        <Route path="/work" element={<Work/>}/> 
        <Route path="/*" element={<Navigate to="/"/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;