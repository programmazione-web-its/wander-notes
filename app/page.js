import { trips } from './api/trips/route'
import TripCard from '@/components/TripCard'
import Button from '@/components/Button'

export default function Home() {
  const recentTrips = trips

  return (
    <main className=' min-h-screen w-full container'>
      <h1 className='text-4xl text-center font-bold my-8'>Upcoming Trips</h1>
      {recentTrips && (
        <div className='md:grid md:grid-cols-3  gap-4 mx-auto '>
          {recentTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
      <div className='text-center my-8'>
        <Button>Discover all</Button>
      </div>
    </main>
  )
}
