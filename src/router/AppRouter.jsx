import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/pages/home/Home.jsx";
import Resources from "../components/pages/resources/Resources.jsx";
import Careers from "../components/pages/careers/Careers.jsx";
import RealEstate from "../components/pages/solutions/real-estate/RealEstate.jsx";
import Retail from "../components/pages/solutions/retail/Retail.jsx";
import FinanceService from "../components/pages/solutions/financial-service/FinanceService.jsx";
import NotFound from "../components/pages/404/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/real-estate",
        element: <RealEstate />,
      },
      {
        path: "/retail",
        element: <Retail />,
      },
      {
        path: "/finance-service",
        element: <FinanceService />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
