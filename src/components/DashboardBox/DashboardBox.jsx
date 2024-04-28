import React from 'react';
import { Button } from '@mui/material';
import './DashboardBox.css';
import { Link } from 'react-router-dom';

export default function DashboardBox({
  title,
  txt,
  price,
  icon,
  bgColor,
  btnName,
  geram,
  link,
}) {
  return (
    <div className='dashboard-direction-box'>
      <p className='dashboard_box-title'>{title}</p>
      {txt && <span className='dashboard_box-span'>{txt}</span>}
      <p className='dashboard_box-price'>
        {price} {geram ? 'گرم' : 'تومان'}
      </p>
      {bgColor && (
        <Link to={link}>
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
        </Link>
      )}
    </div>
  );
}
