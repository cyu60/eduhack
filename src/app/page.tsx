import Link from 'next/link'
import { Button } from '@/components/Button'

export default function Page() {
    return (
        <>
        {/* Full-screen intro */}
        <div className="flex h-screen w-full items-center justify-center bg-white">
            <div className="text-center px-4">
            <h1 className="text-5xl font-bold">EduHack</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Stanford GSE's first hackathon bridging education and technology to
                create mutual impact. Students reimagine tools in the world of learning,
                organizations showcase their latest toolkits.
            </p>
            {/* scroll-to link */}
            <Button href="#event" className="mt-8">
                Upcoming Event
            </Button>
            </div>
        </div>

        </>
    )
}
