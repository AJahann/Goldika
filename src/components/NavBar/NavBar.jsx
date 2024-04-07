import React from 'react';
import { Button } from '@mui/material';

import './NavBar.css';

export default function NavBar() {
  return (
    <nav className='nav'>
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
        <Button
          style={{
            color: 'var(--primary-color)',
            borderColor: 'var(--primary-color)',
            borderRadius: '10px',
            height: '27px',
          }}
          href='/'
          variant='outlined'
        >
          ورود | ثبت نام
        </Button>
      </div>
    </nav>
  );
}
