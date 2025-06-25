import { Calendar, ArrowDown } from 'lucide-react'

export function LogisticsSection() {
  return (
    <div className="mb-8 w-full">
      <div className="mb-6 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--red)]">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--darkRed)]">Key Details</h2>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-2xl rounded-xl border border-[var(--cream)] bg-[#1a1f36] p-6">
          <h3 className="mb-3 font-bold text-white">Timeline</h3>
          <p className="text-gray-300">
            <strong>Final Deadline:</strong> July 1, 2025
          </p>
          <p className="mt-1 text-sm text-gray-400">
            (Extended from original June 27 deadline)
          </p>
        </div>

        <ArrowDown className="h-6 w-6 text-[var(--red)]" />

        <div className="w-full max-w-2xl rounded-xl border border-[var(--cream)] bg-[#1a1f36] p-6">
          <h3 className="mb-3 font-bold text-white">Team Structure</h3>
          <p className="text-gray-300">
            Work independently or form a team of up to 3 people
          </p>
        </div>

        <ArrowDown className="h-6 w-6 text-[var(--red)]" />

        <div className="w-full max-w-2xl rounded-xl border border-[var(--cream)] bg-[#1a1f36] p-6">
          <h3 className="mb-3 font-bold text-white">Project Format & Mission</h3>
          <p className="text-gray-300">
            Express your ideas freely to reimagine how AI can create meaningful social impact - no strict format requirements
          </p>
        </div>
      </div>
    </div>
  )
}
