import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { RiContactsBook2Line } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TfiWrite } from "react-icons/tfi";
import { FaHandshakeSimple } from "react-icons/fa6";

function Step4() {
  return (
    <div className="lg:w-full step4 flex flex-col items-center gap-y-6">
      <h1 className="text-3xl font-bold">How it works?</h1>
      <p className="w-4/6 text-center text-lg font-normal">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className=" w-5/6 h-4/6 flex flex-wrap gap-y-0">
        <div className="lg:w-96 lg:h-60 md:w-1/2  md:h-32 border bg-sky-200 flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <IoPersonAddSharp className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Select Your Role and Sign Up
            </h1>
          </div>
        </div>
        <div className="lg:w-96 lg:h-60 md:w-1/2 md:h-32flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <RiContactsBook2Line className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Buyers Post Your Requirements
            </h1>
          </div>
        </div>
        <div className="lg:w-96 lg:h-60 md:w-1/2 md:h-32  bg-sky-200 flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <TbReportSearch className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Review, Select, and Contact the Best Suppliers
            </h1>
          </div>
        </div>
        <div className="lg:w-96 lg:h-60 md:w-1/2 md:h-32 flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <ImProfile className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Suppliers Complete your profile and get notified for opportunities
            </h1>
          </div>
        </div>
        <div className="lg:w-96 lg:h-60 md:w-1/2 md:h-32  bg-sky-200 flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <TfiWrite className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Review, Select, and Contact the Best Suppliers
            </h1>
          </div>
        </div>
        <div className="lg:w-96 lg:h-60 md:w-1/2 md:h-32 flex justify-center items-center">
          <div className="w-5/6 h-5/6 flex flex-col justify-center items-center gap-y-2">
            <div>
              <FaHandshakeSimple className="w-16 h-16" />
            </div>
            <h1 className="w-40 h-14 text-center font-medium text-lg">
              Both the Parties can Connect and Make Business Leave a Feedback
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
