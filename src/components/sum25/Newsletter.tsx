'use client'

import { useState } from 'react'
import { Container } from '@/components/sum25/Container'
import { BackgroundImage } from '@/components/BackgroundImage'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="relative"
    >
      <Container className="relative">
        {/* Background border + gradient */}
        <BackgroundImage
          position="left"
          className="absolute inset-0 rounded-lg border-2 border-[var(--darkRed)]"
        />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-4xl p-6 sm:px-12">
          <h2
            id="newsletter-title"
            className="font-display text-4xl font-bold tracking-tighter text-[var(--darkRed)] sm:text-5xl"
          >
            Stay Updated
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[var(--gray)]">
            Subscribe to our newsletter for the latest updates on the AI4Good
            event, including registration deadlines, workshop schedules, and
            success stories.
          </p>

          {/* Form */}
          <form className="mt-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-[var(--darkRed)]"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--red)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-[var(--darkRed)]"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--red)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-[var(--darkRed)]"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[var(--red)] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* Button aligned right */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-[var(--darkRed)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
