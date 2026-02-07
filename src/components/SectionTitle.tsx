import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionTitleProps = {
  children: ReactNode
  subtitle?: string
  className?: string
}

export function SectionTitle({ children, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
