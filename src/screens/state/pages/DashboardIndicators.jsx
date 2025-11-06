import React, { useState, useEffect } from "react";
import { RiArrowUpDownLine } from "react-icons/ri";
import IndicatorNavigatorScreen1 from "../components/IndicatorNavigatorScreen1";
import IndicatorNavigatorScreen2 from "../components/IndicatorNavigatorScreen2";
import IndicatorNavigatorScreen3 from "../components/IndicatorNavigatorScreen3";
import IndicatorNavigatorScreen4 from "../components/IndicatorNavigatorScreen4";
import IndicatorNavigatorScreen5 from "../components/IndicatorNavigatorScreen5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axiosInstance from "../../../utils/axios";
import Filterbox from "../../../components/Filterbox";
import stateLocalGovts from "../../../utils/stateandlgas";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../hooks/useAuth";

const DashboardIndicators = () => {
  const { stateAuth } = useAuth();
  const { state } = stateAuth.others;
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [localGovts, setLocalGovts] = useState([]);
  const [statesearch, setStatesearch] = useState("");
  const [lgasearch, setLgasearch] = useState("all");
  const [ward, setWard] = useState("all");
  const [chart, setChart] = useState("all");
  const [chartParam, setChartParam] = useState("all");
  const [indicatorsearchparam, setindicatorsearchparam] = useState({
    query: "state",
    state: "",
    lga: "",
  });
  const [anc, setAnc] = useState("2");

  const handleANC = (e) => {
    setAnc(e.target.value);
  };

  //navigation
  const [navigatorSlide, setNavigatorSlide] = useState(1);
  //data
  const [patients, setPatients] = useState(0);
  const [stateAccounts, setStateAccounts] = useState();
  const [lgaAccounts, setLgaAccounts] = useState();
  const [datainfo, setDatainfo] = useState();
  const [datainforeturn, setDatainforeturn] = useState([]);

  //::::API CALL FUNCTIONS --start::://
  const getAllStates = async () => {
    const result = await axiosInstance.get("/admin/state/data/find/states");
    setStateAccounts(result.data);
    return result.data;
  };
  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get("/admin/national/data/general");
      setDatainfo(Object.keys(res.data));
      return Object.keys(res.data);
    } catch (error) {}
  };
  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/find");
      setPatients(res.data.result.length);
      return res.data.result.length;
    } catch (err) {}
  };
  const getAllStatePatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/state/find?state=${statesearch}`
      );
      setPatients(res.data.result.length);
      return res.data.result.length;
    } catch (err) {}
  };
  const getAllLgaPatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/lga/find?lga=${lgasearch}`
      );
      setPatients(res.data.result.length);
      return res.data.result.length;
    } catch (err) {}
  };
  const getAllLga = async () => {
    const result = await axiosInstance.get(
      `/admin/lga/data/find/lga?state=${state}`
    );
    setLgaAccounts(result.data);
    return result.data;
  };
  useEffect(() => {
    getAllLga();
  }, []);
  const getIndicatordatareturn = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/national/data/general/return?anc=${anc}`
      );
      setDatainforeturn(Object.keys(res.data));
      return Object.keys(res.data);
    } catch (error) {}
  };

  //::::API CALL FUNCTIONS --end::://

  //:::Filter Box options:::///
  const Firstvisitoption = () => {
    const sorted = datainfo?.sort((a, b) => a.localeCompare(b));
    return (
      <>
        {sorted?.map((chart, index) => (
          <option key={index} value={chart}>
            {capitalizeFirstLetter(chart)}
          </option>
        ))}
      </>
    );
  };
  const Returnvisitoption = () => {
    const sorted = datainforeturn?.sort((a, b) => a.localeCompare(b));

    return (
      <>
        {sorted?.map((chart, index) => (
          <option key={index} value={chart}>
            {capitalizeFirstLetter(chart)}
          </option>
        ))}
      </>
    );
  };

  const Testresultoption = () => (
    <>
      <option value={"hiv"}>{capitalizeFirstLetter("hiv")}</option>
      <option value={"malaria"}>{capitalizeFirstLetter("malaria")}</option>
    </>
  );
  const Scheduleoption = () => (
    <>
      <option value={"schedule"}>{capitalizeFirstLetter("Schedule")}</option>
    </>
  );
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["returnvisit", anc],
    queryFn: getIndicatordatareturn,
  });
  const { refetch: IndicatorData } = useQuery({
    queryKey: ["indicatordata"],
    queryFn: getIndicatordata,
  });
  const { refetch: AllStates } = useQuery({
    queryKey: ["states"],
    queryFn: getAllStates,
  });
  const { refetch: getNationalPatients } = useQuery({
    queryKey: ["nationalpatients"],
    queryFn: getAllPatients,
  });
  const { refetch: getStatePatients } = useQuery({
    queryKey: ["statepatients"],
    queryFn: getAllStatePatients,
    enabled: false,
  });
  const { refetch: getLgaPatients } = useQuery({
    queryKey: ["lgapatients"],
    queryFn: getAllLgaPatients,
    enabled: false,
  });
  //:::UseEffect calls:::///
  // useEffect(() => {
  //   getAllStates();
  //   getIndicatordata();
  //   getAllPatients();
  //   // getIndicatordatareturn();
  // }, []);

  //:::sort states alphabetically::://
  const sortedstates = stateAccounts?.sort((a, b) =>
    a.state.localeCompare(b.state)
  );

  let componentToRender;
  let optionToRender;

  //::::Navigator switch:::://
  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <IndicatorNavigatorScreen1
          param={indicatorsearchparam}
          chart={chartParam}
        />
      );
      optionToRender = <Firstvisitoption />;
      break;
    case 2:
      componentToRender = <IndicatorNavigatorScreen2 />;
      break;
    case 3:
      componentToRender = (
        <IndicatorNavigatorScreen3
          param={indicatorsearchparam}
          chart={chartParam}
          anc={anc}
        />
      );
      optionToRender = <Returnvisitoption />;
      break;
    case 4:
      componentToRender = (
        <IndicatorNavigatorScreen4
          param={indicatorsearchparam}
          chart={chartParam}
        />
      );
      optionToRender = <Testresultoption />;
      break;
    case 5:
      componentToRender = (
        <IndicatorNavigatorScreen5 param={indicatorsearchparam} />
      );
      optionToRender = <Scheduleoption />;
      break;
    default:
      componentToRender = null;
      break;
  }

  //:::::form handlers:::://
  const handleDateToChange = (date) => {
    if (date >= selectedDateFrom) {
      setSelectedDateTo(date);
    }
  };
  const handleDateFromChange = (date) => {
    if (date <= Date.now()) {
      setSelectedDateFrom(date);
    }
  };
  const handlestate = (e) => {
    setStatesearch(e.target.value);
    getAllLga(e.target.value);
  };
  const handlelgasearch = (e) => {
    setLgasearch(e.target.value);
  };
  const handlesearchsubmit = async () => {
    let searchquery;
    try {
      if (statesearch == "all") {
        searchquery = "national";
        setindicatorsearchparam({
          query: searchquery,
          state: statesearch,
          lga: lgasearch,
        });
        getNationalPatients();
      }
      if (statesearch !== "all" && lgasearch == "all") {
        searchquery = "state";
        setindicatorsearchparam({
          query: searchquery,
          state: statesearch,
          lga: lgasearch,
        });
        getStatePatients();
      }
      if (statesearch !== "all" && lgasearch !== "all") {
        searchquery = "lga";
        setindicatorsearchparam({
          query: searchquery,
          state: statesearch,
          lga: lgasearch,
        });
        getLgaPatients();
      }
      setChartParam(chart);
      // setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
    } catch (error) {}
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  useEffect(() => {
    if (statesearch !== "all") {
      setLocalGovts(stateLocalGovts[capitalizeFirstLetter(statesearch)]);
    }
  }, [statesearch]);

  //:::SEARCH BOX::://
  const Mysearchbox = () => {
    return (
      <div className="w-full flex items-center justify-center my-5">
        <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6">
          {/* 1 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Filter</label>
            <select
              defaultValue=""
              onChange={(e) => setFilter(e.target.value)}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
            >
              <option>{"Lga"}</option>
            </select>
          </div>

          {/* 2 */}
          {statesearch !== "all" && (
            <div className="flex flex-col">
              <label className="text-primary90 font-[400]">LGA</label>
              <select
                name="lga"
                onChange={handlelgasearch}
                value={lgasearch}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]"
              >
                <option value="">All LGA</option>
                {lgaAccounts?.map((localGovt, index) => (
                  <option key={index} value={localGovt.lga}>
                    {localGovt.lga}
                  </option>
                ))}
              </select>
            </div>
          )}
          {/* 3 */}
          {lgasearch !== "all" && (
            <div className="flex flex-col">
              <label className="text-primary90 font-[400]">Ward</label>
              <select
                defaultValue=""
                onChange={(e) => setWard(e.target.value)}
                className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
              >
                <option value={ward}>{"All wards"}</option>
              </select>
            </div>
          )}
          {/* date from */}
          {/* <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date From</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateFrom}
              onChange={(date) => handleDateFromChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateFrom}
            />
          </div> */}
          {/* date to */}
          {/* <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date To</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateTo}
              onChange={(date) => handleDateToChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateTo}
            />
          </div> */}
          {/* 4 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Chart</label>
            <select
              value={chart}
              onChange={(e) => setChart(e.target.value)}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
            >
              <option value="all">All charts</option>

              {optionToRender}
            </select>
          </div>
          {/* 5 button */}
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
    );
  };
  return (
    <div>
      {/* content */}
      <div className="bg-primary10 w-full">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <RiArrowUpDownLine />
            <p className="text-secondary400 text-[18px] font-[600]">
              Indicators
            </p>
          </div>
        </div>

        {/* selectbox1 */}
        <Mysearchbox />

        {/* indicator outcome */}
        <div className="w-full flex items-center justify-center my-5">
          <div className="bg-white min-w-[1000px] w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            {/* navigator */}
            <div className="flex px-3 w-full items-center justify-between gap-6">
              <div className="flex items-center flex-[3] justify-between ">
                <div
                  onClick={() => setNavigatorSlide(1)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 1
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  First Visit
                </div>
                {/* <div onClick={() => setNavigatorSlide(2)} className={`cursor-pointer text-center ${navigatorSlide === 2 ? 'text-primary70 border-b-4 font-[500] pb-2 border-primary70' : "text-light90 pb-2 font-[500]"}`}>First Visit</div> */}
                <div
                  onClick={() => setNavigatorSlide(3)}
                  className={`cursor-pointer flex items-center gap-2 text-center ${
                    navigatorSlide === 3
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  <p>Return Visit</p>
                  <select onChange={handleANC} className="outline-0">
                    <option value="2">ANC 2</option>
                    <option value={"3"}>ANC 3</option>
                    <option value={"4"}>ANC 4</option>
                    <option value={"5"}>ANC 5</option>
                    <option value={"6"}>ANC 6</option>
                    <option value={"7"}>ANC 7</option>
                    <option value={"8"}>ANC 8</option>
                  </select>
                </div>
                <div
                  onClick={() => setNavigatorSlide(4)}
                  className={`cursor-pointer text-center ${
                    navigatorSlide === 4
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Test Result
                </div>
                <div
                  onClick={() => setNavigatorSlide(5)}
                  className={`cursor-pointer ${
                    navigatorSlide === 5
                      ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                      : "text-light90 pb-2 font-[500]"
                  }`}
                >
                  Antenatal Schedule
                </div>
              </div>
            </div>
            {/* navigator screen slides */}
            {componentToRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndicators;
