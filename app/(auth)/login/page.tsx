"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (phoneNumber && password) {
      try {
        const response = await axios.post("/api/auth/login", {
          phoneNumber,
          password,
        });

        console.log("response =>", response);

        if (response.data.success) {
          router.replace("/dashboard");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>
          ورود |{" "}
          <Link href="/register">
            <Button style={{ fontSize: 18 }} variant="text">
              ثبت نام
            </Button>
          </Link>
        </h1>

        <form onSubmit={handleLogin}>
          <div className="auth-box-input-wrap">
            <InputBase
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              label="شماره تلفن همراه"
              style={{ width: "100%" }}
            />
          </div>
          <div className="auth-box-input-wrap">
            <InputBase
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="پسورد"
              style={{ width: "100%" }}
            />
          </div>
          <p>
            با ورود یا ثبت نام،{" "}
            <button
              style={{
                color: "#f1ab1f",
                cursor: "pointer",
                background: "none",
                border: "none",
              }}
              type="button"
            >
              شرایط و قوانین
            </button>{" "}
            را می‌پذیرم.
          </p>
          <Button
            type="submit"
            style={{ borderRadius: 8 }}
            fullWidth
            variant="contained"
          >
            ورود
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
