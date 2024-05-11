import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import About from './pages/About/About';
import Faq from './pages/Questions/Faq';
import Contact from './pages/Contact/Contact';
import Panel from './pages/Panel/Panel';
import Dashboard from './pages/Panel/Dashboard/Dashboard';
import Wallet from './pages/Panel/Wallet/Wallet';
import Deposit from './pages/Panel/Deposit/Deposit';
import WithDraw from './pages/Panel/WithDraw/WithDraw';
import Trade from './pages/Panel/Trade/Trade';
import Report from './pages/Panel/Report/Report';
import OrderPikup from './pages/Panel/OrderPikup/OrderPikup';
import Page404 from './pages/Page404/Page404';

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
    element: <Panel />,
    children: [
      {
        path: '',
        element: <Navigate to={'dashboard'} />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'wallet',
        element: <Wallet />,
      },
      {
        path: 'deposit',
        element: <Deposit />,
      },
      {
        path: 'withdraw',
        element: <WithDraw />,
      },
      {
        path: 'trade',
        element: <Trade />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'order-pikup',
        element: <OrderPikup />,
      },
    ],
  },
  {
    path: '/*',
    element: <Page404 />,
  },
];

export { routes };
