import React from 'react';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import About from './pages/About/About';
import Faq from './pages/Questions/Faq';
import Contact from './pages/Contact/Contact';

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
    path: '/about',
    element: <About />,
  },
  {
    path: '/faq',
    element: <Faq />,
  },
  {
    path: '/contact',
    element: <Contact />,
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
