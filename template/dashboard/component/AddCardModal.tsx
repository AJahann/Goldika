"use client";
import { Alert, Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import InputBase from "@/shared/components/UI/input/InputBase";
import axios from "axios";
import formatCardNumberInPersian from "@/shared/utilities/formatCardNumber";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import { useAuth } from "@/shared/hooks/useAuth";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const AddCardModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { user } = useAuth();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(user);

  const addCartHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      cardNumber.trim().length == 16 &&
      cardName.trim() &&
      user?.user_metadata
    ) {
      setIsLoading(true);
      try {
        const existingCards = user.user_metadata?.cards || [];

        const updatedCards = [...existingCards, { cardName, cardNumber }];

        const response = await axios.post("/api/auth/me", {
          userId: user.user_id,
          user_metadata: {
            ...user.user_metadata,
            cards: updatedCards,
          },
        });

        if (response.data.success) {
          setCardName("");
          setCardNumber("");
          handleClose();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        maxWidth="xs"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
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
          <InputBase
            label={"شماره کارت"}
            value={formatCardNumberInPersian(+cardNumber)}
            onChange={(e) =>
              setCardNumber(convertToEnglishDigits(e.target.value))
            }
            style={{ width: "100%", marginTop: "14px" }}
            max={19}
          />
          <InputBase
            style={{ width: "100%", marginTop: "14px" }}
            label={"نام انتخابی"}
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </Box>
        <Box textAlign={"right"} marginTop={2}>
          <Button
            onClick={() => {
              setCardName("");
              setCardNumber("");
              handleClose();
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
            onClick={addCartHandler}
            style={{ borderRadius: 8, boxShadow: "none" }}
            variant="contained"
          >
            {isLoading ? "در حال اضافه کردن..." : "افزودن"}
          </Button>
        </Box>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default AddCardModal;
