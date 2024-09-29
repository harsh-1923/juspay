"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

interface ChartDataItem {
  browser: string;
  visitors: number;
  fill: string;
}

interface HollowPieChartProps {
  chartData: ChartDataItem[];
}

export function HollowPieChart({ chartData }: HollowPieChartProps) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  const chartConfig: ChartConfig = React.useMemo(() => {
    const config: ChartConfig = {
      visitors: {
        label: "Visitors",
      },
    };
    chartData.forEach((item, index) => {
      config[item.browser] = {
        label: item.browser.charAt(0).toUpperCase() + item.browser.slice(1),
        color: `hsl(var(--chart-${index + 1}))`,
      };
    });
    return config;
  }, [chartData]);

  return (
    <Card className="charts-card">
      <CardHeader style={{ marginBottom: "-30px" }}>
        <CardTitle>Sales</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              outerRadius={70}
              cornerRadius={5}
              paddingAngle={4}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        laudantium.
      </CardFooter>
    </Card>
  );
}
