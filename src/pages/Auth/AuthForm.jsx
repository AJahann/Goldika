import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

export default function AuthForm({ number, setNumberValid, setCodeValid }) {
  const submitHandler = () => {};
  return (
    <div className='auth-box'>
      <h1>ثبت‌ نام</h1>
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
            setCodeValid(false);
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
        <TextField
          style={{ marginBottom: 14 }}
          label={'نام'}
          autoFocus
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'نام خانوداگی'}
          autoFocus
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'پسورد'}
          autoFocus
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <TextField
          label={'تکرار پسورد'}
          autoFocus
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
      </div>
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
