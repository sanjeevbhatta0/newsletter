"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDate, formatNumber, formatPercentage } from "@/lib/utils"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const campaigns = [
  {
    id: 1,
    name: "Weekly Digest #42",
    subject: "This week in tech: AI breakthroughs",
    status: "sent",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    stats: { sent: 12453, opened: 5242, clicked: 892 },
  },
  {
    id: 2,
    name: "Product Launch",
    subject: "Introducing our new feature",
    status: "scheduled",
    scheduledAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    stats: null,
  },
  {
    id: 3,
    name: "Weekly Digest #41",
    subject: "The future of remote work",
    status: "sent",
    sentAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9),
    stats: { sent: 12100, opened: 4980, clicked: 756 },
  },
  {
    id: 4,
    name: "Special Announcement",
    subject: "Big news for our community",
    status: "draft",
    stats: null,
  },
]

const statusColors = {
  sent: "success",
  scheduled: "default",
  draft: "secondary",
} as const

export function RecentCampaigns() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Campaigns</CardTitle>
        <Link href="/campaigns">
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
            >
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="font-medium text-zinc-100 truncate">
                    {campaign.name}
                  </h4>
                  <Badge variant={statusColors[campaign.status as keyof typeof statusColors]}>
                    {campaign.status}
                  </Badge>
                </div>
                <p className="text-sm text-zinc-400 truncate">{campaign.subject}</p>
              </div>

              {campaign.stats ? (
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-center">
                    <p className="text-zinc-100 font-medium">
                      {formatNumber(campaign.stats.sent)}
                    </p>
                    <p className="text-xs text-zinc-500">Sent</p>
                  </div>
                  <div className="text-center">
                    <p className="text-zinc-100 font-medium">
                      {formatPercentage((campaign.stats.opened / campaign.stats.sent) * 100)}
                    </p>
                    <p className="text-xs text-zinc-500">Open Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-zinc-100 font-medium">
                      {formatPercentage((campaign.stats.clicked / campaign.stats.sent) * 100)}
                    </p>
                    <p className="text-xs text-zinc-500">CTR</p>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-zinc-400">
                  {campaign.status === "scheduled" && campaign.scheduledAt && (
                    <span>Scheduled for {formatDate(campaign.scheduledAt)}</span>
                  )}
                  {campaign.status === "draft" && <span>Not sent</span>}
                </div>
              )}

              <Button variant="ghost" size="icon" className="ml-4">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
