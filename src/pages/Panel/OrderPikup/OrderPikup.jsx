import { Alert, Button, ThemeProvider, createTheme } from '@mui/material';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import React, { useContext, useState } from 'react';
import BigNumber from 'bignumber.js'; // ایمپورت کتابخونه BigNumber.js
import { formatNumberToPersian } from '../../../Utils/Utils';
import { AuthContext } from '../../../Context/AuthContext';
import { productsData } from '../../../data/data';
import Cart from './Cart';

import './OrderPikup.css';
import OrderBox from './OrderBox';
import { ToastContainer, toast } from 'react-toastify';
import OrderFilters from './OrderFilters';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
});

export default function OrderPickup() {
  const { userInfo, token, updateUserInfo } = useContext(AuthContext);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [products] = useState(productsData || []);
  const [filterProducts, setFilterProducts] = useState(productsData || []);

  const orderHandler = async (item) => {
    const itemWeight = new BigNumber(item.weight);
    const amountUserGold = new BigNumber(userInfo.pocket.goldWalletBalance);

    if (itemWeight.isGreaterThan(amountUserGold)) {
      toast.error('موجودی کافی نمی باشد', {
        theme: 'colored',
      });
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
      toast.success('محصول با موفقیت اضافه شد.', {
        theme: 'colored',
      });
    } catch (error) {
      toast.error('خطا در ارسال درخواست', {
        theme: 'colored',
      });
    }
  };

  const sendRequest = async (token, updateUser) => {
    const response = await fetch(
      `https://goldikaserver.liara.run/users/${token}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateUser),
      },
    );

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
                  موجودی طلا:{' '}
                  {formatNumberToPersian(userInfo.pocket.goldWalletBalance)} گرم
                </p>
              </div>
              <div>
                <Button
                  style={{
                    borderRadius: 8,
                    boxShadow: 'none',
                    fontWeight: 'bold',
                  }}
                  onClick={() => setIsOpenFilters(true)}
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
                {filterProducts.map((item) => (
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
        {/* toast */}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
        {/* filters */}
        <OrderFilters
          isOpen={isOpenFilters}
          onClose={() => setIsOpenFilters(false)}
          data={products}
          setData={setFilterProducts}
        />
      </ThemeProvider>
    </div>
  );
}
