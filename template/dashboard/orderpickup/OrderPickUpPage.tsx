"use client";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import styles from "./orderpickup.module.css";

import productsData from "@/data/productsData";
import UserCard from "./UserCart";
import OrderFilters from "./OrderPickUpFilters";
import { useAuth } from "@/shared/hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import BigNumber from "bignumber.js";

const ProductBox = ({
  name,
  src,
  productAddCardHandler,
  isLoading,
}: {
  name: string;
  src: string;
  productAddCardHandler: () => void;
  isLoading: boolean;
}) => {
  return (
    <Box className={styles.panelOrderPikupItem}>
      <div className={styles.panelOrderPikupItemImg}>
        <img src={`./../images/panel/${src}.webp`} alt="طلا" />
      </div>
      <div className={styles.panelOrderPikupItemTxt}>
        <p>{name}</p>
        <Button
          onClick={productAddCardHandler}
          variant="outlined"
          style={{ borderRadius: 8, height: 31 }}
        >
          {isLoading ? <CircularProgress size={24} /> : "افزودن به سبد"}
        </Button>
      </div>
    </Box>
  );
};

const OrderPickUpPage = () => {
  const { user, mutate } = useAuth();
  const userCart = user?.user_metadata?.cart ?? [];
  const userGold = new BigNumber(user?.user_metadata?.pocket?.gold || 0);

  const [products, setProducts] = useState(productsData);
  const [loadingStates, setLoadingStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const productAddCardHandler = async (id: number) => {
    if (isProcessing) {
      toast.error("درحال انجام عملیات لطفا منتظر بمانید.");
      return;
    }

    const product = productsData.find((p) => p.id === id);
    if (!product) {
      toast.error("محصول مورد نظر یافت نشد.");
      return;
    }

    const productGold = new BigNumber(product.weight || 0);
    if (userGold.isLessThan(productGold)) {
      toast.error("موجودی شما کافی نمی‌باشد.");
      return;
    }

    const updatedCart = userCart.map((item: { id: number; count: number }) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    const isProductInCart = userCart.some(
      (item: { id: number }) => item.id === id,
    );

    if (!isProductInCart) {
      updatedCart.push({ ...product, count: 1 });
    }

    setLoadingStates((prev) => ({ ...prev, [id]: true }));
    setIsProcessing(true);

    try {
      const response = await axios.post("/api/auth/me", {
        userId: user.user_id,
        user_metadata: {
          ...user.user_metadata,
          cart: updatedCart,
          pocket: {
            ...user.user_metadata.pocket,
            gold: userGold.minus(productGold).toFixed(),
          },
        },
      });

      if (response.data.success) {
        await mutate();
        toast.success("محصول به سبد خرید اضافه شد.");
      } else {
        toast.error("افزودن محصول به سبد خرید با خطا مواجه شد.");
      }
    } catch (error) {
      toast.error("درخواست با خطا مواجه شد.");
      console.error("An error occurred:", error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.panelOrderPikup}>
      <div className={styles.panelWrap}>
        <div className={styles.panelOrderPikupContainer}>
          <div className={styles.panelOrderPikupTopbar}>
            <div>
              <h2 className={styles.panelTitle}>دریافت طلا</h2>
              <p>
                موجودی طلا:{" "}
                {new Intl.NumberFormat("fa").format(userGold.toNumber())} گرم
              </p>
            </div>
            <div>
              <Button
                style={{
                  borderRadius: 8,
                  boxShadow: "none",
                  fontWeight: "bold",
                }}
                onClick={() => setIsOpenFilters(true)}
                variant="contained"
              >
                فیلترها
              </Button>
              <Button
                style={{ borderRadius: 8, boxShadow: "none" }}
                variant="contained"
                onClick={() => setIsOpenCart(true)}
              >
                <LocalGroceryStoreOutlinedIcon />
              </Button>
            </div>
          </div>

          <div className={styles.panelOrderPikupContent}>
            <div className={styles.panelOrderPikupAlert}>
              <Alert
                severity="info"
                style={{
                  borderRadius: 16,
                  maxWidth: "63rem",
                  background: "#071318 !important",
                  color: "#b8e7fb",
                }}
              >
                تحویل طلا به صورت حضوری و در شعبه اداری گلدیکا صورت می‌گیرد. به
                علت محدودیت‌های ارسال پستی طلا و جواهر، امکان ارسال به صورت پستی
                یا پیک میسر نمی‌باشد.
              </Alert>
            </div>
            <div className={styles.panelOrderPikupItems}>
              {products.map((item) => (
                <ProductBox
                  productAddCardHandler={() => productAddCardHandler(item.id)}
                  isLoading={loadingStates[item.id] || false}
                  key={item.id}
                  name={item.name}
                  src={item.imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <UserCard
        isOpen={isOpenCart}
        onClose={() => setIsOpenCart(false)}
        cart={userCart}
      />
      <OrderFilters
        isOpen={isOpenFilters}
        onClose={() => setIsOpenFilters(false)}
        data={products}
        setData={setProducts}
      />
    </div>
  );
};

export default OrderPickUpPage;
