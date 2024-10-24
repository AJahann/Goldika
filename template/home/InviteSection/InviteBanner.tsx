import { Button } from "@mui/material";
import styles from "./inviteBannerStyle.module.css";
import Link from "next/link";

interface TxtBannerProps {
  isLogin: boolean;
}

const InviteBanner = ({ isLogin }: TxtBannerProps) => {
  return (
    <div className={styles.txtBanner}>
      <div className={styles.secTxtBannerWrap}>
        <div className={styles.txtBannerWrap}>
          <h1>همین حالا سرمایه‌گذاری را شروع کنید</h1>
          {isLogin ? (
            <Link href="/panel">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  boxShadow: "none",
                  color: "#000000e1",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                ورود به گلدیکا
              </Button>
            </Link>
          ) : (
            <Link href="/auth">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  boxShadow: "none",
                  color: "#000000e1",
                  borderRadius: "8px",
                  fontWeight: "bold",
                }}
              >
                ثبت نام در گلدیکا
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default InviteBanner;
