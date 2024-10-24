import Footer from "@/shared/components/footer/Footer";
import NavBar from "@/shared/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {<NavBar />}
      {children}
      <Footer />
    </>
  );
}
