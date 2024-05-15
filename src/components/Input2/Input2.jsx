import React from 'react';
import { TextField, InputAdornment, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import './Input2.css';
import {
  PetoEn,
  combineNumbersFromGroups,
  formatNumberToPersian,
  removeNonNumericCharacters,
  separateNumbersTo4Groups,
} from '../../Utils/Utils';

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

function Input2({
  value = '0',
  setValue,
  label,
  type,
  bgBlack,
  card,
  setWichFocus,
  maxCard,
}) {
  return (
    <div className='input2'>
      <ThemeProvider theme={theme}>
        <TextField
          fullWidth
          color='primary'
          variant='outlined'
          value={
            card
              ? separateNumbersTo4Groups(value)
              : formatNumberToPersian(value)
          }
          onChange={(e) => {
            if (card) {
              setValue(combineNumbersFromGroups(PetoEn(e.target.value)));
            } else {
              setValue(removeNonNumericCharacters(PetoEn(e.target.value)));
            }
          }}
          onFocus={() => {
            setWichFocus && setWichFocus('price');
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
            maxLength: `${maxCard ? 19 : 12}`,
          }}
          label={label}
          InputProps={{
            endAdornment: (
              <InputAdornment style={{ color: '#fff' }} position='end'>
                <p>{type}</p>
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

export default Input2;
