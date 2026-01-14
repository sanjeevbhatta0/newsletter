"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { formatRelativeTime } from "@/lib/utils"
import { UserPlus, Mail, MousePointerClick, DollarSign } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "subscribe",
    email: "sarah@example.com",
    time: new Date(Date.now() - 1000 * 60 * 5),
  },
  {
    id: 2,
    type: "open",
    email: "mike@startup.io",
    campaign: "Weekly Digest #42",
    time: new Date(Date.now() - 1000 * 60 * 15),
  },
  {
    id: 3,
    type: "click",
    email: "lisa@corp.com",
    campaign: "Weekly Digest #42",
    time: new Date(Date.now() - 1000 * 60 * 32),
  },
  {
    id: 4,
    type: "subscribe",
    email: "john@tech.co",
    time: new Date(Date.now() - 1000 * 60 * 45),
  },
  {
    id: 5,
    type: "purchase",
    email: "anna@designer.co",
    amount: 49,
    time: new Date(Date.now() - 1000 * 60 * 60),
  },
  {
    id: 6,
    type: "subscribe",
    email: "chris@startup.io",
    time: new Date(Date.now() - 1000 * 60 * 90),
  },
]

const activityConfig = {
  subscribe: {
    icon: UserPlus,
    color: "text-emerald-400 bg-emerald-500/10",
    label: "subscribed",
  },
  open: {
    icon: Mail,
    color: "text-blue-400 bg-blue-500/10",
    label: "opened",
  },
  click: {
    icon: MousePointerClick,
    color: "text-violet-400 bg-violet-500/10",
    label: "clicked",
  },
  purchase: {
    icon: DollarSign,
    color: "text-amber-400 bg-amber-500/10",
    label: "purchased",
  },
}

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const config = activityConfig[activity.type as keyof typeof activityConfig]
            const Icon = config.icon

            return (
              <div key={activity.id} className="flex items-center gap-4">
                <div className={`rounded-full p-2 ${config.color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-100 truncate">
                    <span className="font-medium">{activity.email}</span>{" "}
                    <span className="text-zinc-400">{config.label}</span>
                    {"campaign" in activity && (
                      <span className="text-zinc-400"> {activity.campaign}</span>
                    )}
                    {"amount" in activity && (
                      <span className="text-amber-400"> ${activity.amount}</span>
                    )}
                  </p>
                </div>
                <span className="text-xs text-zinc-500 whitespace-nowrap">
                  {formatRelativeTime(activity.time)}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
