import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";

const UsersList = () => {
  const { lgaAuth } = useAuth();
  const { lga } = lgaAuth.others;
  //pagination
  const [currentpage, setCurrentpage] = useState(1);
  const [healthfacilityusers, setHealthfacilityusers] = useState();
  const getHealthfacilityusers = async () => {
    try {
      const res = await axiosInstance.get("/admin/healthfacility/find/users");
      const filtered = res.data.filter((item) => item.lga == lga);
      setHealthfacilityusers(filtered);
    } catch (error) {}
  };
  useEffect(() => {
    getHealthfacilityusers();
  }, []);

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
      <table className="cursor-default w-full">
        <thead>
          <tr>
            <th>SN</th>
            <th>Staff Name</th>
            <th>Staff ID</th>
            <th>Ward</th>
            <th>LGA</th>
            <th>Date Created</th>
            <th>Phone Number</th>
            <th>Cadre</th>
          </tr>
        </thead>
        <tbody>
          {healthfacilityusers?.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
            >
              <td>{item.id}</td>
              <td>{item.staffname}</td>
              <td>{item.staffid}</td>
              <td>{item.ward}</td>
              <td>{item.lga}</td>
              <td>{moment(item.createdat).format("yyyy-MM-DD")}</td>
              <td className="">{item.phone}</td>
              <td className="">{item.cadre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        pages={healthfacilityusers?.length / 10}
        displaynum={10}
      />
    </div>
  );
};

export default UsersList;
