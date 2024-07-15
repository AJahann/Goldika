import React, { useContext, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./router";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "react-toastify/dist/ReactToastify.css";
import { GoldPriceContext } from "./Context/GoldPriceContext";
import { useQuery } from "react-query";
import Loading from "./components/Loading/Loading";

import "./assets/css/reset.css";
import "./assets/css/mainStyle.css";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

async function fetchGoldPrice() {
  const response = await fetch("https://goldikaserver2.liara.run/gold");
  if (!response.ok) {
    throw new Error("Failed to fetch gold price");
  }
  return response.json();
}

export default function App() {
  const router = useRoutes(routes);
  const { updatePrices } = useContext(GoldPriceContext);
  const { isLoading, data: goldAmount, error } = useQuery([], fetchGoldPrice);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("ارتباط با توسعه دهنده : https://github.com/AJahann");
  }, [router]);

  useEffect(() => {
    if (goldAmount) {
      updatePrices({
        goldBuyBalance: goldAmount.buy,
        goldSellBalance: goldAmount.sell,
      });
    }
  }, [goldAmount, updatePrices]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <CacheProvider value={cacheRtl}>{router}</CacheProvider>;
}
