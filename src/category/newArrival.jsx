import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import ImageWithText from "./imgTxt";

const NewArrival = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex gap-2 mt-8">
            <p className="bg-red-500 w-5 h-10 rounded-sm p-2 "></p>
            <p className="p-2 text-xl text-red-500 font-semibold">Featured</p>
          </div>
        </div>
        <div className="font-semibold text-3xl">
          <h1>New Arrival</h1>
        </div>
        <br />
        <div>
          <ImageWithText />
        </div>
        <br />
        <div className=" flex flex-row gap-12">
          <div className="">
            <div className="justify-items-center p-4">
              <div className=" outline-0 bg-slate-200 p-3 w-fit rounded-4xl">
                <TbTruckDelivery className="h-10 w-12 bg-black text-white rounded-full " />
              </div>
            </div>
            <h1 className="font-bold text-2xl">FREE AND FAST DELIVERY</h1>
            <h1>free delivery fo all orders over $140 </h1>
          </div>
          <div>
            <div className="justify-items-center p-4">
              <div className=" outline-0 bg-slate-200 p-3 w-fit rounded-4xl">
                <TfiHeadphoneAlt className="h-10 w-12 bg-black text-white rounded-full" />
              </div>
            </div>

            <h1 className="font-bold text-2xl">24/7 CUSTOMER SERVICE</h1>
            <h1>Friendly 24/7 customer support</h1>
          </div>
          <div>
            <div className="justify-items-center p-4">
              <div className=" outline-0 bg-slate-200 p-3 w-fit rounded-4xl">
                <AiOutlineSafetyCertificate className="h-10 w-12 bg-black text-white rounded-full" />
              </div>
            </div>

            <h1 className="font-bold text-2xl">MONEY BACK GUARANTEE</h1>
            <h1>We return money with in 30 days</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewArrival;
