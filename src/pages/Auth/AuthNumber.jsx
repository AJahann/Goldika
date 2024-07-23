import { Button, TextField } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { EntoFa, PetoEn } from "../../Utils/Utils";
import { useForm } from "react-hook-form";
import supabase from "../../supabase/supabase";
import { useMutation } from "react-query";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const signInUser = async (formData) => {
  const { number, password } = formData;

  let userLoginObj = {
    phone: `98${PetoEn(number)}`,
    password: PetoEn(password),
  };

  const { data, error } = await supabase.auth.signInWithPassword(userLoginObj);

  if (error) {
    throw new error(error.message);
  }

  return data;
};

export default function AuthNumber({ handleClickOpen, setIsUser }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [queryParameters] = useSearchParams();
  const urlNumber = queryParameters.get("_phone");

  const { mutate } = useMutation(signInUser, {
    onSuccess: (data) => {
      authContext.login(data.user);
      navigate("/panel", { replace: true });
    },
    onError: () => {
      toast.error("خطایی رخ داده است. لطفا دوباره تلاش کنید.");
    },
  });

  useEffect(() => {
    if (urlNumber) {
      setValue("number", urlNumber.slice(0, 11));
    }
  }, [urlNumber, setValue]);

  const watchedNumber = watch("number") || "";
  const watchedPassword = watch("password") || "";

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

      <form onSubmit={handleSubmit(mutate)}>
        <div className="auth-box-input-wrap">
          <TextField
            label="شماره تلفن همراه"
            color="primary"
            autoFocus
            {...register("number", {
              required: true,
              maxLength: 11,
              minLength: 11,
            })}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 18,
                color: "#fff",
                paddingRight: 22,
              },
            }}
            value={EntoFa(watchedNumber)}
          />
        </div>
        <div className="auth-box-input-wrap">
          <TextField
            label="پسورد"
            color="primary"
            type="password"
            {...register("password", {
              required: true,
              min: 6,
            })}
            variant="outlined"
            inputProps={{
              style: {
                fontSize: 18,
                color: "#fff",
                paddingRight: 22,
              },
            }}
            value={EntoFa(watchedPassword)}
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
            onClick={handleClickOpen}
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
  );
}
