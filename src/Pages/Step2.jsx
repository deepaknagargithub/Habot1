import React, { useState } from "react";
import { ImCheckboxChecked } from "react-icons/im";

function Step2() {
  const [style, setStyle] = useState(false);
  const handleClick = () => {
    setclass(true);
  };
  return (
    <>
      <div className="w-full step2 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex bg-blue-950 flex justify-center items-center rounded-md ">
          <div className="w-5/6 h-5/6 flex ">
            <div className="w-1/2 h-full flex justify-center items-center ">
              <div className="h-60 w-5/6 step2-img bg-center bg-cover rounded-md"></div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center ">
              <div className="h-60 w-5/6 space-y-8">
                <div className="text-white flex justify-around font-bold text-2xl">
                  <button className="w-52 h-10 border-b-4 text-orange-600 border-orange-600">
                    Buyer
                  </button>
                  <button className="w-52 h-10">Supplier</button>
                </div>
                <div>
                  <ul className="text-white space-y-2 mt">
                    <li className="flex">
                      <ImCheckboxChecked className="rounded-full text-green-600 bg-white" />
                      <h1 className="-mt-1">Post your requirements.</h1>
                    </li>
                    <li className="flex">
                      <ImCheckboxChecked className="rounded-full text-green-600 bg-white" />
                      <h1 className="-mt-1">
                        Sit back for multiple suppliers to contact you.
                      </h1>
                    </li>
                    <li className="flex">
                      <ImCheckboxChecked className="rounded-full text-green-600 bg-white" />
                      <h1 className="-mt-1">
                        Choose among the suppliers based on the ratings and
                        reviews.
                      </h1>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
