import { Alert, Button, ThemeProvider, createTheme } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import React, { useContext, useState } from 'react';
import BigNumber from 'bignumber.js'; // ایمپورت کتابخونه BigNumber.js
import { formatNumberToPersian } from '../../../Utils/Utils';
import { UserPocketContext } from '../../../Context/UserPocketContext';
import { AuthContext } from '../../../Context/AuthContext';
import { productsData as data } from '../../../data/data';
import Cart from './Cart';

import './OrderPikup.css';
import OrderBox from './OrderBox';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function OrderPickup() {
  const { goldWalletBalance } = useContext(UserPocketContext);
  const { userInfo, token, updateUserInfo } = useContext(AuthContext);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [amountUserGold, setAmountUserGold] = useState(
    new BigNumber(goldWalletBalance),
  );

  const orderHandler = async (item) => {
    const itemWeight = new BigNumber(item.weight);

    if (itemWeight.isGreaterThan(amountUserGold)) {
      console.log('موجودی کافی نمی باشد');
      return;
    }

    const isExist = userInfo.pocket.cart.some(
      (product) => product.id === item.id,
    );

    const updateUser = {
      ...userInfo,
      pocket: {
        ...userInfo.pocket,
        goldWalletBalance: amountUserGold.minus(itemWeight),
        cart: isExist
          ? userInfo.pocket.cart.map((product) =>
              product.id === item.id
                ? { ...product, count: (product.count || 1) + 1 }
                : product,
            )
          : [...userInfo.pocket.cart, item],
      },
    };

    try {
      await sendRequest(token, updateUser);
      updateUserInfo(updateUser);
      setAmountUserGold((prev) => prev.minus(itemWeight));
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async (token, updateUser) => {
    const response = await fetch(`http://localhost:4000/users/${token}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateUser),
    });

    if (!response.ok) {
      throw new Error('خطا در ارسال درخواست');
    }

    return response.json();
  };

  return (
    <div className='panel-orderPikup'>
      <ThemeProvider theme={theme}>
        <div className='panel-wrap'>
          <div className='panel-orderPikup-container'>
            <div className='panel-orderPikup-topbar'>
              <div>
                <h2 className='panel-title'>دریافت طلا</h2>
                <p>
                  موجودی طلا: {formatNumberToPersian(amountUserGold.toString())}{' '}
                  گرم
                </p>
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: 8,
                    boxShadow: 'none',
                    fontWeight: 'bold',
                  }}
                  variant='contained'
                >
                  فیلترها
                </Button>
                <Button
                  onClick={() => setIsOpenCart(true)}
                  style={{ borderRadius: 8, boxShadow: 'none' }}
                  variant='contained'
                >
                  <LocalGroceryStoreOutlinedIcon />
                </Button>
                <Cart
                  isOpen={isOpenCart}
                  onClose={() => setIsOpenCart(false)}
                  cart={userInfo.pocket.cart}
                />
              </div>
            </div>

            <div className='panel-orderPikup-content'>
              <div className='panel-orderPikup-alert'>
                <Alert
                  severity='info'
                  style={{
                    borderRadius: 16,
                    maxWidth: '63rem',
                    background: '#071318',
                    color: '#b8e7fb',
                  }}
                >
                  تحویل طلا به صورت حضوری و در شعبه اداری گلدیکا صورت می‌گیرد.
                  به علت محدودیت‌های ارسال پستی طلا و جواهر، امکان ارسال به صورت
                  پستی یا پیک میسر نمی‌باشد.
                </Alert>
              </div>
              <div className='panel-orderPikup-items'>
                {data.map((item) => (
                  <OrderBox
                    onClick={() => {
                      orderHandler(item);
                    }}
                    key={item.id}
                    name={item.name}
                    imgSrc={item.imgSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
