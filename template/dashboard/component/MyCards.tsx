import formatCardNumberInPersian from "@/shared/utilities/formatCardNumber";
import { AccountBalance } from "@mui/icons-material";
import { Button } from "@mui/material";
import styles from "./../deposite/deposite.module.css";

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

export default MyCards;
