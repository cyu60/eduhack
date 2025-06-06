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
    const targetDate = new Date('2025-06-18T013:00:00')

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
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="countdown-title"
            className="font-display text-4xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-5xl"
          >
            Event Starts In
          </h2>
          <div className="mt-10 grid grid-cols-4 gap-5">
            <div className="rounded-lg bg-[var(--cream)] p-4">
              <div className="text-7xl font-bold text-[var(--darkRed)]">
                {timeLeft.days}
              </div>
              <div className="text-lg text-[var(--gray)]">Days</div>
            </div>
            <div className="rounded-lg bg-[var(--cream)] p-4">
              <div className="text-7xl font-bold text-[var(--darkRed)]">
                {timeLeft.hours}
              </div>
              <div className="text-lg text-[var(--gray)]">Hours</div>
            </div>
            <div className="rounded-lg bg-[var(--cream)] p-4">
              <div className="text-7xl font-bold text-[var(--darkRed)]">
                {timeLeft.minutes}
              </div>
              <div className="text-lg text-[var(--gray)]">Minutes</div>
            </div>
            <div className="rounded-lg bg-[var(--cream)] p-4">
              <div className="text-7xl font-bold text-[var(--darkRed)]">
                {timeLeft.seconds}
              </div>
              <div className="text-lg text-[var(--gray)]">Seconds</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
