const getTrip = async (id) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    return res.json()
}


export default async function TripPage({params}) {
    const {tripId} = await params
    const trip = await getTrip(tripId)
    console.log("TRIP", trip)
    return <div className="container"><h1>Single Trip</h1></div>
}