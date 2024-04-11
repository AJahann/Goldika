import React from 'react';
import { Button, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Typo from './Typo';
import Svg from './Svg';

import './Auth.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#f2f2f360',
          borderRadius: 16,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffffb0',
        },
      },
    },
  },
});

export default function Auth() {
  return (
    <div className='auth'>
      <ThemeProvider theme={theme}>
        <div className='auth-content'>
          <div className='auth-content-wrap'>
            <Typo />
            <div className='auth-content-txt'>
              <h3>
                با هر مبلغی بدون پرداخت اجرت و مالیات، طلا بخرید و بفروشید و در
                هر زمان تحویل بگیرید.
              </h3>
              <div>
                <span>پشتیبانی:</span>
                <span>
                  {' '}
                  شماره تماس :
                  <span style={{ direction: 'ltr' }}>۰۲۱-۹۱۰ ۹۶ ۱۹۵</span>
                </span>
                <span>رایانامه: support@goldika.ir</span>
              </div>
            </div>
            <Svg />
          </div>
        </div>
        <div className='auth-container'>
          <div className='auth-box'>
            <h1>ورود | ثبت نام</h1>
            <div className='auth-box-input-wrap'>
              <TextField
                label='شماره تلفن همراه'
                color='primary'
                variant='outlined'
                inputProps={{
                  style: {
                    fontSize: 18,
                    color: '#fff',
                    paddingRight: 22,
                  },
                }}
              />
              <span>مالکیت شماره باید به نام خودتان باشد</span>
            </div>
            <p>
              با ورود یا ثبت نام، <span>شرایط و قوانین</span> را می‌پذیرم.
            </p>
            <Button style={{ borderRadius: 8 }} fullWidth variant='contained'>
              ادامه
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
