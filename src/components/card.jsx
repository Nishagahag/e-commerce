const Card = (prop) => {
  return (
    <>
      <div className=" gap-10 m-2 ">
        <div className="p-4 text-xl mt-4">
          <div className="container bg-slate-200">
            <button
              onClick=""
              className="bg-red-500 text-white m-2 p-1 rounded-sm w-20 "
            >
              40%
            </button>
            <img src={prop.image} alt="" className="h-70 w-90 " />
          </div>
          <div className="mt-4">
            <h1>{prop.title}</h1>
            <div className="flex gap-1">
              <p>{prop.price}</p>
              <h1 className="line-through">{prop.price}</h1>
            </div>
            <h1 className="">{prop.review}</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
