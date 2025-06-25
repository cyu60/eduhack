'use client'

import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/BackgroundImage'
import Link from 'next/link'
import { ArrowRight, Globe, Users, Trophy, Calendar, Zap } from 'lucide-react'

export function Hero() {
    return (
        <div className="relative py-10 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0">
            <BackgroundImage position="right" />
        </div>
        <Container className="lg:max-w-8xl relative mx-auto max-w-6xl px-6 lg:px-12">
            {/* Main Header */}
            <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-4 py-2 text-sm font-semibold text-[var(--darkRed)]">
                <Zap className="h-4 w-4" />
                <span>🚨 EduHack Online Phase Is LIVE</span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
                Your Chance to Build for Impact!
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl text-[var(--gray)]">
                Missed your shot at the in-person hackathon? Or ready to take your
                project even further? The online phase of EduHack is officially LIVE
                – and you're invited to submit!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                href="https://www.mentormates.ai/events/eduhack/overview"
                className="inline-flex items-center justify-center rounded-md bg-[var(--darkRed)] px-8 py-3 text-lg font-semibold text-white hover:bg-[var(--red)]"
                >
                Register Now
                </Link>
                <Link
                href="https://discord.gg/vun48XqWsz"
                className="inline-flex items-center justify-center rounded-md bg-[var(--cream)] px-8 py-3 text-lg font-semibold text-[var(--darkRed)] hover:bg-[var(--red)] hover:text-white"
                >
                Join Discord
                </Link>
            </div>
            </div>

            {/* Mission Section */}
            <div className="mb-8 rounded-2xl border border-[var(--cream)] bg-white/80 p-8 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--red)]">
                <Globe className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">
                Your Mission
                </h2>
            </div>
            <p className="text-lg leading-relaxed text-[var(--gray)]">
                Build a simple website that shares your big idea:{' '}
                <strong>
                How can AI help a nonprofit of your choice make real-world impact?
                </strong>
            </p>
            <p className="mt-3 text-[var(--gray)]">
                No need to overthink the format – it's flexible and open-ended.
                Whether it's a 1-pager or a full roadmap, it's your voice, your
                vision.
            </p>
            </div>

            {/* Tutorial Section */}
            <div className="mb-8 rounded-2xl bg-gradient-to-r from-[var(--cream)] to-[var(--white)] p-6">
            <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--red)]">
                <span className="text-lg font-bold text-white">💡</span>
                </div>
                <div>
                <h3 className="mb-2 text-xl font-bold text-[var(--darkRed)]">
                    Not a coder? No problem!
                </h3>
                <p className="mb-4 text-[var(--gray)]">
                    Check out this quick tutorial to build and launch a site in
                    under 20 minutes using AI:
                </p>
                <div className="space-y-2">
                    <Link
                    href="https://drive.google.com/file/d/1U4uU01H2p7SIRJpgeeOtDEzq90fIzr-g/view?usp=drivesdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[var(--red)] hover:text-[var(--darkRed)]"
                    >
                    <span>📹 In-person recording</span>
                    <ArrowRight className="h-4 w-4" />
                    </Link>
                    <br />
                    <Link
                    href="https://tinyurl.com/muwj9wy9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[var(--red)] hover:text-[var(--darkRed)]"
                    >
                    <span>🔗 Quick tutorial</span>
                    <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                </div>
            </div>
            </div>

            {/* Benefits Grid */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
                    <Users className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-[var(--darkRed)]">
                    Get Your Project Seen
                </h3>
                </div>
                <p className="text-[var(--gray)]">
                Get your project in front of real NGOs and mentors
                </p>
            </div>

            <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
                    <Trophy className="h-4 w-4 text-white" />
                </div>
                <h3 className="font-bold text-[var(--darkRed)]">
                    Compete for Prizes
                </h3>
                </div>
                <p className="text-[var(--gray)]">
                Win internship offers from leading EdTech NGOs!
                </p>
            </div>

            <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
                    <span className="text-sm font-bold text-white">💼</span>
                </div>
                <h3 className="font-bold text-[var(--darkRed)]">
                    Build Your Portfolio
                </h3>
                </div>
                <p className="text-[var(--gray)]">
                Add an impactful project to your resume
                </p>
            </div>

            <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
                    <span className="text-sm font-bold text-white">🌎</span>
                </div>
                <h3 className="font-bold text-[var(--darkRed)]">
                    Connect & Collaborate
                </h3>
                </div>
                <p className="text-[var(--gray)]">Meet like-minded changemakers</p>
            </div>
            </div>

            {/* Logistics Section */}
            <div className="mb-8 rounded-2xl bg-[var(--navy)] p-6 text-white">
            <div className="mb-4 flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                <h3 className="text-xl font-bold">Logistics at a Glance</h3>
            </div>
            <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                <p>
                    <strong>Deadline:</strong> July 1, 2025 (Extended from June 27,
                    2025)
                </p>
                <p>
                    <strong>Team Size:</strong> Join solo or in a team (up to 3
                    people)
                </p>
                </div>
                <div>
                <p>
                    <strong>Format:</strong> Checklist = optional. Your creativity =
                    required.
                </p>
                <p>
                    <strong>Goal:</strong> Reimagine the future of social
                    impact—powered by your ideas and AI.
                </p>
                </div>
            </div>
            </div>
        </Container>
        </div>
    )
}
