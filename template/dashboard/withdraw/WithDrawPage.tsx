import { Alert, Box, Button, Slider } from "@mui/material";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InputBase from "@/shared/components/UI/input/InputBase";
import styles from "./withdraw.module.css";
import MyCards from "../component/MyCards";
import NoCard from "../component/NoCard";

const WithDrawPage = () => {
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
            موجودی: {new Intl.NumberFormat("fa").format(0)} تومان
          </div>
          <InputBase
            label={"مبلغ برداشت"}
            name={"تومان"}
            style={{
              background: "#2a2c34",
              width: "100%",
              marginTop: 12,
              borderRadius: 16,
            }}
          />
          <span></span>
          <Box className={styles.panelWithdrawSlider}>
            <Slider
              value={0}
              step={100000}
              marks
              min={0}
              max={0}
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
            className={true && styles.panelDepositPayBtnDisabled}
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
            disabled
          >
            برداشت
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WithDrawPage;
