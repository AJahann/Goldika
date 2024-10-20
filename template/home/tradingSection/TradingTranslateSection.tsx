"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, Box, Button, TabsProps, TabProps } from "@mui/material";
import LogoSvg from "./LogoSvg";
import styles from "./TradingSection.module.css"; // ایمپورت استایل‌های مدولار
import InputBase from "@/shared/components/UI/input/InputBase";
import goldPrices from "@/data/goldPrices.json";

const StyledTabs = styled((props: TabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#f1ab1f",
  },
});
const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#fff",
    width: "50%",
    padding: "12px 16px",
    "&.Mui-selected": {
      color: "#f1ab1f",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#f1ab1f",
    },
  }),
);

const TradingTranslateSection = () => {
  const [tab, setTab] = useState(0);
  const [tradeAction, setTradeAction] = useState("buy");
  const [sumTotal, setSumTotal] = useState("");
  const [sumTotalGold, setSumTotalGold] = useState("");
  const [wichFocus, setWichFocus] = useState("price");

  return (
    <>
      <span className={styles.tradingBoxLeftHeader}>
        <div className={styles.item}>
          <span>قیمت خرید</span>
          <span className={`${styles.itemPrice} ${styles.itemPriceBuy}`}>
            <span>{Intl.NumberFormat("fa").format(+goldPrices.buy)}</span>{" "}
            <span>تومان</span>
          </span>
        </div>
        <div className={styles.itemCenter}>
          <div style={{ filter: "drop-shadow(0 0 0.7em)", opacity: 1 }}>
            <LogoSvg />
          </div>
        </div>
        <div className={styles.item}>
          <span>قیمت فروش</span>
          <span className={`${styles.itemPrice} ${styles.itemPriceSell}`}>
            <span>{Intl.NumberFormat("fa").format(+goldPrices.sell)}</span>{" "}
            <span>تومان</span>
          </span>
        </div>
      </span>

      <div className={styles.tradingBoxLeftMain}>
        <Box>
          <StyledTabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
            <StyledTab label="خرید" />
            <StyledTab label="فروش" />
          </StyledTabs>
        </Box>

        <div className={styles.tradingBoxLeftInputs}>
          <InputBase
            value={sumTotal}
            onChange={(e) => setSumTotal(e.target.value)}
            label={"ارزش کل"}
            name={"تومان"}
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: "#373943",
              borderRadius: 16,
            }}
          />{" "}
          <InputBase
            value={sumTotal}
            onChange={(e) => setSumTotal(e.target.value)}
            name={"گرم"}
            label={"مقدار طلا"}
            style={{
              width: "100%",
              marginTop: 10,
              backgroundColor: "#373943",
              borderRadius: 16,
            }}
          />
        </div>
      </div>

      <div className={styles.tradingBoxLeftBtn}>
        <Button
          style={{
            border: "3px solid #f1ab1fa5",
            borderRadius: 8,
            color: "var(--primary-color)",
          }}
          size="large"
          fullWidth
          variant="outlined"
        >
          {tab ? "فروش" : "خرید"}
        </Button>
      </div>
    </>
  );
};

export default TradingTranslateSection;
