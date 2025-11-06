import React from 'react';

const Registration2 = () => {
  return (
    <div className="flex flex-col min-h-screen  font-popp">
      {/* Navbar */}
      <div className="flex flex-row w-full justify-center px-3 py-[28px]">
        <div className="flex flex-row items-center justify-center gap-[21px]">
          <img src="/images/ED-(1).png" className="h-[30px] md:h-[40px]" />
          <span className="text-[#027D52] font-popp text-[25px] md:text-[43.441px] font-[700]">
            OptiCCS
          </span>
        </div>
        {/* login button */}
        <div className="px-[20px] py-[10px] md:px-[26px] md:py-[16px] ml-auto text-light10 text-[16px] font-popp font-[500] tracking-[0.16px] bg-primary90 rounded-[8px] border border-primary70">
          <p>Login</p>
        </div>
      </div>
      {/* form */}
      <div className="relative p-5 flex ">
        <div className="absolute h-full top-0 inset-0 bg-cover  bg-[url('/images/Registration.png')]"></div>
        <div className="absolute h-full top-0 inset-0 gradientbg opacity-20"></div>
        <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
          <div className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] flex items-center justify-center">
            <div className=" w-[90%]">
              <div className="flex items-center justify-center p-2 mb-8"><img src="/images/ProgressBar2.png" /></div>
              <div className="flex flex-row gap-[9px] mt-3">
                <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                  Account Verification
                </p>
              </div>
              <div className="text-center mt-2 text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300 w-[300px]">
                Please your mobile number, then we will send an OTP to verify
              </div>
              <form className="grid grid-cols-1 p-3 md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    First Name<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                    placeholder="Enter your First Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    Last Name<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                    placeholder="Enter your Last Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    Staff ID<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                    placeholder="Enter your staff ID"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    Account Type<span className="ml-2 text-red-500">*</span>
                  </label>
                  <select className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10">
                    <option value="" disabled defaultValue>
                      Choose a value
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    Create Password<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input type="password"
                    className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[16px] font-[500] text-dark90">
                    Confirm Password<span className="ml-2 text-red-500">*</span>
                  </label>
                  <input type="password"
                    className="p-[16px] bg-transparent text-secondary30 outline-none rounded-[8px] border border-primary10"
                    placeholder="Confirm Password"
                  />
                </div>
                <button className="text-primary90 border-primary90 border-2 font-[500] font-popp text-[16px]  flex items-center justify-center rounded-[8px] backbtn">
                  Back
                </button>
                <button className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration2;
