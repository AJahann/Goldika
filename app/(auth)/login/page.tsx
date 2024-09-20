import InputBase from "@/shared/components/UI/input/InputBase";
import { Button } from "@mui/material";
import Link from "next/link";

const Login = () => {
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

        <form>
          <div className="auth-box-input-wrap">
            <InputBase label="شماره تلفن همراه" style={{ width: "100%" }} />
          </div>
          <div className="auth-box-input-wrap">
            <InputBase label="پسورد" style={{ width: "100%" }} />
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
