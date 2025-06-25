'use client'

import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import { CTAButtons } from '@/components/in-person/CTAButtons'
import { MissionSection } from '@/components/in-person/MissionSection'
import { TutorialSection } from '@/components/in-person/TutorialSection'
import { BenefitsSection } from '@/components/in-person/BenefitsSection'
import { LogisticsSection } from '@/components/in-person/LogisticsSection'
import { Zap } from 'lucide-react'

export function Hero() {
    return (
        <div className="relative min-h-screen w-full">
        <div className="absolute inset-0">
            <BackgroundImage position="right" />
        </div>
        <Container className="lg:max-w-8xl relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 text-center lg:px-12">
            {/* Centered Hero Header and CTA */}
            <div className="flex min-h-screen w-full flex-col items-center justify-center">
            <div className="text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-semibold text-[var(--darkRed)]">
                <Zap className="h-4 w-4" />
                <span>🚨 EduHack Online Phase Is LIVE</span>
                </div>
                <h1 className="mb-6 font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
                Your Chance to Build for Impact!
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-xl text-[var(--gray)]">
                Missed your shot at the in-person hackathon? Or ready to take your
                project even further? The online phase of EduHack is officially
                LIVE, and you're invited to submit!
                </p>
                <CTAButtons />
            </div>
            </div>
            {/* Mission Section (revealed on scroll) */}
            <MissionSection />
            <TutorialSection />
            <BenefitsSection />
            <LogisticsSection />
        </Container>
        </div>
  )
}
