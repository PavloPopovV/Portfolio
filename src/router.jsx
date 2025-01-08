import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./constantes/path";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      {
        path: PATHS.HOME,
        element: <Home />,
      },
      {
        path: PATHS.ABOUT,
        element: <About />,
      },
      {
        path: PATHS.PROJECTS,
        element: <Projects />,
      },
    ],
  },
]);
