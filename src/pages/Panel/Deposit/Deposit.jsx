import React from 'react';
import Input2 from './../../../components/Input2/Input2';
import { Button, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';

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
            <Input2 label={'مبلغ واریز'} type={'تومان'} />
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
            <div className='panel-deposit-myCard'></div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
