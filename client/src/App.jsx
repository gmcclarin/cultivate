import { Button, Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Cultivate 🌱
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to your intentional growth space.
      </Typography>
      <Button variant="contained">Get Started</Button>
    </Container>
  );
}

export default App;
