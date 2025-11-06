import React, { useEffect, useRef, useState } from "react";
import Notfound from "../../../components/Notfound";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import LoaderSmall from "../../../components/LoaderSmall";

const Recordpatients = ({
  selectedDateFrom,
  selectedDateTo,
  values,
  searchitem,
}) => {
  const [patients, setPatients] = useState();
  const [currentpage, setCurrentpage] = useState({ value: 1 });
  const [loading, setLoading] = useState(false);

  const headers = patients && Object.keys(patients[0]);
  const tableRef = useRef();

  const getAllPatients = async () => {
    try {
      const res = await axiosInstance.get("/patients/find");
      setPatients(res.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getAllPatients();
  }, []);
  const filterpatients = (patients, searchitem, values) => {
    if (!patients) return [];
    if (searchitem && selectedDateFrom && selectedDateTo) {
      return patients.filter(
        (item) =>
          item[searchitem]?.toLowerCase().includes(values?.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem || values) {
      return patients.filter((item) =>
        item[searchitem]?.toLowerCase().includes(values?.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return patients.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return patients;
    }
  };
  const filteredPatients = filterpatients(patients, searchitem, values);
  const pages = filteredPatients?.length
    ? filteredPatients?.length / 20
    : patients?.length / 20;
  if (currentpage.value > pages + 1) {
    setCurrentpage({ value: 1 });
  }
  return (
    <div className="w-full flex items-center justify-center font-inter my-5">
      <div className="bg-white min-h-[500px] w-[1000px] overflow-x-auto pl-6  py-4">
        <div className="flex gap-4 items-center my-4">
          <p className="text-primary90 font-[600]">Patient Records</p>
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "Patients list")}
            className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
          >
            Download CSV
          </button>
        </div>
        {loading ? (
          <LoaderSmall />
        ) : (
          <table
            ref={tableRef}
            className="cursor-default w-full whitespace-nowrap overflow-scroll"
          >
            <thead>
              <tr className="">
                {headers?.map((header) => (
                  <th className="" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patients
                ? ((selectedDateTo && selectedDateFrom) ||
                  (searchitem && values)
                    ? filteredPatients
                    : patients
                  )
                    .slice(10 * currentpage.value - 10, 10 * currentpage.value)
                    .map((item, index) => (
                      <tr key={index}>
                        {headers?.map((header) => (
                          <td key={header}>{item[header]}</td>
                        ))}
                      </tr>
                    ))
                : null}
            </tbody>
          </table>
        )}
        {!patients?.length && <Notfound />}
        {/* pagination */}
        <Pagination
          currentpage={currentpage.value}
          setCurrentpage={setCurrentpage}
          displaynum={10}
          pages={
            filteredPatients?.length
              ? filteredPatients.length / 10
              : patients?.length / 10
          }
        />
      </div>
    </div>
  );
};

export default Recordpatients;
