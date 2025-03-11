import { IoGameControllerOutline } from "react-icons/io5";
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiHeadphone } from "react-icons/tfi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Browse = () => {
  return (
    <>
      <div className="container mx-auto">
        <div>
          <div className="flex gap-2 mt-8">
            <p className="bg-red-500 w-5 h-10 rounded-sm p-2 "></p>
            <p className="p-2 text-xl text-red-500 font-semibold">categories</p>
          </div>
        </div>
        <div className="font-semibold text-3xl">
          <h1>Browse by Category</h1>
        </div>
        <br />
        <div className="container flex flex-row gap-8 ">
          <div className="border-2 p-12">
            <SlScreenSmartphone className="h-12 w-15" />
            <p>Phones</p>
          </div>

          <div className="border-2 p-12">
            <HiOutlineDesktopComputer className="h-12 w-15" />
            <p>Computer</p>
          </div>

          <div className="border-2 p-12">
            <BsSmartwatch className="h-12 w-15" />
            <p>SmartWatch</p>
          </div>

          <div className="border-2 p-12">
            <IoCameraOutline className="h-12 w-15" />
            <p>Camera</p>
          </div>

          <div className="border-2 p-12">
            <TfiHeadphone className="h-12 w-15" />
            <p>Headphones</p>
          </div>
          <div className="border-2 p-12">
            <IoGameControllerOutline className="h-12 w-15" />
            <p>Gaming</p>
          </div>
        </div>
      </div>
      <div className=" container mx-auto border-b-2 p-4"></div>
    </>
  );
};
export default Browse;
