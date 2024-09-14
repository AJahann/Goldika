import "./style/reset.css";
import "./style/mainStyle.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

// eslint-disable-next-line import/extensions, import/no-unresolved
import CacheProviderWrapper from "@/providers/CacheProviderWrapper";

const vazir = localFont({
  src: "./fonts/vazire.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Goldika",
  description: "created by @Ajahann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        {<CacheProviderWrapper>{children}</CacheProviderWrapper>}
      </body>
    </html>
  );
}
