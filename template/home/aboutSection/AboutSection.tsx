"use client";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./about.module.css";
import AboutContent from "./AboutContent";

const AboutSection = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.aboutWrap}>
        <h2 className={styles.aboutTitle}>خرید طلای آب شده از گلدیکا</h2>
        <AboutContent isShow={isShow} />
        <div className={styles.aboutBtn}>
          <button onClick={() => setIsShow(!isShow)}>
            {isShow ? (
              <>
                بستن
                <ArrowForwardIosIcon style={{ fontSize: 16 }} />
              </>
            ) : (
              <>
                ادامه‌ی مطلب
                <ArrowBackIosNewIcon style={{ fontSize: 16 }} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
