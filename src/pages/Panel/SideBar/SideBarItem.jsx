import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SideBarItem({ name, icon, to, active }) {
  return (
    <div className='panel-sideBar_item'>
      <NavLink to={to} className={active && 'active'}>
        <span className='sideBar-item-icon'>{icon}</span>
        <span className='sideBar-item-name'>{name}</span>
      </NavLink>
    </div>
  );
}
