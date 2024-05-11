import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: 100,
        color: '#fff',
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      404
      <Link to={'/'}>
        <Button
          variant='outlined'
          style={{
            maxWidth: 200,
            marginTop: 60,
            color: 'var(--primary-color)',
            borderColor: 'var(--primary-color)',
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
}
