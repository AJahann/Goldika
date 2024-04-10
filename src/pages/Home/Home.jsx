import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TradingBox from '../../components/TradingBox/TradingBox';
import Info from '../../components/Main/Info/Info';
import Stepper from '../../components/Main/Stepper/Stepper';

import './Home.css';
import Chart from '../../components/Main/Chart/Chart';
import ArticleNews from '../../components/Main/ArticleNews/ArticleNews';
import About from '../../components/Main/About/About';
import TxtBanner from '../../components/TxtBanner/TxtBanner';

export default function Home() {
  return (
    <div className='home container'>
      <NavBar />
      <TradingBox />
      <Info />
      <Stepper />
      <Chart />
      <ArticleNews />
      <About />
      <TxtBanner />
    </div>
  );
}
