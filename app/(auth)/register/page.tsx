"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import convertToEnglishDigits from "@/shared/utilities/convertToEnglishDigits";
import convertToPersianDigits from "@/shared/utilities/convertToPersianDigits";
import { ArrowBack } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast"; // ایمپورت toast

const Register = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      toast.error("نام باید حداقل ۳ حرف باشد.");
      return;
    }

    const numberPattern = /^[0-9]{11}$/;
    if (!numberPattern.test(number)) {
      toast.error("شماره موبایل باید ۱۱ رقم باشد.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("ایمیل وارد شده معتبر نیست.");
      return;
    }

    if (password.length < 8) {
      toast.error("رمز عبور باید حداقل ۸ کاراکتر باشد.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        number,
        email,
        password,
      });

      if (response.data.success) {
        toast.success("ثبت‌نام با موفقیت انجام شد!");
        router.replace("/dashboard");
      } else {
        toast.error(response.data.message || "خطا در ثبت‌نام");
      }
    } catch (error) {
      toast.error("خطایی در هنگام ثبت‌نام رخ داد.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-box">
      <div
        style={{
          paddingLeft: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ margin: 8, fontSize: "1.6rem" }}>ثبت‌ نام</span>
        <div>
          <Link href="/login">
            <Button
              style={{
                color: "white",
                borderRadius: "50%",
                minWidth: "25px",
                width: 32,
              }}
            >
              <ArrowBack fontSize="small" />
            </Button>
          </Link>
        </div>
      </div>
      <hr style={{ opacity: ".5" }} />
      <form
        onSubmit={handleRegister}
        style={{ marginTop: 27 }}
        className="auth-box-input-wrap"
      >
        <InputBase
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: 14, width: "100%" }}
          label={"نام و نام خانوادگی"}
        />
        <InputBase
          value={convertToPersianDigits(number)}
          onChange={(e) => setNumber(convertToEnglishDigits(e.target.value))}
          style={{ marginBottom: 14, width: "100%" }}
          label={"شماره موبایل"}
          max={11}
        />
        <InputBase
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 14, width: "100%" }}
          label={"ایمیل"}
          type={"email"}
        />
        <InputBase
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: 14, width: "100%" }}
          label={"پسورد"}
          type={"password"}
        />

        <Button
          type="submit"
          style={{ borderRadius: 8, marginTop: 12 }}
          fullWidth
          variant="contained"
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : "ثبت نام"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
