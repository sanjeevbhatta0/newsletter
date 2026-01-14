"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  Filter,
  Download,
  Upload,
  UserPlus,
  MoreHorizontal,
  Mail,
  Tag,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn, getInitials, getStatusColor, formatDate, formatPercentage } from "@/lib/utils"

const subscribers = [
  {
    id: 1,
    email: "sarah.johnson@example.com",
    name: "Sarah Johnson",
    status: "active",
    tags: ["VIP", "Tech"],
    subscribedAt: new Date("2024-06-15"),
    openRate: 68,
    clickRate: 12,
    engagementScore: 92,
  },
  {
    id: 2,
    email: "mike.chen@startup.io",
    name: "Mike Chen",
    status: "active",
    tags: ["Startup", "Founder"],
    subscribedAt: new Date("2024-08-22"),
    openRate: 54,
    clickRate: 8,
    engagementScore: 78,
  },
  {
    id: 3,
    email: "emily.wilson@corp.com",
    name: "Emily Wilson",
    status: "active",
    tags: ["Enterprise"],
    subscribedAt: new Date("2024-03-10"),
    openRate: 42,
    clickRate: 5,
    engagementScore: 65,
  },
  {
    id: 4,
    email: "alex.rivera@gmail.com",
    name: "Alex Rivera",
    status: "cold",
    tags: [],
    subscribedAt: new Date("2023-11-05"),
    openRate: 15,
    clickRate: 1,
    engagementScore: 28,
  },
  {
    id: 5,
    email: "lisa.park@designer.co",
    name: "Lisa Park",
    status: "active",
    tags: ["Premium", "Design"],
    subscribedAt: new Date("2024-09-01"),
    openRate: 72,
    clickRate: 18,
    engagementScore: 95,
  },
  {
    id: 6,
    email: "james.taylor@tech.io",
    name: "James Taylor",
    status: "churned",
    tags: ["Tech"],
    subscribedAt: new Date("2023-06-20"),
    openRate: 8,
    clickRate: 0,
    engagementScore: 12,
  },
]

export default function SubscribersPage() {
  const [selectedSubscribers, setSelectedSubscribers] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSelectAll = () => {
    if (selectedSubscribers.length === subscribers.length) {
      setSelectedSubscribers([])
    } else {
      setSelectedSubscribers(subscribers.map((s) => s.id))
    }
  }

  const toggleSelect = (id: number) => {
    setSelectedSubscribers((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  return (
    <>
      <Header title="Subscribers" />
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Total Subscribers", value: "12,453", change: "+234 this week" },
            { label: "Active", value: "11,892", change: "95.5%" },
            { label: "Cold", value: "412", change: "3.3%" },
            { label: "Churned", value: "149", change: "1.2%" },
          ].map((stat) => (
            <Card key={stat.label} className="p-4">
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              <p className="text-xs text-zinc-500 mt-1">{stat.change}</p>
            </Card>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                placeholder="Search subscribers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="cold">Cold</SelectItem>
                <SelectItem value="churned">Churned</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Import
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button className="gap-2">
              <UserPlus className="h-4 w-4" />
              Add Subscriber
            </Button>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedSubscribers.length > 0 && (
          <div className="flex items-center gap-4 p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/10">
            <span className="text-sm text-zinc-300">
              {selectedSubscribers.length} selected
            </span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Tag className="h-4 w-4" />
                Add Tag
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-red-400 hover:text-red-300">
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        )}

        {/* Subscribers Table */}
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="p-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedSubscribers.length === subscribers.length}
                      onChange={toggleSelectAll}
                      className="rounded border-zinc-600 bg-zinc-800 text-indigo-500 focus:ring-indigo-500"
                    />
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Subscriber
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Status
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Tags
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Joined
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Open Rate
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400">
                    Score
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-zinc-400"></th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr
                    key={subscriber.id}
                    className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedSubscribers.includes(subscriber.id)}
                        onChange={() => toggleSelect(subscriber.id)}
                        className="rounded border-zinc-600 bg-zinc-800 text-indigo-500 focus:ring-indigo-500"
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{getInitials(subscriber.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-zinc-100">{subscriber.name}</p>
                          <p className="text-sm text-zinc-400">{subscriber.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(subscriber.status)}>
                        {subscriber.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 flex-wrap">
                        {subscriber.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {subscriber.tags.length === 0 && (
                          <span className="text-sm text-zinc-500">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-zinc-300">
                      {formatDate(subscriber.subscribedAt)}
                    </td>
                    <td className="p-4 text-sm text-zinc-300">
                      {formatPercentage(subscriber.openRate)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-2 rounded-full bg-zinc-800 overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              subscriber.engagementScore >= 70
                                ? "bg-emerald-500"
                                : subscriber.engagementScore >= 40
                                ? "bg-amber-500"
                                : "bg-red-500"
                            )}
                            style={{ width: `${subscriber.engagementScore}%` }}
                          />
                        </div>
                        <span className="text-sm text-zinc-400">
                          {subscriber.engagementScore}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-zinc-800">
            <p className="text-sm text-zinc-400">
              Showing 1-{subscribers.length} of 12,453 subscribers
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="bg-indigo-500/10">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <span className="text-zinc-500">...</span>
              <Button variant="outline" size="sm">
                249
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}
