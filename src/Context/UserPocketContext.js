import { createContext, useState } from 'react';

export const UserPocketContext = createContext({
  walletBalance: '0',
  goldWalletBalance: '0.000',
  cards: [],
  cart: [],
  updateUserPocket: () => {},
});

export const UserPocketProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState('0');
  const [goldWalletBalance, setGoldWalletBalance] = useState('0.000');
  const [cart, setCart] = useState([]);
  const [cards, setCards] = useState([]);

  const updateUserPocket = ({
    walletBalance,
    goldWalletBalance,
    cards,
    cart,
  }) => {
    walletBalance && setWalletBalance(walletBalance);
    goldWalletBalance && setGoldWalletBalance(goldWalletBalance);
    cards && setCards(cards);
    cart && setCart(cart);
  };

  return (
    <UserPocketContext.Provider
      value={{
        walletBalance,
        goldWalletBalance,
        updateUserPocket,
        cards,
        cart,
      }}
    >
      {children}
    </UserPocketContext.Provider>
  );
};
