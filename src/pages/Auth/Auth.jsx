import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Typo from './Typo';
import Svg from './Svg';
import Modal from './../../components/Modal/Modal';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

import './Auth.css';
import AuthBox from './AuthBox';

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
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = () => {
    console.log(number);
  };

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
                <Svg />
              </div>
            </div>
          </div>
        </div>

        <div className='auth-container'>
          <AuthBox onSubmit={submitHandler}>
            <h1>ورود | ثبت نام</h1>
            {/* <h1>ورود</h1> */}
            <div className='auth-box-input-wrap'>
              <TextField
                label='شماره تلفن همراه'
                color='primary'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
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
              با ورود یا ثبت نام،{' '}
              <button
                style={{
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                }}
                onClick={handleClickOpen}
              >
                شرایط و قوانین
              </button>{' '}
              را می‌پذیرم.
            </p>
          </AuthBox>
        </div>
        <Modal open={open}>
          <DialogTitle
            style={{ color: '#fff' }}
            sx={{ m: 0, p: 2 }}
            id='customized-dialog-title'
          >
            شرایط و قوانین{' '}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              ۱. تمامی کالاها و خدمات گلدیکا، حسب مورد دارای مجوز های لازم از
              مراجع ذی صلاح بوده و کلیه اصول، رویه ها و فعالیت های آن تابع
              قوانین و مقررات جمهوری اسلامی ایران از جمله قوانین و مقررات نظام
              صنفی، انتظامی، بهداشتی، ایمنی، قانون تجارت، قانون پولی و بانکی
              کشور، مبارزه با پولشویی، قانون مبارزه با قاچاق کالا و ارز، قانون
              مدنی، قانون تجارت الکترونیکی، قانون جرائم رایانه ای، قانون حمایت
              از حقوق مصرف کنندگان، ممنوعیت فروش آنلاین طلا به صورت امانی و ...
              می باشد.
            </Typography>
            <Typography gutterBottom>
              ۲. هر مشتری یا کاربری که قصد استفاده از امکانات و خدمات گلدیکا را
              دارد، موظف به رعایت قوانین و مقررات اشاره شده در این صفحه می باشد
              و کاربر در زمان ثبت نام کلیه قوانین و مقررات را مطالعه کرده و
              تأیید می نماید. لذا ورود کاربر و استفاده از کلیه خدمات گلدیکا، به
              معنای آگاهی کامل و پذیرفتن شرایط و قوانین و مقررات است. در صورت
              عدم رعایت قوانین و مقررات گلدیکا توسط کاربران، گلدیکا حق غیرفعال
              نمودن نام کاربری و یا توقف ارائه خدمات و یا معرفی کاربر به مراجع
              ذی صلاح را برای خود محفوظ می دارد.
            </Typography>
            <Typography gutterBottom>
              ۳. گلدیکا حق اصلاح و تغییر قوانین و مقررات ذکر شده در این صفحه را
              چه به صورت کلی و چه به صورت جزئی دارد و نسخه نهایی را در این صفحه
              در معرض دید قرار می‌دهد. استفاده از خدمات گلدیکا پس از اعمال
              تغییرات، به معنی پذیرش همه تغییرات است.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ borderRadius: 8 }}
              variant='contained'
            >
              بستن
            </Button>
          </DialogActions>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
