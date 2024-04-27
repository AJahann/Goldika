import { createContext } from 'react';

export const AuthContext = createContext({
  isLogin: false,
  token: '',
  userInfo: {},
  login: () => {},
  logout: () => {},
});
