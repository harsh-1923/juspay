import { createContext, useContext, useState, ReactNode } from "react";

interface RecentItem {
  name: string;
  icon: JSX.Element;
  link: string;
}

interface FavItem {
  name: string;
  link: string;
}

interface DashboardSettings {
  showInfoPannel: boolean;
  showSideBar: boolean;
  recents: RecentItem[];
  favs: FavItem[];
}

interface DashboardContextType {
  dashboardSettings: DashboardSettings;
  setDashboardSettings: (settings: DashboardSettings) => void;
}

const defaultContextValue: DashboardContextType = {
  dashboardSettings: {
    showInfoPannel: true,
    showSideBar: true,
    recents: [],
    favs: [],
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
      recents: [],
      favs: [],
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
