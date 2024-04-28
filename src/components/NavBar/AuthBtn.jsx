import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { EntoFa, separateNumbers } from '../../Utils/Utils';

export default function AuthBtn() {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLogin ? (
        <Link to={'/panel'}>
          <Button
            style={{
              color: 'var(--primary-color)',
              borderColor: 'var(--primary-color)',
              borderRadius: '10px',
              height: 'auto',
            }}
            variant='outlined'
          >
            <span dir='ltr' style={{ marginLeft: 6 }}>
              {EntoFa(separateNumbers(authContext.userInfo.number))}
            </span>
            | ناحیه کاربری
          </Button>
        </Link>
      ) : (
        <Link to={'/auth'}>
          <Button
            style={{
              color: 'var(--primary-color)',
              borderColor: 'var(--primary-color)',
              borderRadius: '10px',
              height: '27px',
            }}
            variant='outlined'
          >
            ورود | ثبت نام
          </Button>
        </Link>
      )}
    </>
  );
}
