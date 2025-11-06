import React from "react";
import { downloadTable } from "../utils/helpers";

const Csvbutton = ({ tableRef, tableName }) => {
  return (
    <div className="pl-6">
      {/* download csv */}
      <button
        onClick={() => downloadTable(tableRef, tableName)}
        className="bg-primary90 rounded-[8px] text-light10 text-[14px] p-2"
      >
        Download CSV
      </button>
    </div>
  );
};

export default Csvbutton;
