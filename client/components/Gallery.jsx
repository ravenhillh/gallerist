import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GalleryListItem from './GalleryListItem';

function Gallery() {
  // use useState to define an images array and method to store and update gallery images
  const [images, setImages] = useState([]);
  // use an axios request to get the 25? most recent saved images from art db
  const get25RecentImages = () => {
    axios('/db/art')
      .then((art) => {
        console.log(art);
        setImages(art.data);
      })
      .catch((err) => console.log(err));
  };
  // use an axios request to get a list of filtered images from art db based on friends or some key
  // pass in a word to filter by, possibly a friend's username
  const getFilteredImages = (filter) => {
    axios(`/db/art/${filter}`)
      .then((art) => {
        setImages(art);
      })
      .catch((err) => console.log(err));
  };
  // put the initial db request into useEffect to auto render images when you get to page
  useEffect(() => {
    get25RecentImages();
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <ul>
        {
        images.map((image) => <GalleryListItem image={image} key={image.id} />)
       }
      </ul>
    </div>
  );
}

export default Gallery;
