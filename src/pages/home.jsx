import Header from "../components/header";
import List from "../components/list";
import Navbar from "../components/navbar";
import Carousel from "../components/slider";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Header />
          <Navbar />
          <div className="grid grid-cols-2">
            <List />
            <Carousel />
          </div>
        </div>         
      </div>
    </>
  );
};
export default Home;
