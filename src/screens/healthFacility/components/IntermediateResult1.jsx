import React, { useEffect, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { motion } from "framer-motion";
import axios from "axios";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";

const IntermediateResult1 = ({ patients, searchitem, filter, filteritem }) => {
  const { healthfacilityAuth } = useAuth();
  const { healthfacility, lga, state } = healthfacilityAuth.others;
  const [data, setData] = useState();

  const getIntermediateResult1 = async (searchitem) => {
    try {
      const res = await axiosInstance.get(
        `/admin/indicators/intermediateresult1?state=${state}&lga=${lga}&healthfacility=${healthfacility}&from=${searchitem?.datefrom}&to=${searchitem?.dateto}&filter=${filteritem}`
      );
      //   console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getIntermediateResult1(searchitem);
  }, []);
  useEffect(() => {
    getIntermediateResult1(searchitem);
  }, [searchitem]);

  const getFraction = (numerator, denominator) => {
    let result;
    if (numerator !== 0 && denominator !== 0) {
      result = (numerator / denominator).toFixed(3);
    } else {
      result = 0;
    }
    return result;
  };
  // console.log({ search: searchitem, fill: filter });

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
          Intermediate Result 1
        </p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To Increase the number of ANC visits, following the first antenatal
            visit until delivery, thereby reducing dropout rates
          </p>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women with at least 4 ANC visits across
            intervention facilities before (baseline) and after (endline)
            project
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1A.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of women of reproductive age who received at least 4
                  ANC visits at intervention facility
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1A.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of women who visit intervention facilities for
                  ANC
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1A.numerator[0].total,
                    data?.intermediateResult1A.denominator[0].total
                  )}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women who attended at least one ANC Visit and
            delivered at health facility
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1B.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women with at least one ANC visit
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1B.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women who delivered at health
                  facility
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1B.numerator[0].total,
                    data?.intermediateResult1B.denominator[0].total
                  )}
                </h2>
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
            Proportion of pregnant women at ANC 1st visit less than 20 weeks
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1C.numerator}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women with Gestational Age less than 20
                  weeks
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1C.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women at ANC 1st visit
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1C.numerator,
                    data?.intermediateResult1C.denominator[0].total
                  )}
                </h2>
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
            Proportion of pregnant women at ANC 1st Vist less than 20 weeks that
            achieved 8 ANC visits
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1D.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women who achieved 8 ANC visits
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1D.denominator}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women with gestational age less than
                  20 weeks
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1D.numerator[0].total,
                    data?.intermediateResult1D.denominator
                  )}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab4 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women who commenced ANC but missed more than
            one session
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1E.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women who missed two or more ANC sessions
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1E.denominator[0]?.total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  {" "}
                  Total number of pregnant women who commenced an ANC session
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1E.numerator[0].total,
                    data?.intermediateResult1E.denominator[0].total
                  )}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab5 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women who were contacted and resumed ANC
            visits
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1F.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women who resumed ANC visits after they
                  were contacted
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult1F.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women who missed an ANC visit
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult1F.numerator[0].total,
                    data?.intermediateResult1F.denominator[0].total
                  )}
                </h2>
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

export default IntermediateResult1;
