import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import  HeroSection  from "./HeroScreen";
import UIWorks from "./UIWorks";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence onExitComplete >
      <Routes key={location} location={location}>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/UI" element={<UIWorks/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;