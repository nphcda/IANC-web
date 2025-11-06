import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoBagAddOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import axiosInstance from "../../../utils/axios";
import Filterbox from "../../../components/Filterbox";
import Pagination from "../../../components/Pagination";
import { useAuth } from "../hooks/useAuth";
import Csvbutton from "../../../components/Csvbutton";
import Notfound from "../../../components/Notfound";

const HealthFacility = () => {
  const { lgaAuth } = useAuth();
  const { lga } = lgaAuth.others;
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["healthfacilityname", "healthfacilityID", "ward"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  const formattedDateFrom = moment(selectedDateFrom).format("yyyy-MM-DD");
  const formattedDateTo = moment(selectedDateTo).format("yyyy-MM-DD");
  const [healthFacilities, setHealthfacilities] = useState();
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const getHealthfacilities = async () => {
    try {
      const res = await axiosInstance.get("/admin/healthfacility/find");
      const filtered = res.data.filter(
        (item) => item.lga.toLowerCase() == lga.toLowerCase()
      );

      setHealthfacilities(filtered);
    } catch (err) {}
  };
  useEffect(() => {
    getHealthfacilities();
  }, []);
  // const filterhealthfacility = (healthFacilities, searchitem, filter) => {
  //   if (!healthFacilities) return []; // Return an empty array if patients is falsy

  //   if (searchitem && selectedDateFrom && selectedDateTo) {
  //     return healthFacilities.filter(
  //       (item) =>
  //         item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //   } else if (searchitem) {
  //     return healthFacilities.filter((item) =>
  //       item[filter].toLowerCase().includes(searchitem.toLowerCase())
  //     );
  //   } else if (selectedDateFrom && selectedDateTo) {
  //     return healthFacilities.filter(
  //       (item) =>
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //   } else {
  //     return healthFacilities;
  //   }
  // };
  // const filteredHealthfacilities = filterhealthfacility(
  //   healthFacilities,
  //   searchitem,
  //   filter
  // );
  const tableRef = useRef();
  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <IoBagAddOutline />
            <p className="text-secondary400 text-[18px] font-[600]">
              Health Facility
            </p>
          </div>
          {/* <div className='flex gap-2 justify-end'>
                        <input className='outline-0 bg-transparent text-[14px] font-[400] rounded-[8px] border-secondary30 border p-2' placeholder="Patient, or SPHC or CLGA" />
                        <button className="bg-primary90 p-2 text-light10 rounded-[8px]">Search</button>
                    </div> */}
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
        {/* patients table */}
        <Csvbutton tableName={"Health Facility"} tableRef={tableRef} />
        <div className="w-full flex items-center justify-center font-inter my-5">
          <div className="bg-white w-[95%] flex flex-col items-center justify-start pl-6 py-4">
            <table ref={tableRef} className="cursor-default w-full">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Health facility Name</th>
                  <th>Healthfacility ID</th>
                  <th>Ward</th>
                  <th>Date Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {healthFacilities
                  ? (searchitem || (selectedDateTo && selectedDateFrom)
                      ? healthFacilities
                      : healthFacilities
                    )
                      .slice(
                        10 * currentpage.value - 10,
                        10 * currentpage.value
                      )
                      .map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                        >
                          <td>{item.id}</td>
                          <td>{item.healthfacilityname}</td>
                          <td>{item.healthfacilityID}</td>
                          <td>{item.ward}</td>
                          <td>{moment(item.createdat).fromNow()}</td>
                          {/* <td className="text-primary90">Message</td> */}
                          <td className="text-[#B02A37]">Deactivate</td>
                        </tr>
                      ))
                  : null}
              </tbody>
            </table>
            {!healthFacilities?.length && <Notfound />}

            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={healthFacilities?.length / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthFacility;
