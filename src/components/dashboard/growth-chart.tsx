"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const data = [
  { name: "Jan", subscribers: 2400, revenue: 1200 },
  { name: "Feb", subscribers: 3200, revenue: 1800 },
  { name: "Mar", subscribers: 4100, revenue: 2400 },
  { name: "Apr", subscribers: 5400, revenue: 3200 },
  { name: "May", subscribers: 6800, revenue: 4100 },
  { name: "Jun", subscribers: 8200, revenue: 5200 },
  { name: "Jul", subscribers: 9500, revenue: 6100 },
  { name: "Aug", subscribers: 11200, revenue: 7400 },
  { name: "Sep", subscribers: 12800, revenue: 8900 },
  { name: "Oct", subscribers: 14100, revenue: 10200 },
  { name: "Nov", subscribers: 15800, revenue: 11800 },
  { name: "Dec", subscribers: 17500, revenue: 13400 },
]

export function GrowthChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Subscriber Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSubscribers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={{ stroke: "#27272a" }}
                axisLine={{ stroke: "#27272a" }}
              />
              <YAxis
                tick={{ fill: "#71717a", fontSize: 12 }}
                tickLine={{ stroke: "#27272a" }}
                axisLine={{ stroke: "#27272a" }}
                tickFormatter={(value) =>
                  value >= 1000 ? `${value / 1000}k` : value
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                }}
                labelStyle={{ color: "#fafafa", fontWeight: 600 }}
                itemStyle={{ color: "#a1a1aa" }}
              />
              <Area
                type="monotone"
                dataKey="subscribers"
                stroke="#6366f1"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSubscribers)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
