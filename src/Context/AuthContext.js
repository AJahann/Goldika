import { createContext, useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import supabase from "../supabase/supabase";
import Loading from "../components/Loading/Loading";

export const AuthContext = createContext({
  isLogin: false,
  userInfo: {},
  login: () => {},
  logout: () => {},
  updateUserInfo: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const { data: reqRes, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: () => supabase.auth.getSession(),
  });

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

  const login = useCallback((data) => {
    if (data) {
      setIsLogin(true);
      updateUserInfo(data);
    }
  }, []);

  const logout = useCallback(() => {
    setIsLogin(false);
    setUserInfo(null);
    console.log("logout");
  }, []);

  useEffect(() => {
    if (!isLoading && reqRes.data.session) {
      login(reqRes.data.session.user);
    }
  }, [reqRes]);

  if (isLoading) return <Loading />;
  // if (isError) return <p>Oops! Check your Network</p>;

  return (
    <AuthContext.Provider
      value={{ isLogin, userInfo, login, logout, updateUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
