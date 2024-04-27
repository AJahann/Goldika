import { Button, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

export default function AuthCode({
  number,
  setNumberValid,
  code,
  setCodeValid,
}) {
  const authContext = useContext(AuthContext);
  const inputCode = useRef();

  useEffect(() => {
    toast.success(`کد شما : ${code}`, { position: 'top-right' });
  }, [code]);
  useEffect(() => {
    console.log(authContext);
  }, []);

  const submitHandler = () => {
    if (Number(inputCode.current.value) === code) {
      setCodeValid(true);
    } else {
      toast.error('کد وارد شده اشتباه است.');
    }
  };

  return (
    <div className='auth-box'>
      <h1>{authContext.isLogin ? 'ورود' : 'ثبت‌ نام'}</h1>
      <div
        style={{
          paddingLeft: 10,
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => {
            setNumberValid(false);
          }}
          style={{
            color: 'white',
            borderRadius: '50%',
            minWidth: '25px',
            width: 32,
          }}
        >
          <ArrowBackIcon fontSize='small' />
        </Button>
        <span>{number}</span>
      </div>
      <hr style={{ opacity: '.5' }} />
      <div style={{ marginTop: 27 }} className='auth-box-input-wrap'>
        <p className='auth-code-title'>
          کد یک‌بار مصرف ارسال شده به تلفن همراهتان را وارد کنید:
        </p>
        <TextField
          inputRef={inputCode}
          autoFocus
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              textAlign: 'center',
            },
          }}
        />
      </div>
      <Typography
        onClick={() => {
          setNumberValid(false);
        }}
        style={{ margin: 0, marginTop: 18, cursor: 'pointer' }}
        color={'primary'}
      >
        شماره تلفن اشتباه است؟
      </Typography>
      <Button
        onClick={() => {
          submitHandler();
        }}
        style={{ borderRadius: 8, marginTop: 24 }}
        fullWidth
        variant='contained'
      >
        ادامه
      </Button>
    </div>
  );
}
