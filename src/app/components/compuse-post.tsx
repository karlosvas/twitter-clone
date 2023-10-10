'use client'

import { ButtonArea } from './compouse-post-button'
import { addPost } from '@/app/actions/add-post-action'
import { useRef } from 'react'

export function CompousePost ({
  userAvatarUrl
}: {
  userAvatarUrl: string
}) {
  const formRef = useRef<HTMLFormElement>(null)
  return (
        <form ref={formRef} action={async (formData) => {
          await addPost(formData)
          formRef.current?.reset()
        }} className='flex flex-row p-4 border-b border-white/20'>
            <img className="rounded-full w-10 h-10 object-contain mr-4" src={ userAvatarUrl } />
            <div className='flex flex-1 flex-col gap-y-4'>
            <textarea
            name="content"
            rows={4}
            className="w-full text-1xl bg-black placeholder-gray-500 p-2"
            placeholder="¿What's going on?"
            ></textarea>
                <ButtonArea />
            </div>
        </form>
  )
}
