import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import Pagination from "../../../components/Pagination";
import Filterbox from "../../../components/Filterbox";
import moment from "moment";
import axiosInstance from "../../../utils/axios";
import { downloadTable } from "../../../utils/helpers";
import { useRef } from "react";

const LGA = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["lgaID"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  //pagination
  const [currentpage, setCurrentpage] = useState(1);
  // page state
  const [lga, setLga] = useState();
  const array = [1, 2, 3, 4];
  const getAllLga = async () => {
    try {
      const res = await axiosInstance.get("/admin/lga/find");
      setLga(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllLga();
  }, []);
  const filterlga = (states, searchitem, filter) => {
    if (!lga) return []; // Return an empty array if patients is falsy

    if (searchitem && selectedDateFrom && selectedDateTo) {
      return lga.filter(
        (item) =>
          item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem) {
      return lga.filter((item) =>
        item[filter].toLowerCase().includes(searchitem.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return lga.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return lga;
    }
  };
  const filteredLga = filterlga(lga, searchitem, filter);
  const tableRef = useRef();
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <BsBookmarkDash />
            <p className="text-secondary400 text-[18px] font-[600]">
              Local Government Area
            </p>
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
        <Filterbox
          filterdata={filterdata}
          selectedDateTo={selectedDateTo}
          setSearchitem={setSearchitem}
          setSelectedDateTo={setSelectedDateTo}
          selectedDateFrom={selectedDateFrom}
          setSelectedDateFrom={setSelectedDateFrom}
          setFilter={setFilter}
          filter={filter}
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
                  <th>LGA ID</th>
                  <th>Address</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {lga
                  ? (searchitem || (selectedDateTo && selectedDateFrom)
                      ? filteredLga
                      : lga
                    ).map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                      >
                        <td>{index + 1}</td>
                        <td>{item.boardname}</td>
                        <td>{item.lgaID}</td>
                        <td>{item.officeaddress}</td>
                        <td>{moment(item.createdat).fromNow()}</td>
                        <td className="text-primary90">Message</td>
                        <td className="text-[#B02A37]">Deactivate</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
            {/* pagination */}
            <Pagination
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={
                lga?.length / 10 || (filteredLga && filteredLga?.length / 10)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGA;
