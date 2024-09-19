"use client";
import { Alert, Box, Button } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import styles from "./orderpickup.module.css";

import productsData from "@/data/productsData";
import UserCard from "./UserCart";
import OrderFilters from "./OrderPickUpFilters";

const ProductBox = ({ name, src }: { name: string; src: string }) => {
  return (
    <Box className={styles.panelOrderPikupItem}>
      <div className={styles.panelOrderPikupItemImg}>
        <img src={`./../images/panel/${src}.webp`} alt="طلا" />
      </div>
      <div className={styles.panelOrderPikupItemTxt}>
        <p>{name}</p>
        <Button variant="outlined" style={{ borderRadius: 8, height: 31 }}>
          افزودن به سبد
        </Button>
      </div>
    </Box>
  );
};

const OrderPickUpPage = () => {
  return (
    <div className={styles.panelOrderPikup}>
      <div className={styles.panelWrap}>
        <div className={styles.panelOrderPikupContainer}>
          <div className={styles.panelOrderPikupTopbar}>
            <div>
              <h2 className={styles.panelTitle}>دریافت طلا</h2>
              <p>موجودی طلا: {new Intl.NumberFormat("fa").format(0)} گرم</p>
            </div>
            <div>
              <Button
                style={{
                  borderRadius: 8,
                  boxShadow: "none",
                  fontWeight: "bold",
                }}
                variant="contained"
              >
                فیلترها
              </Button>
              <Button
                style={{ borderRadius: 8, boxShadow: "none" }}
                variant="contained"
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
              {productsData.map((item) => (
                <ProductBox key={item.id} name={item.name} src={item.imgSrc} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <UserCard isOpen={false} onClose={() => {}} cart={[]} />
      <OrderFilters
        isOpen={false}
        onClose={() => {}}
        data={[]}
        setData={() => {}}
      />
    </div>
  );
};

export default OrderPickUpPage;
