import React from 'react'
import Link from 'next/link'
import '@/app/global.css'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[var(--darkRed)] px-8 py-2">
      <div className="flex items-center">
        <p className="mr-2 text-2xl font-bold text-white">
          Edu<span className="italic">Hack</span>
        </p>
      </div>

      <ul className="hidden space-x-8 lg:flex">
        {['About', 'Schedule', 'Partners', 'Register'].map((label) => (
          <li key={label}>
            <Link
              href={`/${label.toLowerCase()}`}
              className="text-white transition-colors hover:text-gray-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <Link
          href="/register"
          className="rounded-full border border-white px-6 py-2 text-white transition-colors hover:bg-white hover:text-gray-900"
        >
          Register Now
        </Link>
      </div>
    </nav>
  )
}
