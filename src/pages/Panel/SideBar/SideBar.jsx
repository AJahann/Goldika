import React from 'react';
import LogoSvg from './LogoSvg';
import SideBarItem from './SideBarItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import './SideBar.css';

export default function SideBar() {
  return (
    <div className='panel-sideBar'>
      <div className='panel-sideBar-logo'>
        <LogoSvg />
        <p>خرید امن طلا</p>
      </div>
      <div className='panel-sideBar-menu'>
        <div className='panel-sideBar-menu-wrap'>
          <SideBarItem
            active
            to={'dashboard'}
            name={'خانه'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'wallet'}
            name={'کیف و دارایی'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'deposit'}
            name={'واریز پول'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'withdraw'}
            name={'برداشت پول'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'trade'}
            name={'معامله طلا'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'report'}
            name={'گزارش'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'order-pikup'}
            name={'دریافت طلا'}
            icon={<HomeOutlinedIcon />}
          />
        </div>
      </div>
      <div className='panel-sideBar-leaveBtn'>
        <SideBarItem to={'/'} name={'خروج'} icon={<HomeOutlinedIcon />} />
      </div>
    </div>
  );
}
