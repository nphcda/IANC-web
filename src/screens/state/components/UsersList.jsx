import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import Csvbutton from "../../../components/Csvbutton";

const UsersList = ({ state }) => {
  const [lgaUsers, setlgaUsers] = useState();
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const getlgausers = async () => {
    const res = await axiosInstance.get(`/admin/lga/users?state=${state}`);
    setlgaUsers(res.data);
  };
  useEffect(() => {
    getlgausers();
  }, []);
  const tableRef = useRef();
  return (
    <div className="min-w-[1000px]">
      <div className="flex gap-2 my-8 justify-start">
        {/* <input
          className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
          placeholder="Patient, or SPHC or CLGA"
        />
        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
          Search
        </button> */}
      </div>
      <Csvbutton tableName={"users list"} tableRef={tableRef} />
      <table ref={tableRef} className="cursor-default w-full">
        <thead>
          <tr>
            <th>SN</th>
            <th>Staff Name</th>
            <th>Staff ID</th>
            <th>LGA</th>
            <th>Date Created</th>
            <th>Phone Number</th>
            <th>Cadre</th>
            <th>Gender</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {lgaUsers
            ?.slice(10 * currentpage.value - 10, 10 * currentpage.value)
            .map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
              >
                <td>{item.id}</td>
                <td>{item.staffname}</td>
                <td>{item.staffid}</td>
                <td>{item.lga}</td>
                <td>{moment(item.createdat).fromNow()}</td>
                <td className="">{item.phone}</td>
                <td className="">{item.cadre}</td>
                <td className="">{item.gender}</td>
                <td className="">{item.state}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination
        currentpage={currentpage.value}
        setCurrentpage={setCurrentpage}
        pages={lgaUsers?.length / 10}
        displaynum={10}
      />
    </div>
  );
};

export default UsersList;
