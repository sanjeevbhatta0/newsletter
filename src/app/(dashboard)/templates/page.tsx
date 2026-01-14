"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Plus,
  FileText,
  Star,
  MoreHorizontal,
  Copy,
  Edit,
  Trash2,
  Layout,
  Newspaper,
  Gift,
  Megaphone,
} from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Weekly Digest",
    description: "Clean layout for weekly newsletter roundups",
    category: "Newsletter",
    icon: Newspaper,
    color: "from-indigo-500 to-violet-500",
    isDefault: true,
    usageCount: 42,
  },
  {
    id: 2,
    name: "Product Announcement",
    description: "Bold design for product launches and updates",
    category: "Promotional",
    icon: Megaphone,
    color: "from-amber-500 to-orange-500",
    isDefault: true,
    usageCount: 18,
  },
  {
    id: 3,
    name: "Welcome Series",
    description: "Warm introduction for new subscribers",
    category: "Onboarding",
    icon: Gift,
    color: "from-emerald-500 to-teal-500",
    isDefault: true,
    usageCount: 156,
  },
  {
    id: 4,
    name: "Minimal Text",
    description: "Simple, text-focused newsletter design",
    category: "Minimal",
    icon: FileText,
    color: "from-zinc-500 to-zinc-600",
    isDefault: true,
    usageCount: 89,
  },
  {
    id: 5,
    name: "My Custom Template",
    description: "Custom template with brand colors",
    category: "Custom",
    icon: Layout,
    color: "from-rose-500 to-pink-500",
    isDefault: false,
    usageCount: 12,
  },
]

const categories = ["All", "Newsletter", "Promotional", "Onboarding", "Minimal", "Custom"]

export default function TemplatesPage() {
  return (
    <>
      <Header title="Templates" />
      <div className="p-6 space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input placeholder="Search templates..." className="pl-9 w-64" />
            </div>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Template
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "secondary" : "ghost"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:border-zinc-700 transition-all duration-200 overflow-hidden">
              {/* Preview Area */}
              <div className={`h-40 bg-gradient-to-br ${template.color} p-6 relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative flex items-center justify-center h-full">
                  <template.icon className="h-16 w-16 text-white/80" />
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-1">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {template.isDefault && (
                  <Badge className="absolute top-3 left-3 bg-white/20 text-white border-0">
                    Default
                  </Badge>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{template.name}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{template.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="secondary">{template.category}</Badge>
                  <span className="text-xs text-zinc-500">Used {template.usageCount} times</span>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Create New Card */}
          <Card className="border-dashed border-2 border-zinc-700 bg-transparent hover:border-zinc-600 hover:bg-zinc-900/20 transition-all duration-200 cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center h-full min-h-[280px] text-center">
              <div className="h-16 w-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-4">
                <Plus className="h-8 w-8 text-zinc-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Create New Template</h3>
              <p className="text-sm text-zinc-400">Start from scratch or duplicate existing</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
