import React from 'react';
import { Button } from '@mui/material';
import './DashboardBox.css';

export default function DashboardBox({
  title,
  txt,
  price,
  icon,
  bgColor,
  btnName,
  geram,
}) {
  return (
    <div className='dashboard-direction-box'>
      <p className='dashboard_box-title'>{title}</p>
      {txt && <span className='dashboard_box-span'>{txt}</span>}
      <p className='dashboard_box-price'>
        {price} {geram ? 'گرم' : 'تومان'}
      </p>
      {bgColor && (
        <Button
          fullWidth
          style={{
            backgroundColor: `${bgColor}`,
            color: 'black',
            fontSize: 18,
            borderRadius: 8,
            gap: 10,
          }}
        >
          {icon}
          {btnName}
        </Button>
      )}
    </div>
  );
}
