"use client";
import React, { useState } from "react";
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
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { useAuth } from "@/shared/hooks/useAuth";
import BigNumber from "bignumber.js";
import toast from "react-hot-toast";
import axios from "axios";
import { CircularProgress } from "@mui/material";

interface UserCardProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Array<
    | {
        id: number;
        name: string;
        weight: number;
        wages: number;
        count?: number;
      }
    | {
        id: number;
        name: string;
        imgSrc: string;
        wages: number;
        weight: number;
        brand: string;
        type: string;
      }
  >;
}

const UserCard: React.FC<UserCardProps> = ({ isOpen, onClose, cart }) => {
  const { user, mutate } = useAuth();
  const userGold = new BigNumber(user?.user_metadata?.pocket?.gold || 0);
  const userCart = user?.user_metadata?.cart ?? [];

  const [isLoading, setIsLoading] = useState(false);

  const removeProductHandler = async (id: number) => {
    if (isLoading) {
      toast.error("درحال انجام عملیات لطفا منتظر بمانید.");
      return;
    }

    const product = userCart.find((p: { id: number }) => p.id === id);
    if (!product) {
      toast.error("محصول مورد نظر یافت نشد.");
      return;
    }

    const productGold = new BigNumber(product.weight).multipliedBy(
      product.count,
    );
    const newUserGoldAmount = userGold.plus(productGold).toFixed();

    const updatedCart = userCart.filter(
      (item: { id: number }) => item.id !== id,
    );

    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          cart: updatedCart,
          pocket: {
            ...user.user_metadata.pocket,
            gold: newUserGoldAmount,
          },
        },
      });

      if (response.data.success) {
        await mutate();
        toast.success("محصول با موفقیت حذف شد.");
      } else {
        toast.error("حذف محصول با خطا مواجه شد.");
      }
    } catch (error) {
      toast.error("درخواست با خطا مواجه شد.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitHandler = async () => {
    if (isLoading) {
      toast.error("درحال انجام عملیات لطفا منتظر بمانید.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          cart: [],
        },
      });

      if (response.data.success) {
        await mutate();
        toast.success("درخواست با موفقیت ثبت شد.");
      } else {
        toast.error("درخواست با خطا مواجه شد.");
      }
    } catch (error) {
      toast.error("درخواست با خطا مواجه شد.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{ zIndex: 9999 }}
    >
      <DialogTitle
        sx={{
          color: "#fff",
          alignItems: "center",
          display: "flex",
          padding: 4,
        }}
        id="scroll-dialog-title"
      >
        ثبت تحویل
        <LocalGroceryStoreOutlinedIcon sx={{ color: "#fff", marginLeft: 1 }} />
      </DialogTitle>

      {cart.length > 0 ? (
        <>
          <DialogContent dividers={false} sx={{ padding: "1rem" }}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#fff" }}>محصول</TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    وزن (گرم)
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    اجرت
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    تعداد
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }} align="right">
                    حذف
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ color: "#fff", fontSize: "12px" }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {Intl.NumberFormat("fa").format(row.weight)}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {Intl.NumberFormat("fa").format(row.wages)}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {"count" in row
                        ? Intl.NumberFormat("fa").format(row?.count ?? 1)
                        : "۱"}
                    </TableCell>

                    <TableCell sx={{ color: "#fff" }} align="right">
                      <RemoveShoppingCartOutlinedIcon
                        onClick={() => removeProductHandler(row.id)}
                        fontSize="small"
                        sx={{ cursor: "pointer" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContent>

          <DialogActions sx={{ padding: "1rem" }}>
            <Button onClick={onClose}>لغو</Button>
            <Button onClick={submitHandler}>
              {isLoading ? <CircularProgress size={24} /> : "نهایی کردن"}
            </Button>
          </DialogActions>
        </>
      ) : (
        <h2
          style={{
            fontSize: "1.5rem",
            color: "#f3b945",
            padding: "2rem 5rem",
          }}
        >
          سبد تحویل شما خالی است!
        </h2>
      )}
    </Dialog>
  );
};

export default UserCard;
