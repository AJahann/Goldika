import SideBar from "@/template/dashboard/sideBar/SideBar";
import DashboardTopBar from "@/template/dashboard/TopBar";
import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function RootLayout({ children }: { children: React.ReactNode }) {
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
  },
  { returnTo: "/dashboard" },
);
