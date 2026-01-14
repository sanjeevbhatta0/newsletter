"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Plus,
  MoreHorizontal,
  Mail,
  Calendar,
  Eye,
  MousePointerClick,
  Send,
  Edit,
  Copy,
  Trash2,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { formatDate, formatNumber, formatPercentage } from "@/lib/utils"
import Link from "next/link"

const campaigns = [
  {
    id: 1,
    name: "Weekly Digest #42",
    subject: "This week in tech: AI breakthroughs and startup news",
    status: "sent",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    stats: { sent: 12453, opened: 5242, clicked: 892, bounced: 23 },
  },
  {
    id: 2,
    name: "Product Launch Announcement",
    subject: "Introducing our revolutionary new feature",
    status: "scheduled",
    scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    stats: null,
  },
  {
    id: 3,
    name: "Weekly Digest #41",
    subject: "The future of remote work and AI tools",
    status: "sent",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9),
    stats: { sent: 12100, opened: 4980, clicked: 756, bounced: 18 },
  },
  {
    id: 4,
    name: "Special Offer",
    subject: "Limited time: Get 50% off premium",
    status: "draft",
    stats: null,
  },
  {
    id: 5,
    name: "Monthly Roundup - December",
    subject: "Your December highlights and 2025 preview",
    status: "sent",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 16),
    stats: { sent: 11800, opened: 5120, clicked: 945, bounced: 15 },
  },
]

const statusConfig = {
  sent: { icon: CheckCircle2, color: "text-emerald-400 bg-emerald-500/10", label: "Sent" },
  scheduled: { icon: Clock, color: "text-blue-400 bg-blue-500/10", label: "Scheduled" },
  draft: { icon: Edit, color: "text-zinc-400 bg-zinc-500/10", label: "Draft" },
  failed: { icon: AlertCircle, color: "text-red-400 bg-red-500/10", label: "Failed" },
}

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <>
      <Header title="Campaigns" />
      <div className="p-6 space-y-6">
        {/* Stats Row */}
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Total Campaigns", value: "156", icon: Mail },
            { label: "Sent This Month", value: "12", icon: Send },
            { label: "Avg Open Rate", value: "42.3%", icon: Eye },
            { label: "Avg Click Rate", value: "7.8%", icon: MousePointerClick },
          ].map((stat) => (
            <Card key={stat.label} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className="rounded-xl bg-zinc-800 p-3">
                  <stat.icon className="h-5 w-5 text-zinc-400" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="draft">Drafts</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input placeholder="Search campaigns..." className="pl-9 w-64" />
            </div>
            <Link href="/compose">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Campaign
              </Button>
            </Link>
          </div>
        </div>

        {/* Campaigns List */}
        <div className="space-y-4">
          {campaigns.map((campaign) => {
            const status = statusConfig[campaign.status as keyof typeof statusConfig]
            const StatusIcon = status.icon

            return (
              <Card key={campaign.id} className="p-6 hover:border-zinc-700 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {campaign.name}
                      </h3>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                        <StatusIcon className="h-3.5 w-3.5" />
                        {status.label}
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mb-3 truncate">{campaign.subject}</p>
                    <div className="flex items-center gap-4 text-xs text-zinc-500">
                      {campaign.status === "sent" && campaign.sentAt && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          Sent {formatDate(campaign.sentAt)}
                        </span>
                      )}
                      {campaign.status === "scheduled" && campaign.scheduledAt && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          Scheduled for {formatDate(campaign.scheduledAt)}
                        </span>
                      )}
                      {campaign.status === "draft" && (
                        <span className="flex items-center gap-1">
                          <Edit className="h-3.5 w-3.5" />
                          Not sent yet
                        </span>
                      )}
                    </div>
                  </div>

                  {campaign.stats && (
                    <div className="hidden lg:flex items-center gap-8 mr-6">
                      <div className="text-center">
                        <p className="text-lg font-semibold text-white">
                          {formatNumber(campaign.stats.sent)}
                        </p>
                        <p className="text-xs text-zinc-500">Sent</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-emerald-400">
                          {formatPercentage((campaign.stats.opened / campaign.stats.sent) * 100)}
                        </p>
                        <p className="text-xs text-zinc-500">Opens</p>
                      </div>
                      <div className="text-center">
                        <p className="text-lg font-semibold text-blue-400">
                          {formatPercentage((campaign.stats.clicked / campaign.stats.sent) * 100)}
                        </p>
                        <p className="text-xs text-zinc-500">Clicks</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    {campaign.status === "draft" && (
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    )}
                    {campaign.status === "sent" && (
                      <Button variant="outline" size="sm">
                        View Report
                      </Button>
                    )}
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
