import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import './assets/css/reset.css';
import './assets/css/mainStyle.css';
import 'react-toastify/dist/ReactToastify.css';

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
    <>
      <CacheProvider value={cacheRtl}>{router}</CacheProvider>
    </>
  );
}
