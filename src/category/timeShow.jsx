import { useEffect, useState } from "react";

const TimeShow = () => {
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        day: now.getDay(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      });
    };

    const interval = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="font-normal text-sm ">
        <div className="flex flex-row gap-8 text-center">
          <div className=" bg-white text-black p-2 rounded-4xl">
            <p className="text-xl font-bold"> {time.hour}</p>
            Hours
          </div>
          <div className=" bg-white text-black p-2 rounded-4xl">
            <p className="text-xl font-bold"> {time.day}</p>
            Days
          </div>
          <div className=" bg-white text-black p-2 rounded-4xl">
            <p className="text-xl font-bold"> {time.minute}</p>
            Minutes
          </div>
          <div className=" bg-white text-black p-2 rounded-4xl">
            <p className="text-xl font-bold"> {time.second}</p>
            Seconds
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeShow;
