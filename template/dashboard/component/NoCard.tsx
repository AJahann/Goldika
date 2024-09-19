import { Alert, Button } from "@mui/material";

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

export default NoCard;
