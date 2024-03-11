import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/Home'
import { Portfolio } from "../pages/Portfolio";
import { Contact } from "../pages/Contact";

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
  }
]);
