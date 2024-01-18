import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import Login from './Login';

function Home() {
  return (
    <Container className="home" align="center">
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src="https://www.researchgate.net/profile/Dominik-Markowski-2/publication/301670799/figure/fig1/AS:668987461476355@1536510448133/Warhol-Andy-Colored-Mona-Lisa.jpg"
          alt="Warhol Mona Lisa"
        />
        <Card.Body>
          <Card.Title>GLLRST</Card.Title>
          <Login />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
