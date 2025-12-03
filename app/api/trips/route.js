import { trips } from '@/data/trips'
export async function GET() {
  return new Response(JSON.stringify(trips), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(req) {
  const newTrip = await req.json() // leggi i dati inviati dal client
  newTrip.id = trips.length + 1
  trips.push(newTrip)

  console.log('happening')

  return new Response(JSON.stringify(newTrip), { status: 201 })
}
