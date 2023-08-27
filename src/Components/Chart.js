import React from 'react';
import './Chart.css';
import ReactApexChart from 'react-apexcharts';

function Chart(props) {
    return (
        <div className="chart">
            <ReactApexChart
                options={props.options}
                series={props.series}
                type="pie"
                width="360"
            />
        </div>
    );
}

export default Chart;
