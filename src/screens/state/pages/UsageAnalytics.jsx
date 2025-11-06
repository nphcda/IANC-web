import React, { useState } from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import ActiveUsers from "../components/ActiveUsers";
import Activitylog from "../components/Activitylog";
import { LuCalendarDays } from "react-icons/lu";
import { useEffect } from "react";
import axiosInstance from "../../../utils/axios";
import { useAuth } from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import { AiFillCalendar } from "react-icons/ai";
import stateLocalGovts from "../../../utils/stateandlgas";

const UsageAnalytics = () => {
  const [navigatorSlide, setNavigatorSlide] = useState(1);
  const [sessions, setSessions] = useState();
  const [sessiongraphdata, setSessiongraphdata] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [healthWorkers, setHealthWorkers] = useState(0);
  const [patients, setPatients] = useState(0);
  const [statenumbers, setStatenumbers] = useState(0);
  const [hfnumbers, setHfnumbers] = useState(0);

  const formattedStartDate = startDate.toISOString().split("T")[0];
  const [localGovts, setLocalGovts] = useState([]);
  const [statesearch, setStatesearch] = useState("all");
  const [lgasearch, setLgasearch] = useState("all");
  const [ward, setWard] = useState("all");
  const [indicatorsearchparam, setindicatorsearchparam] = useState({
    query: "",
    state: "",
    lga: "",
  });
  const { stateAuth } = useAuth();
  const { state } = stateAuth.others;
  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <Activitylog count={sessiongraphdata} param={indicatorsearchparam} />
      );
      break;
    case 2:
      componentToRender = (
        <ActiveUsers
          data={sessions}
          param={indicatorsearchparam}
          date={formattedStartDate}
        />
      );
      break;
    default:
      componentToRender = null;
      break;
  }
  const getLgaSessiongraph = async () => {
    try {
      const res = await axiosInstance.get(`/session/data/lga?lga=${lgasearch}`);
      setSessiongraphdata(res.data.result);
    } catch (err) {}
  };
  const getAllLgaSession = async () => {
    try {
      const res = await axiosInstance.get(
        `/session/find/lga?start_date=${formattedStartDate}&lga=${lgasearch}`
      );
      setSessions(res.data.result);
    } catch (err) {}
  };
  const handlestate = (e) => {
    setStatesearch(e.target.value);
  };
  const handlelgasearch = (e) => {
    setLgasearch(e.target.value);
  };
  const handlesearchsubmit = async () => {
    let searchquery;
    try {
      if (lgasearch == "all") {
        searchquery = "state";
        setindicatorsearchparam({
          query: searchquery,
          state: "",
          lga: lgasearch,
        });
        getSessiongraph();
        getAllSessions();
      }
      if (lgasearch !== "all") {
        searchquery = "lga";
        setindicatorsearchparam({
          query: searchquery,
          state: "",
          lga: lgasearch,
        });
        getLgaSessiongraph();
        getAllLgaSession();
      }

      // setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
    } catch (error) {}
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    setLocalGovts(stateLocalGovts[capitalizeFirstLetter(state)]);
  }, []);

  useEffect(() => {
    if (statesearch !== "all") {
      setLocalGovts(stateLocalGovts[capitalizeFirstLetter(statesearch)]);
    }
  }, [statesearch]);
  const getAllSessions = async () => {
    try {
      const res = await axiosInstance.get(
        `/session/find/state?start_date=${formattedStartDate}&state=${state}`
      );
      setSessions(res.data.result);
    } catch (err) {}
  };
  const getSessiongraph = async () => {
    try {
      const res = await axiosInstance.get(
        `/session/data/state?state=${state}&year=${formattedStartDate}`
      );
      setSessiongraphdata(res.data.result);
    } catch (err) {}
  };

  const getAllHealthWorkers = async () => {
    try {
      const res = await axiosInstance.get("/users/find");
      const stateworkers = res.data.result.filter(
        (obj) => obj.state.toLowerCase() == stateAuth.others.state.toLowerCase()
      );
      setHealthWorkers(stateworkers.length);
    } catch (err) {}
  };
  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/findwithworkers");
      const statepatients = res.data.result.filter(
        (obj) => obj.state.toLowerCase() == stateAuth.others.state.toLowerCase()
      );
      setPatients(statepatients.length);
    } catch (err) {}
  };
  const getAllLGAs = async () => {
    try {
      const res = await axiosInstance.get("/admin/lga/find");
      const statelgas = res.data.filter(
        (obj) => obj.state.toLowerCase() == stateAuth.others.state.toLowerCase()
      );
      setStatenumbers(statelgas.length);
    } catch (err) {}
  };
  const getHealthfacilities = async () => {
    try {
      const res = await axiosInstance.get("/admin/healthfacility/find");
      const statehealthfacilities = res.data.filter(
        (obj) => obj.state.toLowerCase() == stateAuth.others.state.toLowerCase()
      );
      setHfnumbers(statehealthfacilities.length);
    } catch (err) {}
  };
  useEffect(() => {
    getAllHealthWorkers();
    getAllPatients();
    getAllLGAs();
    getHealthfacilities();
    getAllSessions();
    getSessiongraph();
  }, []);
  useEffect(() => {
    if (indicatorsearchparam.query == "state") {
      getSessiongraph();
      getAllSessions();
    } else if (indicatorsearchparam.query == "lga") {
      getLgaSessiongraph();
      getAllLgaSession();
    } else {
      getSessiongraph();
      getAllSessions();
    }
  }, [startDate]);
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <HiArrowsUpDown />
            <p className="text-secondary400 text-[18px] font-[600]">
              Usage Analytics
            </p>
          </div>
        </div>
        {/* box indicators */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {/* indicator1 */}
          <div className="flex items-center px-4 bg-[#7A6EFE] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">{patients}</h2>
              <h2 className="text-[14px] font-[400]">Patients</h2>
            </div>
          </div>
          {/* indicator2 */}
          <div className="flex items-center px-4 bg-[#FF5363] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">{healthWorkers}</h2>
              <h2 className="text-[14px] font-[400]">Health Workers</h2>
            </div>
          </div>
          {/* indicator3 */}
          <div className="flex items-center px-4 bg-[#FFA901] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">{statenumbers}</h2>
              <h2 className="text-[14px] font-[400]">LGA</h2>
            </div>
          </div>
          {/* indicator4 */}
          <div className="flex items-center px-4 bg-[#22A9FA] gap-8 h-[100px] w-[200px] rounded-[20px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#ffffff7c]">
              <LuCalendarDays className="text-white" />
            </div>
            <div className="flex flex-col text-white">
              <h2 className="text-[32px] font-[600]">{hfnumbers}</h2>
              <h2 className="text-[14px] font-[400]">Health Facility</h2>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            {/* navigator */}
            <div className="flex items-center justify-between px-2 w-full mb-8">
              <div className="flex items-center gap-4 w-full">
                <div
                  onClick={() => setNavigatorSlide(1)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 1
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Activity Log
                </div>
                <div
                  onClick={() => setNavigatorSlide(2)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 2
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Active Users{" "}
                </div>
              </div>

              <div className="z-50">
                <div className="flex gap-2 cursor-pointer items-center text-white p-3 bg-[#7A6EFE] rounded-lg">
                  <AiFillCalendar className="text-[24px]" />
                  <DatePicker
                    className="bg-[#7A6EFE]  outline-0 text-white"
                    selected={startDate}
                    shouldCloseOnSelect
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
            </div>
            {/* search box */}
            <div className="w-full flex items-center justify-center my-5">
              <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6">
                {/* 1 */}

                {/* 2 */}
                {/* {statesearch !== 'all' && */}
                <div className="flex flex-col">
                  {/* <label className='text-primary90 font-[400]'>LGA</label> */}
                  <select
                    name="lga"
                    onChange={handlelgasearch}
                    value={lgasearch}
                    className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
                  >
                    <option value="all">All LGA</option>
                    {localGovts?.map((localGovt) => (
                      <option key={localGovt} value={localGovt}>
                        {localGovt}
                      </option>
                    ))}
                  </select>
                </div>
                {/* } */}
                {/* 3 */}
                {lgasearch !== "all" && (
                  <div className="flex flex-col">
                    {/* <label className='text-primary90 font-[400]'>Ward</label> */}
                    <select
                      defaultValue=""
                      onChange={(e) => setWard(e.target.value)}
                      className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
                    >
                      <option value={ward}>{"All wards"}</option>
                    </select>
                  </div>
                )}
                <div className="flex gap-2 justify-end ml-6">
                  <button
                    onClick={handlesearchsubmit}
                    className="bg-primary90 p-[16px] text-light10 rounded-[8px]"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {componentToRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageAnalytics;
