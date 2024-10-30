import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa6";

function Rectangle() {
  return (
    <>
      <div className="lg:w-full md:w-full rectangle sm:w-2/3">
        <div className="w-full navbar flex justify-around items-center">
          <img
            className="navbar-img"
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVCWBXTsB5HAJspOV~0tqh6hIA5xvZjbjk3kSgRO8t7ChPrBUWmwXyMrwSHBZDVDxV8LjWKwWkihj0~PWyHkw~EnCnqh31iNGWS3LkOBDlWG0V4t9JH88j6BC~xyGdMcQiQpd1OApObe6N89ugLlx~8jZ0-8Fr~IKmYQBr5vm1yRujtOaBzuxAHKeG57x3IQUYFSoaNh8JymJgOaELN8VN2PNosiDPo-D51yBdzl-L64Gv~ZgJf-UnJ0gSoUJ5L1yrOiI3NpLBMLosdU0B73WVE0ngfqGiKQXnexGQMVIw~9bJ~N9DCOkZZyUi5d30Ev61A30n7BvpPF1BNrmqu0-Q__"
            alt="hey"
          />
          <div className="flex gap-5 items-center font-normal text-lg">
            <h1 className="text-gray-600">Find Suppliers</h1>
            <h1 className="text-gray-600">Find Service Tags</h1>
            <button className="border w-44 h-12 rounded-sm border-green-500 border-2 text-green-500 font-bold">
              Login/Sign Up
            </button>
          </div>
        </div>
        <div className=" w-full rectangle-img bg-center bg-cover opacity-75">
          <div className="w-full rectangle-img-div bg-gradient-to-t from-blue-950 to-blue-950 opacity-85  flex justify-center items-center">
            <div className="text-white flex flex-col gap-y-8">
              <div className="flex flex-col justify-center items-center text-5xl gap-y-2">
                <h1 className="font-bold">Are You a Supplier?</h1>
                <h1>Explore Matching Opportunities.</h1>
              </div>
              <div className=" flex gap-4 h-12">
                <FaSuitcase className="text-yellow-400 relative left-9 top-4 text-center" />
                <input
                  className="lg:w-96 md:w-60 sm:rounded-md p-6 border-none text-black"
                  type="text"
                  placeholder="Search your required service here"
                />
                <IoLocationOutline className="text-yellow-400 relative left-9 top-4 text-center" />
                <input
                  className="lg:w-96 md:w-60 sm:w-40 rounded-md p-6 text-black"
                  type="text"
                  placeholder="Search your desired location here"
                />
                <button className="bg-green-800 w-28">Search</button>
              </div>
              <div className="flex justify-center">
                <h1 className="font-medium"> Are you a buyer? </h1>
                <h1>
                  Are you a buyer? Click here if you are looking to post a
                  requirements
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rectangle;
