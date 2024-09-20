import InputBase from "@/shared/components/UI/input/InputBase";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

const Register = () => {
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
      <form style={{ marginTop: 27 }} className="auth-box-input-wrap">
        <InputBase
          style={{ marginBottom: 14, width: "100%" }}
          label={"نام و نام خانوادگی"}
        />
        <InputBase
          style={{ marginBottom: 14, width: "100%" }}
          label={"شماره موبایل"}
        />
        <InputBase
          style={{ marginBottom: 14, width: "100%" }}
          label={"پسورد"}
        />
        <InputBase
          style={{ marginBottom: 14, width: "100%" }}
          label={"تکرار پسورد"}
        />

        <Button
          type="submit"
          style={{ borderRadius: 8, marginTop: 12 }}
          fullWidth
          variant="contained"
        >
          ثبت نام
        </Button>
      </form>
    </div>
  );
};

export default Register;
