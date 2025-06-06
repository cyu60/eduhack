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
    date: 'Phase I: Launch Meeting',
    dateTime: '2024-06-18',
    summary:
      'Opening day focused on event introduction, NGO needs sharing, and team building.',
    timeSlots: [
      {
        name: 'Event Introduction',
        description: 'Overview of AI4Good event and objectives',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'NGO Partner Presentations',
        description: 'Sharing real work scenarios and technical requirements',
        start: '10:00AM',
        end: '11:30AM',
      },
      {
        name: 'Technical Expert Keynote',
        description: 'Insights on AI applications in social welfare',
        start: '11:30AM',
        end: '12:30PM',
      },
      {
        name: 'Lunch Break',
        description: null,
        start: '12:30PM',
        end: '1:30PM',
      },
      {
        name: 'Team Formation',
        description: 'Connect with like-minded participants',
        start: '1:30PM',
        end: '2:30PM',
      },
      {
        name: 'Initial Planning',
        description: 'Teams begin planning their AI solutions',
        start: '2:30PM',
        end: '4:00PM',
      },
      {
        name: 'Closing Remarks',
        description: 'Next steps and competition guidelines',
        start: '4:00PM',
        end: '5:00PM',
      },
    ],
  },
  {
    date: 'Phase II: Design Competition',
    dateTime: '2024-06-19',
    summary: 'Two-week online competition to design AI solutions for NGOs.',
    timeSlots: [
      {
        name: 'Competition Start',
        description: 'Begin designing web pages and applications',
        start: 'June 19',
        end: 'June 19',
      },
      {
        name: 'Online Mentorship',
        description: 'Virtual support from technical experts',
        start: 'June 19',
        end: 'July 2',
      },
      {
        name: 'Progress Check-ins',
        description: 'Regular updates with mentors',
        start: 'June 25',
        end: 'June 25',
      },
      {
        name: 'Final Submissions',
        description: 'Deadline for all project submissions',
        start: 'July 2',
        end: 'July 2',
      },
      {
        name: 'Project Evaluation',
        description: 'Review by NGO partners and experts',
        start: 'July 3',
        end: 'July 5',
      },
    ],
  },
  {
    date: 'Phase III: Internship',
    dateTime: '2024-07-08',
    summary:
      'Selected participants receive NGO internship opportunities to implement their solutions.',
    timeSlots: [
      {
        name: 'Internship Selection',
        description: 'NGOs select outstanding participants',
        start: 'July 8',
        end: 'July 12',
      },
      {
        name: 'Implementation Planning',
        description: 'Prepare for solution deployment',
        start: 'July 15',
        end: 'July 19',
      },
      {
        name: 'Solution Development',
        description: 'Implement and optimize AI solutions',
        start: 'July 22',
        end: 'August 16',
      },
      {
        name: 'Testing & Validation',
        description: 'Verify solutions in real-world environment',
        start: 'August 19',
        end: 'August 23',
      },
      {
        name: 'Final Presentation',
        description: 'Showcase implemented solutions',
        start: 'August 26',
        end: 'August 30',
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
      className="py-20 sm:py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="schedule-title"
            className="font-display text-4xl font-medium tracking-tighter text-[var(--red)] sm:text-5xl"
          >
            Event Schedule
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[var(--gray)]">
            Join us for three exciting phases of the AI4Good event, from launch
            to implementation.
          </p>
        </div>
        <div className="mt-14 lg:mt-16">
          <ScheduleTabbed />
          <ScheduleStatic />
        </div>
      </Container>
    </section>
  )
}
