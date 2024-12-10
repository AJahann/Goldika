"use client";
import formatCardNumberInPersian from "@/shared/utilities/formatCardNumber";
import { AccountBalance } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import styles from "./../deposite/deposite.module.css";
import { Key, useState } from "react";
import AddCardModal from "./AddCardModal";
import { useAuth } from "@/shared/hooks/useAuth";

const MyCards = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!user) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={38} />
      </div>
    );
  }

  return (
    <>
      <div className={styles.panel_myCards}>
        <div>کارت های من:</div>
        <Button onClick={() => setIsOpen(true)} variant="text">
          افزودن کارت
        </Button>
      </div>
      <div>
        {(user.user_metadata?.cards || []).map(
          (
            card: {
              cardName: string;
              cardNumber: string;
            },
            index: Key | null | undefined,
          ) => {
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
                    {formatCardNumberInPersian(+card.cardNumber)}
                  </p>
                </div>
              </div>
            );
          },
        )}
      </div>
      <AddCardModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default MyCards;
