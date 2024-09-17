import GoldSVG from "./svg/GoldSVG";
import styles from "./aboutPage.module.css";

const Title = ({ title }: { title: string }) => (
  <h1 className={styles.aboutPageTitle}>{title}</h1>
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <b>{children}</b>
);

const GoldSVGWrapper = () => (
  <div className={styles.aboutPageContentSvg}>
    <GoldSVG />
  </div>
);

const Content = () => (
  <>
    <p>
      علاوه بر مصارف زینتی، طلا از دیرباز به عنوان یک دارایی امن و پشتوانه ای
      مقاوم در برابر تورم تلقی می‌شود، به‌طوری‌که همواره در سبد دارایی اقشار
      مختلف، بخشی به این فلز گرانبها اختصاص دارد. با وجود تحولات سریع در زندگی
      روزمره و فراگیر شدن بازارهای جدید آنلاین در سال‌های اخیر، همچنان خلأ یک
      بستر آنلاین، امن و عمومی برای خرید و فروش طلا به شدت احساس می‌شد. در این
      راستا{" "}
      <Highlight>
        تیمی از دانش آموختگان دانشگاه صنعتی شریف با بهره‌گیری از دانش تخصصی و
        سوابق موفق در حوزه فینتک
      </Highlight>{" "}
      به منظور برطرف کردن این نیاز کاربران، اقدام به ایجاد گلدیکا نمودند.
    </p>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ marginTop: 40 }}>
        <Highlight>
          گلدیکا بستری است برای خرید و فروش طلا برای همه اقشار با هر سطحی از
          دارایی و به قیمت منصفانه؛
        </Highlight>{" "}
        و در این راه تیم گلدیکا تمام تلاش خود را نموده تا دسترسی امن را برای
        عموم مردم فراهم سازد از دریافت مجوز از اتحادیه صنف فروشندگان و سازندگان
        طلا، جواهر، نقره و سکه تهران تا مجوز راه‌اندازی سامانه معاملات آنلاین
        طلای آب‌شده و مصنوعات طلا و جواهر از اتحادیه کشوری کسب و کارهای مجازی و
        گواهی نماد اعتماد الکترونیکی توسط مرکز توسعه تجارت الکترونیکی زیر مجموعه
        وزارت صنعت، معدن و تجارت. علاوه بر این، گلدیکا توسط{" "}
        <span>پارک علم و فناوری دانشگاه صنعتی شریف</span> به عنوان یک واحد فناور
        مورد پذیرش قرار گرفته است.
      </p>
      <GoldSVGWrapper />
    </div>
  </>
);

const AboutPage = () => {
  return (
    <section style={{ margin: "40px 0" }} className={styles.aboutPage}>
      <div className={`${styles.aboutPageMain} container`}>
        <div className={styles.aboutPageMainWrap}>
          <Title title="درباره‌ی گلدیکا" />
          <div className={styles.aboutPageContent}>
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
