'use client'

import Link from 'next/link'
import { Header } from '@/components/sum25/Header'
import { Button } from '@/components/ui/button'

export default function Page() {
    return (
        <>
        <Header />
        {/* Full-screen intro */}
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="px-4 text-center">
            <h1 className="text-5xl font-bold">EduHack</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Stanford GSE's first hackathon bridging education and technology to
                create mutual impact. Students reimagine tools in the world of
                learning, organizations showcase their latest toolkits.
            </p>
            {/* scroll-to link */}
            <Link href="/sum25">
                <Button className="mt-8">Upcoming Event</Button>
            </Link>
            </div>
        </div>
        </>
    )
}
