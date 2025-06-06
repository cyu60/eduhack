import React from 'react'
import Link from 'next/link'
import '@/app/global.css'
import Image from 'next/image'
import headerLogo from '@/public/headerLogoWhite.png'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[var(--darkRed)] px-8 py-4">
      <div className="flex items-center">
        <Image src={headerLogo} alt="Edu<span>Hack" width={120} height={12} className="mr-2" />
        {/* <p className="mr-2 text-2xl font-bold text-white">
          Edu<span className="italic">Hack</span>
        </p> */}
      </div>

      <ul className="hidden space-x-8 lg:flex">
        {[
          { label: 'About', href: '#' },
          { label: 'Events', href: '#' },
          { label: 'Sponsors', href: '#' },
          { label: 'Contact', href: '#' },
        ].map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-white transition-colors hover:text-gray-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
