import React from 'react';

const RegistrationOtp = () => {
    return (
        <div className="flex flex-col min-h-screen font-popp">
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
            <div className="relative flex flex-1 items-center justify-center ">
                <div className="absolute top-0 inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
                <div className="absolute top-0 inset-0 gradientbg opacity-20"></div>
                <div className="h-full w-full z-[20] my-5 flex flex-col items-center justify-center">
                    <div className="bg-white py-9 rounded-2xl md:rounded-[30px] w-[87%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                        <div className="flex flex-col w-[90%] p-4 items-center justify-center">
                            <div className="flex items-center justify-center"><img src="/images/ProgressBar3.png" /></div>
                            <div className="flex flex-row gap-[9px] mt-3">
                                <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-secondary400">
                                    Account Verification
                                </p>
                            </div>
                            <div className="text-center mt-2 text-[14px] font-popp font-[500] tracking-[0.14px] text-secondary300 w-[300px]">
                                Please enter email and mobile number, then we will send OTP to verify
                            </div>
                            <form className="flex flex-col w-full gap-4 mt-4">
                                <div className="flex flex-col my-[70px]">
                                    <label className="text-[16px] font-[500] text-dark90">
                                        OTP Code<span className="ml-2 text-red-500">*</span>
                                    </label>
                                    <input
                                        className="p-[16px] mt-2 text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary10"
                                        placeholder="Enter OTP Code"
                                    />
                                </div>

                                <button className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                                    Verify
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationOtp;
