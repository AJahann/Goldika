import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EntoFa, PetoEn } from "../../Utils/Utils";

export default function AuthNumber({ handleClickOpen, setIsUser }) {
  const [number, setNumber] = useState("");
  const [queryParameters] = useSearchParams();
  const urlNumber = queryParameters.get("_phone");

  const handleChange = (e) => {
    const inputNumber = e.target.value;
    if (inputNumber.length <= 11) {
      setNumber(PetoEn(inputNumber));
    }
  };

  useEffect(() => {
    urlNumber && setNumber(urlNumber);
  }, [urlNumber, setNumber]);

  return (
    <div className="auth-box">
      <h1>
        ورود |{" "}
        <Button
          onClick={() => setIsUser(false)}
          style={{ fontSize: 18 }}
          variant="text"
        >
          ثبت نام
        </Button>
      </h1>
      <div className="auth-box-input-wrap">
        <TextField
          label="شماره تلفن همراه"
          color="primary"
          autoFocus
          value={EntoFa(number)}
          onChange={handleChange}
          variant="outlined"
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
              paddingRight: 22,
            },
          }}
        />
        {/* <span>مالکیت شماره باید به نام خودتان باشد</span> */}
      </div>
      <div className="auth-box-input-wrap">
        <TextField
          label="پسورد"
          color="primary"
          value={EntoFa(number)}
          onChange={handleChange}
          variant="outlined"
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
              paddingRight: 22,
            },
          }}
        />
        {/* <span>مالکیت شماره باید به نام خودتان باشد</span> */}
      </div>
      <p>
        با ورود یا ثبت نام،{" "}
        <button
          style={{
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
          onClick={handleClickOpen}
        >
          شرایط و قوانین
        </button>{" "}
        را می‌پذیرم.
      </p>
      <Button
        onClick={() => {
          console.log("form submit");
        }}
        style={{ borderRadius: 8 }}
        fullWidth
        variant="contained"
      >
        ورود
      </Button>
    </div>
  );
}
