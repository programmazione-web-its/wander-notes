import TripCard from "@/components/TripCard"
export default async function TripsPage() {

    const res = await fetch('http://localhost:3000/api/trips')
    const trips = await res.json()

    const sortedTrips = trips?.sort((a, b) => new Date(b.date) - new Date(a.date))

    return <div className="container my-16">
        <h1>Trips</h1>
        {sortedTrips && (
            <div className='md:grid md:grid-cols-3  gap-4 mx-auto '>
                {sortedTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))}
            </div>
        )}
    </div>
}