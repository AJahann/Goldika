"use client";
import { Box, Button, ButtonGroup, Slider } from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InputBase from "@/shared/components/UI/input/InputBase";
import { useState } from "react";
import styles from "./trade.module.css";

const TradePage = () => {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");
  const [sliderValue, setSliderValue] = useState<number>(0);

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
              <b>{new Intl.NumberFormat("fa").format(3449001)} تومان</b>
            </p>
          </div>

          <InputBase
            label={"ارزش کل"}
            name={"تومان"}
            style={{
              marginTop: 12,
              width: "100%",
              background: "rgb(55, 57, 67)",
              borderRadius: 16,
            }}
          />

          <div style={{ marginTop: 48, width: "100%" }}>
            <InputBase
              label={"مقدار طلا"}
              name="گرم"
              style={{
                marginTop: 12,
                width: "100%",
                background: "rgb(55, 57, 67)",
                borderRadius: 16,
              }}
            />
          </div>
        </div>

        <Box sx={{ padding: 2 }}>
          <Slider
            value={sliderValue}
            onChange={(e, value) => setSliderValue(value as number)}
            step={1000}
            marks
            min={0}
            max={100000}
            sx={{ color: "rgb(189, 189, 189)" }}
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
            ? `موجودی کیف پول: ${new Intl.NumberFormat("fa").format(0)} تومان`
            : `موجودی کیف طلا: ${new Intl.NumberFormat("fa").format(0.0)} گرم`}
        </div>

        <div className={styles.panelPayBtn}>
          <Button
            fullWidth
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
          >
            {tradeType === "buy" ? "خرید" : "فروش"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
