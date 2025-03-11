import Card2 from "./cards";

const Explore = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex gap-2 mt-8">
            <p className="bg-red-500 w-5 h-10 rounded-sm p-2 "></p>
            <p className="p-2 text-xl text-red-500 font-semibold">
              Our Products
            </p>
          </div>
        </div>
        <div className="font-semibold text-3xl">
          <h1>Explore Our Products</h1>
        </div>
        <br />
        <div className="container mx-auto grid grid-cols-4">
          {Products.map((product) => {
            return (
              <>
                <Card2
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  prices={product.prices}
                  review={product.review}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Explore;
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
  {
    id: "5",
    button: "30%",
    image: "Gamepad.png",
    title: "HAVIT HV-G96 Gamepad",
    price: "$ 120",
    prices: "$ 160",
    review: "***",
  },
  {
    id: "6",
    image: "Keyboard.png",
    title: "AK-900 Wired Keyboard",
    price: "$ 960",
    prices: "$ 1160",
    review: "***",
  },
  {
    id: "7",
    image: "Monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: "$ 370",
    prices: "$ 400",
    review: "***",
  },
  {
    id: "8",
    image: "Chair.png",
    title: "ONEX STC Compact S Series Fabric Gaming",
    price: "$ 375",
    prices: "$ 400",
    review: "***",
  },
];
export { Products };
