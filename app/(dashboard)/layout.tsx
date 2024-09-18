import SideBar from "@/template/dashboard/sideBar/SideBar";
import DashboardTopBar from "@/template/dashboard/TopBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="dashboard">
          <div className={true ? "sideBar" : "sideBar hide"}>
            <SideBar />
          </div>
          <div className="dashboard-content">
            <DashboardTopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
