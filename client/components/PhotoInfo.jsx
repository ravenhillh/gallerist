import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Image from 'react-bootstrap/Image';

function PhotoInfo() {
  const { imageId } = useParams();
  const [currPhoto, changePhoto] = useState([]);

  function getPhotoInfo() {
    axios(`/db/artwork/${imageId}`)
      .then((results) => {
        changePhoto(results.data[0]);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPhotoInfo();
  }, []);

  return (
    <div>
      <Image fluid alt={currPhoto.title} src={currPhoto.imageUrl} />
      <h1 id="PhotoInfo">{currPhoto.title}</h1>
      <ul>
        <li>
          Title:
          {' '}
          {currPhoto.title}
        </li>
        <li>
          Artist:
          {' '}
          {currPhoto.artist}
        </li>
        <li>
          Date:
          {' '}
          {currPhoto.date}
        </li>
        <li>
          Culture:
          {' '}
          {currPhoto.culture}
        </li>
      </ul>
    </div>
  );
}

export default PhotoInfo;
