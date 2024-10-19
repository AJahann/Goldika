"use client";
import InputBase from "@/shared/components/UI/input/InputBase";
import { Button, CircularProgress } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      setIsLoading(true);

      try {
        const response = await axios.post("/api/auth/login", {
          email,
          password,
        });

        if (response.data.success) {
          router.replace("/dashboard");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="ایمیل"
              type="email"
              style={{ width: "100%" }}
            />
          </div>
          <div className="auth-box-input-wrap">
            <InputBase
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="پسورد"
              style={{ width: "100%" }}
              type="password"
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
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} /> : "ورود"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
