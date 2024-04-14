import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AuthBtn() {
  return (
    <>
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
    </>
  );
}
