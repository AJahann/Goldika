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

const WithDrawPage = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userCash = user?.user_metadata?.pocket.cash || 0;

  const decreaseDepositHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      amount.trim().length <= 16 &&
      +amount <= userCash &&
      user?.user_metadata
    ) {
      setIsLoading(true);
      try {
        const existingPocket = user.user_metadata?.pocket || {
          cash: 0,
          gold: 0,
        };

        const updatedPocket = {
          ...existingPocket,
          cash: Number(existingPocket.cash) - parseInt(amount),
        };

        const response = await axios.post("/api/auth/me", {
          userId: user.user_id,
          user_metadata: {
            ...user.user_metadata,
            pocket: updatedPocket,
          },
        });

        if (response.data.success) {
          setAmount("");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
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
            موجودی: {new Intl.NumberFormat("fa").format(userCash)} تومان
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
              step={userCash === 0 ? 1 : userCash / 100}
              marks
              min={0}
              max={userCash}
              style={{ color: "rgb(189, 189, 189)" }}
            />
          </Box>
          <Box>
            <Alert severity="error">
              فرآیند برداشت نهایتاً یک روز کاری زمان خواهد.
            </Alert>
          </Box>
          <div className={styles.panelMyCards}>
            {true ? <MyCards /> : <NoCard />}
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
              +amount < 1000 || isLoading
                ? styles.panelDepositPayBtnDisabled
                : ""
            }
            disabled={+amount < 1000 || isLoading}
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
