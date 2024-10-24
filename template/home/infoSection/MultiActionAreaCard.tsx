import { Card } from "@mui/material";

const MultiActionAreaCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      style={{
        backgroundColor: "#373943",
        borderRadius: 16,
        padding: 27,
        margin: "12px 0",
      }}
    >
      {children}
    </Card>
  );
};

export default MultiActionAreaCard;
