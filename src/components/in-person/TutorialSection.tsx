import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function TutorialSection() {
  return (
    <div className="mb-8 w-full rounded-2xl bg-gradient-to-r from-[var(--cream)] to-[var(--white)] p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--red)]">
          <span className="text-lg font-bold text-white">💡</span>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-bold text-[var(--darkRed)]">
            Not a coder? No problem!
          </h3>
          <p className="mb-4 text-[var(--gray)]">
            Check out this quick tutorial to build and launch a site in under 20
            minutes using AI:
          </p>
          <div className="flex flex-col items-center space-y-2">
            <Link
              href="https://drive.google.com/file/d/1U4uU01H2p7SIRJpgeeOtDEzq90fIzr-g/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[var(--red)] hover:text-[var(--darkRed)]"
            >
              <span>📹 In-person recording</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://tinyurl.com/muwj9wy9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-[var(--red)] hover:text-[var(--darkRed)]"
            >
              <span>🔗 Quick tutorial</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
