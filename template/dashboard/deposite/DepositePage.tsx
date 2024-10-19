"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import styles from "./deposite.module.css";
import MyCards from "../component/MyCards";
import NoCard from "../component/NoCard";
import { useState } from "react";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { useAuth } from "@/shared/hooks/useAuth";

interface DepositPageProps {
  // Define any props here if needed in the future
}

const DepositPage: React.FC<DepositPageProps> = () => {
  const { user } = useAuth();
  const [amount, setAmount] = useState("");

  return (
    <div className={styles.panelDeposit}>
      <div className={styles.panelWrap}>
        <div className={styles.panelTitle}>واریز</div>
        <div className={styles.panelDepositContainer}>
          <InputBase
            value={convertToPersianDigits(amount)}
            onChange={(e) => setAmount(e.target.value)}
            label={"مبلغ واریز"}
            name={"تومان"}
            style={{
              background: "#2a2c34",
              width: "100%",
              marginTop: 12,
              borderRadius: 16,
            }}
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
            className={true && styles.panelDepositPayBtnDisabled}
            variant="contained"
            disabled
          >
            پرداخت
          </Button>
        </div>
      </div>
      {/* modal */}
      {/* <ModalAddCredit open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default DepositPage;
