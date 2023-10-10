import PostCard from './post-card'

export function PostLists ({ posts }) {
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
