import React from 'react';
import axios from 'axios';

function GalleryListItem({ image }) {
  // add a friend to users friend array
  function addFriend() {
    axios.put('/db/friends', { friend: image.userGallery.name })
      .then(() => console.log('added friend!'))
      .catch((err) => console.log(err, 'friend not added'));
  }

  return (
    <div>
      <img
        style={{ width: '250px', height: 'auto' }}
        src={image.imageUrl}
        id={image.imageId}
        alt={image.title}
      />
      <h1>
        Title:
        {' '}
        {image.title}
      </h1>
      <div>
        Artist:
        {' '}
        {image.artist}
      </div>
      <div>
        Date:
        {' '}
        {image.date}
      </div>
      <div>
        User:
        {' '}
        {image.userGallery[0].name}
      </div>
    </div>
  );
}

export default GalleryListItem;
