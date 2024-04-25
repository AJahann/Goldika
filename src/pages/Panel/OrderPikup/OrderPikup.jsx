import { Alert, Button, ThemeProvider, createTheme } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import React from 'react';

import './OrderPikup.css';
import OrderBox from './OrderBox';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

const data = [
  {
    id: 1,
    name: 'سکه ۲ گرمی زردیس',
    imgSrc: 'سکه%20۲%20گرمی%20زردیس',
  },
  {
    id: 2,
    name: 'سکه ۱.۲ گرمی کهزاد',
    imgSrc: 'سکه%20۱.۲%20گرمی%20کهزاد',
  },
  {
    id: 3,
    name: 'سکه ۱ گرمی کهزاد',
    imgSrc: 'سکه%20۱%20گرمی%20کهزاد',
  },
  {
    id: 4,
    name: 'سکه ۸۰۰ سوتی کهزاد',
    imgSrc: 'سکه%20۸۰۰%20سوتی%20کهزاد',
  },
  {
    id: 5,
    name: 'سکه ۵۰۰ سوتی کهزاد',
    imgSrc: 'سکه%20۵۰۰%20سوتی%20کهزاد',
  },
  {
    id: 6,
    name: 'سکه ۴۰۰ سوتی کهزاد',
    imgSrc: 'سکه%20۴۰۰%20سوتی%20کهزاد',
  },
  {
    id: 7,
    name: 'سکه ۲۵۰ سوتی کهزاد',
    imgSrc: 'سکه%20۲۵۰%20سوتی%20کهزاد',
  },
  {
    id: 8,
    name: 'سکه ۲۰۰ سوتی کهزاد',
    imgSrc: 'سکه%20۲۰۰%20سوتی%20کهزاد',
  },
  {
    id: 9,
    name: 'سکه ۱۰۰ سوتی کهزاد',
    imgSrc: 'سکه%20۱۰۰%20سوتی%20کهزاد',
  },
  {
    id: 10,
    name: 'سکه ۷۰ سوتی کهزاد',
    imgSrc: 'سکه%20۷۰%20سوتی%20کهزاد',
  },
  {
    id: 11,
    name: 'سکه ۵۰ سوتی کهزاد',
    imgSrc: 'سکه%20۵۰%20سوتی%20کهزاد',
  },
  {
    id: 12,
    name: 'سکه ۳۰۰ سوتی لوکس',
    imgSrc: 'سکه%20۳۰۰%20سوتی%20لوکس',
  },
  {
    id: 13,
    name: 'سکه ۱۵۰ سوتی لوکس',
    imgSrc: 'سکه%20۱۵۰%20سوتی%20لوکس',
  },
  {
    id: 14,
    name: 'سکه ۱۰۰ سوتی لوکس',
    imgSrc: 'سکه%20۱۰۰%20سوتی%20لوکس',
  },
];

export default function OrderPikup() {
  return (
    <div className='panel-orderPikup'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-orderPikup-container'>
            <div className='panel-orderPikup-topbar'>
              <div>
                <h2 className='panel-title'>دریافت طلا</h2>
                <p>موجودی طلا: ۰.۰۰۰ گرم</p>
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: 8,
                    boxShadow: 'none',
                    fontWeight: 'bold',
                  }}
                  variant='contained'
                >
                  فیلترها
                </Button>
                <Button
                  style={{ borderRadius: 8, boxShadow: 'none' }}
                  variant='contained'
                >
                  <LocalGroceryStoreOutlinedIcon />
                </Button>
              </div>
            </div>

            <div className='panel-orderPikup-content'>
              <div className='panel-orderPikup-alert'>
                <Alert
                  severity='info'
                  style={{
                    borderRadius: 16,
                    maxWidth: '63rem',
                    background: '#071318',
                    color: '#b8e7fb',
                  }}
                >
                  تحویل طلا به صورت حضوری و در شعبه اداری گلدیکا صورت می‌گیرد.
                  به علت محدودیت‌های ارسال پستی طلا و جواهر، امکان ارسال به صورت
                  پستی یا پیک میسر نمی‌باشد.
                </Alert>
              </div>
              <div className='panel-orderPikup-items'>
                {data.map((item) => (
                  <OrderBox name={item.name} imgSrc={item.imgSrc} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
