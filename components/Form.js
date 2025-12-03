'use client'

import { useFormStatus } from 'react-dom'
import { editTrip, createTrip } from '@/app/lib/actions'
import Button from './Button'

export function SubmitButton({ title }) {
  const { pending } = useFormStatus()
  return (
    <Button type='submit' className='my-4'>
      {pending ? 'Please wait...' : title}
    </Button>
  )
}

export default function Form({ fields = null }) {
  return (
    <div className='bg-primary/10 p-4 form-wrapper w-lg mx-auto'>
      <form action={fields ? editTrip : createTrip}>
        <div>
          <label htmlFor='name'>Title</label>
          <input name='title' type='text' defaultValue={fields?.title} />
        </div>

        <div>
          <label htmlFor='date'>Date</label>
          <input name='date' type='date' defaultValue={fields?.date} />
        </div>

        <div>
          <label htmlFor='location'>Location</label>
          <input name='location' type='text' defaultValue={fields?.location} />
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            rows='10'
            defaultValue={fields?.description}
          />
        </div>
        {fields && <input type='hidden' name='id' value={fields.id} />}
        <SubmitButton title={fields ? 'Save changes' : 'Add trip'} />
      </form>
    </div>
  )
}
