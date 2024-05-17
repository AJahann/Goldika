import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TradingTrans from './TradingTrans';
import Input from '../Input/Input';

import './TradingBox.css';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const buttonStyle = {
  color: 'var(--primary-color-badge)',
  borderColor: 'var(--primary-color-badge)',
  borderRadius: '10px',
  height: '23px',
  backgroundColor: 'var(--primary-color-badge-bg)',
  fontSize: '0.7rem',
};

export default function TradingBox() {
  const authContext = useContext(AuthContext);
  const [numberInput, setNumberInput] = useState('');

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
          {authContext.isLogin ? (
            <div>
              <div style={{ height: 62 }} className='numberInput'>
                <Link to={'/panel'}>
                  <Button
                    id='inputNumber-btn'
                    style={{
                      backgroundColor: 'var(--primary-color)',
                      zIndex: 10,
                      color: '#000',
                      borderRadius: 14,
                      width: 'auto',
                      left: 'auto',
                      right: 0,
                      boxShadow: 'none',
                    }}
                    variant='contained'
                  >
                    شروع معامله
                    <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className='numberInput'>
                  <Input
                    setNumberInput={setNumberInput}
                    label='شماره تلفن همراه خود را وارد کنید'
                    max12={true}
                  />
                  <Link to={`/auth?_phone=${numberInput}`}>
                    <Button
                      id='inputNumber-btn'
                      style={{
                        backgroundColor: 'var(--primary-color)',
                        zIndex: 10,
                        color: '#000',
                        boxShadow: '30px 0px 10px 0px rgb(42 44 52)',
                      }}
                      variant='contained'
                    >
                      شروع
                      <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                    </Button>
                  </Link>
                </div>
              </div>
              <span className='input-number-txt'>
                در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
              </span>
            </>
          )}
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
