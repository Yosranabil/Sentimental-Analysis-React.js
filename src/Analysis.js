import React from 'react';
import VerticalMenu from './VerticalMenu';
import './Analysis.css';
import Chart from './Chart';
import LineChart from './Line-Chart';


function Analysis() {
  
  return (
    <div id="Analysis">
      <VerticalMenu />
      <h1 className="chart-header">Sentimental Analysis Chart</h1>
      <div className='background'>
      <Chart/> <LineChart/>
      
      </div>

       <div className='background'>
      <Chart/> <LineChart/>
      
      </div>
    
    
      
      
    </div>
  );
}

export default Analysis;
