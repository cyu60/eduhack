'use client'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/BackgroundImage'

const cards = [
  {
    title: 'Phase I: Launch Meeting',
    description:
      'June 18 @ Stanford GSE Ceras building - Event introduction, NGO needs sharing, and team building.',
  },
  {
    title: 'Phase II: Design Competition',
    description: 'Two-week online competition to design AI solutions for NGOs.',
  },
  {
    title: 'Phase III: Internship',
    description:
      'Selected participants receive NGO internship opportunities to implement their solutions.',
  },
  {
    title: 'Professional Growth',
    description:
      'Gain valuable experience, official certification, and career development opportunities.',
  },
]

export function Hero() {
  return (
    <div className="relative py-10 sm:pt-20 sm:pb-24">
      <div className="absolute inset-0">
        <BackgroundImage position="right" />
      </div>
      <Container className="lg:max-w-8xl mx-auto max-w-6xl px-6 lg:px-12 relative">
        
        {/* Main Heading */}
        <h1 className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
          <span className="hidden">EduHack - </span>AI4Good Event
        </h1>

        {/* Descriptive Text */}
        <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
          <p>
            Join us in exploring how AI can better serve non-profit organizations. Connect technological innovation with social welfare and become part of the next generation of socially responsible technical talents.
          </p>
          <p>
            A collaborative initiative by Stanford ACL and EduHack to bridge the gap between AI technology and social welfare, creating meaningful impact through innovative solutions.
          </p>
        </div>

        <Button className="mt-10 w-full sm:hidden">Register Now</Button>

        {/* Definition List with cards data */}
        <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:mt-16 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-16">
          {cards.map((card) => (
            <div key={card.title}>
              <dt className="font-mono text-sm text-[var(--red)]">
                {card.title}
              </dt>
              <dd className="mt-1 text-xl font-semibold tracking-tight text-[var(--darkRed)]">
                {card.description}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}