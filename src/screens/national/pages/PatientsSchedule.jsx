import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import Filterbox from "../../../components/Filterbox";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import { downloadTable } from "../../../utils/helpers";
import Notfound from "../../../components/Notfound";
import NationalFilterbox from "../components/NationalFilterbox";

const PatientsSchedule = () => {
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["state", "lga", "healthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [filteritem, setFilteritem] = useState("national");

  const [searchitem, setSearchitem] = useState({
    state: "all",
    lga: "all",
    healthFacility: "all",
    datefrom: "",
    dateto: "",
  });
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const [patientsSchedule, setPatientsSchedule] = useState();
  const [totalPatientsSchedule, setTotalPatientsSchedule] = useState();

  const getAllPatientschedule = async () => {
    try {
      const res = await axiosInstance.get(
        `/admin/schedule/getAllSchedule?page=${currentpage.value}&state=${searchitem.state}&lga=${searchitem.lga}&healthfacility=${searchitem.healthFacility}&from=${searchitem.datefrom}&to=${searchitem.dateto}&filter=${filteritem}`
      );
      console.log(res.data);
      setPatientsSchedule(res.data.result);
      setTotalPatientsSchedule(res.data.count);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPatientschedule();
  }, [currentpage.value, filteritem, searchitem]);

  const tableRef = useRef();

  // const filterPatients = (patientsSchedule, searchitem, filter) => {
  //   if (!patientsSchedule) return [];
  //   let filteredpage;
  //   if (searchitem && selectedDateFrom && selectedDateTo) {
  //     filteredpage = patients.filter(
  //       (item) =>
  //         item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //     return filteredpage;
  //   } else if (searchitem) {
  //     filteredpage = patientsSchedule.filter((item) =>
  //       item[filter].toLowerCase().includes(searchitem.toLowerCase())
  //     );
  //     return filteredpage;
  //   } else if (selectedDateFrom && selectedDateTo) {
  //     filteredpage = patientsSchedule.filter(
  //       (item) =>
  //         new Date(item.createdat).getTime() >=
  //           new Date(selectedDateFrom).getTime() &&
  //         new Date(item.createdat).getTime() <=
  //           new Date(selectedDateTo).getTime()
  //     );
  //     return filteredpage;
  //   } else {
  //     return patientsSchedule;
  //   }
  // };
  // const filteredPatients = filterPatients(patientsSchedule, searchitem, filter);

  return (
    <div>
      <div className="bg-primary10">
        {/* dashboard */}
        <div className="flex w-full items-center justify-between px-3 py-3">
          <div className="flex gap-2 items-center p-2">
            <LuCalendarDays />
            <p className="text-secondary400 text-[18px] font-[600]">
              Patients Schedule
            </p>
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
            onClick={() => downloadTable(tableRef, "Patients Schedule")}
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
                  <th>Patient Name</th>
                  <th>Patient ID</th>
                  <th>Health Facility</th>
                  <th>Scheduled Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {patientsSchedule?.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                  >
                    <td>{index + 1}</td>
                    <td>{item.firstname}</td>
                    <td>{item.patient_id}</td>
                    <td>{item.healthfacility}</td>
                    <td>{`from ${moment(item.datefrom).format(
                      "yyyy-MM-DD"
                    )} to ${moment(item.dateto).format("yyyy-MM-DD")}`}</td>
                    {item.completed == 1 ? (
                      <td className="text-primary70">{`Completed`}</td>
                    ) : (
                      <td className="text-[#CC9A06]">{` Not Completed`}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            {!patientsSchedule?.length && <Notfound />}

            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={totalPatientsSchedule / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSchedule;
