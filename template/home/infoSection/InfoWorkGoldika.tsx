import InfoCard from "./InfoCard";
import MultiActionAreaCard from "./MultiActionAreaCard";

import style from "./Info.module.css";
import SvgFirst from "./svg/SvgFirst";
import SvgSecond from "./svg/SvgSecond";
import SvgThird from "./svg/SvgThird";
import SvgFourth from "./svg/SvgFourth";

const InfoText = () => (
  <div className={style.infoTxt}>
    <h1>چرا گلدیکا را انتخاب کنیم؟</h1>
    <p>
      گلدیکا سامانه‌ای ثبت‌شده و معتبر است که امکان معامله‌ی طلا با کمترین
      کارمزد و بدون محدودیت در مبلغ و زمان را فراهم آورده. طلای شما به صورت
      فیزیکی تامین شده و همراه با فاکتور رسمی قابل تحویل است.
    </p>
  </div>
);

const InfoWorkGoldika = () => {
  return (
    <section className="container">
      <div className={style.secInfoWrap}>
        <div className={style.infoRight}>
          <InfoText />
          <div className={style.infoWrap}>
            <MultiActionAreaCard>
              <InfoCard
                title="راهکاری ایمن برای حفظ ارزش پول"
                description="نقدشوندگی‌ بالا، بازدهی فراتر از تورم و ریسک پایین بازار طلا موجب حفظ ارزش دارایی شما می‌شود."
                buttonText="مقایسه رشد ارزش طلا و سایر بازار‌های مالی"
                icon={<SvgFirst />}
              />
            </MultiActionAreaCard>

            <MultiActionAreaCard>
              <InfoCard
                title="شفاف، تضمین شده و مطمئن"
                description="کسب تمام مجوز‌های قانونی لازم، تأمین و نگهداری ایمن طلای کاربران تا لحظه‌ی تحویل"
                buttonText="چطور به گلدیکا اعتماد کنیم؟"
                icon={<SvgSecond />}
              />
            </MultiActionAreaCard>
          </div>
        </div>

        <div className={style.infoLeft}>
          <div className={style.infoWrap}>
            <MultiActionAreaCard>
              <InfoCard
                title="بدون اجرت و مالیات"
                description="تنها برای اصل طلا پول پرداخت کنید. با خرید طلای آبشده از گلدیکا هزینه‌ای برای اجرت ساخت و مالیات بر ارزش افزوده پرداخت نمی‌کنید."
                buttonText="قیمت طلا در گلدیکا چطور محاسبه می‌شود؟"
                icon={<SvgThird />}
              />
            </MultiActionAreaCard>

            <MultiActionAreaCard>
              <InfoCard
                title="آنلاین، سریع و بدون محدودیت"
                description="در گلدیکا امکان معامله آنلاین، سریع، شبانه روزی و بدون وقفه فراهم گردیده است."
                buttonText="سوالات متداول"
                icon={<SvgFourth />}
              />
            </MultiActionAreaCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoWorkGoldika;
