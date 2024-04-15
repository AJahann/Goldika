import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TradingTrans from './TradingTrans';
import Input from '../Input/Input';

import './TradingBox.css';

const buttonStyle = {
  color: 'var(--primary-color-badge)',
  borderColor: 'var(--primary-color-badge)',
  borderRadius: '10px',
  height: '23px',
  backgroundColor: 'var(--primary-color-badge-bg)',
  fontSize: '0.7rem',
};

export default function TradingBox() {
  return (
    <section className='tradingBox container'>
      <div className='tradingBox-wrap'>
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
            <div className='numberInput'>
              <Input label='شماره تلفن همراه خود را وارد کنید' />
              <Button
                id='inputNumber-btn'
                style={{
                  backgroundColor: 'var(--primary-color)',
                  zIndex: 10,
                  color: '#000',
                }}
                variant='contained'
              >
                شروع
                <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
              </Button>
            </div>
          </div>
          <span className='input-number-txt'>
            در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
          </span>
        </div>

        <div className='tradingBox-left'>
          <div className='tradingBox-left-wrapper'>
            <TradingTrans />
          </div>
        </div>
      </div>
    </section>
  );
}
