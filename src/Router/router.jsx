import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Contact from "../Home/Contact";
import About from "../Home/About";
import Skill from "../Home/Skill";
import Projects from "../Home/Projects";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/skill",
            element: <Skill></Skill>
        },
        {
            path: "/projects",
            element: <Projects></Projects>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router;