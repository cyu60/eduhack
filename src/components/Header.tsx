import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'
import  headerLogo  from "@/public/headerLogoRed.png"
import '@/app/global.css'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-10">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="flex items-center lg:mt-0 lg:grow lg:basis-0 mt-8 sm:mt-0">
          <Image src={headerLogo} alt="EduHack" width={180} height={32} />
        </div>
        <div className="sm:flex sm:flex-auto sm:basis-full sm:overflow-x-auto sm:border-red-600/10 sm:py-4 sm:font-mono sm:text-sm sm:whitespace-nowrap sm:text-blue-600 sm:sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4 text-[var(--darkRed)]">
            <p>
              <time dateTime="2024-06-07">13</time>-
              <time dateTime="2024-06-08">14 June, 2025</time>
            </p>
            <span className="hidden md:inline">|</span>
            <p>Stanford GSE, CERAS</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="#">Register Now</Button>
        </div>
      </Container>
    </header>
  )
}