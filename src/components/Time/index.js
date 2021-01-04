import { useState } from "react";

function Time({ date }) {
  const [currentDate,setCurrentDate] = useState( new Date())

  const diffirent = (currentDate.getTime()/1000)-(date/1000)
  
  const days = Math.floor(diffirent/(86400))
  const hours = Math.floor(((diffirent - days*86400)/3600)+3)
  const minutes = Math.floor(((diffirent - days*86400-(hours-3)*3600))/60)

  setInterval(()=>{
    setCurrentDate(new Date())
  },60000)

  return <>{days} д {hours} ч {minutes} м</>;
}

export default Time;
