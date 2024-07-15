import React, { useContext, useEffect, useState } from "react";
import { Button, createTheme } from "@mui/material";
import Input2 from "./../../../components/Input2/Input2";
import AddIcon from "@mui/icons-material/Add";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../Context/AuthContext";

import "./Deposit.css";
import ModalAddCredit from "../../../components/Modal/ModalAddCredit";
import NoCards from "../components/NoCards/NoCards";
import MyCards from "../components/MyCards/MyCards";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f1ab1f",
    },
  },
});

export default function Deposit() {
  const { token, userInfo, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [deposit, setDeposit] = useState("");

  const creditHandler = async () => {
    if (+deposit > 10000) {
      const newWalletBalance =
        Number(userInfo.pocket.walletBalance) + Number(deposit);

      const updatedUser = {
        ...userInfo,
        pocket: {
          ...userInfo.pocket,
          walletBalance: newWalletBalance,
        },
      };

      try {
        const response = await fetch(
          `https://goldikaserver2.liara.run/users/${token}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
          },
        );
        if (!response.ok) {
          throw new Error("خطا در ارسال درخواست");
        }
        updateUserInfo(updatedUser);
        navigate("/panel/dashboard");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://goldikaserver2.liara.run/users/${token}`,
        );
        if (!response.ok) {
          throw new Error("خطا در دریافت اطلاعات کاربر");
        }
        const user = await response.json();
        updateUserInfo(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [token]);

  return (
    <div className="panel-deposit">
      <ThemeProvider theme={theme}>
        <div className="panel-wrap">
          <div className="panel-title">واریز</div>
          <div className="panel-deposit-container">
            <Input2
              value={deposit}
              setValue={setDeposit}
              label={"مبلغ واریز"}
              type={"تومان"}
              bgBlack
            />
            <span></span>
            <div className="panel-deposit-stock">
              <div className="panel-deposit-stock-top">
                {[500000, 1000000].map((amount) => (
                  <Button
                    key={amount}
                    fullWidth
                    style={{ height: 31, borderRadius: 8 }}
                    color="primary"
                    variant="outlined"
                    onClick={() => setDeposit(String(amount))}
                  >
                    <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                    {new Intl.NumberFormat("fa").format(amount)} تومان
                  </Button>
                ))}
              </div>
              <div className="panel-deposit-stock-bottom">
                {[5000000, 10000000].map((amount) => (
                  <Button
                    key={amount}
                    fullWidth
                    style={{ height: 31, borderRadius: 8 }}
                    color="primary"
                    variant="outlined"
                    onClick={() => setDeposit(String(amount))}
                  >
                    <AddIcon style={{ fontSize: 20, marginLeft: 8 }} />
                    {new Intl.NumberFormat("fa").format(amount)} تومان
                  </Button>
                ))}
              </div>
            </div>

            <div className="panel-deposit-myCards">
              {userInfo.pocket.cards.length ? (
                <MyCards setOpen={setOpen} />
              ) : (
                <NoCards setOpen={setOpen} />
              )}
            </div>
          </div>
          <div className="panel-deposit-pay-btn">
            <Button
              style={{
                marginTop: 24,
                width: 320,
                padding: "12px 0",
                borderRadius: 8,
                fontWeight: "bold",
                boxShadow: "none",
              }}
              onClick={userInfo.pocket.cards.length ? creditHandler : null}
              variant="contained"
              disabled={!deposit.length || !userInfo.pocket.cards.length}
            >
              پرداخت
            </Button>
          </div>
        </div>
        {/* modal */}
        <ModalAddCredit open={open} setOpen={setOpen} />
      </ThemeProvider>
    </div>
  );
}
