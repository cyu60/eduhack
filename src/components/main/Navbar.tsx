import React from 'react'
import Link from 'next/link'
import '@/app/global.css'

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-2 bg-[var(--darkRed)]">
            <div className="flex items-center">
                <p className="text-white text-2xl font-bold mr-2">Edu<span className="italic">Hack</span></p>
            </div>

            <ul className="hidden lg:flex space-x-8">
                {['About', 'Mission & Vision', 'Past Events'].map((label) => (
                <li key={label}>
                    <Link
                    href={`/${label.toLowerCase()}`}
                    className="text-white hover:text-gray-300 transition-colors"
                    >
                    {label}
                    </Link>
                </li>
                ))}
            </ul>

            <div className="flex items-center space-x-4">
                <Link
                    href="/login"
                    className="px-6 py-2 text-white border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
                >
                    Login
                </Link>
            </div>
        </nav>
    )
}
