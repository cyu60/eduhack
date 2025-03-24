import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">EduHack - </span>Reimagining Education
            Through Technology
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              EduHack is Stanford GSE's first hackathon that bridges education
              and technology to create mutual impact. We invite organizations to
              showcase their toolkits and products, while students reimagine
              their applications in education.
            </p>
            <p>
              Join us for an intensive two-day in-person event at Stanford,
              followed by a two-month global open call to transform the future
              of learning.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Register Now
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['In-Person Slots', '30'],
              ['Event Duration', '2 Days + 2 Months'],
              ['Venue', 'CERAS'],
              ['Location', 'Stanford GSE'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
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
