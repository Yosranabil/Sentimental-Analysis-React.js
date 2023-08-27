// LineChart.js
import React, { useState } from 'react';
import './Line-Chart.css';
import ReactApexChart from 'react-apexcharts';

function LineChart() {
    const [state] = useState({
        options: {
            chart: {
                id: 'basic-line',
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70],
            },
        ],
    });

    return (
        <div className="lineChart">
            <ReactApexChart options={state.options} series={state.series} type="line" width="450" />
        </div>
    );
}

export default LineChart;
