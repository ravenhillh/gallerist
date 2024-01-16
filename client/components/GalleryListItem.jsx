import React from 'react';

function GalleryListItem({ image }) {
  return (
    <div>
      <h1>{image.title}</h1>
      <img
        style={{ width: '250px', height: 'auto' }}
        src={image.imageUrl}
        id={image.imageId}
        alt={image.title}
      />
    </div>
  );
}

export default GalleryListItem;
