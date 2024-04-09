import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TradingBox from '../../components/TradingBox/TradingBox';
import Info from '../../components/Main/Info/Info';
import Stepper from '../../components/Main/Stepper/Stepper';

import './Home.css';
import Chart from '../../components/Main/Chart/Chart';

export default function Home() {
  return (
    <div className='container'>
      <NavBar />
      <TradingBox />
      <Info />
      <Stepper />
      <Chart />
    </div>
  );
}
