import React, { useEffect, useState } from "react";

// import { ApexOptions } from "apexcharts";

import ReactApexChart from "react-apexcharts";
// import { baroptions } from "./chartconfig";



const Frightened = ({ title, series, colors, data }) => {

    return (
        <div className="flex flex-1 flex-col w-full content-between items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[110px]  ">
            <ReactApexChart
                options={{
                    // chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: {
                        enabled: true, textAnchor: 'middle', offsetX: 0,
                        offsetY: 0,
                    },
                }}
                series={series}
                type="pie"
                width="300px"
            />
        </div>
    );
};

export default Frightened;
