import React from "react";
import { motion } from "framer-motion";
import { LuCalendarDays } from "react-icons/lu";

const IntermediateResult3 = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center justify-center w-full mt-7"
    >
      <div className="w-[80%] flex flex-col gap-5">
        <p className="text-primary90 text-[24px] font-[600]">
          Intermediate Result 3
        </p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To improve the provision and experience of quality Antenatal Care
            and uptake of PHC services, thereby improving quality of disease
            detection and management
          </p>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women who received two or more doses of IPTp
            while attending antenatal care from intervention facilities
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women, receiving antenatal care and
                  reported to have received two or more doses of IPTP (IPTP3)
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women who attended antenatal clinic
                </h2>
              </div>
            </div>
          </div>

          {/* 1 indicator alone */}
          <div className="">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab2 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women who report physical or verbal abuse
            during Labor/ Childbirth
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  {" "}
                  Number of pregnant women that report abuse during
                  Labor/Childbirth
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women that delivered in the facility
                </h2>
              </div>
            </div>
          </div>
          {/* 1 indicator alone */}
          <div className="">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[400px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntermediateResult3;
