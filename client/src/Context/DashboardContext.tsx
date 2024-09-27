import { createContext, useContext, useState, ReactNode } from "react";

interface DashboardContextType {
  dashboardSettings: DashboardSettings;
  setDashboardSettings: (settings: DashboardSettings) => void;
}

interface DashboardSettings {
  showInfoPannel: boolean;
  showSideBar: boolean;
}

const defaultContextValue: DashboardContextType = {
  dashboardSettings: {
    showInfoPannel: true,
    showSideBar: true,
  },
  setDashboardSettings: () => {},
};

const DashboardContext =
  createContext<DashboardContextType>(defaultContextValue);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [dashboardSettings, setDashboardSettings] = useState<DashboardSettings>(
    {
      showInfoPannel: true,
      showSideBar: true,
    }
  );

  const value = {
    dashboardSettings,
    setDashboardSettings,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = (): DashboardContextType => {
  return useContext(DashboardContext);
};
