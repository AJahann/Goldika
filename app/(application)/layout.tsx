import Footer from "@/shared/components/footer/Footer";
import NavBar from "@/shared/components/navBar/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
