import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LuCalendarDays } from "react-icons/lu";
import { useState } from "react";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";

const IntermediateResult2 = ({ patients, searchitem, filter, filteritem }) => {
  const { healthfacilityAuth } = useAuth();
  const { healthfacility, lga, state } = healthfacilityAuth.others;
  console.log(searchitem);
  const [data, setData] = useState();

  const getIntermediateResult2 = async (searchitem) => {
    try {
      const res = await axiosInstance.get(
        `/admin/indicators/intermediateresult2?state=${state}&lga=${lga}&healthfacility=${healthfacility}&from=${searchitem?.datefrom}&to=${searchitem?.dateto}&filter=${filteritem}`
      );
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    getIntermediateResult2(searchitem);
  }, []);

  useEffect(() => {
    getIntermediateResult2(searchitem);
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
          Intermediate Result 2
        </p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To improve integration of ANC with other PHC services (HIV,
            Tuberculosis, Malaria, COVID-19)
          </p>
        </div>
        {/* information tab */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women that delivered in the facility and
            received post partum IUD
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2A.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women that delivered at hf and received
                  post partum IUD.
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2A.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women that delivered at health
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
                    data?.intermediateResult2A.numerator[0].total,
                    data?.intermediateResult2A.denominator[0].total
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
            Proportion of pregnant women who visited HF with an Under 5 Child
            that was tested for fever/malaria
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2B.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  {" "}
                  Number of pregnant women with a under 5 child tested for
                  malaria
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2B.denominator[0].total}
                </h2>
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult2B.numerator[0].total,
                    data?.intermediateResult2B.denominator[0].total
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
            Proportion of pregnant women who visited HF with a Under 5 Child
            that was tested for fever/malaria and received appropriate
            treatment.
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2C.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women with a under 5 child tested for
                  malaria and received treatment
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2C.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total Number of pregnant women with a under 5 child tested for
                  malaria
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
                    data?.intermediateResult2C.numerator[0].total,
                    data?.intermediateResult2C.denominator[0].total
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
            Proportion of pregnant women screened or tested for HIV
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2D.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women screened or tested for HIV
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2D.denominator[0].total}
                </h2>
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
                <h2 className="text-[20px] font-[600]">
                  {getFraction(
                    data?.intermediateResult2D.numerator[0].total,
                    data?.intermediateResult2D.denominator[0].total
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
            Proportion of pregnant women not vaccinated for Covid-19 that
            received vaccination
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2E.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women vaccinated for Covid-19
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2E.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women who visited hf with no prior
                  Covid-19 vaccination
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
                    data?.intermediateResult2E.numerator[0].total,
                    data?.intermediateResult2E.denominator[0].total
                  )}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab6 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women with an unimmunized Under 5 Child that
            was immunized
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2F.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women with an unimmunized under 5 child
                  that received immunization
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2F.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of pregnant women with an unimmunized under 5
                  child
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
                    data?.intermediateResult2F.numerator[0].total,
                    data?.intermediateResult2F.denominator[0].total
                  )}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Numerator/Denominator
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* information tab7 */}
        <div className="flex flex-col gap-2">
          <p className="font-[500] text-[14px] text-dark90">
            Proportion of pregnant women with 9-59months Child screened for
            Malnutrition
          </p>
          {/* 2 indicators side by side */}
          <div className="flex items-center gap-3">
            <div className="flex items-center px-4 bg-primary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-white" />
              </div>
              <div className="flex flex-col text-white">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2G.numerator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Number of pregnant women with a Under 5 child screened for
                  malnutrition
                </h2>
              </div>
            </div>
            <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
              <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
                <LuCalendarDays className="text-dark50" />
              </div>
              <div className="flex flex-col text-dark50">
                <h2 className="text-[20px] font-[600]">
                  {data?.intermediateResult2G.denominator[0].total}
                </h2>
                <h2 className="text-[10px] font-[400]">
                  Total number of Pregnant women who attended antenatal clinic
                  with a Under 5 child
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
                    data?.intermediateResult2G.numerator[0].total,
                    data?.intermediateResult2G.denominator[0].total
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

export default IntermediateResult2;
