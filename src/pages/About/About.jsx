import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import GoldSvg from './GoldSvg';
import './About.css';

export default function About() {
  return (
    <section className='about-page'>
      <NavBar />
      <div style={{ padding: '2rem 0' }} className='about-page-main container'>
        <div className='about-page-main-wrap'>
          <h1 className='about-page-title'>درباره‌ی گلدیکا</h1>
          <div className='about-page-content'>
            <p>
              علاوه بر مصارف زینتی، طلا از دیرباز به عنوان یک دارایی امن و
              پشتوانه ای مقاوم در برابر تورم تلقی می‌شود، به‌طوری‌که همواره در
              سبد دارایی اقشار مختلف، بخشی به این فلز گرانبها اختصاص دارد. با
              وجود تحولات سریع در زندگی روزمره و فراگیر شدن بازارهای جدید آنلاین
              در سال‌های اخیر، همچنان خلأ یک بستر آنلاین، امن و عمومی برای خرید
              و فروش طلا به شدت احساس می‌شد. در این راستا{' '}
              <b>
                تیمی از دانش آموختگان دانشگاه صنعتی شریف با بهره‌گیری از دانش
                تخصصی و سوابق موفق در حوزه فینتک
              </b>{' '}
              به منظور برطرف کردن این نیاز کاربران، اقدام به ایجاد گلدیکا
              نمودند.
            </p>
            <div className='about-page-content-bottom'>
              <p>
                <b>
                  گلدیکا بستری است برای خرید و فروش طلا برای همه اقشار با هر
                  سطحی از دارایی و به قیمت منصفانه؛
                </b>{' '}
                و در این راه تیم گلدیکا تمام تلاش خود را نموده تا دسترسی امن را
                برای عموم مردم فراهم سازد از دریافت مجوز از اتحادیه صنف
                فروشندگان و سازندگان طلا، جواهر، نقره و سکه تهران تا مجوز
                راه‌اندازی سامانه معاملات آنلاین طلای آب‌شده و مصنوعات طلا و
                جواهر از اتحادیه کشوری کسب و کارهای مجازی و گواهی نماد اعتماد
                الکترونیکی توسط مرکز توسعه تجارت الکترونیکی زیر مجموعه وزارت
                صنعت، معدن و تجارت. علاوه بر این، گلدیکا توسط{' '}
                <span>پارک علم و فناوری دانشگاه صنعتی شریف</span> به عنوان یک
                واحد فناور مورد پذیرش قرار گرفته است.
              </p>
              <div className='about-page-content-svg'>
                <GoldSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
