import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useAuth = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/auth/me", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 10000,
  });

  return {
    user: data?.userInfoResponse,
    isLoading,
    isLoggedIn: !!data,
    error,
    mutate,
  };
};
