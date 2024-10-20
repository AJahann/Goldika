"use client";
import {
  AccountBalanceWalletOutlined,
  SellOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import LogoSVG from "../svg/LogoSVG";
import PanelChart from "../component/panelChart";
import styles from "./wallet.module.css";
import { useAuth } from "@/shared/hooks/useAuth";

const WalletPage = () => {
  const { user } = useAuth();

  const userCash = Intl.NumberFormat("fa").format(
    user?.user_metadata?.pocket.cash || 0,
  );
  const userGold = Intl.NumberFormat("fa").format(
    user?.user_metadata?.pocket.gold || 0,
  );
  return (
    <div className={styles.panelWallet}>
      <div className={styles.panelWrap}>
        <h2 className={styles.panelTitle}>کیف دارایی</h2>
        <div className={styles.panelWalletContainer}>
          <div className={styles.panelWalletTop}>
            <p>{userCash} تومان</p>

            <PanelChart hasWallet={+user?.user_metadata?.pocket.cash > 0} />
          </div>
          <div className={styles.panelWalletActions}>
            <Button fullWidth className={styles.panelWalletAction}>
              <Link href="/deposit">
                <AccountBalanceWalletOutlined style={{ fontSize: 32 }} />
                <span>افزایش موجودی</span>
              </Link>
            </Button>
            <Button fullWidth className={styles.panelWalletAction}>
              <Link href="/report">
                <StickyNote2Outlined style={{ fontSize: 32 }} />
                <span>گزارش</span>
              </Link>
            </Button>
            <Button fullWidth className={styles.panelWalletAction}>
              <Link href="/withdraw">
                <SellOutlined style={{ fontSize: 32 }} />
                <span>برداشت پول</span>
              </Link>
            </Button>
          </div>
          <div className={styles.panelWalletsList}>
            <p>کیف‌ها</p>
            <div className={styles.panelWalletsWallet}>
              <div className={styles.logo}>
                <LogoSVG />
              </div>
              <div>
                <p>کیف طلایی</p>
                <span>{userGold} گرم</span>
              </div>
            </div>
            <div className={styles.panelWalletsWallet}>
              <div className={styles.logo}>
                <LogoSVG />
              </div>
              <div>
                <p>کیف پول</p>
                <span>{userCash} تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
