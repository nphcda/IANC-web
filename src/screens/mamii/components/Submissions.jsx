import React, { useState, useEffect, useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axiosInstance from "../../../utils/axios";
import moment from "moment";
import { FiInbox } from "react-icons/fi";
import { useGetEnumerationData } from "../../national/queries/enumeration";
import useEnumerationFilter from "../../national/hooks/useEnumerationFilter";
import Csvbutton from "../../../components/Csvbutton";
import EnumerationFilter from "../../national/components/EnumerationFilter";
import ModalPopup from "../../national/components/ui/ModalPopup";
import SubmissionView from "../../national/components/ui/view/SubmissionView";
import LoaderSmall from "../../../components/LoaderSmall";
import NewPagination from "../../../components/NewPagination";

const Submissions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [currentpage, setCurrentpage] = useState(1);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const tableRef = useRef();
  const {
    selectedState,
    setSelectedState,
    selectedLga,
    setSelectedLga,
    selectedWard,
    setSelectedWard,
    dateCreated,
    setDateCreated,
    states,
    lgas,
    wards,
  } = useEnumerationFilter();
  const { data: submissions, isLoading } = useGetEnumerationData({
    pageNumber: currentpage,
    state: selectedState,
    lga: selectedLga,
    ward: selectedWard,
    // dateCreated: dateCreated,
  });
  const getDaysDifference = (dateTime) => {
    return moment().diff(moment(dateTime), "days");
  };
  const handleOpen = (item) => {
    setModalItem(item);
    openModal();
  };
  const handlePageChange = (page) => {
    setCurrentpage(page);
  };

  return (
    <>
      <div className="min-w-[1000px] w-full mt-9 ">
        <Csvbutton tableRef={tableRef} tableName={"Enumeration Data"} />
        <EnumerationFilter
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedLga={selectedLga}
          setSelectedLga={setSelectedLga}
          selectedWard={selectedWard}
          setSelectedWard={setSelectedWard}
          dateCreated={dateCreated}
          setDateCreated={setDateCreated}
          states={states}
          lgas={lgas}
          wards={wards}
        />
        {/* patients table */}
        <div className="w-full flex items-center justify-center font-inter">
          <ModalPopup
            isOpen={isOpen}
            onOpenChange={setIsOpen}
            onClose={closeModal}
          >
            <SubmissionView item={modalItem} />
          </ModalPopup>
          <div className=" w-[95%] bg-white flex flex-col items-center justify-start pl-6 py-4">
            {!isLoading ? (
              <table ref={tableRef} className="cursor-default mt-7 w-full">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Indicator</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>State</th>
                    <th>LGA</th>
                    <th>Health Facility</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions?.data?.length > 0 ? (
                    submissions.data.map((item, index) => (
                      <tr
                        onClick={() => handleOpen(item)}
                        key={index}
                        className="hover:bg-[#e5e5e5] text-[#636363] h-[50px]"
                      >
                        <td>{item.id}</td>
                        <td>{item.firstName + " " + item.surName}</td>
                        <td>{item.clientNumber}</td>
                        <td>{item.state}</td>
                        <td>{item.lga}</td>
                        <td>{item.numberOfAncVisits}</td>
                        <td>{moment(item.createdAt).fromNow()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={9}
                        className="text-center py-10 text-gray-400"
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FiInbox size={40} className="text-gray-300" />
                          <span>No records found</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              <LoaderSmall />
            )}
            {/* pagination */}
            <NewPagination
              pagination={submissions?.pagination}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Submissions;
