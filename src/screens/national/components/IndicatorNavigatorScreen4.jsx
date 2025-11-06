import React, { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import axiosInstance from "../../../utils/axios";
import GenericPie from "../charts/GenericPie";

const IndicatorNavigatorScreen4 = ({ param }) => {
  useEffect(() => {
    if (param.query == "lga") {
      getIlgatestresult();
    }
    if (param.query == "state") {
      getstatetestresult();
    }
    if (param.query == "national") {
      getalltestresult();
    }
  }, [param]);
  const [testresult, setTestresult] = useState([]);
  const getalltestresult = async () => {
    try {
      const res = await axiosInstance.get("/admin/national/data/test");
      setTestresult(res.data);
    } catch (error) {}
  };
  const getstatetestresult = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/state/data/test?state=${param.state}`
      );
      setTestresult(res.data);
    } catch (error) {}
  };
  const getIlgatestresult = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/lga/data/test?lga=${param.lga}`
      );
      setTestresult(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getalltestresult();
  }, []);
  return (
    <div className="w-full">
      <p className="text-primary90 font-[500] my-5">Test Results</p>
      {/* chart 1 */}
      <div className="grid grid-cols-2 gap-5">
        {/* HIV Screening graph */}
        <div className=" min-w-[250px] shadow-xl">
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <p className="font-[500] text-black">HIV Screening</p>
              <p className="font-[500] text-black">
                {testresult &&
                  testresult?.hiv?.negative + testresult?.hiv?.positive}
              </p>{" "}
              <p className="font-[400] text-[#4F4F4F] text-[14px]">Hiv</p>
            </div>
            <IoMdInformationCircle className="text-[#BDBDBD]" />
          </div>
          {/* The bar chart diagram */}
          <GenericPie
            colors={["#F3722C", "#14A673"]}
            series={[
              Number(testresult?.hiv?.positive),
              Number(testresult?.hiv?.negative),
            ]}
          />
          {/* info about chart */}
          <div className="flex gap-7 px-2">
            <div className="flex gap-2 items-center">
              <div className="w-[5px] h-[5px] rounded-full bg-[#F3722C]"></div>
              <span>Positive</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[5px] h-[5px] rounded-full bg-primary70"></div>
              <span>Negative</span>
            </div>
          </div>
        </div>
        {/* malaria rapid graph */}
        <div className=" min-w-[250px] shadow-xl">
          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
              <p className="font-[500] text-black">Malaria Screening</p>
              <p className="font-[500] text-black">
                {testresult &&
                  testresult?.malariarapid?.negative +
                    testresult?.malariarapid?.positive}
              </p>
              <p className="font-[400] text-[#4F4F4F] text-[14px]">Malaria</p>
            </div>
            <IoMdInformationCircle className="text-[#BDBDBD]" />
          </div>
          {/* The bar chart diagram */}
          <GenericPie
            colors={["#F3722C", "#14A673"]}
            series={[
              Number(testresult?.malariarapid?.positive),
              Number(testresult?.malariarapid?.negative),
            ]}
          />
          {/* info about chart */}
          <div className="flex gap-7 px-2">
            <div className="flex gap-2 items-center">
              <div className="w-[5px] h-[5px] rounded-full bg-[#F3722C]"></div>
              <span>Positive</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[5px] h-[5px] rounded-full bg-primary70"></div>
              <span>Negative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorNavigatorScreen4;
