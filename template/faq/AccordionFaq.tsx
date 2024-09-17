import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionFaqProps {
  title: string;
  content: string[];
}

const AccordionFaq = ({ title, content }: AccordionFaqProps) => {
  return (
    <div>
      <Accordion
        style={{
          lineHeight: "26px",
          color: "#fff",
          margin: "6px 0",
          fontWeight: "500",
          background: "black",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          style={{
            color: "#dddddd",
            fontSize: 14.4,
            textAlign: "justify",
            lineHeight: "28px",
          }}
        >
          {content}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionFaq;
