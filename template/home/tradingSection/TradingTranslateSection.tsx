"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, Box, Button, TabsProps, TabProps } from "@mui/material";
import LogoSvg from "./LogoSvg";
import styles from "./TradingSection.module.css"; // ایمپورت استایل‌های مدولار
import InputBase from "@/shared/components/UI/input/InputBase";
import goldPrices from "@/data/goldPrices.json";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import BigNumber from "bignumber.js";
import Link from "next/link";
import { useAuth } from "@/shared/hooks/useAuth";

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

const convertToEnglishDigitsGold = (persianNumber: string) => {
  const cleanedValue = persianNumber.replace(/[^۰-۹0-9.]/g, "");
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return cleanedValue.replace(/[۰-۹]/g, (digit) => {
    return englishDigits[persianDigits.indexOf(digit)] || digit;
  });
};

const TradingTranslateSection = () => {
  const { isLoggedIn } = useAuth();
  const [tab, setTab] = useState(0);
  const [amountCash, setAmountCash] = useState("");
  const [amountGold, setAmountGold] = useState("");

  const handleCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCash = convertToEnglishDigits(e.target.value);
    setAmountCash(newCash);
    updateGoldFromCash(newCash);
  };

  const handleGoldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGold = convertToEnglishDigitsGold(e.target.value);
    setAmountGold(newGold);
    updateCashFromGold(newGold);
  };

  const updateGoldFromCash = (cash: string) => {
    const pricePerGram = new BigNumber(
      tab === 0 ? goldPrices.buy : goldPrices.sell,
    );
    const newGold = new BigNumber(cash).div(pricePerGram).toFixed(3);
    setAmountGold(newGold);
  };

  const updateCashFromGold = (gold: string) => {
    const pricePerGram = new BigNumber(
      tab === 0 ? goldPrices.buy : goldPrices.sell,
    );
    const newCash = new BigNumber(gold).times(pricePerGram).toFixed(0);
    setAmountCash(newCash);
  };

  useEffect(() => {
    setAmountCash("");
    setAmountGold("");
  }, [tab]);

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
            label={"ارزش کل"}
            value={convertToPersianDigits(amountCash)}
            onChange={handleCashChange}
            name={"تومان"}
            style={{
              marginTop: 12,
              width: "100%",
              background: "rgb(55, 57, 67)",
              borderRadius: 16,
            }}
            max={10}
          />
          <InputBase
            label={"مقدار طلا"}
            value={convertToPersianDigits(amountGold)}
            onChange={handleGoldChange}
            name="گرم"
            style={{
              marginTop: 12,
              width: "100%",
              background: "rgb(55, 57, 67)",
              borderRadius: 16,
            }}
            max={6}
          />
        </div>
      </div>

      <div className={styles.tradingBoxLeftBtn}>
        <Link href={isLoggedIn ? "/trade" : "/login"}>
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
        </Link>
      </div>
    </>
  );
};

export default TradingTranslateSection;
