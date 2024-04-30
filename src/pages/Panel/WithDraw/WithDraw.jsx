import React, { useContext, useEffect, useState } from 'react';
import Input2 from './../../../components/Input2/Input2';
import { Alert, Box, Button, Slider, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

import './WithDraw.css';
import { UserPocketContext } from '../../../Context/UserPocketContext';
import { formatNumberToPersian } from '../../../Utils/Utils';
import MyCards from '../components/MyCards/MyCards';
import NoCards from '../components/NoCards/NoCards';
import ModalAddCredit from '../../../components/Modal/ModalAddCredit';
import { AuthContext } from '../../../Context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function WithDraw() {
  const { walletBalance, cards, updateUserPocket } =
    useContext(UserPocketContext);
  const { token } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${token}`)
      .then((res) => res.json())
      .then((user) => updateUserPocket({ cards: user.pocket.cards }));
  }, [token]);

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
              موجودی: {formatNumberToPersian(walletBalance)} تومان
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
              {cards.length ? (
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
              variant='contained'
              disabled
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
