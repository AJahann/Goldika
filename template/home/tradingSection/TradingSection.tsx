import { Button } from "@mui/material";
import styles from "./TradingSection.module.css";
import TradingTranslateSection from "./TradingTranslateSection";
import NumberInput from "./NumberInput";

const buttonStyle = {
  color: "var(--primary-color-badge)",
  borderColor: "var(--primary-color-badge)",
  borderRadius: "10px",
  height: "23px",
  backgroundColor: "var(--primary-color-badge-bg)",
  fontSize: "0.7rem",
};

const TradingSection = () => {
  return (
    <section className="container">
      <div className={styles.tradingBoxWrap}>
        <div className={styles.tradingBoxRight}>
          <h1 className={styles.tradingBoxTxt}>
            <span className={styles.title}>گلدیکا</span>
            <span className={styles.verticalBar}>|</span>
            <span className={styles.text}>بازار امن طلا</span>
          </h1>

          <div className={styles.rowBadges}>
            <Button variant="outlined" disabled style={buttonStyle}>
              بدون نیاز به مراجعه حضوری
            </Button>
            <Button variant="outlined" disabled style={buttonStyle}>
              امکان تحویل فیزیکی
            </Button>
            <Button variant="outlined" disabled style={buttonStyle}>
              بازار ۲۴ ساعته
            </Button>
          </div>

          <h1 className={styles.tradingBoxTitle}>
            خرید و فروش آنلاین طلای آبشده (بدون اجرت)
          </h1>
          <h2 className={styles.trandingBoxSubTitle}>
            خرید طلای آبشده به صورت رسمی و تضمین‌شده و با هر میزان سرمایه
          </h2>
          <NumberInput />
        </div>

        <div className={styles.tradingBoxLeft}>
          <div className={styles.tradingBoxLeftWrapper}>
            <TradingTranslateSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
