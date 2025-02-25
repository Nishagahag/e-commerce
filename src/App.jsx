import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";

import ContactUs from "./pages/contactUs";
import SignUp from "./pages/signUp";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/contact us",
    element: (
      <>
        <ContactUs />
      </>
    ),
  },
  {
    path: "/sign up",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
]);
