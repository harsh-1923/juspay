import { useState, useEffect, useRef } from "react";
import "./DefaultPage.css";
import { TwoLineChart } from "@/Components/Charts/TwoLineChart/TwoLineChart";
import Map from "@/Components/IconSet/Map";

const DefaultPage = () => {
  const [showCompactDashboard, setShowCompactDashboard] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      if (wrapperRef.current) {
        setShowCompactDashboard(wrapperRef.current.offsetWidth < 700);
      }
    };

    // Check initial width
    checkWidth();

    // Add event listener
    window.addEventListener("resize", checkWidth);

    // Clean up
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="default-page-wrapper w-full h-full flex flex-col items-center"
    >
      <div className="default-page-content w-full h-full max-w-[900px] flex flex-col items-center gap-[28px]">
        <div className="page-header">
          <h2>eCommerce</h2>
        </div>

        {/* Display current state */}
        <div className="text-center p-2 bg-yellow-200 text-black rounded">
          showCompactDashboard: {showCompactDashboard ? "true" : "false"}
        </div>

        <div className="flex w-full p-4 gap-2">
          <div
            className={`df-info-card p-2 flex items-center justify-center ${
              showCompactDashboard ? "w-full" : "w-2/3"
            }`}
          >
            <TwoLineChart />
          </div>
          {!showCompactDashboard && (
            <div className="w-1/3 p-4 flex flex-col items-center justify-start df-info-card">
              <h2>Revenue by location</h2>
              <Map />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
