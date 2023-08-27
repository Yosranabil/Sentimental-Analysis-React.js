import React, { useState } from 'react';
import './Analysis.css';
import Chart from '../Components/Chart';
import LineChart from '../Components/Line-Chart';
import constantData from '../Constants';
const { chart1Data, chart2Data, chart1Data2, chart2Data2, lineChart1, lineChart2, lineChart12, lineChart22 } = constantData();


function Analysis() {
    const [currentCharts, setCurrentCharts] = useState('chat1');

    const handleDisplayChat1 = () => {
        setCurrentCharts('chat1');
    };

    const handleDisplayChat2 = () => {
        setCurrentCharts('chat2');
    };




let chart1Data1 = { options: {}, series: [] };
let line1Data1 = { options: {}, series: [] };
let chart2Data1 = { options: {}, series: [] };
let line2Data1 = { options: {}, series: [] };

// ...





if (currentCharts === 'chat1') {
    chart1Data1 = { options: chart1Data.options, series: chart1Data.series };
    line1Data1 = { options: lineChart1.options, series: lineChart1.series };
    chart2Data1 = { options: chart2Data.options, series: chart2Data.series };
    line2Data1 = { options: lineChart2.options, series: lineChart2.series };
} else if (currentCharts === 'chat2') {
    chart1Data1 = { options: chart1Data2.options, series: chart1Data2.series };
    line1Data1 = { options: lineChart12.options, series: lineChart12.series };
    chart2Data1 = { options: chart2Data2.options, series: chart2Data2.series };
    line2Data1 = { options: lineChart22.options, series: lineChart22.series };
}



return (
    
    <div id="Analysis">
        <div className='background'>
            <div id="Header1">Customer Analysis </div>
            <Chart options={chart1Data1.options} series={chart1Data1.series} />
            <LineChart options={line1Data1.options} series={line1Data1.series} />
        </div>
        <div className='background'>
            <div id="Header2">Agent Analysis </div>
            <Chart options={chart2Data1.options} series={chart2Data1.series} />
            <LineChart options={line2Data1.options} series={line2Data1.series} />
        </div>
        <div className='chats-list'>
            <div className='chats-list-container'>
                <h2>Conversations List</h2>
                <ul>
                <li onClick={handleDisplayChat1}><span>1</span>List Item One</li>
                 <li onClick={handleDisplayChat2}><span>2</span>List Item Two</li>
                </ul>
            </div>
        </div>
    </div>
);
}

export default Analysis;




