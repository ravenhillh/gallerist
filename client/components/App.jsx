import React from 'react';
import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import Search from './Search';
import Gallery from './Gallery';
import NavBar from './NavBar';
import Auction from './Auction';
import Profile from './Profile';

function getAuction() {
  return axios.get('/db/auction/')
    .then((response) => response.data)
    .catch((err) => console.error('Could not GET auction items: ', err));
}

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
        loader: getAuction,
      },
    ],
  },
]);

export default App;
