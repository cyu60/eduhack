import Image from 'next/image'
import { Container } from '@/components/sum25/Container'

const partners = [
  {
    name: 'Collaborative Learning Fund',
    logo: '/collaborative-learning-fund-logo.png',
    link: 'https://edfund.stanford.edu/2024-2025', 
    dimensions: { width: 400, height: 200 },
  },
  {
    name: 'Stanford Founders',
    logo: '/stanford-founders-logo.png',
    link: 'https://stanfordfounders.stanford.edu/',
    dimensions: { width: 200, height: 100 },
  },
  {
    name: 'Modo Academy',
    logo: '/modo-logo.png',
    link: 'https://joinmodo.com/',
    dimensions: { width: 200, height: 100 },
  },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-10">
      <Container>
        {/* Partners Section */}
        <div>
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-[var(--darkRed)] sm:text-5xl">
            Organized in Partnership With
          </h2>
          <div className="mx-auto mt-12 flex flex-row flex-wrap justify-center items-center gap-8 sm:gap-x-16">
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
      </Container>
    </section>
  )
}
