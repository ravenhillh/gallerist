import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <Link to="profile">Profile</Link>
      <br />
      <Link to="gallery">Gallery</Link>
      <br />
      <Link to="auction">Auction</Link>
      <br />
      <form action="/logout" method="post">
        <button type="submit">Sign out</button>
      </form>
      <Outlet />
    </div>
  );
}

export default NavBar;
