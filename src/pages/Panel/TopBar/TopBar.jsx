import { Button } from '@mui/material';
import React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import './TopBar.css';
import { EntoFa, separateNumbers } from '../../../Utils/Utils';

export default function TopBar({ sideBarHandler, number }) {
  return (
    <div className='panel-topBar'>
      <div className='panel-topBar-wrap'>
        <Button
          onClick={sideBarHandler}
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
          <span style={{ direction: 'ltr' }}>
            {EntoFa(separateNumbers(number))}
          </span>
          <span>
            <PersonRoundedIcon style={{ marginBottom: '-5px' }} />
          </span>
        </Button>
      </div>
    </div>
  );
}
