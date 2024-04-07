import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

function MyTextField({ label, type }) {
  return (
    <div className='tradingBox-left_input'>
      <TextField
        id='my-textfield'
        fullWidth
        color='primary'
        variant='outlined'
        style={{
          backgroundColor: '#373943',
          borderRadius: 16,
        }}
        inputProps={{
          style: {
            fontSize: 18,
            color: '#fff',
            paddingLeft: 14,
          },
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
    </div>
  );
}

export default MyTextField;
