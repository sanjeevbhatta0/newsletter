"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Building,
  Key,
  Check,
  ExternalLink,
  Loader2,
} from "lucide-react"

const steps = [
  { id: 1, title: "Publication", description: "Set up your newsletter" },
  { id: 2, title: "Beehiiv", description: "Connect your account" },
  { id: 3, title: "Ready", description: "Start creating" },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnecting(true)
    setTimeout(() => {
      setIsConnecting(false)
      setIsConnected(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">PulsePost</span>
          </Link>
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep > step.id
                      ? "bg-emerald-500 text-white"
                      : currentStep === step.id
                      ? "bg-indigo-500 text-white"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${currentStep > step.id ? "bg-emerald-500" : "bg-zinc-800"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-lg">
          {/* Step 1: Publication Setup */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 mb-4">
                  <Building className="h-8 w-8 text-indigo-400" />
                </div>
                <h1 className="text-2xl font-bold text-white">Set up your publication</h1>
                <p className="text-zinc-400 mt-2">Tell us about your newsletter</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pub-name">Publication Name</Label>
                  <Input id="pub-name" placeholder="My Awesome Newsletter" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pub-description">Description</Label>
                  <Input id="pub-description" placeholder="What's your newsletter about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pub-category">Category</Label>
                  <Input id="pub-category" placeholder="Technology, Business, Lifestyle..." />
                </div>
              </div>

              <Button className="w-full h-11 gap-2" onClick={() => setCurrentStep(2)}>
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Beehiiv Connection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4">
                  <Key className="h-8 w-8 text-amber-400" />
                </div>
                <h1 className="text-2xl font-bold text-white">Connect Beehiiv</h1>
                <p className="text-zinc-400 mt-2">Link your Beehiiv account to sync subscribers</p>
              </div>

              {!isConnected ? (
                <>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-key">Beehiiv API Key</Label>
                      <Input id="api-key" type="password" placeholder="Enter your API key" />
                      <p className="text-xs text-zinc-500">
                        Find your API key in{" "}
                        <a
                          href="https://app.beehiiv.com/settings/integrations"
                          target="_blank"
                          className="text-indigo-400 hover:underline inline-flex items-center gap-1"
                        >
                          Beehiiv Settings <ExternalLink className="h-3 w-3" />
                        </a>
                      </p>
                    </div>
                  </div>

                  <Button className="w-full h-11 gap-2" onClick={handleConnect} disabled={isConnecting}>
                    {isConnecting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        Connect Beehiiv
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <Card className="p-6 border-emerald-500/20 bg-emerald-500/5">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Connected Successfully!</p>
                        <p className="text-sm text-zinc-400">Publication: Tech Weekly</p>
                        <p className="text-sm text-zinc-400">12,453 subscribers synced</p>
                      </div>
                    </div>
                  </Card>

                  <Button className="w-full h-11 gap-2" onClick={() => setCurrentStep(3)}>
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </>
              )}

              <Button variant="ghost" className="w-full" onClick={() => setCurrentStep(1)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          )}

          {/* Step 3: Ready */}
          {currentStep === 3 && (
            <div className="space-y-6 text-center">
              <div className="mb-8">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 animate-pulse">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">You&apos;re all set!</h1>
                <p className="text-zinc-400 mt-2">Your newsletter platform is ready to go</p>
              </div>

              <div className="grid gap-4">
                {[
                  { label: "Publication created", done: true },
                  { label: "Beehiiv connected", done: true },
                  { label: "Subscribers synced", done: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30"
                  >
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="text-zinc-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link href="/dashboard">
                <Button size="xl" className="w-full gap-2">
                  Go to Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Button variant="ghost" className="w-full" onClick={() => setCurrentStep(2)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
