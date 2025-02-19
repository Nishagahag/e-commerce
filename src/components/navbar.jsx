import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <section>
            <h1>Eclusive</h1>
        </section>
        <section>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contactUs">Contact Us</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
        </section>
        <section>
            
        </section>
      </nav>
    </>
  );
};
export default Navbar;
