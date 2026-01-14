import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Zap, BarChart3, DollarSign, Users, Check } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/25">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">PulsePost</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300 mb-8">
            <Sparkles className="h-4 w-4" />
            Powered by Beehiiv
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6">
            The <span className="gradient-text">Beautiful</span> Newsletter
            <br />Platform for Creators
          </h1>

          <p className="mx-auto max-w-2xl text-xl text-zinc-400 mb-10">
            Manage your newsletters with a stunning interface. Write, schedule, analyze, and monetize your content with ease. Built on top of Beehiiv&apos;s powerful infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="xl" className="gap-2">
                Start for Free
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="xl" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Creators", value: "10K+" },
              { label: "Emails Sent", value: "50M+" },
              { label: "Revenue Generated", value: "$2M+" },
              { label: "Avg Open Rate", value: "45%" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything you need to grow
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              A complete toolkit for newsletter creators who want to focus on what matters: creating great content.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Beautiful Editor",
                description: "Drag-and-drop blocks with AI-powered writing assistance",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Users,
                title: "Subscriber Management",
                description: "Advanced segmentation, tagging, and engagement scoring",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: BarChart3,
                title: "Deep Analytics",
                description: "Track opens, clicks, and revenue with beautiful charts",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: DollarSign,
                title: "Monetization",
                description: "Paid subscriptions, ads, and boost partnerships",
                color: "from-violet-500 to-purple-500",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 card-hover"
              >
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-r ${feature.color} p-3`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-zinc-400">Start free, scale as you grow</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$0",
                description: "Perfect for getting started",
                features: ["1 publication", "Up to 2,500 subscribers", "Basic editor", "Email support"],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "$49",
                description: "For growing creators",
                features: ["3 publications", "Up to 25,000 subscribers", "AI writing assistant", "Advanced analytics", "Priority support"],
                cta: "Start Pro Trial",
                popular: true,
              },
              {
                name: "Agency",
                price: "$149",
                description: "For teams and agencies",
                features: ["10 publications", "Up to 100,000 subscribers", "White-label branding", "API access", "Dedicated support"],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.popular
                    ? "border-indigo-500/50 bg-gradient-to-b from-indigo-500/10 to-transparent shadow-xl shadow-indigo-500/10"
                    : "border-zinc-800 bg-zinc-900/50"
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-indigo-400 mb-4">MOST POPULAR</div>
                )}
                <div className="text-2xl font-bold text-white mb-1">{plan.name}</div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "$0" && <span className="text-zinc-500">/month</span>}
                </div>
                <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>
                <Button className="w-full mb-6" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                      <Check className="h-4 w-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-zinc-800/50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to grow your newsletter?
          </h2>
          <p className="text-zinc-400 mb-8">
            Join thousands of creators building their audience with PulsePost.
          </p>
          <Link href="/register">
            <Button size="xl" className="gap-2">
              Get Started for Free
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-white">PulsePost</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
              <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            </div>
            <p className="text-sm text-zinc-500">
              © 2026 PulsePost. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
