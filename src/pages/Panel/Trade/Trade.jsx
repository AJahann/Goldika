import React, { useContext, useEffect, useMemo, useState } from 'react';
import Input2 from './../../../components/Input2/Input2';
import GoldInput from './../../../components/Input3/Input3';
import { Box, Button, ButtonGroup, Slider, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import { UserPocketContext } from '../../../Context/UserPocketContext';
import { GoldPriceContext } from '../../../Context/GoldPriceContext';
import { formatNumberToPersian } from '../../../Utils/Utils';
import { useSearchParams } from 'react-router-dom';
import './Trade.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function Trade() {
  const userPocketContext = useContext(UserPocketContext);
  const { goldBuyBalance, goldSellBalance } = useContext(GoldPriceContext);
  const [tradeAction, setTradeAction] = useState('buy');

  const [sumTotal, setSumTotal] = useState('');
  const [sumTotalGold, setSumTotalGold] = useState('');
  const [wichFocus, setWichFocus] = useState('price');

  const [queryParams] = useSearchParams();
  const urlParam = queryParams.get('trade_action');

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
              {tradeAction === 'buy'
                ? `
                موجودی کیف پول:${' '}
                ${formatNumberToPersian(userPocketContext.walletBalance)} تومان
                `
                : `
              موجودی کیف طلا:${' '}
              ${formatNumberToPersian(userPocketContext.goldWalletBalance)} گرم
              `}
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
