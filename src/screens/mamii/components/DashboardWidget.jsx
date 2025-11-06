import React from "react";
import thumb from "../../../assets/Avatars.svg";

const DashboardWidget = ({ widgetdata }) => {
  return (
    <div className="flex items-center">
      <div className="flex justify-between w-full gap-[35px]">
        <div className="bg-[#027D52] p-4 rounded-[8px] text-white flex flex-col gap-3 min-w-[360px] flex-1">
          <div>
            <img src={thumb} alt="avatar" />
          </div>
          <div>
            <h1 className="font-inter text-4xl font-[600]">
              {widgetdata?.totalSubmissions}
            </h1>
            <h3 className="text-sm">Total Submission</h3>
          </div>
        </div>
        <div className="bg-[#C4FF34] p-4 rounded-[8px] text-[#027D52] flex flex-col gap-3 min-w-[360px] flex-1">
          <div>
            <img src={thumb} alt="avatar" />
          </div>
          <div>
            <h1 className="font-inter text-4xl font-[600]">
              {widgetdata?.totalClientNumber}
            </h1>
            <h3 className="text-sm">Total Number Client</h3>
          </div>
        </div>
        <div className="bg-primary70 p-4 rounded-[8px] text-white flex flex-col gap-3 min-w-[360px] flex-1">
          <div>
            <img src={thumb} alt="avatar" />
          </div>
          <div>
            <h1 className="font-inter text-4xl font-[600]">
              {widgetdata?.totalActiveStates}
            </h1>
            <h3 className="text-sm">Active States</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
