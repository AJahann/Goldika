import React from 'react';
import Socials from './Socials';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-wrap'>
        <div className='row'>
          <div className='footer-links'>
            <div className='footer-links-right'>
              <a href='/'>صفحه‌ی اصلی</a>
              <a href='/'>درباره ما</a>
              <a href='/'>شرایط و قوانین</a>
              <a href='/'>وبلاگ</a>
            </div>
            <div className='footer-links-left'>
              <a href='/'>سؤالات متداول</a>
              <a href='/'>چطور به گلدیکا اعتماد کنیم؟</a>
              <a href='/'>ارتباط با ما</a>
            </div>
          </div>
          <div className='grow'></div>
          <div className='footer-nemads'>
            <div className='footer-nemad'>
              <div>
                <img
                  src='./images/footer/gi-enamad.44d72e55.png'
                  alt='enamad'
                />
              </div>
              <p>نماد اعتماد الکترونیکی</p>
            </div>
            <div className='footer-nemad'>
              <div>
                <img
                  src='./images/footer/gi-samandehi.7615b7e6.png'
                  alt='samandehi'
                />
              </div>
              <p>
                نشان ملی ثبت
                <br />
                samandehi.ir
              </p>
            </div>
            <div className='footer-nemad'>
              <div>
                <img
                  src='./images/footer/gi-ecunion.7ed64975.png'
                  alt='ecunion'
                />
              </div>
              <p>اتحادیه‌ی کشوری کسب‌و‌کار‌های مجازی</p>
            </div>
          </div>
        </div>
        <div className='footer-info'>
          <div className='footer-addr'>
            <p>
              آدرس دفتر فنی: تهران، دانشگاه صنعتی شریف، مجتمع نوآوری شهید ستاری،
              طبقه پنجم، واحد ۵۲۳
            </p>
            <p>
              آدرس طلافروشی: تهران، خیابان ستارخان، تقاطع صادق پور، پاساژ الماس
              غرب، طبقه منفی یک، واحد ۱۵
            </p>
          </div>
          <div className='footer-connect'>
            <div className='footer-phone'>
              <span>تلفن:</span> ۰۲۱-۹۱۰ ۹۶ ۱۹۶
            </div>

            <div className='footer-socials'>
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: 12,
          color: '#808080',
          marginTop: 20,
          padding: 10,
        }}
      >
        کلیه‌ی حقوق برای گلدیکا محفوظ است.
      </div>
    </footer>
  );
}
