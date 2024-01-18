import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import Search from './Search';
import Gallery from './Gallery';
import NavBar from './NavBar';
import Auction from './Auction';
import Profile from './Profile';
import Artwork from './Artwork';

const App = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <Search />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'auction',
        element: <Auction />,
      },
      {
        path: 'art/:imageId',
        element: <Artwork />,
      },
    ],
  },
]);

export default App;
