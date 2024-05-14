import React, { useContext, useEffect, useState } from 'react';
import './Panel.css';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

export default function Panel() {
  const [isShowSideBar, setIsShowBar] = useState(true);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const URL = useParams();
  const screen = window.innerWidth;

  useEffect(() => {
    if (screen < 1000) setIsShowBar(false);
  }, [URL, screen]);

  if (!authContext.isLogin) {
    return navigate('/');
  }

  return (
    <div className='panel'>
      <div className={isShowSideBar ? 'sideBar' : 'sideBar hide'}>
        <SideBar logout={authContext.logout} />
      </div>
      <div className='panel-content'>
        <TopBar
          number={authContext.userInfo.number}
          sideBarHandler={() => setIsShowBar(!isShowSideBar)}
        />
        <Outlet />
      </div>
    </div>
  );
}
