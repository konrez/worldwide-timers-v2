import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

function Clock({ timezone }) {
  const [currentTime, setCurrentTime] = useState(DateTime.now().setZone(timezone));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(DateTime.now().setZone(timezone));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  const getFormattedTime = () => {
    return currentTime.toFormat("HH:mm:ss");
  };

  return (
    <div className="Clock">
      <h2>{timezone}</h2>
      <p>{getFormattedTime()}</p>
    </div>
  );
}

export default Clock;