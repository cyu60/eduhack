import { useRef, useEffect, useState } from 'react'
import { Globe } from 'lucide-react'

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`mb-8 w-full rounded-2xl border border-[var(--cream)] bg-white/80 p-8 text-center backdrop-blur-sm transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
    >
      <div className="mb-4 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--red)]">
          <Globe className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--darkRed)]">
          Your Mission
        </h2>
      </div>
      <p className="text-lg leading-relaxed text-[var(--gray)]">
        Build a simple website that shares your big idea:{' '}
        <strong>
          How can AI help a nonprofit of your choice make real-world impact?
        </strong>
      </p>
      <p className="mt-3 text-[var(--gray)]">
        No need to overthink the format – it's flexible and open-ended. Whether
        it's a 1-pager or a full roadmap, it's your voice, your vision.
      </p>
    </div>
  )
}
