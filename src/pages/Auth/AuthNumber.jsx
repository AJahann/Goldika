import { Button, TextField } from '@mui/material';

export default function AuthNumber({
  handleClickOpen,
  number,
  setNumber,
  onSubmit,
}) {
  const handleChange = (e) => {
    const inputNumber = e.target.value;
    if (inputNumber.length <= 11) {
      setNumber(inputNumber);
    }
  };

  return (
    <div className='auth-box'>
      <h1>ورود | ثبت نام</h1>
      <div className='auth-box-input-wrap'>
        <TextField
          onInput={(e) =>
            (e.target.value = e.target.value.replace(/[^\d]/g, ''))
          }
          label='شماره تلفن همراه'
          color='primary'
          autoFocus
          value={number}
          onChange={handleChange}
          variant='outlined'
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              paddingRight: 22,
            },
          }}
        />
        <span>مالکیت شماره باید به نام خودتان باشد</span>
      </div>
      <p>
        با ورود یا ثبت نام،{' '}
        <button
          style={{
            cursor: 'pointer',
            background: 'none',
            border: 'none',
          }}
          onClick={handleClickOpen}
        >
          شرایط و قوانین
        </button>{' '}
        را می‌پذیرم.
      </p>
      <Button
        onClick={() => {
          onSubmit();
        }}
        style={{ borderRadius: 8 }}
        fullWidth
        variant='contained'
      >
        ادامه
      </Button>
    </div>
  );
}
