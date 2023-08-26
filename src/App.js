import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Chat from './Chat'; 
import Add from './Add';
import Analysis from './Analysis'
import VerticalMenu from './VerticalMenu';

function App() {
  return (
    <Router>
      <div>
        <div className='h-nbar'>
          <div className='et-title'>
            <span>etisalat by e&</span>
          </div>
        </div>
        <VerticalMenu />
        <Routes>
          <Route path="/Chat" Component={Chat} />
          <Route path="" Component={Add} />
          <Route path="/Analysis" Component={Analysis} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;