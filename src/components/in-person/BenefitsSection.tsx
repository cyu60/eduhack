import { Users, Trophy } from 'lucide-react'

export function BenefitsSection() {
  return (
    <div className="mb-8 w-full">
      <h2 className="text-2xl font-bold text-center text-[var(--darkRed)] mb-6">
        What You'll Get
      </h2>
      <div className="grid w-full gap-6 md:grid-cols-4">
        <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 text-center backdrop-blur-sm">
          <div className="mb-3 flex flex-col items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
              <Users className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-bold text-[var(--darkRed)]">
              Get Your Project Seen
            </h3>
          </div>
          <p className="text-[var(--gray)]">
            Get your project in front of real NGOs and mentors
          </p>
        </div>

        <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 text-center backdrop-blur-sm">
          <div className="mb-3 flex flex-col items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-bold text-[var(--darkRed)]">
              Compete for Prizes
            </h3>
          </div>
          <p className="text-[var(--gray)]">
            Win internship offers from leading EdTech NGOs!
          </p>
        </div>

        <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 text-center backdrop-blur-sm">
          <div className="mb-3 flex flex-col items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
              <span className="text-sm font-bold text-white">💼</span>
            </div>
            <h3 className="font-bold text-[var(--darkRed)]">
              Build Your Portfolio
            </h3>
          </div>
          <p className="text-[var(--gray)]">
            Add an impactful project to your resume
          </p>
        </div>

        <div className="rounded-xl border border-[var(--cream)] bg-white/80 p-6 text-center backdrop-blur-sm">
          <div className="mb-3 flex flex-col items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--red)]">
              <span className="text-sm font-bold text-white">🌎</span>
            </div>
            <h3 className="font-bold text-[var(--darkRed)]">
              Connect & Collaborate
            </h3>
          </div>
          <p className="text-[var(--gray)]">Meet like-minded changemakers</p>
        </div>
      </div>
    </div>
  )
}
