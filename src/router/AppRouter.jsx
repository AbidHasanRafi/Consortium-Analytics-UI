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
import Blog01 from "../components/pages/resources/blog/components/blog-01/Blog01.jsx";
import Blog02 from "../components/pages/resources/blog/components/blog-02/Blog02.jsx";
import Blog03 from "../components/pages/resources/blog/components/blog-03/Blog03.jsx";
import Blog04 from "../components/pages/resources/blog/components/blog-04/Blog04.jsx";
import Blog05 from "../components/pages/resources/blog/components/blog-05/Blog05.jsx";
import Blog06 from "../components/pages/resources/blog/components/blog-06/Blog06.jsx";
import Partners from "../components/pages/resources/partners/Partners.jsx";
import GarmentsIndustry from "../components/booklet-viewer/garments-industry/GarmentsIndustry.jsx";
import CaseStudy01 from "../components/pages/resources/case-studies/components/case-studies-01/CaseStudy01.jsx";
import CaseStudy02 from "../components/pages/resources/case-studies/components/case-studies-02/CaseStudy02.jsx";
import CaseStudy03 from "../components/pages/resources/case-studies/components/case-studies-03/CaseStudy03.jsx";
import CaseStudy04 from "../components/pages/resources/case-studies/components/case-studies-04/CaseStudy04.jsx";
import CaseStudy05 from "../components/pages/resources/case-studies/components/case-studies-05/CaseStudy05.jsx";
import CaseStudy06 from "../components/pages/resources/case-studies/components/case-studies-06/CaseStudy06.jsx";
import Blog07 from "../components/pages/resources/blog/components/blog-07/Blog07.jsx";
import Blog08 from "../components/pages/resources/blog/components/blog-08/Blog08.jsx";
import Blog09 from "../components/pages/resources/blog/components/blog-09/Blog09.jsx";
import Blog10 from "../components/pages/resources/blog/components/blog-10/Blog10.jsx";
import CaseStudy07 from "../components/pages/resources/case-studies/components/case-studies-07/CaseStudy07.jsx";
import CaseStudy08 from "../components/pages/resources/case-studies/components/case-studies-08/CaseStudy08.jsx";
import CaseStudy09 from "../components/pages/resources/case-studies/components/case-studies-09/CaseStudy09.jsx";
import CaseStudy10 from "../components/pages/resources/case-studies/components/case-studies-10/CaseStudy10.jsx";
import CaseStudy11 from "../components/pages/resources/case-studies/components/case-studies-11/CaseStudy11.jsx";
import CaseStudy12 from "../components/pages/resources/case-studies/components/case-studies-12/CaseStudy12.jsx";
import CaseStudy13 from "../components/pages/resources/case-studies/components/case-studies-13/CaseStudy13.jsx";
import CaseStudy14 from "../components/pages/resources/case-studies/components/case-studies-14/CaseStudy14.jsx";
import CaseStudy15 from "../components/pages/resources/case-studies/components/case-studies-15/CaseStudy15.jsx";
import CaseStudy16 from "../components/pages/resources/case-studies/components/case-studies-16/CaseStudy16.jsx";
import CaseStudy17 from "../components/pages/resources/case-studies/components/case-studies-17/CaseStudy17.jsx";
import CaseStudy18 from "../components/pages/resources/case-studies/components/case-studies-18/CaseStudy18.jsx";
import CaseStudy19 from "../components/pages/resources/case-studies/components/case-studies-19/CaseStudy19.jsx";
import CaseStudy20 from "../components/pages/resources/case-studies/components/case-studies-20/CaseStudy20.jsx";
import CaseStudy21 from "../components/pages/resources/case-studies/components/case-studies-21/CaseStudy21.jsx";

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
        element: <Blogs />,
      },
      {
        path: "/case-studies",
        element: <CaseStudies />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/tutorials",
        element: <TTut />,
      },
      {
        path: "/bar-charts",
        element: <Blog01 />,
      },
      {
        path: "/dashboard-for-business-analytics",
        element: <Blog02 />,
      },
      {
        path: "/data-storytelling",
        element: <Blog03 />,
      },
      {
        path: "/data-visualisation-tool",
        element: <Blog04 />,
      },
      {
        path: "/empowering-business",
        element: <Blog05 />,
      },
      {
        path: "/power-of-ai-and-ml",
        element: <Blog06 />,
      },
      {
        path: "/power-bi-guide",
        element: <Blog07 />,
      },
      {
        path: "/tableau-guide",
        element: <Blog08 />,
      },
      {
        path: "/looker-studio-guide",
        element: <Blog09 />,
      },
      {
        path: "/power-bi-looker-studio-tableau",
        element: <Blog10 />,
      },
      {
        path: "/rev-in-dot-com",
        element: <CaseStudy01 />,
      },
      {
        path: "/evolution-and-impact",
        element: <CaseStudy02 />,
      },
      {
        path: "/garments-industry",
        element: <CaseStudy03 />,
      },
      {
        path: "/impact-of-spreadsheet",
        element: <CaseStudy04 />,
      },
      {
        path: "/impact-of-bus-intelligence",
        element: <CaseStudy05 />,
      },
      {
        path: "/impact-of-os",
        element: <CaseStudy06 />,
      },
      {
        path: "/data-analysis-for-business-success",
        element: <CaseStudy07 />,
      },
      {
        path: "/power-of-google-analytics",
        element: <CaseStudy08 />,
      },
      {
        path: "/backbone-of-data-ecosystems",
        element: <CaseStudy09 />,
      },
      {
        path: "/key-to-business-success",
        element: <CaseStudy10 />,
      },
      {
        path: "/importance-of-business-data",
        element: <CaseStudy11 />,
      },
      {
        path: "/importance-of-data-collection",
        element: <CaseStudy12 />,
      },
      {
        path: "/unlocking-full-potential",
        element: <CaseStudy13 />,
      },
      {
        path: "/evolution-of-mobile-os",
        element: <CaseStudy14 />,
      },
      {
        path: "/power-of-website",
        element: <CaseStudy15 />,
      },
      {
        path: "/facebook-marketing",
        element: <CaseStudy16 />,
      },
      {
        path: "/linkedin-marketing",
        element: <CaseStudy17 />,
      },
      {
        path: "/social-media-marketing",
        element: <CaseStudy18 />,
      },
      {
        path: "/the-power-of-social-media-marketing",
        element: <CaseStudy19 />,
      },
      {
        path: "/transforming-business-landscape",
        element: <CaseStudy20 />,
      },
      {
        path: "/the-engine-of-business-success",
        element: <CaseStudy21 />,
      },
      {
        path: "/elevating-the-garments-industry",
        element: <GarmentsIndustry />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
