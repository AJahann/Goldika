import React from "react";
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

const UserCard: React.FC<UserCardProps> = ({
  isOpen,
  onClose,
  cart = [
    {
      id: 1,
      name: "سکه ۲ گرمی زردیس",
      imgSrc: "سکه%20۲%20گرمی%20زردیس",
      wages: 70000,
      weight: 2,
      brand: "پارسس",
      type: "سکه پارسیان",
    },
    {
      id: 2,
      name: "سکه ۱.۲ گرمی کهزاد",
      imgSrc: "سکه%20۱.۲%20گرمی%20کهزاد",
      wages: 65000,
      weight: 1.2,
      brand: "کهزاد",
      type: "سکه پارسیان",
    },
    {
      id: 3,
      name: "سکه ۱ گرمی کهزاد",
      imgSrc: "سکه%20۱%20گرمی%20کهزاد",
      wages: 65000,
      weight: 1,
      brand: "کهزاد",
      type: "سکه پارسیان",
    },
  ],
}) => {
  const removeProductHandler = (id: number) => {
    // Logic to remove product
  };

  const submitHandler = () => {
    // Logic for submitting the cart
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

      {false ? (
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
                      {String(row.weight)}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {row.wages}
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }} align="right">
                      {"count" in row ? String(row.count || 1) : "1"}
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
            <Button onClick={submitHandler}>نهایی کردن</Button>
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
