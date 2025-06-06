import { Button } from '@/components/sum25/Button'
import { Container } from '@/components/sum25/Container'
import Image from 'next/image'
import headerLogo from '@/public/headerLogoWhite.png'
import '@/app/global.css'

export function Header() {
  return (
    <header className="relative z-50 flex-none bg-[var(--darkRed)]">
      <Container className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src={headerLogo}
            alt="EduHack"
            width={120}
            height={12}
            className="mr-2"
          />
        </div>

        {/* Center: Date and Location */}
        <div className="hidden md:flex flex-col items-center text-white font-mono text-sm">
          <div className="flex items-center gap-4">
            <p>
              <time dateTime="2024-06-07">13</time>–
              <time dateTime="2024-06-08">14 June, 2025</time>
            </p>
            <span className="hidden md:inline">|</span>
            <p>Stanford GSE, CERAS</p>
          </div>
        </div>

        {/* Right: Register Button */}
        <div className="hidden sm:flex">
          <Button variant="cream" href="https://tinyurl.com/48uabmfc" className="bg-[var(--cream)]">
            Register Now
          </Button>
        </div>
      </Container>
    </header>
  )
}
