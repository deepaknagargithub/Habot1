import React from "react";

function Step1() {
  return (
    <>
      <div className="w-full h-96 flex justify-center items-center">
        <div className="w-5/6 h-5/6 flex ">
          <div className="w-1/2 space-y-12">
            <h1 className="font-bold text-4xl">Ready to dive into HABOT?</h1>
            <p className="font-light text-base">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className="lg:w-80 lg:h-14  sm:w-60 sm:h-12 bg-green-600 rounded-md text-white font-medium">
              Sign up Today !
            </button>
          </div>
          <div className="w-1/2 flex items-center ">
            <div className="flex flex-wrap justify-end gap-5">
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Abu Dhabi
              </div>
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Dubai
              </div>
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Sharjah & Ajman
              </div>
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Fujairah
              </div>
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Ras AI Khaimah
              </div>
              <div className="w-60 h-16 border border-orange-500 flex items-center justify-center rounded-md font-medium">
                Umm Al Quwain
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
