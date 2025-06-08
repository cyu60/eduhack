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
    // Calculate initial time difference immediately
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-06-18T13:00:00Z')
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      } else {
        // Return all zeros if the target date has passed
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }
    }

    // Set initial time immediately without waiting for first interval
    setTimeLeft(calculateTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-title"
    >
      <Container className="relative mt-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="countdown-title"
            className="font-display text-xl font-semibold tracking-tighter text-[var(--darkRed)] sm:text-2xl"
          >
            Event Starts In
          </h2>
          <div className="mt-4 flex flex-row gap-2 sm:gap-5 overflow-x-auto">
            <div className="flex-1 rounded-lg bg-[var(--cream)] p-2 sm:p-4">
              <div className="text-3xl sm:text-7xl font-bold text-[var(--darkRed)]">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-lg text-[var(--gray)]">Days</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--cream)] p-2 sm:p-4">
              <div className="text-3xl sm:text-7xl font-bold text-[var(--darkRed)]">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-lg text-[var(--gray)]">Hours</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--cream)] p-2 sm:p-4">
              <div className="text-3xl sm:text-7xl font-bold text-[var(--darkRed)]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-lg text-[var(--gray)]">Minutes</div>
            </div>
            <div className="flex-1 rounded-lg bg-[var(--cream)] p-2 sm:p-4">
              <div className="text-3xl sm:text-7xl font-bold text-[var(--darkRed)]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-lg text-[var(--gray)]">Seconds</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
