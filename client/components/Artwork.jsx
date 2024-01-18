import React from 'react';
import { useParams } from 'react-router-dom';

function Artwork() {
  const { imageId } = useParams();
  return (
    <div>Artwork params: {imageId}</div>
  );
}

export default Artwork;
