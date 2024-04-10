import React from 'react';
import { Button, createMuiTheme } from '@mui/material';

import './TxtBanner.css';
import { ThemeProvider } from '@emotion/react';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function TxtBanner() {
  return (
    <div className='txtBanner'>
      <div className='txtBanner-wrap'>
        <ThemeProvider theme={theme}>
          <h1>همین حالا سرمایه‌گذاری را شروع کنید</h1>
          <Button
            variant='contained'
            color='primary'
            style={{
              boxShadow: 'none',
              color: '#000000e1',
              borderRadius: '8px',
              fontWeight: 'bold',
            }}
          >
            ثبت نام در گلدیکا
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
