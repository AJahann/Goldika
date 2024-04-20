import React from 'react';
import './Panel.css';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';

export default function Panel() {
  return (
    <div className='panel'>
      <div className='sideBar'>
        <SideBar />
      </div>
      <div className='panel-content'>
        <TopBar />
      </div>
    </div>
  );
}
