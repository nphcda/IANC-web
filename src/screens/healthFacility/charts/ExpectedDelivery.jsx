import React, { useEffect, useState } from "react";


import ReactApexChart from "react-apexcharts";


const ExpectedDelivery = ({ title, series, colors, data }) => {
    const ExpectedDeliveryOptions = {
        series: [{
            data: [{
                x: 'Q1',
                y: series && series[0].number
            },
            {
                x: 'Q2',
                y: series && series[1].number
            },
            {
                x: 'Q3',
                y: series && series[2].number
            },
            {
                x: 'Q4',
                y: series && series[3].number
            }
            ]
        }],
        chart: {
            type: 'bar',
            height: 500
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors

    };
    return (
        <div className="flex flex-1 flex-col w-full content-between justify-center items-center pl-[3.5px] py-2 gap-2 rounded-[15px] min-h-[300px] ">
            {(series[0].number < 1 && series[1].number < 1 && series[2].number < 1 && series[3].number < 1) ?
                <p className="text-primary90 font-500 text-[20px]">No Data</p>
                : <ReactApexChart
                    series={ExpectedDeliveryOptions.series}
                    options={ExpectedDeliveryOptions}
                />
            }
        </div>
    )
}

export default ExpectedDelivery