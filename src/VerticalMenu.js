import React from 'react';
import './VerticalMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

function VerticalMenu() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <nav>
        <ul>
            <li>
              <a href='#' className='logo'>
                <img src='https://ik.imagekit.io/tp/20220224-etisalat-group-new-logo.png' />
                <span className="nav-item">Etisalat Egypt</span>
              </a>
            </li>
          <li><a href='#'>
            <FontAwesomeIcon className="fas" icon={faComments} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item' align="left">Conversations</span>
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon className="fas" icon={faUser} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>Profile</span>
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon className="fas" icon={faChartSimple} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>Analytics</span>
          </a></li>
          <li><a href='#'>
            <FontAwesomeIcon className="fas" icon={faCog} style={{ color: "#000000", }} fontSize={15} />
            <span className='nav-item'>Settings</span>
          </a></li>
          <li><a href='#' className='logout'>
            <FontAwesomeIcon className="fas" icon={faRightFromBracket} style={{ color: "#000000", }} fontSize={10} />
            <span className='nav-item'>LogOut</span>
          </a></li>
        </ul>
      </nav>
    </div>
  );
}

export default VerticalMenu;
