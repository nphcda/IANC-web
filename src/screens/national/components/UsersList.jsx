import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import { downloadTable } from "../../../utils/helpers";
import Csvbutton from "../../../components/Csvbutton";

const UsersList = () => {
  const [stateusers, setStateusers] = useState();
  const [isActive, setIsActive] = useState(1);
  //pagination
  const [currentpage, setCurrentpage] = useState(1);

  const tableRef = useRef();

  const getStateUsers = async () => {
    try {
      const res = await axiosInstance.get("/admin/state/find/users");
      setStateusers(res.data.result);
      // console.log(res.data.result)
    } catch (error) {}
  };
  useEffect(() => {
    getStateUsers();
  }, []);
  return (
    <div className="min-w-[1000px] mt-9">
      {/* <div className='flex gap-2 my-8 justify-start'>
                <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
            </div> */}
      {/* download csv */}
      <Csvbutton tableRef={tableRef} tableName={"user list"} />
      {/* patients table */}
      <div className="w-full flex items-center justify-center font-inter my-5">
        <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
          <table ref={tableRef} className="cursor-default mt-7 w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Staff Name</th>
                <th>Staff ID</th>
                <th>State</th>
                <th>Date Created</th>
                <th>Phone Number</th>
                <th>Cadre</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {stateusers?.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                >
                  <td>{item.id}</td>
                  <td>{item.staffname}</td>
                  <td>{item.staffid}</td>
                  <td>{item.state}</td>
                  <td>{moment(item.createdat).fromNow()}</td>
                  <td className="">{item.phone}</td>
                  <td className="">{item.cadre}</td>
                  <td className="">{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* pagination */}
          <Pagination
            currentpage={currentpage}
            setCurrentpage={setCurrentpage}
            pages={stateusers?.length / 10}
            displaynum={10}
          />
        </div>
      </div>
    </div>
  );
};

export default UsersList;
