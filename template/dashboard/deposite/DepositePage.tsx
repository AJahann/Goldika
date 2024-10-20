"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import { Add, Circle } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import styles from "./deposite.module.css";
import MyCards from "../component/MyCards";
import NoCard from "../component/NoCard";
import { useState } from "react";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { useAuth } from "@/shared/hooks/useAuth";
import axios from "axios";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";

interface DepositPageProps {
  // Define any props here if needed in the future
}

const DepositPage: React.FC<DepositPageProps> = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const increaseDepositHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (amount.trim().length <= 16 && user?.user_metadata) {
      setIsLoading(true);
      try {
        const existingPocket = user.user_metadata?.pocket || {
          cash: 0,
          gold: 0,
        };

        const updatedPocket = {
          ...existingPocket,
          cash: Number(existingPocket.cash) + parseInt(amount),
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
              {["500000", "1000000"].map((amount) => (
                <Button
                  key={amount}
                  fullWidth
                  onClick={() => setAmount(amount)}
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(+amount)} تومان
                </Button>
              ))}
            </div>
            <div
              style={{ marginTop: 14 }}
              className={styles.panelDepositStock_inner}
            >
              {["5000000", "10000000"].map((amount) => (
                <Button
                  key={amount}
                  onClick={() => setAmount(amount)}
                  fullWidth
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(+amount)} تومان
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
              +amount < 1000 || isLoading
                ? styles.panelDepositPayBtnDisabled
                : ""
            }
            variant="contained"
            disabled={+amount < 1000 || isLoading}
            onClick={increaseDepositHandler}
          >
            {isLoading ? <CircularProgress size={24} /> : "پرداخت"}
          </Button>
        </div>
      </div>
      {/* modal */}
      {/* <ModalAddCredit open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default DepositPage;
