import React from 'react';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';

let routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/*',
    element: (
      <div
        style={{
          textAlign: 'center',
          fontSize: 100,
          color: '#fff',
          marginTop: 50,
        }}
      >
        404
      </div>
    ),
  },
];

export { routes };
