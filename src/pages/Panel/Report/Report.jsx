import { ThemeProvider } from '@emotion/react';
import { Button, createTheme } from '@mui/material';
import React from 'react';
import './Report.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Report() {
  return (
    <div className='panel-report'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-report-top'>
            <h2 className='panel-title'>گزارش</h2>
            <Button
              style={{ backgroundColor: 'rgb(84, 84, 84)', borderRadius: 8 }}
              disabled
              variant='contained'
            >
              فیلتر ها
            </Button>
          </div>
          <div className='panel-report-container'>
            <p>هیچ گزارشی یافت نشد.</p>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
