import React from 'react';
import {BrowserRouter as Router, } from 'react-router-dom';
import AnimatedRoutes from './screens/AnimateRoutes';



function App() {
    return(
     <Router>
            <AnimatedRoutes/>
     </Router>
    )
 
}

export default App;
