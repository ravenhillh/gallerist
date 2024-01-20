import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Login from './Login';

function Home() {
  return (
    <Container
      className="home"
      align="center"
      style={{ paddingTop: '100px' }}
    >
      <Card
        className="home-card"
        style={{ width: '25rem' }}
      >
        <Card.Img
          variant="top"
          src="https://i.imgur.com/GUmlJan.jpg"
          alt="Warhol Mona Lisa"
        />
        <Card.Body>
          <Card.Title
            className="home-title"
          >
            <strong>GLLRST</strong>
          </Card.Title>
          <Login />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
