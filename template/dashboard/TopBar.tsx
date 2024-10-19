"use client";
import { MenuRounded, PersonRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import styles from "./dashboard.module.css";
import { SidebarContext } from "@/context/DashboardSideBarContext";
import { useAuth } from "@/shared/hooks/useAuth";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import formatPhoneNumber from "@/shared/utilities/formatPhoneNumber";

const DashboardTopBar = () => {
  const { user } = useAuth();
  const { toggleSidebar } = useContext(SidebarContext);

  const number = user
    ? convertToPersianDigits(formatPhoneNumber(user?.user_metadata?.number))
    : null;

  return (
    <div className={styles.panelTopBar}>
      <div className={styles.panelTopBarWrap}>
        <Button onClick={toggleSidebar} className={styles.topBarCloseMenuBtn}>
          <MenuRounded style={{ fontSize: "1.5rem" }} />
        </Button>
        <Button className={styles.topBarUserInfo}>
          <span className={styles.userId}>
            {number ?? "...اطلاعات تو راهه"}
          </span>
          <span>
            <PersonRounded className={styles.personIcon} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardTopBar;
