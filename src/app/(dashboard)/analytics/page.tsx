"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  TrendingUp,
  TrendingDown,
  Users,
  Mail,
  Eye,
  MousePointerClick,
  DollarSign,
  Calendar,
  Download,
  ArrowUpRight,
  Globe,
} from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const subscriberData = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 3200 },
  { name: "Mar", value: 4100 },
  { name: "Apr", value: 5400 },
  { name: "May", value: 6800 },
  { name: "Jun", value: 8200 },
  { name: "Jul", value: 9500 },
  { name: "Aug", value: 11200 },
  { name: "Sep", value: 12800 },
  { name: "Oct", value: 14100 },
  { name: "Nov", value: 15800 },
  { name: "Dec", value: 17500 },
]

const engagementData = [
  { name: "Mon", opens: 42, clicks: 8 },
  { name: "Tue", opens: 48, clicks: 12 },
  { name: "Wed", opens: 45, clicks: 9 },
  { name: "Thu", opens: 52, clicks: 14 },
  { name: "Fri", opens: 38, clicks: 7 },
  { name: "Sat", opens: 28, clicks: 4 },
  { name: "Sun", opens: 25, clicks: 3 },
]

const sourceData = [
  { name: "Organic", value: 45, color: "#6366f1" },
  { name: "Referral", value: 25, color: "#8b5cf6" },
  { name: "Social", value: 18, color: "#a855f7" },
  { name: "Paid", value: 12, color: "#c084fc" },
]

const topCountries = [
  { country: "United States", subscribers: 5420, percentage: 43.5 },
  { country: "United Kingdom", subscribers: 1890, percentage: 15.2 },
  { country: "Germany", subscribers: 1245, percentage: 10.0 },
  { country: "Canada", subscribers: 980, percentage: 7.9 },
  { country: "Australia", subscribers: 756, percentage: 6.1 },
]

export default function AnalyticsPage() {
  return (
    <>
      <Header title="Analytics" />
      <div className="p-6 space-y-6">
        {/* Date Range & Export */}
        <div className="flex items-center justify-between">
          <Tabs defaultValue="30d">
            <TabsList>
              <TabsTrigger value="7d">7 Days</TabsTrigger>
              <TabsTrigger value="30d">30 Days</TabsTrigger>
              <TabsTrigger value="90d">90 Days</TabsTrigger>
              <TabsTrigger value="12m">12 Months</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Report
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total Subscribers",
              value: "17,523",
              change: 12.5,
              icon: Users,
              color: "from-indigo-500 to-violet-500",
            },
            {
              label: "Avg Open Rate",
              value: "42.3%",
              change: 3.2,
              icon: Eye,
              color: "from-emerald-500 to-teal-500",
            },
            {
              label: "Avg Click Rate",
              value: "7.8%",
              change: -1.4,
              icon: MousePointerClick,
              color: "from-blue-500 to-cyan-500",
            },
            {
              label: "Revenue",
              value: "$12,450",
              change: 18.2,
              icon: DollarSign,
              color: "from-amber-500 to-orange-500",
            },
          ].map((metric) => (
            <Card key={metric.label} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-zinc-400">{metric.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{metric.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {metric.change > 0 ? (
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        metric.change > 0 ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {metric.change > 0 ? "+" : ""}
                      {metric.change}%
                    </span>
                    <span className="text-xs text-zinc-500">vs last period</span>
                  </div>
                </div>
                <div className={`rounded-xl bg-gradient-to-r ${metric.color} p-3`}>
                  <metric.icon className="h-5 w-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Subscriber Growth */}
          <Card>
            <CardHeader>
              <CardTitle>Subscriber Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={subscriberData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="name" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} />
                    <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} tickFormatter={(v) => v >= 1000 ? `${v/1000}k` : v} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "12px" }}
                      labelStyle={{ color: "#fafafa" }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Engagement by Day */}
          <Card>
            <CardHeader>
              <CardTitle>Engagement by Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="name" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} />
                    <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "12px" }}
                      labelStyle={{ color: "#fafafa" }}
                    />
                    <Bar dataKey="opens" fill="#6366f1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="clicks" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Acquisition Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Acquisition Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "12px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {sourceData.map((source) => (
                  <div key={source.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }} />
                    <span className="text-sm text-zinc-400">{source.name}</span>
                    <span className="text-sm text-white ml-auto">{source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Countries */}
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-zinc-400" />
                Top Countries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCountries.map((country, index) => (
                  <div key={country.country} className="flex items-center gap-4">
                    <span className="text-sm text-zinc-500 w-6">{index + 1}</span>
                    <span className="text-sm text-zinc-100 flex-1">{country.country}</span>
                    <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-zinc-400 w-20 text-right">
                      {country.subscribers.toLocaleString()}
                    </span>
                    <span className="text-sm text-zinc-500 w-16 text-right">
                      {country.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
