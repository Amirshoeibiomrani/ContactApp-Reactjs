import  { useEffect, useState } from 'react'

const Clock = () => {
    const d = new Date();
const [currentTime,setCurrentTime]=useState('');
useEffect(()=>{
const date=d.getHours()+' : '+d.getMinutes()+' : '+d.getSeconds();
const timer = setInterval(()=>{setCurrentTime(date);
},1000)
return ()=>clearInterval(timer);
},[currentTime])

  return (
    <div>{currentTime}</div>
  )
}

export default Clock