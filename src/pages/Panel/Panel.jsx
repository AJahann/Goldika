import React, { useEffect, useState } from 'react';
import './Panel.css';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import { Outlet, useParams } from 'react-router-dom';

export default function Panel() {
  const [isShowSideBar, setIsShowBar] = useState(true);
  const URL = useParams();

  useEffect(() => {
    setIsShowBar(false);
  }, [URL]);

  return (
    <div className='panel'>
      <div className={isShowSideBar ? 'sideBar' : 'sideBar hide'}>
        <SideBar />
      </div>
      <div className='panel-content'>
        <TopBar sideBarHandler={() => setIsShowBar(!isShowSideBar)} />
        <Outlet />
      </div>
    </div>
  );
}
