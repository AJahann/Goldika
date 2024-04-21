import React from 'react';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from './Logo';

import './Wallet.css';
import PanelChart from '../../../components/PanelChart/PanelChart';

export default function Wallet() {
  return (
    <div className='panel-wallet'>
      <div className='panel-wrap'>
        <h2 className='panel-title'>کیف دارایی</h2>
        <div className='panel-wallet-container'>
          <div className='panel-wallet-top'>
            <p>۰ تومان</p>
            <PanelChart />
          </div>
          <div className='panel-wallet-actions'>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/'}>
                <AccountBalanceWalletOutlinedIcon style={{ fontSize: 32 }} />
                <span>افزایش موجودی</span>
              </Link>
            </Button>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/'}>
                <StickyNote2OutlinedIcon style={{ fontSize: 32 }} />
                <span>گزارش</span>
              </Link>
            </Button>
            <Button fullWidth className='panel-wallet-action'>
              <Link to={'/'}>
                <SellOutlinedIcon style={{ fontSize: 32 }} />
                <span>افزایش موجودی</span>
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
                <span>۰.۰۰۰ گرم</span>
              </div>
            </div>
            <div className='panel-wallets_wallet'>
              <div className='logo'>
                <Logo />
              </div>
              <div>
                <p>کیف پول</p>
                <span>۰ تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
