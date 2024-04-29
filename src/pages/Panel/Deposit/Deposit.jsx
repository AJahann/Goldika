import React, { useContext, useState } from 'react';
import { Alert, Box, Button, Typography, createTheme } from '@mui/material';
import Input2 from './../../../components/Input2/Input2';
import Input from './../../../components/Input/Input';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Modal from './../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { UserPocketContext } from './../../../Context/UserPocketContext';

import './Deposit.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Deposit() {
  const userPocketContext = useContext(UserPocketContext);
  const [deposit, setDeposit] = useState('');
  const [open, setOpen] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const navigate = useNavigate();

  const creditHandler = () => {
    if (deposit.length) {
      userPocketContext.walletBalance =
        Number(userPocketContext.walletBalance) + Number(deposit);
      setDeposit('');
      navigate('/panel/dashboard');
    }
  };
  const addCreditCardHandler = () => {
    console.log(cardNumber);
    console.log(cardName);
  };

  return (
    <div className='panel-deposit'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-title'>واریز</div>
          <div className='panel-deposit-container'>
            <Input2
              value={deposit}
              setValue={setDeposit}
              label={'مبلغ واریز'}
              type={'تومان'}
              bgBlack
            />
            <span></span>
            <div className='panel-deposit-stock'>
              <div className='panel-deposit-stock-top'>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                  onClick={() => setDeposit('500000')}
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۵۰۰,۰۰۰ تومان
                </Button>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                  onClick={() => setDeposit('1000000')}
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
                  onClick={() => setDeposit('5000000')}
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۵,۰۰۰,۰۰۰ تومان
                </Button>
                <Button
                  fullWidth
                  style={{ height: 31, borderRadius: 8 }}
                  color='primary'
                  variant='outlined'
                  onClick={() => setDeposit('10000000')}
                >
                  <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                  ۱۰,۰۰۰,۰۰۰ تومان
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
                onClick={() => {
                  setOpen(true);
                }}
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
              onClick={creditHandler}
              variant='contained'
              disabled={!deposit.length}
            >
              پرداخت
            </Button>
          </div>
          <Modal open={open} className={'modal-panel'}>
            <Typography
              style={{
                fontSize: 20,
                marginBottom: 16,
                color: '#fff',
                fontWeight: 'bold',
              }}
            >
              افزودن کارت بانکی
            </Typography>
            <Box width={'100%'}>
              <Alert
                severity='warning'
                style={{ backgroundColor: 'rgb(25, 18, 7) !important' }}
              >
                مالکیت کارت باید به نام خودتان باشد.
              </Alert>
              <Input2
                label={'شماره کارت'}
                type={null}
                value={cardNumber}
                setValue={setCardNumber}
                card
              />
              <Input
                style={{ width: '100%', marginTop: '14px' }}
                label={'نام انتخابی'}
                setNumberInput={setCardName}
                card
              />
            </Box>
            <Box textAlign={'right'} marginTop={2}>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                style={{
                  borderRadius: 8,
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  marginLeft: 8,
                  color: '#fff',
                }}
                variant='contained'
              >
                انصراف
              </Button>
              <Button
                onClick={addCreditCardHandler}
                style={{ borderRadius: 8, boxShadow: 'none' }}
                variant='contained'
              >
                افزودن
              </Button>
            </Box>
          </Modal>
        </div>
      </ThemeProvider>
    </div>
  );
}
