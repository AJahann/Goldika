import React from 'react';
import Input2 from './../../../components/Input2/Input2';
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Slider,
  createTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

import './Trade.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Trade() {
  return (
    <div className='panel-trade'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-title'>معامله‌ی طلا</div>
          <div className='panel-trade-container'>
            <div className='panel-trade-top'>
              <ButtonGroup className='panel-trade-top-btns' variant='contained'>
                <Button
                  className='selected'
                  style={{ borderRadius: '0 8px 8px 0' }}
                >
                  خرید
                </Button>
                <Button style={{ borderRadius: '8px 0 0 8px' }}>فروش</Button>
              </ButtonGroup>

              <div className='panel-trade-top-txt'>
                <p>
                  قیمت خرید <br />
                  <small>(هرگرم طلای ۱۸ عیار)</small>
                </p>
                <p>
                  <b>۳‌,۶۰۲,۸۷۵ تومان</b>
                </p>
              </div>

              <Input2 label={'ارزش کل'} type={'تومان'} />
              <span></span>
              <div style={{ marginTop: 48, width: '100%' }}>
                <Input2 label={'مقدار طلا'} type={'گرم'} />
              </div>
            </div>
            <div style={{ padding: 18 }}>
              <Box className='paenl-trade-slider'>
                <Slider
                  defaultValue={0}
                  shiftStep={30}
                  step={10}
                  marks
                  min={10}
                  max={100}
                  style={{ color: 'rgb(189, 189, 189)' }}
                />
              </Box>
            </div>
            <div
              style={{
                color: '#9fa0a8',
                display: 'flex',
                alignItems: 'center',
                margin: '',
                paddingRight: 4,
              }}
            >
              <CreditCardOutlinedIcon style={{ fontSize: 24, marginLeft: 8 }} />
              موجودی کیف پول: ۰ تومان
            </div>
            <div className='panel-pay-btn'>
              <Button
                fullWidth
                style={{
                  marginTop: 24,
                  maxWidth: 360,
                  padding: '12px 0',
                  borderRadius: 8,
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  backgroundColor: 'green',
                }}
                variant='contained'
              >
                ادامه
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
