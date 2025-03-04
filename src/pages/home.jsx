import Card from "../components/card";
import Footer from "../components/footer";
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
          <div className="flex flex-row divide-x-2 divide-black-500 gap-10 ml-70">
            <List />
            <Carousel />
          </div>
          <div className="grid grid-cols-4 container max-auto bg-slate-100 mt-4 ml-40">
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
    image: "Gamepad.jpg",
    title: "HAVIT HV-G96 Gamepad",
    price: "rs 10",
    review: "***",
  },
  {
    id: "2",
    image: "keyboard.avif",
    title: "AK-900 Wired Keyboard",
    price: "rs 10",
    review: "***",
  },
  {
    id: "3",
    image: "monitor.jpg",
    title: "IPS LCD Gaming Monitor",
    price: "rs 10",
    review: "***",
  },
  {
    id: "4",
    image: "chair.webp",
    title: "ONEX STC Compact S Series Fabric Gaming",
    price: "rs 10",
    review: "***",
  },
];
export { Products };
