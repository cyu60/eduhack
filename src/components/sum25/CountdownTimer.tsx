'use client'

import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/sum25/BackgroundImage'
import dynamic from 'next/dynamic'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

const FlipClockCountdown = dynamic(
  () => import('@leenguyen/react-flip-clock-countdown'),
  { ssr: false },
)

export function CountdownTimer() {
  const targetDate = new Date('June 13, 2025 00:00:00').getTime()

  return (
    <section
      id="countdown"
      aria-label="Countdown"
      className="relative py-16 sm:py-32"
    >
      <BackgroundImage className="absolute inset-0" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-4xl lg:pr-24 lg:text-left">
          <h2 className="font-display text-3xl font-medium tracking-tighter text-[var(--red)] sm:text-4xl">
            The journey begins soon
          </h2>
          <p className="mt-4 font-display text-lg tracking-tight text-[var(--grey)] sm:text-2xl">
            Join us for an intensive weekend at Stanford GSE to reimagine the
            future of education through technology.
          </p>
        </div>

        <div className="mt-12 sm:mt-12">
          {/* Center the flip clock */}
          <div className="flex justify-center">
            <FlipClockCountdown
              to={targetDate}
              labels={['Days', 'Hours', 'Minutes', 'Seconds']}
              showLabels={true}
              showSeparators={true}
              duration={0.7}
              style={
                {
                  '--fcc-digit-block-width': '60px', // Adjusted for mobile
                  '--fcc-digit-block-height': '90px', // Adjusted for mobile
                  '--fcc-digit-font-size': '30px', // Adjusted for mobile
                } as React.CSSProperties
              }
              className="scale-60 sm:scale-100" // Scale down for smaller screens
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-[var(--gray)] sm:text-xl">
              Schedule will be revealed soon
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
