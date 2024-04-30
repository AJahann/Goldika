import { Alert, Box, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import Input2 from '../Input2/Input2';
import Input from '../Input/Input';
import Modal from './../../components/Modal/Modal';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function ModalAddCredit({ open, setOpen }) {
  const { token, userInfo } = useContext(AuthContext);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const navigate = useNavigate();

  const addCreditCardHandler = () => {
    if (cardNumber.length && cardName.length) {
      let cardInfo = { cardNumber, cardName };

      let updatedUser = {
        ...userInfo,
        pocket: {
          ...userInfo.pocket,
          cards: [...userInfo.pocket.cards, cardInfo],
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

      setCardName('');
      setCardNumber('');
      setOpen(false);
    }
  };

  return (
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
  );
}
