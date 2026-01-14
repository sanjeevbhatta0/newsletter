"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Mail, Lock, User, ArrowRight, Github, Chrome, Check } from "lucide-react"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/25">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PulsePost</span>
            </Link>
            <h1 className="text-2xl font-bold text-white">Create your account</h1>
            <p className="text-zinc-400 mt-2">Start growing your newsletter today</p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full h-11 gap-3">
              <Chrome className="h-5 w-5" />
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full h-11 gap-3">
              <Github className="h-5 w-5" />
              Continue with GitHub
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 px-4 text-sm text-zinc-500">
              or continue with email
            </span>
          </div>

          {/* Register Form */}
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-zinc-500">Must be at least 8 characters</p>
            </div>

            <Link href="/onboarding">
              <Button className="w-full h-11 gap-2">
                Create Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </form>

          <p className="text-center text-sm text-zinc-400">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-zinc-500">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-zinc-400">Terms of Service</Link>
            {" "}and{" "}
            <Link href="/privacy" className="underline hover:text-zinc-400">Privacy Policy</Link>
          </p>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 border-l border-zinc-800 p-12">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-white mb-8">
            Everything you need to succeed
          </h2>
          <ul className="space-y-4">
            {[
              "Beautiful drag-and-drop email editor",
              "AI-powered writing assistant",
              "Advanced subscriber segmentation",
              "Real-time analytics dashboard",
              "Multiple monetization options",
              "Powered by Beehiiv infrastructure",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-zinc-300">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
              <div>
                <p className="font-medium text-white">Sarah Johnson</p>
                <p className="text-sm text-zinc-400">Tech Newsletter Creator</p>
              </div>
            </div>
            <p className="text-sm text-zinc-300 italic">
              &quot;PulsePost transformed my newsletter workflow. The beautiful interface makes writing a joy, and my open rates have increased by 30%!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
