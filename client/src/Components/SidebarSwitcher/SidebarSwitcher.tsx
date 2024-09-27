import { Drawer } from "vaul";
import { Sidebar } from "../IconSet";
import UserDetails from "../UserDetails/UserDetails";
import { dashboardDirectory, pageDirectory } from "../DashboardSidebar/data";
import Directory from "../Directory/Directory";
import "./SidebarSwitcher.css";
import { useDashboardContext } from "../../Context/DashboardContext";

import { useWindowSize } from "../../hooks/useWindowSize";

const SidebarSwitcher = () => {
  const { dashboardSettings, setDashboardSettings } = useDashboardContext();
  const windowSize = useWindowSize();
  const isDesktop = windowSize > 1000;

  const toggleSidebar = () => {
    setDashboardSettings({
      ...dashboardSettings,
      showSideBar: !dashboardSettings.showSideBar,
    });
  };

  return isDesktop ? (
    <button className="infobar-button" onClick={() => toggleSidebar()}>
      <Sidebar />
    </button>
  ) : (
    <>
      {" "}
      <Drawer.Root direction="left">
        <Drawer.Trigger className="infobar-button">
          <Sidebar />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="sidebar-vaul-content-wrapper">
            <div className="sidebar-vaul-content ">
              <UserDetails />
              <div className="dashboard-sidebar-group">
                <div className="dashboard-sidebar-group-title">
                  <h2>Dashboards</h2>
                </div>
                <Directory directory={dashboardDirectory} />
              </div>
              <div className="dashboard-sidebar-group">
                <div className="dashboard-sidebar-group-title">
                  <h2>Pages</h2>
                </div>
                <Directory directory={pageDirectory} />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

export default SidebarSwitcher;
