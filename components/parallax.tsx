"use client"

import { useEffect, useRef, type ReactNode, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
  offset?: number
}

export function ParallaxLayer({ children, speed = 0.5, className, direction = "up", offset = 0 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const scrollPosition = useRef(0)
  const requestRef = useRef<number>()

  const animate = useCallback(() => {
    if (!ref.current) return

    const currentScroll = window.scrollY
    if (currentScroll !== scrollPosition.current) {
      scrollPosition.current = currentScroll
      const yPos = direction === "up" ? currentScroll * speed + offset : currentScroll * -speed + offset

      ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`
    }
    requestRef.current = requestAnimationFrame(animate)
  }, [direction, offset, speed])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [animate])

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}

export function ParallaxContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("relative overflow-hidden", className)}>{children}</div>
}

