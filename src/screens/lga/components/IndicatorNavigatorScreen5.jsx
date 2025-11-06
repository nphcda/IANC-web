import React, { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import GenericPie from "../charts/GenericPie";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";

const IndicatorNavigatorScreen5 = ({ param }) => {
  const { lgaAuth } = useAuth();
  const { lga, state } = lgaAuth.others;
  //   useEffect(() => {
  //     if (param.query == "lga") {
  //       getIlgaschedule();
  //     }
  //   }, [param]);
  const [schedule, setschedule] = useState([]);

  const getIlgaschedule = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/lga/data/schedule?lga=${lga}`
      );
      setschedule(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getIlgaschedule();
  }, []);
  return (
    <div>
      {/* chart 1 */}
      <div className="grid mt-9">
        {/* Pie chart (Gravidity) */}
        <div className=" min-w-[250px] shadow-xl">
          <div className="flex items-center justify-between px-2 py-4">
            <div className="flex flex-col">
              <p className="font-[500] text-black">Antenatal Schdules</p>
              <p className="font-[500] text-[#4F4F4F] text-[14px]">
                {schedule?.number}
              </p>
            </div>
            <IoMdInformationCircle className="text-[#BDBDBD] text-[25px]" />
          </div>
          <hr />
          {/* The pie chart diagram */}
          <GenericPie
            series={[
              schedule?.completed,
              schedule?.upcoming,
              schedule?.missed,
              schedule?.flagged,
            ]}
            colors={["#14A673", "#EAB308", "#0000FF", "#FF0000"]}
          />
          {/* info about chart */}
          <div className="flex gap-7 px-2 py-4">
            <div className="flex gap-2 items-center">
              <div className="w-[7px] h-[7px] rounded-full bg-primary70"></div>
              <span>Attended</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[7px] h-[7px] rounded-full bg-yellow-500"></div>
              <span>Upcoming Appointment</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[7px] h-[7px] rounded-full bg-[blue]"></div>
              <span>Missed Appointment</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-[7px] h-[7px] rounded-full bg-[red]"></div>
              <span>Flagged Appointment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicatorNavigatorScreen5;
