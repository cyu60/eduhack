import { BackgroundImage } from '@/components/sum25/BackgroundImage'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/sum25/Container'

export function Hero() {
  return (
    <div className="relative py-10 sm:pt-20 sm:pb-24">
      <BackgroundImage className="-top-24 -bottom-14" />
      <Container className="relative">
        <div className="lg:max-w-8xl mx-auto max-w-6xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
            <span className="hidden">EduHack - </span>Reimagining Education
            Through Technology
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
            <p>
              EduHack is first student-led hackathon at Stanford GSE that
              bridges education and emerging technologies to create lasting
              impact. We explore how generative AI and cutting-edge technologies
              can transform the future of learning and revolutionize the
              education space.
            </p>
            <p>
              Join us for an intensive two-day in-person event at Stanford,
              followed by a two-week global open call to transform the future of
              learning.
            </p>
          </div>
          <Button className="mt-10 w-full sm:hidden">Register Now</Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Hackers', '1K+'],
              ['Event Duration', '2 Days + 2 Weeks'],
              ['Venue', 'CERAS'],
              ['Location', 'Stanford GSE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-[var(--red)]">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-[var(--darkRed)]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
