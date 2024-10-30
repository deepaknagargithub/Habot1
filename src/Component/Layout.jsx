import React from "react";
import Rectangle from "../Pages/Rectangle";
import Step1 from "../Pages/Step1";
import Step2 from "../Pages/Step2";
import Step3 from "../Pages/Step3";
import Step4 from "../Pages/Step4";
import Footer from "../Pages/Footer";

function Layout() {
  return (
    <>
      <div className="layout space-y-20">
        <Rectangle />
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
