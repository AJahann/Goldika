import React, { useContext, useEffect, useState } from 'react';
import Input2 from './../../../components/Input2/Input2';
import { Alert, Box, Button, Slider, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

import './WithDraw.css';
import { formatNumberToPersian } from '../../../Utils/Utils';
import MyCards from '../components/MyCards/MyCards';
import NoCards from '../components/NoCards/NoCards';
import ModalAddCredit from '../../../components/Modal/ModalAddCredit';
import { AuthContext } from '../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function WithDraw() {
  const { token, userInfo, updateUserInfo } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [withDrawal, setWithDrawal] = useState('');
  const navigate = useNavigate();

  const updateWalletBalance = async (newWalletBalance) => {
    const updatedUser = {
      ...userInfo,
      pocket: {
        ...userInfo.pocket,
        walletBalance: newWalletBalance,
      },
    };

    try {
      const response = await fetch(
        `https://goldikaserver.liara.run/users/${token}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        },
      );

      if (!response.ok) {
        throw new Error('خطا در ارسال درخواست');
      }
      updateUserInfo(updatedUser);
      navigate('/panel/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleWithdrawal = () => {
    const newWalletBalance =
      Number(userInfo.pocket.walletBalance) - Number(withDrawal);
    updateWalletBalance(newWalletBalance);
  };

  useEffect(() => {
    if (Number(withDrawal) > Number(userInfo.pocket.walletBalance)) {
      setWithDrawal(userInfo.pocket.walletBalance);
    }
  }, [withDrawal, userInfo.pocket.walletBalance]);

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
                userInfo.pocket.walletBalance,
              )}{' '}
              تومان
            </div>
            <Input2
              value={withDrawal}
              setValue={setWithDrawal}
              label={'مبلغ برداشت'}
              type={'تومان'}
              bgBlack
            />
            <span></span>
            <div style={{ padding: 18 }}>
              <Box className='paenl-withdraw-slider'>
                <Slider
                  value={Number(withDrawal)}
                  step={
                    +userInfo.pocket.walletBalance
                      ? +userInfo.pocket.walletBalance / 50
                      : 10
                  }
                  marks
                  min={0}
                  max={Number(userInfo.pocket.walletBalance)}
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
              {(userInfo.pocket.cards || []).length ? (
                <MyCards setOpen={setOpen} />
              ) : (
                <NoCards setOpen={setOpen} />
              )}
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
              onClick={userInfo.pocket.cards.length ? handleWithdrawal : null}
              variant='contained'
              disabled={
                Number(withDrawal) <= 0 || !userInfo.pocket.cards.length
              }
            >
              برداشت
            </Button>
          </div>
        </div>
        {/* modal */}
        <ModalAddCredit open={open} setOpen={setOpen} />
      </ThemeProvider>
    </div>
  );
}
