"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./NavBar.module.css";

const AuthBtn = () => {
  // const authContext = useContext(AuthContext);
  const authContext = {
    isLogin: true,
    userInfo: {
      number: 123456789,
    },
  };

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
              {/* {EntoFa(separateNumbers(authContext.userInfo.number))} */}
              {authContext.userInfo.number}
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
  const [isShow, setIsShow] = useState(false);

  return (
    <nav className={`container ${styles.nav}`}>
      {/* <Menu onClick={() => setIsShow(false)} isActive={isShow} /> */}
      <div className={styles.navWrap}>
        <div>
          <div className={styles.menu}>
            <Button
              onClick={() => setIsShow(true)}
              style={{ color: "white", paddingLeft: 0, paddingRight: 0 }}
            >
              {/* <MenuIcon /> */}
            </Button>
          </div>
          <div className={styles.logo}>
            <Link href="/">
              <Image src="/favicon.ico" alt="Goldika" width={40} height={40} />
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
  );
};

export default NavBar;
