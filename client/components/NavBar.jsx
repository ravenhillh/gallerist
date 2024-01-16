import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="search">Search</NavLink>
      <br />
      <NavLink to="profile">Profile</NavLink>
      <br />
      <NavLink to="gallery">Gallery</NavLink>
      <br />
      <NavLink to="auction">Auction</NavLink>
      <br />
      <form action="/logout" method="post">
        <button type="submit">Sign out</button>
      </form>
      <Outlet />
    </nav>
  );
}

export default NavBar;
