import { Hero } from '@/components/sum25/Hero'
import { Newsletter } from '@/components/sum25/Newsletter'
// import { Schedule } from '@/components/Schedule'
import { UpcomingSchedule } from '@/components/sum25/UpcomingSchedule'
import { Speakers } from '@/components/sum25/Speakers'
import { Sponsors } from '@/components/sum25/Sponsors'

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
