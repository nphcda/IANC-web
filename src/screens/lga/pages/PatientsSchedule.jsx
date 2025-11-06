import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import Filterbox from "../../../components/Filterbox";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";
import Csvbutton from "../../../components/Csvbutton";
import Notfound from "../../../components/Notfound";

const PatientsSchedule = () => {
  const { lgaAuth } = useAuth();
  const { lga } = lgaAuth.others;
  //filter
  const [selectedDateTo, setSelectedDateTo] = useState();
  const [selectedDateFrom, setSelectedDateFrom] = useState();
  const filterdata = ["firstname", "state", "lga", "healthFacility"];
  const [filter, setFilter] = useState(filterdata[0]);
  const [searchitem, setSearchitem] = useState();
  //pagination
  const [currentpage, setCurrentpage] = useState({
    value: 1,
    isPagination: false,
  });
  const [patientsSchedule, setPatientsSchedule] = useState();
  const array = [1, 2, 3, 4];
  const getAllPatientschedule = async () => {
    try {
      const result = await axiosInstance.get("/users/schedule/find/all");
      const filtered = result.data.result.filter((item) => item.lga == lga);

      setPatientsSchedule(filtered);
    } catch (error) {}
  };
  useEffect(() => {
    getAllPatientschedule();
  }, []);
  const tableRef = useRef();
  const filterPatients = (patientsSchedule, searchitem, filter) => {
    if (!patientsSchedule) return [];
    let filteredpage;
    if (searchitem && selectedDateFrom && selectedDateTo) {
      filteredpage = patients.filter(
        (item) =>
          item[filter].toLowerCase().includes(searchitem.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
      return filteredpage;
    } else if (searchitem) {
      filteredpage = patientsSchedule.filter((item) =>
        item[filter].toLowerCase().includes(searchitem.toLowerCase())
      );
      return filteredpage;
    } else if (selectedDateFrom && selectedDateTo) {
      filteredpage = patientsSchedule.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
      return filteredpage;
    } else {
      return patientsSchedule;
    }
  };
  const filteredPatients = filterPatients(patientsSchedule, searchitem, filter);
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

        <Csvbutton tableName="Patients Schedule" tableRef={tableRef} />
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
                {patientsSchedule
                  ? (searchitem
                      ? patientsSchedule.filter((item) =>
                          item[filter]
                            ?.toLowerCase()
                            .includes(searchitem?.toLowerCase())
                        )
                      : patientsSchedule
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
                          <td>{index + 1}</td>
                          <td>{item.firstname}</td>
                          <td>{item.patient_id}</td>
                          <td>{item.healthFacility}</td>
                          <td>{`from ${moment(item.datefrom).format(
                            "yyyy-MM-DD"
                          )} to ${moment(item.dateto).format(
                            "yyyy-MM-DD"
                          )}`}</td>
                          {item.completed == 1 ? (
                            <td className="text-primary70">{`Completed`}</td>
                          ) : (
                            <td className="text-[#CC9A06]">{` Not Completed`}</td>
                          )}
                        </tr>
                      ))
                  : null}
              </tbody>
            </table>
            {!filteredPatients.length && <Notfound />}

            {/* pagination */}
            <Pagination
              currentpage={currentpage.value}
              setCurrentpage={setCurrentpage}
              displaynum={10}
              pages={filteredPatients.length / 10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSchedule;
