import React from "react";


import ReactApexChart from "react-apexcharts";


const Activitychart = ({ series }) => {
    const ActivitychartOptions = {
        series: [{
            name: "Activity",
            data: [{
                x: 'JANUARY',
                y: series && series.count.JANUARY
            },
            {
                x: 'FEBRUARY',
                y: series && series.count.FEBRUARY
            },
            {
                x: 'MARCH',
                y: series && series.count.MARCH
            },
            {
                x: 'APRIL',
                y: series && series.count.APRIL
            },
            {
                x: 'MAY',
                y: series && series.count.MAY
            },
            {
                x: 'JUNE',
                y: series && series.count.JUNE
            },
            {
                x: 'JULY',
                y: series && series.count.JULY
            },
            {
                x: 'AUGUST',
                y: series && series.count.AUGUST
            },
            {
                x: 'SEPTEMBER',
                y: series && series.count.SEPTEMBER
            },
            {
                x: 'OCTOBER',
                y: series && series.count.OCTOBER
            },
            {
                x: 'NOVEMBER',
                y: series && series.count.NOVEMBER
            },
            {
                x: 'DECEMBER',
                y: series && series.count.DECEMBER
            },
            ]
        }],



    };
    return (
        <div className="flex flex-1 flex-col w-full content-between justify-center items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[300px] ">
            <ReactApexChart
                type="bar"
                height={400}
                width={600}
                series={ActivitychartOptions.series}
                options={ActivitychartOptions}
            />
        </div>
    )
}

export default Activitychart