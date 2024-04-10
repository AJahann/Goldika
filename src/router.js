import React from 'react';
import Home from './pages/Home/Home';

let routes = [
  {
    path: '/',
    element: <Home />,
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
