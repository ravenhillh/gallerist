import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// '/huam/object/:imageid' --For detailed object about image
// '/huam/image/:keyword' --For an array of images

function Search() {
  const [search, setSearch] = useState('');
  // state images should be an array, useState should take in an empty array
  // an array of objects, which has the image link, id (which will be set to key)
  // useEffect(?) to load images on click of search button
  const [images, setImages] = useState([]);

  function keywordSearch(term) {
    axios(`/huam/image/${term}`)
      .then((response) => {
        console.log('images: ', response.data);
        setImages(images.concat(response.data));
      })
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
          // console.log('keyword: ', search);
          keywordSearch(search);
        }}
      >
        Search by Keyword
      </button>
      <button
        type="button"
        onClick={() => {
          // console.log('imageid: ', search);
          idSearch(search);
        }}
      >
        Search by imageid
      </button>
      <Link to="gallery">Gallery</Link>
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
      <ul>
        {
          images.map((image) => (
            <li
              key={image.id}
            >
              <img
                style={{ width: '250px', height: 'auto' }}
                src={image.baseimageurl}
                alt="sky painting"
                // onClick={console.log(img.id)}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Search;
