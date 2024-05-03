import { Box, Button } from '@mui/material';
import React from 'react';

export default function OrderBox({ name, imgSrc, onClick }) {
  return (
    <Box className='panel-orderPikup-item'>
      <div className='panel-orderPikup-item-img'>
        <img src={`./../images/panel/${imgSrc}.webp`} alt='طلا' />
      </div>
      <div className='panel-orderPikup-item-txt'>
        <p>{name}</p>
        <Button
          onClick={onClick}
          variant='outlined'
          style={{ borderRadius: 8, height: 31 }}
        >
          افزودن به سبد
        </Button>
      </div>
    </Box>
  );
}
