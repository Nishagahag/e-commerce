import { NavLink } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
// import { Field } from "formik";
const Navbar = () => {
  return (
    <>
      <nav className="p-4 text-2xl grid grid-cols-3 justify-items-center">
        <section>
          <h1>Eclusive</h1>
        </section>
        <section className="grid grid-cols-4 gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact us">Contact Us</NavLink>
          <NavLink to="/sign up">Sign Up</NavLink>
        </section>
        <section className="flex justify-center gap-3 ">
          <NavLink to="search" className={"flex"}>
            {/* <Field
              type="search"
              placeholder="What do you need?"
              name="search"
            /> */}
            <IoSearchOutline className="text-2xl" />
          </NavLink>
          <NavLink to="/like">
            <IoIosHeartEmpty className="text-3xl" />
          </NavLink>
          <NavLink to="/cart">
            <IoCartOutline className="text-3xl" />
          </NavLink>
        </section>
      </nav>
    </>
  );
};
export default Navbar;
