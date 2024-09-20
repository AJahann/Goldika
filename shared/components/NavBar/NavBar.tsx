"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import styles from "./NavBar.module.css";
import formatPhoneNumber from "@/shared/utilities/formatPhoneNumber";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";

const AuthBtn = () => {
  const authContext = {
    isLogin: true,
    userInfo: {
      number: "09331914360",
    },
  };

  const userNumber = convertToPersianDigits(
    formatPhoneNumber(authContext.userInfo.number),
  );

  return (
    <>
      {authContext.isLogin ? (
        <Link href="/panel">
          <Button
            style={{
              color: "var(--primary-color)",
              borderColor: "var(--primary-color)",
              borderRadius: "10px",
              height: "auto",
            }}
            variant="outlined"
          >
            <span dir="ltr" style={{ marginLeft: 6 }}>
              {userNumber}
            </span>
            | ناحیه کاربری
          </Button>
        </Link>
      ) : (
        <Link href="/auth">
          <Button
            style={{
              color: "var(--primary-color)",
              borderColor: "var(--primary-color)",
              borderRadius: "10px",
              height: "27px",
            }}
            variant="outlined"
          >
            ورود | ثبت نام
          </Button>
        </Link>
      )}
    </>
  );
};

const NavBar = () => {
  return (
    <div className="container">
      <nav className={` ${styles.nav}`}>
        <div className={styles.navWrap}>
          <div>
            {/* <div className={styles.menu}>
            <Button
              onClick={() => setIsShow(true)}
              style={{ color: "white", paddingLeft: 0, paddingRight: 0 }}
            >
              <MenuIcon />
            </Button>
          </div> */}
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/favicon.ico"
                  alt="Goldika"
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <div className={styles.links}>
              <Link href="/blog">وبلاگ</Link>
              <Link href="/about">درباره ما</Link>
              <Link href="/faq">سوالات متداول</Link>
              <Link href="/contact">ارتباط با ما</Link>
            </div>
          </div>

          <div>
            <AuthBtn />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
