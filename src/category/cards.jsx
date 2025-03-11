import StarRating from "../components/starRate";

const Card2 = (prop) => {
  return (
    <>
      <div className=" gap-10 m-2">
        <div className="p-4 text-xl mt-4">
          <div className="container bg-slate-200 w-fit gap-2 flex">
            <img src={prop.image} alt="" className="h-50 w-70 " />
            <div className="flex flex-col  gap-2 p-2 w-fit ">
              <div className=" bg-white rounded-4xl">
                <button onClick="">
                  <img src="heart.svg" alt="" className="w-8 h-7 p-1" />
                </button>
              </div>
              <div className="  bg-white rounded-4xl ">
                <button onClick="">
                  <img src="eye.svg" alt="" className="w-8 h-7 p-1 " />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 ">
            <h1>{prop.title}</h1>
            <div className="flex gap-2 text-xl">
              <p className="text-red-500">{prop.price}</p>
              <p className="line-through">{prop.prices}</p>
            </div>
            <div className="flex flex-row gap-2">
              <h1 className="">{prop.review}</h1>
              <StarRating />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card2;
