import React, { useState } from 'react';
import './Chat.css';
import constantData from './Constants'; // Update the import path
const { row1Data1, row2Data1, row1Data2, row2Data2 } = constantData();

function Chat() {

  const [currentRows, setCurrentRows] = useState('row11');

  const handleDisplayRow12 = () => {
    setCurrentRows('row11');
  };

  const handleDisplayRow34 = () => {
    setCurrentRows('row21');
  };

  let row1Data = [];
  let row2Data = [];

  if (currentRows === 'row11') {
    row1Data = row1Data.concat(row1Data1);
    row2Data = row2Data.concat(row2Data1);
  } else if (currentRows === 'row21') {
    row1Data = row1Data.concat(row1Data2);
    row2Data = row2Data.concat(row2Data2);
  }


  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="conv-container-wrapper">
        <div className='conv-container'></div>
        <div className='buttons'>
          <button onClick={handleDisplayRow12}>Display Conversation 1</button>
          <button onClick={handleDisplayRow34}>Display Conversation 2</button>
        </div>
      </div>
      <div className='conv-analysis'>
        <table>
          <tbody>
            <tr>
              {row1Data.map((item, index) => (
                <td key={index}>
                  <span>{item.text}</span>
                  <div className={`w3-light-grey w3-round-xlarge ${item.color}`}>
                    <div className={`w3-container ${item.color} w3-round-xlarge`} style={{ width: item.percentage }}>{item.percentage}</div>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              {row2Data.map((item, index) => (
                <td key={index}>
                  <span>{item.text}</span>
                  <div className={`w3-light-grey w3-round-xlarge ${item.color}`}>
                    <div className={`w3-container ${item.color} w3-round-xlarge`} style={{ width: item.percentage }}>{item.percentage}</div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Chat;