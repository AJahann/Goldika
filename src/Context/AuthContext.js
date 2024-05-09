import { createContext, useCallback, useEffect, useState } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  token: '',
  userInfo: {},
  login: () => {},
  logout: () => {},
  updateUserInfo: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '0',
    name: '0',
    family: '0',
    number: '0',
    pass: '0',
    pocket: {
      walletBalance: '0',
      goldWalletBalance: '0',
      cart: [],
      cards: [],
    },
  });

  const updateUserInfo = useCallback((userInfo) => {
    userInfo && setUserInfo(userInfo);
  }, []);

  const login = useCallback((userInfo, token) => {
    if (userInfo && token) {
      setIsLogin(true);
      setToken(token);
      updateUserInfo(userInfo);
      const expiryDate = new Date(
        new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
      );
      document.cookie = `token=${token}; expires=${expiryDate.toUTCString()}; path=/; Priority=High`;
    }
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
    setToken('');
    setUserInfo({});
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }, []);

  useEffect(() => {
    const cookieToken = document.cookie.split('=')[1];
    if (cookieToken) {
      fetch(`https://goldikaserver.liara.run/users/${cookieToken}`)
        .then((res) => res.json())
        .then((res) => {
          login(res, res.id);
        })
        .catch((res) => {
          logout();
        });
    }
  }, [login, logout]);

  return (
    <AuthContext.Provider
      value={{ isLogin, token, userInfo, login, logout, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
