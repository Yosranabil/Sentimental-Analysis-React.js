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

    // ... rest of your code ...






let chart1Data1 = [];
let line1Data1 = [];
let chart2Data1 = [];
let line2Data1 = [];



if (currentCharts === 'chat1') {
    chart1Data1 = chart1Data1.concat(chart1Data);
    line1Data1 = line1Data1.concat(lineChart1);
    chart2Data1 = chart2Data1.concat(chart2Data);
    line2Data1 = line2Data1.concat(lineChart2);

} else if (currentCharts === 'chat2') {
    chart1Data1 = chart1Data1.concat(chart1Data2);
    line1Data1 = line1Data1.concat(lineChart12);
    chart2Data1 = chart2Data1.concat(chart2Data2);
    line2Data1 = line2Data1.concat(lineChart22);


    
}



return (
    
    <div id="Analysis">
        <div className='background'>
            <div id="Header1">Customer Analysis </div>
            <Chart options={chart1Data2.options} series={chart1Data2.series} />
            <LineChart options={lineChart12.options} series={lineChart12.series} />
        </div>
        <div className='background'>
            <div id="Header2">Agent Analysis </div>
            <Chart options={chart2Data2.options} series={chart2Data2.series} />
            <LineChart options={lineChart22.options} series={lineChart22.series} />
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




