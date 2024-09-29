import Breadcrumb from "../Breadcrumbs/Breadcrumbs";
// import DashboardSearch from "../DashboardSearch/DashboardSearch";
import { Refresh, Star } from "../IconSet";
import InfoPannelSwitcher from "../InfoPannelSwitcher/InfoPannelSwitcher";
import SidebarSwitcher from "../SidebarSwitcher/SidebarSwitcher";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./DashboardInfobar.css";

const DashboardInfobar = () => {
  return (
    <div className="dashboard-infobar-wrapper">
      <div className="">
        <SidebarSwitcher />
        <button className="infobar-button">
          <Star />
        </button>
        <Breadcrumb />
      </div>
      <div>
        {/* <DashboardSearch /> */}
        <ThemeSwitcher />
        <button className="infobar-button">
          <Refresh />
        </button>
        <InfoPannelSwitcher />
      </div>
    </div>
  );
};

export default DashboardInfobar;
