import { Button } from '@/components/sum25/Button'
import { Container } from '@/components/sum25/Container'
import Image from 'next/image'
import headerLogo from '@/public/headerLogoWhite.png'
import '@/app/global.css'

export function Header() {
  return (
    <header className="relative z-50 flex-none bg-[var(--darkRed)]">
      <Container className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src={headerLogo}
            alt="EduHack"
            width={150}
            height={90}
            className="mr-2 sm:w-[120px]"
          />
        </div>

        {/* Center: Date and Location */}
        <div className="flex flex-col items-center text-white font-mono text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>
              <time dateTime="2024-06-18">18 June 2025</time>
            </p>
            <span className="hidden sm:inline">|</span>
            <p>Stanford GSE, CERAS</p>
          </div>
        </div>

        {/* Right: Register Button */}
        <div className="hidden sm:flex">
          <Button 
            variant="cream" 
            href="https://lu.ma/a8x369mf" 
            className="bg-[var(--cream)] text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
          >
            Register Now
          </Button>
        </div>
      </Container>
    </header>
  )
}
