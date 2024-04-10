import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';

import './assets/css/reset.css';
import './assets/css/mainStyle.css';

export default function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}
