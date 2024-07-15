import { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLogin: false,
  userInfo: {},
  login: () => {},
  logout: () => {},
  updateUserInfo: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const updateUserInfo = useCallback((data) => {
    data &&
      setUserInfo({
        name: data.user_metadata.name,
        number: data.phone.slice(2),
        pocket: data.user_metadata.pocket,
      });
  }, []);

  const login = useCallback(
    (data) => {
      if (data) {
        setIsLogin(true);
        updateUserInfo(data);
      }
    },
    [updateUserInfo],
  );

  const logout = useCallback(() => {
    setIsLogin(false);
    setUserInfo(null);
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{ isLogin, userInfo, login, logout, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
