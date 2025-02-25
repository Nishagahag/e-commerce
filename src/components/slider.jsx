import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      
        <section>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
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
              </div>
              <div>
                <img src="" alt="" />
              </div>
            </Slider>
          </div>
        </section>
    
    </>
  );
};

export default Carousel;
