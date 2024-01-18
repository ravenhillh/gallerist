import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Profile() {
  // Initialize three main parts of profile page
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);
  const [gallery, setGallery] = useState([]);

  const [reload, setReload] = useState(false);

  // Get request to return User profile, sets name and friends State
  function getProfile() {
    return axios
      .get('/db/user/')
      .then(({ data }) => {
        setName(data.name);
        setFriends(data.friends);
      })
      .catch((err) => console.error('Could not GET user profile: ', err));
  }

  // Get request to return Art documents connected to User, sets gallery State
  function getUserGallery() {
    return axios
      .get('/db/userArt/')
      .then(({ data }) => {
        setGallery(data);
      })
      .catch((err) => console.error('Could not Get art by user: ', err));
  }

  // Initializing state on first render
  useEffect(() => {
    getProfile();
    getUserGallery();
  }, []);

  // Re-render component when User document changes, i.e. friend deleted
  useEffect(() => {
    if (reload) {
      getProfile();
    }
  }, [reload]);

  // const [price, setPrice] = useState(0);

  // Updates art object by changing isForSale field to true
  function putSale(event) {
    // setPrice(prompt('Set a price:'));
    axios
      .put(`/db/art/${event.target.value}`, {
        isForSale: true,
      })
      .then(() => getUserGallery())
      .catch((err) => console.error('Could not Put update on artwork: ', err));
  }

  // Delete friend from friends' array on User document
  function unFriend(event) {
    axios.put('db/unfriend/', { friend: event.target.value })
      .then(() => setReload(true))
      .catch((err) => console.error('Could not unfriend: ', err));
  }

  // Deletes art object, then updates gallery State by invoking getUserGallery
  function deleteArt(event) {
    axios
      .delete(`/db/art/${event.target.value}`)
      .then(() => getUserGallery())
      .catch((err) => console.error('Could not Delete art: ', err));
  }

  // Iterate over friends array, could be improved by linking to friend's gallery perhaps
  const friendsDiv = friends.length ? (
    <ul>
      {friends.map((pal, i) => (
        <li key={`${pal}-${i}`}>
          {pal}
          <button type="button" value={pal} onClick={unFriend}>
            X
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div>You have no friends.</div>
  );

  // Iterates over gallery array, creates list with a couple of buttons, links to image
  const artDiv = gallery ? (
    <>
      <ul>
        {gallery
          .filter((art) => !art.isForSale)
          .map((art, i) => (
            <li key={`${art}-${i}`}>
              <button type="button" value={art.imageId} onClick={putSale}>
                Sell
              </button>
              <a href={art.imageUrl}>{art.title}</a>
              {' - '}
              {art.artist}
              <Link to={`/art/${art.imageId}`}>{art.imageId}</Link>
              <button type="button" value={art.imageId} onClick={deleteArt}>
                X
              </button>
            </li>
          ))}
      </ul>
      <h4>Your Art For Sale:</h4>
      <ul>
        {gallery
          .filter((art) => art.isForSale)
          .map((art, i) => (
            <li key={`${art}-${i}`}>
              <button type="button" value={art.imageId} onClick={putSale}>
                Sell
              </button>
              <a href={art.imageUrl}>{art.title}</a>
              {' - '}
              {art.artist}
              <button type="button" value={art.imageId} onClick={deleteArt}>
                X
              </button>
            </li>
          ))}
      </ul>
    </>
  ) : (
    <div>You have 0 artworks.</div>
  );

  return (
    <>
      <h2>{name}</h2>
      <h3>Friends:</h3>
      {friendsDiv}
      <h3>Artworks:</h3>
      {artDiv}
    </>
  );
}

export default Profile;
