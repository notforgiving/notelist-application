import { useState } from "react";

function Time({ date }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentDateValid = Math.floor(currentDate.getTime() / 1000) + 3 * 3600;
  const dateValid = Math.floor(date)+ 3 * 3600;

  const diffirent = currentDateValid - dateValid;

  const days = Math.floor(diffirent / 86400);
  const hours = Math.floor((diffirent - days * 86400) / 3600);
  const minutes = Math.floor(
    (diffirent - days * 86400 - (hours) * 3600) / 60
  );

  setInterval(() => {
    setCurrentDate(new Date());
  }, 60000);

  return (
    <>
      {days === 0 ? `` : `${days} д `}
      {hours === 0 ? `` : `${hours} ч `}
      {minutes} м
    </>
  );
}

export default Time;
