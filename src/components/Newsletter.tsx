"use client"

import { Button } from "@/components/Button"
import { Container } from "@/components/Container"
import { BackgroundImage } from "@/components/BackgroundImage"

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-grey-100/50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <BackgroundImage className="absolute inset-0" position="left" />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-[var(--darkRed)] sm:text-5xl">
                Join the Innovation
              </p>
              <p className="mt-4 text-lg tracking-tight text-[var(--darkRed)]">
                Stay updated on EduHack events, sponsorship opportunities, and be the
                first to know when registration opens for both in-person and online phases.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-[var(--darkRed)]">
                Subscribe to our updates <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-[var(--darkRed)]">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Subscribe</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
              <p className="mt-3 text-sm text-red-900/60">
                Get notified about registration deadlines, workshops, and sponsorship opportunities.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
