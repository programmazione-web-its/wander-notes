'use server'

export default async function createTrip(formData) {
  const trip = {
    title: formData.get('title'),
    date: formData.get('date'),
    description: formData.get('description'),
    location: formData.get('location'),
  }

  const res = await fetch('http://localhost:3000/api/trips', {
    method: 'POST',
    body: JSON.stringify(trip),
  })

  return { success: true, message: `Trip "${trip.title}" saved!` }
}
