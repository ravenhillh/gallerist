import { createRoot } from 'react-dom/client';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import App from './components/App';

const domNode = document.getElementById('app');
const root = createRoot(domNode);

root.render(<RouterProvider router={App} />);
