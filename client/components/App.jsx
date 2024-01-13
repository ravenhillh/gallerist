import React, { useState } from 'react';

import { getArtImages, getArtObj } from '../../server/api/huam';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" onClick={() => console.log(search)}>
        Search for Art
      </button>
    </div>
  );
}

export default App;
