import React, { useEffect, useState } from "react";

// import { ApexOptions } from "apexcharts";

import ReactApexChart from "react-apexcharts";
// import { baroptions } from "./chartconfig";



const PieChart = ({ title, series, colors, data }) => {
    const CandidateOptions = {
        chart: {
            height: 280,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        legend: { show: false },
        series: [
            {
                name: "Series 1",
                data: [45, 52, 38, 45, 19, 23, 2],
            },
            {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        // colors: ["#1A73E8"],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
        xaxis: {
            categories: [
                "01 Jan",
                "02 Jan",
                "03 Jan",
                "04 Jan",
                "05 Jan",
                "06 Jan",
                "07 Jan",
            ],
        },
    };

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
                series={[80, 20]}
                type="pie"
                width="300px"
            />
            {/* <ReactApexChart
                series={CandidateOptions.series}
                type="area"
                width="500"
                options={CandidateOptions}
            /> */}
        </div>
    );
};

export default PieChart;
