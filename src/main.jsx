import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/pages/home/Home.jsx";
import Expertise from "./components/pages/expertise/Expertise.jsx";
import Products from "./components/pages/products/Products.jsx";
import Resources from "./components/pages/resources/Resources.jsx";
import Careers from "./components/pages/careers/Careers.jsx";
import RealEstate from "./components/pages/expertise/real-estate/RealEstate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/products",
        element: <Products />,
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
