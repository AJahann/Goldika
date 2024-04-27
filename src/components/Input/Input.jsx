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
export default function Input({ label, setNumberInput }) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, '');
          setNumberInput(e.target.value);
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
        }}
      />
    </ThemeProvider>
  );
}
