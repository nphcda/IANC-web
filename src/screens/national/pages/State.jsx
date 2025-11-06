import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import Pagination from "../../../components/Pagination";
import Filterbox from "../../../components/Filterbox";
import moment from "moment";
import axiosInstance from "../../../utils/axios";
import { downloadTable } from "../../../utils/helpers";
import { useRef } from "react";
import NationalFilterbox from "../components/NationalFilterbox";
import Notfound from "../../../components/Notfound";

const State = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["national"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [filteritem, setFilteritem] = useState("national");

  const [searchitem, setSearchitem] = useState({
    state: "all",
    lga: "",
    healthFacility: "",
    datefrom: "",
    dateto: "",
  });
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  console.log(searchitem);
  // page state
  const [states, setStates] = useState();
  const [statescount, setStatescount] = useState();
  const array = [1, 2, 3, 4];
  const getAllStates = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/state/find/filtered?page=${currentpage.value}&state=${searchitem.state}&lga=${searchitem.lga}&healthfacility=${searchitem.healthFacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}&filter=${filteritem}`
      );
      console.log(res.data);
      setStates(res.data.result);
      setStatescount(res.data.count);
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    getAllStates();
  }, [currentpage.value]);

  const tableRef = useRef();
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <CgNotes />
            <p className="text-secondary400 text-[18px] font-[600]">State</p>
          </div>
          <div className="flex gap-2 justify-end">
            <input
              className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
              placeholder="Patient, or SPHC or CLGA"
            />
            <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
              Search
            </button>
          </div>
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
            onClick={() => downloadTable(tableRef, "States")}
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
                  <th>State Board Name</th>
                  <th>State ID</th>
                  <th>Address</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {states?.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>{index + 1}</td>
                    <td>{item.boardname}</td>
                    <td>{item.stateid}</td>
                    <td>{item.officeaddress}</td>
                    <td>{moment(item.createdat).fromNow()}</td>
                    {/* <td className='text-primary90'>Message</td> */}
                    <td className="text-[#B02A37]">Deactivate</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!states?.length && <Notfound />}

            {/* pagination */}
            <Pagination
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={statescount / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
