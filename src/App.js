import React from 'react';
import './App.css';
import VerticalMenu from './VerticalMenu';
import './VerticalMenu'
import ChatContainer from './Chat';

function App() {
  return (
    <div>
      <div className='h-nbar'>
        <img className='et-icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Etisalat_eand_Logo_EN.svg/424px-Etisalat_eand_Logo_EN.svg.png' align="right"/>
      </div>
      <VerticalMenu />
      <ChatContainer />
    </div>
  );
}

export default App;
