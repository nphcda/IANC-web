import React from "react";
import DashboardWidget from "../components/DashboardWidget";
import Submissions from "../components/Submissions";

const DashboardHome = () => {
  return (
    <div className="bg-primary10 p-10">
      <DashboardWidget />
      <Submissions />
    </div>
  );
};

export default DashboardHome;
