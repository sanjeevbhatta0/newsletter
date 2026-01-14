"use client"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: number
  changeLabel?: string
  icon: LucideIcon
  iconColor?: string
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel = "vs last period",
  icon: Icon,
  iconColor = "from-indigo-500 to-violet-500",
}: StatsCardProps) {
  const isPositive = change && change > 0
  const isNegative = change && change < 0

  return (
    <Card className="p-6 card-hover">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-400">{title}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          {change !== undefined && (
            <div className="flex items-center gap-1.5">
              {isPositive && <TrendingUp className="h-4 w-4 text-emerald-400" />}
              {isNegative && <TrendingDown className="h-4 w-4 text-red-400" />}
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive && "text-emerald-400",
                  isNegative && "text-red-400",
                  !isPositive && !isNegative && "text-zinc-400"
                )}
              >
                {isPositive && "+"}
                {change}%
              </span>
              <span className="text-sm text-zinc-500">{changeLabel}</span>
            </div>
          )}
        </div>
        <div
          className={cn(
            "rounded-xl bg-gradient-to-r p-3",
            `bg-gradient-to-r ${iconColor}`
          )}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
    </Card>
  )
}
