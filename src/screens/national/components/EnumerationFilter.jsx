import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EnumerationFilter = ({
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
}) => {
  return (
    <div className="p-6 bg-white my-3 flex flex-col gap-[21px]">
      <div className="flex gap-[10px]">
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">State</label>

          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">All States</option>
            {states?.result.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">LGA</label>

          <select
            value={selectedLga}
            onChange={(e) => setSelectedLga(e.target.value)}
          >
            <option value="">All LGAs</option>
            {lgas?.result.map((l, i) => (
              <option key={i} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">Ward</label>

          <select
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
          >
            <option value="">All Wards</option>
            {wards?.result.map((w, i) => (
              <option key={i} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-primary90 font-[400]">Date From</label>
          <DatePicker
            selected={dateCreated}
            onChange={(d) => setDateCreated(d)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Pick a date"
          />
        </div>
      </div>
    </div>
  );
};

export default EnumerationFilter;
