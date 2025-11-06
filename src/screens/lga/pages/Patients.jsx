import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineFileSearch,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import Notfound from "../../../components/Notfound";
import { useNavigate } from "react-router-dom";
import { downloadTable } from "../../../utils/helpers";
import { useRef } from "react";

import StateFilterBox from "../../state/components/StateFilterBox";
import { useAuth } from "../hooks/useAuth";
import LgaFilterBox from "../components/LgaFilterBox";

const Patients = () => {
  const { lgaAuth } = useAuth();
  const { lga, state } = lgaAuth.others;
  const tableRef = useRef();
  const [patients, setPatients] = useState();
  const [totalPatients, setTotalPatients] = useState();

  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["lga", "HealthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [filteritem, setFilteritem] = useState("lga");
  // console.log("filteritem", filteritem);
  const [searchitem, setSearchitem] = useState({
    state: "all",
    lga: lga,
    healthFacility: "all",
    datefrom: "",
    dateto: "",
  });

  const [isActive, setIsActive] = useState(1);
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });

  const getPatients = async () => {
    try {
      const res = await axiosInstance.get(
        `/patients/findwithworkers?page=${currentpage.value}&state=${state}&lga=${lga}&healthfacility=${searchitem.healthFacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}&filter=${filteritem}`
      );
      const result = res.data.result;
      setPatients(result);
      setTotalPatients(res.data.count);
    } catch (error) {}
  };
  useEffect(() => {
    getPatients();
  }, [currentpage.value, filteritem, searchitem]);

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/state/patients/${itemId}`);
  };

  return (
    <div>
      <div className="bg-primary10 flex flex-col min-h-screen">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <HiOutlineUserGroup />
            <p className="text-secondary400 text-[18px] font-[600]">Patients</p>
          </div>
        </div>

        {/* selectbox1 */}
        <LgaFilterBox
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
        <div className="pl-6">
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "Patients")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
        {/* patients table */}
        <div className="w-full flex-1 flex items-center justify-center font-inter my-5">
          <div className="bg-white min-h-[500px] w-[95%] flex flex-col items-center justify-between pl-6 py-4">
            <table ref={tableRef} className="cursor-default w-full">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Patient Name</th>
                  <th>Patient ID</th>
                  <th>State</th>
                  <th>LGA</th>
                  <th>Health Facility</th>
                  <th>Last Visit</th>
                </tr>
              </thead>
              <tbody>
                {patients?.map((item, index) => (
                  <tr
                    onClick={() => handleItemClick(item.id)}
                    key={item.id}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>
                      {currentpage.value == 1
                        ? index + 1
                        : 20 * currentpage.value + (index + 1) - 20}
                    </td>
                    <td>{item.firstname}</td>
                    <td>{item.id}</td>
                    <td>{item.state}</td>
                    <td>{item.lga}</td>
                    <td>{item.healthFacility}</td>
                    <td>{moment(item.last_visit).fromNow()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!patients?.length && <Notfound />}
            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={totalPatients / 20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
