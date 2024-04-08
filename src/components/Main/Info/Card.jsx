import Card from '@mui/material/Card';

export default function MultiActionAreaCard({ children }) {
  return (
    <Card
      style={{
        backgroundColor: '#373943',
        borderRadius: 16,
        padding: 27,
        margin: '12px 0',
      }}
    >
      {children}
    </Card>
  );
}
