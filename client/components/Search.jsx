import React, { useState } from 'react';
import axios from 'axios';
// '/huam/object/:imageid' --For detailed object about image
// '/huam/image/:keyword' --For an array of images

function Search() {
  const [search, setSearch] = useState('');

  function keywordSearch(term) {
    axios(`/huam/image/${term}`)
      .then((response) => console.log('images: ', response.data))
      .catch((err) => console.error(err));
  }

  function idSearch(id) {
    axios(`/huam/object/${id}`)
      .then((response) => console.log('obj: ', response.data))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          console.log('keyword: ', search);
          keywordSearch(search);
        }}
      >
        Search by Keyword
      </button>
      <button
        type="button"
        onClick={() => {
          console.log('imageid: ', search);
          idSearch(search);
        }}
      >
        Search by imageid
      </button>
      {/* <form
        method="post"
        onSubmit={() => {
          axios.post('./logout')
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
        }}
      >
        <button type="submit">
          Log out
        </button>
      </form> */}
      <form action="/logout" method="post">
        <button type="submit">Sign out Pure HTML</button>
        {/* <input type="hidden" name="altbutton" value="altbutton" /> */}
      </form>
    </div>
  );
}

export default Search;
