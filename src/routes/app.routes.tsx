import { createBrowserRouter } from "react-router-dom";

import { Home } from '../pages/Home'
import { Portfolio } from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/portifolio",
    element: <Portfolio />
  }
]);
