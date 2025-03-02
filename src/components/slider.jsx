import Slider from "react-slick";
import { FaApple } from "react-icons/fa";
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
      <div className="grid grid-cols-2">
        <section className="bg-black text-white">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <FaApple className="text-5xl" />
                iPhone 14 Series
                <h1 className="font-semibold text-5xl">
                  Up to 10% Off Voucher
                </h1>
                <p className="underline text-3xl">Show Now</p>
              </div>
              <div>
                <img src="iphone.avif" alt="" />
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
