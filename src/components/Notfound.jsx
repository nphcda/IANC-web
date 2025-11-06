import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";

const Notfound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-6 gap-2">
      <AiOutlineFileSearch className="text-[30px] text-light90" />
      <p className="text-primary90  font-[500]">No Record found</p>
    </div>
  );
};

export default Notfound;
