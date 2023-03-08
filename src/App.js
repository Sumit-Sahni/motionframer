import React, { StrictMode } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from './screens/AnimateRoutes';



function App() {
    return(
        <StrictMode>
            <Router>
                <AnimatedRoutes/>
            </Router>
        </StrictMode>
    )
 
}

export default App;
