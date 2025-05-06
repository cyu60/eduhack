import Image from 'next/image'

import { Container } from '@/components/sum25/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

const sponsors = [
  { name: 'Media/Content', logo: logoTransistor, category: 'Media Partner' },
  { name: 'Tech', logo: logoTuple, category: 'Technology Partner' },
  { name: 'Research', logo: logoStaticKit, category: 'Research Partner' },
  { name: 'NGO', logo: logoMirage, category: 'NGO Partner' },
  { name: 'CLF', logo: logoLaravel, category: 'Primary Sponsor' },
  { name: 'GSE', logo: logoStatamic, category: 'Host Institution' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[var(--darkRed)] sm:text-5xl">
          Supported by leading organizations across education and technology.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg tracking-tight text-[var(--darkRed)]">
          Join our diverse community of sponsors who are committed to
          transforming education through innovative technology solutions.
        </p>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
              <span className="text-sm font-medium text-[var(--red)]">
                {sponsor.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
