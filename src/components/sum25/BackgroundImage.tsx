"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function BackgroundImage({
  className,
  position = "left",
}: {
  className?: string
  position?: "left" | "right"
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden transition-opacity duration-500",
        position === "left" ? "bg-left" : "bg-right",
        mounted ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{
        background: `linear-gradient(to bottom, transparent, var(--bgRed))`,
      }}
    >
      <div
        className={cn("absolute inset-0")}
        style={{
          background:
            position === "left"
              ? `linear-gradient(to right, transparent, var(--cream, --bgRed))`
              : `linear-gradient(to left, transparent, var(--cream, --bgRed))`,
        }}
      />
    </div>
  )
}