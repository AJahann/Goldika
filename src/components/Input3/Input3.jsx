import React, { useEffect } from 'react';
import { TextField, InputAdornment, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { EntoFa, PetoEn, countDecimals } from '../../Utils/Utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f1ab1f',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#f2f2f360',
          borderRadius: 16,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffffb0',
        },
      },
    },
  },
});

function GoldInput({ value = '0', setValue, label, bgBlack, setWichFocus }) {
  useEffect(() => {
    if (Number(value) >= 9999) {
      setValue('1000');
    }
  }, [value]);

  return (
    <div className='input2'>
      <ThemeProvider theme={theme}>
        <TextField
          fullWidth
          color='primary'
          variant='outlined'
          onFocus={() => {
            setWichFocus && setWichFocus('gold');
          }}
          value={EntoFa(value)}
          onChange={(e) => {
            let inputValue = e.target.value;
            inputValue = PetoEn(inputValue);
            const newValue = inputValue.replace(/[^\d.]|(?<=\..*)\./g, '');
            if (countDecimals(newValue) <= 3) {
              setValue(newValue);
            }
          }}
          style={{
            backgroundColor: `${bgBlack ? '#2a2c34' : '#373943'}`,
            borderRadius: 16,
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: '#fff',
              paddingLeft: 14,
              borderRadius: 16,
            },
          }}
          label={label}
          InputProps={{
            endAdornment: (
              <InputAdornment style={{ color: '#fff' }} position='end'>
                <p>گرم</p>
              </InputAdornment>
            ),
            classes: {
              root: 'mui-rtl-putrnr',
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
}

export default GoldInput;
