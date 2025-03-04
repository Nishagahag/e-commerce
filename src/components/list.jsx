import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <>
      <div className=" p-7 text-xl">
        <section className="">
          <div className="flex mb-3">
            <h1>Women Clothes</h1>
            <p className="p-2">
              <NavLink to="/women">
                <MdOutlineKeyboardArrowRight />
              </NavLink>
            </p>
          </div>
          <div className="flex mb-3">
            <h1>Men Clothes</h1>
            <p className="p-2">
              <NavLink to="/men">
                <MdOutlineKeyboardArrowRight />
              </NavLink>
            </p>
          </div>
          <div className="mb-3">Electronics</div>
          <div className="mb-3">Home</div>
          <div className="mb-3">Home</div>
          <div className="mb-3">Home</div>
          <div className="mb-3">Medicine</div>
          <div className="mb-3">Sports</div>
          <div className="mb-3">Baby</div>
          <div className="mb-3">Grocery</div>
          <div className="mb-3">Health</div>
        </section>
      </div>
    </>
  );
};
export default List;
