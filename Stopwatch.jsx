import React,{ useState,useRef } from "react";
import "./Stopwatch.css";
    
    const Stopwatch =()=> {
    const [time,setTime] = useState(0);
    const [isRunning, setIsRunning]= useState (false);
    const timeRef =useRef (null);
    
    const startTimer = ()=> {
        if(!isRunning ) {
           setIsRunning(true);
        timeRef.current =setInterval (()=> {
        setTime ((prev) => prev + 1);
         },1000);
       }
    };
    const stopTimer =()=> {
        if (isRunning) {
           setIsRunning (false);
         clearInterval (timeRef.current);
        }
    };
    const resetTimer = ()=> {
        setIsRunning (false);
        clearInterval (timeRef.current);
        setTime (0);
    };
  return (
      
      <div className ="Stopwatch">
            <h1> Stopwatch </h1>
            <div className= "time display">
                {Math.floor (time/3600).toString ().padStart (2,'0')}:
                {Math.floor ((time/60) % 60 ).toString ().padStart (2,'0')}:
                {(time % 60).toString ().padStart (2,'0')}
            </div>
          
          <div className="button">
             <button onClick ={startTimer}> Start </button>
             <button onClick ={stopTimer}> Stop </button>
             <button onClick ={resetTimer}> Reset </button>
          </div>
     </div>  
    );
}

export default Stopwatch;
 