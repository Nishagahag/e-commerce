import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import List from "../components/list";
import Navbar from "../components/navbar";
import Carousel from "../components/slider";
import { TimeComponent } from "../components/time";

const Home = () => {
  return (
    <>
      <div className="">
        <div>
          <Header />
          <Navbar />
          <div className="flex flex-row divide-x-2 divide-black-500 gap-10 ml-70">
            <List />
            <Carousel />
          </div>
          <div>
            <button
              onClick=""
              className="bg-red-500 ml-75 text-3xl w-2 font-semibold rounded-sm p-2 "
            >
              <br />
              <h1 className="">Today</h1>
            </button>

            <h1 className="text-3xl  ml-75 mt-8 mb-8 font-semibold">
              Flash Sales
            </h1>
            <TimeComponent />
            <div className="grid grid-cols-4 container mx-auto ">
              {Products.map((product) => {
                return (
                  <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    review={product.review}
                  />
                );
              })}
            </div>
            <button
              onClick=""
              className="text-2xl bg-red-500 text-white p-4 mt-4 ml-240 "
            >
              View all products
            </button>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;

const Products = [
  {
    id: "1",
    button: "30%",
    image: "Gamepad.png",
    title: "HAVIT HV-G96 Gamepad",
    price: "rs 10",
    review: "***",
  },
  {
    id: "2",
    image: "Keyboard.png",
    title: "AK-900 Wired Keyboard",
    price: "rs 10",
    review: "***",
  },
  {
    id: "3",
    image: "Monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: "rs 10",
    review: "***",
  },
  {
    id: "4",
    image: "Chair.png",
    title: "ONEX STC Compact S Series Fabric Gaming",
    price: "rs 10",
    review: "***",
  },
];
export { Products };
