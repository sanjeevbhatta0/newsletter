"use client"

import { Header } from "@/components/layout/header"
import { StatsCard } from "@/components/dashboard/stats-card"
import { GrowthChart } from "@/components/dashboard/growth-chart"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { RecentCampaigns } from "@/components/dashboard/recent-campaigns"
import { Users, Mail, MousePointerClick, DollarSign, TrendingUp, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="p-6 space-y-6">
        {/* Welcome Banner */}
        <div className="rounded-2xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome back, John!
          </h2>
          <p className="text-zinc-400">
            Your newsletter is performing great. You&apos;ve gained 234 new subscribers this week.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Subscribers"
            value="12,453"
            change={12.5}
            icon={Users}
            iconColor="from-indigo-500 to-violet-500"
          />
          <StatsCard
            title="Open Rate"
            value="42.3%"
            change={3.2}
            icon={Eye}
            iconColor="from-emerald-500 to-teal-500"
          />
          <StatsCard
            title="Click Rate"
            value="7.8%"
            change={-1.4}
            icon={MousePointerClick}
            iconColor="from-blue-500 to-cyan-500"
          />
          <StatsCard
            title="Revenue"
            value="$4,250"
            change={18.2}
            changeLabel="this month"
            icon={DollarSign}
            iconColor="from-amber-500 to-orange-500"
          />
        </div>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-3">
          <GrowthChart />
          <ActivityFeed />
        </div>

        {/* Campaigns */}
        <div className="grid gap-6 lg:grid-cols-3">
          <RecentCampaigns />

          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, label: "Compose Newsletter", href: "/compose", color: "from-indigo-500 to-violet-500" },
                { icon: Users, label: "Import Subscribers", href: "/subscribers/import", color: "from-emerald-500 to-teal-500" },
                { icon: TrendingUp, label: "View Analytics", href: "/analytics", color: "from-blue-500 to-cyan-500" },
                { icon: DollarSign, label: "Monetization Hub", href: "/monetization", color: "from-amber-500 to-orange-500" },
              ].map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200 group"
                >
                  <div className={`rounded-lg bg-gradient-to-r ${action.color} p-2.5`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {action.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
