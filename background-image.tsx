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
        "absolute inset-0 overflow-hidden bg-gradient-to-b from-background to-background/80 transition-opacity duration-500",
        position === "left" ? "bg-left" : "bg-right",
        mounted ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-primary/10",
          position === "left"
            ? "bg-gradient-to-r from-transparent to-primary/5"
            : "bg-gradient-to-l from-transparent to-primary/5",
        )}
      />
    </div>
  )
}

