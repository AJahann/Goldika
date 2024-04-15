import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionFaq({ title, children }) {
  return (
    <div>
      <Accordion
        style={{
          lineHeight: '26px',
          color: '#fff',
          margin: '6px 0',
          fontWeight: '500',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          {title}
        </AccordionSummary>
        <AccordionDetails
          style={{
            color: '#dddddd',
            fontSize: 14.4,
            textAlign: 'justify',
            lineHeight: '28px',
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
