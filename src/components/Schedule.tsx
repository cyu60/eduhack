'use client'

import { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

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
    date: 'June 7',
    dateTime: '2024-06-07',
    summary:
      'Opening day focused on team formation, challenge introductions, and initial workshops.',
    timeSlots: [
      {
        name: 'Opening Ceremony',
        description: 'Introduction to organizations and challenges',
        start: '9:00AM',
        end: '10:00AM',
      },
      {
        name: 'Team Formation',
        description: 'Form teams and initial planning',
        start: '10:00AM',
        end: '11:00AM',
      },
      {
        name: 'Workshop: GSE Instructor Session',
        description: 'Led by Sanne Smith (EDS Program Director)',
        start: '11:00AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch Break',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Workshop: Tech Integration',
        description: 'Hands-on guidance with organization tools',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Project Work Time',
        description: 'Teams work on solutions with mentor support',
        start: '2:00PM',
        end: '5:00PM',
      },
      {
        name: 'Day 1 Wrap-up',
        description: 'Progress check and next day planning',
        start: '5:00PM',
        end: '6:00PM',
      },
    ],
  },
  {
    date: 'June 8',
    dateTime: '2024-06-08',
    summary:
      'Development and presentation day with final workshops and project showcase.',
    timeSlots: [
      {
        name: 'Morning Check-in',
        description: 'Team progress updates',
        start: '9:00AM',
        end: '9:30AM',
      },
      {
        name: 'Workshop: Prof. Keith Bowen',
        description: 'Research insights and applications',
        start: '9:30AM',
        end: '10:30AM',
      },
      {
        name: 'Project Work Time',
        description: 'Final development sprint',
        start: '10:30AM',
        end: '12:00PM',
      },
      {
        name: 'Lunch Break',
        description: null,
        start: '12:00PM',
        end: '1:00PM',
      },
      {
        name: 'Project Completion',
        description: 'Finalize solutions and prepare presentations',
        start: '1:00PM',
        end: '2:00PM',
      },
      {
        name: 'Project Presentations',
        description: 'Teams present to judges',
        start: '2:00PM',
        end: '4:00PM',
      },
      {
        name: 'Closing Ceremony',
        description: 'Winners announcement and celebrations',
        start: '4:00PM',
        end: '5:00PM',
      },
    ],
  },
  {
    date: 'Online Phase',
    dateTime: '2024-06-09',
    summary:
      'Two-week open call for global participants to submit their proposals.',
    timeSlots: [
      {
        name: 'Submission Period Opens',
        description: 'Global call for proposals begins',
        start: 'June 9',
        end: 'Aug 9',
      },
      {
        name: 'Online Mentorship',
        description: 'Virtual support from organizations',
        start: 'June',
        end: 'August',
      },
      {
        name: 'Final Submissions',
        description: 'Deadline for all proposals',
        start: 'Aug 9',
        end: 'Aug 9',
      },
      {
        name: 'Evaluation Period',
        description: 'Judging and assessment',
        start: 'Aug 10',
        end: 'Aug 20',
      },
      {
        name: 'Winners Announcement',
        description: 'Final results and awards',
        start: 'Aug 21',
        end: 'Aug 21',
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
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
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
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            A transformative journey from in-person innovation to global impact.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Join us for an intensive weekend at Stanford GSE, followed by a
            two-week global open call to reimagine the future of education
            through technology.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
