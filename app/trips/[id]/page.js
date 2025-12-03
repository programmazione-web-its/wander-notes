const getTrip = async (id) => {
  const res = await fetch(`http://localhost:3000/api/trips/${id}`)
  return res.json()
}

export default async function TripPage({ params }) {
  const { id } = await params
  const trip = await getTrip(id)

  return (
    <div className='container'>
      <h1>Single Trip {trip.title}</h1>
    </div>
  )
}
