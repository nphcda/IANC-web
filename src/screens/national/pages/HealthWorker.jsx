import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineGroup } from "react-icons/md";
import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import Filterbox from "../../../components/Filterbox";
import moment from "moment";
import { downloadTable } from "../../../utils/helpers";
import NationalFilterbox from "../components/NationalFilterbox";

const HealthWorker = () => {
  const [workers, setWorkers] = useState();
  const [workerscount, setWorkerscount] = useState();
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["state", "lga", "healthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [filteritem, setFilteritem] = useState("national");
  const [searchitem, setSearchitem] = useState();
  const formattedDateFrom = moment(selectedDateFrom).format("yyyy-MM-DD");
  const formattedDateTo = moment(selectedDateTo).format("yyyy-MM-DD");
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const getworkers = async () => {
    try {
      const res = await axiosInstance.get(
        `/users/find/filtered?page=${currentpage.value}&state=${searchitem.state}&lga=${searchitem.lga}&healthfacility=${searchitem.healthFacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}&filter=${filteritem}`
      );
      setWorkers(res.data.result);
      setWorkerscount(res.data.count);
    } catch (error) {}
  };
  useEffect(() => {
    getworkers();
  }, [currentpage.value, filteritem, searchitem]);

  const tableRef = React.useRef();
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <MdOutlineGroup />
            <p className="text-secondary400 text-[18px] font-[600]">
              Health Worker
            </p>
          </div>
          {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
        </div>

        {/* selectbox1 */}
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
        <div className="pl-6">
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "Health workers")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
        {/* patients table */}
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            <table ref={tableRef} className="cursor-default w-full">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Client ID</th>
                  <th>Carde</th>
                  <th>State</th>
                  <th>LGA</th>
                  <th>Health Facility</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {workers?.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>{item.id}</td>
                    <td>{item.healthworker}</td>
                    <td>{item.id}</td>
                    <td>{item.cadre}</td>
                    <td>{item.state}</td>
                    <td>{item.lga}</td>
                    <td>{item.healthfacility}</td>
                    <td>{item.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={workerscount / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthWorker;
