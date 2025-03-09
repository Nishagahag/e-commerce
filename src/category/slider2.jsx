import { useEffect, useState } from "react";
import Slider from "react-slick";

const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className=" container mx-auto my-auto">
        <section className="bg-black text-white ">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="mt-10 ml-15">
                <p className="p-2 text-xl text-green-500 font-semibold">
                  categories
                </p>
                <br />
                <div>
                  <h1 className="font-semibold text-4xl">
                    Enchance Your
                    <p>Music Experience</p>
                  </h1>
                </div>
                <br />
                <button
                  onClick=""
                  className="bg-green-400 rounded-sm p-2 text-white"
                >
                  View All
                </button>
              </div>
              <div>
                <img src="jbl.png" alt="" className="" />
              </div>
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carousel2;

const Time = () => {
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
      <div className="font-normal text-sm">
        <div className="flex flex-row gap-4">
          <div>
            Days
            <div className="flex flex-row gap-8 font-bold">
              <p className="text-3xl"> {time.day}</p>
              <p className="text-2xl text-red-400 ">:</p>
            </div>
          </div>
          <div>
            Hours
            <div className="flex flex-row gap-8 font-bold">
              <p className="text-3xl"> {time.hour}</p>
              <p className="text-2xl text-red-400 ">:</p>
            </div>
          </div>
          <div>
            Minutes
            <div className="flex flex-row gap-8 font-bold">
              <p className="text-3xl"> {time.minute}</p>
              <p className="text-2xl text-red-400 ">:</p>
            </div>
          </div>
          <div>
            Seconds
            <div>
              <p className="text-3xl font-bold"> {time.second}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Time };
