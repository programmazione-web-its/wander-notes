import Image from 'next/image'
import Link from 'next/link'

import Navbar from './Navbar'

export default function Header() {
  return (
    <header className='shadow-sm bg-primary/10 '>
      <div className='container py-3 lg:flex items-center justify-between'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='WanderNotes Logo'
            width='200'
            height='76'
          />
        </Link>
        <Navbar />
      </div>
    </header>
  )
}
