import { Button } from "@mui/material";

const Report = () => {
  return (
    <div className="panel-report">
      <div className="panel-wrap">
        <div className="panel-report-top">
          <h2 className="panel-title">گزارش</h2>
          <Button
            style={{ backgroundColor: "rgb(84, 84, 84)", borderRadius: 8 }}
            disabled
            variant="contained"
          >
            فیلتر ها
          </Button>
        </div>
        <div className="panel-report-container">
          <p>هیچ گزارشی یافت نشد.</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
