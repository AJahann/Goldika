import { Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AuthForm({ number, setNumberValid, setCodeValid }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = ({ name, family, pass, rePass }) => {
    if (pass === rePass) {
      let userInfo = {
        name,
        family,
        pass,
      };
      toast.success('ثبت نام با موفقیت انجام شد.', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: true,
      });
      navigate('/panel');
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
        <span>{number}</span>
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
