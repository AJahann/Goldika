import React, { useContext, useEffect, useState } from 'react';
import { Button, createTheme } from '@mui/material';
import Input2 from './../../../components/Input2/Input2';
import AddIcon from '@mui/icons-material/Add';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { UserPocketContext } from './../../../Context/UserPocketContext';
import { AuthContext } from './../../../Context/AuthContext';

import './Deposit.css';
import ModalAddCredit from '../../../components/Modal/ModalAddCredit';
import NoCards from '../components/NoCards/NoCards';
import MyCards from '../components/MyCards/MyCards';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Deposit() {
  const { updateUserPocket, walletBalance, cards } =
    useContext(UserPocketContext);
  const { token, userInfo } = useContext(AuthContext);
  const [deposit, setDeposit] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const creditHandler = () => {
    if (deposit.length) {
      let newWalletBalance = Number(walletBalance) + Number(deposit);

      let updatedUser = {
        ...userInfo,
        pocket: {
          ...userInfo.pocket,
          walletBalance: newWalletBalance,
        },
      };

      fetch(`http://localhost:4000/users/${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser), // ارسال اطلاعات به سرور
      })
        .then((res) => res.json())
        .then((res) => {
          navigate('/panel/dashboard');
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetch(`http://localhost:4000/users/${token}`)
      .then((res) => res.json())
      .then((user) => updateUserPocket({ cards: user.pocket.cards }));
  }, [token]);

  return (
    <div className='panel-deposit'>
      {console.log('deposit')}
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
              {cards.length ? (
                <MyCards setOpen={setOpen} />
              ) : (
                <NoCards setOpen={setOpen} />
              )}
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
        </div>
        {/* modal */}
        <ModalAddCredit open={open} setOpen={setOpen} />
      </ThemeProvider>
    </div>
  );
}
