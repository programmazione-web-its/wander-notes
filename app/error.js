'use client'
export default function BlogError({ error }) {
  return (
    <main className='error text-center'>
      <h1>An error occurred</h1>
      <p>Failed to fetch posts data. Please try again later.</p>
    </main>
  )
}