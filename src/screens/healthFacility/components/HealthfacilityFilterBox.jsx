import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";
import axiosInstance from "../../../utils/axios";

const HealthfacilityFilterBox = ({
  selectedDateTo,
  setSelectedDateTo,
  selectedDateFrom,
  setSelectedDateFrom,

  setSearchitem,
}) => {
  const { healthfacilityAuth } = useAuth();
  const { state } = healthfacilityAuth.others;

  const [search, setSearch] = useState({
    state: state,
    ward: "all",
    healthfacility: "all",
  });

  const handleDateToChange = (date) => {
    if (date <= Date.now()) {
      setSelectedDateTo(date);
      setSearchitem((prev) => ({
        ...prev,
        dateto: moment(date).format("YYYY-MM-DD"),
        datefrom: moment(selectedDateFrom).format("YYYY-MM-DD"),
      }));
    } else {
      alert("Please select a valid date");
    }
  };
  const handleDateFromChange = (date) => {
    if (date <= Date.now()) {
      setSelectedDateFrom(date);
      // setSearchitem((prev) => ({
      //   ...prev,
      //   datefrom: date,
      // }));
    } else {
      alert("Please select a valid date");
    }
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const handleclearfilter = () => {
    setSelectedDateFrom();
    setSelectedDateTo();
  };

  return (
    <div className="w-full flex items-center justify-center my-5">
      <div className="bg-white min-w-[95%] pl-2 py-2  flex flex-row items-end justify-center gap-3">
        {/* 2 */}
        <div className="flex flex-col">
          <label className="text-primary90 font-[400]">Date From</label>
          <DatePicker
            className="custom-datepicker p-[16px] myselect text-secondary30 bg-transparent outline-none min-w-[180px] rounded-[8px] border border-primary70"
            placeholderText="Choose Date"
            selected={selectedDateFrom}
            onChange={(date) => handleDateFromChange(date)}
            dateFormat="yyyy-MM-dd"
            defaultValue={selectedDateFrom}
          />
        </div>
        {/* 3 */}
        <div className="flex flex-col">
          <label className="text-primary90 font-[400]">Date To</label>
          <DatePicker
            className="custom-datepicker p-[16px]  text-secondary30 outline-none min-w-[180px] rounded-[8px] border border-primary70"
            placeholderText="Choose Date"
            selected={selectedDateTo}
            onChange={(date) => handleDateToChange(date)}
            dateFormat="yyyy-MM-dd"
            defaultValue={selectedDateTo}
          />
        </div>

        <div className="h-full">
          <button
            onClick={handleclearfilter}
            className="bg-yellow-500 px-5 py-4 rounded-md text-white font-[500]"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthfacilityFilterBox;
