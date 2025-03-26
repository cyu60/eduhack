"use client"

import { Container } from "@/components/Container"
import { BackgroundImage } from "@/components/BackgroundImage"
import dynamic from "next/dynamic"
import "@leenguyen/react-flip-clock-countdown/dist/index.css"

// Dynamically import FlipClockCountdown with SSR disabled
const FlipClockCountdown = dynamic(
  () => import("@leenguyen/react-flip-clock-countdown"),
  { ssr: false }
)

export function CountdownTimer() {
  const targetDate = new Date("June 13, 2025 00:00:00").getTime()

  return (
    <section id="countdown" aria-label="Countdown" className="relative py-20 sm:py-32">
      <BackgroundImage className="absolute inset-0" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-[var(--red)] sm:text-5xl">
            The journey begins soon
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[var(--grey)]">
            Join us for an intensive weekend at Stanford GSE to reimagine the future of education through technology.
          </p>
        </div>

        <div className="mt-14 sm:mt-12">
          {/* Center the flip clock */}
          <div className="flex justify-center">
            <FlipClockCountdown
              to={targetDate}
              labels={['Days', 'Hours', 'Minutes', 'Seconds']}
              showLabels={true}
              showSeparators={true}
              duration={0.7}
              style={{
                '--fcc-digit-block-width': '80px',
                '--fcc-digit-block-height': '120px',
                '--fcc-digit-font-size': '50px',
              } as React.CSSProperties}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-[var(--grey)]">
              Schedule will be revealed soon
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
