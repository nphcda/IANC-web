import React, { useState, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import IndicatorOutcome from "../components/IndicatorOutcome";
import IntermediateResult1 from "../components/IntermediateResult1";
import Activity from "../components/Activity";
import IntermediateResult2 from "../components/IntermediateResult2";
import axiosInstance from "../../../utils/axios";
import { useRef } from "react";
import Filterbox from "../../../components/Filterbox";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { handleDownload } from "../../../utils/helpers";
import IntermediateResult3 from "../components/IntermediateResult3";
import NationalFilterbox from "../components/NationalFilterbox";

const DashboardHome = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["state", "lga", "HealthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [filteritem, setFilteritem] = useState();
  const [searchitem, setSearchitem] = useState({
    state: "all",
    lga: "all",
    healthFacility: "all",
    datefrom: "",
    dateto: "",
  }); //pagination
  const [navigatorSlide, setNavigatorSlide] = useState(1);
  const [healthWorkers, setHealthWorkers] = useState(0);
  const [patients, setPatients] = useState(0);
  const [statenumbers, setStatenumbers] = useState(0);
  const [hfnumbers, setHfnumbers] = useState(0);
  const getAllHealthWorkers = async () => {
    try {
      const res = await axiosInstance.get("/users/find");
      setHealthWorkers(res.data.result.length);
    } catch (err) {}
  };

  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/find");
      setPatients(res.data.result.length);
      return res.data;
    } catch (err) {}
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["patients"],
    queryFn: getAllPatients,
  });
  const getAllstates = async () => {
    try {
      const res = await axiosInstance.get("/admin/state/find");
      setStatenumbers(res.data.result.length);
    } catch (err) {}
  };
  const getHealthfacilities = async () => {
    try {
      const res = await axiosInstance.get("/admin/healthfacility/find");
      setHfnumbers(res.data.length);
    } catch (err) {}
  };
  useEffect(() => {
    console.log(searchitem);
  }, [searchitem]);
  useEffect(() => {
    // Load MathJax when the component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Remove the MathJax script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);
  useEffect(() => {
    getAllHealthWorkers();
    // getAllPatients();
    getAllstates();
    getHealthfacilities();
  }, []);

  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <IndicatorOutcome
          patients={patients}
          searchitem={searchitem}
          filter={filter}
        />
      );
      break;
    case 2:
      componentToRender = (
        <IntermediateResult1
          patients={patients}
          searchitem={searchitem}
          filter={filter}
          filteritem={filteritem}
        />
      );
      break;
    case 3:
      componentToRender = (
        <IntermediateResult2
          patients={patients}
          searchitem={searchitem}
          filter={filter}
          filteritem={filteritem}
        />
      );
      break;
    case 4:
      componentToRender = (
        <IntermediateResult3
          patients={patients}
          searchitem={searchitem}
          filter={filter}
          filteritem={filteritem}
        />
      );
      break;
    case 5:
      componentToRender = (
        <Activity
          patients={patients}
          searchitem={searchitem}
          filteritem={filteritem}
        />
      );
      break;
    default:
      componentToRender = null;
      break;
  }
  const tableRef = useRef();
  return (
    <div className="min-w-[1000px]">
      {/* content */}
      <div ref={tableRef} className="bg-primary10">
        {/* dashboard */}
        <div className="flex gap-2 py-5 items-center p-2">
          <RxDashboard />
          <p className="text-secondary400 text-[18px] font-[600]">Dashboard</p>
        </div>
        {/* box indicators */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {/* indicator1 */}
          <div className="flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex items-center flex-col text-white">
              <h2 className="text-[32px] font-[600]">{patients}</h2>
              <h2 className="text-[14px] font-[400]">Patients</h2>
            </div>
          </div>
          {/* indicator2 */}
          <div className="flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col items-center text-white">
              <h2 className="text-[32px] font-[600]">{healthWorkers}</h2>
              <h2 className="text-[14px] text-center font-[400]">
                Health Workers
              </h2>
            </div>
          </div>
          {/* indicator3 */}
          <div className="flex items-center px-4 bg-[#FFA901] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col items-center text-white">
              <h2 className="text-[32px] font-[600]">{statenumbers}</h2>
              <h2 className="text-[14px] font-[400]">State</h2>
            </div>
          </div>
          {/* indicator4 */}
          <div className="flex items-center px-4 bg-[#22A9FA] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col items-center text-white">
              <h2 className="text-[32px] font-[600]">{hfnumbers}</h2>
              <h2 className="text-[14px] font-[400]">Health Facility</h2>
            </div>
          </div>
        </div>
        {/* download csv */}
        <div className="flex items-center justify-end mt-[40px] pr-4">
          <button
            onClick={() => handleDownload("indicator", "indicator.pdf")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download PDF
          </button>
        </div>
        <NationalFilterbox
          filterdata={filterdata}
          selectedDateTo={selectedDateTo}
          setSearchitem={setSearchitem}
          setSelectedDateTo={setSelectedDateTo}
          selectedDateFrom={selectedDateFrom}
          setSelectedDateFrom={setSelectedDateFrom}
          setFilter={setFilter}
          filter={filter}
          filteritem={filteritem}
          setFilteritem={setFilteritem}
        />
        {/* selectbox1 */}
        {/* <Filterbox filterdata={filterdata} selectedDateTo={selectedDateTo} setSearchitem={setSearchitem} setSelectedDateTo={setSelectedDateTo} selectedDateFrom={selectedDateFrom} setSelectedDateFrom={setSelectedDateFrom} setFilter={setFilter} filter={filter} /> */}
        {/* indicator outcome */}
        <div className="w-full flex items-center justify-center my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            {/* navigator */}
            <div className="flex items-center gap-4">
              <div
                onClick={() => setNavigatorSlide(1)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 1
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Outcome
              </div>
              <div
                onClick={() => setNavigatorSlide(2)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 2
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Intermediate Result 1
              </div>
              <div
                onClick={() => setNavigatorSlide(3)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 3
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Intermediate Result 2
              </div>
              <div
                onClick={() => setNavigatorSlide(4)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 4
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Intermediate Result 3
              </div>
              <div
                onClick={() => setNavigatorSlide(5)}
                className={`cursor-pointer text-center ${
                  navigatorSlide === 5
                    ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                    : "text-light90 pb-2 font-[500]"
                }`}
              >
                Activity 1-2
              </div>
            </div>
            {/* outcome analysis */}
            <div id="indicator">{componentToRender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
