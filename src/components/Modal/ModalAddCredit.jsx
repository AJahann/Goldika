import { Alert, Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Input2 from "../Input2/Input2";
import Input from "../Input/Input";
import Modal from "./../../components/Modal/Modal";
import { AuthContext } from "../../Context/AuthContext";
import supabase from "../../supabase/supabase";

export default function ModalAddCredit({ open, setOpen }) {
  const { userInfo, updateUserInfo } = useContext(AuthContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setCardName("");
      setCardNumber("");
    }
  }, [open]);

  const addCreditCardHandler = () => {
    if (cardNumber.length === 16 && cardName.length) {
      setIsLoading(true);

      const req = supabase.auth.updateUser({
        data: {
          pocket: {
            ...userInfo.pocket,
            cards: [...userInfo.pocket.cards, { cardNumber, cardName }],
          },
        },
      });

      req.then((res) => {
        setOpen(false);
        updateUserInfo(res.data.user);
        setIsLoading(false);
      });
      req.catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
    }
  };

  return (
    <Modal open={open} className={"modal-panel"}>
      <Typography
        style={{
          fontSize: 20,
          marginBottom: 16,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        افزودن کارت بانکی
      </Typography>
      <Box width={"100%"}>
        <Alert
          severity="warning"
          style={{ backgroundColor: "rgb(25, 18, 7) !important" }}
        >
          مالکیت کارت باید به نام خودتان باشد.
        </Alert>
        <Input2
          label={"شماره کارت"}
          type={null}
          value={cardNumber}
          setValue={setCardNumber}
          card
          maxCard={true}
        />
        <Input
          style={{ width: "100%", marginTop: "14px" }}
          label={"نام انتخابی"}
          setNumberInput={setCardName}
          card
          max12
        />
      </Box>
      <Box textAlign={"right"} marginTop={2}>
        <Button
          onClick={() => {
            setOpen(false);
          }}
          style={{
            borderRadius: 8,
            backgroundColor: "transparent",
            boxShadow: "none",
            marginLeft: 8,
            color: "#fff",
          }}
          variant="contained"
        >
          انصراف
        </Button>
        <Button
          disabled={isLoading}
          onClick={addCreditCardHandler}
          style={{ borderRadius: 8, boxShadow: "none" }}
          variant="contained"
        >
          افزودن
        </Button>
      </Box>
    </Modal>
  );
}
