import Image from 'next/image'
import Link from 'next/link'
export default function TripCard({ trip }) {
  return (
    <Link href={`trips/${trip.id}`}>
      <div className='group bg-primary/10'>
        <div className='overflow-hidden aspect-square'>
          {trip.image && (
            <Image
              src={trip.image}
              alt={trip.title}
              width={trip.image.width || 400}
              height={trip.image.height || 400}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000'
            />
          )}
        </div>
        <div className='p-4'>
          <h2 className='my-4 text-2xl font-bold text-primary'>{trip.title}</h2>
          <div className='flex justify-between items-center my-4 text-sm'>
            <p>{trip.date}</p>
            <p>{trip.location}</p>
          </div>
          <p className='text-foreground'>{trip.description}</p>
        </div>
      </div>
    </Link>
  )
}
