"use client";
import { Alert, Button } from "@mui/material";
import { useState } from "react";
import AddCardModal from "./AddCardModal";

const NoCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

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
        onClick={() => setIsOpen(true)}
      >
        افزودن کارت
      </Button>

      <AddCardModal isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default NoCard;
