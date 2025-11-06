import moment from "moment";
import React from "react";

const SubmissionView = ({ item }) => {
  const ViewBox = ({ value, label }) => {
    return (
      <div className="flex flex-col min-w-[200px] ">
        <div className="flex gap-3 items-center ">
          <label className="text-[16px] font-[500] text-dark90">
            {label}
            <span className="ml-2 text-red-500">*</span>
          </label>
        </div>
        <div className="p-[16px] text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C880]">
          {value}
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl text-[#141619] my-5 text-center font-[600] bg-[#F9FAFB]">
        View Record
      </h1>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-[#141619] font-[600] bg-[#F9FAFB]">
          Client Information
        </h1>
        <div className="flex gap-[25px]">
          <ViewBox label={"Client Number"} value={item.clientNumber} />
          <ViewBox label={"First Name"} value={item.firstName} />
        </div>
        <div className="flex gap-[25px]">
          <ViewBox label={"Middle Name"} value={item.middleName} />
          <ViewBox label={"Surname"} value={item.surName} />
          <ViewBox label={"Phone Number"} value={item.phone} />
        </div>
        <div className="flex gap-[25px]">
          <ViewBox
            label={"Alternative Phone Number"}
            value={item.alternatePhone}
          />
          <ViewBox label={"Address"} value={item.address} />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-lg text-[#141619] font-[600] bg-[#F9FAFB]">
          Settlement Demographics
        </h1>
        <div className="flex gap-[25px]">
          <ViewBox label={"State"} value={item.state} />
          <ViewBox label={"Lga"} value={item.lga} />
          <ViewBox label={"Ward"} value={item.ward} />
          <ViewBox label={"Settlement"} value={item.settlement} />
        </div>
        <div className="flex gap-[25px]">
          <ViewBox
            label={"Serving HealthCare Facility"}
            value={item.servingHealthcareFacility}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-lg text-[#141619] font-[600] bg-[#F9FAFB]">
          More Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          <ViewBox label={"Gravidity"} value={item.gravidity} />
          <ViewBox label={"Parity"} value={item.parity} />
          <ViewBox label={"LMP"} value={item.lmp} />
          <ViewBox label={"EDD"} value={item.edd} />
          <ViewBox label={"EGA"} value={item.ega} />
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-lg text-[#141619] font-[600] bg-[#F9FAFB]">
          ANC Visit
        </h1>
        <div className="flex gap-[25px]">
          <ViewBox
            label={"Have you attended ANC?"}
            value={item.attendedAncVisit}
          />
          <ViewBox
            label={"If , Yes number many Visit"}
            value={item.numberOfAncVisits}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {item?.ancVisits?.length &&
            item?.ancVisits.map((a, index) => (
              <ViewBox key={index} label={`ANC ${a.anc}`} value={a.anc} />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-lg text-[#141619] font-[600] bg-[#F9FAFB]">
          Tetanus Vaccination information
        </h1>
        <div className="flex gap-[25px]">
          <ViewBox
            label={"Have you received tetanus vaccination?"}
            value={item.receivedTetanusVaccination}
          />
          <div className="flex flex-col gap-3 items-center ">
            <label className="text-[16px] font-[500] text-dark90">
              Tetanus vaccination received
              <span className="ml-2 text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {item?.tetanusVaccinationReceived?.length &&
                item?.tetanusVaccinationReceived.map((t, index) => (
                  <p
                    key={index}
                    className="text-sm text-primary90 bg-primary10 p-[10px]"
                  >
                    {t.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {item?.tetanusVaccinationReceived?.length &&
            item?.tetanusVaccinationReceived.map((t, index) => (
              <ViewBox
                key={index}
                label={`Date of ${t.name}`}
                value={moment(t.date).format("YYYY-MM-DD")}
              />
            ))}
        </div>
      </div>
      <div className="flex">
        <div className="border-[1.2px] border-primary50 bg-primary10 p-4 rounded-[10px] min-w-[380px]">
          <h1 className="text-lg font-[600] text-dark90">Geocoordinates</h1>
          <div className="flex justify-between text-[#7A7C7F] text-[12px] mt-[5px]">
            <p>Longitude:</p>
            <p>{item.longitude}</p>
          </div>
          <div className="flex justify-between text-[#7A7C7F] text-[12px] mt-[5px]">
            <p>Latitude:</p>
            <p>{item.longitude}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionView;
