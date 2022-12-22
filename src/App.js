import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMain from "./Layouts/LayoutMain";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain></LayoutMain>,
      children: [
        {
          path: "",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
