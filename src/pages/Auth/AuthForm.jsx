import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../Context/AuthContext';
import { EntoFa } from '../../Utils/Utils';

export default function AuthForm({ number, setNumberValid, setCodeValid }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const submitHandler = ({ name, family, pass, rePass }) => {
    if (pass === rePass) {
      let userInfo = {
        id: uuidv4(),
        name,
        family,
        number,
        pass,
        pocket: {
          walletBalance: '0',
          goldWalletBalance: '0.000',
          cart: [],
          cards: [],
        },
      };
      fetch(`http://localhost:4000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          authContext.login(userInfo, userInfo.id);
          navigate('/panel');
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    toast.success('لطفا فرم را به دقت پر کنید.');
  }, []);
  useEffect(() => {
    errors.pass && toast.error('دوست عزیز پسورد شما دارای شرایط حدقلی نیست.');
  }, [errors]);

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
        onSubmit={handleSubmit(submitHandler)}
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
