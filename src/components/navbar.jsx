import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="border-b-2">
        <nav className="flex justify-evenly p-4">
          <section className="font-bold  text-3xl">
            <div>
              <h1>Eclusive</h1>
            </div>
          </section>
          <section>
            <div className="flex gap-8 text-xl">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact us">Contact Us</NavLink>
              <NavLink to="/sign up">Sign Up</NavLink>
            </div>
          </section>
          <section>
            <div className="flex flex-row ">
              <div className="flex border-0  p-2 bg-slate-100">
                <input
                  type="text"
                  placeholder="what are you loooking ?"
                  name="search"
                  className="outline-0"
                />
                <img src="search.svg" className="w-10 h-7" />
              </div>

              <NavLink to="/heart">
                <img src="heart.svg" className="w-15 h-10" />
              </NavLink>
              <NavLink to="/cart">
                <img src="cart.svg" className="w-15 h-10" />
              </NavLink>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
