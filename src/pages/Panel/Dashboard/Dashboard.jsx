import React, { useContext } from 'react';
import './Dashboard.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardBox from '../../../components/DashboardBox/DashboardBox';
import Chart from './../../../components/Main/Chart/Chart';
import { formatNumberToPersian } from '../../../Utils/Utils';
import { UserPocketContext } from '../../../Context/UserPocketContext';

export default function Dashboard() {
  const userPocketContext = useContext(UserPocketContext);

  return (
    <div className='panel-dashboard'>
      <div className='panel-wrap'>
        <h2 className='panel-title'>خانه</h2>
        <div className='dashboard-directions'>
          <DashboardBox
            link={'/panel/trade?trade_action=buy'}
            title={'خرید از گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            price={formatNumberToPersian('3714086')}
            btnName={'خرید'}
            icon={<CurrencyExchangeIcon fontSize='20px' />}
            bgColor={'#24b73d'}
          />
          <DashboardBox
            link={'/panel/trade?trade_action=sell'}
            title={'فروش به گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            btnName={'فروش'}
            price={formatNumberToPersian('3402485')}
            icon={<SellIcon fontSize='20px' />}
            bgColor={'#da2b2b'}
          />
          <DashboardBox
            link={'/panel/deposit'}
            title={'موجودی کیف پول:'}
            btnName={'افزایش موجودی'}
            price={formatNumberToPersian(userPocketContext.walletBalance)}
            icon={<AccountBalanceWalletOutlinedIcon fontSize='20px' />}
            bgColor={'#f1ab1f'}
          />
          <DashboardBox
            title={'موجودی کیف طلا:'}
            price={formatNumberToPersian(userPocketContext.goldWalletBalance)}
            geram
          />
        </div>
        <div className='dashboard-chart'>
          <Chart />
        </div>
      </div>
    </div>
  );
}
