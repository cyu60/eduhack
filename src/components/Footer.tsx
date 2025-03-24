import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <div className="mt-6 flex flex-col items-center gap-4 md:mt-0 md:flex-row">
          <a
            href="mailto:eduhack@stanford.edu"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Contact Us
          </a>
          <span className="hidden text-blue-600/50 md:inline">|</span>
          <a
            href="/#"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Become a Sponsor
          </a>
          <span className="hidden text-blue-600/50 md:inline">|</span>
          <p className="text-base font-medium text-blue-600">© 2025 EduHack</p>
        </div>
      </Container>
    </footer>
  )
}
