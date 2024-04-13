import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { TextField, createTheme } from '@mui/material';
import './Input.css';

export default function Input({ label }) {
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

  return (
    <ThemeProvider theme={theme}>
      <TextField
        label={label}
        color='primary'
        variant='outlined'
        inputProps={{
          style: {
            fontSize: 18,
            color: '#fff',
            paddingRight: 22,
          },
        }}
      />
    </ThemeProvider>
  );
}
