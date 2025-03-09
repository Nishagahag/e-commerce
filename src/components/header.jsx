import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className=" bg-black text-white flex justify-around p-4 ">
        <div className="container flex justify-evenly">
          <div className="flex gap-2">
            Summer Sale For All Swim Suits And express Delivery-OFF 50%!
            <p className="underline font-semibold">ShopNow</p>
          </div>
          <div className="flex gap-2">
            English
            <IoIosArrowDown className="size-6" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
