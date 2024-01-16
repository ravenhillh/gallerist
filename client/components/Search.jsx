import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// '/huam/object/:imageid' --For detailed object about image
// '/huam/image/:keyword' --For an array of images

function Search() {
  const [search, setSearch] = useState('');
  // state images array
  const [images, setImages] = useState([]);

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
        // add post to db function here
      })
      .catch((err) => console.error(err));
  }

  // function to send axios POST req when item is clicked/liked
  // endpoint '/db/art'
  /**
   * All of these fields are available in art object returned from GET: 'huam/object/:id'
  title: data.title
  artist: data.people.displayname
  artistDate: String,
  altText: String,
  description: String,
  century: data.dated
  date: data.dateend
  culture: data.culture
  imageId: data.id
  url: data.url
  imageUrl: data.primaryimageurl
  isForSale: False, //initialize to false
  */
  // function postToFavorites(e) {
  //   // console.log(e.id);
  //   // can access id from event click
  //   // use idSearch to get art obj, build functionality of idSearch
  //   // then axios post to db
  // }

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
