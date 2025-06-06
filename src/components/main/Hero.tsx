import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BackgroundImage } from '@/components/sum25/BackgroundImage'
import { Container } from '@/components/sum25/Container'
import Slider from 'react-infinite-logo-slider'

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
      <BackgroundImage className="-top-24 -bottom-14" />

      <Container className="lg:max-w-8xl relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-12">
        {/* LEFT: Hero content */}
        <div className="space-y-6 text-white">
          <h1 className="font-display text-3xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
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
            <Link href="/register">Register Now</Link>
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

        {/* RIGHT: Event cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map(({ title, description }) => (
            <div
              key={title}
              className="bg-opacity-10 rounded-lg bg-[var(--cream)] p-6 backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--darkRed)]">
                {title}
              </h3>
              <p className="mt-2 text-[var(--darkRed)]">{description}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Vision & Mission sections */}
      <Container className="relative mx-auto mt-20 mb-10 max-w-4xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--darkRed)]">
              Our Vision
            </h2>
            <p className="text-lg text-[var(--gray)]">
              To discover and cultivate outstanding talents with both technical
              capabilities and social responsibility, while establishing
              long-term cooperation between the technology community and public
              welfare organizations.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--darkRed)]">
              Our Mission
            </h2>
            <p className="text-lg text-[var(--gray)]">
              To explore how AI can better serve non-profit organizations by
              connecting technological innovation with social welfare and
              promoting the application of AI technology in solving social
              problems.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--darkRed)]">
              Our Values
            </h2>
            <p className="text-lg text-[var(--gray)]">
              Integration of technology and public welfare, talent development,
              industry-academia-research collaboration, and innovative solutions
              for social impact.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[var(--darkRed)]">
              Our Goals
            </h2>
            <p className="text-lg text-[var(--gray)]">
              Produce excellent web pages and applications showcasing AI in
              NGOs, promote actual implementation of AI technology in public
              welfare, and provide valuable experience and development
              opportunities for participants.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
