'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/sum25/Container'
import { DiamondIcon } from '@/components/sum25/DiamondIcon'

const data = [
  {
    name: 'NGO Partners',
    date: 'Phase I',
    dateTime: '2024-06-18',
    speakers: [
      {
        name: 'Lu Meng',
        role: 'Programme Coordinator at UNITAR',
        image: '/images/speakers/lu-meng.jpg',
        linkedin: 'https://www.linkedin.com/in/lu-meng-unitar/',
      },
      {
        name: 'Khaulat Abdulhakeem',
        role: 'Founder at Khaulat Abode',
        image: '/images/speakers/khaulat.jpg',
        linkedin: 'https://www.linkedin.com/in/khaulat/',
      },
      {
        name: 'Jodie Anderson Jr.',
        role: 'Co-Founder at rézme',
        image: '/images/speakers/jodi.jpg',
        linkedin: 'https://www.linkedin.com/in/jodieous/',
      },
      {
        name: 'Jessica Ann',
        role: 'Stanford AI Tinker',
        image: '/images/speakers/jann.jpg',
        linkedin: 'https://www.linkedin.com/in/howdyjann/',
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-[var(--red)] sm:text-5xl"
          >
            Meet Our Partners and Mentors
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[var(--gray)]">
            Connect with NGO partners, technical experts, and experienced
            mentors who will guide you through the AI4Good journey, from
            ideation to implementation.
          </p>
        </div>

        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {data.map((data, dataIndex) => (
                    <div key={data.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          'absolute top-[0.5625rem] left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block',
                          dataIndex === selectedIndex
                            ? 'fill-[var(--red)] stroke-[var(--red)]'
                            : 'fill-transparent stroke-slate-400',
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dataIndex === selectedIndex
                              ? 'text-[var(--red)]'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {data.name}
                          </Tab>
                        </div>
                        <time
                          dateTime={data.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-[var(--darkRed)]"
                        >
                          {data.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {data.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="block group cursor-pointer">
                      <div className="relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <div
                          className={clsx(
                            'absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                            [
                              'border-red-800',
                              'border-red-800',
                              'border-red-800',
                            ][speakerIndex % 3],
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                        >
                          <Image
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={speaker.image}
                            alt={speaker.name}
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                            width={400}
                            height={400}
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900 group-hover:text-[var(--red)]">
                        {speaker.name}
                      </h3>
                      <p className="mt-1 text-base tracking-tight text-slate-500">
                        {speaker.role}
                      </p>
                    </a>
                  </div>
                ))}
                <div>
                  <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                    More Coming Soon!
                  </h3>
                  <p className="mt-1 text-base tracking-tight text-slate-500">
                    Stay tuned as we announce more amazing partners and mentors
                  </p>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  )
}
