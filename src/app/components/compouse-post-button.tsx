'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ButtonArea () {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type="submit" className='bg-sky-500 text-sm font-blod rounded-full px-5 py-2 self-end diabled:opacity-40 disabled:pointer-events-none'>
        {pending ? 'Posteando...' : 'Postear'}
    </button>
  )
}
