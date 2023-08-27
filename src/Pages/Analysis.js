import React from 'react';
import './Analysis.css';
import Chart from '../Components/Chart';
import LineChart from '../Components/Line-Chart';
import constantData from '../Constants'; 
const {chart1Data, chart2Data} = constantData();

function Analysis() {
    return (
        <div id="Analysis">
            <div className='background'>
                <div id = "Header1">Customer Analysis </div>
                <Chart options={chart1Data.options} series={chart1Data.series} />
                <LineChart />
            </div>
            <div className='background'>
            <div id = "Header2">Agent Analysis </div>
                <Chart options={chart2Data.options} series={chart2Data.series} />
                <LineChart />
            </div>
        </div>
    );
}

export default Analysis;
