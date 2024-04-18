import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import About from './pages/About/About';
import Faq from './pages/Questions/Faq';
import Contact from './pages/Contact/Contact';
import Panel from './pages/Panel/Panel';

const routes = [
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
    path: '/panel',
    children: [
      {
        path: '',
        element: <Navigate to={'dashboard'} />,
      },
      {
        path: 'dashboard',
        element: <Panel />,
      },
    ],
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
