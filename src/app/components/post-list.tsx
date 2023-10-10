import PostCard from './post-card'
import { type Post } from '@/app/types/post'

export function PostLists ({ posts }: { posts: Post[] | null }) {
  return (
        <>
        {
            posts?.map(post => {
              const {
                id,
                user,
                contenido: content
              } = post

              const {
                user_name: userName,
                name: userFullName,
                avatar_url: avatarUrl
              } = user

              return (
                <PostCard
                userName={userName}
                content={content}
                key={id}
                userFullName={userFullName}
                avatarUrl={avatarUrl}/>
              )
            })
          }
        </>
  )
}
