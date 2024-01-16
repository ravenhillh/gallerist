import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

// '/huam/object/:imageid' --For detailed object about image
// '/huam/image/:keyword' --For an array of images

function Search() {
  const [search, setSearch] = useState('');
  // state images array
  const [images, setImages] = useState([]);

  function postToGallery(artObj) {
    // axios post
    axios.post('/db/art', {
      'art': {
        'title': artObj.title,
        'artist': artObj.people.displayname,
        'date': artObj.dated,
        'culture': artObj.culture,
        'imageId': artObj.id,
        'url': artObj.url,
        'imageUrl': artObj.primaryimageurl,
        'isForSale': false, 
        'price': 0,
      }
    }).then()
      .catch();
  }

  function keywordSearch(term) {
    axios(`/huam/image/${term}`)
      .then((response) => {
        // console.log('images: ', response.data);
        setImages(response.data);
      })
      .catch((err) => console.error(err));
  }

  // onClick will call idSearch
  function idSearch(id) {
    axios(`/huam/object/${id}`)
      .then(({ data }) => {
        console.log('obj: ', data);
        console.log('title ', data[0].title);
        // add post to db function here
        // postToGallery(data[0]);
      })
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
      <ul>
        {
          images.map((image) => (
            <li
              key={image.id}
            >
              <img
                style={{ width: '250px', height: 'auto' }}
                src={image.baseimageurl}
                id={image.id}
                alt={image.alttext}
              />
              <button
                type="submit"
                onClick={() => idSearch(image.id)}
              >
                ❤️
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Search;
