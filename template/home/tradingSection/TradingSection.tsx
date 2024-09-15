import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./TradingSection.module.css"; // ایمپورت استایل‌های مدولار
import TradingTranslateSection from "./TradingTranslateSection";
import Link from "next/link";
import InputBase from "@/shared/components/UI/input/InputBase";

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
          {false ? (
            <div>
              <div style={{ height: 62 }} className={styles.numberInput}>
                <Link href={"/panel"}>
                  <Button
                    id="inputNumber-btn"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      zIndex: 10,
                      color: "#000",
                      borderRadius: 14,
                      width: "100%",
                      left: "auto",
                      right: 0,
                      boxShadow: "none",
                    }}
                    variant="contained"
                  >
                    شروع معامله
                    <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div>
                <div className={styles.numberInput}>
                  <InputBase label="شماره تلفن همراه خود را وارد کنید" />
                  <Link href={`/auth?_phone`}>
                    <Button
                      id="inputNumber-btn"
                      style={{
                        position: "absolute",
                        top: 43,
                        left: 12,
                        backgroundColor: "var(--primary-color)",
                        zIndex: 10,
                        color: "#000",
                        boxShadow: "30px 0px 10px 0px rgb(42 44 52)",
                      }}
                      variant="contained"
                    >
                      شروع
                      <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
                    </Button>
                  </Link>
                </div>
              </div>
              <span className={styles.inputNumberTxt}>
                در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
              </span>
            </>
          )}
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
