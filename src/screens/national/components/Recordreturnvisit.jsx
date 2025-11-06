import React, { useEffect, useRef, useState } from "react";
import Notfound from "../../../components/Notfound";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import { downloadTable } from "../../../utils/helpers";
import LoaderSmall from "../../../components/LoaderSmall";

const Recordreturnvisit = ({
  selectedDateFrom,
  selectedDateTo,
  values,
  searchitem,
}) => {
  const [patientreturnvisits, setPatientreturnvisits] = useState();
  const [currentpage, setCurrentpage] = useState({ value: 1 });
  const [loading, setLoading] = useState(false);

  const headers = patientreturnvisits && Object.keys(patientreturnvisits[0]);
  const tableRef = useRef();
  const getAllPatientFirstVisits = async () => {
    try {
      const res = await axiosInstance.get("/patients/returnvisits/find");
      setPatientreturnvisits(res.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllPatientFirstVisits();
  }, []);

  const filtervisits = (patientreturnvisits, searchitem, values) => {
    // console.log({ filter: values, searchitem: searchitem });
    if (!patientreturnvisits) return [];
    if (searchitem && selectedDateFrom && selectedDateTo) {
      return patientreturnvisits.filter(
        (item) =>
          item[searchitem]?.toLowerCase().includes(values?.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem || values) {
      return patientreturnvisits.filter((item) =>
        item[searchitem]?.toLowerCase().includes(values?.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return patientreturnvisits.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return patientreturnvisits;
    }
  };
  const filteredVisits = filtervisits(patientreturnvisits, searchitem, values);
  const pages = filteredVisits?.length
    ? filteredVisits?.length / 20
    : patientreturnvisits?.length / 20;
  if (currentpage.value > pages + 1) {
    setCurrentpage({ value: 1 });
  }
  return (
    <div className="w-full flex items-center justify-center font-inter my-5">
      <div className="bg-white min-h-[500px] w-[1000px] overflow-x-auto pl-6  py-4">
        <div className="flex gap-4 items-center my-4">
          <p className="text-primary90 font-[600]">Return Visit Records</p>
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "Return Visit list")}
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
              {patientreturnvisits
                ? ((selectedDateTo && selectedDateFrom) ||
                  (searchitem && values)
                    ? filteredVisits
                    : patientreturnvisits
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
        {!patientreturnvisits?.length && <Notfound />}
        {/* pagination */}
        <Pagination
          currentpage={currentpage.value}
          setCurrentpage={setCurrentpage}
          displaynum={20}
          pages={
            filteredVisits?.length
              ? filteredVisits?.length / 20
              : patientreturnvisits?.length / 20
          }
        />
      </div>
    </div>
  );
};

export default Recordreturnvisit;
