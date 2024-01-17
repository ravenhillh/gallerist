import React, { useState } from 'react';
import axios from 'axios';

function AuctionItem({ art, setSale }) {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(true);
  const onLeave = () => setHover(false);

  function bidClick(event) {
    axios
      .put(`/db/art/${event.target.value}`, {
        isForSale: false,
      })
      .then(() => setSale(false))
      .catch((err) => console.error('Could not Put update on artwork: ', err));
  }

  return (
    <div>
      {hover ? <div>{art.title}</div> : <div> </div>}
      <img
        style={{ width: '250px', height: 'auto' }}
        src={art.imageUrl}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        alt={art.title}
      />
      <button onClick={bidClick} value={art.imageId} type="button">
        Buy
      </button>
    </div>
  );
}

export default AuctionItem;
