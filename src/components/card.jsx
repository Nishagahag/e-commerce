import Slider from "react-slick";

const Card = (prop) => {
  
  return (
    <>
      <div className=" gap-10 m-2">
        <div className="p-4 text-xl mt-4">
         
            <div className="container bg-slate-200 w-fit ">
              <button
                onClick=""
                className="bg-red-500 text-white m-2 p-1 rounded-sm w-20 "
              >
                40%
              </button>
              <img src={prop.image} alt="" className="h-70 w-90 " />
            </div>
            <div className="mt-4 ">
              <h1>{prop.title}</h1>
              <div className="flex gap-2 text-xl">
                <p className="text-red-500">{prop.price}</p>
                <p className="line-through">{prop.prices}</p>
              </div>
              <h1 className="">{prop.review}</h1>
            </div>
         
        </div>
      </div>
    </>
  );
};
export default Card;
