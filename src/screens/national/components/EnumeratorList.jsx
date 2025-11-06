import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import Pagination from "../../../components/Pagination";
import { downloadTable } from "../../../utils/helpers";
import Csvbutton from "../../../components/Csvbutton";
import { useGetAllEnumerators } from "../queries/enumeration";
import NewPagination from "../../../components/NewPagination";
import LoaderSmall from "../../../components/LoaderSmall";

const EnumeratorList = () => {
  const [stateusers, setStateusers] = useState();
  const [isActive, setIsActive] = useState(1);
  //pagination
  const [currentpage, setCurrentpage] = useState(1);

  const tableRef = useRef();

  const { enumerators, isLoading } = useGetAllEnumerators({
    pageNumber: currentpage,
  });
  const handlePageChange = (page) => {
    setCurrentpage(page);
  };
  return (
    <div className="mt-9 w-full">
      <Csvbutton tableRef={tableRef} tableName={"user list"} />
      {/* patients table */}
      <div className="w-full flex items-center justify-center font-inter my-5">
        <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
          {!isLoading ? (
            <table ref={tableRef} className="cursor-default mt-7 w-full">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Enumerator Name</th>
                  <th>Phone Number</th>
                  <th>UserId</th>
                  <th>State</th>
                  <th>Lga</th>
                  <th>Gender</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {enumerators?.result?.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.userID}</td>
                    <td className="">{item.state}</td>
                    <td className="">{item.lga}</td>
                    <td className="">{item.gender}</td>
                    <td>{moment(item.createdAt).fromNow()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <LoaderSmall />
          )}
          {/* pagination */}

          <NewPagination
            pagination={enumerators?.pagination}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EnumeratorList;
