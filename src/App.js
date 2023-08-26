import React from 'react';
import './App.css';
import VerticalMenu from './VerticalMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Chat'; 
import Add from './Add';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
