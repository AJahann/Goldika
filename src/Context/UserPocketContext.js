import { createContext } from 'react';

export const UserPocketContext = createContext({
  walletBalance: '0',
  goldWalletBalance: '0.000',
  cart: {},
});
