import React from 'react';

export default function Txt({ icon, children }) {
  return (
    <div style={{ display: 'flex' }}>
      <span className='icon'>{icon}</span>
      {children}
    </div>
  );
}
