'use client'

import { Navbar } from '@/components/main/Navbar'
import { Hero } from '@/components/main/Hero'
import Footer from '@/components/main/Footer'

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    )
}
