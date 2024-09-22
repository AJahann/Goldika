import SideBar from "@/template/dashboard/sideBar/SideBar";
import DashboardTopBar from "@/template/dashboard/TopBar";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dashboard">
      <div className={true ? "sideBar" : "sideBar hide"}>
        <SideBar />
      </div>
      <div className="dashboard-content">
        <DashboardTopBar />
        {children}
      </div>
    </div>
  );
};
export default RootLayout;
