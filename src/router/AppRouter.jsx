import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../components/pages/home/Home.jsx";
import Careers from "../components/pages/careers/Careers.jsx";
import RealEstate from "../components/pages/solutions/real-estate/RealEstate.jsx";
import Retail from "../components/pages/solutions/retail/Retail.jsx";
import FinanceService from "../components/pages/solutions/financial-service/FinanceService.jsx";
import Healthcare from "../components/pages/solutions/healthcare/Healthcare.jsx";
import Transport from "../components/pages/solutions/transport-logistics/Transport.jsx";
import CityGovern from "../components/pages/solutions/city-governance/CityGovern.jsx";
import Sports from "../components/pages/solutions/sports/Sports.jsx";
import Education from "../components/pages/solutions/education/Education.jsx";
import NotFound from "../components/pages/404/NotFound.jsx";
import Visualize from "../components/pages/expertise/visualisation/Visualize.jsx";
import Analytics from "../components/pages/expertise/analytics/Analytics.jsx";
import DataEnch from "../components/pages/expertise/data-enrichment/DataEnch.jsx";
import DataEngg from "../components/pages/expertise/data-engineering/DataEngg.jsx";
import BIntelligence from "../components/pages/expertise/business-intelligence/BIntelligence.jsx";
import MktAnalysis from "../components/pages/expertise/market-analysis/MktAnalysis.jsx";
import AIML from "../components/pages/expertise/ai-ml/AIML.jsx";
import Dev from "../components/pages/expertise/development/Dev.jsx";
import Blogs from "../components/pages/resources/blog/Blogs.jsx";
import CaseStudies from "../components/pages/resources/case-studies/CaseStudies.jsx";
import TCase from "../components/pages/resources/TCase.jsx";
import TBlog from "../components/pages/resources/TBlog.jsx";
import TPart from "../components/pages/resources/TPart.jsx";
import TTut from "../components/pages/resources/TTut.jsx";

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
        path: "/healthcare",
        element: <Healthcare />,
      },
      {
        path: "/transport-logistics",
        element: <Transport />,
      },
      {
        path: "/city-governance",
        element: <CityGovern />,
      },
      {
        path: "/sports",
        element: <Sports />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/visualize",
        element: <Visualize />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/data-enrichment",
        element: <DataEnch />,
      },
      {
        path: "/data-engineering",
        element: <DataEngg />,
      },
      {
        path: "/business-intelligence",
        element: <BIntelligence />,
      },
      {
        path: "/market-analysis",
        element: <MktAnalysis />,
      },
      {
        path: "/ai-and-ml",
        element: <AIML />,
      },
      {
        path: "/development",
        element: <Dev />,
      },
      {
        path: "/blogs",
        element: <TBlog />,
      },
      {
        path: "/case-studies",
        element: <TCase />,
      },
      {
        path: "/partners",
        element: <TPart />,
      },
      {
        path: "/tutorials",
        element: <TTut />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
