import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';
import Search from './Search';
import Gallery from './Gallery';
import NavBar from './NavBar';
import Auction from './Auction';
import Profile from './Profile';
import Home from './Home';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <NavBar />,
    children: [
      {
        path: '/home',
        element: <Search />,
      },
      {
        path: '/home/search',
        element: <Search />,
      },
      {
        path: '/home/login',
        element: <Login />,
      },
      {
        path: '/home/profile',
        element: <Profile />,
      },
      {
        path: '/home/gallery',
        element: <Gallery />,
      },
      {
        path: '/home/auction',
        element: <Auction />,
      },
    ],
  },
]);

export default App;
