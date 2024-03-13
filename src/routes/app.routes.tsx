import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/Home'
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Portfolio } from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  }
]);
