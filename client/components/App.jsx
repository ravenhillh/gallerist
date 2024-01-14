import React, { useState } from 'react';
import axios from 'axios';

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
      <form
        method="post"
        onSubmit={() => {
          axios.post('./logout')
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }}
      >
        <button
          type="submit"
          >
          Log out
        </button>

      </form>
      <form action="/logout" method="post">
        <button type="submit">Sign out Pure HTML</button>
        {/* <input type="hidden" name="altbutton" value="altbutton" /> */}
      </form>
    </div>
  );
}

export default App;
