import Card from "../components/card";
import Header from "../components/header";
import List from "../components/list";
import Navbar from "../components/navbar";
import Carousel from "../components/slider";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Navbar />
        <div className="m-10 border-amber-950">
          <List />
          <Carousel />
        </div>
        <Card />
      </div>
    </>
  );
};
export default Home;
