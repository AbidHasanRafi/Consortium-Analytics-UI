import React from "react";
import ContactForm from "../../../contact-form/ContactForm";
import DevHeader from "./components/development-header/DevHeader";
import CustomSoftware from "./components/custom-software/CustomSoftware";
import AppDev from "./components/mobile-app/AppDev";
import WebDev from "./components/web-development/WebDev";
import ERPSaaS from "./components/erp-saas/ERPSaaS";
import SContents from "./components/related-contents/SContents";
import APIDev from "./components/api-development/APIDev";
import AllProducts from "../../../all-products/AllProducts";
import LogoGrid from "./components/logo-grid/LogoGrid";

const Dev = () => {
  return (
    <div className="font-mont bg-[#F2F6F9]">
      <DevHeader />
      <LogoGrid />
      <CustomSoftware />
      <AppDev />
      <WebDev />
      <ERPSaaS />
      <APIDev />
      <AllProducts />
      <SContents />
      <ContactForm />
    </div>
  );
};

export default Dev;
