'use server'

import { redirect } from "next/navigation"

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

  redirect('/trips')
}
