import { Route, Routes } from "react-router-dom";
import DashboardInfobar from "../../Components/DashboardInfobar/DashboardInfobar";
import DefaultPage from "../DefaultPage/DefaultPage";
import OrderPage from "../OrderPage/OrderPage";
import {
  DashboardProvider,
  useDashboardContext,
} from "../../Context/DashboardContext";

import "./Dashboard.css";
import DashboardSidebar from "../../Components/DashboardSidebar/DashboardSidebar";
import InfoPannel from "../../Components/InfoPannel/InfoPannel";
import LandingPage from "../LandingPage/LandingPage";

const Dashboard = () => {
  const { dashboardSettings } = useDashboardContext();
  return (
    <div className="dashboard-wrapper">
      {dashboardSettings && dashboardSettings.showSideBar && (
        <DashboardSidebar />
      )}
      <div className="dashboard-content-wrapper">
        <DashboardInfobar />
        <section className="dashboard-content">
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="default" element={<DefaultPage />} />
            <Route path="orders" element={<OrderPage />} />
          </Routes>
        </section>
      </div>

      {dashboardSettings && dashboardSettings.showInfoPannel && <InfoPannel />}
    </div>
  );
};

const DashboardWrapper = () => {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
};

export default DashboardWrapper;
