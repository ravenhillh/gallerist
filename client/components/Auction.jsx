import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

function Auction() {
  const auctionArray = useLoaderData();
  // const [auctionArray, setAuctionArray] = useState([]);

  // function getAuction() {
  //   return axios.get('/db/auction/')
  //     .then((response) => {
  //       setAuctionArray(response.data);
  //     })
  //     .catch((err) => console.error('Could not GET auction items: ', err));
  // }

  // useEffect(() => {
  //   getAuction();
  // }, []);

  function bidClick(event) {
    console.log('clicked on: ', event);
    // axios
    //   .put(`/db/art/${event.target.value}`, {
    //     isForSale: false,
    //     userGallery
    //   })
    //   .catch((err) => console.error('Could not Put update on artwork: ', err));
  }

  const auctionItems = auctionArray.map((art) => {
    const [hover, setHover] = useState(false);
    const onHover = () => setHover(true);
    const onLeave = () => setHover(false);

    return (
      <div key={art.imageId}>
        {hover ? <div>{art.title}</div> : <div> </div>}
        <img
          style={{ width: '250px', height: 'auto' }}
          src={art.imageUrl}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          alt={art.title}
        />
        <button onClick={bidClick} value={art.imageId} type='button'>
          Buy
        </button>
      </div>
    );
  });

  return <span>{auctionItems}</span>;
}

export default Auction;
