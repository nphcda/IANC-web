import React, { useEffect, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { motion } from "framer-motion";
import axiosInstance from "../../../utils/axios";
import { useQuery } from "@tanstack/react-query";
import useFilterSearchParams from "../hooks/useFilterSearchParams";

const IndicatorOutcome = ({ patients, searchitem, filter }) => {
  // console.log(searchitem);
  const [patients4visits, setPatients4visits] = useState(0);
  const { state, lga, healthfacility } = useFilterSearchParams(searchitem);
  // console.log({ state1: state, lga2: lga, healthfacility3: healthfacility });

  const numberOfWomen4visits = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/national/data/find/4visits?state=${state}&lga=${lga}&healthfacility=${healthfacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}`
      );
      console.log(res.data);
      setPatients4visits(res.data[0].count);
    } catch (err) {}
  };

  // const {} = useQuery({
  //   queryKey: ["patients4visits"],
  //   queryFn: () => numberOfWomen4visits(),
  // });
  useEffect(() => {
    numberOfWomen4visits();
  }, [searchitem, filter]);

  const womenwhovisithf = () => {
    let result;
    if (patients4visits !== 0 && patients !== 0) {
      result = (patients4visits / patients).toFixed(2);
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
          Indicator Outcome
        </p>
        <div className="bg-primary10 flex flex-col items-center justify-center">
          <p className="text-primary90 text-[12px] font-[500]">
            To optimize ante-natal care (ANC) uptake by ensuring every pregnant
            woman attending ANC in PHCs receives quality integrated PHC services
            and care
          </p>
        </div>
        <p className="">
          Proportion of pregnant women with at least 4 ANC visits across
          intervention facilities before (baseline) and after (endline) project
        </p>
        {/* 2 indicators side by side */}
        <div className="flex items-center gap-3">
          <div className="flex items-center px-4 bg-primary90 py-2 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">{patients4visits}</h2>
              <h2 className="text-[14px] font-[400]">
                Number of women of reproductive age who received at least 4 ANC
                visits at intervention facility
              </h2>
            </div>
          </div>
          <div className="flex items-center px-4 bg-secondary90 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-dark50" />
            </div>
            <div className="flex flex-col text-dark50">
              <h2 className="text-[32px] font-[600]">{patients}</h2>
              <h2 className="text-[14px] font-[400]">
                Total number of women who visit intervention facilities for ANC
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
              <h2 className="text-[32px] font-[600]">{womenwhovisithf()}</h2>
              <h2 className="text-[14px] font-[400]">Numerator/Denominator</h2>
            </div>
          </div>
        </div>
        {/* change in the anc */}
        <div className="flex items-center justify-center text-dark50">
          <p>
            Change in the ANC 4 coverage of intervention facilities across
            project period
          </p>
        </div>
        {/* 1 indicator alone */}
        <div>
          <div className="flex items-center px-4 bg-primary90 py-2 gap-8 min-h-[100px] min-w-[200px] rounded-[20px]">
            <div className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">0</h2>
              <h2 className="text-[14px] font-[400]">
                Difference in the baseline and endline ANC coverage of
                intervention facilities{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndicatorOutcome;
