import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col min-h-screen font-popp">
        {/* Navbar */}
        <div className="flex flex-row w-full items-center justify-between px-3 py-[28px]">
          <div className="flex flex-row items-center justify-center gap-2 md:gap-[21px]">
            <img src="/images/ED-(1).png" className=" h-[30px] md:h-[40px]" />
            <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
              iANC
            </span>
          </div>
          <img src="/images/partnerlogo.svg" />
        </div>
        {/* form */}
        <div className="relative p-5 flex flex-1 items-center justify-center ">
          <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
          {/* <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div> */}
          <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
            <div className="p-2 flex flex-col items-center justify-center">
              <p className="text-[56px] font-[600] text-center text-white">
                Welcome to iANC
              </p>
              <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-9">
                <div className="bg-light10 rounded-[20px] py-[48px] flex flex-col items-center justify-center w-[350px] h-[200px]">
                  <div className="font-[600] text-[18px] text-primary90">
                    National iANC
                  </div>
                  <div className="text-[#7A7C7F] text-center mb-[35px] mt-[12px] text-[12px] font-[400]">
                    Embark on a transformative healthcare journey with our
                    comprehensive app
                  </div>
                  <Link
                    to="/national"
                    className="bg-primary90 text-white rounded-[8px] px-[10px] py-[16px]"
                  >
                    Login to platform
                  </Link>
                </div>
                <div className="bg-light10 rounded-[20px] py-[48px] flex flex-col items-center justify-center w-[350px] h-[200px]">
                  <div className="font-[600] text-[18px] text-primary90">
                    State iANC
                  </div>
                  <div className="text-[#7A7C7F] text-center mb-[35px] mt-[12px] text-[12px] font-[400]">
                    Embark on a transformative healthcare journey with our
                    comprehensive app
                  </div>
                  <Link
                    to="/state"
                    className="bg-primary90 text-white rounded-[8px] px-[10px] py-[16px]"
                  >
                    Login to State
                  </Link>
                </div>
                <div className="bg-light10 rounded-[20px] py-[48px] flex flex-col items-center justify-center w-[350px] h-[200px]">
                  <div className="font-[600] text-[18px] text-primary90">
                    LGA iANC
                  </div>
                  <div className="text-[#7A7C7F] text-center mb-[35px] mt-[12px] text-[12px] font-[400]">
                    Embark on a transformative healthcare journey with our
                    comprehensive app
                  </div>
                  <Link
                    to="/lga"
                    className="bg-primary90 text-white rounded-[8px] px-[10px] py-[16px]"
                  >
                    Login to LGA
                  </Link>
                </div>
                <div className="bg-light10 rounded-[20px] py-[48px] flex flex-col items-center justify-center w-[350px] h-[200px]">
                  <div className="font-[600] text-[18px] text-primary90">
                    Health Facility iANC
                  </div>
                  <div className="text-[#7A7C7F] text-center mb-[35px] mt-[12px] text-[12px] font-[400]">
                    Embark on a transformative healthcare journey with our
                    comprehensive app
                  </div>
                  <Link
                    to="/healthfacility"
                    className="bg-primary90 text-white rounded-[8px] px-[10px] py-[16px]"
                  >
                    Login to Health Facility
                  </Link>
                </div>
                <div className="bg-light10 rounded-[20px] py-[48px] flex flex-col items-center justify-center min-w-[350px] h-[200px] col-span-2">
                  <div className="font-[600] text-[18px] text-primary90">
                    MAMII Portal
                  </div>
                  <div className="text-[#7A7C7F] text-center mb-[35px] mt-[12px] text-[12px] font-[400]">
                    Embark on a transformative healthcare journey with our
                    comprehensive app
                  </div>
                  <Link
                    to="/mamii"
                    className="bg-primary90 text-white rounded-[8px] px-[10px] py-[16px]"
                  >
                    Login to MAMII
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
