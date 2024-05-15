import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { TextField, createTheme } from '@mui/material';
import './Input.css';

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
export default function Input({ label, setNumberInput, card, style, max12 }) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        style={style}
        onInput={(e) => {
          if (card) {
            setNumberInput(e.target.value);
          } else {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            setNumberInput(e.target.value);
          }
        }}
        label={label}
        color='primary'
        variant='outlined'
        inputProps={{
          style: {
            fontSize: 18,
            color: '#fff',
            paddingRight: 22,
            borderRadius: 16,
          },
          maxLength: `${max12 ? 12 : null}`,
        }}
      />
    </ThemeProvider>
  );
}
