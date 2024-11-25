import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ data = [], categories = [] }) => {
    const series = data;

    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: categories,
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div className="p-3">
            <div className="" id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="pie"
                    width={450}
                />
            </div>
        </div>
    );
};

export default PieChart;
