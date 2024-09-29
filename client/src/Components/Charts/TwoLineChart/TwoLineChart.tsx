"use client";
import "../charts.css";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

export const description = "A multiple line chart";

interface ChartDataItem {
  month: string;
  desktop: number;
  mobile: number;
}

interface TwoLineChartProps {
  chartData: ChartDataItem[];
}

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--line-chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--line-chart-2)",
  },
};

export function TwoLineChart({ chartData }: TwoLineChartProps) {
  return (
    <Card className="charts-card">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
