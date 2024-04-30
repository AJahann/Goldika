import React, { useContext, useEffect, useState } from 'react';
import './Panel.css';
import SideBar from './SideBar/SideBar';
import TopBar from './TopBar/TopBar';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import {
  UserPocketContext,
  UserPocketProvider,
} from '../../Context/UserPocketContext';

export default function Panel() {
  const [isShowSideBar, setIsShowBar] = useState(true);
  const authContext = useContext(AuthContext);
  const userPocketContext = useContext(UserPocketContext);
  const navigate = useNavigate();
  const URL = useParams();

  useEffect(() => {
    setIsShowBar(false);
  }, [URL]);

  useEffect(() => {
    if (!authContext.isLogin) {
      navigate('/');
    }
  }, [authContext.isLogin, navigate]);

  return (
    <div className='panel'>
      <UserPocketProvider>
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
      </UserPocketProvider>
    </div>
  );
}
