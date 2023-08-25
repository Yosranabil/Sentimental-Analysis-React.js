
import React, { useState } from 'react';
import './Chart.css';
import ReactApexChart from 'react-apexcharts';

function Chart() {
    const [state] = useState({
        options: {
          chart: {
            id: "basic-pie",
          },
          labels: ['Neutral', 'Positive', 'Negative'],
          colors: ['#F4DF17', '#45D21C', '#E72C09'], // Set custom colors here
          
        },
        series: [30, 40, 45],
      });
    
    return (
        <div className="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width="335"
        />
      </div>
    );
  }
  
  export default Chart;