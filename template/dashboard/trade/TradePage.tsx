"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Slider,
} from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InputBase from "@/shared/components/UI/input/InputBase";
import styles from "./trade.module.css";
import { useAuth } from "@/shared/hooks/useAuth";
import goldPrices from "@/data/goldPrices.json";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import axios from "axios";
import { BigNumber } from "bignumber.js";
import toast from "react-hot-toast";

const convertToEnglishDigitsGold = (persianNumber: string) => {
  const cleanedValue = persianNumber.replace(/[^۰-۹0-9.]/g, "");
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return cleanedValue.replace(/[۰-۹]/g, (digit) => {
    return englishDigits[persianDigits.indexOf(digit)] || digit;
  });
};

const TradePage = () => {
  const { user } = useAuth();
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [amountCash, setAmountCash] = useState("");
  const [amountGold, setAmountGold] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userCash = new BigNumber(user?.user_metadata?.pocket?.cash || 0);
  const userGold = new BigNumber(user?.user_metadata?.pocket?.gold || 0);

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
      tradeType === "buy" ? goldPrices.buy : goldPrices.sell,
    );
    const newGold = new BigNumber(cash).div(pricePerGram).toFixed(3);
    setAmountGold(newGold);
  };

  const updateCashFromGold = (gold: string) => {
    const pricePerGram = new BigNumber(
      tradeType === "buy" ? goldPrices.buy : goldPrices.sell,
    );
    const newCash = new BigNumber(gold).times(pricePerGram).toFixed(0);
    setAmountCash(newCash);
  };

  const handleTradeBuy = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const amountCashBN = new BigNumber(amountCash);

    if (
      amountCashBN.isGreaterThan(userCash) ||
      amountCashBN.isLessThan(1000) ||
      !amountCashBN.c
    ) {
      toast.error("مقدار وارد شده معتبر نیست.");
      return;
    }

    setIsLoading(true);
    try {
      const updatedPocket = {
        cash: userCash.minus(amountCashBN).toFixed(),
        gold: userGold.plus(amountGold).toFixed(),
      };

      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          pocket: updatedPocket,
        },
      });

      if (response.data.success) {
        toast.success("خرید با موفقیت انجام شد!");
        setAmountCash("");
        setAmountGold("");
      }
    } catch (error) {
      toast.error("خطا در خرید. لطفاً دوباره امتحان کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTradeSell = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const amountGoldBN = new BigNumber(amountGold);
    if (
      amountGoldBN.isGreaterThan(userGold) ||
      amountGoldBN.isLessThan(0.001) ||
      !amountGoldBN.c
    ) {
      toast.error("مقدار وارد شده معتبر نیست.");
      return;
    }

    setIsLoading(true);
    try {
      const updatedPocket = {
        cash: userCash.plus(amountCash).toFixed(),
        gold: userGold.minus(amountGoldBN).toFixed(),
      };

      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          pocket: updatedPocket,
        },
      });

      if (response.data.success) {
        toast.success("فروش با موفقیت انجام شد!");
        setAmountCash("");
        setAmountGold("");
      }
    } catch (error) {
      toast.error("خطا در فروش. لطفاً دوباره امتحان کنید.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setAmountCash("");
    setAmountGold("");
  }, [tradeType]);

  return (
    <div className={styles.panelWrap}>
      <div className={styles.panelTitle}>معامله‌ی طلا</div>
      <div className={styles.panelTradeContainer}>
        <div className={styles.panelTradeTop}>
          <ButtonGroup className={styles.panelTradeTopBtns} variant="contained">
            <Button
              onClick={() => setTradeType("buy")}
              className={tradeType === "buy" ? styles.selected : ""}
              style={{ borderRadius: "0 8px 8px 0" }}
            >
              خرید
            </Button>
            <Button
              onClick={() => setTradeType("sell")}
              className={tradeType === "sell" ? styles.selected : ""}
              style={{ borderRadius: "8px 0 0 8px" }}
            >
              فروش
            </Button>
          </ButtonGroup>

          <div className={styles.panelTradeTopTxt}>
            <p>
              قیمت {tradeType === "buy" ? "خرید" : "فروش"} <br />
              <small>(هرگرم طلای ۱۸ عیار)</small>
            </p>
            <p>
              <b>
                {tradeType === "buy"
                  ? new Intl.NumberFormat("fa").format(+goldPrices.buy)
                  : new Intl.NumberFormat("fa").format(+goldPrices.sell)}{" "}
                تومان
              </b>
            </p>
          </div>

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

          <div style={{ marginTop: 48, width: "100%" }}>
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

        <Box sx={{ padding: 2 }}>
          <Slider
            value={+amountCash || 0}
            step={+userCash === 0 ? 1 : +userCash / 100}
            marks
            min={0}
            max={+userCash}
            style={{ color: "rgb(189, 189, 189)" }}
          />
        </Box>

        <div
          style={{
            color: "#9fa0a8",
            display: "flex",
            alignItems: "center",
            paddingRight: 4,
          }}
        >
          <CreditCardOutlinedIcon style={{ fontSize: 24, marginLeft: 8 }} />
          {tradeType === "buy"
            ? `موجودی کیف پول: ${new Intl.NumberFormat("fa").format(+userCash)} تومان`
            : `موجودی کیف طلا: ${new Intl.NumberFormat("fa").format(+userGold)} گرم`}
        </div>

        <div className={styles.panelPayBtn}>
          <Button
            fullWidth
            onClick={tradeType === "buy" ? handleTradeBuy : handleTradeSell}
            sx={{
              marginTop: 3,
              maxWidth: 360,
              padding: "12px 0",
              borderRadius: 1,
              fontWeight: "bold",
              boxShadow: "none",
              backgroundColor: tradeType === "buy" ? "green" : "red",
            }}
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} />
            ) : (
              `${tradeType === "buy" ? "خرید" : "فروش"}`
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
