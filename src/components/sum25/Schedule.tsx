'use client'

import { useEffect, useId, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/sum25/Container'

interface Day {
  date: React.ReactNode
  dateTime: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    start: string
    end: string
  }>
}

const schedule: Array<Day> = [
  {
    date: 'EduHack Workshop Day',
    dateTime: '2025-06-13',
    summary:
      'A hands-on workshop exploring AI tools in education through collaborative learning and experimentation.',
    timeSlots: [
      {
        name: 'Opening Ceremony & Kickoff',
        description:
          'Welcome & introductions, EduHack overview, panelist discussion on AI and education, team formation, and research consent information',
        start: '1:00PM',
        end: '1:45PM',
      },
      {
        name: 'Team Warm-Up + Icebreaker',
        description:
          'Form groups of 3 and share thoughts on tools that changed how you learn',
        start: '1:45PM',
        end: '2:00PM',
      },
      {
        name: 'Main Workshop: Vibe Coding with GPT',
        description:
          'Hands-on AI workshop building GPT-powered tools with mentor support',
        start: '2:00PM',
        end: '4:00PM',
      },
      {
        name: 'Midway Feedback + Peer Insights',
        description:
          'Progress check-ins, peer interaction survey, and optional team feedback',
        start: '4:00PM',
        end: '4:30PM',
      },
      {
        name: 'Rapid Team Showcase',
        description: '3-minute team demonstrations with peer judging',
        start: '4:30PM',
        end: '5:15PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-[var(--darkRed)]">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="text-base tracking-tight text-[var(--darkRed)]">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            PST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="py-8 sm:py-12"
    >
      <Container className="relative w-full px-0">
        <div className="mb-12 w-full text-center">
          <h2
            id="schedule-title"
            className="font-display text-5xl font-bold tracking-tighter text-[var(--darkRed,#b91c1c)]"
          >
            Event Schedule
          </h2>
        </div>
        <div className="flex w-full flex-col items-center">
          {schedule.map((day) => (
            <section key={day.dateTime} className="mx-auto w-full max-w-6xl">
              <div className="flex w-full flex-col px-6">
                {day.timeSlots.map((slot, idx) => (
                  <div
                    key={slot.start}
                    className="mb-6 flex flex-col items-center rounded-2xl border-2 border-[var(--red,#dc2626)] bg-white p-8 shadow-lg transition-transform hover:scale-105"
                  >
                    <h4 className="mb-2 text-center text-xl font-semibold text-[var(--red,#dc2626)]">
                      {slot.name}
                    </h4>
                    <p className="mb-4 text-center text-base text-[var(--darkRed,#b91c1c)]">
                      {slot.description}
                    </p>
                    <div className="rounded bg-[var(--lightRed,#ffe5e5)] px-4 py-2 font-mono text-sm text-[var(--gray,#4b4b4b)]">
                      <time dateTime={`${day.dateTime}T${slot.start}-08:00`}>
                        {slot.start}
                      </time>
                      {' — '}
                      <time dateTime={`${day.dateTime}T${slot.end}-08:00`}>
                        {slot.end}
                      </time>
                      {' PST'}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  )
}
