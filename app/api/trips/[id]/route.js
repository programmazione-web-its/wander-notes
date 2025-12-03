import { trips } from '@/data/trips'

export async function GET(req, context) {
  const params = await context.params

  const id = parseInt(params.id)

  const currentTrip = trips.find((el) => el.id === id)

  if (!currentTrip) {
    return Response.json({ error: 'Trip not found' }, { status: 404 })
  }

  return Response.json(currentTrip)
}

export async function PUT(req, context) {
  const updates = await req.json()

  const params = await context.params
  const id = parseInt(params.id)
  const tripIndex = trips.findIndex((el) => el.id === id)

  // Se non esiste, ritorna errore 404
  if (tripIndex === -1) {
    return new Response(JSON.stringify({ error: 'Trip not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  trips[tripIndex] = {
    ...trips[tripIndex],
    ...updates,
    id: parseInt(id),
  }

  return new Response(JSON.stringify(trips[tripIndex]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
