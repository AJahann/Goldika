import { Button, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { EntoFa, PetoEn } from '../../Utils/Utils';
import Loading from './../../components/Loading/Loading';
import { useQuery } from 'react-query';

const getUser = async (number) => {
  const response = await fetch(
    `https://goldikaserver.liara.run/users?number=${number}`,
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.length ? data[0] : null;
};

export default function AuthCode({
  number,
  setNumberValid,
  code,
  setCodeValid,
  isUser,
}) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');

  const {
    data: userData,
    isLoading,
    error,
    isFetched,
  } = useQuery(['user', number], () => getUser(number), {
    enabled: true,
    cacheTime: 0,
  });

  const onClickSignUp = () => {
    if (Number(inputCode) === code) {
      setCodeValid(true);
    } else {
      toast.error('کد وارد شده اشتباه است.');
    }
  };

  const onClickLogin = () => {
    if (Number(inputCode) === code && userData.number === number) {
      authContext.login(userData, userData.id);
      navigate('/');
    } else {
      toast.error('کد وارد شده اشتباه است.');
    }
  };

  useEffect(() => {
    if (isFetched) {
      toast.success(`کد شما : ${EntoFa(String(code))}`, {
        position: 'top-right',
      });
    }
  }, [code, isFetched]);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='auth-box'>
      <h1>{isUser ? 'ورود' : 'ثبت‌ نام'}</h1>
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
        <span>{EntoFa(number)}</span>
      </div>
      <hr style={{ opacity: '.5' }} />
      <div style={{ marginTop: 27 }} className='auth-box-input-wrap'>
        <p className='auth-code-title'>
          کد یک‌بار مصرف ارسال شده به تلفن همراهتان را وارد کنید:
        </p>
        <TextField
          autoFocus
          value={EntoFa(inputCode)}
          onChange={(e) => setInputCode(PetoEn(e.target.value))}
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
      {isUser ? (
        <Button
          onClick={onClickLogin}
          style={{ borderRadius: 8, marginTop: 24 }}
          fullWidth
          variant='contained'
        >
          ورود
        </Button>
      ) : (
        <Button
          onClick={onClickSignUp}
          style={{ borderRadius: 8, marginTop: 24 }}
          fullWidth
          variant='contained'
        >
          ادامه
        </Button>
      )}
    </div>
  );
}
