import React from 'react';
import { Button, TextField } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import './TradingBox.css';
import TradingTrans from './TradingTrans';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const buttonStyle = {
  color: 'var(--primary-color-badge)',
  borderColor: 'var(--primary-color-badge)',
  borderRadius: '10px',
  height: '23px',
  backgroundColor: 'var(--primary-color-badge-bg)',
  fontSize: '0.7rem',
};
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

export default function TradingBox() {
  return (
    <section className='tradingBox container'>
      <div className='tradingBox-wrap'>
        <CacheProvider value={cacheRtl}>
          <div className='tradingBox-right'>
            <h1 className='tradingBox-txt'>
              <span className='title'>گلدیکا</span>
              <span className='verticalBar'>|</span>
              <span className='text'>بازار امن طلا</span>
            </h1>

            <div className='row-badges'>
              <Button variant='outlined' disabled style={buttonStyle}>
                بدون نیاز به مراجعه حضوری
              </Button>
              <Button variant='outlined' disabled style={buttonStyle}>
                امکان تحویل فیزیکی
              </Button>
              <Button variant='outlined' disabled style={buttonStyle}>
                بازار ۲۴ ساعته
              </Button>
            </div>

            <h1 className='tradingBox-title'>
              خرید و فروش آنلاین طلای آبشده (بدون اجرت)
            </h1>
            <h2 className='trandingBox-subTitle'>
              خرید طلای آبشده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
            </h2>

            <div>
              <ThemeProvider theme={theme}>
                <div className='numberInput'>
                  <TextField
                    label='شماره تلفن همراه خود را وارد کنید'
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
                  <Button
                    id='inputNumber-btn'
                    color='primary'
                    variant='contained'
                  >
                    شروع
                    <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                  </Button>
                </div>
              </ThemeProvider>
            </div>
            <span className='input-number-txt'>
              در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
            </span>
          </div>

          <div className='tradingBox-left'>
            <div className='tradingBox-left-wrapper'>
              <TradingTrans theme={theme} />
            </div>
          </div>
        </CacheProvider>
      </div>
    </section>
  );
}
