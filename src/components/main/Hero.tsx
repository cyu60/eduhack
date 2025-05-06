import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BackgroundImage } from '@/components/sum25/BackgroundImage'
import { Container } from '@/components/sum25/Container'
import Slider from 'react-infinite-logo-slider'

const cards = [
    { title: 'Interactive Workshops', description: 'Participate in hands-on sessions with experts.' },
    { title: 'Expert Panels',         description: 'Gain insights from leading educators and professionals.' },
    { title: 'Networking Events',     description: 'Connect with like-minded individuals and organizations.' },
    { title: 'Live Demos',            description: 'Experience the latest in educational technology in real time.' },
]

const stats = [
    ['NGO1', 'Logo'],
    ['NGO2', 'Logo'],
    ['NGO3', 'Logo'],
    ['NGO4', 'Logo'],
    ['NGO5', 'Logo'],
]

export function Hero() {
    return (
        <div className="relative flex-grow py-10 sm:pt-20 sm:pb-24">
        <BackgroundImage className="-top-24 -bottom-14" />

        <Container className="relative mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl lg:max-w-8xl lg:px-12">
            {/* LEFT: Sum25 Hero content */}
            <div className="space-y-6 text-white">
            <h1 className="font-display text-3xl sm:text-7xl font-bold tracking-tighter text-[var(--darkRed)]">
                Education<br/>Through Technology
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
                <p>
                EduHack is Stanford GSE's first hackathon that bridges education
                and technology to create mutual impact. We invite organizations to
                showcase their toolkits and products, while students reimagine
                their applications in education.
                </p>
            </div>

            <Button className="mt-10 w-full sm:hidden">
                <Link href="/register">Register Now</Link>
            </Button>

            {/* NGO slider */}
            <div className="mt-10 sm:mt-16">
                <Slider
                width="200px"
                duration={30}
                pauseOnHover={true}
                blurBorders={false}
                >
                {stats.map(([label, value]) => (
                    <Slider.Slide key={label}>
                    <div className="p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg text-white text-center">
                        <dt className="font-mono text-sm text-[var(--red)]">{label}</dt>
                        <dd className="mt-1 text-2xl font-semibold tracking-tight text-[var(--darkRed)]">
                        {value}
                        </dd>
                    </div>
                    </Slider.Slide>
                ))}
                </Slider>
            </div>
            </div>

            {/* RIGHT: placeholder cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map(({ title, description }) => (
                <div
                key={title}
                className="bg-[var(--cream)] bg-opacity-10 backdrop-blur-lg rounded-lg p-6"
                >
                <h3 className="text-xl font-semibold text-[var(--darkRed)]">{title}</h3>
                <p className="mt-2 text-[var(--darkRed)]">{description}</p>
                </div>
            ))}
            </div>
        </Container>

        {/* Vision & Mission placeholders */}
        <Container className="mt-20 mb-10 relative mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">Our Vision</h2>
                <p className="text-lg text-[var(--gray)]">
                A placeholder for the vision statement that outlines the long-term goals of EduHack.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">Our Mission</h2>
                <p className="text-lg text-[var(--gray)]">
                A placeholder for the mission statement that describes EduHack’s core purpose and values.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">Our Values</h2>
                <p className="text-lg text-[var(--gray)]">
                A placeholder for the values that guide our community and decision-making.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[var(--darkRed)]">Our Goals</h2>
                <p className="text-lg text-[var(--gray)]">
                A placeholder for the specific, measurable objectives we aim to achieve at EduHack.
                </p>
            </div>
            </div>
        </Container>
        </div>
    )
}
