import Card2 from "./cards";

const Product = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex gap-2 mt-8">
            <p className="bg-red-500 w-5 h-10 rounded-sm p-2 "></p>
            <p className="p-2 text-xl text-red-500 font-semibold">This Month</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="font-semibold text-3xl">Best Selling Products</h1>
          </div>
          <div>
            <button
              onClick=""
              className="bg-red-500 rounded-sm p-2 text-white "
            >
              View All
            </button>
          </div>
        </div>
        <div className="container mx-auto flex flex-row gap-12">
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
      <div className="p-4"></div>
    </>
  );
};
export default Product;
const Products = [
  {
    id: "1",
    button: "30%",
    image: "north-coat.png",
    title: "The North Face North Down Hooded Jacket",
    price: "$ 140",
    prices: "$ 220",
    review: "***",
  },
  {
    id: "2",
    image: "gucci-bag.png",
    title: "Gucci Savoy Medium Duffle Bag",
    price: "$ 2,750",
    prices: "$ 2,980 ",
    review: "***",
  },
  {
    id: "3",
    image: "CPU-cooler.png",
    title: "Aorus Liquid Cooler",
    price: "$97",
    prices: "$115",
    review: "***",
  },
  {
    id: "4",
    image: "book-shelf.png",
    title: "Wood Desktop Shelf Small Bookshelf ",
    price: "$30",
    prices: "$60",
    review: "***",
  },
];
export { Products };
