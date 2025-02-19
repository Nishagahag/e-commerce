import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Sign from "./pages/signUp";

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
        <Contact />
      </>
    ),
  },
  {
    path: "/sign up",
    element: (
      <>
        <Sign />
      </>
    ),
  },
]);
