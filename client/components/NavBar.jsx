import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="search" activeClassName="active">Search</NavLink>
      <br />
      <NavLink to="profile" activeClassName="active">Profile</NavLink>
      <br />
      <NavLink to="gallery" activeClassName="active">Gallery</NavLink>
      <br />
      <NavLink to="auction" activeClassName="active">Auction</NavLink>
      <br />
      <form action="/logout" method="post">
        <button type="submit">Sign out</button>
      </form>
      <Outlet />
    </nav>
  );
}

export default NavBar;
