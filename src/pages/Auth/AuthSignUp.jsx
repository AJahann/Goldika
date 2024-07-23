import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useMutation } from "react-query";
import supabase from "../../supabase/supabase";

const signUpUser = async (values) => {
  const { data, error } = await supabase.auth.signUp({
    options: {
      data: {
        name: values.name,
        pocket: values.pocket,
        location: values.location,
      },
    },
    phone: `98${values.number}`,
    password: values.pass,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export default function AuthSignUp({ setIsUser }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(signUpUser, {
    onSuccess: (data) => {
      authContext.login(data.user);
      navigate("/panel", { replace: true });
    },
    onError: () => {
      toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
    },
  });

  useEffect(() => {
    toast.success("لطفا فرم را به دقت پر کنید.");
  }, []);

  useEffect(() => {
    errors.pass && toast.error("دوست عزیز پسورد خود را چک کنید.");
  }, [errors]);

  const onSubmit = (formData) => {
    if (formData.pass === formData.rePass) {
      const userInfo = {
        ...formData,
        pocket: {
          cards: [],
          basket: [],
          transactions: [],
          walletBalance: "0",
          goldWalletBalance: "0",
        },
        location: "US",
      };
      mutate(userInfo);
    } else {
      toast.error("دوست عزیز پسورد خود را چک کنید.");
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
          <Button
            onClick={() => {
              setIsUser(true);
            }}
            style={{
              color: "white",
              borderRadius: "50%",
              minWidth: "25px",
              width: 32,
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <hr style={{ opacity: ".5" }} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ marginTop: 27 }}
        className="auth-box-input-wrap"
      >
        <TextField
          autoFocus
          style={{ marginBottom: 14 }}
          label={"نام و نام خانوادگی"}
          InputProps={{
            ...register("name", {
              required: true,
              minLength: 2,
              maxLength: 15,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
              textAlign: "right",
              direction: "rtl",
            },
          }}
        />

        <TextField
          style={{ marginBottom: 14 }}
          label={"شماره موبایل"}
          InputProps={{
            type: "text",
            ...register("number", {
              required: true,
              minLength: 11,
              maxLength: 11,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
            },
          }}
        />
        <TextField
          style={{ marginBottom: 14 }}
          label={"پسورد"}
          InputProps={{
            type: "password",
            ...register("pass", {
              required: true,
              minLength: 5,
              maxLength: 25,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
            },
          }}
        />
        <TextField
          label={"تکرار پسورد"}
          InputProps={{
            type: "password",
            ...register("rePass", {
              required: true,
              minLength: 5,
              maxLength: 25,
            }),
          }}
          inputProps={{
            style: {
              fontSize: 18,
              color: "#fff",
            },
          }}
        />
        <Button
          type="submit"
          style={{ borderRadius: 8, marginTop: 24 }}
          fullWidth
          variant="contained"
        >
          ثبت نام
        </Button>
      </form>
    </div>
  );
}
