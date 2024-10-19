"use client";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SellIcon from "@mui/icons-material/Sell";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import ChartSection from "@/shared/chart/ChartSection";
import styles from "./dashboard.module.css";
import goldPrices from "@/data/goldPrices.json";
import { useAuth } from "@/shared/hooks/useAuth";

interface DashboardActionBoxProps {
  title: string;
  txt?: string;
  price: number | string;
  icon?: JSX.Element;
  bgColor?: string;
  btnName?: string;
  geram?: boolean;
  link?: string;
}

function persianDitisFormat(number: string) {
  return Intl.NumberFormat("fa").format(+number);
}

function DashboardActionBox({
  title,
  txt,
  price,
  icon,
  bgColor,
  btnName,
  geram,
  link,
}: DashboardActionBoxProps) {
  return (
    <div className={styles.dashboardDirectionBox}>
      <p className={styles.dashboardBoxTitle}>{title}</p>
      {txt && <span className={styles.dashboardBoxSpan}>{txt}</span>}
      <p className={styles.dashboardBoxPrice}>
        {price} {geram ? "گرم" : "تومان"}
      </p>
      {bgColor && link && (
        <Link href={link}>
          <Button
            fullWidth
            style={{
              backgroundColor: bgColor,
              color: "black",
              fontSize: 18,
              borderRadius: 8,
              gap: 10,
            }}
          >
            {icon}
            {btnName}
          </Button>
        </Link>
      )}
    </div>
  );
}

const DashboardPage = () => {
  const { user } = useAuth();

  const goldBuy = persianDitisFormat(goldPrices.buy);
  const goldSell = persianDitisFormat(goldPrices.sell);

  const userCash = persianDitisFormat(user?.user_metadata?.cash || 0);
  const userGold = persianDitisFormat(user?.user_metadata?.gold || 0);

  return (
    <div>
      <div className={styles.panelWrap}>
        <h2 className={styles.panelTitle}>خانه</h2>
        <div className={styles.dashboardDirections}>
          <DashboardActionBox
            price={goldBuy}
            link={"/trade?action=buy"}
            title={"خرید از گلدیکا:"}
            txt={"(هرگرم طلای ۱۸ عیار)"}
            btnName={"خرید"}
            icon={<CurrencyExchangeIcon style={{ fontSize: 20 }} />}
            bgColor={"#24b73d"}
          />
          <DashboardActionBox
            price={goldSell}
            link={"/trade?action=sell"}
            title={"فروش به گلدیکا:"}
            txt={"(هرگرم طلای ۱۸ عیار)"}
            btnName={"فروش"}
            icon={<SellIcon style={{ fontSize: 20 }} />}
            bgColor={"#da2b2b"}
          />
          <DashboardActionBox
            price={userCash}
            link={"/deposit"}
            title={"موجودی کیف پول:"}
            btnName={"افزایش موجودی"}
            icon={<AccountBalanceWalletOutlinedIcon style={{ fontSize: 20 }} />}
            bgColor={"#f1ab1f"}
          />
          <DashboardActionBox
            price={userGold}
            title={"موجودی کیف طلا:"}
            geram
          />
        </div>
        <div className={styles.dashboardChart}>
          <ChartSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
