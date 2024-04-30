import { Alert, Button } from '@mui/material';
import React from 'react';

export default function NoCards({ setOpen }) {
  return (
    <>
      <Alert
        style={{
          color: '#ffe2b7',
          fontSize: 14,
        }}
        severity='warning'
      >
        کارتی در سامانه تعریف نشده است.
      </Alert>
      <Button
        style={{
          borderRadius: 8,
          fontSize: 14,
          margin: '0 auto',
          marginTop: 12,
          fontWeight: 'bold',
          boxShadow: 'none',
        }}
        variant='contained'
        onClick={() => {
          setOpen(true);
        }}
      >
        افزودن کارت
      </Button>
    </>
  );
}
