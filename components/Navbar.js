'use client'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='uppercase lg:flex items-center gap-6'>
      <Link
        className='font-semibold hover:text-primary transition-colors'
        href='/about'
      >
        About
      </Link>
      <Link
        className='font-semibold hover:text-primary transition-colors'
        href='/trips'
      >
        Trips
      </Link>
      <Link
        className='font-semibold  hover:text-primary transition-colors'
        href='/contact'
      >
        Contact
      </Link>
    </nav>
  )
}
