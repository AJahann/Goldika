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
import supabase from "./supabase/supabase";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

async function fetchGoldPrice() {
  let { data: GoldPrice, error } = await supabase.from("GoldPrice").select("*");

  if (error) {
    throw new Error("Failed to fetch gold price");
  }
  return GoldPrice[0];
}

export default function App() {
  const router = useRoutes(routes);
  const { updatePrices } = useContext(GoldPriceContext);
  fetchGoldPrice();
  const {
    isLoading,
    data: goldAmount,
    error,
  } = useQuery(["gold"], fetchGoldPrice);
  console.log(goldAmount);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("ارتباط با توسعه دهنده : https://github.com/AJahann");
  }, [router]);

  useEffect(() => {
    if (goldAmount) {
      updatePrices({
        goldBuyBalance: goldAmount.goldBuy,
        goldSellBalance: goldAmount.goldSell,
      });
    }
  }, [goldAmount, updatePrices]);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "white",
            margin: 12,
          }}
        >
          لطفا فیلتر شکن خود را خاموش/روشن کرده و{" "}
          <a style={{ color: "royalblue" }} href="/">
            صفحه را رفرش کنید
          </a>{" "}
          :)
        </h1>
      </div>
    );
  }

  return <CacheProvider value={cacheRtl}>{router}</CacheProvider>;
}
