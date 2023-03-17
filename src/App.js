import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from './screens/AnimateRoutes';
import Loading from "./screens/Loading"


const App = ()=> {
  const[trigger, setTrigger] = useState(true)

   useEffect(()=>{
      setTimeout(()=>{
         setTrigger(false)
      },4500)
   },[])
    return(
      
       <Router>
        {
          trigger?(
            <Loading/>
          ):<AnimatedRoutes/>
        }
       </Router>
    )
 
}

export default App;
