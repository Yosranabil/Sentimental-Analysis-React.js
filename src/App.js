import React from 'react';
import './App.css';
import VerticalMenu from './VerticalMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Chat'; 

function App() {
  return (
    <Router>
      <div>
        <div className='h-nbar'>
          <div className='et-title'>
            <text>etisalat by e&</text>
          </div>
        </div>
        <VerticalMenu />
        <Routes>
          <Route path="/Chat" Component={Chat} />
          {/* Other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
