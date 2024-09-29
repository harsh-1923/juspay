import MetricTile from "@/Components/MetricTile/MetricTile";
import "./QuickMetrics.css";
import { StackedbarChart } from "@/Components/Charts/StackedBarChart/StackedbarChart";

const QuickMetrics = () => {
  return (
    <div className="metrics-wrapper">
      <div className="w-1/2 flex flex-col justify-between debug quick-metrics-wrapper">
        <div className="flex items-center gap-[16px] debug">
          <MetricTile
            title="Customers"
            unitType="1"
            percentageChange={11.01}
            value={378}
          />
          <MetricTile
            title="Customers"
            unitType="2"
            percentageChange={11.01}
            value={3781}
          />
        </div>
        <div className="flex items-center gap-[16px] debug">
          <MetricTile
            title="Customers"
            unitType="1"
            percentageChange={11.01}
            value={378}
          />
          <MetricTile
            title="Customers"
            unitType="2"
            percentageChange={11.01}
            value={3781}
          />
        </div>
      </div>
      <div className="w-1/2">
        <StackedbarChart />
      </div>
    </div>
  );
};

export default QuickMetrics;
