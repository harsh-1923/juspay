import UserDetails from "../UserDetails/UserDetails";
import "./DashboardSidebar.css";
import Directory from "../Directory/Directory";
import { dashboardDirectory, pageDirectory } from "./data";
import QuickOptions from "../QuickOptions/QuickOptions";

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <UserDetails />

      <QuickOptions />

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
  );
};

export default DashboardSidebar;
