import { Hero } from '@/components/sum25/Hero'
import { Newsletter } from '@/components/sum25/Newsletter'
// import { Schedule } from '@/components/Schedule'
// import { UpcomingSchedule } from '@/components/sum25/UpcomingSchedule'
import Location from '@/components/sum25/Location'
import { Speakers } from '@/components/sum25/Speakers'
import { Sponsors } from '@/components/sum25/Sponsors'

export default function Home() {
  return (
    <>
      <Hero />
      <Location />
      <Speakers />
      {/* <UpcomingSchedule /> */}
      <Sponsors />
      {/* <Newsletter /> */}
    </>
  )
}
