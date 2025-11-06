import React from 'react';

const RegistrationSuccess = () => {
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
            <div className="relative p-5 flex-1 flex ">
                <div className="absolute top-0 h-full inset-0 bg-cover bg-[url('/images/Registration.png')]"></div>
                <div className="absolute top-0 h-full inset-0 gradientbg opacity-20"></div>
                <div className='flex items-center justify-center w-full'>
                    <div className=" w-full h-[300px] z-[20] my-5 flex flex-col items-center justify-center">
                        <div className="bg-white h-full py-9 rounded-2xl md:rounded-[30px] w-[90%] md:w-[65%] lg:w-[55%] flex items-center justify-center">
                            <div className=" w-[90%]">
                                <div className="flex flex-col items-center justify-center gap-9">
                                    <div className="flex items-center justify-center"><img src="/images/ProgressBar4.png" /></div>
                                    <div className="flex flex-row gap-[9px] mt-3">
                                        <p className="text-[18px] font-popp font-[500] tracking-[0.64px] text-primary70">
                                            Registration  Successful
                                        </p>
                                    </div>


                                    <button className="text-[#fff] font-[500] font-popp text-[16px] flex items-center justify-center rounded-[8px] registerbtngrad">
                                        Login
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSuccess;
