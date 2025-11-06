import React, { useEffect, useRef, useState } from "react";
import Notfound from "../../../components/Notfound";
import Pagination from "../../../components/Pagination";
import axiosInstance from "../../../utils/axios";
import LoaderSmall from "../../../components/LoaderSmall";
import { downloadTable } from "../../../utils/helpers";

const Recordfirstvisit = ({
  selectedDateFrom,
  selectedDateTo,
  values,
  searchitem,
}) => {
  const [patientfirstvisits, setPatientfirstvisits] = useState();
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState({ value: 1 });

  const headers = patientfirstvisits && Object.keys(patientfirstvisits[0]);
  const sortedheaders = Array.from(new Set(headers)).sort();
  const priorityKeys = ["firstname", "firstname", "middlename", "surname"];
  const customSort = (a, b) => {
    // Compare based on priority keys
    for (const key of priorityKeys) {
      if (a[key] !== b[key]) {
        return a[key] - b[key];
      }
    }

    // If priority keys are the same, sort alphabetically
    const aKeys = Object.keys(a).sort();
    const bKeys = Object.keys(b).sort();

    return aKeys.join().localeCompare(bKeys.join());
  };
  const sortedArray = headers?.sort(customSort);

  // console.log({ sa: sortedArray });
  // console.log({ sh: sortedheaders });
  const tableRef = useRef();

  const getAllPatientFirstVisits = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/patients/firstvisits/find");
      setPatientfirstvisits(res.data.result);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPatientFirstVisits();
  }, []);
  const filtervisits = (patientfirstvisits, searchitem, values) => {
    // console.log({ filter: values, searchitem: searchitem });
    if (!patientfirstvisits) return [];
    if (searchitem && selectedDateFrom && selectedDateTo) {
      return patientfirstvisits.filter(
        (item) =>
          item[searchitem]?.toLowerCase().includes(values?.toLowerCase()) &&
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else if (searchitem || values) {
      return patientfirstvisits.filter((item) =>
        item[searchitem]?.toLowerCase().includes(values?.toLowerCase())
      );
    } else if (selectedDateFrom && selectedDateTo) {
      return patientfirstvisits.filter(
        (item) =>
          new Date(item.createdat).getTime() >=
            new Date(selectedDateFrom).getTime() &&
          new Date(item.createdat).getTime() <=
            new Date(selectedDateTo).getTime()
      );
    } else {
      return patientfirstvisits;
    }
  };
  const filteredVisits = filtervisits(patientfirstvisits, searchitem, values);
  // console.log(filteredVisits);
  const pages = filteredVisits?.length
    ? filteredVisits?.length / 20
    : patientfirstvisits?.length / 20;

  if (currentpage.value > pages + 1) {
    setCurrentpage({ value: 1 });
  }
  return (
    <div className="w-full flex items-center justify-center font-inter my-5">
      <div className="bg-white min-h-[500px] w-[1000px] overflow-x-auto pl-6  py-4">
        <div className="flex gap-4 items-center my-4">
          <p className="text-primary90 font-[600]">First Visit Records</p>
          {/* download csv */}
          <button
            onClick={() => downloadTable(tableRef, "First Visit list")}
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
            className="cursor-default w-full whitespace-nowrap overflow-scroll border-separate border-spacing-3 border border-primary90 rounded-lg"
          >
            <thead>
              <tr className="">
                {sortedArray?.map((header) => (
                  <th className="border" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {patientfirstvisits
                ? ((selectedDateTo && selectedDateFrom) ||
                  (searchitem && values)
                    ? filteredVisits
                    : patientfirstvisits
                  )
                    .slice(20 * currentpage.value - 20, 20 * currentpage.value)
                    .map((item, index) => (
                      <tr className="" key={index}>
                        {sortedArray?.map((header) => (
                          <td className="border" key={header}>
                            {item[header]}
                          </td>
                        ))}
                      </tr>
                    ))
                : null}
            </tbody>
          </table>
        )}
        {!patientfirstvisits?.length && !loading && <Notfound />}
        {/* pagination */}

        <Pagination
          currentpage={currentpage.value}
          setCurrentpage={setCurrentpage}
          displaynum={20}
          pages={
            filteredVisits?.length
              ? filteredVisits?.length / 20
              : patientfirstvisits?.length / 20
          }
        />
      </div>
    </div>
  );
};

export default Recordfirstvisit;
