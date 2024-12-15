// pages/_app.tsx
import "./style/reset.css";
import "./style/mainStyle.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

import CacheProviderWrapper from "@/providers/CacheProviderWrapper";
import ThemeProviderWrapper from "@/providers/ThemeProviderWrapper";
import { Toaster } from "react-hot-toast";
import ServiceWorkerRegistration from "@/providers/ServiceWorkerRegistration";

const vazir = localFont({
  src: "./fonts/vazire.ttf",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Goldika",
  description: "created by @Ajahann",
  openGraph: {
    title: "Goldika - Buy and Sell Gold",
    description:
      "Experience seamless gold trading on Goldika. Created by @Ajahann (on GITHUB).",
    url: "https://goldika.vercel.app/",
    siteName: "Goldika",
    images: [
      {
        url: "https://goldika.ir/_next/static/media/preview.6cd461d8.jpg",
        width: 1200,
        height: 630,
        alt: "Goldika Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <ServiceWorkerRegistration />
        <CacheProviderWrapper>
          <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
        </CacheProviderWrapper>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

export default RootLayout;
