import React, { useContext, useEffect } from 'react';
import './Dashboard.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardBox from '../../../components/DashboardBox/DashboardBox';
import Chart from './../../../components/Main/Chart/Chart';
import { formatNumberToPersian } from '../../../Utils/Utils';
import { UserPocketContext } from '../../../Context/UserPocketContext';
import { AuthContext } from '../../../Context/AuthContext';

export default function Dashboard() {
  const { updateUserPocket, walletBalance, goldWalletBalance } =
    useContext(UserPocketContext);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userInfo.id}`)
      .then((res) => res.json())
      .then((res) => {
        updateUserPocket({
          walletBalance: res.pocket.walletBalance,
          goldWalletBalance: res.pocket.goldWalletBalance,
        });
      });
  }, [updateUserPocket, userInfo]);

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
            price={formatNumberToPersian(walletBalance)}
            icon={<AccountBalanceWalletOutlinedIcon fontSize='20px' />}
            bgColor={'#f1ab1f'}
          />
          <DashboardBox
            title={'موجودی کیف طلا:'}
            price={formatNumberToPersian(goldWalletBalance)}
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
