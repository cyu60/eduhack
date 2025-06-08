'use client'

import { Navbar } from '@/components/main/Navbar'
import { Hero } from '@/components/main/Hero'
import { Content } from '@/components/main/Content'
import Footer from '@/components/main/Footer'

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </div>
    )
}
