import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { EntoFa, formatNumberToPersian } from "../../../Utils/Utils";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { AuthContext } from "../../../Context/AuthContext";
import { toast } from "react-toastify";
import BigNumber from "bignumber.js";

export default function Cart({ isOpen, onClose, cart }) {
  const { userInfo, updateUserInfo, token } = useContext(AuthContext);

  const removeProductHandler = (id) => {
    let product = cart.find((item) => item.id === id);
    let newCart = userInfo.pocket.cart.filter((item) => item.id !== id);
    let updateUser = {
      ...userInfo,
      pocket: {
        ...userInfo.pocket,
        cart: newCart,
        goldWalletBalance: new BigNumber(
          userInfo.pocket.goldWalletBalance,
        ).plus(product.weight * (product.count || 1)),
      },
    };
    fetch(`https://goldikaserver2.liara.run/users/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("محصول با موفقیت حذف شد", {
          progress: false,
          theme: "colored",
        });
        updateUserInfo(updateUser);
      })
      .catch((err) => toast.error("خطایی رخ داده است"));
  };
  const submitHandler = () => {
    let updateUser = {
      ...userInfo,
      pocket: {
        ...userInfo.pocket,
        cart: [],
      },
    };
    fetch(`https://goldikaserver2.liara.run/users/${token}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((result) => {
        updateUserInfo(updateUser);
        toast.success("سفارش شما با موفقیت ثبت شد", {
          theme: "colored",
        });
        toast.success("کارشناسان با شما تماس خواهند گرفت", {
          theme: "colored",
        });
      })
      .catch((err) => toast.error("خطایی رخ داده است", { theme: "colored" }));
  };
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        style={{ zIndex: 9999 }}
      >
        <DialogTitle
          style={{ color: "#fff", alignItems: "center", display: "flex" }}
          id="scroll-dialog-title"
        >
          ثبت تحویل{" "}
          <LocalGroceryStoreOutlinedIcon
            style={{ color: "#fff", marginRight: 8 }}
          />
        </DialogTitle>
        {cart.length ? (
          <>
            <DialogContent dividers={false} style={{ padding: 0 }}>
              <Table
                style={{ color: "#fff", padding: 0 }}
                sx={{ minWidth: 450 }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>محصول</TableCell>
                    <TableCell style={{ color: "#fff" }} align="right">
                      وزن (گرم)
                    </TableCell>
                    <TableCell align="right">اجرت</TableCell>
                    <TableCell align="right">تعداد</TableCell>
                    <TableCell align="right">حذف</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody style={{ color: "#fff" }}>
                  {cart.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        {EntoFa(String(row.weight))}
                      </TableCell>
                      <TableCell align="right">
                        {formatNumberToPersian(row.wages)}
                      </TableCell>
                      <TableCell align="right">
                        {EntoFa(String(row.count || 1))}
                      </TableCell>
                      <TableCell align="right">
                        <RemoveShoppingCartOutlinedIcon
                          onClick={() => removeProductHandler(row.id)}
                          fontSize="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose}>لغو</Button>
              <Button onClick={submitHandler}>نهایی کردن</Button>
            </DialogActions>
          </>
        ) : (
          <h2
            style={{
              fontSize: "1.5rem",
              color: "#f3b945",
              padding: "20px 5rem",
            }}
            id="cart-alert"
          >
            سبد تحویل شما خالی است!
          </h2>
        )}
      </Dialog>
    </React.Fragment>
  );
}
