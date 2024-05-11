import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Box, Button } from '@mui/material';
import Input2 from './../Input2/Input2';
import { GoldPriceContext } from '../../Context/GoldPriceContext';
import { formatNumberToPersian } from '../../Utils/Utils';
import { AuthContext } from '../../Context/AuthContext';
import GoldInput from '../Input3/Input3';
import { useNavigate } from 'react-router-dom';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#f1ab1f',
  },
});
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#fff',
    // maxWidth: 207,
    width: '50%',
    padding: '12px 16px',
    '&.Mui-selected': {
      color: '#f1ab1f',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#f1ab1f',
    },
  }),
);

export default function TradingTrans() {
  const { goldBuyBalance, goldSellBalance } = useContext(GoldPriceContext);
  const { isLogin } = useContext(AuthContext);
  const [tab, SetTab] = useState(0);
  const [tradeAction, setTradeAction] = useState('buy');
  const [sumTotal, setSumTotal] = useState('');
  const [sumTotalGold, setSumTotalGold] = useState('');
  const [wichFocus, setWichFocus] = useState('price');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    SetTab(newValue);
  };

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

  useEffect(() => {
    if (tab === 0) {
      setTradeAction('buy');
    } else {
      setTradeAction('sell');
    }
  }, [tab]);

  return (
    <>
      <span className='tradingBox-left-header'>
        <div className='item'>
          <span>قیمت خرید</span>
          <span className='item-price item-price-buy'>
            <span>{formatNumberToPersian(goldBuyBalance)}</span>{' '}
            <span>تومان</span>
          </span>
        </div>
        <div className='item-center'>
          <div style={{ filter: 'drop-shadow(0 0 0.7em)', opacity: 1 }}>
            <svg viewBox='0 0 609.6 489.61' stroke='currentColor'>
              <path
                fill='none'
                strokeLinecap='square'
                strokeliterlimit='10'
                strokeWidth='45'
                d='M295.73 112.09c3.02-.11 6.04-.16 9.08-.16 33.65 0 66.3 6.55 97.04 19.46l.32.13-.04.34c-4.19 33.09-14.85 64.64-31.67 93.77a253.106 253.106 0 0 1-21.13 31.03l-3.36 4.14c-3.53 4.24-7.11 8.26-10.63 11.97a248.37 248.37 0 0 1-30.25 27.15l-.27.2-2.54-1.94a249.764 249.764 0 0 1-38.59-37.36l-3.37-4.16a254.995 254.995 0 0 1-21.14-31.04c-16.82-29.12-27.47-60.67-31.67-93.76v-.11c-.12-.78-.21-1.56-.3-2.35l-.28-2.52c-.11-1.01-.21-2.07-.31-3.13v-.12c-.13-1.25-.24-2.5-.34-3.75-.1-1.23-.18-2.49-.26-3.73v-.2c-.1-1.17-.17-2.32-.22-3.48v-.11a195.7 195.7 0 0 1-.22-5.99c-.1-4.23-.1-8.39 0-12.4l.1-3.27c.04-1.09.09-2.15.14-3.21.06-1.04.12-2.08.19-3.12.1-1.6.21-3.17.34-4.73.13-1.58.27-3.14.43-4.7.11-1.09.22-2.15.34-3.21.12-1.07.25-2.13.39-3.19l.04-.28c.28-2.12.55-4.06.84-5.91l.03-.17c.09-.62.19-1.24.29-1.87l.27-1.71c.32-1.88.67-3.77 1.03-5.64l.02-.11c.19-.98.38-1.96.59-2.95l.03-.12a252.16 252.16 0 0 1 7.12-27.01c.03-.1.07-.2.1-.3h290.19l72.63 89.89-275.97 341.42-275.79-341.4 72.63-89.88h24.06'
              ></path>
            </svg>
          </div>
        </div>
        <div className='item'>
          <span>قیمت فروش</span>
          <span className='item-price item-price-sell'>
            <span>{formatNumberToPersian(goldSellBalance)}</span>{' '}
            <span>تومان</span>
          </span>
        </div>
      </span>

      <div className='tradingBox-left-main'>
        <Box>
          <StyledTabs value={tab} onChange={handleChange}>
            <StyledTab label='خرید' />
            <StyledTab label='فروش' />
          </StyledTabs>
        </Box>

        <div className='tradingBox-left_inputs'>
          <Input2
            value={sumTotal}
            setValue={setSumTotal}
            label={'ارزش کل'}
            type={'تومان'}
            setWichFocus={setWichFocus}
          />{' '}
          <GoldInput
            value={sumTotalGold}
            setValue={setSumTotalGold}
            label={'مقدار طلا'}
            setWichFocus={setWichFocus}
          />
        </div>
      </div>

      <div className='tradingBox-left-btn'>
        <Button
          style={{
            border: '3px solid #f1ab1fa5',
            borderRadius: 8,
            color: 'var(--primary-color)',
          }}
          size='large'
          fullWidth
          variant='outlined'
          onClick={() => {
            if (isLogin) {
              navigate('/panel/trade');
            } else {
              navigate('/auth');
            }
          }}
        >
          {tab ? 'فروش' : 'خرید'}
        </Button>
      </div>
    </>
  );
}
