import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from './router';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { AuthContext } from './Context/AuthContext';

import './assets/css/reset.css';
import './assets/css/mainStyle.css';
import 'react-toastify/dist/ReactToastify.css';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App() {
  const router = useRoutes(routes);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({});

  const login = (userInfo, token) => {
    setIsLogin(true);
    setToken(token);
    setUserInfo(userInfo);
    const expiryDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    document.cookie = `token=${token}; expires=${expiryDate.toUTCString()}; path=/; Priority=High`;
  };

  const logout = () => {
    setIsLogin(false);
    setToken('');
    setUserInfo({});
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <AuthContext.Provider value={{ login, logout, isLogin, token, userInfo }}>
      <CacheProvider value={cacheRtl}>{router}</CacheProvider>
    </AuthContext.Provider>
  );
}
