import { useState, useRef } from "react"

const Stopwatch = () => {
const [running, setRunning]=useState(false);
const[time, setTime]=useState(0);
const intervalRef=useRef();
// function for watch to start
const StartStopWatch=()=>{
  if(running){
    clearInterval(intervalRef.current)
  }
  else{
    const startTime=Date.now()-time;
    intervalRef.current=setInterval(()=>{
      setTime(Date.now()-startTime)
    }, 10)
  }
  setRunning(!running)
}
const resetWatch=()=>{
  clearInterval(intervalRef.current)
  setRunning(false)
  setTime(0)
}
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="text-4xl mb-4">
        {formatTime(time)}
        <button onClick={StartStopWatch}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          {running? 'pause': 'start'}
        </button>
        <button onClick={resetWatch}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Reset
        </button>
      </div>
      
    </div>
  )
}
const formatTime=(time)=>{
 const padZero=(num)=>(num<10? 0 + num:num);
 const minutes=padZero(Math.floor(time/6000) )
 const seconds=padZero(Math.floor((time % 6000)/100))
 const milliseconds=padZero(time%100)
 return minutes+':' +seconds + ':' +milliseconds
}
export default Stopwatch
