import Link from 'next/link'

export function CTAButtons() {
  return (
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href="https://www.mentormates.ai/events/eduhack/overview"
        className="inline-flex items-center justify-center rounded-md bg-[var(--darkRed)] px-8 py-3 text-lg font-semibold text-white hover:bg-[var(--red)]"
      >
        Register Now
      </Link>
      <Link
        href="https://discord.gg/vun48XqWsz"
        className="inline-flex items-center justify-center rounded-md bg-[var(--cream)] px-8 py-3 text-lg font-semibold text-[var(--darkRed)] hover:bg-[var(--red)] hover:text-white"
      >
        Join Discord
      </Link>
    </div>
  )
}
