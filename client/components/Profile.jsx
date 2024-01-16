import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Profile() {
  const { name, friends, gallery } = useLoaderData();

  const [username, setUsername] = useState('');

  const friendsDiv = friends.length ? (
    <ul>
      {friends.map((pal, i) => (
        <li key={`${pal}-${i}`}>{pal}</li>
      ))}
    </ul>
  ) : (
    <div>You have no friends.</div>
  );

  const artDiv = gallery
    ? (
      <ul>
        {gallery.map((art, i) => (
          <li key={`${art}-${i}`}>
            <a href={art.imageUrl}>{art.title}</a>
            {' - '}
            {art.artist}
          </li>
        ))}
      </ul>
    )
    : <div>You have 0 artworks.</div>;

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
