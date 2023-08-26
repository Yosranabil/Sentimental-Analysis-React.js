import React from 'react';
import './App.css';
import VerticalMenu from './VerticalMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './Chat'; 
<<<<<<< HEAD
import Add from './Add';
=======
import Analysis from './Analysis.js';
>>>>>>> 36a66f47bcea379ce8e555c793e840f66524c444

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
<<<<<<< HEAD
          <Route path="" Component={Add} />
=======
          <Route path="/Analysis" Component={Analysis} />
          {/* Other routes */}
>>>>>>> 36a66f47bcea379ce8e555c793e840f66524c444
        </Routes>
      </div>
    </Router>
  );
}

export default App;
