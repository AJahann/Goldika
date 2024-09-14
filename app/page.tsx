"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Home = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <div>
        <h1>تست متن موجود</h1>
      </div>
    </CacheProvider>
  );
};

export default Home;
