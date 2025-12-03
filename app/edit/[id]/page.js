import Form from '@/components/Form'

const getTrip = async (id) => {
  const res = await fetch(`http://localhost:3000/api/trips/${id}`)
  return res.json()
}

export default async function EditTripPage({ params }) {
  const { id } = await params
  const trip = await getTrip(id)
  console.log('TIRP', trip)
  return (
    <div className='container '>
      <h1>Edit {trip.title} trip</h1>
      <Form fields={trip} />
    </div>
  )
}
