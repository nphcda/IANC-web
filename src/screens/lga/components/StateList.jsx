import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import Pagination from "../../../components/Pagination";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";

const StateList = () => {
  //pagination
  const [currentpage, setCurrentpage] = useState(1);
  const [facilitylist, setFacilityList] = useState();
  const { lgaAuth } = useAuth();
  const { lga, state } = lgaAuth.others;

  const getHealthfacilities = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/healthfacility/find/filtered?state=${state}&lga=${lga}`
      );
      setFacilityList(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getHealthfacilities();
  }, []);

  return (
    <div className="w-full ">
      <div className="flex gap-2 my-8 justify-start">
        <input
          className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
          placeholder="Name or ID"
        />
        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
          Search
        </button>
      </div>
      <div className="w-full flex items-center justify-center">
        <table className="cursor-default w-[95%]">
          <thead>
            <tr>
              <th>SN</th>
              <th>Health Facility</th>
              <th>Health Facility ID</th>
              <th>Office Address</th>
              <th>Date Created</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {facilitylist?.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
              >
                <td>{item.id}</td>
                <td>{item.healthfacilityname}</td>
                <td>{item.healthfacilityID}</td>
                <td>{item.officeaddress}</td>
                <td>{moment(item.createdat).format("yyyy-MM-DD")}</td>
                <td className="">{item.phone}</td>
                <td className="">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <Pagination
        currentpage={currentpage}
        setCurrentpage={setCurrentpage}
        pages={facilitylist?.length / 10}
        displaynum={10}
      />
    </div>
  );
};

export default StateList;
