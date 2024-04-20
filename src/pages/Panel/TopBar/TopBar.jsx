import { Button } from '@mui/material';
import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import './TopBar.css';

export default function TopBar() {
  return (
    <div className='panel-topBar'>
      <div className='panel-topBar-wrap'>
        <Button
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            color: 'white',
            minWidth: '40px',
          }}
          className='topBar-closeMenu-btn'
        >
          <MenuRoundedIcon style={{ fontSize: '1.5rem' }} />
        </Button>
        <Button
          style={{
            color: '#fff',
            borderRadius: 8,
            gap: 12,
            alignItems: 'center',
          }}
          className='topBar-user-info'
        >
          <span>۰۹۰۳۰۹۴۱۲۶۶</span>
          <span>
            <PersonRoundedIcon style={{ marginBottom: '-5px' }} />
          </span>
        </Button>
      </div>
    </div>
  );
}