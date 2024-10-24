import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

import style from "./Info.module.css";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  icon,
}) => {
  return (
    <div className={style.infoCard}>
      <CardMedia component="svg" height="190">
        {icon}
      </CardMedia>
      <CardContent style={{ padding: "0" }}>
        <Typography
          style={{ color: "#ffffff", margin: "14px 0", lineHeight: "34px" }}
          fontSize={28}
          gutterBottom
          component="div"
        >
          {title}
        </Typography>
        <Typography
          style={{ color: "#ffffff" }}
          fontSize={16}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions className={style.infoCardBtn}>
        <Button size="small" color="primary">
          {buttonText}
          <ArrowBackIosNew style={{ fontSize: "14px" }} />
        </Button>
      </CardActions>
    </div>
  );
};

export default InfoCard;
