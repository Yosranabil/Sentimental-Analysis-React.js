import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Chat from './Pages/Chat'; 
import Add from './Pages/Add';
import Analysis from './Pages/Analysis'
import VerticalMenu from './Components/VerticalMenu';

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