import React, { useContext, useState } from "react";
import {
  Button,
  ThemeProvider,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Modal from "./../../components/Modal/Modal";
import { ToastContainer } from "react-toastify";
import GoldikaTypo from "./../../components/LogoTypo/GoldikaTypo";
// import { useQuery } from "react-query";
import Svg from "./Svg";

import "./Auth.css";
import AuthNumber from "./AuthNumber";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import AuthSignUp from "./AuthSignUp";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1ab1f",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#f2f2f360",
        },
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffffb0",
        },
      },
    },
  },
});

export default function Auth() {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(true);
  const [open, setOpen] = useState(false);

  if (isLogin) {
    return navigate("/panel/dashboard");
  }
  return (
    <div className="auth">
      <ThemeProvider theme={theme}>
        <div className="auth-content">
          <div className="auth-content-wrap">
            <GoldikaTypo />
            <div className="auth-content-txt">
              <h3>
                با هر مبلغی بدون پرداخت اجرت و مالیات، طلا بخرید و بفروشید و در
                هر زمان تحویل بگیرید.
              </h3>
              <div>
                <span>پشتیبانی:</span>
                <span>
                  {" "}
                  شماره تماس :
                  <span style={{ direction: "ltr" }}>۰۲۱-۹۱۰ ۹۶ ۱۹۵</span>
                </span>
                <span>رایانامه: support@goldika.ir</span>
                <Svg />
              </div>
            </div>
          </div>
        </div>
        <div className="auth-container">
          {isUser ? (
            <AuthNumber
              setIsUser={setIsUser}
              handleClickOpen={() => setOpen(true)}
            />
          ) : (
            <AuthSignUp setIsUser={setIsUser} />
          )}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Modal open={open}>
          <DialogTitle
            style={{ color: "#fff" }}
            sx={{ m: 0, p: 2 }}
            id="customized-dialog-title"
          >
            شرایط و قوانین{" "}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              ۱. تمامی کالاها و خدمات گلدیکا، حسب مورد دارای مجوز های لازم از
              مراجع ذی صلاح بوده و کلیه اصول، رویه ها و فعالیت های آن تابع
              قوانین و مقررات جمهوری اسلامی ایران از جمله قوانین و مقررات نظام
              صنفی، انتظامی، بهداشتی، ایمنی، قانون تجارت، قانون پولی و بانکی
              کشور، مبارزه با پولشویی، قانون مبارزه با قاچاق کالا و ارز، قانون
              مدنی، قانون تجارت الکترونیکی، قانون جرائم رایانه ای، قانون حمایت
              از حقوق مصرف کنندگان، ممنوعیت فروش آنلاین طلا به صورت امانی و ...
              می باشد.
            </Typography>
            <Typography gutterBottom>
              ۲. هر مشتری یا کاربری که قصد استفاده از امکانات و خدمات گلدیکا را
              دارد، موظف به رعایت قوانین و مقررات اشاره شده در این صفحه می باشد
              و کاربر در زمان ثبت نام کلیه قوانین و مقررات را مطالعه کرده و
              تأیید می نماید. لذا ورود کاربر و استفاده از کلیه خدمات گلدیکا، به
              معنای آگاهی کامل و پذیرفتن شرایط و قوانین و مقررات است. در صورت
              عدم رعایت قوانین و مقررات گلدیکا توسط کاربران، گلدیکا حق غیرفعال
              نمودن نام کاربری و یا توقف ارائه خدمات و یا معرفی کاربر به مراجع
              ذی صلاح را برای خود محفوظ می دارد.
            </Typography>
            <Typography gutterBottom>
              ۳. گلدیکا حق اصلاح و تغییر قوانین و مقررات ذکر شده در این صفحه را
              چه به صورت کلی و چه به صورت جزئی دارد و نسخه نهایی را در این صفحه
              در معرض دید قرار می‌دهد. استفاده از خدمات گلدیکا پس از اعمال
              تغییرات، به معنی پذیرش همه تغییرات است.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOpen(false)}
              style={{ borderRadius: 8 }}
              variant="contained"
            >
              بستن
            </Button>
          </DialogActions>
        </Modal>
      </ThemeProvider>
    </div>
  );
}
