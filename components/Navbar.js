'use client'

export default function Navbar() {
  return (
    <nav className='uppercase lg:flex items-center gap-6'>
      <a
        className='font-semibold hover:text-primary transition-colors'
        href='/about'
      >
        About
      </a>
      <a
        className='font-semibold hover:text-primary transition-colors'
        href='/about'
      >
        Trips
      </a>
      <a
        className='font-semibold  hover:text-primary transition-colors'
        href='/about'
      >
        Contact
      </a>
    </nav>
  )
}
