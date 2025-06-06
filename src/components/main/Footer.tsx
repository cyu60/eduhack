import { ReactNode } from 'react'

interface FooterLink {
    text: string
    href: string
}

interface FooterColumnProps {
    title: string
    links: FooterLink[]
}

interface FooterSectionProps {
    logo?: ReactNode
    name?: string
    columns?: FooterColumnProps[]
    copyright?: string
    policies?: FooterLink[]
    className?: string
}

export default function FooterSection({
    name = 'EduHack',
    columns = [
        {
        title: 'Event',
        links: [
            { text: 'About', href: '#' },
            { text: 'Schedule', href: '#' },
            { text: 'Register', href: '#' },
        ],
        },
        {
        title: 'Partners',
        links: [
            { text: 'Stanford ACL', href: '#' },
            { text: 'NGO Partners', href: '#' },
            { text: 'Technical Experts', href: '#' },
        ],
        },
        {
        title: 'Resources',
        links: [
            { text: 'FAQ', href: '#' },
            { text: 'Contact', href: '#' },
        ],
        },
    ],
    copyright = '© 2025 EduHack | All rights reserved',
    policies = [
        { text: 'Privacy Policy', href: '#' },
        { text: 'Terms of Service', href: '#' },
    ],
    className = '',
    }: FooterSectionProps) {
    return (
        <footer className="w-full bg-[var(--darkRed)] text-white">
        <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/4">
                <h3 className="text-2xl font-bold ">
                {name}
                </h3>
                <p className="mt-2 text-sm">
                A hackathon for educational innovation.
                </p>
            </div>

            <div className="flex w-full flex-col md:w-3/4 md:flex-row md:justify-end md:space-x-16">
                {columns.map((column) => (
                <div key={column.title} className="mt-8 min-w-[140px] md:mt-0">
                    <h4 className="text-md font-semibold tracking-wider uppercase">
                    {column.title}
                    </h4>
                    <ul className="mt-4 space-y-2">
                    {column.links.map((link) => (
                        <li key={link.text}>
                        <a
                            href={link.href}
                            className="text-sm hover:underline"
                        >
                            {link.text}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>

            {/* Bottom bar with copyright and policies */}
            <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row dark:border-gray-800">
            <p className="text-sm">
                {copyright}
            </p>
            <div className="mt-4 flex items-center gap-x-6 sm:mt-0">
                {policies.map((policy) => (
                <a
                    key={policy.text}
                    href={policy.href}
                    className="text-sm"
                >
                    {policy.text}
                </a>
                ))}
            </div>
            </div>
        </div>
        </footer>
    )
}
