import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import 'react-toastify/dist/ReactToastify.css';
import { GoldPriceContextProvider } from './Context/GoldPriceContext';
import { AuthContextProvider } from './Context/AuthContext';

import './assets/css/reset.css';
import './assets/css/mainStyle.css';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  const router = useRoutes(routes);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <AuthContextProvider>
      <GoldPriceContextProvider>
        <CacheProvider value={cacheRtl}>{router}</CacheProvider>
      </GoldPriceContextProvider>
    </AuthContextProvider>
  );
}
