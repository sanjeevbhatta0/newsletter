"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DollarSign,
  TrendingUp,
  Users,
  Megaphone,
  Zap,
  ArrowUpRight,
  CreditCard,
  Gift,
  BarChart3,
  Check,
  ExternalLink,
} from "lucide-react"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const revenueData = [
  { name: "Aug", subscriptions: 1200, ads: 800, boosts: 400 },
  { name: "Sep", subscriptions: 1450, ads: 920, boosts: 520 },
  { name: "Oct", subscriptions: 1680, ads: 1100, boosts: 680 },
  { name: "Nov", subscriptions: 1850, ads: 1280, boosts: 820 },
  { name: "Dec", subscriptions: 2100, ads: 1450, boosts: 950 },
  { name: "Jan", subscriptions: 2400, ads: 1650, boosts: 1100 },
]

const adOpportunities = [
  {
    id: 1,
    advertiser: "TechStart Pro",
    type: "CPM",
    rate: "$8.50",
    category: "Technology",
    deadline: "3 days left",
    match: 95,
  },
  {
    id: 2,
    advertiser: "Cloud Solutions",
    type: "CPC",
    rate: "$2.20",
    category: "SaaS",
    deadline: "5 days left",
    match: 88,
  },
  {
    id: 3,
    advertiser: "Design Tools Co",
    type: "CPM",
    rate: "$6.00",
    category: "Design",
    deadline: "7 days left",
    match: 82,
  },
]

const boostOffers = [
  {
    id: 1,
    newsletter: "AI Weekly Digest",
    payout: "$2.50",
    category: "AI/ML",
    subscribers: "45K",
  },
  {
    id: 2,
    newsletter: "Startup Insider",
    payout: "$3.00",
    category: "Startups",
    subscribers: "32K",
  },
  {
    id: 3,
    newsletter: "Developer News",
    payout: "$2.00",
    category: "Tech",
    subscribers: "68K",
  },
]

export default function MonetizationPage() {
  return (
    <>
      <Header title="Monetization" />
      <div className="p-6 space-y-6">
        {/* Revenue Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Total Revenue</p>
                <p className="text-3xl font-bold text-white mt-2">$12,450</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">+24.5%</span>
                </div>
              </div>
              <div className="rounded-xl bg-emerald-500/20 p-3">
                <DollarSign className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Subscriptions</p>
                <p className="text-2xl font-bold text-white mt-2">$4,850</p>
                <p className="text-xs text-zinc-500 mt-1">142 paid members</p>
              </div>
              <div className="rounded-xl bg-indigo-500/20 p-3">
                <CreditCard className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Ad Revenue</p>
                <p className="text-2xl font-bold text-white mt-2">$5,200</p>
                <p className="text-xs text-zinc-500 mt-1">18 placements</p>
              </div>
              <div className="rounded-xl bg-amber-500/20 p-3">
                <Megaphone className="h-5 w-5 text-amber-400" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Boosts</p>
                <p className="text-2xl font-bold text-white mt-2">$2,400</p>
                <p className="text-xs text-zinc-500 mt-1">856 referrals</p>
              </div>
              <div className="rounded-xl bg-violet-500/20 p-3">
                <Zap className="h-5 w-5 text-violet-400" />
              </div>
            </div>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorSubs" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorAds" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorBoosts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis dataKey="name" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} />
                  <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={{ stroke: "#27272a" }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip contentStyle={{ backgroundColor: "#18181b", border: "1px solid #27272a", borderRadius: "12px" }} />
                  <Area type="monotone" dataKey="subscriptions" stroke="#6366f1" strokeWidth={2} fill="url(#colorSubs)" />
                  <Area type="monotone" dataKey="ads" stroke="#f59e0b" strokeWidth={2} fill="url(#colorAds)" />
                  <Area type="monotone" dataKey="boosts" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorBoosts)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-sm text-zinc-400">Subscriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-zinc-400">Ad Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-violet-500" />
                <span className="text-sm text-zinc-400">Boosts</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Opportunities */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Ad Opportunities */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="h-5 w-5 text-amber-400" />
                Ad Opportunities
              </CardTitle>
              <Button variant="outline" size="sm">View All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {adOpportunities.map((ad) => (
                  <div
                    key={ad.id}
                    className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-white">{ad.advertiser}</h4>
                        <p className="text-sm text-zinc-400">{ad.category}</p>
                      </div>
                      <Badge variant="secondary">{ad.type}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-lg font-bold text-emerald-400">{ad.rate}</p>
                          <p className="text-xs text-zinc-500">per 1K</p>
                        </div>
                        <div>
                          <p className="text-sm text-zinc-300">{ad.match}% match</p>
                          <p className="text-xs text-zinc-500">{ad.deadline}</p>
                        </div>
                      </div>
                      <Button size="sm">Accept</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Boost Offers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-violet-400" />
                Boost Marketplace
              </CardTitle>
              <Button variant="outline" size="sm">Browse All</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {boostOffers.map((boost) => (
                  <div
                    key={boost.id}
                    className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white">{boost.newsletter}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">{boost.category}</Badge>
                          <span className="text-xs text-zinc-500">{boost.subscribers} subscribers</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-violet-400">{boost.payout}</p>
                        <p className="text-xs text-zinc-500">per subscriber</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Apply to Promote
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Tiers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              Subscription Tiers
            </CardTitle>
            <Button variant="outline" size="sm">Manage Tiers</Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { name: "Free", price: "$0", subscribers: 11234, features: ["Weekly newsletter", "Community access"] },
                { name: "Pro", price: "$9/mo", subscribers: 98, features: ["Daily insights", "Premium content", "Discord access"], highlighted: true },
                { name: "VIP", price: "$29/mo", subscribers: 44, features: ["Everything in Pro", "1-on-1 calls", "Early access"] },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`p-6 rounded-xl border ${
                    tier.highlighted
                      ? "border-indigo-500/50 bg-indigo-500/5"
                      : "border-zinc-800 bg-zinc-900/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                    <span className="text-xl font-bold text-white">{tier.price}</span>
                  </div>
                  <p className="text-2xl font-bold text-white mb-4">
                    {tier.subscribers.toLocaleString()}
                    <span className="text-sm font-normal text-zinc-400 ml-2">subscribers</span>
                  </p>
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                        <Check className="h-4 w-4 text-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
