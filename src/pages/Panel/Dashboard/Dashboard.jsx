import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SellIcon from '@mui/icons-material/Sell';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardBox from '../../../components/DashboardBox/DashboardBox';
import Chart from './../../../components/Main/Chart/Chart';
import { AuthContext } from '../../../Context/AuthContext';
import { formatNumberToPersian } from '../../../Utils/Utils';

export default function Dashboard() {
  const { userInfo } = useContext(AuthContext);
  const [goldBuyPrice, setGoldBuyPrice] = useState('0');
  const [goldSellPrice, setGoldSellPrice] = useState('0');

  useEffect(() => {
    fetch(`https://goldikaserver.liara.run/gold`)
      .then((res) => res.json())
      .then((res) => {
        setGoldBuyPrice(res.buy);
        setGoldSellPrice(res.sell);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='panel-dashboard'>
      <div className='panel-wrap'>
        <h2 className='panel-title'>خانه</h2>
        <div className='dashboard-directions'>
          <DashboardBox
            link={'/panel/trade?trade_action=buy'}
            title={'خرید از گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            price={formatNumberToPersian(goldBuyPrice)}
            btnName={'خرید'}
            icon={<CurrencyExchangeIcon fontSize='20px' />}
            bgColor={'#24b73d'}
          />
          <DashboardBox
            link={'/panel/trade?trade_action=sell'}
            title={'فروش به گلدیکا:'}
            txt={'(هرگرم طلای ۱۸ عیار)'}
            btnName={'فروش'}
            price={formatNumberToPersian(goldSellPrice)}
            icon={<SellIcon fontSize='20px' />}
            bgColor={'#da2b2b'}
          />
          <DashboardBox
            link={'/panel/deposit'}
            title={'موجودی کیف پول:'}
            btnName={'افزایش موجودی'}
            price={formatNumberToPersian(userInfo.pocket.walletBalance)}
            icon={<AccountBalanceWalletOutlinedIcon fontSize='20px' />}
            bgColor={'#f1ab1f'}
          />
          <DashboardBox
            title={'موجودی کیف طلا:'}
            price={formatNumberToPersian(userInfo.pocket.goldWalletBalance)}
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
