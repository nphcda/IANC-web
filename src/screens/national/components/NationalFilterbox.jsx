import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import axiosInstance from "../../../utils/axios";

const NationalFilterbox = ({
  selectedDateTo,
  filterdata,
  setSelectedDateTo,
  selectedDateFrom,
  setSelectedDateFrom,
  filter,
  setFilter,
  setSearchitem,
  setFilteritem,
  filteritem,
}) => {
  const [search, setSearch] = useState({
    state: "all",
    lga: "all",
    healthfacility: "all",
  });
  //   console.log(filteritem, " :", "myfilter");
  useEffect(() => {
    if (search.state == "all") {
      setFilteritem("national");
    }
    if (search.lga == "all") {
      setFilteritem("national");
    }
  }, [search]);

  const [stateAccounts, setStateAccounts] = useState();
  const [lgaAccounts, setLgaAccounts] = useState();
  const [hfAccounts, setHfAccounts] = useState();
  // console.log(lgaAccounts);

  useEffect(() => {
    if (filter == "state" || filter == "national") {
      setSearch({ state: "all", lga: "all", healthfacility: "all" });
      setSearchitem({
        state: "all",
        lga: "",
        healthFacility: "",
        datefrom: "",
        dateto: "",
      });
    }
    if (filter == "lga") {
      setSearch({ state: "", lga: "all", healthfacility: "" });
      setSearchitem({
        state: "",
        lga: "all",
        healthFacility: "",
        datefrom: "",
        dateto: "",
      });
    }
    if (filter == "HealthFacility") {
      setSearch({ state: "", lga: "", healthfacility: "all" });
      setSearchitem({
        state: "",
        lga: "",
        healthFacility: "all",
        datefrom: "",
        dateto: "",
      });
    }
  }, [filter]);

  const {} = useQuery({
    queryKey: ["stateAccounts"],
    queryFn: () => getAllStates(),
  });
  const {} = useQuery({
    queryKey: ["lgaAccounts"],
    queryFn: () => getAllLga(),
  });
  const {} = useQuery({
    queryKey: ["healthfacilityAccounts"],
    queryFn: () => getAllHealthFacility(),
  });

  //::::API CALL FUNCTIONS --start::://
  const getAllStates = async () => {
    const result = await axiosInstance.get("/admin/state/data/find/states");
    setStateAccounts(result.data);
    return result.data;
  };
  const getAllLga = async () => {
    const result = await axiosInstance.get(`/admin/lga/data/find/lga`);
    setLgaAccounts(result.data);
    return result.data;
  };
  const getAllHealthFacility = async () => {
    const result = await axiosInstance.get(
      `/admin/healthfacility/data/find/healthfacility`
    );
    setHfAccounts(result.data);
    return result.data;
  };

  //:::sort states alphabetically::://
  const sortedstates = stateAccounts?.sort((a, b) =>
    a.state.localeCompare(b.state)
  );
  //:::sort lga alphabetically according to state::://
  const sortedlga = lgaAccounts?.sort((a, b) => a.state.localeCompare(b.state));
  //:::sort hf alphabetically according to state::://
  const sortedhf = hfAccounts?.sort((a, b) => a.state.localeCompare(b.state));

  const handlestate = (e) => {
    if (e.target.value !== "all") {
      setFilteritem("state");
    } else {
      setFilteritem("national");
    }
    setSearchitem({
      state: e.target.value,
      lga: "",
      healthFacility: "",
      datefrom: "",
      dateto: "",
    });
    setSearch({
      state: e.target.value,
      lga: "",
      healthFacility: "",
      datefrom: "",
      dateto: "",
    });
    // getAllLga(e.target.value);
  };
  const handlelgasearch = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];

    const state = selectedOption.getAttribute("data-state");
    if (e.target.value !== "all") {
      setFilteritem("lga");
    } else {
      setFilteritem("national");
    }
    setSearch({
      state: "",
      lga: e.target.value,
      healthFacility: "",
      datefrom: "",
      dateto: "",
    });
    setSearchitem({
      state: "",
      lga: e.target.value + "/" + state,
      healthFacility: "",
      datefrom: "",
      dateto: "",
    });
  };
  const handlehfsearch = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];

    const state = selectedOption.getAttribute("data-state");
    const lga = selectedOption.getAttribute("data-lga");
    if (e.target.value !== "all") {
      setFilteritem("healthfacility");
    } else {
      setFilteritem("national");
    }
    setSearch({
      state: "",
      lga: "",
      healthFacility: e.target.value,
      datefrom: "",
      dateto: "",
    });
    setSearchitem({
      state: "",
      lga: "",
      healthFacility: e.target.value + "/" + state + "/" + lga,
      datefrom: "",
      dateto: "",
    });
  };

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
    } else {
      alert("Please select a valid date");
    }
  };
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  const handleclearfilter = () => {
    setSearch({ state: "all", lga: "all", healthfacility: "all" });
    setSearchitem({
      state: "all",
      lga: "all",
      healthFacility: "all",
      datefrom: "",
      dateto: "",
    });
    setSelectedDateFrom();
    setSelectedDateTo();
  };
  return (
    <div className="w-full flex items-center justify-center my-5">
      <div className="bg-white min-w-[95%] pl-2 py-2 flex flex-row justify-around gap-3">
        {/* 1 */}
        <div className="flex flex-col">
          <label className="text-primary90 font-[400]">Filter</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-primary70"
          >
            {filterdata?.map((item, index) => (
              <option key={index} value={item}>
                {capitalizeFirstLetter(item)}
              </option>
            ))}
          </select>
        </div>

        {filter == "state" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="state"
              value={search.state}
              onChange={(e) => handlestate(e)}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-white outline-none rounded-[8px] border border-primary70"
            >
              <option value="all">All states</option>
              {stateAccounts?.length &&
                sortedstates.map((item, index) => (
                  <option key={index} value={item.state}>
                    {item.state}
                  </option>
                ))}
            </select>
          </div>
        )}
        {filter == "lga" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="lga"
              onChange={handlelgasearch}
              value={search.lga}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary70"
            >
              <option value="all">All LGA</option>
              {sortedlga?.map((localGovt, index) => (
                <option
                  data-state={localGovt.state}
                  key={index}
                  value={localGovt.lga}
                >
                  {localGovt.lga} ({capitalizeFirstLetter(localGovt.state)}{" "}
                  State)
                </option>
              ))}
            </select>
          </div>
        )}
        {filter == "HealthFacility" && (
          <div className="flex flex-col">
            <label className="text-primary90 font-[400]">Value</label>

            <select
              name="HealthFacility"
              onChange={handlehfsearch}
              value={search.healthfacility}
              className="p-[16px] myselect min-w-[150px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-primary70"
            >
              <option value="all">All Health Facility</option>
              {sortedhf?.map((h, index) => (
                <option
                  data-state={h.state}
                  data-lga={h.lga}
                  key={index}
                  value={h.healthfacilityname}
                >
                  {h.healthfacilityname} ({capitalizeFirstLetter(h.state)}{" "}
                  State)
                </option>
              ))}
            </select>
          </div>
        )}
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
        {/* <div>
          <button
            onClick={handleclearfilter}
            className="bg-primary70 px-3 py-2 rounded-md text-white font-[500]"
          >
            Search
          </button>
        </div> */}
        <div className="flex mt-auto">
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

export default NationalFilterbox;
