import React from 'react';
import './Info.css';
import MultiActionAreaCard from './Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import Icon1 from './Icon1';
import Icon2 from './Icon2';
import Icon3 from './Icon3';
import Icon4 from './Icon4';

export default function Info() {
  return (
    <div className='sec-info container'>
      <div className='sec-info-wrap'>
        <div className='info-right'>
          <div className='info_txt'>
            <h1>چرا گلدیکا را انتخاب کنیم؟</h1>
            <p>
              گلدیکا سامانه‌ای ثبت‌شده و معتبر است که امکان معامله‌ی طلا با
              کمترین کارمزد و بدون محدودیت در مبلغ و زمان را فراهم آورده. طلای
              شما به صورت فیزیکی تامین شده و همراه با فاکتور رسمی قابل تحویل
              است.
            </p>
          </div>
          <div className='info-wrap'>
            <MultiActionAreaCard>
              <CardMedia component='svg' height='190'>
                <Icon1 />
              </CardMedia>
              <CardContent
                style={{
                  padding: '0',
                }}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    margin: '14px 0',
                    lineHeight: '34px',
                  }}
                  fontSize={28}
                  gutterBottom
                  variant='span'
                  component='div'
                >
                  راهکاری ایمن برای حفظ ارزش پول
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                  fontSize={16}
                  variant='body2'
                  color='text.secondary'
                >
                  نقدشوندگی‌ بالا، بازدهی فراتر از تورم و ریسک پایین بازار طلا
                  موجب حفظ ارزش دارایی شما می‌شود.
                </Typography>
              </CardContent>
              <CardActions className='info-card-btn'>
                <Button size='small' color='primary'>
                  مقایسه رشد ارزش طلا و سایر بازار‌های مالی
                  <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                </Button>
              </CardActions>
            </MultiActionAreaCard>

            <MultiActionAreaCard>
              <CardMedia component='svg' height='190'>
                <Icon2 />
              </CardMedia>
              <CardContent
                style={{
                  padding: '0',
                }}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    margin: '14px 0',
                    lineHeight: '34px',
                  }}
                  fontSize={28}
                  gutterBottom
                  variant='span'
                  component='div'
                >
                  شفاف، تضمین شده و مطمئن{' '}
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                  fontSize={16}
                  variant='div'
                  component={'div'}
                  id='mui-typography-div'
                >
                  <p>
                    <GppGoodOutlinedIcon style={{ fontSize: '24px' }} />
                    کسب تمام مجوز‌های قانونی لازم
                  </p>
                  <p>
                    <GppGoodOutlinedIcon style={{ fontSize: '24px' }} />
                    تأمین و نگهداری ایمن طلای کاربران تا لحظه‌ی تحویل{' '}
                  </p>
                  <p>
                    <GppGoodOutlinedIcon style={{ fontSize: '24px' }} />
                    تیم مؤسس مجرب از فارغ‌التحصیلان دانشگاه شریف{' '}
                  </p>
                  <p>
                    <GppGoodOutlinedIcon style={{ fontSize: '24px' }} />
                    سابقه‌ی حضور در بازار سنتی طلا{' '}
                  </p>
                  <p>
                    <GppGoodOutlinedIcon style={{ fontSize: '24px' }} />
                    تسویه‌ی ریالی سریع یا تحویل فوری طلا در قالب‌های استاندارد و
                    با فاکتور رسمی{' '}
                  </p>
                </Typography>
              </CardContent>
              <CardActions className='info-card-btn'>
                <Button size='small' color='primary'>
                  چطور به گلدیکا اعتماد کنیم؟
                  <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                </Button>
              </CardActions>
            </MultiActionAreaCard>
          </div>
        </div>
        <div className='info-left'>
          <div className='info-wrap'>
            <MultiActionAreaCard>
              <CardMedia component='svg' height='190'>
                <Icon3 />
              </CardMedia>
              <CardContent
                style={{
                  padding: '0',
                }}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    margin: '14px 0',
                    lineHeight: '34px',
                  }}
                  fontSize={28}
                  gutterBottom
                  variant='span'
                  component='div'
                >
                  بدون اجرت و مالیات{' '}
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                  fontSize={16}
                  variant='body2'
                  color='text.secondary'
                >
                  تنها برای اصل طلا پول پرداخت کنید. با خرید طلای آبشده از
                  گلدیکا هزینه‌ای برای اجرت ساخت و مالیات بر ارزش افزوده پرداخت
                  نمی‌کنید.
                </Typography>
              </CardContent>
              <CardActions className='info-card-btn'>
                <Button size='small' color='primary'>
                  قیمت طلا در گلدیکا چطور محاسبه می‌شود؟
                  <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                </Button>
              </CardActions>
            </MultiActionAreaCard>

            <MultiActionAreaCard>
              <CardMedia component='svg' height='190'>
                <Icon4 />
              </CardMedia>
              <CardContent
                style={{
                  padding: '0',
                }}
              >
                <Typography
                  style={{
                    color: '#ffffff',
                    margin: '14px 0',
                    lineHeight: '34px',
                  }}
                  fontSize={28}
                  gutterBottom
                  variant='span'
                  component='div'
                >
                  آنلاین، سریع و بدون محدودیت{' '}
                </Typography>
                <Typography
                  style={{
                    color: '#ffffff',
                  }}
                  fontSize={16}
                  variant='body2'
                  color='text.secondary'
                >
                  در گلدیکا امکان معامله آنلاین، سریع، شبانه روزی و بدون وقفه
                  (حتی در ایام تعطیلی بازار) فراهم گردیده است. در نتیجه مشتری می
                  تواند در هر زمان و هر مکان، در کمتر از دو دقیقه و با هر سطحی
                  از دارایی (حتی با ۵۰ هزار تومان) طلا خریداری کند.
                </Typography>
              </CardContent>
              <CardActions className='info-card-btn'>
                <Button size='small' color='primary'>
                  سوالات متداول
                  <ArrowBackIosNewIcon style={{ fontSize: '14px' }} />
                </Button>
              </CardActions>
            </MultiActionAreaCard>
          </div>
        </div>
      </div>
    </div>
  );
}
