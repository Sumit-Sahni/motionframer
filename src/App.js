import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from './screens/AnimateRoutes';


const App = ()=> {
    return(
       <Router>
         <AnimatedRoutes/>
       </Router>
    )
 
}

export default App;
