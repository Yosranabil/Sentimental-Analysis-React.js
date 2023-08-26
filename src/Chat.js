import React, { useState } from 'react';
import './Chat.css';
import constantData from './Constants'; // Update the import path
const { row1Data1, row2Data1, row1Data2, row2Data2, messageData1, messageData2 } = constantData();

function Chat() {

  const [currentRows, setCurrentRows] = useState('row11');
  const [currentMessages, setCurrentMessages] = useState(messageData1);

  const handleDisplayChat1 = () => {
    setCurrentRows('row11');
    setCurrentMessages(messageData1);
  };

  const handleDisplayChat2 = () => {
    setCurrentRows('row21');
    setCurrentMessages(messageData2);
  };

  let row1Data = [];
  let row2Data = [];
  let messageData = [];

  if (currentRows === 'row11' || currentMessages === messageData1) {
    row1Data = row1Data.concat(row1Data1);
    row2Data = row2Data.concat(row2Data1);
    messageData = messageData.concat(messageData1);
  } else if (currentRows === 'row21' || currentMessages === messageData2) {
    row1Data = row1Data.concat(row1Data2);
    row2Data = row2Data.concat(row2Data2);
    messageData = messageData.concat(messageData2);
  }

  return (
    <div>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <div className="conv-container-wrapper">
        <div className='conv-container'>
          <div className='chatBox'>
            <div className='chatBox'>
              {messageData.map((message, index) => (
                <div className={`message ${message.sender === 'CR' ? 'CR_message' : 'AG_message'}`} key={index}>
                  <p>{message.text}<br /><span>{message.timestamp}</span></p>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className='buttons'>
          <button onClick={handleDisplayChat1}>Display Conversation 1</button>
          <button onClick={handleDisplayChat2}>Display Conversation 2</button>
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