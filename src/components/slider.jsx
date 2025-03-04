import Slider from "react-slick";
import { FaApple } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Carousel = () => {
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
      <div className="grid grid-cols-2 mt-10">
        <section className="bg-black text-white">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="mt-20 ml-15">
                <div>
                  <h1 className="flex">
                    <FaApple className="text-5xl" />
                    <p className="p-4">iPhone 14 Series</p>
                  </h1>
                </div>
                <br />
                <div>
                  <h1 className="font-semibold text-5xl">
                    Up to 10%
                    <p>Off Voucher</p>
                  </h1>
                </div>
                <br />
                <div className="flex gap-2 text-2xl">
                  <h1 className="underline">Shop Now</h1>
                  <p className="p-1 ">
                    <NavLink to="/shop">
                      <IoArrowForwardSharp />
                    </NavLink>
                  </p>
                </div>
              </div>
              <div>
                <img src="iphone.avif" alt="" className="size-96" />
              </div>

              {/* <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
              </div> */}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default Carousel;
