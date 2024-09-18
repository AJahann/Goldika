import { MenuRounded, PersonRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import styles from "./dashboard.module.css";

const DashboardTopBar = () => {
  return (
    <div className={styles.panelTopBar}>
      <div className={styles.panelTopBarWrap}>
        <Button className={styles.topBarCloseMenuBtn}>
          <MenuRounded style={{ fontSize: "1.5rem" }} />
        </Button>
        <Button className={styles.topBarUserInfo}>
          <span className={styles.userId}>{1234567}</span>
          <span>
            <PersonRounded className={styles.personIcon} />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardTopBar;
