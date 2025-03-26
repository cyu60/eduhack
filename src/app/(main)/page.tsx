import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
// import { Schedule } from '@/components/Schedule'
import { UpcomingSchedule } from '@/components/UpcomingSchedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Speakers />
      <UpcomingSchedule />
      <Sponsors />
      <Newsletter />
    </>
  )
}
