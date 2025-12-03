import TripCard from '@/components/TripCard'
import Button from '@/components/Button'

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/trips')
  const trips = await res.json()

  const recentTrips = trips
    ?.sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)

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
        <Button type='link' to='trips'>
          Discover all
        </Button>
      </div>
    </main>
  )
}
