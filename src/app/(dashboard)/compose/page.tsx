"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Image,
  Link,
  Quote,
  Code,
  Heading1,
  Heading2,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Sparkles,
  Send,
  Calendar,
  Save,
  Eye,
  Smartphone,
  Monitor,
  Undo,
  Redo,
  Type,
  Minus,
} from "lucide-react"
import { cn } from "@/lib/utils"

const blockTypes = [
  { icon: Type, label: "Text", type: "text" },
  { icon: Heading1, label: "Heading", type: "heading" },
  { icon: Image, label: "Image", type: "image" },
  { icon: Link, label: "Button", type: "button" },
  { icon: Quote, label: "Quote", type: "quote" },
  { icon: Minus, label: "Divider", type: "divider" },
  { icon: List, label: "List", type: "list" },
  { icon: Code, label: "Code", type: "code" },
]

const toolbarButtons = [
  { icon: Bold, label: "Bold", action: "bold" },
  { icon: Italic, label: "Italic", action: "italic" },
  { icon: Underline, label: "Underline", action: "underline" },
  null, // separator
  { icon: Heading1, label: "Heading 1", action: "h1" },
  { icon: Heading2, label: "Heading 2", action: "h2" },
  null,
  { icon: List, label: "Bullet List", action: "bullet" },
  { icon: ListOrdered, label: "Numbered List", action: "number" },
  null,
  { icon: AlignLeft, label: "Align Left", action: "left" },
  { icon: AlignCenter, label: "Align Center", action: "center" },
  { icon: AlignRight, label: "Align Right", action: "right" },
  null,
  { icon: Link, label: "Link", action: "link" },
  { icon: Image, label: "Image", action: "image" },
  { icon: Quote, label: "Quote", action: "quote" },
]

export default function ComposePage() {
  const [subject, setSubject] = useState("")
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop")
  const [content, setContent] = useState(`
    <h1>Welcome to your weekly newsletter!</h1>
    <p>Start writing your amazing content here. Use the toolbar above to format your text, add images, and more.</p>
    <p>This editor supports:</p>
    <ul>
      <li>Rich text formatting</li>
      <li>Images and media</li>
      <li>Links and buttons</li>
      <li>Code blocks</li>
      <li>And much more!</li>
    </ul>
  `)

  return (
    <>
      <Header title="Compose Newsletter" />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Main Editor */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Subject Line */}
          <div className="border-b border-zinc-800 p-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-zinc-500 mb-1 block">Subject Line</label>
                <div className="relative">
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter your email subject..."
                    className="text-lg font-medium pr-12"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    title="Generate with AI"
                  >
                    <Sparkles className="h-4 w-4 text-indigo-400" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Undo className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Redo className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="border-b border-zinc-800 p-2 flex items-center gap-1 flex-wrap">
            {toolbarButtons.map((button, index) =>
              button === null ? (
                <div key={index} className="w-px h-6 bg-zinc-700 mx-1" />
              ) : (
                <Button
                  key={button.action}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  title={button.label}
                >
                  <button.icon className="h-4 w-4" />
                </Button>
              )
            )}
            <div className="flex-1" />
            <Button variant="ghost" size="sm" className="gap-2 text-indigo-400">
              <Sparkles className="h-4 w-4" />
              AI Assistant
            </Button>
          </div>

          {/* Editor Canvas */}
          <div className="flex-1 overflow-auto p-6 bg-zinc-950">
            <div
              className={cn(
                "mx-auto bg-white rounded-lg shadow-2xl transition-all duration-300",
                previewMode === "desktop" ? "max-w-2xl" : "max-w-sm"
              )}
            >
              <div className="p-8">
                <div
                  className="prose prose-zinc max-w-none min-h-[400px] text-zinc-800 outline-none"
                  contentEditable
                  suppressContentEditableWarning
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="border-t border-zinc-800 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant={previewMode === "desktop" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setPreviewMode("desktop")}
              >
                <Monitor className="h-4 w-4 mr-2" />
                Desktop
              </Button>
              <Button
                variant={previewMode === "mobile" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setPreviewMode("mobile")}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <Save className="h-4 w-4" />
                Save Draft
              </Button>
              <Button variant="outline" className="gap-2">
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
              <Button className="gap-2">
                <Send className="h-4 w-4" />
                Send Now
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Blocks */}
        <div className="w-64 border-l border-zinc-800 p-4 overflow-y-auto">
          <h3 className="text-sm font-semibold text-zinc-100 mb-4">Content Blocks</h3>
          <div className="space-y-2">
            {blockTypes.map((block) => (
              <button
                key={block.type}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200 text-left"
              >
                <div className="rounded-lg bg-zinc-800 p-2">
                  <block.icon className="h-4 w-4 text-zinc-400" />
                </div>
                <span className="text-sm text-zinc-300">{block.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-100 mb-4">Templates</h3>
            <div className="space-y-2">
              {["Weekly Digest", "Announcement", "Welcome Email", "Product Update"].map(
                (template) => (
                  <button
                    key={template}
                    className="w-full p-3 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200 text-left text-sm text-zinc-300"
                  >
                    {template}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
