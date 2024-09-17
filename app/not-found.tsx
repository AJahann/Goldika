import { Button } from "@mui/material";
import Link from "next/link";

const NotFound = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: 40,
        color: "#fff",
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* <h1>نبوده</h1>
      <br />
      <h1>نیست</h1>
      <br />
      <h1>نخواهد بود</h1> */}
      <h1>اینجا چیزی نیست...</h1>
      <Link href="/">
        <Button
          variant="outlined"
          style={{
            maxWidth: 200,
            marginTop: 60,
            color: "var(--primary-color)",
            borderColor: "var(--primary-color)",
          }}
        >
          بازگشت به صفحه اصلی
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
