import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
        secondary:
          "border-transparent bg-zinc-800 text-zinc-300 border-zinc-700",
        success:
          "border-transparent bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        warning:
          "border-transparent bg-amber-500/10 text-amber-400 border-amber-500/20",
        destructive:
          "border-transparent bg-red-500/10 text-red-400 border-red-500/20",
        outline:
          "text-zinc-400 border-zinc-700",
        premium:
          "border-transparent bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-400 border-amber-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
