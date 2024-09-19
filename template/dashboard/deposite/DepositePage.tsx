import InputBase from "@/shared/components/UI/input/InputBase";
import { AccountBalance, Add } from "@mui/icons-material";
import { Alert, Button } from "@mui/material";
import styles from "./deposite.module.css";
import formatCardNumberInPersian from "@/shared/utilities/formatCardNumber";

const NoCard = () => {
  return (
    <>
      <Alert
        style={{
          width: "100%",
          color: "#ffe2b7",
          backgroundColor: "#191207 !important",
          borderRadius: "16px !important",
          fontSize: 14,
        }}
        severity="warning"
      >
        کارتی در سامانه تعریف نشده است.
      </Alert>
      <Button
        style={{
          borderRadius: 8,
          fontSize: 14,
          margin: "0 auto",
          marginTop: 12,
          fontWeight: "bold",
          boxShadow: "none",
        }}
        variant="contained"
      >
        افزودن کارت
      </Button>
    </>
  );
};
const MyCards = () => {
  return (
    <>
      <div className={styles.panel_myCards}>
        <div>کارت های من:</div>
        <Button variant="text">افزودن کارت</Button>
      </div>
      <div>
        {[{ cardName: "کارت 1", cardNumber: 6037697650335489 }].map(
          (card, index) => {
            return (
              <div key={index} className={styles.panel_myCardsCard}>
                <div>
                  <AccountBalance style={{ fontSize: 56, color: "#84879a" }} />
                </div>
                <div className={styles.panel_mayCardsCardTxt}>
                  <p className={styles.panel_mayCardsCardName}>
                    {card.cardName}
                  </p>
                  <p className={styles.panel_mayCardsCardNumber}>
                    {formatCardNumberInPersian(card.cardNumber)}
                  </p>
                </div>
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

interface DepositPageProps {
  // Define any props here if needed in the future
}

const DepositPage: React.FC<DepositPageProps> = () => {
  return (
    <div className={styles.panelDeposit}>
      <div className={styles.panelWrap}>
        <div className={styles.panelTitle}>واریز</div>
        <div className={styles.panelDepositContainer}>
          <InputBase
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
              {[500000, 1000000].map((amount) => (
                <Button
                  key={amount}
                  fullWidth
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(amount)} تومان
                </Button>
              ))}
            </div>
            <div
              style={{ marginTop: 14 }}
              className={styles.panelDepositStock_inner}
            >
              {[5000000, 10000000].map((amount) => (
                <Button
                  key={amount}
                  fullWidth
                  className={styles.panelDepositStockButton}
                  color="primary"
                  variant="outlined"
                >
                  <Add style={{ fontSize: 20, marginLeft: 8 }} />
                  {new Intl.NumberFormat("fa").format(amount)} تومان
                </Button>
              ))}
            </div>
          </div>

          <div className="panelDepositMyCards">
            {true ? <MyCards /> : <NoCard />}
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
            // onClick={userInfo.pocket.cards.length ? creditHandler : null}
            // disabled={!deposit.length || !userInfo.pocket.cards.length}
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
