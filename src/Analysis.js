import React, { useState } from 'react';
import './App.css';
import ReactApexChart from 'react-apexcharts';

function App() {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-pie",
        width: 500, // Adjust the width of the pie chart
      height: 500,
      },
      labels: ['Neutral', 'Positive', 'Negative'],
      colors: ['#F4DF17', '#45D21C', '#E72C09'], // Set custom colors here
      
    },
    series: [30, 40, 45],
  });

  return (
    <div id="App">
      <h1 className="chart-header">Sentimental Analysis Chart</h1>
      <div id="nav">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="support.html">Support</a></li>
          <li><a href="contact.html">Contact us</a></li>
        </ul>
      </div>
      <div className="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width="500"
        />
      </div>
    </div>
  );
}

export default App;
