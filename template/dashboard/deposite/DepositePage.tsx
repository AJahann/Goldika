"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import { Add } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import styles from "./deposite.module.css";
import MyCards from "../component/MyCards";
import NoCard from "../component/NoCard";
import { useState } from "react";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { useAuth } from "@/shared/hooks/useAuth";
import axios from "axios";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import { BigNumber } from "bignumber.js";
import toast from "react-hot-toast";

interface DepositPageProps {
  // Define any props here if needed in the future
}

const DepositPage: React.FC<DepositPageProps> = () => {
  const { user, mutate } = useAuth();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const MIN_DEPOSIT = new BigNumber(1000);
  const amountBN = new BigNumber(amount);

  const increaseDepositHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!user?.user_metadata?.cards) {
      toast.error("لطفا کارت خود را اضافه کنید.");
      return;
    }

    if (amountBN.isLessThan(MIN_DEPOSIT) || !amountBN.c) {
      toast.error("مبلغ واریزی نباید کمتر از ۱۰۰۰ تومان باشد.");
      return;
    }

    if (amountBN.isGreaterThan(1e16)) {
      toast.error("مبلغ واریزی بیش از حد مجاز است.");
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
        cash: new BigNumber(existingPocket.cash).plus(amountBN).toFixed(),
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
        toast.success("مبلغ با موفقیت واریز شد.");
      } else {
        toast.error("خطایی در واریز رخ داده است.");
      }
    } catch (error) {
      toast.error("درخواست با خطا مواجه شد. لطفاً دوباره تلاش کنید.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.panelDeposit}>
      <div className={styles.panelWrap}>
        <div className={styles.panelTitle}>واریز</div>
        <div className={styles.panelDepositContainer}>
          <InputBase
            value={convertToPersianDigits(amount)}
            onChange={(e) => setAmount(convertToEnglishDigits(e.target.value))}
            label={"مبلغ واریز"}
            name={"تومان"}
            style={{
              background: "#2a2c34",
              width: "100%",
              marginTop: 12,
              borderRadius: 16,
            }}
            max={9}
          />
          <div className={styles.panelDepositStock}>
            <div className={styles.panelDepositStock_inner}>
              {["500000", "1000000"].map((presetAmount) => (
                <Button
                  key={presetAmount}
                  fullWidth
                  onClick={() => setAmount(presetAmount)}
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(+presetAmount)} تومان
                </Button>
              ))}
            </div>
            <div
              style={{ marginTop: 14 }}
              className={styles.panelDepositStock_inner}
            >
              {["5000000", "10000000"].map((presetAmount) => (
                <Button
                  key={presetAmount}
                  onClick={() => setAmount(presetAmount)}
                  fullWidth
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(+presetAmount)} تومان
                </Button>
              ))}
            </div>
          </div>

          <div className="panelDepositMyCards">
            {user?.user_metadata?.cards ? <MyCards /> : <NoCard />}
          </div>
        </div>

        <div className={styles.panelDepositPayBtn}>
          <Button
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
              amountBN.isLessThan(MIN_DEPOSIT) || isLoading
                ? styles.panelDepositPayBtnDisabled
                : ""
            }
            variant="contained"
            disabled={amountBN.isLessThan(MIN_DEPOSIT) || isLoading}
            onClick={increaseDepositHandler}
          >
            {isLoading ? <CircularProgress size={24} /> : "پرداخت"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
