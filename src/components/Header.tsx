import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import headerLogo from "@/public/headerLogoWhite.png"
import '@/app/global.css'

export function Header() {
  return (
    <header className="relative z-50 flex-none py-4 bg-[var(--darkRed)]">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="flex items-center lg:mt-0 lg:grow lg:basis-0">
          <Image src={headerLogo} alt="EduHack" width={180} height={32} />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4 text-white">
            <p>
              <time dateTime="2024-06-07">13</time>-
              <time dateTime="2024-06-08">14 June, 2025</time>
            </p>
            <span className="hidden md:inline">|</span>
            <p>Stanford GSE, CERAS</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button variant="cream" href="#" className="bg-[var(--cream)]">Register Now</Button>
        </div>
      </Container>
    </header>
  )
}
