"use client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const RuleModal = ({ open }: { open: boolean }) => {
  return (
    <Fragment>
      <BootstrapDialog
        style={{ zIndex: 99999 }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
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
            مراجع ذی صلاح بوده و کلیه اصول، رویه ها و فعالیت های آن تابع قوانین
            و مقررات جمهوری اسلامی ایران از جمله قوانین و مقررات نظام صنفی،
            انتظامی، بهداشتی، ایمنی، قانون تجارت، قانون پولی و بانکی کشور،
            مبارزه با پولشویی، قانون مبارزه با قاچاق کالا و ارز، قانون مدنی،
            قانون تجارت الکترونیکی، قانون جرائم رایانه ای، قانون حمایت از حقوق
            مصرف کنندگان، ممنوعیت فروش آنلاین طلا به صورت امانی و ... می باشد.
          </Typography>
          <Typography gutterBottom>
            ۲. هر مشتری یا کاربری که قصد استفاده از امکانات و خدمات گلدیکا را
            دارد، موظف به رعایت قوانین و مقررات اشاره شده در این صفحه می باشد و
            کاربر در زمان ثبت نام کلیه قوانین و مقررات را مطالعه کرده و تأیید می
            نماید. لذا ورود کاربر و استفاده از کلیه خدمات گلدیکا، به معنای آگاهی
            کامل و پذیرفتن شرایط و قوانین و مقررات است. در صورت عدم رعایت قوانین
            و مقررات گلدیکا توسط کاربران، گلدیکا حق غیرفعال نمودن نام کاربری و
            یا توقف ارائه خدمات و یا معرفی کاربر به مراجع ذی صلاح را برای خود
            محفوظ می دارد.
          </Typography>
          <Typography gutterBottom>
            ۳. گلدیکا حق اصلاح و تغییر قوانین و مقررات ذکر شده در این صفحه را چه
            به صورت کلی و چه به صورت جزئی دارد و نسخه نهایی را در این صفحه در
            معرض دید قرار می‌دهد. استفاده از خدمات گلدیکا پس از اعمال تغییرات،
            به معنی پذیرش همه تغییرات است.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button style={{ borderRadius: 8 }} variant="contained">
            بستن
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Fragment>
  );
};

export default RuleModal;
