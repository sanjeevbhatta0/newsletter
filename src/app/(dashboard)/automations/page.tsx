"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Plus,
  Zap,
  Mail,
  UserPlus,
  Clock,
  Tag,
  MousePointerClick,
  GitBranch,
  MoreHorizontal,
  Play,
  Pause,
  ArrowRight,
} from "lucide-react"

const automations = [
  {
    id: 1,
    name: "Welcome Series",
    description: "3-email sequence for new subscribers",
    trigger: "New Subscription",
    triggerIcon: UserPlus,
    isActive: true,
    stats: { sent: 1245, completed: 1089, converted: 234 },
  },
  {
    id: 2,
    name: "Re-engagement Campaign",
    description: "Win back inactive subscribers",
    trigger: "30 Days Inactive",
    triggerIcon: Clock,
    isActive: true,
    stats: { sent: 456, completed: 312, converted: 45 },
  },
  {
    id: 3,
    name: "Premium Upsell",
    description: "Promote premium tier to engaged free users",
    trigger: "High Engagement Score",
    triggerIcon: MousePointerClick,
    isActive: false,
    stats: { sent: 89, completed: 67, converted: 12 },
  },
  {
    id: 4,
    name: "Tag-based Newsletter",
    description: "Send targeted content based on interests",
    trigger: "Tag Added",
    triggerIcon: Tag,
    isActive: true,
    stats: { sent: 2341, completed: 2100, converted: 456 },
  },
]

export default function AutomationsPage() {
  return (
    <>
      <Header title="Automations" />
      <div className="p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Active Automations", value: "3", icon: Zap },
            { label: "Emails Sent", value: "4,131", icon: Mail },
            { label: "Completion Rate", value: "87%", icon: GitBranch },
            { label: "Conversions", value: "747", icon: UserPlus },
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

        {/* Actions */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">Your Automations</h2>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Automation
          </Button>
        </div>

        {/* Automations List */}
        <div className="space-y-4">
          {automations.map((automation) => (
            <Card key={automation.id} className="p-6 hover:border-zinc-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`rounded-xl p-3 ${automation.isActive ? "bg-emerald-500/10" : "bg-zinc-800"}`}>
                    <Zap className={`h-5 w-5 ${automation.isActive ? "text-emerald-400" : "text-zinc-400"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-white">{automation.name}</h3>
                      <Badge variant={automation.isActive ? "success" : "secondary"}>
                        {automation.isActive ? "Active" : "Paused"}
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400 mb-3">{automation.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <automation.triggerIcon className="h-4 w-4 text-zinc-500" />
                      <span className="text-zinc-400">Trigger:</span>
                      <span className="text-zinc-300">{automation.trigger}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden md:flex items-center gap-8 text-sm">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-white">{automation.stats.sent.toLocaleString()}</p>
                      <p className="text-xs text-zinc-500">Sent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-emerald-400">
                        {Math.round((automation.stats.completed / automation.stats.sent) * 100)}%
                      </p>
                      <p className="text-xs text-zinc-500">Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-indigo-400">{automation.stats.converted}</p>
                      <p className="text-xs text-zinc-500">Converted</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch defaultChecked={automation.isActive} />
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Workflow Preview */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 whitespace-nowrap">
                    <automation.triggerIcon className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-zinc-300">{automation.trigger}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 whitespace-nowrap">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-zinc-300">Wait 1 day</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 whitespace-nowrap">
                    <Mail className="h-4 w-4 text-indigo-400" />
                    <span className="text-sm text-zinc-300">Send Email #1</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-zinc-600 flex-shrink-0" />
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 whitespace-nowrap">
                    <span className="text-sm text-zinc-500">+2 more steps</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State / Create Prompt */}
        <Card className="border-dashed border-2 border-zinc-700 bg-transparent">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center mb-4">
              <GitBranch className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Create Your First Automation</h3>
            <p className="text-sm text-zinc-400 max-w-md mb-4">
              Automate your subscriber journey with powerful workflows. Set up welcome sequences, re-engagement campaigns, and more.
            </p>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Build Automation
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
