import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function TutorialSection() {
  return (
    <div className="mb-8 w-full rounded-2xl bg-gradient-to-r from-[var(--cream)] to-[var(--white)] p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--red)]">
          <span className="text-lg font-bold text-white">💡</span>
        </div>
        <div className="w-full">
          <h3 className="mb-2 text-xl font-bold text-[var(--darkRed)]">
            Not a coder? No problem!
          </h3>
          <p className="mb-4 text-[var(--gray)]">
            Check out this quick tutorial to build and launch a site in under 20
            minutes using AI:
          </p>
          <div className="h-px w-full bg-[var(--cream)] mb-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="rounded-lg border border-[var(--cream)] p-4">
              <h4 className="mb-2 font-semibold text-[var(--red)]">📹 In-person recording</h4>
              <iframe 
                src="https://drive.google.com/file/d/1U4uU01H2p7SIRJpgeeOtDEzq90fIzr-g/preview"
                className="w-full aspect-video rounded-lg"
                allow="autoplay"
              ></iframe>
            </div>
            <div className="rounded-lg border border-[var(--cream)] p-4">
              <h4 className="mb-2 font-semibold text-[var(--red)]">🔗 Quick tutorial</h4>
              <iframe
                src="https://tinyurl.com/muwj9wy9"
                className="w-full aspect-video rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
