"use client"

import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  Building,
  Bell,
  Key,
  CreditCard,
  Palette,
  Globe,
  Shield,
  Upload,
  Check,
  ExternalLink,
  AlertTriangle,
} from "lucide-react"

export default function SettingsPage() {
  return (
    <>
      <Header title="Settings" />
      <div className="p-6">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-zinc-900/50 border border-zinc-800">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="publication" className="gap-2">
              <Building className="h-4 w-4" />
              Publication
            </TabsTrigger>
            <TabsTrigger value="integrations" className="gap-2">
              <Key className="h-4 w-4" />
              Integrations
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="billing" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information and profile picture.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/avatar.png" />
                    <AvatarFallback className="text-xl">JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Photo
                    </Button>
                    <p className="text-xs text-zinc-500 mt-2">JPG, PNG or GIF. Max 2MB.</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." defaultValue="Newsletter creator and tech enthusiast." />
                </div>

                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Password & Security</CardTitle>
                <CardDescription>Manage your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div></div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
                <Button variant="outline">Update Password</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Publication Tab */}
          <TabsContent value="publication" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publication Details</CardTitle>
                <CardDescription>Configure your newsletter publication settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pub-name">Publication Name</Label>
                    <Input id="pub-name" defaultValue="Tech Weekly" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pub-slug">URL Slug</Label>
                    <Input id="pub-slug" defaultValue="tech-weekly" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pub-description">Description</Label>
                  <Textarea
                    id="pub-description"
                    placeholder="Describe your newsletter..."
                    defaultValue="A weekly newsletter covering the latest in tech, startups, and innovation."
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Branding</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Primary Color</Label>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-indigo-500" />
                        <Input defaultValue="#6366f1" className="w-32" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Logo</Label>
                      <Button variant="outline" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                </div>

                <Button>Save Publication</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  Beehiiv Connection
                </CardTitle>
                <CardDescription>Connect your Beehiiv account to sync subscribers and send newsletters.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Connected</p>
                      <p className="text-sm text-zinc-400">Publication: Tech Weekly</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
                  <p className="text-xs text-zinc-500">
                    Get your API key from{" "}
                    <a href="https://app.beehiiv.com" target="_blank" className="text-indigo-400 hover:underline">
                      Beehiiv Dashboard
                    </a>
                  </p>
                </div>

                <Button variant="outline">Update API Key</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Integrations</CardTitle>
                <CardDescription>Connect third-party services to enhance your workflow.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Stripe", description: "Accept payments for premium subscriptions", connected: true },
                    { name: "Zapier", description: "Automate workflows with 5,000+ apps", connected: false },
                    { name: "Slack", description: "Get notifications in your Slack workspace", connected: false },
                  ].map((integration) => (
                    <div
                      key={integration.name}
                      className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30"
                    >
                      <div>
                        <p className="font-medium text-white">{integration.name}</p>
                        <p className="text-sm text-zinc-400">{integration.description}</p>
                      </div>
                      <Button variant={integration.connected ? "outline" : "default"} size="sm">
                        {integration.connected ? "Connected" : "Connect"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Choose what notifications you want to receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { title: "New Subscribers", description: "Get notified when someone subscribes", defaultChecked: true },
                  { title: "Campaign Reports", description: "Receive reports after each campaign", defaultChecked: true },
                  { title: "Revenue Alerts", description: "Get notified about new revenue", defaultChecked: true },
                  { title: "Weekly Digest", description: "Weekly summary of your newsletter performance", defaultChecked: false },
                  { title: "Product Updates", description: "Learn about new features and improvements", defaultChecked: true },
                ].map((notification) => (
                  <div key={notification.title} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{notification.title}</p>
                      <p className="text-sm text-zinc-400">{notification.description}</p>
                    </div>
                    <Switch defaultChecked={notification.defaultChecked} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
                <CardDescription>Manage your subscription and billing information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-6 rounded-xl border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-violet-500/10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">Pro Plan</h3>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-xs font-medium text-indigo-400">
                        Current
                      </span>
                    </div>
                    <p className="text-zinc-400">$49/month • Renews on Feb 15, 2026</p>
                  </div>
                  <Button variant="outline">Change Plan</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Payment Method</h3>
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-16 rounded bg-zinc-800 flex items-center justify-center">
                        <span className="text-xs text-zinc-400">VISA</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">•••• •••• •••• 4242</p>
                        <p className="text-sm text-zinc-400">Expires 12/26</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Billing History</h3>
                  <div className="space-y-2">
                    {[
                      { date: "Jan 15, 2026", amount: "$49.00", status: "Paid" },
                      { date: "Dec 15, 2025", amount: "$49.00", status: "Paid" },
                      { date: "Nov 15, 2025", amount: "$49.00", status: "Paid" },
                    ].map((invoice, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg border border-zinc-800/50 bg-zinc-900/20"
                      >
                        <span className="text-sm text-zinc-300">{invoice.date}</span>
                        <span className="text-sm text-white font-medium">{invoice.amount}</span>
                        <span className="text-sm text-emerald-400">{invoice.status}</span>
                        <Button variant="ghost" size="sm">Download</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
