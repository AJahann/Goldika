import React, { useContext, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import TradingBox from '../../components/TradingBox/TradingBox';
import Info from '../../components/Main/Info/Info';
import Stepper from '../../components/Main/Stepper/Stepper';
import Chart from '../../components/Main/Chart/Chart';
import ArticleNews from '../../components/Main/ArticleNews/ArticleNews';
import About from '../../components/Main/About/About';
import TxtBanner from '../../components/TxtBanner/TxtBanner';
import Footer from '../../components/Footer/Footer';
import { GoldPriceContext } from './../../Context/GoldPriceContext';
import { AuthContext } from '../../Context/AuthContext';

import './Home.css';

export default function Home() {
  const authContext = useContext(AuthContext);
  const { updatePrices } = useContext(GoldPriceContext);
  useEffect(() => {
    fetch(`https://goldikaserver.liara.run/gold`)
      .then((res) => res.json())
      .then((res) => {
        updatePrices({
          goldBuyBalance: res.buy,
          goldSellBalance: res.sell,
        });
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className='home'>
      <NavBar />
      <TradingBox />
      <Info />
      <Stepper />
      <Chart />
      <ArticleNews />
      <About />
      <TxtBanner isLogin={authContext.isLogin} />
      <Footer />
    </div>
  );
}
