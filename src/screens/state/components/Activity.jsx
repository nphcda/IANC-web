import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { motion } from "framer-motion";

const Activity = () => {
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
      className="flex flex-col items-center justify-center gap-7 w-full mt-7"
    >
      <div className="w-[80%] flex flex-col gap-5">
        <p className="text-primary90 text-[24px] font-[600]">Activity 1</p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To build the capacity of healthcare workers on the provision of
            quality ANC services and integrated PHC services
          </p>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of Health Workers that gain Knowledge on Provision of
            Quality ANC and Integrated PHC services
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
                  Number of health workers who scored at least 80% in the post
                  test
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
                  Total Number of health workers trained
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
            Proportion of health workers that demonstrated improved performance
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
                  Any increase in % of Post Test minus Pre Test i.e {"=>"} +50%
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[350px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  % of Post Test minus Pre Test Score
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
        {/* information tab3 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of trained Health Workers that demonstratred Knowledge
            retention 6 months post training
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
                  Number of trained health workers that retained knowledge after
                  6 months
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[350px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">0</h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of trained health workers
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
      {/* Activity2 */}
      <div className="w-[80%] flex flex-col gap-5">
        <p className="text-primary90 text-[24px] font-[600]">Activity 2</p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To obtain data that can be used towards informing policy makers on
            ANC optimization
          </p>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of selected health facilities with complete ANC service
            data
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
                  Number of intervention facilities with complete, accurate and
                  timely data reporting
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
                  Total number of intervention facilities
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

export default Activity;
