import React, { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import Csvbutton from "../../../components/Csvbutton";

const LgaList = () => {
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const [lgalist, setLgalist] = useState();
  const getLgas = async () => {
    try {
      const res = await axiosInstance.get("/admin/lga/find");
      setLgalist(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getLgas();
  }, []);
  const tableRef = useRef();
  return (
    <div className="w-full ">
      <div className="flex gap-2 my-8 justify-start">
        {/* <input
          className="outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2"
          placeholder="Name or ID"
        />
        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">
          Search
        </button> */}
      </div>
      <Csvbutton tableName={"LGA list"} tableRef={tableRef} />
      <div className="w-full flex items-center justify-center">
        <table ref={tableRef} className="cursor-default w-[95%]">
          <thead>
            <tr>
              <th>SN</th>
              <th>LGA</th>
              <th>LGA ID</th>
              <th>Office Address</th>
              <th>Date Created</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lgalist
              ?.slice(10 * currentpage.value - 10, 10 * currentpage.value)
              .map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                >
                  <td>{item.id}</td>
                  <td>{item.lga}</td>
                  <td>{item.lgaid}</td>
                  <td>{item.officeaddress}</td>
                  <td>{moment(item.createdat).fromNow()}</td>
                  <td className="">{item.phone}</td>
                  <td className="">{item.email}</td>
                  {item.status ? (
                    <td className="text-red-500">Deactivate</td>
                  ) : (
                    <td className="text-primary90">Activate</td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <Pagination
        currentpage={currentpage.value}
        setCurrentpage={setCurrentpage}
        pages={lgalist?.length / 10}
        displaynum={10}
      />
    </div>
  );
};

export default LgaList;
