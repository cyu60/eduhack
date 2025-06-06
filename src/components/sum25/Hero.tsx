import { Button } from '@/components/ui/button'
import { Container } from '@/components/sum25/Container'

export function Hero() {
  return (
    <div className="relative py-10 sm:pt-20 sm:pb-24">
      <div
        className="absolute inset-0 -top-24 -bottom-14 overflow-hidden opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent, var(--bgRed))`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, transparent, var(--cream, --bgRed))`,
          }}
        />
      </div>
      <Container className="relative">
        <div className="lg:max-w-8xl mx-auto max-w-6xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-7xl">
            <span className="hidden">EduHack - </span>AI4Good Event
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-[var(--gray)]">
            <p>
              Join us in exploring how AI can better serve non-profit
              organizations. Connect technological innovation with social
              welfare and become part of the next generation of socially
              responsible technical talents.
            </p>
            <p>
              A collaborative initiative by Stanford ACL and EduHack to bridge
              the gap between AI technology and social welfare, creating
              meaningful impact through innovative solutions.
            </p>
          </div>
          <Button className="mt-10 w-full sm:hidden">Register Now</Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Phase I', 'Launch Meeting'],
              ['Phase II', 'Design Competition'],
              ['Phase III', 'Internship'],
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
