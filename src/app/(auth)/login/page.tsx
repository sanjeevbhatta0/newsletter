"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react"

export default function LoginPage() {
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
            <h1 className="text-2xl font-bold text-white">Welcome back</h1>
            <p className="text-zinc-400 mt-2">Sign in to continue to your dashboard</p>
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

          {/* Login Form */}
          <form className="space-y-4">
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
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-indigo-400 hover:text-indigo-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                />
              </div>
            </div>

            <Link href="/dashboard">
              <Button className="w-full h-11 gap-2">
                Sign In
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </form>

          <p className="text-center text-sm text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-indigo-400 hover:text-indigo-300 font-medium">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-purple-500/20 border-l border-zinc-800 p-12">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-2xl shadow-indigo-500/30">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Grow your newsletter with PulsePost
          </h2>
          <p className="text-zinc-400">
            Join thousands of creators who use PulsePost to write, schedule, and monetize their newsletters.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-zinc-900 -ml-2 first:ml-0"
              />
            ))}
            <span className="text-sm text-zinc-400 ml-2">10K+ creators</span>
          </div>
        </div>
      </div>
    </div>
  )
}
