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
      <Container className="lg:max-w-8xl relative mx-auto max-w-6xl px-6 lg:px-12">
        <h1 className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
          <span className="hidden">EduHack - </span>AI4Good Event
        </h1>

        <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
          <p>
            Join us in exploring how AI can better serve non-profit
            organizations. Connect technological innovation with social welfare
            and become part of the next generation of socially responsible
            technical talents.
          </p>
          <p>
            A collaborative initiative by Stanford ACL and EduHack to bridge the
            gap between AI technology and social welfare, creating meaningful
            impact through innovative solutions.
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="https://lu.ma/a8x369mf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--red)] px-6 py-2 text-lg font-semibold text-white hover:bg-[var(--darkRed)] focus:ring-2 focus:ring-[var(--red)] focus:ring-offset-2 focus:outline-none"
          >
            Register Now
          </Link>
        </div>

        <CountdownTimer />

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold text-[var(--darkRed)]">
            Event Location
          </h2>
          <div className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5284139418823!2d-122.1669823!3d37.42462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad6c545d035%3A0x21b1c44ea2bbcbb5!2sCenter%20for%20Education%20Research%20at%20Stanford%20(CERAS)!5e0!3m2!1sen!2sus!4v1749340289734!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
