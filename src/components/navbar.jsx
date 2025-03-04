import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-2">
        <nav className="p-4 text-2xl grid grid-cols-3 justify-items-center  ">
          <section className="font-bold">
            <h1>Eclusive</h1>
          </section>
          <section className="grid grid-cols-4 gap-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact us">Contact Us</NavLink>
            <NavLink to="/sign up">Sign Up</NavLink>
          </section>
          <section className="flex justify-center gap-3 ">
            <NavLink to="search" className="flex">
              <input
                type="text"
                placeholder="what are you loooking ?"
                name="search"
              />
              <img src="search.svg" className="w-10 h-7" />
            </NavLink>
            <NavLink to="/heart">
              <img src="heart.svg" className="w-10 h-7" />
            </NavLink>
            <NavLink to="/cart">
              <img src="cart.svg" className="w-10 h-7" />
            </NavLink>
          </section>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
