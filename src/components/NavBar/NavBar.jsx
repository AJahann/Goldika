import React from 'react';
import { Button } from '@mui/material';

import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav container'>
      <div className='nav-wrap'>
        <div className='logo'>
          <img src='./logo.png' alt='Goldika' />
        </div>

        <div className='links'>
          <a href='/'>وبلاگ</a>
          <a href='/'>درباره ما</a>
          <a href='/'>ساعات کاری</a>
          <a href='/'>ارتباط با ما</a>
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
