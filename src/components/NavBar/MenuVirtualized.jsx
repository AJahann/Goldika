import React from 'react';
import { Link } from 'react-router-dom';
import AuthBtn from './AuthBtn';

export default function VirtualizedList({ isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`menu-virtualized ${isActive ? 'active' : ''}`}
    >
      <div className={`menu-virtualized-wrap `}>
        <AuthBtn />
        <Link to={'/blog'}>وبلاگ</Link>
        <Link to={'/about'}>درباره ما</Link>
        <Link to={'/faq'}>سوالات متداول</Link>
        <Link to={'/contact'}>ارتباط با ما</Link>
      </div>
    </div>
  );
}
