import React from 'react';
import Input2 from './../../../components/Input2/Input2';
import { Alert, Button, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import './Deposit.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Deposit() {
  return (
    <div className='panel-deposit'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-title'>واریز</div>
          <div className='panel-deposit-container'>
            <Input2 label={'مبلغ واریز'} type={'تومان'} bgBlack />
            <span></span>
            <div className='panel-deposit-stock'>
              <div className='panel-deposit-stock-top'>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۵۰۰,۰۰۰ تومان
                </Button>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۱,۰۰۰,۰۰۰ تومان
                </Button>
              </div>
              <div className='panel-deposit-stock-bottom'>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۵۰۰,۰۰۰ تومان
                </Button>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۱,۰۰۰,۰۰۰ تومان
                </Button>
              </div>
            </div>

            <div className='panel-deposit-myCards'>
              {/* <div className='panel_myCards-top'>
                <div className='panel_myCards-title'>کارت های من:</div>
                <Button variant='text' className='panel_myCards-add-btn'>
                  افزودن کارت
                </Button>
              </div>
              <div className='panel_myCards-bottom'>
                <div className='panel_myCards-card'>
                  <div>
                    <AccountBalanceIcon
                      style={{ fontSize: 56, color: '#84879a' }}
                    />
                  </div>
                  <div className='panel_mayCards-card-txt'>
                    <p className='panel_mayCards-card-name'>بانک صادرات</p>
                    <p className='panel_mayCards-card-number'>
                      6037-0000-0000-9521
                    </p>
                  </div>
                </div>
              </div> */}
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
              >
                افزودن کارت
              </Button>
            </div>
          </div>
          <div className='panel-deposit-pay-btn'>
            <Button
              style={{
                marginTop: 24,
                width: 320,
                padding: '12px 0',
                borderRadius: 8,
                fontWeight: 'bold',
                boxShadow: 'none',
              }}
              variant='contained'
              disabled
            >
              پرداخت
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
