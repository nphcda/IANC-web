import React, { useEffect, useRef, useState } from "react";

import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import Notfound from "../../../components/Notfound";
import Patientview from "../components/Patientview";
import { useNavigate } from "react-router-dom";
import { FaRegFileAlt } from "react-icons/fa";
import { downloadTable } from "../../../utils/helpers";
import Recordfirstvisit from "../components/Recordfirstvisit";
import Recordreturnvisit from "../components/Recordreturnvisit";
import Recordpatients from "../components/Recordpatients";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Records = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["National", "state", "lga", "HealthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  const [stateAccounts, setStateAccounts] = useState();
  const [lgaAccounts, setlgaAccounts] = useState();
  const [hfAccounts, sethfAccounts] = useState();

  const [nationalSelect, setNationalSelect] = useState();
  const [stateSelect, setStateSelect] = useState();
  const [lgaSelect, setLgaSelect] = useState();
  const [healthfacilitySelect, setHealthfacilitySelect] = useState();

  //
  const [patients, setPatients] = useState();
  const [isActive, setIsActive] = useState(1);
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });

  const getFiltervalues = () => {
    let item;
    if (filter === "National") {
      item = "";
    }
    if (filter === "state") {
      item = stateSelect;
    }
    if (filter === "lga") {
      item = lgaSelect;
    }
    if (filter === "HealthFacility") {
      item = healthfacilitySelect;
    }
    return item;
  };
  const getIndicatordata = async () => {
    try {
      const res = await axiosInstance.get("/admin/national/data/general");
      setData(res.data);
    } catch (error) {}
  };

  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/findwithworkers");
      setPatients(res.data.result);
    } catch (err) {}
  };
  const getAllStates = async () => {
    const result = await axiosInstance.get("/admin/state/data/find/states");
    setStateAccounts(result.data);
  };
  const getAllLga = async () => {
    const result = await axiosInstance.get(`/admin/lga/data/find/lga`);
    setlgaAccounts(result.data);
  };
  const gethealthfacilities = async () => {
    try {
      const result = await axiosInstance.get("/admin/healthfacility/find");
      sethfAccounts(result.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllPatients();
    getAllStates();
    getAllLga();
    gethealthfacilities();
  }, []);

  const sortedstates = stateAccounts?.sort((a, b) =>
    a.state.localeCompare(b.state)
  );
  const sortedlgas = lgaAccounts?.sort((a, b) => a.lga.localeCompare(b.lga));
  const sortedhealthfacilities = hfAccounts?.sort((a, b) =>
    a.healthfacilityname.localeCompare(b.healthfacilityname)
  );

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/national/patients/${itemId}`);
  };

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const [navigatorSlide, setNavigatorSlide] = useState(1);
  //data

  const NationalSelectbox = () => (
    <select
      value={nationalSelect}
      onChange={(e) => setNationalSelect(e.target.value)}
      className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
    >
      <option>All States</option>
    </select>
  );

  const Stateselectbox = () => (
    <select
      value={stateSelect}
      onChange={(e) => setStateSelect(e.target.value)}
      className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
    >
      <option>Choose State</option>
      {sortedstates?.map((item, index) => (
        <option key={index} value={item.state}>
          {capitalizeFirstLetter(item.state)}
        </option>
      ))}
    </select>
  );

  const Lgaselectbox = () => (
    <select
      value={lgaSelect}
      onChange={(e) => setLgaSelect(e.target.value)}
      className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
    >
      <option>Choose LGA</option>
      {sortedlgas?.map((item, index) => (
        <option key={index} value={item.lga}>
          {capitalizeFirstLetter(item.lga)}
        </option>
      ))}
    </select>
  );

  const Hfselectbox = () => (
    <select
      value={healthfacilitySelect}
      onChange={(e) => setHealthfacilitySelect(e.target.value)}
      className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
    >
      <option>Choose Facility</option>
      {sortedhealthfacilities?.map((item, index) => (
        <option key={index} value={item.healthfacilityname}>
          {capitalizeFirstLetter(item.healthfacilityname)}
        </option>
      ))}
    </select>
  );
  const filtervalue = getFiltervalues();
  let componentToRender;

  switch (navigatorSlide) {
    case 1:
      componentToRender = (
        <Recordfirstvisit
          selectedDateFrom={selectedDateFrom}
          selectedDateTo={selectedDateTo}
          values={filtervalue}
          searchitem={filter}
        />
      );
      break;
    case 2:
      componentToRender = (
        <Recordreturnvisit
          selectedDateFrom={selectedDateFrom}
          selectedDateTo={selectedDateTo}
          values={filtervalue}
          searchitem={filter}
        />
      );
      break;
    case 3:
      componentToRender = (
        <Recordpatients
          selectedDateFrom={selectedDateFrom}
          selectedDateTo={selectedDateTo}
          values={filtervalue}
          searchitem={filter}
        />
      );
      break;
    default:
      componentToRender = null;
      break;
  }

  const Filterbox = () => {
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
    const capitalizeFirstLetter = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    const resetfilters = () => {
      setFilter(filterdata[0]);
      setSelectedDateTo();
      setSelectedDateFrom();
    };
    return (
      <div className="w-full flex items-center justify-center my-5">
        <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row items-center justify-around gap-3">
          {/* 1 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Filter</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]"
            >
              {filterdata?.map((item, index) => (
                <option key={index} value={item}>
                  {capitalizeFirstLetter(item)}
                </option>
              ))}
            </select>
          </div>
          {/* 2 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">value</label>
            {filter === "National" ? (
              <NationalSelectbox />
            ) : filter === "state" ? (
              <Stateselectbox />
            ) : filter === "lga" ? (
              <Lgaselectbox />
            ) : filter === "HealthFacility" ? (
              <Hfselectbox />
            ) : null}
          </div>
          {/* 3 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date From</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateFrom}
              onChange={(date) => handleDateFromChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateFrom}
            />
          </div>
          {/* 4 */}
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Date To</label>
            <DatePicker
              className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-[#C6C7C880]"
              placeholderText="choose Date"
              selected={selectedDateTo}
              onChange={(date) => handleDateToChange(date)}
              dateFormat="yyyy-MM-dd"
              defaultValue={selectedDateTo}
            />
          </div>
          <div
            onClick={resetfilters}
            className="bg-primary90 cursor-pointer text-white px-3 py-2 font-500 text-center rounded-[8px]"
          >
            Reset
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="bg-primary10 w-full flex flex-col min-h-screen">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <FaRegFileAlt />
            <p className="text-secondary400 text-[18px] font-[600]">Records</p>
          </div>
          {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
        </div>

        {/* selectbox1 */}
        <Filterbox
          selectedDateTo={selectedDateTo}
          selectedDateFrom={selectedDateFrom}
        />

        {/* navigator */}
        <div className="flex items-center gap-6 pl-4">
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
          <div
            onClick={() => setNavigatorSlide(2)}
            className={`cursor-pointer text-center ${
              navigatorSlide === 2
                ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                : "text-light90 pb-2 font-[500]"
            }`}
          >
            Return Visit
          </div>
          <div
            onClick={() => setNavigatorSlide(3)}
            className={`cursor-pointer text-center ${
              navigatorSlide === 3
                ? "text-primary70 border-b-4 font-[500] pb-2 border-primary70"
                : "text-light90 pb-2 font-[500]"
            }`}
          >
            Patients
          </div>
        </div>
        {/* navigator screen slides */}
        {componentToRender}
      </div>
    </div>
  );
};

export default Records;
