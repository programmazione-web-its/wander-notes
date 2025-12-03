'use server'

import { redirect } from 'next/navigation'

export async function createTrip(formData) {
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

export async function editTrip(formData) {
  const id = formData.get('id')
  const trip = {
    title: formData.get('title'),
    date: formData.get('date'),
    description: formData.get('description'),
    location: formData.get('location'),
  }

  const res = await fetch(`http://localhost:3000/api/trips/${id}`, {
    method: 'PUT',
    body: JSON.stringify(trip),
  })

  redirect(`/trips/${id}`)
}
