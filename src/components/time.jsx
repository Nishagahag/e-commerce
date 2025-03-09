import React, { useState, useEffect } from "react";
import Card from "./card";

const TimeDisplay = () => {
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
      <div className="container mx-auto">
        <div>
          <div className="flex gap-2">
            <p className="bg-red-500 w-5 h-10 rounded-sm p-2 "></p>
            <p className="p-2 text-xl">Today</p>
          </div>
        </div>
        <div className="flex gap-12 font-semibold text-3xl">
          <h1>Flash Sales</h1>
          <div>
            <p className="font-normal text-xl">Days Hours Minutes Seconds</p>
            <p>
              {time.day}:{time.hour}:{time.minute}:{time.second}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 container">
          {Products.map((product) => {
            return (
              <Card
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                prices={product.prices}
                review={product.review}
              />
            );
          })}
        </div>
        <div>
          <button
            onClick=""
            className="text-2xl bg-red-500 text-white p-4 mt-4 ml-140 "
          >
            View all products
          </button>
        </div>
      </div>
    </>
  );
};

export default TimeDisplay;
const Products = [
  {
    id: "1",
    button: "30%",
    image: "Gamepad.png",
    title: "HAVIT HV-G96 Gamepad",
    price: "$ 120",
    prices: "$ 160",
    review: "***",
  },
  {
    id: "2",
    image: "Keyboard.png",
    title: "AK-900 Wired Keyboard",
    price: "$ 960",
    prices: "$ 1160",
    review: "***",
  },
  {
    id: "3",
    image: "Monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: "$ 370",
    prices: "$ 400",
    review: "***",
  },
  {
    id: "4",
    image: "Chair.png",
    title: "ONEX STC Compact S Series Fabric Gaming",
    price: "$ 375",
    prices: "$ 400",
    review: "***",
  },
];
export { Products };
