import React, { useContext, useEffect, useState } from 'react';
import Input2 from './../../../components/Input2/Input2';
import GoldInput from './../../../components/Input3/Input3';
import { Box, Button, ButtonGroup, Slider, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { GoldPriceContext } from '../../../Context/GoldPriceContext';
import { formatNumberToPersian } from '../../../Utils/Utils';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Trade.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Trade() {
  const { goldBuyBalance, goldSellBalance } = useContext(GoldPriceContext);
  const { userInfo, token, updateUserInfo } = useContext(AuthContext);
  const [tradeAction, setTradeAction] = useState('buy');

  const [sumTotal, setSumTotal] = useState('');
  const [sumTotalGold, setSumTotalGold] = useState('');
  const [wichFocus, setWichFocus] = useState('price');

  const [queryParams] = useSearchParams();
  const urlParam = queryParams.get('trade_action');
  const navigate = useNavigate();

  useEffect(() => {
    if (urlParam) {
      setTradeAction(urlParam);
    }
  }, [urlParam]);

  useEffect(() => {
    if (wichFocus === 'gold') {
      let sumPrice = 0;
      if (tradeAction === 'buy') {
        sumPrice = Math.floor(Number(goldBuyBalance) * Number(sumTotalGold));
      } else {
        sumPrice = Math.floor(Number(goldSellBalance) * Number(sumTotalGold));
      }

      setSumTotal(String(sumPrice));
    }
  }, [sumTotalGold]);

  useEffect(() => {
    if (wichFocus === 'price') {
      let sumGold = 0;
      if (tradeAction === 'buy') {
        sumGold = Number(sumTotal) / Number(goldBuyBalance);
      } else {
        sumGold = Number(sumTotal) / Number(goldSellBalance);
      }
      sumGold = Math.round(sumGold * 1000) / 1000;

      setSumTotalGold(String(sumGold));
    }
  }, [sumTotal]);

  useEffect(() => {
    setSumTotal('');
    setSumTotalGold('');
  }, [tradeAction]);

  const tradeBuyHandler = () => {
    let newWalletBalance =
      Number(userInfo.pocket.walletBalance) - Number(sumTotal);
    let newWalletGoldBalance =
      Number(userInfo.pocket.goldWalletBalance) + Number(sumTotalGold);

    if (
      Number(sumTotal) >= 100000 &&
      Number(sumTotal) < Number(userInfo.pocket.walletBalance)
    ) {
      let updatedUser = {
        ...userInfo,
        pocket: {
          ...userInfo.pocket,
          walletBalance: String(newWalletBalance),
          goldWalletBalance: String(newWalletGoldBalance),
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
          updateUserInfo(updatedUser);
          navigate('/panel');
        })
        .catch((err) => console.log(err));
    } else {
      console.log('مقادیر به درستی وارد نشده است');
    }
  };
  const tradeSellHandler = () => {
    let newWalletBalance =
      Number(userInfo.pocket.walletBalance) + Number(sumTotal);
    let newWalletGoldBalance =
      Number(userInfo.pocket.goldWalletBalance) - Number(sumTotalGold);

    if (
      Number(sumTotalGold) > 0 &&
      Number(sumTotalGold) < Number(userInfo.pocket.goldWalletBalance)
    ) {
      let updatedUser = {
        ...userInfo,
        pocket: {
          ...userInfo.pocket,
          walletBalance: String(newWalletBalance),
          goldWalletBalance: String(newWalletGoldBalance),
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
          updateUserInfo(updatedUser);
          navigate('/panel');
        })
        .catch((err) => console.log(err));
    } else {
      console.log('مقادیر به درستی وارد نشده است');
    }
  };

  return (
    <div className='panel-trade'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-title'>معامله‌ی طلا</div>
          <div className='panel-trade-container'>
            <div className='panel-trade-top'>
              <ButtonGroup className='panel-trade-top-btns' variant='contained'>
                <Button
                  onClick={() => setTradeAction('buy')}
                  className={tradeAction === 'buy' ? 'selected' : ''}
                  style={{ borderRadius: '0 8px 8px 0' }}
                >
                  خرید
                </Button>
                <Button
                  onClick={() => setTradeAction('sell')}
                  className={tradeAction === 'sell' ? 'selected' : ''}
                  style={{ borderRadius: '8px 0 0 8px' }}
                >
                  فروش
                </Button>
              </ButtonGroup>

              <div className='panel-trade-top-txt'>
                <p>
                  قیمت {tradeAction === 'buy' ? 'خرید' : 'فروش'} <br />
                  <small>(هرگرم طلای ۱۸ عیار)</small>
                </p>
                <p>
                  <b>
                    {tradeAction === 'buy'
                      ? formatNumberToPersian(goldBuyBalance)
                      : formatNumberToPersian(goldSellBalance)}{' '}
                    تومان
                  </b>
                </p>
              </div>

              <Input2
                value={sumTotal}
                setValue={setSumTotal}
                label={'ارزش کل'}
                type={'تومان'}
                setWichFocus={setWichFocus}
              />
              <span></span>
              <div style={{ marginTop: 48, width: '100%' }}>
                <GoldInput
                  value={sumTotalGold}
                  setValue={setSumTotalGold}
                  label={'مقدار طلا'}
                  setWichFocus={setWichFocus}
                />
              </div>
            </div>
            <div style={{ padding: 18 }}>
              <Box className='paenl-trade-slider'>
                <Slider
                  value={Number(sumTotal)}
                  step={50000}
                  marks
                  min={0}
                  max={Number(userInfo.pocket.walletBalance)}
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
              {tradeAction === 'buy'
                ? `
                موجودی کیف پول:${' '}
                ${formatNumberToPersian(userInfo.pocket.walletBalance)} تومان
                `
                : `
              موجودی کیف طلا:${' '}
              ${formatNumberToPersian(userInfo.pocket.goldWalletBalance)} گرم
              `}
            </div>
            <div className='panel-pay-btn'>
              <Button
                fullWidth
                onClick={
                  tradeAction === 'buy' ? tradeBuyHandler : tradeSellHandler
                }
                style={{
                  marginTop: 24,
                  maxWidth: 360,
                  padding: '12px 0',
                  borderRadius: 8,
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  backgroundColor: `${tradeAction === 'buy' ? 'green' : 'red'}`,
                }}
                variant='contained'
              >
                {tradeAction === 'buy' ? 'خرید' : 'فروش'}
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
