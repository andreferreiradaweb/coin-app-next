"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { ExchangeRate } from "@utils/getCoinVariation";

interface LineProps {
  variation: ExchangeRate[];
}

const Graph: React.FC<LineProps> = ({ variation }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="z-0">
      <AreaChart width={200} height={200} data={variation}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F4CC8F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFF6E8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#f0f0f0" />

        <Area
          type="monotone"
          dataKey="rate_close"
          stroke="#F4CC8F"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
