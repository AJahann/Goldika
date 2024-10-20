import "./style/reset.css";
import "./style/mainStyle.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import CacheProviderWrapper from "@/providers/CacheProviderWrapper";
import ThemeProviderWrapper from "@/providers/ThemeProviderWrapper";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Toaster } from "react-hot-toast";

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
        {
          <CacheProviderWrapper>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </CacheProviderWrapper>
        }
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
