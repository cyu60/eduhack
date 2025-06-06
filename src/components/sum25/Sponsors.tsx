import Image from 'next/image'

import { Container } from '@/components/sum25/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

const sponsors = [
  {
    name: 'Collaborative Learning Fund',
    logo: '/collaborative-learning-fund-logo.png',
    link: 'https://edfund.stanford.edu/2024-2025',
    dimensions: { width: 400, height: 200 },
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        {/* Partners Section */}
        <div className="mb-24">
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[var(--darkRed)] sm:text-5xl">
            Organized in Partnership With
          </h2>
          <div className="mx-auto mt-12 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-16">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center space-y-4 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.dimensions.width}
                    height={partner.dimensions.height}
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div>
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[var(--darkRed)] sm:text-5xl">
            Our Sponsors
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg tracking-tight text-[var(--darkRed)]">
            Supported by leading educational institutions and more sponsors to
            come
          </p>
          <div className="mx-auto mt-12 flex justify-center">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center space-y-4 transition-transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.dimensions.width}
                    height={sponsor.dimensions.height}
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
