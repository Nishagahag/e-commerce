import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

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
        <div className="flex flex-row">
          <img src="ps5.jpg" />
          <img src="woman.jpg" />
          <img src="" />
        </div>
        <br />
        <div className=" flex flex-row justify-evenly">
          <TbTruckDelivery className="h-10 w-12 bg-black text-white rounded-full" />
          <TfiHeadphoneAlt className="h-10 w-12 bg-black text-white rounded-full" />
          <AiOutlineSafetyCertificate className="h-10 w-12 bg-black text-white rounded-full" />
        </div>
      </div>
    </>
  );
};
export default NewArrival;
