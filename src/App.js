import React, { useState, useEffect } from 'react';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import { HeroSection } from './screens/Main';

function App() {

    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection/>}/>
        </Routes>
      </BrowserRouter>
    )
 
}

export default App;
