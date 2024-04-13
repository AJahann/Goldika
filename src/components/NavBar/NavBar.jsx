import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='nav container'>
      <div className='nav-wrap'>
        <div className='logo'>
          <Link to={'/'}>
            <img src='./logo.png' alt='Goldika' />
          </Link>
        </div>

        <div className='links'>
          <a href='/'>وبلاگ</a>
          <Link to={'/about'}>درباره ما</Link>
          <Link to={'/faq'}>سوالات متداول</Link>
          <Link to={'/contact'}>ارتباط با ما</Link>
        </div>

        <div className='signUp'>
          <Link to={'/auth'}>
            <Button
              style={{
                color: 'var(--primary-color)',
                borderColor: 'var(--primary-color)',
                borderRadius: '10px',
                height: '27px',
              }}
              variant='outlined'
            >
              ورود | ثبت نام
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
