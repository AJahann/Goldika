import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../Context/AuthContext';
import { EntoFa } from '../../Utils/Utils';
import { useMutation } from 'react-query';

const createUser = async (userInfo) => {
  const response = await fetch('https://goldikaserver.liara.run/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
};

export default function AuthForm({ number, setNumberValid, setCodeValid }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(createUser, {
    onSuccess: (data) => {
      authContext.login(data, data.id);
      navigate('/panel');
    },
    onError: () => {
      toast.error('خطایی رخ داده است. لطفا دوباره تلاش کنید.');
    },
  });

  useEffect(() => {
    toast.success('لطفا فرم را به دقت پر کنید.');
  }, []);

  useEffect(() => {
    errors.pass && toast.error('دوست عزیز پسورد خود را چک کنید.');
  }, [errors]);

  const onSubmit = (formData) => {
    if (formData.pass === formData.rePass) {
      const userInfo = {
        id: uuidv4(),
        ...formData,
        number,
        pocket: {
          walletBalance: '0',
          goldWalletBalance: '0.000',
          cart: [],
          cards: [],
        },
      };
      mutate(userInfo);
    } else {
      toast.error('دوست عزیز پسورد خود را چک کنید.');
    }
  };

  return (
    <div className='auth-box'>
      <h1>ثبت‌ نام</h1>
      <div
        style={{
          paddingLeft: 10,
          display: 'flex',
          flexDirection: 'row-reverse',
          gap: 0.5,
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => {
            setNumberValid(false);
            setCodeValid(false);
          }}
          style={{
            color: 'white',
            borderRadius: '50%',
            minWidth: '25px',
            width: 32,
          }}
        >
          <ArrowBackIcon fontSize='small' />
        </Button>
        <span>{EntoFa(number)}</span>
      </div>
      <hr style={{ opacity: '.5' }} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: 27 }}
        className='auth-box-input-wrap'
      >
        <TextField
          autoFocus
          style={{ marginBottom: 14 }}
          label={'نام'}
          InputProps={{
            ...register('name', {
              required: true,
              minLength: 2,
              maxLength: 15,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'نام خانوادگی'}
          InputProps={{
            ...register('family', {
              required: true,
              minLength: 2,
              maxLength: 15,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              textAlign: 'right',
              direction: 'rtl',
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={'پسورد'}
          InputProps={{
            type: 'password',
            ...register('pass', {
              required: true,
              minLength: 5,
              maxLength: 25,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <TextField
          label={'تکرار پسورد'}
          InputProps={{
            type: 'password',
            ...register('rePass', {
              required: true,
              minLength: 5,
              maxLength: 25,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
            },
          }}
        />
        <Button
          type='submit'
          style={{ borderRadius: 8, marginTop: 24 }}
          fullWidth
          variant='contained'
        >
          ادامه
        </Button>
      </form>
    </div>
  );
}
