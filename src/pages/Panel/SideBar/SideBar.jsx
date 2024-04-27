import React from 'react';
import LogoSvg from './LogoSvg';
import SideBarItem from './SideBarItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MoneyOffCsredOutlinedIcon from '@mui/icons-material/MoneyOffCsredOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './SideBar.css';
import { Link } from 'react-router-dom';

export default function SideBar({ logout }) {
  return (
    <div className='panel-sideBar'>
      <Link to={'/'}>
        <div className='panel-sideBar-logo'>
          <LogoSvg />
          <p>خرید امن طلا</p>
        </div>
      </Link>
      <div className='panel-sideBar-menu'>
        <div className='panel-sideBar-menu-wrap'>
          <SideBarItem
            to={'dashboard'}
            name={'خانه'}
            icon={<HomeOutlinedIcon />}
          />
          <SideBarItem
            to={'wallet'}
            name={'کیف و دارایی'}
            icon={<PriceChangeOutlinedIcon />}
          />
          <SideBarItem
            to={'deposit'}
            name={'واریز پول'}
            icon={<AttachMoneyOutlinedIcon />}
          />
          <SideBarItem
            to={'withdraw'}
            name={'برداشت پول'}
            icon={<MoneyOffCsredOutlinedIcon />}
          />
          <SideBarItem
            to={'trade'}
            name={'معامله طلا'}
            icon={<StoreOutlinedIcon />}
          />
          <SideBarItem
            to={'report'}
            name={'گزارش'}
            icon={<SummarizeOutlinedIcon />}
          />
          <SideBarItem
            to={'order-pikup'}
            name={'دریافت طلا'}
            icon={<AddShoppingCartOutlinedIcon />}
          />
        </div>
      </div>
      <div onClick={logout} className='panel-sideBar-leaveBtn'>
        <SideBarItem to={'/'} name={'خروج'} icon={<LogoutOutlinedIcon />} />
      </div>
    </div>
  );
}
