"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import styles from "./NavBar.module.css";
import formatPhoneNumber from "@/shared/utilities/formatPhoneNumber";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { Menu } from "@mui/icons-material";

const AuthBtn = () => {
  const authContext = {
    isLogin: false,
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
        <Link href="/dashboard">
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

const MenuVirtualized = ({ isActive }: { isActive: boolean }) => {
  return (
    <div
      className={`${styles.menuVirtualized} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.menuVirtualizedWrap}>
        <AuthBtn />
        <Link href="/blog">وبلاگ</Link>
        <Link href="/about">درباره ما</Link>
        <Link href="/faq">سوالات متداول</Link>
        <Link href="/contact">ارتباط با ما</Link>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div style={{ margin: "0 auto", maxWidth: "70rem" }}>
      <nav className={`${styles.nav}`}>
        <MenuVirtualized isActive={false} />
        <div className={styles.navWrap}>
          <div>
            <div className={styles.menu}>
              <Button
                style={{ color: "white", paddingLeft: 0, paddingRight: 0 }}
              >
                <Menu />
              </Button>
            </div>
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
