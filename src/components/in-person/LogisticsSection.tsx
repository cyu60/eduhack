import { Calendar } from 'lucide-react'

export function LogisticsSection() {
  return (
    <div className="mb-8 w-full rounded-2xl bg-[var(--navy)] p-6 text-center text-white">
      <div className="mb-4 flex items-center justify-center gap-3">
        <Calendar className="h-6 w-6" />
        <h3 className="text-xl font-bold">Logistics at a Glance</h3>
      </div>
      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div>
          <p>
            <strong>Deadline:</strong> July 1, 2025 (Extended from June 27,
            2025)
          </p>
          <p>
            <strong>Team Size:</strong> Join solo or in a team (up to 3 people)
          </p>
        </div>
        <div>
          <p>
            <strong>Format:</strong> Checklist = optional. Your creativity =
            required.
          </p>
          <p>
            <strong>Goal:</strong> Reimagine the future of social impact—powered
            by your ideas and AI.
          </p>
        </div>
      </div>
    </div>
  )
}
