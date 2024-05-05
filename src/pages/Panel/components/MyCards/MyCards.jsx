import { Button } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import React, { useContext } from 'react';
import './MyCards.css';
import { separateNumbersTo4Groups } from '../../../../Utils/Utils';
import { AuthContext } from '../../../../Context/AuthContext';

export default function MyCards({ setOpen }) {
  const { userInfo } = useContext(AuthContext);

  return (
    <>
      <div className='panel_myCards'>
        <div className='panel_myCards-title'>کارت های من:</div>
        <Button
          onClick={() => setOpen(true)}
          variant='text'
          className='panel_myCards-add-btn'
        >
          افزودن کارت
        </Button>
      </div>
      <div className='panel_myCards-bottom'>
        {(userInfo.pocket.cards || []).map((card, index) => {
          return (
            <div key={index} className='panel_myCards-card'>
              <div>
                <AccountBalanceIcon
                  style={{ fontSize: 56, color: '#84879a' }}
                />
              </div>
              <div className='panel_mayCards-card-txt'>
                <p className='panel_mayCards-card-name'>{card.cardName}</p>
                <p className='panel_mayCards-card-number'>
                  {separateNumbersTo4Groups(card.cardNumber)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
