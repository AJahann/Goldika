import "./style/reset.css";
import "./style/mainStyle.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import CacheProviderWrapper from "@/providers/CacheProviderWrapper";
import ThemeProviderWrapper from "@/providers/ThemeProviderWrapper";
import NavBar from "@/shared/components/navBar/NavBar";
import Footer from "@/shared/components/footer/Footer";

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
        <NavBar />
        {
          <CacheProviderWrapper>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </CacheProviderWrapper>
        }
        <Footer />
      </body>
    </html>
  );
}
