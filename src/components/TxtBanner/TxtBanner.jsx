import React from 'react';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import './TxtBanner.css';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function TxtBanner({ isLogin }) {
  return (
    <div className='txtBanner container'>
      <div className='sec-txtBanner-wrap'>
        <div className='txtBanner-wrap'>
          <ThemeProvider theme={theme}>
            <h1>همین حالا سرمایه‌گذاری را شروع کنید</h1>
            {isLogin ? (
              <Link to={'/panel'}>
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    boxShadow: 'none',
                    color: '#000000e1',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  ورود به گلدیکا
                </Button>
              </Link>
            ) : (
              <Link to={'/auth'}>
                <Button
                  variant='contained'
                  color='primary'
                  style={{
                    boxShadow: 'none',
                    color: '#000000e1',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  ثبت نام در گلدیکا
                </Button>
              </Link>
            )}
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
