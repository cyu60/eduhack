import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
// import { Logo } from '@/components/Logo'
import Image from 'next/image'
import  headerLogo  from "@/public/headerLogo.png"

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="flex items-center mt-10 lg:mt-0 lg:grow lg:basis-0">
          {/* <Logo className="h-12 w-auto text-slate-900" /> */}
          <Image src={headerLogo} alt="EduHack" width={180} height={32} />
          {/* <h1 className="ml-2 text-3xl font-bold text-[var(--navy)]">Edu<span className="italic">Hack</span></h1> */}
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2024-06-07">13</time>-
              <time dateTime="2024-06-08">14 June, 2025</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
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
