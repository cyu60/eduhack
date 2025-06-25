// import { Hero } from '@/components/sum25/Hero'
// import { Newsletter } from '@/components/sum25/Newsletter'
// import { Schedule } from '@/components/Schedule'
// import { UpcomingSchedule } from '@/components/sum25/UpcomingSchedule'
// import Location from '@/components/sum25/Location'
// import { Speakers } from '@/components/sum25/Speakers'
// import { Sponsors } from '@/components/sum25/Sponsors'
// import { Schedule } from '@/components/sum25/Schedule'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/in-person')
  // return (
  //   <>
  //     <Hero />
  //     <Location />
  //     <Schedule />
  //     <Speakers />
  //     <Sponsors />
  //     {/* <Newsletter /> */}
  //   </>
  // )
}
