import { useState, useEffect } from "react";

const TimeComponent = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const totalSeconds = Math.floor(currentDate.getTime() / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <p>Days:{time.days}</p>
        <p>Hours:{time.hours}</p>
        <p>Minutes:{time.minutes}</p>
        <p>Seconds:{time.minutes}</p>
      </div>
    </>
  );
};
export { TimeComponent };
