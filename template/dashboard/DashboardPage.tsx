import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SellIcon from "@mui/icons-material/Sell";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import ChartSection from "@/shared/chart/ChartSection";
import styles from "./dashboard.module.css";

interface DashboardActionBoxProps {
  title: string;
  txt?: string;
  price: number;
  icon?: JSX.Element;
  bgColor?: string;
  btnName?: string;
  geram?: boolean;
  link?: string;
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
  return (
    <div className={styles.panelDashboard}>
      <div className={styles.panelWrap}>
        <h2 className={styles.panelTitle}>خانه</h2>
        <div className={styles.dashboardDirections}>
          <DashboardActionBox
            price={100000}
            link={"/panel/trade?trade_action=buy"}
            title={"خرید از گلدیکا:"}
            txt={"(هرگرم طلای ۱۸ عیار)"}
            btnName={"خرید"}
            icon={<CurrencyExchangeIcon style={{ fontSize: 20 }} />}
            bgColor={"#24b73d"}
          />
          <DashboardActionBox
            price={100000}
            link={"/panel/trade?trade_action=sell"}
            title={"فروش به گلدیکا:"}
            txt={"(هرگرم طلای ۱۸ عیار)"}
            btnName={"فروش"}
            icon={<SellIcon style={{ fontSize: 20 }} />}
            bgColor={"#da2b2b"}
          />
          <DashboardActionBox
            price={100000}
            link={"/panel/deposit"}
            title={"موجودی کیف پول:"}
            btnName={"افزایش موجودی"}
            icon={<AccountBalanceWalletOutlinedIcon style={{ fontSize: 20 }} />}
            bgColor={"#f1ab1f"}
          />
          <DashboardActionBox price={100000} title={"موجودی کیف طلا:"} geram />
        </div>
        <div className={styles.dashboardChart}>
          <ChartSection />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
