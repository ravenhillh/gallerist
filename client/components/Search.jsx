import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import SearchItem from './SearchItem';

// '/huam/object/:imageid' --For detailed object about image
// '/huam/image/:keyword' --For an array of images

function Search() {
  const [search, setSearch] = useState('');
  // state images array
  const [images, setImages] = useState([]);

  // axios post request to user's gallery
  function postToGallery(artObj) {
    axios.post('/db/art', {
      art: {
        title: artObj.title,
        artist: artObj.people[0].displayname,
        date: artObj.dated,
        culture: artObj.culture,
        imageId: artObj.id,
        url: artObj.url,
        imageUrl: artObj.images[0].baseimageurl,
        isForSale: false,
        price: 0,
      },
    }).then(() => {
      console.log('succesfully posted to db');
      // redirect to gallery?
    })
      .catch((err) => {
        console.error('Could not post to gallery ', err);
      });
  }

  function keywordSearch(term) {
    axios(`/huam/image/${term}`)
      .then((response) => {
        // console.log(response);
        setImages(response.data);
      })
      .catch((err) => console.error(err));
  }

  // handleClick will call idSearch
  function idSearch(id) {
    axios(`/huam/object/${id}`)
      .then(({ data }) => {
        // console.log(data);
        if (data[0].images.length === 0) {
          // console.log(': (');
          alert('Sorry this piece is no longer available');
        }
        return postToGallery(data[0]);
      })
      .catch((err) => console.error(err));
  }
  // handleClick function allows ability to pass down idSearch as props using useCallback
  const handleClick = useCallback((id) => {
    idSearch(id);
  });

  useEffect(() => {
    keywordSearch('dog');
  }, []);

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
          setSearch('');
        }}
      >
        Search by Keyword
      </button>
      <ul style={{ listStyleType: 'none' }}>
        {
          images.map((image) => (
            <SearchItem
              image={image}
              key={image.id}
              idSearch={handleClick}
            />
          ))
        }
      </ul>
    </div>
  );
}

{/* <button
type="button"
onClick={() => {
  // console.log('imageid: ', search);
  idSearch(search);
}}
>
Search by imageid
</button> */}

export default Search;
