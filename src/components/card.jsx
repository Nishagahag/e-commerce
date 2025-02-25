const Card = () => {
  return (
    <>
      {Product.map((product) => (
        <>
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          review={product.review}
        </>
      ))}
    </>
  );
};
export default Card;

const Product = [
  {
    id: "",
    image: "",
    title: "",
    price: "",
    review: "",
  },
  {
    id: "",
    image: "",
    title: "",
    price: "",
    review: "",
  },
  {
    id: "",
    image: "",
    title: "",
    price: "",
    review: "",
  },
  {
    id: "",
    image: "",
    title: "",
    price: "",
    review: "",
  },
];
export { Product };
