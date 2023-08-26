import React from 'react';
import './Analysis.css';
import Chart from './Chart';
import LineChart from './Line-Chart';
import constantData from './Constants'; 
const {chart1Data, chart2Data} = constantData();

function Analysis() {
    return (
        <div id="Analysis">
            <div className='background'>
                <Chart options={chart1Data.options} series={chart1Data.series} />
                <LineChart />
            </div>
            <div className='background'>
                <Chart options={chart2Data.options} series={chart2Data.series} />
                <LineChart />
            </div>
        </div>
    );
}

export default Analysis;
