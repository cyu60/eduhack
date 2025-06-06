'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/sum25/Container'

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2024-06-18T09:00:00')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-title"
      className="py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 overflow-hidden opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent, var(--bgRed))`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, transparent, var(--cream, --bgRed))`,
          }}
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="countdown-title"
            className="font-display text-4xl font-medium tracking-tighter text-[var(--red)] sm:text-5xl"
          >
            Event Starts In
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[var(--darkRed)]">
                {timeLeft.days}
              </div>
              <div className="text-sm text-[var(--gray)]">Days</div>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[var(--darkRed)]">
                {timeLeft.hours}
              </div>
              <div className="text-sm text-[var(--gray)]">Hours</div>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[var(--darkRed)]">
                {timeLeft.minutes}
              </div>
              <div className="text-sm text-[var(--gray)]">Minutes</div>
            </div>
            <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[var(--darkRed)]">
                {timeLeft.seconds}
              </div>
              <div className="text-sm text-[var(--gray)]">Seconds</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
