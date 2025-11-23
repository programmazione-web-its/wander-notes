'use client'

import { useFormStatus } from 'react-dom'

import createTrip from '@/app/lib/actions'
import Button from './Button'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' className='my-4'>
      {pending ? 'Please wait...' : 'Add trip'}
    </Button>
  )
}

export default function Form() {
  return (
    <div className='bg-primary/10 p-4 form-wrapper w-lg mx-auto'>
      <form action={createTrip}>
        <div className=''>
          <label htmlFor='name'>Title</label>
          <input name='title' type='text' />
        </div>
        <div className=''>
          <label htmlFor='date'>Date</label>
          <input name='date' type='date' />
        </div>
        <div className=''>
          <label htmlFor='location'>Location</label>
          <input name='location' type='text' />
        </div>
        <div className=''>
          <label htmlFor='description'>Description</label>
          <textarea name='description' rows='10' />
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}
