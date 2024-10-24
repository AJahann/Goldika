"use client";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";
import InputBase from "@/shared/components/UI/input/InputBase";
import { useAuth } from "@/shared/hooks/useAuth";
import { Button } from "@mui/material";
import styles from "./TradingSection.module.css";

const NumberInput = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <div>
        <div style={{ height: 62 }} className={styles.numberInput}>
          <Link href={"/dashboard"}>
            <Button
              id="inputNumber-btn"
              style={{
                backgroundColor: "var(--primary-color)",
                zIndex: 10,
                color: "#000",
                borderRadius: 14,
                width: "auto",
                top: "43px",
                left: "auto",
                right: 0,
                boxShadow: "none",
              }}
              variant="contained"
            >
              شروع معامله
              <ArrowBackIosNewIcon sx={{ fontSize: 13, marginLeft: 1 }} />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className={styles.numberInput}>
          <InputBase label="شماره تلفن همراه خود را وارد کنید" />
          <Link href={`/register?number=${"0"}`}>
            <Button
              id="inputNumber-btn"
              style={{
                position: "absolute",
                top: 43,
                left: 12,
                backgroundColor: "var(--primary-color)",
                zIndex: 10,
                color: "#000",
                boxShadow: "30px 0px 10px 0px rgb(42 44 52)",
              }}
              variant="contained"
            >
              شروع
              <ArrowBackIosNewIcon sx={{ fontSize: 13 }} />
            </Button>
          </Link>
        </div>
      </div>
      <span className={styles.inputNumberTxt}>
        در کمتر از دو دقیقه ثبت‌نام و شروع به معامله کنید.
      </span>
    </div>
  );
};

export default NumberInput;
