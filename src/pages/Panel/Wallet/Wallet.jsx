import React, { useContext } from 'react';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Logo';

import './Wallet.css';
import PanelChart from '../../../components/PanelChart/PanelChart';
import { formatNumberToPersian } from '../../../Utils/Utils';
import { AuthContext } from '../../../Context/AuthContext';

export default function Wallet() {
  const { userInfo } = useContext(AuthContext);
  const [walletBalance, goldWalletBalance] = [
    userInfo.pocket.walletBalance,
    userInfo.pocket.goldWalletBalance,
  ];

  return (
    <div className='panel-wallet'>
      <div className='panel-wrap'>
        <h2 className='panel-title'>کیف دارایی</h2>
        <div className='panel-wallet-container'>
          <div className='panel-wallet-top'>
            <p>{formatNumberToPersian(walletBalance)} تومان</p>
            <PanelChart />
          </div>
          <div className='panel-wallet-actions'>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/panel/deposit'}>
                <AccountBalanceWalletOutlinedIcon style={{ fontSize: 32 }} />
                <span>افزایش موجودی</span>
              </Link>
            </Button>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/panel/report'}>
                <StickyNote2OutlinedIcon style={{ fontSize: 32 }} />
                <span>گزارش</span>
              </Link>
            </Button>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/panel/withdraw'}>
                <SellOutlinedIcon style={{ fontSize: 32 }} />
                <span>برداشت پول</span>
              </Link>
            </Button>
          </div>
          <div className='panel-wallets-list'>
            <p>کیف‌ها</p>
            <div className='panel-wallets_wallet'>
              <div className='logo'>
                <Logo />
              </div>
              <div>
                <p>کیف طلایی</p>
                <span>{formatNumberToPersian(goldWalletBalance)} گرم</span>
              </div>
            </div>
            <div className='panel-wallets_wallet'>
              <div className='logo'>
                <Logo />
              </div>
              <div>
                <p>کیف پول</p>
                <span>{formatNumberToPersian(walletBalance)} تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
