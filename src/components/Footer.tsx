import { Container } from '@/components/Container'
import headerLogo from '@/public/headerLogoRed.png'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image src={headerLogo} alt="EduHack" width={120} height={32} />
        <div className="mt-6 flex flex-col items-center gap-4 text-base font-medium text-[var(--darkRed)] hover:text-[var(--red)] md:mt-0 md:flex-row">
          <a href="mailto:chinat@stanford.edu">Contact Us</a>
          <span className="hidden md:inline">|</span>
          <a href="/#">Become a Sponsor</a>
          <span className="hidden md:inline">|</span>
          <p>© 2025 EduHack</p>
        </div>
      </Container>
    </footer>
  )
}
