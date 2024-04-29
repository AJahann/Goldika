import React, { useContext } from 'react';
import Input2 from './../../../components/Input2/Input2';
import { Alert, Box, Button, Slider, createTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

import './WithDraw.css';
import { UserPocketContext } from '../../../Context/UserPocketContext';
import { formatNumberToPersian } from '../../../Utils/Utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function WithDraw() {
  const userPocketContext = useContext(UserPocketContext);
  return (
    <div className='panel-withdraw'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-title'>برداشت</div>
          <div className='panel-withdraw-container'>
            <div
              style={{
                color: '#9fa0a8',
                display: 'flex',
                alignItems: 'center',
                margin: '12px 0 24px 0',
                paddingRight: 4,
              }}
            >
              <CreditCardOutlinedIcon style={{ fontSize: 24, marginLeft: 8 }} />
              موجودی: {formatNumberToPersian(
                userPocketContext.walletBalance,
              )}{' '}
              تومان
            </div>
            <Input2 label={'مبلغ برداشت'} type={'تومان'} bgBlack />
            <span></span>
            <div style={{ padding: 18 }}>
              <Box className='paenl-withdraw-slider'>
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
            <Box className='panel-withdraw-alert'>
              <Alert style={{ backgroundColor: '#160b0b' }} severity='error'>
                فرآیند برداشت نهایتاً یک روز کاری زمان خواهد برد
              </Alert>
            </Box>
            <div className='panel-myCards'>
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
          <div className='panel-pay-btn'>
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
              ادامه
            </Button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
