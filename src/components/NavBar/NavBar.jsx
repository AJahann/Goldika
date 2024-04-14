import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './MenuVirtualized';

import './NavBar.css';
import AuthBtn from './AuthBtn';

export default function NavBar() {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className='nav container'>
      <Menu onClick={() => setIsShow(false)} isActive={isShow} />
      <div className='nav-wrap'>
        <div>
          <div className='menu'>
            <Button
              onClick={() => setIsShow(true)}
              style={{ color: 'white', paddingLeft: 0, paddingRight: 0 }}
            >
              <MenuIcon />
            </Button>
          </div>
          <div className='logo'>
            <Link to={'/'}>
              <img src='./logo.png' alt='Goldika' />
            </Link>
          </div>

          <div className='links'>
            <Link to={'/blog'}>وبلاگ</Link>
            <Link to={'/about'}>درباره ما</Link>
            <Link to={'/faq'}>سوالات متداول</Link>
            <Link to={'/contact'}>ارتباط با ما</Link>
          </div>
        </div>

        <div className='signUp'>
          <AuthBtn />
        </div>
      </div>
    </nav>
  );
}
