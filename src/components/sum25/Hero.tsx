'use client'

import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import { CountdownTimer } from '@/components/sum25/CountdownTimer'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative py-10 sm:pt-20 sm:pb-24">
      <div className="absolute inset-0">
        <BackgroundImage position="right" />
      </div>
      <Container className="lg:max-w-8xl mx-auto max-w-6xl px-6 lg:px-12 relative">
        
        <h1 className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
          <span className="hidden">EduHack - </span>AI4Good Event
        </h1>

        <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
          <p>
            Join us in exploring how AI can better serve non-profit organizations. Connect technological innovation with social welfare and become part of the next generation of socially responsible technical talents.
          </p>
          <p>
            A collaborative initiative by Stanford ACL and EduHack to bridge the gap between AI technology and social welfare, creating meaningful impact through innovative solutions.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="https://lu.ma/a8x369mf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--red)] px-6 py-2 text-lg font-semibold text-white hover:bg-[var(--darkRed)] focus:outline-none focus:ring-2 focus:ring-[var(--red)] focus:ring-offset-2"
          >
            Register Now
          </Link>
        </div>

        <CountdownTimer />

      </Container>
    </div>
  )
}