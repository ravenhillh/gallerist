import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <img
        src="https://www.researchgate.net/profile/Dominik-Markowski-2/publication/301670799/figure/fig1/AS:668987461476355@1536510448133/Warhol-Andy-Colored-Mona-Lisa.jpg"
        alt="Warhol Mona Lisa"
      />
      <Link to="../login">Log In</Link>
      <h2>GLLRST</h2>
    </div>
  );
}

export default Home;
