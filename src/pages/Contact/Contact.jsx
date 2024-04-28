import React from 'react';
import ContactSvg from './ContactSvg';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import Socials from './../../components/Footer/Socials';

import './Contact.css';
import Txt from './Txt';

export default function Contact() {
  return (
    <div className='contact'>
      <NavBar />
      <div className='contact-main container'>
        <div className='contact-wrap'>
          <h1 className='contact-page-title'>ارتباط با گلدیکا</h1>
          <div className='contact-page-content'>
            <div>
              <ContactSvg />
            </div>
            <div className='contact_content-txt'>
              <Txt icon={<LocalPhoneOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  ۰۲۱-۱۱۱۱۱۱۱
                </p>
              </Txt>
              <Txt icon={<LocalPhoneOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  ۰۲۲-۲۲۲۲۲۲۲
                </p>
              </Txt>
              <Txt icon={<EmailOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  support@goldika.ir
                </p>
              </Txt>
              <Txt icon={<AccessTimeOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  برای تحویل طلا، حداقل یک روز قبل درخواست خود را از طریق منو
                  دریافت طلا ثبت نمایید. <br /> شنبه تا چهارشنبه ۱۰ تا ۱۸ <br />
                  پنجشنبه ۱۰ تا ۱۴ <br />
                  (به جز ایام تعطیل)
                </p>
              </Txt>
              <Txt icon={<FmdGoodOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  آدرس دفتر فنی: تهران، دانشگاه صنعتی شریف، مرکز نوآوری شهید
                  ستاری، طبقه پنجم، واحد ۵۲۳{' '}
                </p>
              </Txt>
              <Txt icon={<FmdGoodOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  آدرس طلافروشی: تهران، خیابان ستارخان، تقاطع صادق پور، پاساژ
                  الماس غرب، طبقه منفی یک، واحد ۱۵
                </p>
              </Txt>
              <Txt icon={<MarkunreadMailboxOutlinedIcon />}>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                  ۱۴۵۸۸۸۹۵۹۵{' '}
                </p>
              </Txt>

              <br />
              <div className='contact-socials'>
                <Socials />
              </div>
            </div>
            <div className='contact-map'>
              <iframe
                title='map'
                width='320'
                height='320'
                style={{ borderRadius: 16 }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.014406178425!2d51.3530723!3d35.7012631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0167eaeb16d7%3A0xebf245068e88e31e!2z2K_Zgdiq2LEg2YXYsdqp2LLbjCDar9mE2K_bjNqp2Kc!5e0!3m2!1sfa!2sse!4v1701671177035!5m2!1sfa!2sse&amp;language=fa'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
