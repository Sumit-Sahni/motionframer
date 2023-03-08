import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import  HeroSection  from "./HeroScreen";
import UIWorks from "./UIWorks";

function AnimatedRoutes() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence onExitComplete={() => console.log("exit")} >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/UI" element={<UIWorks/>}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;