import Browse from "../category/browse";
import Product from "../category/bselling";
import Card2 from "../category/cards";
import Explore from "../category/explore";
import NewArrival from "../category/newArrival";
import Carousel2, { Time } from "../category/slider2";
import Footer from "../components/footer";
import Header from "../components/header";
import List from "../components/list";
import Navbar from "../components/navbar";
import Carousel from "../components/slider";
import TimeDisplay from "../components/time";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Header />
          <Navbar />
          <div className="flex flex-row divide-x-2 divide-black-500 gap-10 ml-70 mb-20">
            <List />
            <Carousel />
          </div>
          <TimeDisplay />
          <Browse />
          <Product />

          <Carousel2 />
          <Explore />
          <NewArrival />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
