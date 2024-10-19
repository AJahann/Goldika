import { SidebarProvider } from "@/context/DashboardSideBarContext";
import AddCardModal from "@/template/dashboard/component/AddCardModal";
import SideBar from "@/template/dashboard/sideBar/SideBar";
import DashboardTopBar from "@/template/dashboard/TopBar";
import { headers } from "next/headers";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const header = headers();

  return (
    <SidebarProvider>
      <div className="dashboard">
        <SideBar />

        <div className="dashboard-content">
          <DashboardTopBar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
export default RootLayout;
