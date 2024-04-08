import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TradingBox from '../../components/TradingBox/TradingBox';

import './Home.css';
import Info from '../../components/Main/Info/Info';

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <TradingBox />
      <Info />
    </div>
  );
}
