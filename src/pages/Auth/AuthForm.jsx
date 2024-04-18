import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export default function AuthForm({ number, setNumberValid, setCodeValid }) {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [register, setRegister] = useState(false);

  useEffect(() => {});

  const submitHandler = () => {
    if (name && family && pass && rePass) {
      if (pass === rePass) {
        let userInfo = {
          name,
          family,
          pass,
        };
        toast.success('ثبت نام با موفقیت انجام شد.', {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: true,
        });
        console.log(userInfo);
        setTimeout(() => {
          setRegister(true);
        }, 3000);
      }
    }
  };
  return (
    <div className='auth-box'>
      {register && <Navigate to='/' />}
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
          autoFocus
          style={{ marginBottom: 14 }}
          label={'نام'}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              textAlign: 'right',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'نام خانوداگی'}
          value={family}
          onChange={(e) => setFamily(e.target.value)}
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[0-9]/g, '');
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              textAlign: 'right',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'پسورد'}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <TextField
          value={rePass}
          onChange={(e) => setRePass(e.target.value)}
          label={'تکرار پسورد'}
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
