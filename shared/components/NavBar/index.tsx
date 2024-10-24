"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@mui/icons-material";
import { useAuth } from "@/shared/hooks/useAuth";
import styles from "./NavBar.module.css";
import formatPhoneNumber from "@/shared/utilities/formatPhoneNumber";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { useEffect, useState } from "react";

const buttonStyles = {
  color: "var(--primary-color)",
  borderColor: "var(--primary-color)",
  borderRadius: "10px",
  height: "37px",
  padding: "12px",
};

const AuthButton = ({ isLoading, number, isLoggedIn }: AuthBtnProps) => {
  const buttonContent = isLoggedIn ? (
    <>
      <span dir="ltr" style={{ marginLeft: 6 }}>
        {number}
      </span>
      | ناحیه کاربری
    </>
  ) : (
    "ورود | ثبت نام"
  );

  return (
    <Link href={isLoggedIn ? "/dashboard" : "/login"}>
      <Button style={buttonStyles} variant="outlined" disabled={isLoading}>
        {isLoading ? "اطلاعات تو راهه..." : buttonContent}
      </Button>
    </Link>
  );
};

const MenuVirtualized = ({
  isActive,
  number,
  isLoading,
  isLoggedIn,
  closeMenu,
}: MenuVirtualizedProps) => (
  <div
    role="button"
    onClick={closeMenu}
    className={`${styles.menuVirtualized} ${isActive ? styles.active : ""}`}
  >
    <div className={styles.menuVirtualizedWrap}>
      <AuthButton
        number={number}
        isLoading={isLoading}
        isLoggedIn={isLoggedIn}
      />
      <Link href="/blog">وبلاگ</Link>
      <Link href="/about">درباره ما</Link>
      <Link href="/faq">سوالات متداول</Link>
      <Link href="/contact">ارتباط با ما</Link>
    </div>
  </div>
);

const NavBar = () => {
  const { user, isLoggedIn, isLoading } = useAuth();
  const [menuActive, setMenuActive] = useState(false);

  const number = user
    ? convertToPersianDigits(formatPhoneNumber(user?.user_metadata?.number))
    : null;

  const menuCloseHandler = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuActive]);

  return (
    <div style={{ margin: "0 auto", maxWidth: "70rem" }}>
      <nav className={styles.nav}>
        <MenuVirtualized
          number={number}
          isLoading={isLoading}
          isLoggedIn={isLoggedIn}
          isActive={menuActive}
          closeMenu={menuCloseHandler}
        />
        <div className={styles.navWrap}>
          <div>
            <div className={styles.menu}>
              <Button
                onClick={() => setMenuActive(true)}
                style={{ color: "white", padding: 0, marginTop: 6 }}
              >
                <Menu style={{ padding: 0 }} />
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
            <AuthButton
              number={number}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

interface AuthBtnProps {
  isLoading: boolean;
  number: string | null;
  isLoggedIn: boolean;
}

interface MenuVirtualizedProps {
  isActive: boolean;
  closeMenu: () => void;
  number: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
}
