import "./App.css";
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import LayoutMain from "./Layouts/LayoutMain";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact/Contact";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProjectDetails from "./pages/projects/ProjectDetails";

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
          path: "/projects/:id",
          loader: ({ params }) =>
            fetch(
              `https://project-server-six.vercel.app/projects/${params.id}`
            ),
          element: <ProjectDetails></ProjectDetails>,
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
      <ToastContainer
        className="w-50"
        position="top-right"
        autoClose={3000}
      ></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
