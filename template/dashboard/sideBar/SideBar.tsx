"use client";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import styles from "./sideBar.module.css";
import Link from "next/link";
import LogoSVG from "../svg/SideBarLogoSVG";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/DashboardSideBarContext";
import toast from "react-hot-toast";

interface SideBarItemProps {
  name: string;
  icon: React.ReactNode;
  to: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ name, icon, to }) => {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <div className={styles.panelSideBarItem}>
      <Link href={to} className={isActive ? styles.active : ""}>
        <span className={styles.sideBarItemIcon}>{icon}</span>
        <span className={styles.sideBarItemName}>{name}</span>
      </Link>
    </div>
  );
};

const SideBar: React.FC = () => {
  const { isSidebarOpen } = useSidebar();

  const signOutHandler = () => {
    localStorage.removeItem("auth_token");

    window.location.reload();

    toast.success("خروج با موفقیت انجام شد.");
  };

  return (
    <div className={isSidebarOpen ? "sideBar" : "sideBar hide"}>
      <div className={styles.panelSideBar}>
        <Link href="/">
          <div className={styles.panelSideBarLogo}>
            <LogoSVG />
            <p>خرید امن طلا</p>
          </div>
        </Link>
        <div className={styles.panelSideBarMenu}>
          <div className={styles.panelSideBarMenuWrap}>
            <SideBarItem
              to="/dashboard"
              name="خانه"
              icon={<HomeOutlinedIcon />}
            />
            <SideBarItem
              to="/wallet"
              name="کیف و دارایی"
              icon={<PriceChangeOutlinedIcon />}
            />
            <SideBarItem
              to="/deposit"
              name="واریز پول"
              icon={<AttachMoneyOutlinedIcon />}
            />
            <SideBarItem
              to="/withdraw"
              name="برداشت پول"
              icon={<MoneyOffCsredOutlinedIcon />}
            />
            <SideBarItem
              to="/trade"
              name="معامله طلا"
              icon={<StoreOutlinedIcon />}
            />
            <SideBarItem
              to="/report"
              name="گزارش"
              icon={<SummarizeOutlinedIcon />}
            />
            <SideBarItem
              to="/order-pickup"
              name="دریافت طلا"
              icon={<AddShoppingCartOutlinedIcon />}
            />
          </div>
        </div>
        <div
          role="button"
          onClick={signOutHandler}
          className={styles.panelSideBarLeaveBtn}
        >
          <SideBarItem to="/" name="خروج" icon={<LogoutOutlinedIcon />} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
