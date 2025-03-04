const Card = (prop) => {
  return (
    <>
    <div>
      <div className="justify-items-center p-20">
        <div className="">
          <img src={prop.image} />
          <h1>{prop.title}</h1>
          <h1>{prop.price}</h1>
          <h1>{prop.review}</h1>
        </div>
      </div>
      </div>
    </>
  );
};
export default Card;
