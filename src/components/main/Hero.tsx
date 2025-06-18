'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/sum25/Container'
import Slider from 'react-infinite-logo-slider'
import { BackgroundImage } from '@/components/BackgroundImage'

const stats = [
  ['Stanford ACL', 'Partner'],
  ['Partner NGOs', 'Collaborators'],
  ['Technical Experts', 'Mentors'],
  ['Industry Leaders', 'Advisors'],
  ['Student Innovators', 'Participants'],
]

export function Hero() {
  return (
    <div className="relative flex-grow py-10 sm:pt-20 sm:pb-24">
      <BackgroundImage position="right" />

      <Container className="lg:max-w-8xl relative mx-auto max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="space-y-6 text-white">
          <h1 className="font-display text-3xl font-bold text-[var(--darkRed)] sm:text-7xl">
            EduHack:
            <br />
            AI4Good Event
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
            <p>
              Join us in exploring how AI can better serve non-profit
              organizations. Connect technological innovation with social
              welfare and become part of the next generation of socially
              responsible technical talents.
            </p>
          </div>

          <Button className="mt-10 w-full sm:hidden">
            <Link href="https://www.mentormates.ai/events/eduhack/overview">Register Now</Link>
          </Button>

          {/* Partner slider */}
          <div className="mt-10 sm:mt-16">
            <Slider
              width="200px"
              duration={30}
              pauseOnHover={true}
              blurBorders={false}
            >
              {stats.map(([label, value]) => (
                <Slider.Slide key={label}>
                  <div className="bg-opacity-10 rounded-lg bg-white p-4 text-center text-white backdrop-blur-lg">
                    <dt className="font-mono text-sm text-[var(--red)]">
                      {label}
                    </dt>
                    <dd className="mt-1 text-2xl font-semibold tracking-tight text-[var(--darkRed)]">
                      {value}
                    </dd>
                  </div>
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="text-2xl font-bold bg-[var(--darkRed)] p-8 text-white hover:bg-[var(--cream)]">
            <Link href="/sum25">See Latest Event</Link>
          </Button>
        </div>
      </Container>
    </div>
  )
}