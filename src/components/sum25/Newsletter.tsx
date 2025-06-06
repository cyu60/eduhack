'use client'

import { useState } from 'react'
import { Container } from '@/components/sum25/Container'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-title"
      className="py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 overflow-hidden opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom, transparent, var(--bgRed))`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to left, transparent, var(--cream, --bgRed))`,
          }}
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2
            id="newsletter-title"
            className="font-display text-4xl font-medium tracking-tighter text-[var(--red)] sm:text-5xl"
          >
            Stay Updated
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-[var(--gray)]">
            Subscribe to our newsletter for the latest updates on the AI4Good
            event, including registration deadlines, workshop schedules, and
            success stories.
          </p>
        </div>
        <form className="mx-auto mt-10 max-w-2xl lg:mx-0">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm leading-6 font-semibold text-[var(--darkRed)]"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--red)] focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm leading-6 font-semibold text-[var(--darkRed)]"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--red)] focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-semibold text-[var(--darkRed)]"
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--darkRed)] shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--red)] focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[var(--red)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[var(--darkRed)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}
