import React from 'react';
import './Dashboard.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardBox from '../../../components/DashboardBox/DashboardBox';
import Chart from './../../../components/Main/Chart/Chart';

export default function Dashboard() {
  return (
    <div className='panel-dashboard'>
      <div className='panel-wrap'>
        <h2 className='panel-title'>خانه</h2>
        <div className='dashboard-directions'>
          <DashboardBox
            title={'خرید از گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            price={'۳,۷۱۴,۵۷۴'}
            btnName={'خرید'}
            icon={<CurrencyExchangeIcon fontSize='20px' />}
            bgColor={'#24b73d'}
          />
          <DashboardBox
            title={'فروش به گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            btnName={'فروش'}
            price={'۳,۶۰۴,۵۷۴'}
            icon={<SellIcon fontSize='20px' />}
            bgColor={'#da2b2b'}
          />
          <DashboardBox
            title={'موجودی کیف پول:'}
            btnName={'افزایش موجودی'}
            price={'۰'}
            icon={<AccountBalanceWalletOutlinedIcon fontSize='20px' />}
            bgColor={'#f1ab1f'}
          />
          <DashboardBox title={'موجودی کیف طلا:'} price={'۰.۰۰۰'} geram />
        </div>
        <div className='dashboard-chart'>
          <Chart />
        </div>
      </div>
    </div>
  );
}
