import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthBotton } from './components/auth-button'

export default async function Home () {
  const supabse = createServerComponentClient({ cookies })
  const { data: posts } = await supabse.from('posts').select()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthBotton />
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
