"use client";
import { Alert, Box, Button, CircularProgress, Slider } from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InputBase from "@/shared/components/UI/input/InputBase";
import styles from "./withdraw.module.css";
import MyCards from "../component/MyCards";
import NoCard from "../component/NoCard";
import { useAuth } from "@/shared/hooks/useAuth";
import { useState } from "react";
import axios from "axios";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import { BigNumber } from "bignumber.js";
import toast from "react-hot-toast";

const WithDrawPage = () => {
  const { user, mutate } = useAuth();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const userCash = new BigNumber(user?.user_metadata?.pocket?.cash || 0);
  const MIN_WITHDRAW = new BigNumber(1000); // Minimum allowed withdrawal
  const amountBN = new BigNumber(amount);

  const decreaseDepositHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (user?.user_metadata?.cards?.length === 0) {
      toast.error("لطفا کارت خود را اضافه کنید.");
      return;
    }

    // Validate amount is within the correct range
    if (amountBN.isLessThan(MIN_WITHDRAW) || !amountBN.c) {
      toast.error("مبلغ برداشت نباید کمتر از ۱۰۰۰ تومان باشد.");
      return;
    }

    if (amountBN.isGreaterThan(userCash)) {
      toast.error("مبلغ برداشت نباید بیشتر از موجودی شما باشد.");
      return;
    }

    setIsLoading(true);
    try {
      const existingPocket = user?.user_metadata?.pocket || {
        cash: 0,
        gold: 0,
      };

      const updatedPocket = {
        ...existingPocket,
        cash: new BigNumber(existingPocket.cash).minus(amountBN).toFixed(),
      };

      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          pocket: updatedPocket,
        },
      });

      if (response.data.success) {
        await mutate();
        setAmount("");
        toast.success("مبلغ با موفقیت برداشت شد.");
      } else {
        toast.error("خطایی در برداشت رخ داده است.");
      }
    } catch (error) {
      toast.error("درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.panelWithdraw}>
      <div className={styles.panelWrap}>
        <div className={styles.panelTitle}>برداشت</div>
        <div className={styles.panelWithdrawContainer}>
          <div
            style={{
              color: "#9fa0a8",
              display: "flex",
              alignItems: "center",
              margin: "12px 0 24px 0",
              paddingRight: 4,
            }}
          >
            <CreditCardOutlinedIcon style={{ fontSize: 24, marginLeft: 8 }} />
            موجودی: {new Intl.NumberFormat("fa").format(
              userCash.toNumber(),
            )}{" "}
            تومان
          </div>
          <InputBase
            label={"مبلغ برداشت"}
            value={convertToPersianDigits(amount)}
            onChange={(e) => setAmount(convertToEnglishDigits(e.target.value))}
            name={"تومان"}
            style={{
              background: "#2a2c34",
              width: "100%",
              marginTop: 12,
              borderRadius: 16,
            }}
            max={16}
          />
          <span></span>
          <Box className={styles.panelWithdrawSlider}>
            <Slider
              value={+amount || 0}
              step={userCash.isZero() ? 1 : userCash.div(100).toNumber()}
              marks
              min={0}
              max={userCash.toNumber()}
              style={{ color: "rgb(189, 189, 189)" }}
            />
          </Box>
          <Box>
            <Alert severity="error">
              فرآیند برداشت نهایتاً یک روز کاری زمان خواهد.
            </Alert>
          </Box>
          <div className={styles.panelMyCards}>
            {user?.user_metadata?.cards ? <MyCards /> : <NoCard />}
          </div>
        </div>
        <div className={styles.panelPayBtn}>
          <Button
            variant="contained"
            style={{
              marginTop: 24,
              width: "100%",
              maxWidth: 320,
              padding: "12px 0",
              borderRadius: 8,
              fontWeight: "bold",
              boxShadow: "none",
            }}
            className={
              amountBN.isLessThan(MIN_WITHDRAW) || isLoading
                ? styles.panelDepositPayBtnDisabled
                : ""
            }
            disabled={amountBN.isLessThan(MIN_WITHDRAW) || isLoading}
            onClick={decreaseDepositHandler}
          >
            {isLoading ? <CircularProgress size={24} /> : "برداشت"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WithDrawPage;
